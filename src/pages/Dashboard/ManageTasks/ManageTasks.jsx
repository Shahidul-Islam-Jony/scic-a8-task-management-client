import { useState } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";


const ManageTasks = () => {
    const axiosPublic = useAxiosPublic();
    const [tasks, setTasks] = useState([]);

    const {data,isLoading,refetch} = useQuery({
        queryKey:[axiosPublic],
        queryFn:async()=>{
            const res = await axiosPublic.get('/getTasks')
            setTasks(res.data)
            return res.data;
        }
    })
    console.log(data);
    if(isLoading){
        return <span className="loading loading-spinner loading-lg"></span>
    }

    // console.log(tasks);
    // console.log(data);

    const todo = tasks.filter(task => task.type === 'todo');
    const ongoing = tasks.filter(task => task.type === 'ongoing');
    const completed = tasks.filter(task => task.type === 'completed');
    // console.log(todo, ongoing, completed);

    const handleDelteTask = id => {
        console.log(id);
        axiosPublic.delete(`/deleteTask/${id}`)
            .then(res => {
                console.log(res);
                if (res.status === 200) {
                    toast.success('Task delete Successful !', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                    refetch();
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
        <div className="">
            <h1 className="text-5xl text-center font-medium">Manage Tasks</h1>
            <div className="grid grid-cols-3 justify-between mt-10 gap-7">
                <div className="border-2 rounded-lg border-pink-500 min-h-screen">
                    <h3 className="text-xl font-medium text-center rounded-lg bg-green-300 p-2">TODO</h3>
                    {
                        todo?.map(task => <div key={task._id} className="border-2 m-2 p-2 rounded-md border-green-300">
                            <h4 className="text-lg font-medium">Title : {task.title}</h4>
                            <p>Deadline : {task.deadline}</p>
                            <p>Description : {task.description}</p>
                            <button onClick={() => handleDelteTask(task._id)} className="btn btn-sm btn-secondary mr-4">Delete</button>
                            <Link to={`/dashboard/updateTask/${task._id}`} className="btn btn-sm btn-secondary">Update</Link>
                        </div>)
                    }
                </div>
                <div className="border-2 rounded-lg border-pink-500 min-h-screen">
                    <h3 className="text-xl font-medium text-center rounded-lg bg-green-500 p-2">ONGOING</h3>
                    {
                        ongoing?.map(task => <div key={task._id} className="border-2 m-2 p-2 rounded-md border-green-300">
                            <h4 className="text-lg font-medium">Title : {task.title}</h4>
                            <p>Deadline : {task.deadline}</p>
                            <p>Description : {task.description}</p>
                            <button onClick={() => handleDelteTask(task._id)} className="btn btn-sm btn-secondary mr-4">Delete</button>
                            <button className="btn btn-sm btn-secondary">Update</button>
                        </div>)
                    }
                </div>
                <div className="border-2 rounded-lg border-pink-500 min-h-screen">
                    <h3 className="text-xl font-medium text-center text-white rounded-lg bg-green-700 p-2">COMPLETED</h3>
                    {
                        completed?.map(task => <div key={task._id} className="border-2 m-2 p-2 rounded-md border-green-300">
                            <h4 className="text-lg font-medium">Title : {task.title}</h4>
                            <p>Deadline : {task.deadline}</p>
                            <p>Description : {task.description}</p>
                            <button className="btn btn-sm btn-secondary mr-4">Delete</button>
                            <button className="btn btn-sm btn-secondary">Update</button>
                        </div>)
                    }
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default ManageTasks;