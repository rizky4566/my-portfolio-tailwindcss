
//NAVBAR -------------------------------------------------------
window.onscroll = function() {                                  //ketika di scroll jalankan sebuah 'function' 
    const header = document.querySelector('header');            //js tolong carikan elemen yang namanya 'header' (karna 'header' gak dibikinin id/class jadi langsung panggil elemnya)
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav) {
        header.classList.add('nav--fixed');
    } else {
        header.classList.remove('nav--fixed');
    }
}

// Hamburger
const hamburger = document.querySelector('#hamburger');         //js tolong carikan elemen yang nama id nya 'hamburger'
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {             //ketika hamburger nya di klik kita akan jalan function berikut ini
    hamburger.classList.toggle('hamburger-active');            //toggle= jadi nambahin kelas baru atau ngermove class secara bersamaan (buka tutup)
    navMenu.classList.toggle('hidden');
});     
