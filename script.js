function updateInput() {
  var selectedhospitalname = document.getElementById("hospital").value;
  document.getElementById("selectedhospitalname").value = selectedhospitalname;
}
function updateinput2(){
  var selectedbloodgroup=document.getElementById("formselect").value;
  document.getElementById("selectedformbloodgroup").value = selectedbloodgroup;
}
function updateinput3(){
  var selectedDisease=document.getElementById("formselect2").value;
  document.getElementById("textinputarea").value = selectedDisease;
}



function getAndUpdate(){
  PID = document.getElementById('patientid').value;
      pname = document.getElementById('Name').value;
      bgroup = document.getElementById('selectedformbloodgroup').value;
      pno = document.getElementById('Phoneno').value;
   hname=document.getElementById('selectedhospitalname').value;
   pproblem=document.getElementById('textinputarea').value;
  //  pproblem=document.getElementById('')
  if (localStorage.getItem('itemsJson')==null){
      itemJsonArray = [];
      itemJsonArray.push([PID,pname,bgroup, pno,hname,pproblem]);
      localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
  }
  else{
      itemJsonArrayStr = localStorage.getItem('itemsJson')
      itemJsonArray = JSON.parse(itemJsonArrayStr);
      itemJsonArray.push([PID,pname,bgroup, pno,hname,pproblem]);
      localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
  }
  update();
}

function update(){
  if (localStorage.getItem('itemsJson')==null){
      itemJsonArray = []; 
      localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
  } 
  else{
      itemJsonArrayStr = localStorage.getItem('itemsJson')
      itemJsonArray = JSON.parse(itemJsonArrayStr); 
  }
 
  let tableBody = document.getElementById("tableBody");
  let str = "";
  itemJsonArray.forEach((element) => {
      str += `
      <tr>
     
      <td>${element[0]}</td>
      <td>${element[1]}</td> 
      <td>${element[2]}</td>
      <td>${element[3]}</td>
      <td>${element[4]}</td>
      <td>${element[5]}</td>
      </tr>`; 
  });
  tableBody.innerHTML = str;
}
subbtn = document.getElementById("subbtn");
subbtn.addEventListener("click", getAndUpdate);
update();
function deleted(itemIndex){
  console.log("Delete", itemIndex);
  itemJsonArrayStr = localStorage.getItem('itemsJson')
  itemJsonArray = JSON.parse(itemJsonArrayStr);
   
  itemJsonArray.splice(itemIndex, 1);
  localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
  update();

}
function clearStorage(){
  if (confirm("Do you really want to clear?")){
  console.log('Clearing the storage')
  localStorage.clear();
  update()
  }
}


//////search part 



var myinput = document.getElementById('myinput');
var tabledata = document.getElementById('tabledata');


myinput.addEventListener('input', function () {
    filterTable(myinput.value.toLowerCase());
});


function filterTable(searchTerm) {
    var rows = tabledata.getElementsByTagName('tbody')[0].getElementsByTagName('tr');

    for (var i = 0; i < rows.length; i++) {
        var name = rows[i].getElementsByTagName('td')[0].textContent.toLowerCase();

        if (name.includes(searchTerm)) {
            rows[i].style.display = '';
        } else {
            rows[i].style.display = 'none';
        }
    }
}
