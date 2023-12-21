import { NavLink } from "react-router-dom";
import logo from '../../../assets/images/logo.png'

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <img src={logo} className="w-10 h-10 md:w-14 md:h-14" alt="" />
                <p className="text-lg md:text-xl font-bold ml-2 md:ml-4">SwiftTasks</p>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 gap-4 md:text-lg font-medium">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/tasks'>Tasks</NavLink>
                    <NavLink to='/support'>Support</NavLink>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;