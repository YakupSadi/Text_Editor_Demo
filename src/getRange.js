function getRange()
{
    const x = document.querySelector( '#saditor_content' )
    const y = x.getElementsByTagName( 'p' )

    const z = []
    let w   = 0
    let q   = 0
    let v   = y.length - 1


    for( let i = 0; i < y.length; i++ )
    {
        z.push( { id: i, start: 0, end: 0 } )

        w = y[ i ].textContent.trim().length
        q += y[ i ].textContent.trim().length


        if( w > 0 )
        {
            z[ i ].end = q
        }
    }

    for( let i = y.length - 2; i >= 0; i-- )
    {
        if( z[ i ].end > 0 )
        {
            z[ v ].start = z[ i ].end
            v = i
        }
    }

    console.clear()
    console.log( z )
}


export default getRange