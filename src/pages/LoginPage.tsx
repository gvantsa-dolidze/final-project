import ContinueWithGoogle from "../components/authentication_pages_components/ContinueWithGoogle";
import HorizontalLine from "../components/authentication_pages_components/HorizontalLine";
import Breadcrumb from "../components/elements/Breadcrumb";
import LoginForm from "../components/authentication_pages_components/LoginForm";
import Layout from "../components/layout/Layout"

const LoginPage = () => {
  return (
    <Layout>
      <div className="bg-BackgroundGray">
        <Breadcrumb label='Login' title='Login'/>
      </div>
      <div className="max-w-1116 m-auto flex justify-center py-10">
          <div className="flex flex-col items-center gap-5 w-96 py-10">
            <ContinueWithGoogle />
            <HorizontalLine />
            <LoginForm />
          </div>
      </div>
    </Layout>
  );
};

export default LoginPage;
