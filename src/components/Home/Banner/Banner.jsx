/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';
import banner from '../../../assets/images/banner.jpg'
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';

const Banner = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className='relative'>
            <img src={banner} className='w-full h-96 md:h-[550px]' alt="" />
            <Link to={user ? '/dashboard' : '/login'} className='btn btn-secondary absolute top-1/2 left-10 md:left-1/4 w-64 text-xl font-bold'>Let's Explore</Link>
        </div>
    );
};

export default Banner;