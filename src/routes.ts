import { Request, Response } from 'express';
import createUser from './services/CreateUser';

// string, number, boolean, object, array
// interfaces

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    email: 'andrebertonhadev@gmail.com',
    password: '123456',
    techs: [
      'Nodejs',
      'React',
      'React Native',
      { title: 'Javascript', experience: 80 },      
    ],
  });

  return response.json({ message: 'Hello World' });
}