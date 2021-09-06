import { gsap } from 'gsap'
import { getMousePos as cursor } from './utils'
import '../css/style.css'
import '../css/form.scss'
import 'splitting/dist/splitting.css'
import 'splitting/dist/splitting-cells.css'
import Splitting from 'splitting'
import LocomotiveScroll from 'locomotive-scroll'
import { ScrollTrigger, MotionPathPlugin } from 'gsap/all'
Splitting()
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin)
let mouse = { x: 0, y: 0 }
const epa = document.getElementById('epaImage')
const Lscroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    offset: ['30%', 0],
    class: 'inview',
    initClass: 'init',
    repeat: true,
    reloadOnContextChange: true,
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
window.addEventListener('mousemove', (ev) => (mouse = cursor(ev)))
window.addEventListener('load', (e) => {
    configScroll()
    gsap.from('.inview .char', {
        duration: 1,
        opacity: 0,
        delay: 1,
        stagger: 0.1,
        y: 10,

        skewX: 6,
        ease: 'back',
    })
    gsap.from('.inview', {
        duration: 2,
        opacity: 0,
        ease: 'back',
    })
    gsap.from('.inview img', {
        duration: 2,
        yoyo: true,
        opacity: 0,
        ease: 'back',
    })
})
