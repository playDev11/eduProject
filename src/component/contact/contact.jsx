import React from 'react'
import './contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from "../../assets/phone-icon.png"
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append('access_key', '06bbfb4c-3f66-4c41-a5f3-fbf9844c2164')

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message sent Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div className="contact">
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt="" /></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et esse eligendi consequatur officiis cum modi animi eum nihil, dignissimos culpa harum optio amet nam sit nulla quis, ea rerum blanditiis voluptas excepturi sequi! Corporis consectetur minima a est quis laboriosam similique odit eveniet. Quo quod hic ea assumenda ipsum? Numquam quidem exercitationem veniam, ducimus aliquam consequuntur!</p>
            <ul>
                <li> <img src={mail_icon} alt="" />codingcanvas.ui@gmail.com</li>
                <li> <img src={phone_icon} alt="" />+123 456 789</li>
                <li> <img src={location_icon} alt="" />7, john doe Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, dolorem? Culpa, sed!</li>
            </ul>
        </div>
        <div className="contact-col">
            <form action="" onSubmit={onSubmit}>
                <label>Your name</label>
                <input type="text" name="name" placeholder='Enter your name' required />
                <label>Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter your Mobile Number' required />
                <label>Write Your Message</label>
                <textarea name="message" id="" rows='10' placeholder='Enter your Message' required></textarea>
                <button className="btn-primary" type='submit'>Submit Now <img src={white_arrow} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact;