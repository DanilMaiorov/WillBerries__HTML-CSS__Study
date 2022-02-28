export function getGoods () {
    const links = document.querySelectorAll('.navigation__item-link')
    const viewAll = document.querySelector('.more');

    //рендер
    function renderGoods (goods) {
        const goodsContainer = document.querySelector('.long-goods-list')
        goodsContainer.innerHTML = ''
        goods.forEach((good) => {
            const goodBlock = document.createElement('div')
            goodBlock.classList.add('col-lg-3')
            goodBlock.classList.add('col-sm-6')
            goodBlock.innerHTML = `
            <div class="goods-card">
                <span class="label ${good.label ? null : 'd-none'}">${good.label}</span>
                <img src="db/${good.img}" alt="${good.name}" class="goods-img">
                <h3 class="goods-title">${good.name}</h3>
                <p class="goods-description">${good.description}</p>
                <button class="button goods-card-btn add-to-cart" data-id="${good.id}">
                    <span class="button-price">$${good.price}</span>
                </button>
            </div>`
            goodsContainer.append(goodBlock)
        })
    }
    //получение данных
    function getData (value, category) {
            fetch('../../db/db.json')
            /* fetch('https://willberries-test-e8a5b-default-rtdb.firebaseio.com/db.json') для работы с сервером*/
                .then(res => {
                    res.json().then(data => {
                        const array = category ? data.filter((item) => item[category] === value) : data //создаем переменную, в которой проводим фильтрацию
                        localStorage.setItem('goods', JSON.stringify(array))
                        //чтобы не осуществлялся переход внутри одной страницы нужно условие  pathname: "/goods.html"
                        if(window.location.pathname !== "/goods.html") {
                            window.location.href = '../../goods.html'
                        } else {
                            renderGoods(array) //также нужно проверить что есть ли у нас чтото в локалсторэдж
                        }
                    })
                })
    } 
    //перебор ссылок
    links.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault()
            const linkValue = link.textContent
            const category = link.dataset.field //передадим данные в гетДата
            getData(linkValue, category)
        })
    })
    //проверка локалсторэджа
    if(localStorage.getItem('goods') && window.location.pathname === "/goods.html") { //то запускаем функцию 
        renderGoods(JSON.parse(localStorage.getItem('goods')))
    }
    //полный список товаров
    if(viewAll) {
        viewAll.addEventListener('click', (e) => {
            e.preventDefault()
            getData()
        })
    }
}