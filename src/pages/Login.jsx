import Login_image from "../assets/Images/Login_image.jpeg"
import Template from "../components/core/Auth/Template"

function Login() {
  return (

    <>
    
<Template
      title="Welcome Back"
      description1="Build skills for today, tomorrow, and beyond."
      description2="Education to future-proof your career."
      image={Login_image}
      formType="login"
    />
    
    </>
    
    
  )
}

export default Login
