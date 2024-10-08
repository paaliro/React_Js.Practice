import React, { useState } from 'react'
import Cards from './components/Cards'
import Form from './components/Form'

function App() {
    const [users, setUsers] = useState([]);
    
    const handleFormSubmitData = (data) => {
      // console.log(data)
        setUsers([...users, data])
    }

    const handleRemove = (number) => {
      console.log(number)
      setUsers(() => users.filter((user, index) =>  index !== number))
      console.log(users)
    }

     
  return (
    <div className='w-full h-screen bg-zinc-300 flex items-center justify-center' >
        <div className='container mx-auto'>
            <Cards users={users} handleRemove={handleRemove} />
            <Form handleFormSubmitData={handleFormSubmitData}/>
        </div>
    </div>
  )
}

export default App