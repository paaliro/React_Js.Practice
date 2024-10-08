import React from 'react'
// single card

function Card({user, handleRemove, id}) {
  return (
    <div className='w-40 h-full bg-zinc-100 rounded-lg  flex flex-col items-center p-2' >
        <div className='image w-[3vw] h-[3vw] rounded-full bg-zinc-300 overflow-hidden'>
            <img className='w-full h-full object-cover' src={user.image} alt="" />
        </div>
            <h1 className='mt-1 font-semibold text-xl '>{user.name}</h1> 
            <h4 className='opacity-50 text-xs font-semibold'>{user.email}</h4>
            <p className='mt-3 text-center text-xs font-semibold leading-1 tracking-tight'>Lorem ipsum dolor sit sit, consectetur adipisicing elit. Illo perferendis consequatur quam?</p>
            <button onClick={()=> handleRemove(id)} className='mt-4 px-3 py-1 bg-red-600 text-xs rounded-md font-semibold text-white'>Remove It</button>
    </div>
  )
}

export default Card