import React, {useState, useEffect} from 'react'
import FormSignIn from './Components/formSignIn'
import FormLogIn from './Components/formLogIn'
import FormPost from './Components/formPost'
import logo from './logo.svg';
import './App.css';

function App() {


  const [data, setData] = useState({fusername: '', fpassword: ''});
  const [post, setPost] = useState({ftitle: '', fcontents: ''});
  const [active, setActive] = useState('signIn');

  useEffect(() => {


    // POST request using fetch inside useEffect React hook
    const requestOptions = {
      method: 'POST',
      mode: 'cors',
      headers:
      {
         'Accept': 'application/json',
         'Content-Type': 'application/json',
      },
      body: {username: "test", password: "1234"}
    };

    fetch('http://localhost:5555', requestOptions)
        .then(response => response.json())
        .then(data => console.log('Success', data))
        .catch((error) => {
          console.error('Error:', error);
        });

        console.log('user', data);

      setActive(active)

  // empty dependency array means this effect will only run once (like componentDidMount in classes)
}, [data, active]);

  return (
    <div className="App">
      <FormSignIn onSetData={setData} onSetActive={setActive} isActive={active === 'signIn' ? 'active' : 'notActive'}/>
      <FormLogIn onSetData={setData} onSetActive={setActive} isActive={active === 'login' ? 'active' : 'notActive'}/>
      <FormPost onSetPost={setPost} isActive={active === 'post' ? 'active' : 'notActive'}/>

      <div className={`c-post ${active === 'post' ? 'active' : 'notActive'}`} >
        <h1>Tout les articles</h1>

      </div>
    </div>
  );
}

export default App;
