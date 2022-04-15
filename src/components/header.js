
 // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  const Header = (title, date, temp) => {
const mainHead = document.createElement('div');
const dateHead = document.createElement('span');
const h1Head = document.createElement('h1');
const tempHead = document.createElement('span');

mainHead.classList.add('header');
dateHead.classList.add('date');
tempHead.classList.add('temp');

dateHead.textContent =  date;
h1Head.textContent =  title; 
tempHead.textContent =  temp;

mainHead.appendChild(dateHead);
mainHead.appendChild(h1Head);
mainHead.appendChild(tempHead);

return mainHead;

}



// TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //

const headerAppender = (selector) => {

  const parentElem = document.querySelector(selector);
  parentElem.appendChild(Header('Casey Times', 'January 6, 2021', '26°'));

  return parentElem;
  
}

export { Header, headerAppender }
