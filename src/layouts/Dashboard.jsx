import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";


const Dashboard = () => {
    // console.log(user);
    const [active, setActive] = useState(true);

    const links = <>
        <div className="flex flex-col gap-4">
            {/* user panel */}
            <NavLink onClick={() => setActive(false)} className="bg-white py-1 pl-4 md:mx-2 rounded-lg text-lg font-medium hover:bg-gray-300" to='/dashboard/createTask'>Create New Task</NavLink>
            <NavLink onClick={() => setActive(false)} className="bg-white py-1 pl-4 md:mx-2 rounded-lg text-lg font-medium hover:bg-gray-300" to='/dashboard/previousTasks'>Previous Tasks</NavLink>
            <NavLink onClick={() => setActive(false)} className="bg-white py-1 pl-4 md:mx-2 rounded-lg text-lg font-medium hover:bg-gray-300" to='/dashboard/manageTasks'>Manage Tasks</NavLink>
            <NavLink onClick={() => setActive(false)} className="bg-white py-1 pl-4 md:mx-2 rounded-lg text-lg font-medium hover:bg-gray-300" to='/dashboard/myProfile'>My Profile</NavLink>
        </div>
    </>

    return (
        <div>
            {/* nav */}
            <div className="navbar bg-base-100">
                <div className="navbar-start lg:hidden">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" onClick={() => setActive(true)} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-52">

                            {
                                active ? <div className="flex flex-col md:flex-row w-11/12 mx-auto">
                                    {/* dashboard side bar  for sm*/}
                                    <div className="md:w-96 bg-pink-200 min-h-screen">
                                        <ul className="p-2 md:mt-8 mt-2 rounded-box">
                                            {
                                                links
                                            }

                                            {/* Common Route */}
                                            <div className="divider my-10"></div>
                                            <div className="flex flex-col gap-4">
                                                <NavLink className="bg-white py-1 pl-4 md:mx-2 rounded-lg text-lg font-medium hover:bg-gray-300" to='/'>Home</NavLink>
                                            </div>
                                        </ul>
                                    </div>
                                </div> :
                                    <div></div>
                            }
                        </ul>
                    </div>
                </div>
                {/* Desktop route */}
                <div className="navbar-start w-full hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">

                        <div className="md:w-96 bg-pink-200 min-h-screen">
                            <ul className="p-2 md:mt-8 mt-2 rounded-box">
                                {
                                    links
                                }

                                {/* Common Route */}
                                <div className="divider my-10"></div>
                                <div className="flex flex-col gap-4">
                                    <NavLink className="bg-white py-1 pl-4 md:mx-2 rounded-lg text-lg font-medium hover:bg-gray-300" to='/'>Home</NavLink>
                                </div>
                            </ul>
                        </div>
                        {/* dashboard content */}

                    </ul>
                    <div className="flex-1">
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>

            {/* dashboard content */}
            <div className="flex-1 lg:hidden">
                <Outlet></Outlet>
            </div>

        </div>

    );
};

export default Dashboard;