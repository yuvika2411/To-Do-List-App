let todolist=[
    {
        item:'Milk',
        dueDate:'27/06/2025'
    },
    {
        item:'Butter',
        dueDate:'28/06/2025'
    }
];

displayItems();
function addTodo(){
    let inputElement= document.querySelector('#todo-input');
    let dateElement= document.querySelector('#todo-date');
    let todoItem= inputElement.value;
    let todoDate= dateElement.value;

    if (!todoItem || !todoDate) {
        alert("Please enter both item and due date.");
        return;
    }

    // Convert YYYY-MM-DD to DD/MM/YYYY
    const [year, month, day] = todoDate.split("-");
    const formattedDate = `${day}/${month}/${year}`;

    todolist.push({item:todoItem,dueDate:todoDate});
    inputElement.value= '';
    dateElement.value='';
    displayItems();
}

function displayItems(){
    let displayElement= document.querySelector('.todo-container');
    // let item =todolist[i].item;
    // let dueDate= todolist[i].dueDate;

    let newHtml='';

    for(let i=0;i<todolist.length;i++){
        let {item,dueDate}= todolist[i];
        newHtml +=`
        <div class="todo-item">
            <span>${item}</span>
            <span>${dueDate}</span>
            <button class="btn-delete" onclick="todolist.splice(${i},1); displayItems();">Delete</button>
        </div>
            `;
    }
    displayElement.innerHTML= newHtml;
}

