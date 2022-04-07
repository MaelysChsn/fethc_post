import React, {useState} from 'react';

export default function ErrorCard({code}){

  var error = [
    {code: 100, text: "Une erreur lors de votre action s'est produite veuillez réessayer !"},
    {code: 101, text: "Vous devez remplir les champs ci-dessus"},
    {code: 102, text: "Le compte n'a pas pu être créer"},
    {code: 103, text: "L'utilisateur existe déjà !"},
    {code: 104, text: "Cet compte n'existe pas !"},
    {code: 105, text: "Le post n'a pas pu être ajouté !"}
  ];

  return (
    <>
    {
      code !== true ?
       <div>
         {
           error.map((item) => {
             if(item.code === code){
               return <p className="red-flag">{item.text}</p>
             }
           })
         }
       </div>
      :
      null
    }
   </>

  )
}
