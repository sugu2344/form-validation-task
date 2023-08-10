// alert("kindly register your details")

document.getElementById("formdetails")
document.addEventListener("submit", function (event) {
    event.preventDefault();
    const form  = event.target; 
    const formData = new FormData(form)
    let data = {}
    for(let x of formData.entries()){
        data[x[0]] = x[1]
console.log(x[0] + ":" + x[1]);
    }
    console.log(data,'data')
    localStorage.setItem('data', JSON.stringify(data))
  });



//   ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;.....................;;;;;;;;;;;;;;;;;;;;;


  function AddRow(){

    var list1 = [];
    var list2 =[];
    var list3 =[];
    var list4 =[];
    var list5 =[];
    var list6 =[];
    var list7 =[];
    var list8 =[];
    var list9 =[];
    var list10 =[];
    var list11 =[];
    var list12 =[];
    var list13 =[];
    var list14 =[];
    var list15 =[];
    var list16 =[];
		

		var n = 1;
		var x = 0;

    var AddRow = document.getElementById('dataTable');
    var NewRow = AddRow.insertRow(n);

    list1[x] = document.getElementById("fname").value;
    list2[x] = document.getElementById("email").value;
    list3[x] = document.getElementById("phone").value;
    list4[x] = document.getElementById("website").value;
    list5[x] = document.getElementById("contactname").value;
    list6[x] = document.getElementById("contactphone").value;
    list7[x] = document.getElementById("contactemail").value;
    list8[x] = document.getElementById("notes").value;
    list9[x] = Type();
    list10[x] =category();
    list11[x] = document.getElementById("commisionpercentage").value;
    list12[x] = document.getElementById("activeform").value;
    list13[x] = document.getElementById("myfile").value;
    list14[x] = CriticalAccount();
    list15[x] =Paymentoption();

    

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
    var cel11= NewRow.insertCell(10);
    var cel12 = NewRow.insertCell(11);
    var cel13 = NewRow.insertCell(12);
    var cel14 = NewRow.insertCell(13);
    var cel15 = NewRow.insertCell(14);
    var cel16 = NewRow.insertCell(15);
  
    cel1.innerHTML = list1[x];
    cel2.innerHTML = list2[x];
    cel3.innerHTML = list3[x];
    cel4.innerHTML = list4[x];
    cel5.innerHTML = list5[x];
    cel6.innerHTML = list6[x];
    cel7.innerHTML = list7[x];
    cel8.innerHTML = list8[x];
    cel9.innerHTML = list9[x];
    cel10.innerHTML = list10[x];
    cel11.innerHTML = list11[x];
    cel12.innerHTML = list12[x];
    cel13.innerHTML = list13[x]; 
    cel14.innerHTML = list14[x];
    cel15.innerHTML = list15[x];
    cel16.innerHTML = "<button>edit</button>  <button>save</button>";


    n++;
    x++;
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
// .........
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

  

