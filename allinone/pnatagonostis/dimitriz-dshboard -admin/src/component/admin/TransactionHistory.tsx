import React from 'react';
import { Table, Tag, Avatar, Pagination, Badge } from 'antd';
import { CornerLeftUpIcon } from 'lucide-react';
import { FaCheck } from 'react-icons/fa';

const data = [
  {
    key: '1',
    date: 'Jan 6, 2024',
    status: 'Paid',
    from: { name: 'Olivia Rhye', email: 'olivia@untitledui.com', avatar: 'path_to_avatar' },
    amount: '+€5.00',
  },
  {
    key: '2',
    date: 'Jan 6, 2024',
    status: 'Paid',
    from: { name: 'Phoenix Baker', email: 'phoenix@untitledui.com', avatar: 'path_to_avatar' },
    amount: '+€5.00',
  },
  {
    key: '3',
    date: 'Jan 6, 2024',
    status: 'Paid',
    from: { name: 'Olivia Rhye', email: 'olivia@untitledui.com', avatar: 'path_to_avatar' },
    amount: '+€5.00',
  },
  {
    key: '4',
    date: 'Jan 6, 2024',
    status: 'Paid',
    from: { name: 'Phoenix Baker', email: 'phoenix@untitledui.com', avatar: 'path_to_avatar' },
    amount: '+€5.00',
  },
  {
    key: '5',
    date: 'Jan 6, 2024',
    status: 'Paid',
    from: { name: 'Olivia Rhye', email: 'olivia@untitledui.com', avatar: 'path_to_avatar' },
    amount: '+€5.00',
  },
  {
    key: '6',
    date: 'Jan 6, 2024',
    status: 'Paid',
    from: { name: 'Phoenix Baker', email: 'phoenix@untitledui.com', avatar: 'path_to_avatar' },
    amount: '+€5.00',
  },
  {
    key: '7',
    date: 'Jan 6, 2024',
    status: 'Paid',
    from: { name: 'Olivia Rhye', email: 'olivia@untitledui.com', avatar: 'path_to_avatar' },
    amount: '+€5.00',
  },
  {
    key: '8',
    date: 'Jan 6, 2024',
    status: 'Paid',
    from: { name: 'Phoenix Baker', email: 'phoenix@untitledui.com', avatar: 'path_to_avatar' },
    amount: '+€5.00',
  },
  {
    key: '9',
    date: 'Jan 6, 2024',
    status: 'Paid',
    from: { name: 'Olivia Rhye', email: 'olivia@untitledui.com', avatar: 'path_to_avatar' },
    amount: '+€5.00',
  },
  {
    key: '10',
    date: 'Jan 6, 2024',
    status: 'Paid',
    from: { name: 'Phoenix Baker', email: 'phoenix@untitledui.com', avatar: 'path_to_avatar' },
    amount: '+€5.00',
  },
  {
    key: '11',
    date: 'Jan 6, 2024',
    status: 'Paid',
    from: { name: 'Olivia Rhye', email: 'olivia@untitledui.com', avatar: 'path_to_avatar' },
    amount: '+€5.00',
  },
  {
    key: '12',
    date: 'Jan 6, 2024',
    status: 'Paid',
    from: { name: 'Phoenix Baker', email: 'phoenix@untitledui.com', avatar: 'path_to_avatar' },
    amount: '+€5.00',
  },
 
  {
    key: '13',
    date: 'Jan 6, 2024',
    status: 'Paid',
    from: { name: 'Phoenix Baker', email: 'phoenix@untitledui.com', avatar: 'path_to_avatar' },
    amount: '+€5.00',
  },
  {
    key: '14',
    date: 'Jan 6, 2024',
    status: 'Paid',
    from: { name: 'Olivia Rhye', email: 'olivia@untitledui.com', avatar: 'path_to_avatar' },
    amount: '+€5.00',
  },
  {
    key: '15',
    date: 'Jan 6, 2024',
    status: 'Paid',
    from: { name: 'Phoenix Baker', email: 'phoenix@untitledui.com', avatar: 'path_to_avatar' },
    amount: '+€5.00',
  },
  {
    key: '16',
    date: 'Jan 6, 2024',
    status: 'Paid',
    from: { name: 'Olivia Rhye', email: 'olivia@untitledui.com', avatar: 'path_to_avatar' },
    amount: '+€5.00',
  },

];

const columns = [
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
    render: (data) => (
        <p className='text-lg font-bold text-[#475467]'>
          {data}
        </p>
      ),
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (status) => (
        <div className='flex gap-2 items-center justify-center bg-[#ECFDF3] text-[#027A48] py-1 px-4  text-[16px]  rounded-full w-fit'>
        <FaCheck />
      <Badge  className='font-bold' color="green">
        {status}
      </Badge>
        </div>
    ),
  },
  {
    title: 'From',
    dataIndex: 'from',
    key: 'from',
    render: (from) => (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Avatar src={from.avatar} />
        <div style={{ marginLeft: '10px' }}>
          <p className='text-[16px]'>{from.name}</p>
          <p className='text-[16px]'>{from.email}</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
    render: (amount) => (
        <p className='text-lg font-bold text-[#475467]'>
          {amount}
        </p>
      ),
  },
];

const TransactionHistory = () => {
  return (
    <div className='border-[2px] border-[#E4E7EC] rounded-[8px] p-[20px]'>
      <Table 
        columns={columns} 
        dataSource={data} 
        pagination={{
          pageSize: 10,
          showSizeChanger: false,
          showQuickJumper: true,
          total: 50,  // Adjust total based on your data
          position: ['bottomCenter'],
        }}
      />
    </div>
  );
};

export default TransactionHistory;
