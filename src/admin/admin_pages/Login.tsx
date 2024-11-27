import LinkBtn from "../../components/elements/LinkBtn"
import Layout from "../../components/layout/Layout"


const Login = () => {
  return (
    <Layout>
      <div className="max-w-1116 m-auto flex justify-center py-10">

        <div className="w-96 h-56 p-5 space-y-10 my-10" >
          <p>Please Login first or Sign up if you don't have account</p>
          <div className="flex gap-5 justify-center">
            <LinkBtn destination="/login_page" label='Sign In' />
            <LinkBtn destination="/sign_up_page" label='Sign Up' />
          </div>

        </div>
      </div>
    </Layout>

  )
}

export default Login