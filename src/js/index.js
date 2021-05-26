import { gsap } from 'gsap'
import '../css/style.css'
// import '../css/base.css'
import '../img/epa/1.jpg'
import '../img/epa/2.jpg'
import '../img/epa/3.jpg'
import '../img/epa/4.jpg'
import '../img/epa/5.jpg'
import '../img/epa/6.jpg'
import LocomotiveScroll from 'locomotive-scroll'
import { preloadImages, preloadFonts } from './utils'
import { preloader } from './preloader'
import Cursor from './cursor'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)
var idddd = document.querySelector('[data-scroll-id]')

const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
})
scroll.on('scroll', ScrollTrigger.update)
let animation = gsap.timeline('.fancy', {
    x: 100,
    y: 200,
})
console.log({ idddd })
ScrollTrigger.create({
    trigger: '#home',
    start: '50% 50%',
    end: '+=300',
    animation: animation,
    onEnter: ({ progress, direction, isActive }) =>
        console.log(progress, direction, isActive),
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

//Preload images and fonts
// Promise.all([
//     preloader('.menu__item'),
//     preloadImages('.gallery__item-imginner'),
//     preloadFonts('zkq2mjw'),
// ]).then(() => {
//     //Remove loader(loading class)
//     document.body.classList.remove('loading')

//     //Initialize custom cursor
//     const cursor = new Cursor(document.querySelector('.cursor'))

//     //initialize the MenuController
//     // new MenuController(document.querySelector('.menu'));

//     // Mouse effects on all links and buttons
//     ;
//     [...document.querySelectorAll('a, .gallery__item-more, .back')].forEach(
//         (link) => {
//             link.addEventListener('mouseenter', () => cursor.enter())
//             link.addEventListener('mouseleave', () => cursor.leave())
//         }
//     )
// })  )
// })