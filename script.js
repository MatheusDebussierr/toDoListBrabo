let vet = ['Item 1', 'Item 2', 'Item 3'];

function screenUpdate() {
    const screen = document.getElementById("screen");
    screen.innerHTML = '';

    const title = document.createElement('h1');
    title.textContent = "To do list"
    

    for (let i = 0; i < vet.length; i++) {
        //document.body.appendChild(title);

        const itemDiv = document.createElement("div");
        itemDiv.innerHTML = vet[i] + " <br>";

        const editButton = document.createElement('button');
        editButton.textContent = "Atualizar";
        editButton.onclick = () => editItem(i);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = "Deletar";
        deleteButton.onclick = () => deleteItem(i);

        itemDiv.appendChild(editButton);
        itemDiv.appendChild(deleteButton);

        screen.appendChild(itemDiv);
    }
}

function editItem(index) {
    const newValue = prompt("Digite o novo valor:", vet[index]);
        vet[index] = newValue;
        screenUpdate();
    
}

function deleteItem(index) {
    if (confirm('Tem certeza de que deseja deletar este item?')) {
        vet.splice(index, 1);
        screenUpdate();
    }
}


function addItem(){
    let addItem = prompt("Enter with a new value: ");
    vet.unshift(addItem);
    screenUpdate();
}

screenUpdate();
