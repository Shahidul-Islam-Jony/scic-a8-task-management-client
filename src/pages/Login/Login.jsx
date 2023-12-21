import { Helmet, HelmetProvider } from "react-helmet-async";
import loginImg from '../../assets/images/login.png'
import { Link } from "react-router-dom";

const Login = () => {


    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        
    }

    return (
        <HelmetProvider>
            <Helmet><title>SwiftTasks | Login</title></Helmet>
            <div className="w-11/12 mx-auto mt-20">
                <div className="flex mx-auto flex-col gap-4 lg:flex-row md:px-4">
                    <div className="w-full lg:w-1/2">
                        <img src={loginImg} className='' alt="" />
                    </div>
                    <div className='w-full lg:w-1/2'>
                        <h1 className="text-5xl font-bold mb-4 text-center">Login now!</h1>
                        <div className="rounded-lg w-full shadow-2xl bg-base-100 px-4 py-6">
                            <form onSubmit={handleLogin}>
                                <div>
                                    <label className="label">
                                        <span className="text-xl font-medium">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input rounded-md w-full border-pink-600" required />
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="text-xl font-medium">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input rounded-md w-full border-pink-600" required />
                                </div>
                                <div className="form-control mt-6">
                                    <input className='btn btn-secondary capitalize text-xl font-semibold' type="submit" value="Login" />
                                </div>
                                <div className='text-center mt-4'>
                                    <p>Do not have account ? Please <Link to='/registration' className='font-medium hover:underline text-secondary ml-2'>Create an account</Link></p>
                                </div>
                            </form>
                            {/* Social Login */}
                        </div>
                    </div>
                </div>
            </div>
        </HelmetProvider>
    );
};

export default Login;