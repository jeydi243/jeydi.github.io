import ScrollOut from 'scroll-out'
import anime from 'animejs/lib/anime.es.js'
import jump from 'jump.js'
import { gsap } from 'gsap'
import '../css/style.css'
import '../css/base.css'
import '../img/avatar1.png'
import LocomotiveScroll from 'locomotive-scroll'
import { preloadImages, preloadFonts } from './utils'
import { preloader } from './preloader'
import Cursor from './cursor'
import MenuController from './menuController'

const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
})
const sticky = document.querySelector('.sticky')
var epa = document.getElementById('epa')
var leftEm = document.querySelector('.leftEm')
var canvas = document.querySelector('#canvas')

var ctx = canvas.getContext('2d')
ctx.fillStyle = 'green'
ctx.fillRect(10, 10, 100, 100)
window.addEventListener('load', (event) => {
    gsap.fromTo(
        '#epa', { x: 100 }, {
            x: 100,
            duration: 2000,
        }
    )
})

window.addEventListener('scroll', (e) => {
    if (window.scrollY == 0) {
        sticky.classList.add('bg-opacity-0')
        sticky.classList.remove('glass')
    } else {
        sticky.classList.remove('bg-opacity-0')
        sticky.classList.add('glass')
    }
})


//Preload images and fonts
Promise.all([preloader('.menu__item'), preloadImages('.gallery__item-imginner'), preloadFonts('zkq2mjw')]).then(() => {
    //Remove loader(loading class)
    document.body.classList.remove('loading');

    //Initialize custom cursor
    const cursor = new Cursor(document.querySelector('.cursor'));

    //initialize the MenuController
    new MenuController(document.querySelector('.menu'));

    // Mouse effects on all links and buttons
    [...document.querySelectorAll('a, .gallery__item-more, .back')].forEach(link => {
        link.addEventListener('mouseenter', () => cursor.enter());
        link.addEventListener('mouseleave', () => cursor.leave());
    });
});