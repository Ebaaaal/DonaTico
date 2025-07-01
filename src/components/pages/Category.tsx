import type React from 'react';
import Campaign from '../Campaign';

interface CampaignProps {
  image: string;
  location: string;
  organizer: string;
  heading: string;
  progress: number;
  details: string;
  link: string;
}

interface CategoryProps {
  btnBack: React.ReactNode;
  btnInfo: React.ReactNode;
  title: string;
  searchPlaceholder: string;
  campaign: CampaignProps[];

}

export default function Category(props: CategoryProps) {


  return (
    <section className='px-5 pt-10 pb-20 flex justify-center'>
      <div className="justify-center items-center text-green-900 font-fredoka min-md:w-1/3">
        <div className="flex justify-center items-center pb-10">
          <h1 className="flex mr-8 gap-x-10 text-3xl font-regular text-black pl-12">
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

          <div className="flex flex-col gap-9">
            {props.campaign.map((campaign, index) => (
              <Campaign
                key={index}
                image={campaign.image}
                location={campaign.location}
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
