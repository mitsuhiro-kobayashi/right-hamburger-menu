// 要素を取得
const btn = document.getElementById('btn');
const ham_menu = document.getElementById('menu-sp');
const ham_modal = document.getElementById('modal-sp');

// ボタンをクリックしたとき
btn.addEventListener('click', () => {
    btn.classList.toggle('close');
    ham_menu.classList.toggle('add-menu-sp');
    ham_modal.classList.toggle('add-modal-sp');
});
// モーダルをクリックしたとき
ham_modal.addEventListener('click', () => {
    btn.classList.toggle('close');
    ham_menu.classList.toggle('add-menu-sp');
    ham_modal.classList.toggle('add-modal-sp');
});


// forEachを使うと短く書ける
// const ham_elems = [btn, ham_modal];

// ham_elems.forEach((elem) => {
//     elem.addEventListener('click', ()=> {
//         btn.classList.toggle('close');
//         ham_menu.classList.toggle('add-menu-sp');
//         ham_modal.classList.toggle('add-modal-sp');
//     });
// })


// Chromeでページ読み込み時のちらつく現象回避
const body = document.querySelector('.preload-transition');

window.addEventListener('load', () => {
    body.classList.remove('preload-transition');
});

