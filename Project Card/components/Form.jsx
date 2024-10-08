import React from 'react'
import { useForm } from 'react-hook-form'

function Form({ handleFormSubmitData }) {
    const { register, handleSubmit, reset } = useForm();
    
    return (
        <div className='mt-10 flex justify-center'>
            <form className='flex gap-5' onSubmit={handleSubmit(data => {
              handleFormSubmitData(data)
              reset()
            })}>
                <input {...register("name")}  required className='rounded-md px-2 py-1 text-base font-semibold outline-none' type="text" placeholder='name' />
                <input {...register("email")}  className='rounded-md px-2 py-1 text-base font-semibold outline-none' type="email" placeholder='email' />
                <input {...register("image")}  className='rounded-md px-2 py-1 text-base font-semibold outline-none' type="text" placeholder='image' />
                <input className='rounded-md px-5 py-1 bg-blue-500 font-semibold text-white cursor-pointer' type="submit" />
            </form>
        </div>
    )
}

export default Form;
