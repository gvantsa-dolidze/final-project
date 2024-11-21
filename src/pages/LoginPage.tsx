import HorizontalLine from "../components/authentication_pages_components/HorizontalLine";
import Breadcrumb from "../components/elements/Breadcrumb";
import LoginForm from "../components/authentication_pages_components/LoginForm";
import Layout from "../components/layout/Layout";
import Button from "../components/elements/Button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const LoginPage: React.FC = () => {
  const [hasToken, setHasToken] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("AccessToken");
    if (token) {
      setHasToken(true);
    }
  }, []);

  useEffect(() => {
    if (hasToken) {
      navigate("/profile_page");
    }
  }, [hasToken, navigate]);

  if (hasToken) {
    return null;
  }

  return (
    <Layout>
      <div className="bg-BackgroundGray">
        <div className="max-w-1116 m-auto py-5">
          <Breadcrumb
            title="Login"
            label="Ecommerce"
            secondaryLabel="Login"
            destination="/"
            secondaryDestination="/login_page"
          />
        </div>
      </div>
      <div className="max-w-1116 m-auto flex justify-center py-10">
        <div className="flex flex-col items-center gap-5 w-80 py-10">
          <Button
            label="Continue with Google"
            variant="light"
            img="/img/social_icons/google.png"
            className="w-full"
          />
          <HorizontalLine />
          <LoginForm />
        </div>
      </div>
    </Layout>
  );
};

export default LoginPage;
