import React from 'react'
import ContactUsForm from '../components/ContactUsForm/ContactUsForm'
import ContactUsHeader from '../components/ContactUsHeader/ContactUsHeader'
import ContactUsMails from '../components/ContactUsMails/ContactUsMails'
import Certifications from '../components/Certifications/Certification'

const Contact = () => {
    return (
        <div>
            <ContactUsHeader />
            <ContactUsMails />
            <ContactUsForm />
            <Certifications/>
        </div>
    )
}

export default Contact
