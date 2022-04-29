import React, {useState, useEffect} from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import ErrorCard from './errorCard'

export default function FormLogIn({setCurrentUser, setLogged}){
    const naviguate = useNavigate();
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const [user, setUser] = useState({username: "", password: ""});
    const [code, setCode] = useState(true);

    useEffect(() => {
      // POST request using fetch inside useEffect React hook
      const requestOptions = {
          method: 'POST',
          mode: 'cors',
          headers:
          {
            'Accept': 'application/json',
            'Content-Type': 'application.json'
          },
          body: JSON.stringify(user)
        };

      fetch(`http://localhost:5555/logIn.php`, requestOptions)
          .then(response => response.json())
          .then(data => {
             if(data.sent === true){
               setCode(true);
               setLogged(true);
               setCurrentUser(data.token.token);
               naviguate(from, {replace: true});
             }else{
                setCode(data.sent);
             }
          })
          .catch((error) => {
            console.error('Error:', error);
          });

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
}, [user]);


    const handleSubmit = (e) => {
      e.preventDefault();
      setUser({username: e.target.username.value, password: e.target.password.value});
      console.log(user)
   }

    return (
    <>
    <div className="acitve">
         <p>Se Connecter</p>
         <div>
             <form onSubmit={handleSubmit}>
                 <label>Username</label>
                 <input type="text" id="username" name="username" placeholder="Your username.." />


                 <label>Password</label>
                 <input type="password" id="password" name="password" placeholder="Your password.." />

                 <input type="submit" value="Submit"/>
             </form>
         </div>
         <button type="button" className="btn">S'inscrire ?</button>
         <ErrorCard code={code} />
      </div>
     </>
    );

}
