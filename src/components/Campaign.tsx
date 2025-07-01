
interface CampaignProps {
  image: string;
  location: string;
  organizer: string;
  heading: string;
  progress: number;
  details: string;
  link: string;
}

export default function Campaign(props: CampaignProps) {
  console.log("Progreso recibido:", props.progress);

  return (
    <div className="border-1 border-gray-300 rounded-2xl p-5 hover:bg-lime-50  duration-300 cursor-default">
      <div className="relative overflow-hidden rounded-xl">
        <img src={props.image} alt="campaign" className=" w-full transition duration-400 hover:scale-110 " />
        <p className="absolute bottom-4 right-4 bg-neutral-200 opacity-70 rounded-full py-1 px-4 text-xs text-center text-black">{props.location}</p>
      </div>
      <p className="text-xs text-center mt-3 text-gray-500">{props.organizer}</p>
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