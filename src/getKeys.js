import removeAttr from './removeAttr'
import getLocation from './getLocation'


function getKeys( e )
{
    const x = document.querySelector( '#saditor_content' )
    const y = x.getElementsByTagName( 'p' )
    const z = getLocation()


    switch ( e.key )
    {
        case 'Enter':
            removeAttr()

            y[ z ].nextSibling.setAttribute( 'data-focus', '' )
            break

        case 'ArrowUp':
            if( y[ z ].previousSibling )
            {
                removeAttr()

                y[ z ].previousSibling.setAttribute( 'data-focus', '' )
            }
            break

        case 'ArrowRight':

            break

        case 'ArrowDown':
            if( y[ z ].nextSibling )
            {
                removeAttr()

                y[ z ].nextSibling.setAttribute( 'data-focus', '' )
            }
            break

        case 'ArrowLeft':

            break

        case 'Backspace':

            break

        default:
            break
    }
}


export default getKeys