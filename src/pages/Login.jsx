import { Link } from "react-router-dom"


export const Login = () => {

  return (
    <form>
      <h1> Form Validation In Vite + React </h1>
      <input type="text" placeholder="username..."/>
      <br />
      <input type="text" placeholder="password..." />
      <Link to="*"> <input type="submit" /> </Link>
      &emsp;&emsp;&emsp; Do not have an account?
      <Link to="/form">SignUp</Link>
    </form>
  )
}