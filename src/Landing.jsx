import React from 'react';
import styles from './landing.module.css';
import { IoIosLogIn } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMenu } from 'react-icons/io5';
import {Link} from 'react-router-dom';
import { useState } from 'react';

function Landing(){

    const [isNavLinksVisible, setIsNavLinksVisible] = useState(false);
  
    const handleMenuClick = () => {
      setIsNavLinksVisible(!isNavLinksVisible);
    };

      const [isDialogOpen, setIsDialogOpen] = useState(false);
    
      const openDialog = () => {
        setIsDialogOpen(true);
      };
    
      const closeDialog = () => {
        setIsDialogOpen(false);
      };
    
      // const handleSelection = (role) => {
      //   if (role === 'doctor') {
      //     // Handle doctor selection, e.g., navigate to the doctor page
      //   } else if (role === 'admin') {
      //     // Handle admin selection, e.g., navigate to the admin page
      //   }
      //   closeDialog();
      // };

    return (
        <div className={styles.container}>
{/* ----------------------------------------------------- */}

        <div className={styles.header}>
                <nav className={styles.navbar}>
                    <div className={styles.logo}>
                        <h1>Glaucoma Care</h1>
                    </div>
                    <ul className={styles.navLinks}>
  <a href="#home" style={{ textDecoration: 'none' }}><li>Home</li></a>
  <a href="#about" style={{ textDecoration: 'none' }}><li>About</li></a>
  <li className={styles.selectContainer}>
    <select className={styles.select}>
      <option value="">Pages</option>
      <option value="#patients">Patients</option>
      <option value="#doctors">Doctors</option>
      
    </select>
  </li>
  <a href="#contact" style={{ textDecoration: 'none' }}><li>Contact</li></a>
</ul>
                  <div className={styles.searchIcon}>
                  <Link to="/registration-form"> <IoIosLogIn style={{fontSize:"30px"}}/></Link>
                       <IoMenu style={{fontSize:"30px"}} className={styles.menu} onClick={handleMenuClick}/>
                    </div>
                </nav>
            </div>

{/* --------------------------------------------- */}


<div className={styles.mainBody} id='home'>
  <div className={styles.mainContent}>
    <h1>See the World Brighter with Glaucoma Care.<br /></h1>
    <p>Don't wait until it's too late, get tested for Glaucoma today! <br /><br /><br /></p>
    <div className="buttons">
    <Link to="/registration-form"><button className={styles.scheduleExam}>Book Appointment</button></Link>
    {/* <Link to="/doctor-page"><button className={styles.learnMore}>Doctor</button></Link> */}
   
    <button className={styles.learnMore} onClick={openDialog}>Doctor</button>

    {isDialogOpen && (
      <div className={styles.dialog}>
        <div className="p"><p>Login as doctor or an admin?</p></div>
        <div className="opts">
        <Link to="/doctor-login" style={{textDecoration:'none'}}><button>Doctor</button></Link>
        <Link to="/admin-login" style={{textDecoration:'none'}}><button>Admin</button></Link>
        <button onClick={closeDialog}>Cancel</button></div>
      </div>
    )}
   
   
   
    </div>
  </div>
  <div className={styles.images}>
    <img src="/landing1.jpg" alt="photo" />
  </div>
</div>

{/* ---------------------------------------------------------------- */}

<div className={styles.aboutContent} id='about'>
<div className={styles.aboutImage}>
    <img src="about1.jpeg" alt="" />
  </div>
  <div className={styles.aboutText}>
    <h1>About Us</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, dolore quae? Eligendi similique quidem odio consequatur, beatae itaque suscipit ea soluta minima ad, dolores atque. Reprehenderit ipsa earum ducimus delectus.
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Dolorum, porro explicabo. Laborum dicta molestias libero eaque 
       ullam, aut voluptatum cupiditate expedita iure hic perspiciatis, 
       maxime nesciunt similique sint, placeat assumenda?</p>

       <div className={styles.banners}>
    <div className={styles.certifiedDoctors}>
      <img src="/ceritfied.png" alt="" className={styles.img}/>
      <h2>Certified Doctors</h2>
      <p>Our team of certified doctors are dedicated to providing the best care for your eyes.</p>
    </div>
    <div className={styles.latestTechnologies}>
      <img src="/tech.png" alt=""  className={styles.img}/>
      <h2>Latest Technologies</h2>
      <p>We use the latest technologies to ensure accurate diagnoses and effective treatments.</p>
    </div>
    <div className={styles.customerCare}>
      <img src="care.png" alt="" className={styles.img}/>
      <h2>24/7 Customer Care</h2>
      <p>Our customer care team is available 24/7 to answer any questions or concerns you may have.</p>
    </div>
  </div>
  </div>
 
</div>

{/* --------------------------------------------------------------- */}

<div className={styles.contacts} id='contact'> 
<h1>Glaucoma Care</h1>
<p>Shri Dharmastala Manjunatheshwara Medical College and Hospital, Dharwad-580002.</p>

<div className={styles.newChange}>
<div className={styles.cont}>
<p><IoCall />&nbsp;  +1234567890
<br /><IoMail />&nbsp;glaucomacare@gmail.com</p><br/>
</div>

<div className={styles.follow}>

<div><h2>Follow Us</h2>
</div>

<div className={styles.icons}>
<div><FaFacebook style={{fontSize:"30px"}}/></div>
<div><FaLinkedin style={{fontSize:"30px"}}/></div>
<div><FaTwitter style={{fontSize:"30px"}}/></div>
<div><FaYoutube style={{fontSize:"30px"}}/></div>
</div>

</div>
</div>

<div className={styles.copyright}>
  <p>Copyright &nbsp; &copy; &nbsp; 2024 GlaucomaCare.com</p>
</div>

</div>


{/* ---------------------------------------------------------------------- */}
        </div>
    );
}

export default Landing; 