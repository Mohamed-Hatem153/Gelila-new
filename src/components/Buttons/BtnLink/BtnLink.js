import React from 'react';
import {Link} from 'react-router-dom';
import './BtnLink.css';

const BtnLink = () => {
    return (
        <div>
        <Link to='/about' className='btn btn-primary'>About Us</Link>
        </div>
    )
}

export default BtnLink
