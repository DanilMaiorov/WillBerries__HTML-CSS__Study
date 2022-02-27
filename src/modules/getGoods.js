export function getGoods () {
    const links = document.querySelectorAll('.navigation__item-link')
        
    function getData () {
        fetch('https://willberries-test-e8a5b-default-rtdb.firebaseio.com/db.json')
            .then(res => {
                res.json().then(data => {
                    localStorage.setItem('goods', JSON.stringify(data))
                })
            })
    }
    links.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault()
            getData()
        })
    })
}