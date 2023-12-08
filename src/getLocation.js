function getLocation()
{
    const x = document.querySelector( '#saditor_content' )
    const y = x.getElementsByTagName( 'p' ) 

    for( let z = 0; z < y.length; z++ )
    {
        if( y[ z ].hasAttribute( 'data-focus' ) )
        {
            return z
        }
    }
}


export default getLocation