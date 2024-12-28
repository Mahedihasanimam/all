import Sidebar from '@/components/dashboard/Sidebar';
import React from 'react';

const layout = ({ children }) => {
    const userMenuItems = [
        { path: "/dashboard", title: "Dashboard",
             icon: <p>lksjf</p> },
        // { path: "/courses", title: "My Courses", icon: <BsStack /> },
        // { path: "/transactions", title: "Transactions", icon: <FiCreditCard /> },
        // { path: "/analytics", title: "Analytics", icon: <LuMonitor /> },
    ];
    return (
        <div className='flex items-center bg-gray-200'>
            {/* sidebar  */}

            <div>
                <Sidebar selectedMenuItems={userMenuItems} />
            </div>

            {/* content area */}
            {children}
        </div>
    );
};

export default layout;