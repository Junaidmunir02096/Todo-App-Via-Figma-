let Maincontent = document.querySelector('.maincontent');
let addtaskbtn = document.querySelector('.addtask');
let TodoList = document.querySelector('.todolist');
let savebtn = document.querySelector('#save')
let compltebtn = document.querySelector('.completebtn')
let secondcont = document.querySelector('.secondmain');
let NextTodo = document.querySelector('.nexttodo');
let popupmain = document.querySelector('.popupmain')
let summaryvalue = document.querySelector('#summery');
let timevalue = document.querySelector('#Due-date');
let allIncompleteDivs ;


if (addtaskbtn !== null) {
    addtaskbtn.addEventListener('click',()=>{ 
       popupmain.style.display = 'flex'
    console.log('kkkk')
})
}

if (savebtn !== null) {
    savebtn.addEventListener('click',()=>{

    console.log('hi');
    
    AddList(summaryvalue.value,timevalue.value)
    trackcompletion()
    popupmain.style.display = 'none';
    selectdivs()
})
}

window.onload=()=>{trackcompletion()}


function AddList(summaryval,timeval){
    let div = document.createElement('div');
    div.className = 'addlist';
    let input = document.createElement('input');
    input.className = 'checkincomplete';
    input.type = 'checkbox';
    let head =document.createElement('h5');
    head.className = 'h5';
    head.innerHTML = summaryval;
    let spn = document.createElement('span');
    spn.className = 'time';
    spn.innerHTML = timeval;
    let icon = document.createElement('i');
    icon.className = 'fa-solid fa-bell  timering'

    TodoList.appendChild(div);
    div.appendChild(input);
    div.appendChild(head)
    div.appendChild(spn);
    spn.appendChild(icon)
}

// if (compltebtn) {
//     compltebtn.addEventListener('click',()=>{
//     console.log('hi brother');
    
//     newtodo()
// })
// }


function newtodo(heading){
    let div = document.createElement('div');
    div.className = 'setlist';
    let inpt = document.createElement('input');
    inpt.type = 'checkbox';
    inpt.checked = 'true';
    inpt.disabled = 'true'
    inpt.className = 'completetask';
    let head4 = document.createElement('h4');
    head4.className = 'h4';
    head4.innerHTML = heading;

   NextTodo.appendChild(div);
   div.appendChild(inpt);
   div.appendChild(head4)

}

let locationbtn = document.querySelector('.location')
console.dir(locationbtn)
locationbtn.addEventListener('click',()=>{
    console.log('wewewr');
    window.location.href = './location.html';
})



let popop = document.querySelector('.logout');

popop.addEventListener("click",()=>{
    console.log('hibro');
    window.location.href = "../main.html";

})
let cancelbtn = document.querySelector('.Cancel');
cancelbtn.addEventListener('click',()=>{
    popupmain.style.display = 'none'
})




// let alldiv = document.querySelectorAll('.setlist');

// let Taskcomplte = document.querySelector('.completetask');
// Taskcomplte.addEventListener('click',()=>{
//     newtodo();
// })

// function selectdivs(){
//     allIncompleteDivs = document.querySelectorAll('.addlist')
// allIncompleteDivs.forEach(div => {
//   let check =   div.querySelector('.checkincomplete')
//    if (check.Checked) {
//     TodoList.remove(div)
//    }
// });

// }
function trackcompletion(){
    let ssss =  document.querySelectorAll('.addlist');
    ssss.forEach(item=>{
      let heading =   item.querySelector('.h5').innerHTML
        item.querySelector('.checkincomplete').addEventListener('click',()=>{
                console.log('heee'); 
                
               newtodo(heading)
               TodoList.removeChild(item)
            }) 
    })
}























// let locationbtn = document.getElementsByClassName('')













{/* <div class="setlist">
    <input type="checkbox" name="checkin" class="completetask">
    <h4 class="h4">Respond your Email</h4>
</div> */}








{/* <div class="addlist">
<input type="checkbox" name="check" class="checkincomplete">
  <h5 class="h5">Submit my resume</h5>
  <span class="time"><i class="fa-solid fa-bell  timering"></i>     Today , 3:00</span>
</div> */}