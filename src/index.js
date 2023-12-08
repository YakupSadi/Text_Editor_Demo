import './styles/main.css'


import onLoad from './onLoad'
import getKeys from './getKeys'
import setAttr from './setAttr'
import getRange from './getRange'
import setButtons from './setButtons'


const x = document.querySelector( '#saditor_content' )
const y = document.querySelector( '#saditor_length' )
const z = document.querySelector( '#saditor_buttons' ).querySelectorAll( 'button' )


window.onload = () => {
    onLoad()
}


x.addEventListener( 'click', ( e ) => {
    setAttr( e )
})


x.addEventListener( 'input', () => {
    y.textContent = x.textContent.trim().length

    getRange()
})


x.addEventListener( 'keyup', ( e ) => {
    getKeys( e )
})


z.forEach( button => {
    button.addEventListener( 'click', ( e ) => {
        setButtons( e.target.id )
    })
})