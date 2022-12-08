let container = document.getElementById("container2");
let listArr = [];

// AUGMENTING DOM FUNCTIONS - CAREFUL

Element.prototype.remove = function () {
  this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function () {
  for (var i = this.length - 1; i >= 0; i--) {
    if (this[i] && this[i].parentElement) {
      this[i].parentElement.removeChild(this[i]);
    }
  }
}

// END AUGMENTED DOM FUNCTIONS

// let testFunc = function () {
//   let userInput = document.getElementById('testInput').value;
//   console.log(`${userInput}`)
// }

let testAdd = function (index) {
  let stringDiv = document.getElementById(`box${index + 1}`).innerText;

  let duplicateCheck = true;
  for (let i = 0; i <= listArr.length; i++) {
    if (stringDiv === listArr[i]) {
      duplicateCheck = false;
    }
  }
  if (duplicateCheck === true) {
    listArr.push(stringDiv);
    container.insertAdjacentHTML("afterend", `<p id="list-${stringDiv}">${stringDiv}</p>`)
  }
  duplicateCheck = true;
}

const mappedList = listArr.map((el, index) => {
  console.log('we made it')
  return (
    `<p>${el}</p>`
  )
})

let testDelete = function (index) {
  let stringDiv = document.getElementById(`box${index + 1}`).innerText;

  // CURRENT PROBLEM - ELEMENTS ARE CREATED WITH IDS ATTACHED TO THEIR POSITION IN THE ARRAY.

  for (let i = 0; i <= listArr.length; i++) {
    if (stringDiv === listArr[i]) {
      listArr.splice(i, 1);
      document.getElementById(`list-${stringDiv}`).remove();
      console.log(listArr);
    }
  }
}


function loadSearchData() {
  let products = [
      'Keychron K8 Wireless Mechanical Keyboard',
      'Redragon K552 Mechanical Gaming Keyboard RGB LED',
      'Logitech G915 TKL Wireless Gaming Keyboard',
      'Galdas Gaming Mouse Pad',
      'RGB Gaming Mouse Pad, Gerlos Large',
      'Razer Goliathus Extended Chroma Gaming Mousepad: Customizable Chroma RGB Lighting',
      'Glorious Gaming Model O Wireless Gaming Mouse RGB with Lights',
      'Razer Viper V2 Pro HyperSpeed Wireless Gaming Mouse: 59g, wireless, 80 hour battery life',
      'Logitech G502 HERO High Performance Wired Gaming Mouse'
  ]
  
  let link = 'https://www.google.com';
  
  // Get the HTML element of the list
  let list = document.getElementById('list')
  // Add each data item as an <a> tag
  products.forEach((product)=> {
      let a = document.createElement("a");
     a.setAttribute('href', link);
      a.innerText = product;
      a.classList.add("listItem");
      list.appendChild(a);
  })
  
  }// End of function
  
  function search() {
      //search functionality goes here
      let input = document.getElementById('searchBox').value;
      let listContainer = document.getElementById('list');
      let listItems = document.getElementsByClassName('listItem');
      input = input.toLowerCase();
      let noResults = true
      for (i = 0; i < listItems.length; i++) {
          if (!listItems[i].innerHTML.toLowerCase().includes(input) || input === "") {
              listItems[i].style.display="none";
              continue;
          }
          else {
              listItems[i].style.display="flex";
              noResults = false;
          }
  
      }
      listContainer.style.display = noResults ? "none" : "block"
  }  