import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { logoutThunk } from '../../redux/auth/operations';
import s from './UserMenu.module.css';


const UserMenu = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    return (
    <div>
        <p>Welcome, {user.name}</p>
        <button type="button" className={s.button} onClick={() => dispatch(logoutThunk())}>
            LOG OUT
            </button>
    </div>
    );
};

export default UserMenu;

