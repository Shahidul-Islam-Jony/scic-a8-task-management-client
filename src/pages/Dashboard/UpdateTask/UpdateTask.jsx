
import { useParams } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../../providers/AuthProvider";


const UpdateTask = () => {
    const { id } = useParams();
    // console.log(id);
    const axiosPublic = useAxiosPublic();
    const [task, setTask] = useState([]);
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const { user } = useContext(AuthContext);

    useEffect(() => {
        axiosPublic.get(`/getSingleTask/${id}`)
            .then(res => {
                console.log(res.data);
                setTask(res.data);
            })
    }, [axiosPublic, id])
    // console.log(task);

    const onSubmit = (data) => {
        console.log(data);
        const tasks = {
            id: id,
            email: user.email,
            title: data.title,
            deadline: data.deadline,
            description: data.description,
            priority: data.priority,
            type: 'todo'
        }
        console.log(tasks);
        axiosPublic.patch('/updateTask', tasks)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    toast.success('Task Update Successful !', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                }
            })
            .catch(error => {
                toast.error(`${error}`, {
                    position: "center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                return;
            })
    }

    return (
        <div className="ml-7">
            <h2 className="text-5xl text-center font-medium">Update Tasks</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label className="label">
                        <span className="text-xl font-medium">Title</span>
                    </label>
                    <input type="text" defaultValue={task.title} {...register("title", { required: true })} placeholder="title" className="input rounded-md w-full border-pink-600" />
                    {errors.title && <span className="text-red-500">Title is required</span>}
                </div>
                <div>
                    <label className="label">
                        <span className="text-xl font-medium">Deadline</span>
                    </label>
                    <input type="date" defaultValue={task.deadline} {...register("deadline", { required: true })} className="input rounded-md w-full border-pink-600" />
                    {errors.deadline && <span className="text-red-500">Deadline is required</span>}
                </div>
                {/* user type */}
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="text-xl font-medium">Priority</span>
                    </label>
                    <select {...register("priority", { required: true })} className="select select-bordered text-lg border-pink-600">
                        <option selected disabled>Please select task priority</option>
                        <option value='low'>Low</option>
                        <option value='moderate'>Moderate</option>
                        <option value='high'>High</option>
                    </select>
                    {errors.priority && <span className="text-red-500">Priority is required</span>}
                </div>
                <div>
                    <label className="label">
                        <span className="text-xl font-medium">Description</span>
                    </label>
                    <textarea defaultValue={task.description} {...register("description")} className="textarea w-full textarea-secondary" placeholder="Task description"></textarea>
                </div>
                <div className="form-control mt-6">
                    <input className='btn btn-secondary capitalize text-xl font-semibold' type="submit" value="Update Task" />
                </div>
            </form>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default UpdateTask;