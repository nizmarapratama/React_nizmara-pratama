import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormPage from "../Components/FormPage.jsx";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { setUserEmail } from "../features/userSlice";

const FormPageContainer = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const Navigate = useNavigate();
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
    if (ev.target.name === "hobby") {
        setFormData({
            ...formData, [ev.target.name]: [...formData.hobby, ev.target.value]
        })
        return ;
}
if (ev.target.name === "password") {
    if (ev.target.value.length < 5) {
    } else {
        setIsPasswordError(false)
    }
}
setFormData ({
    ...formData, [ev.target.name]: ev.target.value
   })
}
//   const handleChange = (ev) => {
//     if(e.target.name === "email") {
//       setEmail(e.target.value)
//     }
//     if (ev.target.name === "name") {
//       setName(e.target.value);
//     }
//     if (ev.target.name === "gender") {
//         setGender(ev.target.value);
//     }
//     if (ev.target.name === "password") {
//       if (ev.target.value.length < 5) {
//         setIsPasswordError(true)
//       } else {
//         setIsPasswordError(false)
//       }
//       setPassword(ev.target.value)
//     }
//   }

  const handleSubmit = (ev) => {
    const form  = ev.currentTarget;
    if (form.checkValidity() === false) {
      ev.preventDefault();
      ev.stopPropagation();
    }
    // alernt(name + "\n" + email + "\n" + password + "\n" + gender + "\n" + formData.hobby)
    // alert(formData.name + "\n" + formData.email + "\n" + formData.password + 
    // "\n" + formData.gender + "\n" + formData.hobby)
    dispatch(setUserEmail(formData.email))
    Navigate("/");
    ev.preventDefault();
  }
  return(
    <FormPage email={formData.email}
              name={formData.name}
              password={formData.password}
              count={count}
              isPasswordError={isPasswordError}
              handleSubmit={handleSubmit}
              handleChange={handleChangeformData}/>
  )
}

export default FormPageContainer;
