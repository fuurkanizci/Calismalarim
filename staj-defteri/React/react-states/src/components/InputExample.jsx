import { useState } from "react";
import "./input.css"
const InputExample = () => {
  const [form, setForm] = useState ({name:"" ,surname:""});
  const onChangeInput =(e)=>{
    console.log(e.target.name);
    setForm({ ...form, [e.target.name]: e.target.value});
    
  };



  return (
    <div className="i">
      {" "}
      please enter a name
      <br /> <input name="name" value={form.name} onChange={onChangeInput} />     
      <br />
      please enter a surname
      <br /> <input name="surname" value={form.surname} onChange={onChangeInput} />   
      <br />
      <br />
      <br />
      {form.name} {form.surname}
    </div>
  );
};

export default InputExample;
