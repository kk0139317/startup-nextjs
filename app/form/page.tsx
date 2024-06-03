import React from 'react'
import Sidebar from '@/components/Sidebar'
import Breadcrumb from '@/components/Common/Breadcrumb'
import Hero from '@/components/Hero'
import Form from '@/components/Form'
const page = () => {
  
  return (
    
    <main className=' h-auto min-h-100 ' >
          {/* <Breadcrumb
              pageName="Contact Page"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
          /> */}

    <Sidebar/>
    <Form/>

          {/* <iframe src="http://localhost:3000/blog" frameborder="0"></iframe> */}

    <div>
        
    </div>
        
    </main>
    
  )
}

export default page