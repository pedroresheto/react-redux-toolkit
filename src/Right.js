import { useDispatch } from "react-redux"
import  { show } from './features/state/stateSlice'

export default function Right(){
    const dispatch  = useDispatch()
    return(
        <div className="part">
            <h2 onClick={()=> dispatch(show())}>Right Part</h2>
        </div>
    )
}