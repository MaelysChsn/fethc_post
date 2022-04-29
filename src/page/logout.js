import {useNavigate} from "react-router-dom"

export default function LogOut({setLogged, setUser, logged}){
  const naviguate = useNavigate();

  const logout = () => {
    setLogged(false);
    setUser(false)
    naviguate('/');
  }

  if(logged){
    return(
      <div>
        <h1>Hello, vous voulez déjà partir ?</h1>
        <button onClick={logout} type="button" className="c-btn logout">Logout</button>
      </div>
    )
  }
}
