import React, {useState} from 'react';
import FormLogIn from '../Components/formLogIn'

export default function Login({setUser, setLogged}){


  return(
    <div>
      <FormLogIn setCurrentUser={setUser} setLogged={setLogged}/>
    </div>
  )
}
