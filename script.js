const userArr = [
  {
    name: "Andréia de Souza",
    email: "andreiasouza@example.com",
    occupation: "Teacher",
    birthday: "1988-05-17",
  },
  {
    name: "Claudia dos Anjos",
    email: "claudiaanjo@example.com",
    occupation: "Designer",
    birthday: "1992-02-05",
  },
  {
    name: "Dionísio Abreu",
    email: "dionisioaab@example.com",
    occupation: "Veterinary",
    birthday: "1989-07-23",
  },
  {
    name: "Marcos Araújo",
    email: "maraujo@example.com",
    occupation: "Web Designer",
    birthday: "1983-05-10",
  },
  {
    name: "Paula Rodrigues",
    email: "paularodrigues@example.com",
    occupation: "Lawyer",
    birthday: "1986-12-11",
  },
];
const head = document.createElement("header"); //criação do header
document.body.appendChild(head);
head.setAttribute("class", "head");
head.innerHTML = "Usuários";

const userData = document.createElement("div"); //criação do div userData
document.body.appendChild(userData);
userData.setAttribute("class", "user-data");

let table = document.createElement("table"); //criação da tabela
userData.appendChild(table);
table.setAttribute("class", "user-table");
let tableRow = "";
let infoButton = "";
let myId = "info-button";

const addData = document.createElement("div");
document.body.appendChild(addData);
addData.setAttribute("class", "add-data");
const addButton = document.createElement("button");
addButton.setAttribute("class", "add-button");
addButton.innerHTML = "Add User";
addData.appendChild(addButton);
const addDataInputs = document.createElement("div");
addData.appendChild(addDataInputs);
addDataInputs.setAttribute("class", "add-data-inputs");

//input name
const inputName = document.createElement("input");
addDataInputs.appendChild(inputName);
inputName.setAttribute("placeholder", "Name");
inputName.setAttribute("class", "data-inputs");
//input email
const inputEmail = document.createElement("input");
addDataInputs.appendChild(inputEmail);
inputEmail.setAttribute("placeholder", "Email");
inputEmail.setAttribute("class", "data-inputs");
//input occupation
const inputOccupation = document.createElement("input");
addDataInputs.appendChild(inputOccupation);
inputOccupation.setAttribute("placeholder", "Occupation");
inputOccupation.setAttribute("class", "data-inputs");
//input birthday
const inputBirthday = document.createElement("input");
addDataInputs.appendChild(inputBirthday);
inputBirthday.setAttribute("placeholder", "DD/MM/YYYY");
inputBirthday.setAttribute("type", "date");
inputBirthday.setAttribute("class", "data-inputs");

const inputButton = document.createElement("button");
addDataInputs.appendChild(inputButton);
inputButton.setAttribute("class", "add-button");
inputButton.innerHTML = "Add User";
//modal
const modal = document.querySelector(".info-dialog");
const openModal = document.getElementsByClassName("show-button");
const modalInfo = document.createElement("div");
modal.appendChild(modalInfo);
modalInfo.setAttribute("class", "dialog-info");
const closeModal = document.createElement("button");
modal.appendChild(closeModal);
closeModal.setAttribute("class", "close-button");
closeModal.innerHTML = "Close";

function openInputs() {
  addDataInputs.setAttribute(
    "style",
    "visibility: visible; animation: fadeIn 2s;"
  );
}
function closeInputs() {
  addDataInputs.setAttribute(
    "style",
    "visibility: hidden; animation: fadeOut 2s;"
  );
}
function addArr(array) {
  table.innerHTML = "";
  const firstTr = document.createElement("tr");
  firstTr.setAttribute("class", "data-th");
  table.appendChild(firstTr);
  firstTr.innerHTML =
    "<th>Name</th><th>Email</th><th>Occupation</th><th>Birthday</th>";
  //adicionar elementos do array na tabela
  for (let i = 0; i < array.length; i++) {
    tableRow = document.createElement("tr");
    table.appendChild(tableRow);
    tableRow.setAttribute("class", "data-tr");
    tableRow.innerHTML = `<td>${userArr[i].name}</td><td>${userArr[i].email}</td><td>${userArr[i].occupation}</td><td>${userArr[i].birthday}</td>`;
    infoButton = document.createElement("button");
    tableRow.appendChild(infoButton);
    infoButton.innerHTML = "Info";
    infoButton.setAttribute("id", myId + i);
    infoButton.setAttribute("class", "show-button");
  }
  window.localStorage.setItem("userArr", JSON.stringify(userArr));
}
addArr(userArr);
addButton.addEventListener("click", openInputs);

function sendInputs() {
  userArr[userArr.length] = {
    name: inputName.value,
    email: inputEmail.value,
    occupation: inputOccupation.value,
    birthday: inputBirthday.value,
  };
  addArr(userArr);
  inputName.value = "";
  inputEmail.value = "";
  inputOccupation.value = "";
  inputBirthday.value = "";
  localStorage.clear();
  window.localStorage.setItem("userArr", JSON.stringify(userArr));

  modalSettings();
}

function modalSettings() {
  for (let i = 0; i < openModal.length; i++) {
    openModal[i].addEventListener("click", () => {
      modalInfo.innerHTML = `<h2>Name: ${userArr[i].name}</h2><h2>Email: ${userArr[i].email}</h2><h2>Occupation: ${userArr[i].occupation}</h2><h2>Birthday: ${userArr[i].birthday}</h2>`;
      modal.showModal();
    });
  }
  closeModal.addEventListener("click", () => {
    modal.close();
  });
}
modalSettings();
inputButton.addEventListener("click", sendInputs);
inputButton.addEventListener("click", closeInputs);
