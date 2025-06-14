import { useState } from 'react';
import type React from 'react';

interface CreateDonationProps {
    btnBack: React.ReactNode;
    title: string;
    method: string;
    
    buttonPay?: React.ReactNode;
}

const categories = [
  'Charity',
  'Disaster',
  'Community',
  'Animals',
  'Medical',
  'Sports',
  'Environmental',
  'Education',
];

export default function CreateDonation(props: CreateDonationProps) {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedType, setSelectedType] = useState('');

  return (
    <section>
      <div className="flex flex-col justify-center items-center min-h-dvh text-green-900 gap-10 font-fredoka min-md:gap-20 pb-10">
        <div className="flex justify-center items-center w-full">
          <h1 className="flex justify-center items-center mr-8 gap-x-5 text-3xl font-regular min-md:text-3xl text-black">
            {props.btnBack}
            {props.title}
          </h1>
        </div>

        <img src={props.img} alt={props.alt} />

        <div className="flex flex-col gap-1 w-3/4 min-md:gap-3 min-md:text-3xl min-md:w-2/3">
          <label className="font-semibold relative left-1/6 min-md:font-medium">{props.donationTitle}</label>
          <input type="text" className="border-b-2 mb-8 outline-none hover:scale-105 duration-300" />

          <label className="font-semibold relative left-1/6 min-md:font-medium">{props.description}</label>
          <input type="text" className="border-b-2 outline-none mb-8 hover:scale-105 duration-300" />

          <label className="font-semibold relative left-1/6 min-md:font-medium">{props.location}</label>
          <input type="text" className="border-b-2 outline-none mb-8 hover:scale-105 duration-300" />

         
          <label className="font-semibold relative left-1/6 min-md:font-medium ">{props.category}</label>
        <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="mb-8 px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-600 hover:scale-105 duration-300"
        >
        <option value="" disabled>Select Category</option>
        {categories.map((cat) => (
        <option key={cat} value={cat}>
         {cat}
        </option>
        ))}
      </select>

          
          <label className="font-semibold relative left-1/6 min-md:font-medium">{props.type}</label>
<select
  value={selectedType}
  onChange={(e) => setSelectedType(e.target.value)}
  className="mb-8 px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-600 hover:scale-105 duration-300"
>
  <option value="" disabled>Select Type</option>
  <option value="monetary">Contribución Monetaria</option>
  <option value="physical">Contribución Física</option>
</select>

          {props.buttonCreate}
        </div>
      </div>
    </section>
  );
}
