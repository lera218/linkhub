const changeTheme = document.querySelector('.change');
const body = document.querySelector('body');
changeTheme.addEventListener('click', ()=>{
    body.classList.add('light');
});