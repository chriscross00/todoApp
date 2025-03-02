import React, { FC } from 'react';

type TaskItemProps = {
  id: string;
  name: string;
}

export const TaskItem: FC<TaskItemProps> = ({ id, name }) => {
  
  return (
    <div className="text-2xl"> 
      <input type="checkbox" id={id} name={id} className="w-6 h-6" />
      <label for={id} className="text-red-700"> {name}</label>
    </div>
  );
};
