import React from 'react'

export default function FormPost({onSetPost, isActive}){

   const handleSubmit = (e) => {
      e.preventDefault();
      onSetPost({ftitle: e.target.title.value, fcontent: e.target.content.value})
   }

    return (
    <>
      <div className={isActive}>
         <p>Poster un article</p>
         <div>
             <form onSubmit={handleSubmit} >
                 <label>Title</label>
                 <input type="text" id="ftitle" name="title" placeholder="Title.." />


                 <label>Content</label>
                 <textarea name="" cols="" rows="" type="text" id="fcontent" name="content" placeholder="Content.." ></textarea>

                 <input type="submit" value="Submit" />
             </form>
         </div>
      </div>
     </>
    );

}
