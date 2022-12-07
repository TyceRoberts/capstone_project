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