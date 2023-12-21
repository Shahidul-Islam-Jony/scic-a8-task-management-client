import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";
import regImg from "../../assets/images/registration.jpg"

const Registration = () => {

    const handleRegistration = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const phoneNumber = form.phoneNumber.value;
        const photoUrl = form.photo.value;
        const type = form.type.value;
        const password = form.password.value;
        console.log(name,email,photoUrl,password,type,phoneNumber);
    
    }

    return (
        <HelmetProvider>
            <Helmet><title>SwiftTasks | Registration</title></Helmet>
            <div className="w-11/12 mx-auto mt-20 text-center">
                <div className="flex mx-auto flex-col gap-4 md:flex-row md:px-4">
                    <div className='w-full lg:w-1/2 mx-auto'>
                        <img src={regImg} className="w-fit rounded-lg h-[600px]" alt="" />
                    </div>
                    <div className='w-full lg:w-1/2 mx-auto'>
                        <h1 className="text-5xl font-bold mb-4">Register now!</h1>
                        <div className="rounded-lg w-full shadow-2xl bg-base-100 px-4 py-6">
                            <form onSubmit={handleRegistration}>
                                <div>
                                    <label className="label">
                                        <span className="text-xl font-medium">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="Your name" className="input rounded-md w-full border-pink-600" required />
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="text-xl font-medium">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="Email" className="input rounded-md w-full border-pink-600" required />
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="text-xl font-medium">Photo URL</span>
                                    </label>
                                    <input type="text" name='photo' placeholder="Please give your photo url" className="input rounded-md w-full border-pink-600" required />
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="text-xl font-medium">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input rounded-md w-full border-pink-600" required />
                                </div>
                                <div className="form-control mt-6">
                                    <input className='btn btn-secondary capitalize text-xl font-semibold' type="submit" value="Register" />
                                </div>
                                <div className='text-center mt-4'>
                                    <p>Already have account ? Please <Link to='/login' className='font-medium hover:underline text-secondary ml-2'>Login</Link></p>
                                </div>
                            </form>
                            {/* social login here*/}
                            
                        </div>
                    </div>
                </div>
                {/* <ToastContainer></ToastContainer> */}
            </div>
        </HelmetProvider>
    );
};

export default Registration;