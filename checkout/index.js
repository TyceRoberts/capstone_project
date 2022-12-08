let container = document.getElementById("container2");
let listArr = [];

window.onload = function () {
  axios.get('http://localhost:4000/api/checkout/recordItems')
    .then(res => {
      console.log(res.data)
      listArr = res.data;
      if (listArr[0] === undefined) {
        return
      } else {
        for (let i = 0; i <= listArr.length; i++) {
          container.insertAdjacentHTML("afterend", `<p id="list-${listArr[i]}">${listArr[i]}</p>`)
        }
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
  let obj = {
    string: string
  }

  axios.post('http://localhost:4000/api/checkout/addItem', obj)
    .then(res => {
      listArr = res.data;
      console.log(res.data);
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

function testDelete(index) {
  let string = document.getElementById(`box${index + 1}`).innerText;
  let obj = {
    string: string
  }

  axios.delete('http://localhost:4000/api/checkout/removeItem', obj)
    .then(res => {
      listArr = res.data;
      document.getElementById(`list-${string}`).remove();
    })
    .catch(err => {
      console.log(err)
    })
}