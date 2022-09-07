export function search () {
    const input = document.querySelector('.search-block > input')
    const btn = document.querySelector('.search-block > button')
    

    try {
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
        
        function getData (value) {
                fetch('./db/db.json')
                /* fetch('https://willberries-test-e8a5b-default-rtdb.firebaseio.com/db.json') для работы с сервером*/
                    .then(res => {
                        res.json().then(data => {
        
                            const array = data.filter(good => good.name.toLowerCase().includes(value.toLowerCase()))
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


        btn.addEventListener('click', () => {
            getData(input.value)
        })

    } catch (e) {
        console.error('У формы пропал класс');
    }



}