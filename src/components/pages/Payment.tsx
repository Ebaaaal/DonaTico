import type React from 'react';
import { useState } from 'react';


interface PaymentProps {
  btnBack: React.ReactNode;
  title: string;
  donation: string;
  amount: number[]
  textInfo: string;
  textTitleInfo: string;

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
  const [amounts, setAmounts] = useState(0);

  const [method, setMethod] = useState(false);

  return (
    <section className='flex flex-col justify-center items-center'>
      <div className="flex flex-col mb-30 mt-15 text-green-900 gap-16 font-fredoka w-4/5 min-md:w-1/2">
        <div >
          <h1 className="flex justify-center items-center mr-5 gap-5 text-3xl font-regular text-black max-sm:text-lg">
            {props.btnBack}
            {props.title}
          </h1>
        </div>

        <div className=' flex flex-col gap-10 w-auto ' >
          <h3 className='mb-3 font-semibold'> {props.donation}</h3>
          <div className='grid grid-cols-4 gap-3 w-full min-xl:flex max-[30rem]:grid-cols-2  '>
            {
              props.amount.map((amount) => (
                <button className='border-2 border-lime-500 rounded-xl text-green-900 text-sm max-lg: w-full py-2 hover:bg-lime-200 hover:scale-115 duration-300 cursor-pointer '
                  onClick={() => setAmounts(amount)} key={amount}>₡ {amount} </button>
              ))}

          </div>
          <div className='relative mb-35 '>
            <div className='absolute flex flex-col items-center bottom-1 text-center ml-6 cursor-default'>
              <span className='-mt-10 text-2xl w-full' >₡</span>
              <span className=' font-semibold text-xs w-full' >CRC</span>
            </div>
            <span className='absolute bottom-0.5 right-1 text-3xl cursor-default ' >.00</span>
            <input id='amount' type="text" min='0' pattern='[0-9]*' value={amounts ? amounts : ''} className=' mt-10 text-end text-3xl border-b-2 outline-none w-full px-12'
              onChange={(e) => { setMethod(true); if (parseInt(e.target.value) < 5000000) setAmounts(parseInt(e.target.value)); if (e.target.value.length === 0) setAmounts(''); if (parseInt(e.target.value) < 0) setAmounts(0); if (parseInt(e.target.value) > 5000000) setAmounts(5000000); }}
            />

            <div className={`${method ? 'block' : 'hidden'}`}>
              <p className='absolute left-0 text-red-600 animate-pulse mt-1 text-xs font-extralight'>{amounts >= 5000000 ? 'Limite superado, no se permiten donaciones de mas de ₡5,000,000' : ''}</p>
              <p className='absolute left-0 text-red-600 animate-pulse mt-1 text-xs font-extralight'>{amounts === 0 || String(amounts) === '' ? 'Escribe la cantidad de la donacion, por favor.' : ''}</p>
              <p className='absolute left-0 text-red-600 animate-pulse mt-1 text-xs font-extralight'>{amounts < 500 && amounts > 0 ? 'La donacion minima es de ₡500' : ''}</p>
            </div>
            <div className='absolute'>
              <h5 className=' mt-10 font-semibold leading-none '>{props.textTitleInfo}</h5>
              <p className='mt-5 text-xs text-justify'>{props.textInfo}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-10 w-auto">
          <div className="flex flex-col gap-2 pl-4 text-sm">
            <label className="font-semibold -ml-4">{props.Method}</label>

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
    </section >
  );
}
