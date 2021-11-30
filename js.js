"use strict"

const task=document.getElementById('task');
const priority=document.getElementById('priority');
const myTable=document.querySelector('tbody');
const myForm=document.querySelector('form');
const status1 = document.getElementById('status');
const myButton=document.getElementById('myButton');
const myDeleteBtn=document.createElement('myButton');


myButton.addEventListener('click', function(e){
    e.preventDefault();
    addToDo();
    myForm.reset();
});



function addToDo(){
    if(task.value !== '' && priority.value!=="choose priority"){
        console.log(task.value);
        console.log(priority.value);
        

        
// kuriu eilute, ja idedu i table body
      const myRow=document.createElement('tr');
      myTable.appendChild(myRow);


// stulpelis, i ji idedu task reiksme
      const myCol=document.createElement('td');
      myCol.textContent=task.value; 


//   stulpeli appendinu eilutei     
      myRow.appendChild(myCol);


//   kodas priority reiksmei ideti
      const myCol1=document.createElement('td');
      const myPriority=document.createElement('p');
      myPriority.innerText=priority.value;
      switch(priority.value){
            case 'High':
                myPriority.className="btn btn-warning";                               
                break;
            case 'Normal':
                myPriority.className="btn btn-success";                              
                break;
            case 'Low':
                myPriority.className="btn btn-info";                
                break;
      }
      myCol1.appendChild(myPriority)
      myRow.appendChild(myCol1);


//    kodas status reiksmei ideti
        const myCol2 = document.createElement('td');
        const status = document.createElement('p');
        status.innerText = status1.value;
        myCol2.appendChild(status);
        myRow.appendChild(myCol2);

//    progreso baras
        const myCol3=document.createElement('td');
        const myProgress=document.createElement('p');
        myProgress.innerText=progress.value;
        switch(progress.value){
            case    '100%':
                myProgress.className="progress-bar progress-bar-striped progress-bar-animated";
                myProgress.style="width: 100%"
                break;
            case '75%':
                myProgress.className="progress-bar progress-bar-striped progress-bar-animated bg-success"
                myProgress.style="width: 75%"
                break;
            case '50%':
                myProgress.className="progress-bar progress-bar-striped progress-bar-animated bg-info";
                myProgress.style="width: 50%"
                break;
            case '25%':
                myProgress.className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
                myProgress.style="width: 25%"
                break;
            case '0%':
                myProgress.className="progress-bar progress-bar-striped progress-bar-animated bg-danger"
                myProgress.style="width: 0%"
                break;
        }
        myCol3.appendChild(myProgress)
        myRow.appendChild(myCol3);

//    datos pasirinkimas

let dateControl=document.querySelector('input[type="date"]');
    const datos=document.createElement('td');
    const myDate=document.createElement('p')
    myDate.innerText=dateControl.value;

    datos.appendChild(myDate);
    myRow.appendChild(datos);


//    delete mygtuko kurimas
    const myCol4=document.createElement('td');
    const myDeleteBtn=document.createElement('button');
    myDeleteBtn.innerText="Delete";
    myDeleteBtn.className="btn btn-danger";
    myCol4.appendChild(myDeleteBtn);
    myRow.appendChild(myCol4);

    myDeleteBtn.addEventListener ("click", function (e) {
        e.preventDefault();
        deleteItem (e.target.parentNode.parentNode);

    },false);

    function deleteItem(row) {
        console.log ("delete");
        myTable.removeChild(row);
    }



    }else {
        alert("Visi laukai turi buti uzpildyti")
    }
 };



//
 //su display hidden mes galim paslepti table su if ir tik tada jis pasirodytu kai submit 