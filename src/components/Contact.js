import React from 'react'

export default function Contact({img, name, phone, email}) {
  return (
    <div className="contact-card">
      <img src={img} alt=""/>
      <h3>{name}</h3>
          <p>Phone: {phone}</p>
          <p>Email: {email}</p>
    </div>
  )
}
