import React, { useState } from "react";


const Contact =()=>{
    const [name, setHtext] = useState("");
    const [msg, setMsg] = useState("");

  function handle(event) {
    const name = event.target.value;
    const msg = event.target.value;
    setMsg(msg);
    setHtext(name);
  }
  function handle2(event) {
    const msg = event.target.value;
    setMsg(msg);
  }


function isSend(){
    alert(name + " ThankQ submiting query"+ msg);
}
    return(
        <>


       <div class="container mb-5">
  <form >
    <label for="fname">First Name</label>
    <input type="text" id="fname" onChange={handle} name="firstname" placeholder="Your name"/>

    <label for="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name"/>
    <label for="email">Email</label>
    <input type="text" id="email" name="email" placeholder="Your Email"/>

    <label for="subject">Subject</label>
    <textarea onChange={handle2} id="subject" name="subject" placeholder="Write something"></textarea>

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


	  <a href="https://www.instagram.com/_raviteja_01">
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