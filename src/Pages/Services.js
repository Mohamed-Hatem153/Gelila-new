import React from 'react'
import OurServecisHeader from '../components/OurServecisHeader/OurServecisHeader'
import OurServecisDetails from '../components/OurServecisDetails/OurServecisDetails'
import OurServecisStrengths from '../components/OurServecisStrengths/OurServecisStrengths'
import QualityPolicy from '../components/QualityPolicy/QualityPolicy'
import Certifications from '../components/Certifications/Certification'

const Services = () => {
    return (
        <div>
            <OurServecisHeader />
            <OurServecisStrengths />
            <QualityPolicy />
            <OurServecisDetails />
            <Certifications/>
        </div>
    )
}

export default Services
