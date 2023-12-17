import axios from 'axios';
import Contacts from './Contacts.jsx';
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
      <div className='text-center'>
        <button onClick={apiCall} className='btn btn-danger'>Show Contacts</button>
      </div>
      <div className='row row-cols-1 row-cols-md-2 g-4' >
        {userObject.map(createContacts)}
      </div>

    </div>
  );
};

export default App;
