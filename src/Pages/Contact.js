import React from 'react'
import ContactUsForm from '../components/ContactUsForm/ContactUsForm'
import ContactUsHeader from '../components/ContactUsHeader/ContactUsHeader'
import ContactUsMails from '../components/ContactUsMails/ContactUsMails'

const Contact = () => {
    return (
        <div>
            <ContactUsHeader />
            <ContactUsMails />
            <ContactUsForm />
        </div>
    )
}

export default Contact
