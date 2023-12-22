import { useState } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useEffect } from "react";


const ManageTasks = () => {
    const axiosPublic = useAxiosPublic();
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        axiosPublic.get('/getTasks')
            .then(res => {
                // console.log(res.data);
                setTasks(res.data);
            })
    }, [axiosPublic])
    // console.log(tasks);


    return (
        <div className="">
            <h1 className="text-5xl text-center font-medium">Manage Tasks</h1>
            <div className="grid grid-cols-3 justify-between mt-10 gap-7">
                <div className="border-2 rounded-lg border-pink-500 min-h-screen">
                    <h3 className="text-xl font-medium text-center rounded-lg bg-green-300 p-2">TODO</h3>
                    {
                        tasks?.map(task=>task.type==='todo'&&<div key={task._id} className="border-2 m-2 p-2 rounded-md border-green-300">
                            <h4 className="text-lg font-medium">Title : {task.title}</h4>
                            <p>Deadline : {task.deadline}</p>
                            <p>Description : {task.description}</p>
                        </div>)
                    }
                </div>
                <div className="border-2 rounded-lg border-pink-500 min-h-screen">
                    <h3 className="text-xl font-medium text-center rounded-lg bg-green-500 p-2">ONGOING</h3>
                </div>
                <div className="border-2 rounded-lg border-pink-500 min-h-screen">
                    <h3 className="text-xl font-medium text-center text-white rounded-lg bg-green-700 p-2">COMPLETED</h3>
                </div>

            </div>
        </div>
    );
};

export default ManageTasks;