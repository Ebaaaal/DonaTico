import typeReact from 'react'


interface CreateDonationProps {
    btnBack: typeReact.ReactNode;
    title: string;
    img: string;
    alt: string;
    donationTitle: string;
    description: string;
    location: string;
    category: string;
    type: string;
    buttonCreate?: typeReact.ReactNode;
}


export default function CreateDonation(props: CreateDonationProps) {

    return (
        <section>
            <div className="flex flex-col justify-center items-center min-h-dvh text-green-900 gap-10 font-fredoka min-md:gap-20 pb-10">
                <div className="flex justify-center items-center w-full ">
                    
                   <h1 className=" flex justify-center items-center mr-8 gap-x-5 text-3xl font-regular min-md:text-3xl text-black ">{props.btnBack ? props.btnBack : ''}{props.title}</h1> 
                </div>
                

                <img src="/src/assets/img.png" alt="img" />

                <div className="flex flex-col gap-1 w-3/4 min-md:gap-3 min-md:text-3xl min-md:w-2/3">
                    <label className="font-semibold relative left-1/6 min-md:font-medium">{props.donationTitle}</label>
                    <input type="email" className=" border-b-3 mb-8 outline-none hover:scale-105 duration-300" />

                    <label className="font-semibold relative left-1/6 min-md:font-medium">{props.description}</label>
                    <input type="password" className=" border-b-3 outline-none mb-8 hover:scale-105 duration-300" />

                      <label className="font-semibold relative left-1/6 min-md:font-medium">{props.location}</label>
                    <input type="password" className=" border-b-3 outline-none mb-8 hover:scale-105 duration-300" />

                      <label className="font-semibold relative left-1/6 min-md:font-medium">{props.category}</label>
                    <input type="password" className=" border-b-3 outline-none mb-8 hover:scale-105 duration-300" />

                      <label className="font-semibold relative left-1/6 min-md:font-medium">{props.type}</label>
                    <input type="password" className=" border-b-3 outline-none mb-8 hover:scale-105 duration-300" />

                    {props.buttonCreate ? props.buttonCreate : ''  } 
                    <div className="flex gap-4 justify-center">
                        
                    </div>
                </div>
            </div>
        </section>

    )


}  