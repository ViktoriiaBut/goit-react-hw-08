
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice"; 
import s from "./SearchBox.module.css";
import { selectNameFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
    const dispatch = useDispatch();
    const filter = useSelector(selectNameFilter); 

    const handleFilterChange = (e) => {
        dispatch(changeFilter(e.target.value));
    };

    return (
        <div className={s.searchContainer}>
            <label >Find contacts by name</label>
            <input
                type="text"
                value={filter}
                onChange={handleFilterChange}
            />
        </div>
    );
};

export default SearchBox;


