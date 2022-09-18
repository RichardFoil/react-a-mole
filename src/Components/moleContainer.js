// Just one example
import React, { useState } from 'react'
import Mole from './Mole'
import Empty from './emptySolt'


//code from hackerusa solution code
const MoleContainer = (props) => {
    let [theMole, setTheMole] = useState(false)

    const handleClick = (e) => {
        props.setScore(props.score + 1)
        setTheMole(true)
    }

    let displayMole = theMole ? 
    <Mole setScore={props.setScore}
        toggle={setTheMole}
        handleClick={handleClick} />
        :
    <Empty toggle={setTheMole} />

    return (
        <div style={{'display':'inline-block','width':'30vw'}}>
            {displayMole}
        </div>
    )
}

export default MoleContainer