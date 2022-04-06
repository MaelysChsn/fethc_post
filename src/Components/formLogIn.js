import React from 'react'

export default function FormLogIn({onSetData, isActive, onSetActive}){

 const handleSubmit = (e) => {
      e.preventDefault();
      onSetActive('post');
      onSetData({fname: e.target.username.value, fpassword: e.target.password.value})
   }

    return (
    <>
    <div className={isActive}>
         <p>Se Connecter</p>
         <div>
             <form onSubmit={handleSubmit} >
                 <label>Username</label>
                 <input type="text" id="fname" name="username" placeholder="Your username.." />


                 <label>Password</label>
                 <input type="password" id="fpassword" name="password" placeholder="Your password.." />

                 <input type="submit" value="Submit"/>
             </form>
         </div>
         <button type="button" onClick={() => onSetActive('signIn')}>S'inscrire ?</button>
      </div>
     </>
    );

}
