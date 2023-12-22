import { useContext } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../providers/AuthProvider";
import useAxiosPublic from "../../../hooks/useAxiosPublic";


const CreateTask = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    const axiosPublic = useAxiosPublic();
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        const tasks = {
            email: user.email,
            title: data.title,
            deadline: data.deadline,
            description: data.description,
            priority: data.priority,
            type: 'todo'
        }
        console.log(tasks);
        axiosPublic.post('/addTasks', tasks)
            .then(res => {
                console.log(res);
            })

    }
    return (
        <HelmetProvider>
            <Helmet><title>SwiftTasks | Create New Task</title></Helmet>
            <div className="w-11/12 mx-auto mt-20 text-center">
                <div className="flex mx-auto flex-col gap-4 md:flex-row md:px-4">
                    <div className='w-full mx-auto'>
                        <h1 className="text-5xl font-bold mb-4">Create New Task!</h1>
                        <div className="rounded-lg w-full shadow-2xl bg-base-100 px-4 py-6">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div>
                                    <label className="label">
                                        <span className="text-xl font-medium">Title</span>
                                    </label>
                                    <input type="text" {...register("title", { required: true })} placeholder="title" className="input rounded-md w-full border-pink-600" />
                                    {errors.title && <span className="text-red-500">Title is required</span>}
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="text-xl font-medium">Deadline</span>
                                    </label>
                                    <input type="date" {...register("deadline", { required: true })} className="input rounded-md w-full border-pink-600" />
                                    {errors.deadline && <span className="text-red-500">Deadline is required</span>}
                                </div>
                                {/* user type */}
                                <div className="form-control w-full ">
                                    <label className="label">
                                        <span className="text-xl font-medium">Priority</span>
                                    </label>
                                    <select {...register("priority", { required: true })} className="select select-bordered text-lg border-pink-600">
                                        <option disabled selected>Please select task priority</option>
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
                                    <textarea {...register("description")} className="textarea w-full textarea-secondary" placeholder="Task description"></textarea>
                                </div>
                                <div className="form-control mt-6">
                                    <input className='btn btn-secondary capitalize text-xl font-semibold' type="submit" value="Add Task" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {/* <ToastContainer></ToastContainer> */}
            </div>
        </HelmetProvider>
    );
};

export default CreateTask;