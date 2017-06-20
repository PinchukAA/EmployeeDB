import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Employee } from '../models/employee';
import {User} from '../models/user';

export class InMemoryService implements InMemoryDbService {
  createDb(){
  const employees: Employee[] = [
      {
        id: 0,
        name: 'Alexey Pinchuk',
        education: 'BSUIR',
        age: '20',
        imgUrl: '../../assets/img/employees/pinchuk.0.png',
        snippet: 'Good young man.'
      },
      {
        id: 1,
        name: 'Alexander Karavai',
        education: 'BSUIR',
        age: '20',
        imgUrl: '../../assets/img/employees/karavai.0.png',
        snippet: 'Good young man.'
      }
    ];

  const users: User[] = [
    {
      id: 'alex',
      name: 'Alexey Pinchuk',
      password: 'pin',
      moderator: true
    },
    {
      id: 'sasha',
      name: 'Alexander Karavai',
      password: 'karavai',
      moderator: false
    }
  ];

    return { employees, users };
  }
}
