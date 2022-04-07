import React, {useState, useEffect} from 'react'
import FormSignIn from './Components/formSignIn'
import FormLogIn from './Components/formLogIn'
import FormPost from './Components/formPost'
import logo from './logo.svg';
import './App.css';

function App() {

  const [active, setActive] = useState('signIn');
  const [postDB, setPostDB] = useState(false);
  const [post, setPost] = useState({user_id: "", title: "", content: ""});

  useEffect(() => {
    setPost(post);
     // POST request using fetch inside useEffect React hook
     const requestOptions = {
       method: 'GET',
       mode: 'cors',
       headers:
       {
         'Accept': 'application/json',
         'Content-Type': 'application.json'
       }
     };

     fetch(`http://localhost:5555/getPost.php`)
         .then(response => response.json())
         .then(data => {
           if(data.sent === true){
             setPostDB(data.result);
          }
         })
         .catch((error) => {
           console.error('Error:', error);
         });
        setActive(active);
        setPostDB(postDB);
   // empty dependency array means this effect will only run once (like componentDidMount in classes)
 }, [postDB, post]);

  return (
    <div className="App">
      <FormSignIn onSetActive={setActive} active={active} isActive={active === 'signIn' ? 'active' : 'notActive'}/>
      <FormLogIn onSetActive={setActive} active={active} isActive={active === 'logIn' ? 'active' : 'notActive'}/>
      <FormPost onSetActive={setActive} active={active} onSetPost={setPost} post={post} isActive={active === 'post' ? 'active' : 'notActive'}/>

      <div className={`c-post ${active === 'post' ? 'active' : 'notActive'}`} >
        <h1>Tout les articles</h1>
        { postDB !== false ?
            postDB.map((item, i) => {
              return(
                <div className="c-card">
                  <h2>{item.title}</h2>
                  <p>Par: [user-name]<br/>Le: {item.date}</p>
                  <p>{item.content}</p>
                </div>
              )
            })
          :
          null
        }
      </div>
    </div>
  );
}

export default App;
