import { gsap } from 'gsap'
import '../css/style.css'
import 'splitting/dist/splitting.css'
import 'splitting/dist/splitting-cells.css'
import Splitting from 'splitting'
import LocomotiveScroll from 'locomotive-scroll'
import { ScrollTrigger } from 'gsap/all'
Splitting()
const sticky = document.querySelector('.sticky')
var loading = document.getElementById('loading')
var value = document.getElementById('value')

const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    offset: ['30%', 0],
    // repeat: true,
    // reloadOnContextChange: true,
    tablet: { smooth: false },
    smartphone: { smooth: true },
})

window.addEventListener('load', (event) => {
    scroll.on('scroll', (args) => {
        var progress = {}
        console.log(args)
        if (condition) {
        } else {
        }
        if (typeof args.currentElements['hey'] === 'object') {
            let progress = args.currentElements['hey'].progress
            console.log(progress)
        } else if (typeof args.currentElements['hey'] === 'object') {
        } else if (typeof args.currentElements['hey'] === 'object') {
        } else if (typeof args.currentElements['hey'] === 'object') {
        } else if (typeof args.currentElements['hey'] === 'object') {
        }
    })
})
function scrollInInview() {
    gsap.from(`.is-inview`, {
        duration: 2,
        opacity: 0,
        stagger: 0.02,
        y: 30,
        skewX: 10,
        repeat: false,
        ease: 'elastic.out(1,0.3)',
    })
    gsap.from(`.char`, {
        duration: 2,
        opacity: 0,
        stagger: 0.02,
        y: 30,
        skewX: 5,
        repeat: false,
        ease: 'power1.inOut',
    })
}
