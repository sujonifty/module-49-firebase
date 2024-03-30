
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className=' text-center p-5 my-10 bg-slate-50 shadow-lg space-x-6  font-bold'>
            <NavLink className='border p-2 rounded-lg opacity-70 hover:opacity-100' to="/">Home</NavLink>
            <NavLink className='border p-2 rounded-lg opacity-70 hover:opacity-100' to="/login">Login</NavLink>
        </div>
    );
};

export default Navbar;