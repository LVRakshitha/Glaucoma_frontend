import * as React from 'react';
import styles from './DoctorRegister.module.css';
import { Link } from 'react-router-dom';

export default function DoctorRegister() {
  return (
    <div className={styles.rContainer}>
      
        <form>
        <div className={styles.registerContainer}>
          <h2>Doctor Registration</h2>
          <div className={styles.labelsContainer}>
            <div className={styles.leftLabels}>
              <label>
                Name:
                <input type="text" name="name" placeholder="Enter your name" />
              </label>
              <label>
                Specialization:
                <input type="text" name="specialization" placeholder="Enter your specialization" />
              </label>
              <label>
                Phone:
                <input type="tel" name="phone" placeholder="Enter your phone number" />
              </label>
            </div>
            <div className={styles.rightLabels}>
              <label>
                Email:
                <input type="email" name="email" placeholder="Enter your email" />
              </label>
              <label>
                Experience:
                <input type="number" name="experience" placeholder="Enter your experience in years" />
              </label>
              <label>
                Working at:
                <input type="text" name="workingAt" placeholder="Enter your current workplace" />
              </label>
            </div>
          </div>
         <Link to="/doctor-page"><button type="submit" className={styles.signup}>SignUp</button></Link> 
          </div>
        
        </form>
      </div>
    
  );
}