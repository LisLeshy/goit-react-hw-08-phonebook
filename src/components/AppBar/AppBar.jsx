import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import Navigation from 'components/Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';
import { ContainerWrapper } from './AppBar.styled';

const AppBar = () => {
  const isLogin = useSelector(selectIsLoggedIn);
  return (
    <>
      <ContainerWrapper>
        <Navigation />
        {isLogin ? <UserMenu /> : <AuthNav />}
      </ContainerWrapper>
    </>
  );
};

export default AppBar;
