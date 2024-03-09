import SearchBar from "../SearchBar/SearchBar"
import style from "./nav.module.css"
import { useNavigate, Link } from "react-router-dom"

const Nav = ({onSearch}) => {
    const navigate = useNavigate()
    return (
        <div className={style.container}>
            <button onClick={() => navigate(-1)}>Back</button>
            <button onClick={() => navigate("/home")}>Home</button>
            <button onClick={() => navigate("/about")}>About</button>
            {/* <button onClick={() => navigate("/detail")}>Details</button> */}
            {/* <Link to="/home">Home</Link> */}
            <SearchBar onSearch={onSearch}/>
        </div>
    )
}

export default Nav