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
  var list1 = [];
		var list2 = [];
		var list3 = [];
		var list4 = [];

		var n = 1;
		var x = 0;


  function AddRow(){

    var AddRown = document.getElementById('dataTable');
    var NewRow = AddRown.insertRow(n);

    list1[x] = document.getElementById("fname").value;
    list2[x] = document.getElementById("email").value;
    list3[x] = document.getElementById("phone").value;
    list4[x] = document.getElementById("website").value;
    list4[x] = document.getElementById("contactname").value;
    list4[x] = document.getElementById("contactphone").value;
    list4[x] = document.getElementById("contactemail").value;
    list4[x] = document.getElementById("type").value;
    list4[x] = document.getElementById("").value;
    list4[x] = document.getElementById("").value;
    list4[x] = document.getElementById("").value;
    list4[x] = document.getElementById("").value;
    list4[x] = document.getElementById("").value;
    list4[x] = document.getElementById("").value;
    list4[x] = document.getElementById("").value;
    list4[x] = document.getElementById("").value;
    
    

    var cel1 = NewRow.insertCell(0);
    var cel2 = NewRow.insertCell(1);
    var cel3 = NewRow.insertCell(2);
    var cel4 = NewRow.insertCell(3);

    cel1.innerHTML = list1[x];
    cel2.innerHTML = list2[x];
    cel3.innerHTML = list3[x];
    cel4.innerHTML = list4[x];

    n++;
    x++;
}

  
  

