function setButtons( e )
{
    const x = document.querySelector( '#saditor_content' )

    switch( e )
    {
        case 's-image':
            let a = document.createElement( 'input' )

            a.type = 'file'
            a.accept = 'image/*'
            a.style.display = 'none'
            a.click()

            a.addEventListener( 'change', () => {
                let b = a.files[ 0 ]

                if( b )
                {
                    const c = document.createElement( 'p' )

                    let d = new Image()
                    d.src = URL.createObjectURL( b )

                    c.appendChild( d )
                    x.appendChild( c )
                }
            })
            break

        case 's-code':
            break

        default:
            break
    }
}


export default setButtons