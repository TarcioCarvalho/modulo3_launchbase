const cards = document.querySelectorAll('.card');

for(let i = 0; i < cards.length; i++){
    const index = i
    cards[i].addEventListener('click',()=>{
        window.location.href = `recipes/${index}`
    })
}

const infoAll = document.querySelectorAll('.food-content')

for(let info of infoAll){
    const hide = info.querySelector('.information')
    const span = info.querySelector('.button-hide')
    span.addEventListener('click', () =>{
        if(hide.classList.contains('none')){
            hide.classList.remove('none')
            span.innerHTML = "esconder"
        }else{
            span.innerHTML = "mostrar"
            hide.classList.add('none')
        }
    })
}

