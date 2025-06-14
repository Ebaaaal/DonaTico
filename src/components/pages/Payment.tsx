import type React from 'react';


interface PaymentProps {
  btnBack: React.ReactNode;
  title: string;
  Method: string;
  methodVisa: string;
  methodMastercard: string;
  methodOther: string;
  cardNumber: string;
  cardHolder: string;
  expiration: string;
  security: string;
  saveCard: string;
  buttonPay: React.ReactNode;
}

export default function Payment(props: PaymentProps) {
  return (
    <section className='px-10'>
      <div className="flex flex-col justify-center items-center py-10 text-green-900 gap-16 font-fredoka ">
         <div className="flex justify-center items-center w-full">
          <h1 className="flex justify-center items-center mr-5 gap-5 text-3xl font-regular text-black">
            {props.btnBack}
            {props.title}
          </h1>
        </div>

        <div className="flex flex-col gap-10 px-6">
       
          <label className="font-semibold text-sm">{props.Method}</label>

          <div className="flex flex-col gap-2 pl-4 text-sm">
            <label>
              <input type="radio" name="payment" className="mr-2" />
              {props.methodVisa}
            </label>
            <label>
              <input type="radio" name="payment" className="mr-2" />
              {props.methodMastercard}
            </label>
            <label>
              <input type="radio" name="payment" className="mr-2" />
              {props.methodOther}
            </label>
          </div>

          
          <label className="sr-only">{props.cardNumber}</label>
          <input
            type="text"
            placeholder={props.cardNumber}
            className="border-b-2 outline-none py-1"
          />

          <label className="sr-only">{props.cardHolder}</label>
          <input
            type="text"
            placeholder={props.cardHolder}
            className="border-b-2 outline-none py-1"
          />

          <div className="flex gap-5">
            <input
              type="text"
              placeholder={props.expiration}
              className="w-1/2 border-b-2 outline-none py-1"
            />
            <input
              type="text"
              placeholder={props.security}
              className="w-1/2 border-b-2 outline-none py-1"
            />
          </div>

        
          <label className="flex items-center gap-2 text-sm pb-10">
            <input type="checkbox" />
            {props.saveCard}
          </label>

    
          {props.buttonPay}
        </div>
      </div>
    </section>
  );
}
