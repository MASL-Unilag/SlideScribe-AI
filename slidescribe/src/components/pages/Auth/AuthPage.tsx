

import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import PasswordResetForm from "./PasswordResetForm";


export default function AuthPage() {
    return (
        <div>
        <h1>Auth Page</h1>
        <LoginForm />
        <RegisterForm />
        <PasswordResetForm />
        </div>
    );
}