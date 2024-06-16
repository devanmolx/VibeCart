import React from 'react'
import ProfileComponent from '../components/ProfileComponent'

const page = () => {
  return (
    <div className=' mt-10 px-4 md:px-8 xl:px-32 2xl:px-64'>
        <div className=' w-full flex flex-col md:flex-row'>
            <ProfileComponent />
        </div>
    </div>
  )
}

export default page