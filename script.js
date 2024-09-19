document.getElementById('addItemButton').addEventListener('click', function() {
    const itemName = document.getElementById('itemName').value.trim(); // Remove espaços em branco
    const itemQuantity = document.getElementById('itemQuantity').value;

    if (itemName) {
        const itemList = document.getElementById('itemList');
        const newItem = document.createElement('div');
        newItem.classList.add('item');
        newItem.innerHTML = `
            <span>${itemName} - ${itemQuantity}</span>
            <button class="removeButton">Remover</button>
        `;
        itemList.appendChild(newItem);
        document.getElementById('itemName').value = ''; // Limpa o campo após adicionar

        // Foca no campo de nome do próximo item
        document.getElementById('itemName').focus(); 

        // Faz o último item adicionado rolar para a vista
        newItem.scrollIntoView({ behavior: 'smooth' });

        newItem.querySelector('.removeButton').addEventListener('click', function() {
            itemList.removeChild(newItem);
        });
    } else {
        alert('Por favor, preencha o nome do item.');
    }
});

document.getElementById('newListButton').addEventListener('click', function() {
    const itemList = document.getElementById('itemList');
    itemList.innerHTML = ''; // Limpa todos os itens da lista
    document.getElementById('itemName').value = ''; // Limpa o campo de nome do item
    document.getElementById('itemQuantity').value = '1'; // Reseta a quantidade para 1
    document.getElementById('itemName').focus(); // Foca no campo de nome do item
});
