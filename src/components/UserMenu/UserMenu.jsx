import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { logOut } from 'redux/auth/operations';
import { Button, Title } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectUser);
  const handleOut = e => {
    dispatch(logOut({}));
  };

  return (
    <div>
      <Title>Wellcome, {name}</Title>

      <Link to={'/'}>
        <Button type="button" onClick={() => handleOut()}>
          Log out
        </Button>
      </Link>
    </div>
  );
};

export default UserMenu;
