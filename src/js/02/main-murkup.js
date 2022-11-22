export function mainMarkup(arr) {
  return arr
    .map(({ name, mail, rating, status }) => {
      return `<li class="list"> 
   <p class="info"><b>Name</b>: ${name}.</p>
      <p class="info"><b>Mail</b>: ${mail}.</p>
      <p class="info"><b>Rating</b>: ${rating}.</p>
      <p class="info"><b>Status</b>: ${status}.</p>
      </li>`;
    })
    .join('');
}
