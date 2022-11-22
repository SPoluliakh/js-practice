export function mainMarkup(arr) {
  return arr
    .map(({ name, mail, rating, status }) => {
      return `<li> 
      <p>Name: ${name}.</p>
      <p>Mail: ${mail}.</p>
      <p>Rating: ${rating}.</p>
      <p>Status: ${status}.</p>
      </li>`;
    })
    .join('');
}
