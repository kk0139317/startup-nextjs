import React from 'react'
import Profile from '@/components/Profile'

const page = () => {
  return (
    <>
    <Profile profile={{
        username: '',
        about: '',
        photo: '',
        cover_photo: '',
        first_name: '',
        last_name: '',
        email: '',
        country: '',
        street_address: '',
        city: '',
        region: '',
        postal_code: '',
        comments: false,
        candidates: false,
        offers: false,
        push_notifications: ''
      }}/>
    </>
  )
}

export default page