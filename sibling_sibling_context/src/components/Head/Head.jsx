import React, {useContext, useState} from "react";
import Form from "./Form"
import Card from "./Card/"
import "./Head.css"
import { EmailContext } from "../../context/EmailContext";

const Head = () => {
  const [form,setForm] = useState([]);
  const { email, updateEmail } = useContext(EmailContext);

  const addForm = (new_form) => {
    setForm([...form,new_form]);
    updateEmail(new_form.email);
  }
  return <div>
          <h3>Hola {email}</h3>
          <Form add={addForm}/>  {/* Sibling 1 Formulario */}
          <Card list={form}/>   {/* Sibling 2 Pinta los datos*/}
        </div>;
};

export default Head;
 