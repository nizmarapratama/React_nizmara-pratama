import React, { useState } from "react";
import FormPage from "../Components/FormPage.jsx";

const FormPageContainer = () => {
    const [formData, setFormData] = useState("");
}

// const FormPageContainer = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [name, setName] = useState("");
//   const [gender, setGender] = useState("");
//   const [isPasswordError, setIsPasswordError] = useState(false);

const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    gender: "",
    hobby: []
});

const [isPasswordError, setIsPasswordError] = useState(false);

const handleChangeformData = (ev) => {
    if (ev.)
}
 

  const handleChange = (ev) => {
    if(e.target.name === "email") {
      setEmail(e.target.value)
    }
    if (ev.target.name === "name") {
      setName(e.target.value);
    }
    if (ev.target.name === "gender") {
        setGender(ev.target.value);
    }
    if (ev.target.name === "password") {
      if (ev.target.value.length < 5) {
        setIsPasswordError(true)
      } else {
        setIsPasswordError(false)
      }
      setPassword(ev.target.value)
    }
  }

  const handleSubmit = (ev) => {
    const form  = ev.currentTarget;
    if (form.checkValidity() === false) {
      ev.preventDefault();
      ev.stopPropagation();
    }
    alert(formData.name + "\n" + formData.email + "\n" + formData.password + "\n" + formData.gender)

    ev.preventDefault();
  }
  return(
    <FormPage email={formData.email}
              name={formData.name}
              password={formData.password}
              isPasswordError={isPasswordError}
              handleSubmit={handleSubmit}
              handleChange={handleChangeformData}/>
  )
}

export default FormPageContainer;
