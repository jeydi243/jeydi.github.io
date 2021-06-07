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

const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    // multiplier: 1,
    offset: ['30%', 0],
    repeat: true,
    tablet: { smooth: false },
    smartphone: { smooth: false },
})

window.addEventListener('load', (event) => {
    // gsap.registerPlugin(ScrollTrigger)
    // scroll.on('scroll', ScrollTrigger.update)
    // ScrollTrigger.scrollerProxy('.smooth-scroll', {
    //     scrollTop(value) {
    //         return arguments.length
    //             ? locoScroll.scrollTo(value, 0, 0)
    //             : locoScroll.scroll.instance.scroll.y
    //     },
    //     getBoundingClientRect() {
    //         return {
    //             top: 0,
    //             left: 0,
    //             width: window.innerWidth,
    //             height: window.innerHeight,
    //         }
    //     },
    // })
    // var tl = gsap.timeline({ repeat: 2, repeatDelay: 1 })
    // setTimeout(function () {
    //     tl.to('.char', {
    //         duration: 0.8,
    //         stagger: 0.02,
    //         opacity: 1,
    //         y: 0,
    //         ease: 'elastic',
    //     })
    // }, 4000)
    scroll.on('scroll', (args) => {
        if (typeof args.currentElements['epa'] === 'object') {
            // let progress = args.currentElements['epa'].progress
            console.dir(args.currentElements)
            // var element = args.currentElements['epa']

            // gsap.from(`#${element.section.el.id}.char`, {
            //     duration: 0.8,
            //     opacity: 0,
            //     stagger: 0.02,
            //     y: 20,
            //     ease: 'elastic',
            // })
            for (const [key, value] of Object.entries(args.currentElements)) {
                var element = value
                // gsap.from(`#${element.section.el.id} * .char`, {
                //     duration: 0.5,
                //     opacity: 0,
                //     stagger: 0.02,
                //     y: 30,
                //     ease: 'power1.inOut',
                // })
            }

            // args.currentElements.forEach((ele, index, array) => {})
            // tl.progress(progress)
        }
        gsap.from('.char', {
            duration: 0.5,
            opacity: 0,
            stagger: 0.02,
            y: 30,
            ease: 'power1.inOut',
        })
    })
})
