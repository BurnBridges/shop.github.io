<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>
<body>
    <div class="center">
        <div class="container">
            <div class="inner">
                <div class="item" id="item1">
                    <img src="burger.png" alt="" class="img" id="burger-img">
                    <p>burger - <b>600Р</b></p>
                    <div class="quantity-control">
                        <button class="btn" id="minusBtn1" onclick="decrementQuantity('quantity1')">-</button>
                        <span id="quantity1">0</span>
                        <button class="btn" id="btn1" onclick="incrementQuantity('quantity1'); playAnimation('burger-img', 'burger.gif');">+</button>
                    </div>
                </div>
                
                <div class="item" id="item2">
                    <img src="pizza.png" alt="" class="img" id="pizza-img">
                    <p>pizza - <b>450Р</b></p>
                    <div class="quantity-control">
                        <button class="btn" id="minusBtn2" onclick="decrementQuantity('quantity2')">-</button>
                        <span id="quantity2">0</span>
                        <button class="btn" id="btn2" onclick="incrementQuantity('quantity2'); playAnimation('pizza-img', 'pizza-animation.gif');">+</button>
                    </div>
                </div>
                
                <div class="item" id="item3">
                    <img src="wok.png" alt="" class="img" id="wok-img">
                    <p>onigiri - <b>580Р</b></p>
                    <div class="quantity-control">
                        <button class="btn" id="minusBtn3" onclick="decrementQuantity('quantity3')">-</button>
                        <span id="quantity3">0</span>
                        <button class="btn" id="btn3" onclick="incrementQuantity('quantity3'); playAnimation('wok-img', 'wok-animation.gif');">+</button>
                    </div>
                </div>

                <div class="item" id="item4">
                    <img src="onigiri.png" alt="" class="img" id="onigiri-img">
                    <p>rice - <b>490Р</b></p>
                    <div class="quantity-control">
                        <button class="btn" id="minusBtn4" onclick="decrementQuantity('quantity4')">-</button>
                        <span id="quantity4">0</span>
                        <button class="btn" id="btn4" onclick="incrementQuantity('quantity4'); playAnimation('onigiri-img', 'onigiri-animation.gif');">+</button>
                    </div>
                </div>

                <div class="item" id="item5">
                    <img src="roll.png" alt="" class="img" id="roll-img">
                    <p>roll - <b>600Р</b></p>
                    <div class="quantity-control">
                        <button class="btn" id="minusBtn5" onclick="decrementQuantity('quantity5')">-</button>
                        <span id="quantity5">0</span>
                        <button class="btn" id="btn5" onclick="incrementQuantity('quantity5'); playAnimation('roll-img', 'roll-animation.gif');">+</button>
                    </div>
                </div>

                <div class="item" id="item6">
                    <img src="juice.png" alt="" class="img" id="juice-img">
                    <p>juice - <b>610Р</b></p>
                    <div class="quantity-control">
                        <button class="btn" id="minusBtn6" onclick="decrementQuantity('quantity6')">-</button>
                        <span id="quantity6">0</span>
                        <button class="btn" id="btn6" onclick="incrementQuantity('quantity6'); playAnimation('juice-img', 'juice-animation.gif');">+</button>
                    </div>
                </div>
                <div>
                    <label for="address">Введите ваш адрес:</label><br>
                    <input type="text" id="address" name="address"><br><br>
                </div>
            </div>
        </div>
    </div>

    <script src="https://telegram.org/js/telegram-web-app.js"></script>
    <script src="app.js"></script>
</body>
</html>
