import axios from 'axios';
import Contacts from './Contacts.js';
import React, { useState } from "react";

const expURL = "http://localhost:9000/";

function createContacts(contact) {
  return <div>
    <Contacts
      key={contact.id}
      name={contact.name}
      phone={contact.phone}
      username={contact.username}
      website={contact.website}
    />
  </div>
}


function App() {
  const [userObject, setName] = useState([{
    name: "",
    phone: "",
    username: "",
    website: ""
  }])

  const apiCall = () => {
    console.log("Clicked from client")
    axios.get(expURL).then((data) => {
      console.log(data.data[0].name)
      setName(data.data)
      console.log("got clicked!")
    }).catch((error) => {
      console.error(error);
    })
  };

  return (
    <div className="App">
      <h1>Contacts</h1>
      <button onClick={apiCall} className='btn btn-danger'>show users</button>
      {userObject.map(createContacts)}
    </div>
  );
};

export default App;
