import { Link } from "react-router-dom"

export const Main = () => {
  return (
    <main>
      <h1> WELCOME </h1>
      <Link to="/"> <button>LogOut</button> </Link>
    </main>
  )
}