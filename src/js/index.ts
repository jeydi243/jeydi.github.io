import { gsap,Power2 } from 'gsap'
import { getMousePos as cursor } from './utils'
import '../css/style.css'
import '../css/tt.scss'
import '../css/form.scss'
import 'splitting/dist/splitting.css'
import 'splitting/dist/splitting-cells.css'
import * as Splitting from 'splitting'
import LocomotiveScroll from 'locomotive-scroll'
import { ScrollTrigger, MotionPathPlugin } from 'gsap/all'
Splitting({ by: 'words' })
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin)
var mouse = { x: 0, y: 0 }
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
                ? Lscroll.scrollTo(value, 0, 0)
                : Lscroll.scroll.instance.scroll.y
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
        pinType: document.querySelector<HTMLElement>('[data-scroll-container]')
            .style.transform
            ? 'transform'
            : 'fixed',
    })
}
window.addEventListener('load', (e) => {
    window.addEventListener('mousemove', (ev) => (mouse = cursor(ev)))
    configScroll()
    gsap.from('.inview .word', {
        duration: 0.5,
        opacity: 0,
        delay: 0.5,
        stagger: 0.1,
        y: 10,
        skewX: 6,
        ease: 'back',
    })

    gsap.from('.img-wrapper-epa', {
        duration: 5,
        opacity: 0,
        height: 0,
        maskSize: 0,
        width: 20,
        ease: 'back',
    })

    let revealContainers = document.querySelectorAll('.reveal')

    revealContainers.forEach((container) => {
        let image = container.querySelector('img')
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                toggleActions: 'restart none none reset',
            },
        })

        tl.set(container, { autoAlpha: 1 })
        tl.from(container, {
            xPercent: -100,
            ease: Power2.easeOut,
        })
        tl.from(image, {
            xPercent: 100,
            scale: 1.3,
            delay: -1.5,
            ease: Power2.easeOut,
        })
    })
})
