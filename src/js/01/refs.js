const getEl = selector => document.querySelector(selector);

export const fromSelectEl = getEl('[data-firstSelect]');
export const toSelectEl = getEl('[data-secondSelect]');
export const fromInputEl = getEl('[data-firstInput]');
export const toInputEl = getEl('[data-secondInput]');
