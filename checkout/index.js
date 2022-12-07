let container = document.getElementById("container2");
let listArr = [];

window.onload = function () {
  axios.get('/api/checkout/recordItems')
    .then(res => {
      listArr = res.data;
      for (let i = 0; i <= listArr.length; i++) {
        container.insertAdjacentHTML("afterend", `<p id="list-${listArr[i]}">${listArr[i]}</p>`)
      }
    })
    .catch(err => {
      console.log(err)
    })
}

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

function testAdd(index) {
  let string = document.getElementById(`box${index + 1}`).innerText;

  axios.post('/api/checkout/addItem', string)
    .then(res => {
      listArr = res.data;
      container.insertAdjacentHTML("afterend", `<p id="list-${string}">${string}</p>`)
    })
    .catch(err => {
      console.log(err)
    })
}

const mappedList = listArr.map((el, index) => {
  console.log('we made it')
  return (
    `<p>${el}</p>`
  )
})

function testDelete() {
  let stringDiv = document.getElementById(`box${index + 1}`).innerText;

  axios.delete('/api/checkout/removeItem', stringDiv)
    .then(res => {
      listArr = res.data;
      document.getElementById(`list-${stringDiv}`).remove();
    })
    .catch(err => {
      console.log(err)
    })
}

// let testAdd = function (index) {
// let stringDiv = document.getElementById(`box${index + 1}`).innerText;

//   let duplicateCheck = true;
//   for (let i = 0; i <= listArr.length; i++) {
//     if (stringDiv === listArr[i]) {
//       duplicateCheck = false;
//     }
//   }
//   if (duplicateCheck === true) {
//     listArr.push(stringDiv);
// container.insertAdjacentHTML("afterend", `<p id="list-${stringDiv}">${stringDiv}</p>`)
//   }
//   duplicateCheck = true;
// }

// let testDelete = function (index) {
  // let stringDiv = document.getElementById(`box${index + 1}`).innerText;

//   for (let i = 0; i <= listArr.length; i++) {
//     if (stringDiv === listArr[i]) {
//       listArr.splice(i, 1);
//       document.getElementById(`list-${stringDiv}`).remove();
//       console.log(listArr);
//     }
//   }
// }