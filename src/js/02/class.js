export class Filter {
  constructor(data, filter, list, filterName, sortBy) {
    this.data = data;
    this.filterEl = filter;
    this.listEl = list;
    this.filterName = filterName;
    this.sortBy = sortBy;
  }

  dataFilter_1 = evt => {
    return this.data
      .filter(data => {
        if (this.filterName === 'status') {
          return String(data[this.filterName]).includes(evt);
        } else {
          return data[this.filterName]
            .toLowerCase()
            .includes(evt.toLowerCase());
        }
      })
      .sort((a, b) => a[this.sortBy] - b[this.sortBy]);
  };

  markup = (callback, evt) => {
    const data = callback(evt);
    const markup = data
      .map(({ name, mail, rating, status }) => {
        return `<li> 
      <p>Name: ${name}.</p>
      <p>Mail: ${mail}.</p>
      <p>Rating: ${rating}.</p>
      <p>Status: ${status}.</p>
      </li>`;
      })
      .join('');
    if (evt === '') {
      return (this.listEl.innerHTML = '');
    }
    this.listEl.innerHTML = markup;
  };

  addListeners = () => {
    this.filterEl.addEventListener('input', evt => {
      const filtr = evt.target.value;
      this.markup(this.dataFilter_1, filtr);
    });
  };
  init = () => {
    this.addListeners();
  };
}
