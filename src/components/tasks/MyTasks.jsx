import {
  CheckIcon,
  DocumentMagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUserTask, markAsDone } from '../../redux/features/tasks/tasksSlice';
import EditTaskForm from './EditTaskForm';
import Modal from '../ui/Modal';

const MyTasks = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [taskId, setTaskId] = useState();

  const { tasks, userTasks } = useSelector((state) => state.tasksSlice);
  const { name: userName } = useSelector((state) => state.userSlice)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addUserTask(userName))
  }, [dispatch, userName, tasks]);
  return (
    <div>
      <h1 className="text-xl my-3">My Tasks</h1>
      <div className=" h-[750px] overflow-auto space-y-3">
        {
          userTasks.map(task => (
            <div
              key={task.id}
              className="bg-secondary/10 rounded-md p-3 flex justify-between"
            >
              <h1>{task.title}</h1>
              <div className="flex gap-3">
                <button onClick={() => {setIsOpen(true); setTaskId(task.id)}} className="grid place-content-center" title="Details">
                  <DocumentMagnifyingGlassIcon className="w-5 h-5 text-primary" />
                </button>
                <button onClick={() => dispatch(markAsDone(task.id))} className="grid place-content-center" title="Done">
                  <CheckIcon className="w-5 h-5 text-primary" />
                </button>
              </div>
            </div>
          ))
        }
      </div>
      <Modal isOpen={isOpen}
        setIsOpen={setIsOpen}
        title="Edit your task">
        <EditTaskForm taskId={taskId} setIsOpen={setIsOpen} />
      </Modal>
    </div>
  );
};

export default MyTasks;
