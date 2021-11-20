import './App.css';
import { Customer } from './components/Customer';

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
  return (
      customers.map(customer => (<Customer key={customer.id} id={customer.id} image={customer.image} name={customer.name} birthday={customer.birthday} gender={customer.gender} job={customer.job}/>
      ))
  );
}

export default App;
