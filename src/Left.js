import { useDispatch } from "react-redux"
import  { show } from './features/state/stateSlice'

export default function Left(){
    const dispatch  = useDispatch()
    return(
        <div className="part">
            <h2 onClick={()=> dispatch(show())}>Left Part</h2>
        </div>
    )
}