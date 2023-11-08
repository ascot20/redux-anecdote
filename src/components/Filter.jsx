import { useDispatch } from "react-redux"
import { filter } from "../reducers/filterReducer"

function Filter() {
    const dispatch = useDispatch()

    const handleChange = (e) => {
        dispatch(filter(e.target.value))
    }
  return (
    <div style={{marginBottom: 10}}>
        filter<input name="filter" onChange={handleChange}/>
    </div>
  )
}
export default Filter