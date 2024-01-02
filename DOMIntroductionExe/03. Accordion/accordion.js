function toggle() {
    const MORE = 'More';
    const LESS = 'Less';


    let button = document.querySelector('.button');
    let text = document.querySelector('#extra');

    button.textContent = button.textContent === MORE ? LESS : MORE;
    text.style.display = text.style.display === 'none' || text.style.display === '' ? 'block' : 'none';
}