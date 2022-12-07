let usersContainer = document.getElementById("container");


const users = [
  {
    name: "Jayski Oje",
    office_address: "24, Wall street",
    home_address: "365 Bridges road",
    email: "user@example.com",
    avatar: "path/to/profile-image"
  },
  {
    name: "Bing BoyTheo",
    office_address: "675, Ratatouille street",
    home_address: "54 Gates Estate",
    email: "user@example.com",
    avatar: "path/to/profile-image"
  },
  {
    name: "Ghost Sam",
    office_address: "001, Silent street",
    home_address: "87 North-void Street",
    email: "user@example.com",
    avatar: "path/to/profile-image"
  }
];

let myArray = ['thisOne', 'thatOne', 'thisAndThat']

var PATTERN = /this/,
  filtered = myArray.filter(function (str) { return PATTERN.test(str); });

const mappedUsers = users.map((user, index) => {
  return (`<div class="project-card" key=${index}>
                  <div class="details">
                   <p id="box${index + 1}">${user.name}</p>
                   <p>${user.home_address}</p>
                   <p>${user.office_address}</p>
                 </div>
            </div>
            <button class="delBtn" onclick="testDelete()">x</button>
            <button class="addBtn" onclick="testAdd(${index})">+</button>`);
});

usersContainer.innerHTML = mappedUsers;