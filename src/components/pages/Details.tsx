import type React from 'react';

interface DetailsProps {
  btnBack: React.ReactNode;
  btnLike: React.ReactNode;
  title: string;
  img: string;
  alt: string;
  donationTitle: string;
  location: string;
  progress: number;
  description: string;
  autor: string;
  btnDonate: React.ReactNode

}

export default function Details(props: DetailsProps) {


  return (
    <section className='px-8 pt-10 pb-20'>
      <div className="flex flex-col justify-center items-center text-green-900 font-fredoka  ">
        <div className="flex justify-center items-center pb-10">
          <h1 className="flex mr-8 gap-x-20 text-3xl font-regular text-black pl-12">
            {props.btnBack}
            {props.title}
            {props.btnLike}
          </h1>
        </div>


        <div className='min-md:w-1/3 flex flex-col'>
          <img className="rounded-xl w-full " src={props.img} alt={props.alt} />
          <h4 className='font-semibold text-2xl py-5 '>{props.donationTitle}</h4>
          <h4 className='text-gray-500'>{props.location}</h4>
          <div className="w-full bg-gray-200 rounded-full h-3 mt-4 overflow-hidden">
            <div
              className="bg-green-600 h-3 transition-all duration-500 ease-in-out "
              style={{
                width: `${Math.min(Math.max(Number(props.progress), 0), 100)}%`,
              }}
            ></div>
          </div>
          <p className="text-sm text-right text-green-900 mt-1">
            {props.progress}% funded
          </p>

          <h4 className='py-5 text-gray-500'>{props.description}</h4>
          <h4 className='font-semibold text-gray-500 py-8'>{props.autor}</h4>
          {props.btnDonate}
        </div>
      </div>
    </section>

  );
}
