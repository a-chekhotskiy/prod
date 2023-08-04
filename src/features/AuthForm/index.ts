// import { loginReducer } from './model/slice/loginSlice';
// import AuthForm from './ui/AuthForm/AuthForm';
// import { AuthFormAsync } from './ui/AuthForm/AuthForm.async';
import { AuthModal } from './ui/AuthModal/AuthModal';
import { LoginSchema } from './model/types/LoginSchema';
import { loginThunk } from './model/thunks/loginThunk/loginThunk';

export { AuthModal, LoginSchema, loginThunk };
