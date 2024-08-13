import * as React from 'react';
import styles from './AdminPage.module.css';
import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import { useEffect } from 'react';
import { MdDeleteOutline } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoMdHome } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { FaStethoscope } from "react-icons/fa";
import IconButton from 'react'
// import { DataGrid } from '@mui/x-data-grid';
import { Grid } from '@mui/material';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';
import { green } from '@mui/material/colors';

export default function AdminPage(){
    const [currentPage, setCurrentPage] = React.useState('home');

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    
    return (
        <div className={styles.mainBody}>
            <div className={styles.sideBar}>
                <div className={styles.sideBarContainer}>
                  <h1>Glaucoma</h1>
                    <div className={styles.sideBarItem} onClick={() => handlePageChange('home')}>
                   <IoMdHome style={{fontSize:'28px'}}/>&nbsp;Home
                    </div>
                    <div className={styles.sideBarItem} onClick={() => handlePageChange('doctor')}>
                        <FaStethoscope/>&nbsp;Doctor
                    </div>
                    <div className={styles.sideBarItem} onClick={() => handlePageChange('patient')}>
                    <IoPerson />&nbsp;Patient
                    </div>
                </div>
            </div>

            {/* ==================== */}
            <div className={styles.sidePages}>
                {currentPage === 'home' && <HomePage />}
                {currentPage === 'doctor' && <DoctorPage />}
                {currentPage === 'patient' && <PatientPage />}
            </div>
        </div>
    );
}

function HomePage() {
  return (
    <div className={styles.homePage}>
      <h1>Admin Dashboard</h1>
      <div className={styles.dashboardInfo}>
        <div className={`${styles.banner} ${styles.blueBanner}`}>
          <h2>Total Patients: 1000</h2>
          <p>Number of patients registered in the system</p>
        </div>
        <div className={`${styles.banner} ${styles.greenBanner}`}>
          <h2>Total Doctors: 50</h2>
          <p>Number of doctors registered in the system</p>
        </div>
        <div className={`${styles.banner} ${styles.orangeBanner}`}>
          <h2>Total Appointments: 500</h2>
          <p>Number of appointments scheduled in the system</p>
        </div>
        <div className={`${styles.banner} ${styles.purpleBanner}`}>
          <h2>Average Rating: 4.5/5</h2>
          <p>Average rating of doctors by patients</p>
        </div>
      </div>
    
    </div>
  );
}



// ===========================================================================





const DoctorPage = () => {
  const [open, setOpen] = useState(false);
  const [newDoctor, setNewDoctor] = useState({
    name: '',
    Phone: '',
    email: '',
    specialization: '',
    experience: '',
    workingLocation: '',
  });

  const columns = [
    { field: 'id', headerName: 'Sl.no', width: 70 ,sortable: false },
    { field: 'name', headerName: 'Name', width: 150 ,sortable: false},
    { field: 'Phone', headerName: 'Phone no', width: 120 ,sortable: false},
    { field: 'email', headerName: 'Email', width: 150 ,sortable: false},
    { field: 'specialization', headerName: 'Specialization', width: 150 ,sortable: false},
    { field: 'experience', headerName: 'Experience', width: 100 ,sortable: false},
    { field: 'workingLocation', headerName: 'Working Location', width: 100 ,sortable: false},
    {
      field: 'actions',
      headerName: 'Actions',
      width: 100,
      sortable: false,
      renderCell: (params) => (
        <div>
          <FaEdit />&nbsp;&nbsp;
          <MdDeleteOutline/>
          {/* import { MdDeleteOutline } from "react-icons/md"; */}

        </div>
      ),
    },
  ];

  const [rows , setRows] = useState([
    {
      id: 1,
      name: 'Dr. John Doe',
      Phone: '1234567890',
      email: 'johndoe@example.com',
      specialization: 'Cardiology',
      experience: '5 years',
      workingLocation: 'Hospital A',
    },
    {
      id: 2,
      name: 'Dr. Jane Smith',
      Phone: '0987654321',
      email: 'janesmith@example.com',
      specialization: 'Neurology',
      experience: '10 years',
      workingLocation: 'Hospital B',
    },
  ]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFormChange = (event) => {
    setNewDoctor({ ...newDoctor, [event.target.name]: event.target.value });
  };

  // useEffect(() => {
  //   const storedRows = localStorage.getItem('rows');
  //   if (storedRows) {
  //     setRows(JSON.parse(storedRows));
  //   }
  // }, []);

  const handleSubmit = () => {
    const newRow = { ...newDoctor, id: rows.length + 1 };
    setRows([...rows, newRow]);
    // localStorage.setItem('rows', JSON.stringify(rows));
    setOpen(false);
  };

  return (
    <div className={styles.doctorConatiner}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <div style={{
          padding: 20,
          width: '100%',
          maxWidth: 1800,
          margin: 'auto',
        }}>
          <h1 style={{
            textAlign: 'center',
            fontSize: 34,
            fontWeight: 'bold',
            marginBottom: 20,
            color: 'rgb(21, 75, 130)',
          }}> Doctor's Details</h1>
          <div className={styles.btn}>
            <button onClick={handleOpen} style={{ marginLeft: '70%',
            marginBottom: '30px',
            height: '30px',
            width:'100px',
            fontSize:' 15px',
            color: 'white',
            border: '1px solid rgb(146, 141, 141)',
            borderRadius: '10px',
            backgroundColor: 'rgb(14, 96, 173)'}}>
              Add Doctor
            </button>
          </div>
          <DataGrid
            rows={rows}
            columns={columns}
            disableColumnMenu
            disableSelectionOnClick
            checkboxSelection={false}
            hideFooter
            sx={{
              width: '75%',
              borderRadius: 5,
              marginLeft:'5%',
              marginTop:'2%',
              '& .MuiDataGrid-columnHeader': {
                backgroundColor: 'rgb(100,137,189)',
                color: 'black', 
              },
            }}

            disableSorting={true}
          />
        </div>
      </Box>

      <Dialog open={open} onClose={handleClose} fullWidth={false} maxWidth={'sm'}>
        <DialogTitle className={styles.dialogTitle} style={{ textAlign: 'center' }}>
          <h2 style={{color:'black'}}>Add Doctor</h2>
        </DialogTitle>
        <DialogContent style={{overflowX: 'hidden'}}>
          <form>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Name"
                  name="name"
                  value={newDoctor.name}
                  onChange={handleFormChange}
                  margin="dense"
                  className={styles.txtf}
                  style={{ width: 250,
                    borderRadius:'10px'
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Phone"
                  name="Phone"
                  value={newDoctor.Phone}
                  onChange={handleFormChange}
                  margin="dense"
                  className={styles.txtf}
                  style={{ width: 250 }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Email"
                  name="email"
                  value={newDoctor.email}
                  onChange={handleFormChange}
                  margin="dense"
                  className={styles.txtf}
                  style={{ width: 250 }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Specialization"
                  name="specialization"
                  value={newDoctor.specialization}
                  onChange={handleFormChange}
                  margin="dense"
                  className={styles.txtf}
                  style={{ width: 250 }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Experience"
                  name="experience"
                  value={newDoctor.experience}
                  onChange={handleFormChange}
                  margin="dense"
                  className={styles.txtf}
                  style={{ width: 250 }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Working Location"
                  name="workingLocation"
                  value={newDoctor.workingLocation}
                  onChange={handleFormChange}
                  margin="dense"
                  className={styles.txtf}
                  style={{ width: 250 }}
                />
              </Grid>
            </Grid>
          </form>
        </DialogContent>
        <DialogActions>
        <Button onClick={handleClose} style={{ backgroundColor: 'gray', color: 'white' }}>
            Cancel
          </Button>
          <Button onClick={handleSubmit} style={{ backgroundColor: green[500], color: 'white' }}>
            Add Doctor
          </Button>
          
        </DialogActions>
      </Dialog>
    </div>
  );
};


// ============================================================================



const PatientPage = () => {
    const [open, setOpen] = useState(false);
    const [newPatient, setNewPatient] = useState({
      fName: '',
      lName: '',
      Age: '',
      Gender: '',
      Phone: '',
      Email: '',
      Username: '',
      Password: '',
      'Blood Group': '',
      Allergic: '',
      'Other Diesease': '',
    });
  
    const columns = [
      { field: 'id', headerName: 'Sl.no', width: 60 ,sortable: false},
      { field: 'fName', headerName: 'First Name', width: 100 ,sortable: false},
      { field: 'lName', headerName: 'Last Name', width: 100 ,sortable: false},
      { field: 'Age', headerName: 'Age', width: 30 ,sortable: false},
      { field: 'Gender', headerName: 'Gender', width: 70 ,sortable: false},
      { field: 'Phone', headerName: 'Phone no', width: 90 ,sortable: false},
      { field: 'Email', headerName: 'Email', width: 90 ,sortable: false},
      { field: 'Username', headerName: 'Username', width: 90 ,sortable: false},
      { field: 'Password', headerName: 'Password', width: 90 ,sortable: false},
      { field: 'Blood Group', headerName: 'Blood Group', width: 100 ,sortable: false},
      { field: 'Allergic', headerName: 'Allergic', width: 80 ,sortable: false},
      { field: 'Other Diesease', headerName: 'Other Diesease', width: 120 ,sortable: false},
      {
        field: 'actions',
        headerName: 'Actions',
        width: 100,
        sortable: false,
        renderCell: (params) => (
          <div>
            <FaEdit />&nbsp;&nbsp;
            <MdDeleteOutline/>
          </div>
        ),
      },
    ];
  
    const [rows, setRows] = useState([
      {
        id: 1,
        fName: 'John',
        lName: 'Doe',
        Age: 25,
        Gender: 'Male',
        Phone: '1234567890',
        Email: 'johndoe@example.com',
        Username: 'johndoe',
        Password: 'password123',
        'Blood Group': 'O+',
        Allergic: 'Nuts',
        'Other Diesease': 'Diabetes'
      },
      {
        id: 2,
        fName: 'Jane',
        lName: 'Smith',
        Age: 30,
        Gender: 'Female',
        Phone: '0987654321',
        Email: 'janesmith@example.com',
        Username: 'janesmith',
        Password: 'password123',
        'Blood Group': 'A+',
        Allergic: 'Shellfish',
        'Other Diesease': 'Hypertension'
      },
      {
        id: 3,
        fName: 'Bob',
        lName: 'Johnson',
        Age: 35,
        Gender: 'Male',
        Phone: '5551234567',
        Email: 'bobjohnson@example.com',
        Username: 'bobjohnson',
        Password: 'password123',
        'Blood Group': 'B+',
        Allergic: 'Peanuts',
        'Other Diesease': 'Asthma'
      },
      {
        id: 4,
        fName: 'Alice',
        lName: 'Williams',
        Age: 28,
        Gender: 'Female',
        Phone: '8765432109',
        Email: 'alicewilliams@example.com',
        Username: 'alicewilliams',
        Password: 'password123',
        'Blood Group': 'AB+',
        Allergic: 'Dust',
        'Other Diesease': 'Arthritis'
      }
    ]);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const handleFormChange = (event) => {
      setNewPatient({ ...newPatient, [event.target.name]: event.target.value });
    };
  
    const handleSubmit = () => {
      const newRow = { ...newPatient, id: rows.length + 1 };
      setRows([...rows, newRow]);
      setOpen(false);
    };
  
    return (
      <div className="homeConatiner">
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <div style={{
            padding: 20,
            width: '90%',
            maxWidth: 1200,
            margin: 'auto',
          }}>
            <h1 style={{
              textAlign: 'center',
              fontSize: 34,
              fontWeight: 'bold',
              marginBottom: 20,
              color: 'rgb(21, 75, 130)',
            }}>Patient's Details</h1>
            <div className="btn">
              <button onClick={handleOpen} style={{ marginLeft: '70%',
    marginBottom: '30px',
    height: '30px',
    width:'100px',
    fontSize:' 15px',
    color: 'white',
    border: '1px solid rgb(146, 141, 141)',
    borderRadius: '10px',
    backgroundColor: 'rgb(14, 96, 173)'}}>
                Add Patient
              </button>
            </div>
            <DataGrid
              rows={rows}
              columns={columns}
              disableColumnMenu
              disableSelectionOnClick
              hideFooter
              sx={{
                width: '100%',
                borderRadius: 5,
                '& .MuiDataGrid-columnHeader': {
                backgroundColor: 'rgb(100,137,189)',
                color: 'black', 
              },
              }}
              disableSorting={true}
            />
          </div>
        </Box>
              
        <Dialog open={open} onClose={handleClose} fullWidth={false} maxWidth={'sm'}>
  <DialogTitle className={styles.dialogTitle} style={{ textAlign: 'center' }}>
    <h2 style={{color:'black'}}>Add Patient</h2>
  </DialogTitle>
  <DialogContent style={{ padding: 28 , overflowY: 'hidden' }}>
    <form>
      <Grid container spacing={0.5}> 
        <Grid item xs={12} sm={6}>
          <TextField
            label="First Name"
            name="fName"
            value={newPatient.fName}
            onChange={handleFormChange}
            margin="dense"
            className={styles.txtf}
            style={{ width: 250 }} // set width to 250
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Last Name"
            name="lName"
            value={newPatient.lName}
            onChange={handleFormChange}
            margin="dense"
            className={styles.txtf}
            style={{ width: 250 }} // set width to 250
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Age"
            name="Age"
            value={newPatient.Age}
            onChange={handleFormChange}
            margin="dense"
            className={styles.txtf}
            style={{ width: 250 }} // set width to 250
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Gender"
            name="Gender"
            value={newPatient.Gender}
            onChange={handleFormChange}
            margin="dense"
            className={styles.txtf}
            style={{ width: 250 }} // set width to 250
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Phone"
            name="Phone"
            value={newPatient.Phone}
            onChange={handleFormChange}
            margin="dense"
            className={styles.txtf}
            style={{ width: 250 }} // set width to 250
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Email"
            name="Email"
            value={newPatient.Email}
            onChange={handleFormChange}
            margin="dense"
            className={styles.txtf}
            style={{ width: 250 }} // set width to 250
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Username"
            name="Username"
            value={newPatient.Username}
            onChange={handleFormChange}
            margin="dense"
            className={styles.txtf}
            style={{ width: 250 }} // set width to 250
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Password"
            name="Password"
            value={newPatient.Password}
            onChange={handleFormChange}
            margin="dense"
            className={styles.txtf}
            style={{ width: 250 }} // set width to 250
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Blood Group"
            name="Blood Group"
            value={newPatient['Blood Group']}
            onChange={handleFormChange}
            margin="dense"
            className={styles.txtf}
            style={{ width: 250 }} // set width to 250
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Allergic"
            name="Allergic"
            value={newPatient.Allergic}
            onChange={handleFormChange}
            margin="dense"
            className={styles.txtf}
            style={{ width: 250 }} // set width to 250
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Other Diesease"
            name="Other Diesease"
            value={newPatient['Other Diesease']}
            onChange={handleFormChange}
            margin="dense"
            className={styles.txtf}
            style={{ width: 250 }} // set width to 250
          />
        </Grid>
      </Grid>
    </form>
  </DialogContent>
  <DialogActions>
    <Button onClick={handleClose} style={{ backgroundColor: 'red', color: 'white' }}>Cancel</Button>
    <Button onClick={handleSubmit} style={{ backgroundColor: 'green', color: 'white' }}>Add Patient</Button>
  </DialogActions>
</Dialog>
      </div>
    );
  };
