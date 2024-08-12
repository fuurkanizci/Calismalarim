import React, { useEffect, useState } from "react";
import List from "./List";
import Form from "./Form";
import "./styles.css";
const Contacts = () => {
  const [contact, setContact] = useState([
    { fullname: "furkan", phone_number: "12314" },
    {
      fullname: "nazar",
      phone_number: "67543437",
    },
    {
      fullname: "mehmet",
      phone_number: "8998778",
    },
  ]);

  useEffect(() => {
    console.log(contact);
  }, [contact]);

  return (
    <div  id="container">
      <h1>Contacts</h1>
      <List contacts={contact} />
      <Form addContact={setContact} contacts={contact} />
    </div>
  );
};

export default Contacts;
