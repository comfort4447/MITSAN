import React from "react";

export default function Contact() {
    return(
        <div>
        <div className="contact" id="contact">
            <div className="contact-header">
                <h1>Contact Us</h1>
                <p>1B Bristol Road Apapa, Lagos</p>
            </div>
            <div className="contact_details">
                <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3964.6033133304254!2d3.3607663141305575!3d6.44495077758202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sbristol%20road%20near%20Apapa%2C%20Lagos!5e0!3m2!1sen!2sng!4v1648158252254!5m2!1sen!2sng" width="600" height="450" title="Map" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <form >
                    <input type="email" id="fname" name="fname" placeholder="Email"></input><br></br>
                    <input type="text" id="lname" name="lname" placeholder="Phone Number"></input><br></br>
                    <textarea  placeholder="Message" rows="7" cols="40"></textarea><br></br>
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        </div>
        </div>
    )
}