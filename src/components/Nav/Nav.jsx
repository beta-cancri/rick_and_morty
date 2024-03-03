import SearchBar from "../SearchBar/SearchBar"
import style from "./nav.module.css"

const Nav = ({onSearch}) => {
    return (
        <div className={style.container}>
            <SearchBar onSearch={onSearch}/>
        </div>
    )
}

export default Nav