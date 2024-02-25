import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { editTask } from "../../redux/features/tasks/tasksSlice";

const EditTaskForm = ({ setIsOpen, taskId }) => {
    const { userTasks } = useSelector((state) => state.tasksSlice);
    const currenctTask = userTasks.find(task => task.id === taskId);
    // console.log("task current", currenctTask);
    const dsipatch = useDispatch();
    const { handleSubmit, register} = useForm();
    const onSubmit = (data) => {
        
        const updatedData = {
            ...data,
            id: currenctTask.id
        }
        dsipatch(editTask(updatedData))
        setIsOpen(false);
        
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-4 justify-start">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="title">Title</label>
                        <input className="w-full rounded-md" defaultValue={currenctTask.title} type="text" id="title" {...register("title")} />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="description">Description</label>
                        <textarea rows="3"
                        defaultValue={currenctTask.description} className="w-full rounded-md" id="description" {...register("description")} />
                    </div>
                    <div className="flex flex-col gap-2">

                        <label htmlFor="assignTo">Assign To</label>
                        <select disabled defaultValue={currenctTask.assignTo} className="w-full rounded-md" id="assignTo" {...register("assignTo")}>
                            <option value="jack">
                                Jack
                            </option>
                            <option value="mark">
                                Mark
                            </option>
                            <option value="root">
                                Root
                            </option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-2">

                        <label htmlFor="priority">Prority</label>
                        <select defaultValue={currenctTask.priority} className="w-full rounded-md" id="priority" {...register("priority")}>
                            <option value="low">
                                Low
                            </option>
                            <option value="moderate">
                                Moderate
                            </option>
                            <option value="high">
                                High
                            </option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-2">

                        <label htmlFor="status">Status</label>
                        <select defaultValue={currenctTask.status} className="w-full rounded-md" id="status" {...register("status")}>
                            <option value="pending">
                                Pending
                            </option>
                            <option value="onGoing">
                                On Going
                            </option>
                            <option value="done">
                                Done
                            </option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="deadline">Deadline</label>
                        <input defaultValue={currenctTask.deadline} className="w-full rounded-md" type="date" id="deadline" {...register("deadline")} />
                    </div>
                    <div className="flex gap-3">
                        <div onClick={() => setIsOpen(false)} className="btn btn-danger cursor-pointer">Cancel</div>
                        <button type="submit" className="btn btn-primary">Save</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default EditTaskForm;