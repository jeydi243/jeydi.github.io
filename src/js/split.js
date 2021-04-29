import 'splitting/dist/splitting.css'
import 'splitting/dist/splitting-cells.css'
import Splitting from 'splitting'

const target = document.querySelector('#target')
const results = Splitting({ target: target, by: 'words' })

export default results
