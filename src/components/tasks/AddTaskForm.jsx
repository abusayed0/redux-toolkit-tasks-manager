import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/features/tasks/tasksSlice";

const AddTaskForm = ({ setIsOpen }) => {
    const { register, handleSubmit } = useForm();

    const dispatch = useDispatch();

    const onSubmit = (data) => {
        console.log(data);
        dispatch(addTask(data))
        setIsOpen(false)
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-4 justify-start">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="title">Title</label>
                        <input className="w-full rounded-md" type="text" id="title" {...register("title")} />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="description">Description</label>
                        <textarea rows="3" className="w-full rounded-md" id="description" {...register("description")} />
                    </div>
                    <div className="flex flex-col gap-2">

                        <label htmlFor="assignTo">Assign To</label>
                        <select className="w-full rounded-md" id="assignTo" {...register("assignTo")}>
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
                        <select className="w-full rounded-md" id="priority" {...register("priority")}>
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
                        <label htmlFor="deadline">Deadline</label>
                        <input className="w-full rounded-md" type="date" id="deadline" {...register("deadline")} />
                    </div>
                    <div className="flex gap-3">
                        <div onClick={() => setIsOpen(false)} className="btn btn-danger cursor-pointer">Cancel</div>
                        <button type="submit" className="btn btn-primary">Add</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddTaskForm;