import './App.css';
import { Customer } from './components/Customer';
import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';
import CircularProgress from '@mui/material/CircularProgress';

const useStyles = makeStyles({
  root: {
    width: '100%',
    marginTop: 5,
    overflowX: 'auto'
  },
  table: {
    minWidth: 1080
  },
  progress: {
    margin: 2
  }
});



function App() {
  const [customers, setCustomers] = useState([]);
  const [progress, setProgress] = useState(0);
  useEffect(() => {

    async function callAPi() {
      const response = await fetch('/api/customers');
      const body = await response.json();
      console.log(body);
      return body;
    }
    callAPi()
      .then(res => setCustomers(res))
      .catch(err=> console.log(err));
  }, ['/api/customers'])

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);



  const classes = useStyles();
  return (
    <Paper className={classes.root}>
    <Table className={classes.table}>
      <TableHead>
        <TableRow>
          <TableCell>번호</TableCell>
          <TableCell>이미지</TableCell>
          <TableCell>이름</TableCell>
          <TableCell>생년월일</TableCell>
          <TableCell>성별</TableCell>
          <TableCell>직업</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
      {customers[0] != null ? customers.map(customer => (<Customer key={customer.id} id={customer.id} image={customer.image} name={customer.name} birthday={customer.birthday} gender={customer.gender} job={customer.job}/>)) :
        <TableRow>
          <TableCell colSpan="6" align="center">
            <CircularProgress variant="determinate" value={progress} />
          </TableCell>
        </TableRow>
      }  
      </TableBody>
    </Table>
    </Paper>
  )}

export default (App);
