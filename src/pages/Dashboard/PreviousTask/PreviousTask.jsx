import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useState } from "react";

const PreviousTask = () => {
    const axiosPublic = useAxiosPublic();
    const [allTasks, setAllTasks] = useState([]);

    const { data, isLoading } = useQuery({
        queryKey: [axiosPublic],
        queryFn: async () => {
            const res = await axiosPublic.get('/getTasks')
            setAllTasks(res.data)
            return res.data;
        }
    })
    if (isLoading) {
        return <span className="loading loading-spinner loading-lg"></span>
    }
    console.log(data);

    return (
        <div>
            {
                allTasks.map(task=>task.type === 'completed' && <div key={task._id} className="border-2 ml-4 p-4 rounded-lg border-pink-500">
                    <h4 className="text-lg font-medium">Title : {task.title}</h4>
                    <p>Deadline: {task.deadline}</p>
                    <p>Type: {task.type}</p>
                    <p>Priority : {task.priority}</p>
                    <p>Description : {task.description}</p>
                </div>)
            }
        </div>
    );
};

export default PreviousTask;