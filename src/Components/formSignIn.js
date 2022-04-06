import React from 'react'

export default function FormSignIn({onSetData, isActive, onSetActive}){

   const handleSubmit = (e) => {
      e.preventDefault();
      onSetData({fname: e.target.username.value, fpassword: e.target.password.value})
   }

    return (
    <>
    <div className={isActive}>
         <p>S'inscrire</p>
         <div>
             <form onSubmit={handleSubmit} >
                 <label>Username</label>
                 <input type="text" id="fusername" name="username" placeholder="Your username.." />


                 <label>Password</label>
                 <input type="password" id="fpassword" name="password" placeholder="Your password.." />

                 <input type="submit" value="login" />
             </form>
         </div>
         <button type="button" onClick={() => onSetActive('login')}>Se connecter ?</button>
      </div>
     </>
    );

}
