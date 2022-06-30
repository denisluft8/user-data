const userArr = [
  {
    name: "Andréia de Souza",
    email: "andreiasouza@example.com",
    occupation: "Teacher",
    birthday: "12/11/1988",
  },
  {
    name: "Claudia dos Anjos",
    email: "claudiaanjo@example.com",
    occupation: "Designer",
    birthday: "09/02/1992",
  },
  {
    name: "Dionísio Abreu",
    email: "dionisioaab@example.com",
    occupation: "Veterinary",
    birthday: "06/03/1989",
  },
  {
    name: "Marcos Araújo",
    email: "maraujo@example.com",
    occupation: "Web Designer",
    birthday: "10/05/1983",
  },
  {
    name: "Paula Rodrigues",
    email: "paularodrigues@example.com",
    occupation: "Lawyer",
    birthday: "25/12/1986",
  },
];
const head = document.createElement("header"); //criação do header
document.body.appendChild(head);
head.setAttribute("class", "head");
head.innerHTML = "Usuários";

const userData = document.createElement("div"); //criação do div userData
document.body.appendChild(userData);
userData.setAttribute("class", "userData");

const table = document.createElement("table"); //criação da tabela
userData.appendChild(table);
const firstTr = document.createElement("tr");
table.appendChild(firstTr);
firstTr.innerHTML =
  "<th>Name</th><th>Email</th><th>Occupation</th><th>Birthday</th>";

function addData(array) {
  for (let i = 0; i < array.length; i++) {
    const tableRow = document.createElement("tr");
    table.appendChild(tableRow);
    tableRow.innerHTML = `<td>${userArr[i].name}</td><td>${userArr[i].email}</td><td>${userArr[i].occupation}</td><td>${userArr[i].birthday}</td>`;
  }
}

addData(userArr);
