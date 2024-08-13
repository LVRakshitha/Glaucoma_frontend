import React from "react";
import styles from './AdminLogin.module.css';
import { Link } from "react-router-dom";

export default function AdminLogin() {
    return (
        <div className={styles.loginContainer}>
            <form className={styles.loginForm}>
                <h2>Admin Login</h2>
                <div className={styles.input}>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" required />
                </div>
                <div className={styles.input}>
                    <label>Password</label>
                    <input type="password" id="password" name="password" required />
                </div>
               <Link to="/Admin-page">
               <button type="submit" className={styles.loginButton}>Login</button>
               </Link>
                <div className={styles.extraOptions}>
                    <a href="#" className={styles.forgotPassword}>Forgot Password?</a>
                    <Link to="/Doctor-Registration-form" className={styles.signUp}>
                    Create/Sign Up
                    </Link>
                </div>
            </form>
        </div>
    );
}
