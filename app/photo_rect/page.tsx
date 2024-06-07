import React from 'react'
import Sidebar from '@/components/Sidebar'
import Breadcrumb from '@/components/Common/Breadcrumb'
import Hero from '@/components/Hero'
import Form from '@/components/Form'
import MlForm from '@/components/MLForm'
import FormTwo from '../MLForm/FormTwo'
import FormSidebar from '@/components/MLForm/FormSIdeBar'
const page = () => {

    return (
        <section
            id="home"
            className="dark:bg-gray-dark mt-64 h-full  z-10 overflow-hidden bg-white pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
        >
            <div className="container ">
                <FormSidebar />
                <FormTwo />
            </div>
        </section>

    )
}

export default page