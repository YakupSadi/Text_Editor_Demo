function onLoad()
{
    const x = document.querySelector( '#saditor_content' )
    const y = document.createElement( 'p' )
    const z = document.createElement( 'br' )

    y.setAttribute( 'data-focus', '' )

    y.append( z )
    x.append( y )

    x.focus()

    document.querySelector( 'p[ data-focus ]' ).focus()
}


export default onLoad