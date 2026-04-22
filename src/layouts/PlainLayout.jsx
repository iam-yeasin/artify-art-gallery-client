import React from 'react';
import { Outlet } from 'react-router';

const PlainLayout = () => {
    return (
        <div>
            <Outlet/>
        </div>
    );
};

export default PlainLayout;