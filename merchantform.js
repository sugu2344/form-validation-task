
var list = [];
 document.getElementById("formdetails");
document.addEventListener("submit", function (event) {
 event.preventDefault();
  });
  // ......
  var values= null; 
  var rowNum;
  function AddRow() {
        if (values == null)
            insertNewRecord();
        else
            updateRecord();
        reset(); 
  }
// ..column display..................

window.onload=function(){
  localStorage.removeItem("data")
}
function insertNewRecord() {
  var record = {};

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
  console.log(record);
  var AddRow = document.getElementById("dataTable");
  var NewRow = AddRow.insertRow();

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
var editButton = document.createElement("button");
editButton.innerHTML = "Edit";
editButton.addEventListener("click", function () { 
  editBtn(record);
});
  var deleteButton = document.createElement("button");
deleteButton.innerHTML = "delete";
deleteButton.addEventListener("click", function () { 
  deleteRow(record);
  
});
cel16.appendChild(editButton);
cel16.appendChild(deleteButton);
list.push(record);
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


let localStorageData = JSON.parse(localStorage.getItem("details"));
if (localStorageData === null) localStorageData = [];



//......................edit form...............
function editBtn(edit) {
  values=1
  document.getElementById("fname").value =edit.name;
  document.getElementById("email").value =edit.mail;
  document.getElementById("phone").value =edit.phone;
  document.getElementById("website").value =edit.website;
  document.getElementById("contactname").value =edit.contactname;
  document.getElementById("contactphone").value =edit.contactphone;
  document.getElementById("contactemail").value =edit.contactemail;
  document.getElementById("notes").value =edit.notes;
  findBusinessType(edit.type);
  findCategory(edit.category);
  document.getElementById("commisionpercentage").value =edit.commisionpercentage;
  document.getElementById("activeform").value =edit.activeform;
  findCriticalAccount(edit.criticalaccount);
  findPaymentMethod(edit.paymentoptions);

  var getData = JSON.parse(localStorage.getItem("data"));
  var index = getData.findIndex(function (item) {
    return item.mail == edit.mail;
  });
rowNum = index;
localStorage.setItem("data", JSON.stringify(getData));
}
function findBusinessType(edit) {
  let fnType = document.getElementsByName("Type");
  for (var i = 0; i < fnType.length; i++) {
      if (fnType[i].value == edit) {
        fnType[i].checked = true;
    }
  }
  }
function findCategory(edit) {
  let fnCategory = document.getElementsByName("category");
  for (var i = 0; i < fnCategory.length; i++) {
    for (var j = 0; j < edit.length; j++) {
      if (fnCategory[i].value == edit[j]) {
        fnCategory[i].checked = true;
      }
    }
  }
}
function findCriticalAccount(edit) {
let fnCritical = document.getElementsByName("CriticalAccount");
for (var i = 0; i < fnCritical.length; i++) {
    if (fnCritical[i].value == edit) {
      fnCritical[i].checked=true;
    }
  }
}

function findPaymentMethod(edit) {
  let fnPayment = document.getElementsByName("Paymentoptions");
  for (var i = 0; i < fnPayment.length; i++) {
    for (var j = 0; j < edit.length; j++) {
      if (fnPayment[i].value == edit[j]) {
        fnPayment[i].checked = true;
      }
    }
  }
}
// ...................delete..................

function deleteRow(record) {
  var getData = JSON.parse(localStorage.getItem("data"));

  var index = getData.findIndex(function (item) {
    return item.mail == record.mail;
  });

  if (index !== -1) {
    getData.splice(index, 1);
    localStorage.setItem("data", JSON.stringify(getData));

    var table = document.getElementById("dataTable");
   
    var rowToDelete = null;
    for (var i = 1; i < table.rows.length; i++) {
      if (table.rows[i].cells[1].innerHTML === record.mail) {
        rowToDelete = table.rows[i];
        break;
      }
    }

    if (rowToDelete) {
      table.deleteRow(rowToDelete.rowIndex);
    }
  }
}
// ...........update same row......

function updateRecord(){
  
  let newData = {};
  var retrieveData = JSON.parse(localStorage.getItem("data"));
  newData.name = document.getElementById("fname").value;
  newData.email = document.getElementById("email").value;
  newData.phone = document.getElementById("phone").value;
  newData.website = document.getElementById("website").value;
  newData.contactName = document.getElementById("contactname").value;
  newData.contactPhone = document.getElementById("contactphone").value;
  newData.contactMail = document.getElementById("contactemail").value;
  newData.notes = document.getElementById("notes").value;
  newData.type = Type();
  newData.category = category();
  newData.percentage = document.getElementById("commisionpercentage").value;
  newData.duration = document.getElementById("activeform").value;
  newData.critical = CriticalAccount();
  newData.payment = Paymentoption();

  console.log(newData);

var table = document.getElementById("dataTable");
var editRow = table.rows[rowNum + 1];
editRow.cells[0].innerHTML = newData.name;
editRow.cells[1].innerHTML = newData.email;
editRow.cells[2].innerHTML = newData.phone;
editRow.cells[3].innerHTML = newData.website;
editRow.cells[4].innerHTML = newData.contactName;
editRow.cells[5].innerHTML = newData.contactPhone;
editRow.cells[6].innerHTML = newData.contactMail;
editRow.cells[7].innerHTML = newData.notes;
editRow.cells[8].innerHTML = newData.type;
editRow.cells[9].innerHTML = newData.category;
editRow.cells[10].innerHTML = newData.percentage;
editRow.cells[11].innerHTML = newData.duration;
editRow.cells[12].innerHTML = "";
editRow.cells[13].innerHTML = newData.critical;
editRow.cells[14].innerHTML = newData.payment;
retrieveData[rowNum]=newData;
localStorage.setItem("data", JSON.stringify(retrieveData));
}








