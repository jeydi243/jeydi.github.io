import { gsap } from 'gsap'
import { getMousePos as cursor } from './utils'
let mouse = { x: 0, y: 0 }
window.addEventListener('mousemove', (ev) => (mouse = cursor(ev)))
import '../css/style.css'
import 'splitting/dist/splitting.css'
import 'splitting/dist/splitting-cells.css'
import Splitting from 'splitting'
import LocomotiveScroll from 'locomotive-scroll'
import { ScrollTrigger, MotionPathPlugin } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin)
var listID = [
    'home',
    'about',
    'portfolio',
    'services',
    'testimonials',
    'contact',
    'about',
]
Splitting()
const epa = document.getElementById('epaImage')
const target_epa = document.getElementById('target_epa')
const Lscroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    offset: ['30%', 0],
    class: 'inview',
    // repeat: true,
    // reloadOnContextChange: true,
    tablet: { smooth: false },
    smartphone: { smooth: true },
})
function configScroll() {
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    Lscroll.on('scroll', ScrollTrigger.update)

    // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy('[data-scroll-container]', {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight,
            }
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector('[data-scroll-container]').style
            .transform
            ? 'transform'
            : 'fixed',
    })
}
window.addEventListener('load', (e) => {
    e.preventDefault()
    configScroll()
    window.addEventListener('mousemove', function (ev) {
        ev.preventDefault()
        console.log('from Left:', ev.clientX, 'From top:', ev.clientY)
        const glass = document.createElement('div')
        glass.id = 'glass'
        glass.style.position = 'absolute'
        glass.style.left = ev.clientX
        glass.style.top = ev.clientY
        glass.style.zIndex = '20'
        glass.classList.toggle('glass', 'h-1/5', 'w-1/5')
        target_epa.appendChild(glass)
    })
    gsap.from(`#home .inview`, {
        duration: 2,
        opacity: 0,
        delay: 'random([2,3])',
        y: 30,
        skewY: 6,
        ease: 'back',
    })
    gsap.from(`#home .char`, {
        duration: 2,
        opacity: 0,
        delay: 2,
        y: 30,
        skewY: 6,
        ease: 'back',
    })
    gsap.from(`#nav .char`, {
        duration: 2,
        opacity: 0,
        delay: 2,
        y: 30,
        skewX: 6,
        ease: 'back',
    })
    Lscroll.on('call', (args) => {
        console.log(`Just called ${args}`)
        gsap.from(`#${args} .inview`, {
            duration: 2,
            delay: 2,
            opacity: 0,
            scrollTrigger: {
                trigger: `#${args}`,
                onToggle: (self) => {
                    console.log(self.progress.toLocaleString())
                },
                // start: 'top center', //la premiere valeur fait reference a l'element et la deuxieme fait reference au target
                toggleActions: 'restart pause restart pause',
            },
            y: 30,
            skewX: 6,
            ease: 'back',
        })
    })
})
