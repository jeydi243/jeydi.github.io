import ScrollOut from 'scroll-out'
import anime from 'animejs/lib/anime.es.js'
import './style.css'
import LocomotiveScroll from 'locomotive-scroll'

const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
})

console.log('Un')
console.log('deux')

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
// ScrollOut({
//     // offset: 30,
//     onShown: function (el, ctx, container) {
//         var myimg = document.querySelector('.img-test')
//         console.log({ ctx })
//         console.log({ container })
//         // var viewport_width = window.innerWidth
//         // var viewport_height = window.innerHeight
//         // myimg.setAttribute('height', viewport_height + 'px')
//         // myimg.setAttribute('width', viewport_width + 'px')
//         // if (ctx.index == 3) {
//         // console.dir(ctx)
//         // } else {
//         // }
//         // el.animate(
//         //     [
//         //         { transform: 'translateY(-70px)', opacity: 0 },
//         //         { transform: 'translateY(0px)', opacity: 0 },
//         //     ],
//         //     {
//         //         duration: 2000,
//         //     }
//         // )
//         // anime({
//         //     targets: el,
//         //     opacity: [0, 1],
//         //     translateY: [
//         //         { value: -30 },
//         //         { value: 0, duration: 2000 },
//         //     ],
//         //     // easing: 'ease',
//         //     duration: 2000,
//         // })
//     },
//     onHidden: function (el, ctx, container) {
//         // console.dir(ctx);
//         // el.style.transform = 'translateY(-70px)'
//         // el.style.transform = 'translateX(-70px)'
//         // el.style.opacity = 0
//     },
// })
