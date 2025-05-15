import React, {useState} from "react";
import "./Form.css";

const Form = ({add}) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    age: "",
    url_image: "",
  });

  const handleChange = (e) => {
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(values);
      add(values); // invocar la función add pasada por props
      setValues({
        name: "",
        email: "",
        age: "",
        url_image: "",
      });
    };

  return <div>
    <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre</label><br />
        <input id="name" type="text" name="name" onChange={handleChange} value={values.name} placeholder="Escribe tu nombre" required/><br />

        <label htmlFor="email">Email</label><br />
        <input id="email" type="email" name="email" onChange={handleChange} value={values.email} placeholder="tucorreo@gmail.com" required/><br />

        <label htmlFor="age">Edad</label><br />
        <input id="age" type="number" name="age" onChange={handleChange} value={values.age} placeholder="Escribe tu edad" required/><br />

        <label htmlFor="url">Imagen</label><br />
        <input id="url" type="url" name="url_image" onChange={handleChange} value={values.url_image} placeholder="Url de la imagen" /><br />

        <button type="submit">Enviar</button>
      </form>
  </div>;
};

export default Form;
