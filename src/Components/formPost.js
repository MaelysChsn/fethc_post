import React, {useState, useEffect} from 'react'
import ErrorCard from './errorCard'

export default function FormPost({currentUser, onSetActive, isActive, active, onSetPost, post}){

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
        body: JSON.stringify(post)
      };

      fetch(`http://localhost:5555/post.php`, requestOptions)
          .then(response => response.json())
          .then(data => {
             console.log('Success', data);
             if(data.sent === true){
                setCode(true);
             }else{
                setCode(data.sent);
             }
          })
          .catch((error) => {
            console.error('Error:', error);
          });


        onSetActive(active);

   // empty dependency array means this effect will only run once (like componentDidMount in classes)
}, [post]);

   const handleSubmit = (e) => {
      e.preventDefault();
      onSetPost({ title: e.target.title.value, content: e.target.content.value, token: e.target.token.value})
   }

    return (
    <>
      <div className={isActive}>
         <p>Poster un article</p>
         <div>
             <form onSubmit={handleSubmit} >
                 <label>Title</label>
                 <input type="text" id="title" name="title" placeholder="Title.." />


                 <label>Content</label>
                 <textarea name="" cols="" rows="" type="text" id="content" name="content" placeholder="Content.." ></textarea>
                 <input type="text" name="token" value={currentUser} hidden />
                 <input type="submit" value="Submit" />
             </form>
         </div>
         <ErrorCard code={code}/>
      </div>
     </>
    );

}
