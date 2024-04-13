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

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("plusBtn1").addEventListener('click', function(){
        incrementQuantity("quantity1");
        updateTotalPrice();
    });

    document.getElementById("minusBtn1").addEventListener('click', function(){
        decrementQuantity("quantity1");
        updateTotalPrice();
    });
});

function updateTotalPrice() {
    let totalPrice = calculateTotalPrice();
    if (totalPrice > 0) {
        tg.MainButton.setText(`View order: ${totalPrice}`);
        tg.MainButton.show();
    } else {
        tg.MainButton.hide();
    }
}

Telegram.WebApp.onEvent('mainButtonClicked', function(){
    let data = {
        items: items,
        totalPrice: calculateTotalPrice()
    };
    tg.sendData(JSON.stringify(data));
})

function calculateTotalPrice() {
    return items.reduce((total, item) => total + (item.price * item.quantity), 0);
}

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

function playAnimation(imgId, animationSrc) {
    // Находим элемент изображения
    const img = document.getElementById(imgId);

    // Сохраняем текущий путь изображения для восстановления
    const originalSrc = img.src;

    // Заменяем статическое изображение анимированным GIF
    img.src = animationSrc;

    // Запускаем таймер для возврата к статическому изображению через 3 секунды (или сколько вам нужно)
    setTimeout(function() {
        img.src = originalSrc; // Возвращаем изображение к первоначальному статусу
    }, 3000); // 3000 миллисекунд = 3 секунды
}

function incrementQuantity(quantityId) {
    let quantityElement = document.getElementById(quantityId);
    let quantity = parseInt(quantityElement.innerText);
    quantityElement.innerText = quantity + 1;
}

function decrementQuantity(quantityId) {
    let quantityElement = document.getElementById(quantityId);
    let quantity = parseInt(quantityElement.innerText);
    if (quantity > 0) {
        quantityElement.innerText = quantity - 1;
    }
}
