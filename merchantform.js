// alert("kindly register your details")

document.getElementById("formdetails");
document.addEventListener("submit", function (event) {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  var data = {};
  for (let x of formData.entries()) {
    data[x[0]] = x[1];
    console.log(x[0] + ":" + x[1]);
  }
  console.log(data, "data");

 
});

// ..column display..................
const list = [];

function AddRow() {
  let record = {};

  var AddRow = document.getElementById("dataTable");
  var NewRow = AddRow.insertRow();

  record.name = document.getElementById("fname").value;
  record.mail = document.getElementById("email").value;
  record.phone = document.getElementById("phone").value;
  record.website = document.getElementById("website").value;
  record.contactname = document.getElementById("contactname").value;
  record.contactphone = document.getElementById("contactphone").value;
  record.contactemail = document.getElementById("contactemail").value;
  record.notes = document.getElementById("notes").value;
  record.type = Type();
  record.category = category();
  record.commisionpercentage = document.getElementById("commisionpercentage").value;
  record.activeform = document.getElementById("activeform").value;
  record.myfile = document.getElementById("myfile").value;
  record.criticalaccount = CriticalAccount();
  record.paymentoptions = Paymentoption();

  list.push(record);

  var cel1 = NewRow.insertCell(0);
  var cel2 = NewRow.insertCell(1);
  var cel3 = NewRow.insertCell(2);
  var cel4 = NewRow.insertCell(3);
  var cel5 = NewRow.insertCell(4);
  var cel6 = NewRow.insertCell(5);
  var cel7 = NewRow.insertCell(6);
  var cel8 = NewRow.insertCell(7);
  var cel9 = NewRow.insertCell(8);
  var cel10 = NewRow.insertCell(9);
  var cel11 = NewRow.insertCell(10);
  var cel12 = NewRow.insertCell(11);
  var cel13 = NewRow.insertCell(12);
  var cel14 = NewRow.insertCell(13);
  var cel15 = NewRow.insertCell(14);
  var cel16 = NewRow.insertCell(15);

  cel1.innerHTML = record.name;
  cel2.innerHTML = record.mail;
  cel3.innerHTML = record.phone;
  cel4.innerHTML = record.website;
  cel5.innerHTML = record.contactname;
  cel6.innerHTML = record.contactphone;
  cel7.innerHTML = record.contactemail;
  cel8.innerHTML = record.notes;
  cel9.innerHTML = record.type;
  cel10.innerHTML = record.category;
  cel11.innerHTML = record.commisionpercentage;
  cel12.innerHTML = record.activeform;
  cel13.innerHTML = record.myfile;
  cel14.innerHTML = record.criticalaccount;
  cel15.innerHTML = record.paymentoptions;
  cel16.innerHTML = "<button>edit</button>  <button>save</button>";

  localStorage.setItem("data", JSON.stringify(list));
  sessionStorage.setItem("data", JSON.stringify(list));

  reset();
}

function Type() {
  var radio = document.getElementsByName("Type");
  var selectedType = "";
  for (i = 0; i < radio.length; i++) {
    if (radio[i].checked) selectedType = radio[i].value;
  }
  return selectedType;
}

function Paymentoption() {
  var transaction = document.getElementsByName("Paymentoptions");
  var selectedType = [];
  for (i = 0; i < transaction.length; i++) {
    if (transaction[i].checked) selectedType.push(transaction[i].value);
  }
  return selectedType;
}

function CriticalAccount() {
  var radio = document.getElementsByName("CriticalAccount");
  var selectedType = "";
  for (i = 0; i < radio.length; i++) {
    if (radio[i].checked) selectedType = radio[i].value;
  }
  return selectedType;
}
function category() {
  var transaction = document.getElementsByName("category");
  var selectedType = [];
  for (i = 0; i < transaction.length; i++) {
    if (transaction[i].checked) selectedType.push(transaction[i].value);
  }
  return selectedType;
}
// ..........form reset.................

function reset() {

  document.getElementById("fname").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("website").value = "";
  document.getElementById("contactname").value = "";
  document.getElementById("contactphone").value = "";
  document.getElementById("contactemail").value = "";
  document.getElementById("notes").value = "";
  document.getElementsByName("Type").checked = resetBussinessType();
  document.getElementsByName("category").selected = resetCategory();
  document.getElementById("commisionpercentage").value = "";
  document.getElementById("activeform").value = "";
  document.getElementsByName("CriticalAccount").checked = resetAccount();
  document.getElementsByName("Paymentoptions").checked = resetPaymentMethod();
}
function resetBussinessType() {
  var Type = document.getElementsByName("Type");
  for (var i = 0; i < Type.length; i++) {
    Type[i].checked = false;
  }
}
function resetCategory() {
  var transaction = document.getElementsByName("category");
  for (let i = 0; i < transaction.length; i++) {
    transaction[i].checked = false;
  }
}
function resetAccount() {
  var radio = document.getElementsByName("CriticalAccount");
  for (let i = 0; i < radio.length; i++) {
    radio[i].checked = false;
  }
}
function resetPaymentMethod() {
  var Type = document.getElementsByName("Paymentoptions");
  for (var i = 0; i < Type.length; i++) {
    Type[i].checked = false;
  }
}
