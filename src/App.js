import './App.css';
import { Customer } from './components/Customer';
import React from 'react';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    marginTop: 5,
    overflowX: 'auto'
  },
  table: {
    minWidth: 1080
  }
});

const customers = [{
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': '조지훈',
  'birthday': '980404',
  'gender': '남자',
  'job': '대학생'
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': '유연아',
  'birthday': '981127',
  'gender': '여자',
  'job': '대학생'
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': '쿠키',
  'birthday': '170404',
  'gender': '여자',
  'job': '강아지'
}]

function App() {
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
      {customers.map(customer => (<Customer key={customer.id} id={customer.id} image={customer.image} name={customer.name} birthday={customer.birthday} gender={customer.gender} job={customer.job}/>))}
      </TableBody>
    </Table>
    </Paper>
  )}

export default (App);
