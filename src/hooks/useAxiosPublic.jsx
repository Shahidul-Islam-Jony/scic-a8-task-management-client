import axios from 'axios'

const axiosPublic = axios.create({
    baseURL: 'https://scic-a8-task-management-server.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;