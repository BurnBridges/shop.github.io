let tg = window.Telegram.WebApp;
tg.expand();
tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

let items = [];

function toggleItem(btn, itemId, price) {
    let itemIndex = items.findIndex(item => item.id === itemId);
    if (itemIndex === -1) {
        items.push({ id: itemId, price: price });
        btn.classList.add('added-to-cart');
        btn.innerText = "Удалить";
    } else {
        items.splice(itemIndex, 1);
        btn.classList.remove('added-to-cart');
        btn.innerText = "Добавить";
    }
    updateTotalPrice();
}

// Обработчик для нажатия кнопки "Продолжить" и открытия всплывающего окна с формой ввода адреса
Telegram.WebApp.onEvent('mainButtonClicked', function(){
    tg.showPrompt("Введите ваш адрес:", {
        placeholder: 'Введите ваш адрес',
        okButtonText: 'Отправить',
        cancelButtonText: 'Отмена'
    }).then((result) => {
        if (result && result.text) {
            let address = result.text;
            let data = {
                items: items,
                totalPrice: calculateTotalPrice(),
                address: address
            };
            tg.sendData(JSON.stringify(data));
        }
    });
});

function calculateTotalPrice() {
    return items.reduce((total, item) => total + item.price, 0);
}

// Добавим обработчики для нажатия кнопок "Добавить" для каждого товара
document.getElementById("btn1").addEventListener('click', function(){
    toggleItem(this, "item1" , 600);
});

document.getElementById("btn2").addEventListener('click', function(){
    toggleItem(this, "item2" , 450);
});

document.getElementById("btn3").addEventListener('click', function(){
    toggleItem(this, "item3" , 580);
});

document.getElementById("btn4").addEventListener('click', function(){
    toggleItem(this, "item4" , 490);
});

document.getElementById("btn5").addEventListener('click', function(){
    toggleItem(this, "item5" , 600);
});

document.getElementById("btn6").addEventListener('click', function(){
    toggleItem(this, "item6" , 610);
});
