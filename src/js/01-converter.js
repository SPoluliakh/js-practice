import json from '../json/fake-api-01.json' assert { type: 'json' };

const getEl = selector => document.querySelector(selector);
const refs = {
  fromSelectEl: getEl('[data-firstSelect]'),
  toSelectEl: getEl('[data-secondSelect]'),
  fromInputEl: getEl('[data-firstInput]'),
  toInputEl: getEl('[data-secondInput]'),
};
const { options, distance } = json;
let isAmount = true;
const optionsVariants = makeOptions(options);
refs.fromSelectEl.innerHTML = optionsVariants;
refs.toSelectEl.innerHTML = optionsVariants;

refs.fromInputEl.addEventListener('input', () => {
  isAmount = true;
  countDifference();
});

refs.toInputEl.addEventListener('input', () => {
  isAmount = false;
  countDifference();
});

refs.fromSelectEl.addEventListener('change', () => {
  countDifference();
});

refs.toSelectEl.addEventListener('change', () => {
  countDifference();
});

function makeOptions(arr) {
  const options = arr.map(el => {
    return `<option value=${el}>${el}</option>`;
  });
  return options.join('');
}

function countDifference() {
  if (refs.toInputEl.value < 0 || refs.fromInputEl.value < 0) {
    refs.toInputEl.value = 0;
    refs.fromInputEl.value = 0;
  }
  const from = distance[refs.fromSelectEl.value];
  const to = distance[refs.toSelectEl.value];
  const difference = to / from;

  if (isAmount) {
    refs.toInputEl.value = refs.fromInputEl.value * difference;
  } else {
    refs.fromInputEl.value = refs.toInputEl.value / difference;
  }
}
