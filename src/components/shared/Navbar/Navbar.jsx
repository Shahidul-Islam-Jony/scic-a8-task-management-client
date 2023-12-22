import { Link, NavLink } from "react-router-dom";
import logo from '../../../assets/images/logo.png'
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    // console.log(user);

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
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <img src={logo} className="w-10 h-10 md:w-14 md:h-14" alt="" />
                    <p className="text-lg md:text-xl font-bold ml-2 md:ml-4">SwiftTasks</p>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 gap-2 md:gap-4 md:text-lg items-center font-medium">
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/tasks'>Tasks</NavLink>
                        <NavLink to='/support'>Support</NavLink>
                        {
                            // user? <span>
                            //     <Link><img src={user?.photoURL} className="w-10 h-10 md:w-14 md:h-14" alt="" /></Link>
                            // </span>:''
                            user && <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="">
                                    <div className="rounded-full">
                                        <img className="w-12 h-12 md:w-14 md:h-14 rounded-full" src={user?.photoURL} />
                                    </div>
                                </div>
                                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-pink-200 rounded-box w-52">
                                    <li><Link>Profile</Link></li>
                                    <li><Link onClick={handleLogout}>Logout</Link></li>
                                </ul>
                            </div>
                        }
                    </ul>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Navbar;