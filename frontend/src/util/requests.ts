import axios from 'axios';
import type { Task } from './models.ts';

const BASE_URL = 'https://todo-app-backend-chi-nine.vercel.app/'; 
export const getTasks: Promise<Task> = () => {
  return axios.get(BASE_URL + '/tasks');
};

export const addTask: Promise<Task> = (task: Task) => {
  return axios.post(BASE_URL + '/create-task', {
    task
  });
}
