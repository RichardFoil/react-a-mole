import {useEffect} from 'react'
import Molehill from '../images/molehill.png'

function Empty(props){
    useEffect(() => {
        // Feel free to adjust this number as you see fit.
        // It is your game to tune!
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.toggle(true)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img style={{'width': '30vw'}}
            src={Molehill} 
            alt="empty mole hill"/>
        </div>
    )
}

export default Empty