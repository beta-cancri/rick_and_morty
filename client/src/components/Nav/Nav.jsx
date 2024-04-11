import SearchBar from "../SearchBar/SearchBar"
import style from "./nav.module.css"
import { useNavigate, Link } from "react-router-dom"

const Nav = ({onSearch}) => {
    const navigate = useNavigate()
    return (
        <div className={style.container}>
            <div className={style.home}><button   onClick={() => navigate("/home")}><span>Home</span></button></div>
            <div className={style.back}><button  onClick={() => navigate(-1)}><span>Back</span></button></div>
            <div className={style.about}><button  onClick={() => navigate("/about")}><span>About</span></button></div>
            <div className={style.favorites}><button  onClick={() => navigate("/favorites")}><span>Favorites</span></button></div>
            {/* <button onClick={() => navigate("/detail")}>Details</button> */}
            {/* <Link to="/home">Home</Link> */}
            <SearchBar onSearch={onSearch}/>
        </div>
    )
}

export default Nav