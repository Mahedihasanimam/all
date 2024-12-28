import React from 'react';

const layout = ({children}) => {
    return (
        <div className='flex items-center bg-gray-200'>
            {/* sidebar  */}

            <div>
                <h1>this is sidebar</h1>
            </div>

            {/* content area */}
            {children}
        </div>
    );
};

export default layout;