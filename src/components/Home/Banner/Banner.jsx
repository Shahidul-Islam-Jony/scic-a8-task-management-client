/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';
import banner from '../../../assets/images/banner.jpg'

const Banner = () => {
    return (
        <div className='relative'>
            <img src={banner} className='w-full h-[550px]' alt="" />
            <Link to='/login' className='btn btn-secondary absolute top-1/2 left-1/4 w-64 text-xl font-bold'>Let's Explore</Link>
        </div>
    );
};

export default Banner;