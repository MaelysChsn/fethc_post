import React, {useState,useEffect} from 'react'
import ErrorCard from './errorCard'

export default function FormSignIn({isActive, onSetActive, active}){

    const [data, setData] = useState({username: "", password: ""});
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
        body: JSON.stringify(data)
      };

      fetch(`http://localhost:5555/signIn.php`, requestOptions)
          .then(response => response.json())
          .then(data => {
            if(data.sent === true){
              onSetActive('post');
              setCode(true);
            }else{
              setCode(data.sent);
            }
          })
          .catch((error) => {
            console.error('Error:', error);
          });

          console.log('user', data);

        onSetActive(active);

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, [data, active]);


   const handleSubmit = (e) => {
      e.preventDefault();
      setData({username: e.target.username.value, password: e.target.password.value})
   }

    return (
    <>
    <div className={isActive}>
         <p>S'inscrire</p>
         <div>
             <form onSubmit={handleSubmit} >
                 <label>Username</label>
                 <input type="text" id="username" name="username" placeholder="Your username.." />


                 <label>Password</label>
                 <input type="password" id="password" name="password" placeholder="Your password.." />

                 <input type="submit" value="Sign In" />
             </form>
         </div>
         <button type="button"  className="btn" onClick={() => onSetActive('logIn')}>Se connecter ?</button>
         <ErrorCard code={code}/>
      </div>


     </>
    );

}
