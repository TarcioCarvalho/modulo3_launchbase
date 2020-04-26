const cards = document.querySelectorAll('.card');

for(let card of cards){
    const cardId = card.getAttribute('id')
    card.addEventListener('click', function(){
    window.location.href = `courses/${cardId}`
    });
}

