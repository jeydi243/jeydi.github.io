import ScrollOut from 'scroll-out'
import anime from 'animejs/lib/anime.es.js'
import './style.css'
import { obs } from './observer'

ScrollOut({
    onShown: function (el) {
        el.animate(
            [
                { transform: 'translateY(-70px)', opacity: 0 },
                { transform: 'translateY(0px)', opacity: 1 },
            ],
            {
                duration: 2000,
            }
        )
    },
    onHidden: function (el) {
        // el.style.transform = 'translateY(-70px)'
        // el.style.transform = 'translateX(-70px)'
        // el.style.opacity = 0
    },
})
