import type React from 'react';
import Campaign from '../Campaign';

interface CampaignProps {
  image: string;
  organizer: string;
  heading: string;
  details: string;
  link: React.ReactNode;
  progress: number;
}

interface DisastersProps {
  btnBack: React.ReactNode;
  btnInfo: React.ReactNode;
  title: string;
  searchPlaceholder: string;
  campaign: CampaignProps[];
}

export default function Disasters(props: DisastersProps) {
 

  return (
   <section className='px-8 py-10'>
      <div className=" flex-col justify-center items-center   text-green-900 font-fredoka  ">
        <div className="flex justify-center items-center pb-10">
          <h1 className="flex mr-8 gap-x-15 text-3xl font-regular text-black pl-12">
            {props.btnBack}
            {props.title}
            {props.btnInfo}
          </h1>
        </div>

        <div className=" ">

      <input
        type="text"
        placeholder={props.searchPlaceholder}
        className="w-full bg-green-900 text-white placeholder-white rounded-full px-4 py-2 text-sm mb-6"
      />

      <div className="flex flex-col gap-4">
        {props.campaign.map((campaign, index) => (
          <Campaign
            key={index}
            image={campaign.image}
            organizer={campaign.organizer}
            heading={campaign.heading}
            progress={campaign.progress}
            details={campaign.details}
            link={campaign.link}
          />
        ))}
 
      </div>
  </div>  
      </div>
    </section>
   
  );
}
