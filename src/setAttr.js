import removeAttr from './removeAttr'


function setPosition( e )
{
    if( e.target.nodeName === 'P' )
    {
        removeAttr()

        e.target.setAttribute( 'data-focus', '')
    }
}


export default setPosition