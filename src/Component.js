import { useDispatch } from "react-redux"
import { close } from './features/state/stateSlice'

export default function Component(){
    const dispatch = useDispatch()
    return(
        <div className="component">
            <h2>Component</h2>
            <button id="close" onClick={()=> dispatch(close())}>Close the window</button>
        </div>
    )
}