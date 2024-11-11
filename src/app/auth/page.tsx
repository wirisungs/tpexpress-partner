import LoginForm from "@/components/Auth/LoginForm";
import AuthLayout from "@/components/Layout/AuthLayout";

const login: React.FC = () => {
  return (
    <div className="w-full h-full">
      <AuthLayout>
        <LoginForm />
      </AuthLayout>
    </div>
  );
};

export default login;
