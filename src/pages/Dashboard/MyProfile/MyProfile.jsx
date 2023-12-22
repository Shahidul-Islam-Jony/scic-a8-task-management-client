import { useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from 'axios'
import { AuthContext } from "../../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const MyProfile = () => {
    const { user, updateUser, logout, setLoading } = useContext(AuthContext);
    // console.log(user);
    const navigate = useNavigate();
    const [imageUrl, setImageUrl] = useState('');

    const handleUpdateImage = async () => {
        updateUser(user.displayName, imageUrl)
            .then(res => {
                setLoading(false)
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }

    const handleUploadImageBB = async (e) => {
        const image = e.target.files[0]
        // console.log(image);
        const imageFile = { image: image }
        // console.log(imageFile);
        const res = await axios.post(image_hosting_url, imageFile, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        // console.log('Image url', res.data.data.display_url);
        setImageUrl(res.data.data.display_url);
    }
    // console.log(imageUrl);

    const handleLogout = () => {
        logout()
            .then(result => {
                console.log(result);
                toast.success('Logout Successful !', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                navigate('/');
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="flex ml-3 md:ml-40 lg:ml-80 my-20">
            <div className="relative">
                <div className="card w-[350px] md:w-[500px] lg:w-[600px] bg-secondary text-primary-content">
                    <div className="card-body mt-16 text-center">
                        <h2 className="text-xl font-bold">{user?.displayName}</h2>
                        <h2 className="text-xl font-bold">{user?.email}</h2>
                        <div className="flex justify-between mt-10">
                            <button onClick={handleLogout} className="btn btn-sm bg-warning">Sign Out</button>
                            <input className="lg:ml-20" type="file" onChange={handleUploadImageBB} name="image" id="" />
                            <button onClick={handleUpdateImage} className="btn btn-sm btn-accent">Update Profile</button>
                        </div>
                    </div>
                </div>
                <div className="avatar -top-16 left-28 md:left-44 lg:left-60 absolute z-40">
                    <div className="w-36 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                        <img src={user?.photoURL} />
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default MyProfile;