import 'splitting/dist/splitting.css'
import 'splitting/dist/splitting-cells.css'
import Splitting from 'splitting'
import ScrollOut from 'scroll-out'
import anime from 'animejs/lib/anime.es.js'


const target = document.querySelector('#target')
const results = Splitting({ target: target, by: 'words' })
ScrollOut({
    onShown: function (el) {
        el.animate([{ opacity: 0 }, { opacity: 1 }], 2000)
    },
    onHidden: function (el) {
        el.style.opacity = 0
    },
})
export default Splitting()
