const modelOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');

for(let card of cards){
    
    const cardId = card.getAttribute('id')
    card.addEventListener('click', function(){
        modelOverlay.classList.add('active');
        modelOverlay.querySelector('iframe').src = `https://rocketseat.com.br/${cardId}`;
    });
}

modelOverlay.querySelector('.close-modal').addEventListener('click', function(){
    modelOverlay.classList.remove('active');
    modelOverlay.querySelector('iframe').src ='';
});

modelOverlay.querySelector('.maximize-modal').addEventListener('click', function(){
    if(modelOverlay.firstElementChild.classList.contains('maximize')){
        modelOverlay.firstElementChild.classList.remove('maximize')
    }else{
        modelOverlay.firstElementChild.classList.add('maximize')
    }
});