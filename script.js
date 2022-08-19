const input = document.querySelector("#new-task-input");
const Add = document.querySelector("#add-task");
const list = document.querySelector('.todo-list');
const clearall = document.querySelector('#clr-btn');
const rmlist = document.getElementById('todo');
let count=0;

input.addEventListener('keyup',()=>{
    if(input.value == " "){
        Add.disabled = false;
        Add.classList.add('active');
        console.log('checked');

    }else{
        Add.classList.remove('active');
    }
});
Add.addEventListener('click',()=>{
    if(input.value == ""){
        alert("please enter someting");
    }else{
    const newele = document.createElement('div');
        newele.classList.add('item');
        newele.innerHTML = `<div class="items" id="items"></div>
        <div class="item-btn">
        <span><h2>${input.value}</h2></span> <div class = "btns">
        <button class="material-icons edit">&#xe22b;</button>
        <button class="material-icons delete">&#xe872;</button>
       </div>
        </div>`;
        count++;
        list.appendChild(newele);
        input.value = '';
    }
});
list.addEventListener('click',(e)=>{
if(e.target.classList.contains('delete')){
    e.target.parentElement.parentElement.remove();
}
});

list.addEventListener('click',(e)=>{
    if(e.target.classList.contains('edit')){
        e.target.parentElement.parentElement.classList.toggle('completed');
    }
});
function rem(){
    rmlist.style.display='none';
    window.location.reload();
}