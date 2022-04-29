import React, {useState, useEffect} from 'react'

import FormPost from './Components/formPost'
import logo from './logo.svg';
import './App.css';

function App({user, logged}) {
  const [postDB, setPostDB] = useState(false);
  const [currentUser, setCurrentUser] = useState(user);
  const [post, setPost] = useState({title: "", content: "", token: ""});

  useEffect(() => {
    setCurrentUser(currentUser);
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
           console.log()
           if(data.sent === true){

             setPostDB(data.result);
          }
         })
         .catch((error) => {
           console.error('Error:', error);
         });

        setPostDB(postDB);
   // empty dependency array means this effect will only run once (like componentDidMount in classes)
 }, [post, postDB]);

  return (
    <div className="App">


      <div className='c-post active'>
        <h1>Tout les articles</h1>
        { postDB !== false ?
            postDB.map((item, i) => {
              return(
                <div className="c-card">
                  <h2>{item.title}</h2>
                  <p>Par: {item.username}<br/>Le: {item.currentDate}</p>
                  <p>{item.content}</p>
                </div>
              )
            })
          :
          null
        }
      </div>
      <FormPost currentUser={currentUser} onSetPost={setPost} post={post} logged={logged}/>
    </div>
  );
}

export default App;
