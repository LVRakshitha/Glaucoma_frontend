import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import './history.css';

export default function ViewHistory() {
  const columns = [
    { field: 'id', headerName: 'Sl. no', width: 150 },
    { field: 'date', headerName: 'Date', width: 200 },
    { field: 'status', headerName: 'Status', width: 250 },
    { field: 'doctor', headerName: 'Visited to Doctor', width: 300 },
  ];

  const rows = [
    { id: 1, date: '2/07/2024', status: 'some description', doctor: 'Dr. John Doe' },
    { id: 2, date: '3/07/2024', status: 'another description', doctor: 'Dr. Jane Doe' },
    { id: 3, date: '4/07/2024', status: 'yet another description', doctor: 'Dr. Bob Smith' },
    { id: 4, date: '5/07/2024', status: 'yet another description', doctor: 'Dr. Bob Smith' },
    { id: 5, date: '6/07/2024', status: 'yet another description', doctor: 'Dr. Bob Smith' },
  ];

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      // bgcolor: '#f0f0f0'
    }}>
      <div style={{
        padding: 20,
        width: '80%',
        maxWidth: 1200,
        margin: 'auto',
        backgroundColor: '#fff',
        borderRadius: 10,
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
      }}  className='body'>
        <h1 style={{
          textAlign: 'center',
          fontSize: 34,
          fontWeight: 'bold',
          marginBottom: 20,
          color: '#333'
        }}>Patient's History</h1>
        <DataGrid
          rows={rows}
          columns={columns}
          disableColumnMenu
          disableSelectionOnClick
          hideFooter
          sx={{
            width: '100%',
            border: '1px solid #ddd',
            borderRadius: 5, 
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
          }}
        />
      </div>
    </Box>
  );
}