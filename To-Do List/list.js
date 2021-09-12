var addbtn = document.getElementById('add');
var ulist = document.getElementById('list');


console.log('Working');


addbtn.onclick = function(e) {

e.preventDefault();
var inp = document.getElementById('listitem');
var nin = inp.value;


if(nin!== ''){
  var listupdate = document.createElement("li");
  listupdate.innerHTML = nin;
  ulist.appendChild(listupdate);
  var removebtn = document.createElement("button");
  removebtn.className = "delete";
  removebtn.innerHTML = "\u00D7";
  listupdate.appendChild(removebtn);
  inp.value = "";
}


}
