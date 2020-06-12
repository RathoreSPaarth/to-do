let todoList = document.getElementById('todo-list')
let todo = document.getElementById('todo')
let i = 0;

function add(){
    let x = document.createElement('div')
    x.setAttribute('id','newItem`${i}`')
    x.setAttribute('class','col-lg-8')
    x.setAttribute('class','col-8')
    x.setAttribute("style","font-size:200%; text-align:left")
    ///y

    let y = document.createElement('div')
    y.setAttribute('id','newItem-btn')
    y.setAttribute('class','col-lg-4')
    y.setAttribute('class','col-4')
   
    if(todo.value == "")
    alert("Enter a task!")
    else{
        todoList.appendChild(x)
       // x.innerHTML = todo.value
        let btn = document.createElement('button')
        btn.setAttribute('id',"btn-rem")
        btn.setAttribute("style","height: 5vh; width: 100%; border: none; border-radius: 20%; background-color: rgb(193, 1, 24); font-size: larger; margin-top:2%; display:flex; justify-content:center")
        btn.innerHTML= "Done"
        btn.setAttribute('onclick','del()')
        y.appendChild(btn)
        todoList.appendChild(y)
        localStorage.setItem(`${i}`,todo.value)
        location.reload()
        i++
    }

    for(let j = 0; j<localStorage.length; j++){
       let d = document.getElementById('newItem`${j}')
        let set = localStorage.getItem(j)
       d.innerHTML += `${set}`
    }
    
   todo.value = ""
}
function del(){
    let rem = document.getElementById('newItem')
    let btn = document.getElementById('newItem-btn')
    rem.parentNode.removeChild(rem)
    btn.parentNode.removeChild(btn)
}
