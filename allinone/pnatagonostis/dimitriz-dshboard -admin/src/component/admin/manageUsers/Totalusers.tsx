import { Input } from 'antd';
import React from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import SellerActivityChart from './SellerActivityChart';
import Manage_Users from '../../../pages/Manage_Users';

const Totalusers: React.FC = () => {
    return (
        <div>
           {/* <Input style={{ height: '44px',fontSize: '16px' }} prefix={<IoSearchOutline />} placeholder="Search users by name or email" /> */}
           <Manage_Users/>
        </div>
    );
};

export default Totalusers;