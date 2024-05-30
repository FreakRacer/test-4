import { useState } from "react"


function Detective(){


    const [sherlock, setSherlock] = useState('психопат')
 

    return (
        <p>Sherlock - {sherlock}</p>
    )
}
export default Detective