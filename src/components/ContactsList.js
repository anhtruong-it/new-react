import React, { useState } from "react";
import ProTypes from 'prop-types'

function ContactsList({contacts1, onDeleteContact}) {
    const [query, setQuery] = useState("");
    
    const updateQuery = (query) => {
        setQuery(query.trim())
    };

    const showingContacts = 
        query === "" 
        ? contacts1 
        : contacts1.filter((c) => c.name.toLowerCase().includes(query.toLowerCase()));

    const clearQuery = () => {
        updateQuery('')
    };

    console.log("value: ", contacts1);
    console.log("Value query: ", query);



    return (
    <div className="list-contacts">
        <div className="list-contact-top">
            <input type="text"
                className="search-contacts"
                placeholder="Search-contacts"
                value={query}
                onChange={(event) => updateQuery(event.target.value)}
                />
        </div>

        {
            showingContacts.length !== contacts1.length && (
               <div className="showing-contacts">
                <span>
                    Now showing {showingContacts.length} of {contacts1.length}
                </span>
                <button onClick={clearQuery}>Show all</button>

               </div>

            )
        }

        <ol className="contact-list">
            {
                showingContacts.map((contact, key) =>(
                    <li key={contact.id} className="contact-list">
                        <div className="contact-avatar" style={{backgroundImage: `url(${contact.avatarURL})`}}></div>
                        <div>{contact.name}</div>
                        <div>{contact.handle}</div>
                        <button onClick={() => onDeleteContact(contact)} className="contact-remove">Remove</button>
                    </li>
                ))
            }
        </ol>
    </div>
    )
}


ContactsList.prototype ={
    contacts1: ProTypes.array.isRequired,
    onDeleteContact: ProTypes.func.isRequired
}

export default ContactsList