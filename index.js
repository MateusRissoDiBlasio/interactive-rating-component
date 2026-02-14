const ratingStarsBtns = document.querySelectorAll('.stars');
const submitBtn = document.querySelector('button');
const selectedStars = document.getElementById('selectedStars');
const ratingContainer = document.getElementById('ratingContainer');
const feedbackMessageContainer = document.getElementById('feedbackMessageContainer');
var result = '';
ratingStarsBtns.forEach(item =>{
    item.addEventListener('click', () => {
        document.querySelector('.selected')?.classList.remove('selected');
        item.classList.add('selected');
        const selectedStarsOption = document.querySelector('.selected');
        result = selectedStarsOption.textContent;
        console.log(result);
    });
})
submitBtn.addEventListener('click', ()=>{
    if(result !== ''){
        ratingContainer.style.display = 'none';
        feedbackMessageContainer.style.display = 'flex';
        selectedStars.textContent = result;
    }
});