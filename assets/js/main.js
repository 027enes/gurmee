export function initializeSearchEvents() {
    let searchBtn = document.getElementById('searchBtn');
    let searchContent = document.getElementById('search');
    let searchClose = document.getElementById('sclose');
    let body = document.getElementById('body');

    searchBtn.addEventListener('click', () => {
        searchBtn.classList.add('active');
        searchContent.classList.add('active');
        body.classList.add('active');
    });

    searchClose.addEventListener('click', () => {
        searchBtn.classList.remove('active');
        searchContent.classList.remove('active');
        body.classList.remove('active');
    });
}
