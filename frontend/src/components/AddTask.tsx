import React, { FC, useState } from 'react';
import { makeId } from '../util/helpers.ts';

type AddTaskProps = {
  submit: string;
}

export const AddTask: FC = ({ handleSubmit }) => {
  const [name, setName] = useState<string>('');
  const handleOnSubmit = (e) => {
    e.preventDefault();
    handleSubmit({name, "id": makeId()});
    setName('');
  }

  return (
    <div className="relative leading-normal w-60">
      <form onSubmit={handleOnSubmit} >
        <input type="text" value={name} onInput={(e) => setName(e.target.value)} placeholder="Add a task" className="text-black w-full h-10 bg-white focus:outline-none px-4 rounded-full"/>
        <button type="submit" className="w-8 h-8 bg-green-400 absolute rounded-full font-bold right-1 mt-1">
          +
        </button>
      </form>
    </div>
  
  );
};
