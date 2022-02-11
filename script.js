
let menuOpen = false
const menuBtn = document.querySelector('.btn-menu-mobile')
menuBtn.addEventListener('click',()=>{
    let showMenuMobile = document.querySelector('.mobile-area-absolute')

    if(!menuOpen){
        menuBtn.classList.add('open')
        console.log('abriu o menu')
        showMenuMobile.classList.add('open-menu')
        showMenuMobile.classList.remove('close-menu')
        menuOpen = true

    } else {
        menuBtn.classList.remove('open')
        console.log('fechou o menu')
        showMenuMobile.classList.remove('open-menu')
        showMenuMobile.classList.add('close-menu')
        menuOpen = false
    }

})