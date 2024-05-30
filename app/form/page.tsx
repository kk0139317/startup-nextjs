import React from 'react'
import Sidebar from '@/components/Sidebar'
import Breadcrumb from '@/components/Common/Breadcrumb'
const page = () => {
  return (
    
    <main className=' h-auto min-h-100 ' >
          <Breadcrumb
              pageName="Contact Page"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
          />
    <Sidebar/>

    <div>
        
    </div>
        
    </main>
    
  )
}

export default page