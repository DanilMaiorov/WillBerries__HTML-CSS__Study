export function search () {
    const input = document.querySelector('.search-block > input')
    const btn = document.querySelector('.search-block > button')

    btn.addEventListener('click', () => {
        console.log(input.value);
        input.value = ''
    })

}