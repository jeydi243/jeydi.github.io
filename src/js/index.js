import ScrollOut from 'scroll-out'
import anime from 'animejs/lib/anime.es.js'
import './src/css/style.css'
import LocomotiveScroll from 'locomotive-scroll'

const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
})

window.addEventListener('scroll', (e) => {
    const sticky = document.querySelector('.sticky')

    if (window.scrollY == 0) {
        // console.log('scrollY == 0')
        sticky.classList.add('bg-opacity-0')
        sticky.classList.remove('glass')
    } else {
        // console.log('scrollY !== de 0')
        sticky.classList.remove('bg-opacity-0')
        sticky.classList.add('glass')
    }
})
