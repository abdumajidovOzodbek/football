import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './ucl.css'

const UclAbout = () => {
    return (
        <>
        <div className='nav'>
            <NavLink className={active=> active.isActive?'active2':'passive'} to='/ucl/groupA'>GROUP A</NavLink>
            <NavLink className={active=> active.isActive?'active2':'passive'} to='/ucl/groupB'>GROUP B</NavLink>
            <NavLink className={active=> active.isActive?'active2':'passive'} to='/ucl/groupC'>GROUP C</NavLink>
            <NavLink className={active=> active.isActive?'active2':'passive'} to='/ucl/groupD'>GROUP D</NavLink>
            <NavLink className={active=> active.isActive?'active2':'passive'} to='/ucl/groupE'>GROUP E</NavLink>
            <NavLink className={active=> active.isActive?'active2':'passive'} to='/ucl/groupF'>GROUP F</NavLink>
            <NavLink className={active=> active.isActive?'active2':'passive'} to='/ucl/groupG'>GROUP G</NavLink>
            <NavLink className={active=> active.isActive?'active2':'passive'} to='/ucl/groupH'>GROUP H</NavLink>
        </div>
            {
                <Outlet/>
            }
        </>
    );
}

export default UclAbout;
