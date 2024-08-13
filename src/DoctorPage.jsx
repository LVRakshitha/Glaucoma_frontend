import React from 'react';
import styles from'./DoctorPage.module.css';
import { CiEdit } from "react-icons/ci";

const DoctorPage = () => {
  const doctor = {
    name: 'Dr. John Doe',
    specialization: 'Ophthalmologists',
    profilePicture: '/Ellipse.png',
    phoneNumber: '123-456-7890',
    email: 'johndoe@gmail.com',
    no_appointments: 10,
    appointments: [
      { patientName: 'Pankaja Kaki'},
      { patientName: 'Akshata B K'},
      { patientName: 'Khushi Amate'},
      { patientName: 'Aishwarya Naik'},
      { patientName: 'Prajakta Naik'}
    ]
  };

  const notifications = [
    {
      patient: "John Doe ",
      message: "My eye pressure has increased.",
      time: " 10 min ago",
      type: "urgent"
    },
    {
      patient: "Jane Smith ",
      message: "I'm experiencing blurred vision.",
      time: " 30 min ago",
      type: "query"
    }
  ];

  const currentDate = new Date().toLocaleDateString();

  return (
    <div className={styles.container}>
      
      <div className={styles.header}>
        <div className={styles.greeting}>
          <div className={styles.date}>{currentDate}</div>
          <h1>Good morning, {doctor.name}!</h1>
          <p>You have {doctor.no_appointments} appointments scheduled for today.</p>
        </div>
      </div>

      <div className={styles.maincontent}>

        <div className={styles.doctorInfo}>
          <div className={styles.profile}>
            <img src={doctor.profilePicture} alt="profile" />
            <div className={styles.profileInfo}>
              <h2>{doctor.name}</h2>
              <p>{doctor.specialization}</p>
              <p>Phone : {doctor.phoneNumber}</p>
              <p>Email : {doctor.email}</p>
              <p>Experience : 20 years </p>
              <p>Currently working in SDM Medical College And Hospital, Dharwad -580002.</p>
            </div>
          </div>
          <div className={styles.appointments}>
            <h2>Appointments</h2>
            <div className={styles.appointmentBanners}>
              {doctor.appointments.map((appointment, index) => (
                <div className={styles.appointmentBanner} key={index}>
                <div className={styles.patientName}>{appointment.patientName}</div>
                  <div className={styles.appointmentTime}>
                    <p>Visited:</p><input type="checkbox" />
                    {/* <CiEdit style={{fontSize:"4px"}}/> */}
                    <CiEdit className={styles.edit}/>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.appointmentLimit}>
            <h2>Appointment Limit: 0-30</h2>
            <input type="range" min="0" max="30" value={doctor.no_appointments} />
            <p>Current limit : {doctor.no_appointments}</p>
          </div>

          <div className={styles.notifications}>
    <div className={styles.notificationsContent}>
    <h2>Notifications</h2>
    {notifications.map((notification, index) => (
      <div key={index} className={`${styles.notificationsItem} ${notification.type}`}>
        <span className={styles.patient}>{notification.patient}</span>
        <span className={styles.message}>{notification.message}</span>
        <span className={styles.time}>{notification.time}</span>
      </div>
    ))}
  </div>
</div>


        </div>
      </div>

      
    </div>
  );
};

export default DoctorPage;