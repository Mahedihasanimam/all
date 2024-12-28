'use client'
import { useState } from 'react';
import { Button, message, Steps } from 'antd';
import { useRouter } from 'next/navigation';


const SchedulePage = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const router = useRouter();

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const times = ['3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM','6:00 PM'];

  const handleContinue = () => {
    if (!selectedDay || !selectedTime) {
      message.error('Please select a day and time!');
      return;
    }
    console.log('Selected Day:', selectedDay);
    console.log('Selected Time:', selectedTime);
    router.push('/browseCourse/instructor/payment'); // Navigate to the payment page
  };

  const handleCancel = () => {
    router.back(); // Go to the previous page
  };

  return (
    <div className="min-h-screen flex items-center justify-center container mx-auto items-center  p-4">
      <div className="w-full   p-6 h-full max-w-4xl">
        <Steps current={0} className="mb-6 max-w-sm mx-auto">
          <Steps.Step title="Schedule" />
          <Steps.Step title="Payment" />
        </Steps>

        <h2 className="text-lg font-medium mb-4">Select your Session Schedule</h2>

        {/* Day Selector */}
        <div className="grid grid-cols-7 gap-2 mb-4 w-fit">
          {days.map((day, index) => (
            <button
              key={index}
              className={`p-2 border rounded-md text-center h-[100px] w-[100px] ${
                selectedDay === day
                  ? 'bg-[#14698A] text-white'
                  : 'bg-gray-100 text-gray-600'
              }`}
              onClick={() => setSelectedDay(day)}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Time Selector */}
        {selectedDay && (
          <div className="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-3 gap-2 mb-6 w-fit">
            {times.map((time, index) => (
              <button
                key={index}
                className={`p-2 border rounded-md text-centerc h-[100px] w-[100px] ${
                  selectedTime === time
                    ? 'bg-[#14698A] text-white'
                    : 'bg-gray-100 text-gray-600'
                }`}
                onClick={() => setSelectedTime(time)}
              >
                {time}
              </button>
            ))}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex justify-end space-x-4">
          <Button onClick={handleCancel} className="bg-white h-[48px] border border-[#D0D5DD] min-w-[156px] font-semibold text-[#344054]">
            Cancel
          </Button>
          <Button style={{backgroundColor:'#14698A'}} onClick={handleContinue} className='bg-white h-[48px] border border-[#D0D5DD] min-w-[156px] font-semibold text-white'>
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SchedulePage;
