import React, { useState } from "react";
import ContactsList from "./ContactsList";

function App(){



  const [contacts, setContacts] = useState([
    {
      id: "karen",
      name: "Karen Isgrigg",
      handle: "karen_isgrigg",
      avatarURL: "https://www.nj.com/resizer/zovGSasCaR41h_yUGYHXbVTQW2A=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg",
    },
    {
      id: "richard",
      name: "Richard Kalehoff",
      handle: "richardkalehoff",
      avatarURL: "http://localhost:5001/richard.jpg",
    },
    {
      id: "tyler",
      name: "Tyler McGinnis",
      handle: "tylermcginnis",
      avatarURL: "http://localhost:5001/tyler.jpg",
    },
  ]); 
  

  const removeContacts = (contact) => {
    setContacts(contacts.filter(c => c.id !== contact.id))
  }

  return (
    <div>
      <ContactsList contacts1={contacts} onDeleteContact={removeContacts}/>
      </div>
  )
}

export default App