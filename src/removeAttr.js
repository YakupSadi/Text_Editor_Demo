function removeAttr()
{
    const x = document.querySelector( '#saditor_content' )
    const y = x.getElementsByTagName( 'p' )

    Array.from( y ).forEach( y => {
        y.removeAttribute( 'data-focus' )
    })
}


export default removeAttr