
import { useState } from "react";
import { CONTACT_FORM_ENDPOINT } from "../config";

async function postContactForm(data) {
  const response = await fetch(CONTACT_FORM_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  return response;
}

export default function ContactPage() {

  const [formData, setFormData] = useState({});

  async function handleSubmit(event) {
    await postContactForm(formData);
  }

  function handleChange(event) {
    if (event.target.id === "form-name") {
      const name = event.target.value;
      setFormData(Object.assign(formData, { name }))
    }
    if (event.target.id === "form-email") {
      const email = event.target.value;
      setFormData(Object.assign(formData, { email }))
    }
    if (event.target.id === "form-comment") {
      const comment = event.target.value;
      setFormData(Object.assign(formData, { comment }))
    }
  }

  return (
    <div className="row">
      <div className="item">
        <div className="content">
          Contact us if you found any mistakes or missing data, or if you just want to say hello!
        </div>
        <div className="content">
          <form onSubmit={handleSubmit}>
            <input id="form-name" placeholder="Your name" value={formData.name} onChange={handleChange} required />
            <input id="form-email" type="email" placeholder="Your email" value={formData.email} onChange={handleChange} required />
            <textarea id="form-comment" placeholder="Your comment" value={formData.comment} onChange={handleChange}></textarea>
            <button type="submit">Send</button>
          </form>  
        </div>
      </div>
    </div>
  )
}
