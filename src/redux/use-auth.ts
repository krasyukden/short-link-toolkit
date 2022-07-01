//import { useSelector } from 'react-redux';
import { RootState } from './store';
import { useAppSelector } from './redux-hook';


export function useAuth() {
  const { email, token, id } = useAppSelector((state: RootState) => state.user )

  return {
    isAuth: !!email,
    email,
    token,
    id
  }
}