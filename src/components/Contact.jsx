import React, { useState } from "react";
import emailjs from "emailjs-com";
// import Swal from 'sweetalert2/dist/sweetalert2.js';
import Swal from"sweetalert2";


const Contact =()=>{

  function sendEmail(e) {
    e.preventDefault();

emailjs.sendForm('mymail', 'mailtemp', e.target, 'user_99C5dOnKTAHWxqGk0SmjN')
    .then((result) => {
        
    }, (error) => {
       
    });
    e.target.reset()
}

  const [name, setHtext] = useState("");

  function handle(event) {
    const name = event.target.value; 
    setHtext(name);
  }

function isSend(){
if(name){
    Swal.fire(
    name,
    ' email sent Successfully !',
    'success'
  );
} else 
Swal.fire({
  icon: 'error',
  title: 'Please fill the details',
  text: 'Something went wrong!',
})
}


    return(
        <>


       <div class="container col-6 col-10 mb-5">
  <form onSubmit={sendEmail}>
    <label for="fname">First Name</label>
    <input type="text" id="fname" onChange={handle} name="name" placeholder="Your name" autoFocus/>

    <label for="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name" />
    <label for="email">Email</label>
    <input type="text"  id="email" name="email" placeholder="Your Email"/>

    <label for="subject">Subject</label>
    <textarea id="subject" name="subject" placeholder="Write something"></textarea>

    <input type="submit" onClick={isSend}value="Submit"/>
  </form>
</div>


       <div class="centerdiv mb-0">
	<a href="https://www.facebook.com/dugge.raviteja">
		<i class="fab fa-2x fa-facebook-f"></i>
	</a>


	  <a href="https://twitter.com/DuggeRaviteja">
		<i class="fab fa-2x fa-twitter"></i>
	</a>


	  <a href="https://www.instagram.com/__raviteja__01">
		<i class="fab fa-2x fa-instagram"></i>
	</a>

        <a  href="https://www.linkedin.com/in/dugge-raviteja-789ravi">
		<i class="fab fa-2x fa-linkedin"></i>
    </a>
</div>

        </>
    );
}
export default Contact;