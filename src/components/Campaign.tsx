import type React from 'react';

interface CampaignProps {
  image: string;
  organizer: string;
  heading: string;
  details: string;
  link: string;
  progress: number;
}

export default function Campaign(props: CampaignProps) {
  console.log("Progreso recibido:", props.progress);

  return (
    <div className="border-1 border-gray-300 rounded-2xl p-5">
      <img src={props.image} alt="campaign" className="rounded-xl mb-2 w-full " />
      <p className="text-xs text-center text-gray-500">{props.organizer}</p>
      <h3 className="text-center font-bold text-green-900">{props.heading}</h3>


      <div className="w-full bg-gray-200 rounded-full h-3 mt-4 overflow-hidden">
        <div
          className="bg-green-600 h-3 transition-all duration-500 ease-in-out"
          style={{
            width: `${Math.min(Math.max(Number(props.progress), 0), 100)}%`,
          }}
        ></div>
      </div>
      <p className="text-sm text-right text-green-900 mt-1">
        {props.progress}% funded
      </p>

      <p className="text-xs text-center mt-2 text-gray-700">
        <span className="font-semibold text-sm block">Fund Details</span>
        {props.details} <a href={props.link} className="text-green-800 underline">Know More</a>
      </p>
    </div>
  );
}