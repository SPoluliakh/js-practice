import json from '../../json/fake-api-01.json';
import { fromSelectEl, toSelectEl, fromInputEl, toInputEl } from './refs';
const { options, distance } = json;

class Converter {
  #isAmount = true;
  constructor(
    fromSelectEl,
    toSelectEl,
    fromInputEl,
    toInputEl,
    options,
    distance
  ) {
    this.fromSelectEl = fromSelectEl;
    this.toSelectEl = toSelectEl;
    this.fromInputEl = fromInputEl;
    this.toInputEl = toInputEl;
    this.options = options;
    this.distance = distance;
  }

  addListeners = () => {
    this.fromInputEl.addEventListener('input', () => {
      this.#isAmount = true;
      this.countDifference();
    });
    this.toInputEl.addEventListener('input', () => {
      this.#isAmount = false;
      this.countDifference();
    });
    this.fromSelectEl.addEventListener('change', () => {
      this.countDifference();
    });
    this.toSelectEl.addEventListener('change', () => {
      this.countDifference();
    });
  };

  makeOptions = arr => {
    const options = arr.map(el => {
      return `<option value=${el}>${el}</option>`;
    });
    return options.join('');
  };

  countDifference = () => {
    if (this.toInputEl.value < 0 || this.fromInputEl.value < 0) {
      this.toInputEl.value = 0;
      this.fromInputEl.value = 0;
      return;
    }
    const from = this.distance[this.fromSelectEl.value];
    const to = this.distance[this.toSelectEl.value];
    const difference = to / from;

    if (this.#isAmount) {
      this.toInputEl.value = this.fromInputEl.value * difference;
    } else {
      this.fromInputEl.value = this.toInputEl.value / difference;
    }
  };
  init = () => {
    this.fromSelectEl.innerHTML = this.makeOptions(this.options);
    this.toSelectEl.innerHTML = this.makeOptions(this.options);
    this.addListeners();
  };
}
new Converter(
  fromSelectEl,
  toSelectEl,
  fromInputEl,
  toInputEl,
  options,
  distance
).init();
