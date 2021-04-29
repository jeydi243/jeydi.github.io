import ScrollOut from 'scroll-out'
import anime from 'animejs/lib/anime.es.js'
import jump from 'jump.js'
import '../css/style.css'
import LocomotiveScroll from 'locomotive-scroll'

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

window.addEventListener('scroll', (e) => {
    if (window.scrollY == 0) {
        sticky.classList.add('bg-opacity-0')
        sticky.classList.remove('glass')
    } else {
        sticky.classList.remove('bg-opacity-0')
        sticky.classList.add('glass')
    }
})

epa.addEventListener('click', (e) => {
    e.preventDefault()
    epa.style.position = epa.style.position == 'fixed' ? 'static' : 'fixed'

    jump('.details', {
        duration: 2000,
        offset: 0,
        easing: (t, b, c, d) => {
            t /= d / 2
            if (t < 1) return (c / 2) * t * t + b
            t--
            return (-c / 2) * (t * (t - 2) - 1) + b
        },
        a11y: false,
    })
})
epa.addEventListener('mousemove', (e) => {
    e.preventDefault()

    canvas.style.position = 'fixed'
    canvas.style.top = e.clientY + 'px'
    canvas.style.left = e.clientX + 'px'
    epa.style['z-index'] = 1
    canvas.style['z-index'] = 0
    leftEm.classList.remove('-left-20')
    leftEm.classList.add('left-20')
    console.log('Mouse move', canvas.style)
})
epa.addEventListener('mouseleave', (e) => {
    e.preventDefault()
    console.log('Mouse leave', canvas)
})