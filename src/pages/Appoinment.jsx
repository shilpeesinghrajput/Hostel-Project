import React,{useState} from 'react';
import IconRow from '../components/icons/Icons';
import AboutPart from '../components/about/Aboutpart';
import Banner from '../components/banner/banner';
import Staffs from "../components/staff/Staff"
import Heading from '../components/Heading/Heading';
import ContactForm from '../components/Contactform/ContactForm';
import { Telephone, GeoAlt, CupStraw ,ThermometerHigh, ArrowRight,ArrowLeft} from 'react-bootstrap-icons';

import { format, startOfMonth, addMonths, subMonths, eachDayOfInterval, isSameMonth, isSameDay } from 'date-fns';




const imageUrls = [
  "https://picsum.photos/220",
  "https://picsum.photos/220",
  "https://picsum.photos/220",
  "https://picsum.photos/220",
  // Add more image URLs as needed
];
const Appoinment = ({bookings}) => {

    const [currentMonth, setCurrentMonth] = useState(new Date());

    const startDay = startOfMonth(currentMonth);
    const endDay = addMonths(startDay, 1);
  
    const days = eachDayOfInterval({ start: startDay, end: endDay });
  
    const nextMonth = () => {
      setCurrentMonth(addMonths(currentMonth, 1));
    };
  
    const prevMonth = () => {
      setCurrentMonth(subMonths(currentMonth, 1));
    };
  
    const isBooked = (date) => {
      return bookings?.some(booking => isSameDay(date, booking));
    };

    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return (
    <>
    <div>
  <Banner title={"Appoinments"}/>
    </div>

<div className="w-[80%] mx-auto mt-[6rem]">
<div className="grid grid-cols-7 text-center p-6 bg-[#8abb6a] gap-6">
  <div className='col-span-full flex justify-between'>
      <button className='float-left' onClick={prevMonth}><ArrowLeft /></button>
      <div>{format(currentMonth, 'MMMM yyyy')}</div>
      <button onClick={nextMonth}><ArrowRight /></button>
  </div>
  {weekdays.map((weekday, index) => (
          <div key={index} className="font-bold text-white text-center">
            {weekday}
          </div>
        ))}
</div>
 <div className="grid grid-cols-7 justify-items-center text-center border border-solid border-slate-100 border-1">

  {days.map((day, index) => (
    <div key={index} className={`p-14 w-full border-[0.5px] border-solid border-slate-100 text-center text-[20px] text-[#878787]  ${isSameMonth(day, currentMonth) ? 'bg-white' : 'bg-gray-200'} ${isBooked(day) ? 'bg-red-500' : ''}`}>
      {format(day, 'd')}
    </div>
  ))}
</div>
</div>
</>
  );
}

export default Appoinment;
