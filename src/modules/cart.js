export function cart () {
    const cartBtn = document.querySelector('.button-cart');
    const cart = document.querySelector('#modal-cart') ;
    const closeBtn = cart.querySelector('.modal-close');
    const goodsContainer = document.querySelector('.long-goods-list');
    const cartTable = document.querySelector('.cart-table__goods');
    const modalForm = document.querySelector('.modal-form');
    const sumCart = document.querySelector('.card-table__total');

    function deleteCartItem (id) { //функция удаления элементов из корзины
        let cart = JSON.parse(localStorage.getItem('cart')) ;
        const newCart = cart.filter(good => {
            return good.id !== id;
        });
        localStorage.setItem('cart', JSON.stringify(newCart));
        if(cart = []) {
            sumCart.innerHTML = 0;
        }
        actuallyCart();
    }
    function plusCartItem (id) { //функция удаления элементов из корзины
        const cart = JSON.parse(localStorage.getItem('cart')) ;
        const newCart = cart.map(good => {
            if(good.id === id) {
                good.count++;
            }
            return good;
        });
        localStorage.setItem('cart', JSON.stringify(newCart));
        actuallyCart();
    }
    function minusCartItem (id) { //функция удаления элементов из корзины
        const cart = JSON.parse(localStorage.getItem('cart'));
        const newCart = cart.map(good => {
            if(good.id === id) {
                if(good.count > 0) {
                good.count--;
                }
            }
            return good;
        });
        localStorage.setItem('cart', JSON.stringify(newCart));
        actuallyCart();
    }



    
    function actuallyCart () { //функция для отсутствия дублирования кода
        renderCartGoods(JSON.parse(localStorage.getItem('cart')));
        summary(JSON.parse(localStorage.getItem('cart')));
    }




    function addToCart (id) { //функция добавления товаров в корзину
        const goods = JSON.parse(localStorage.getItem('goods'));
        const clickedGood = goods.find(good => good.id === id);
        const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []

        if(cart.some(good => good.id === clickedGood.id)) {
            cart.map(good => {
                if(good.id === clickedGood.id) {
                    good.count++;
                }
                return good;
            });
        } else {
            clickedGood.count = 1;
            cart.push(clickedGood);
        }
        localStorage.setItem('cart', JSON.stringify(cart));
    }














    function renderCartGoods (goods) {//отрисовка товаров в корзине
        cartTable.innerHTML = '';
        goods.forEach((good, index) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${good.name}</td>
            <td>${good.price}</td>
            <td><button class="cart-btn-minus">-</button></td>
            <td>${good.count}</td>
            <td><button class="cart-btn-plus">+</button></td>
            <td data-sum="${index}">${+good.price * +good.count}</td>
            <td><button class="cart-btn-delete">x</button></td>
        `
        cartTable.append(tr);
        tr.addEventListener('click', (e) => {
            if(e.target.classList.contains('cart-btn-minus')) {
                minusCartItem(good.id);
            } else if(e.target.classList.contains('cart-btn-plus')) {
                plusCartItem(good.id);
            } else if(e.target.classList.contains('cart-btn-delete')) {
                deleteCartItem(good.id);
            }
        });
        });
    }
    function summary (goods) { //функция сложения
        let sum = 0
        goods.forEach(good => {
            let summ = +good.price * +good.count;
            sumCart.innerHTML = sum += summ;
        });
    }
    function sendForm (data) {//функция отправки данных
        const cartArray = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                cart: cartArray,
                name: data.nameCustomer,
                phone: data.phoneCustomer,
            })
        })  
        .then(() => {
            clearCart();
        });
    }




    function clearCart () { //функция очистки корзины
        modalForm.reset();
        localStorage.setItem('cart', JSON.stringify([]));
        cart.style.display = '';
    }
    modalForm.addEventListener('submit', (e) => {
        e.preventDefault();
        //данные формы
        const formElements = modalForm.querySelectorAll('input');
        const formData = new FormData(modalForm);
        const formBody = {};
        formData.forEach((value, key) => {
            formBody[key] = value;
        });
        sendForm (formBody);
    });



    cartBtn.addEventListener('click', () => {
        const cartArray = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
        renderCartGoods(cartArray);
        cart.style.display = 'flex';
        sumCart.innerHTML = '0';
        summary(JSON.parse(localStorage.getItem('cart')));
    });
    closeBtn.addEventListener('click', () => {
        cart.style.display = '';
    });
    if(goodsContainer) {
        goodsContainer.addEventListener('click', (e) => {
            if(e.target.closest('.add-to-cart')) {
            const btnToCart = e.target.closest('.add-to-cart');
            const goodId = btnToCart.dataset.id;
            addToCart(goodId);
            }
        });
    }
}