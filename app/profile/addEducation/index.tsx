import React from 'react';
import ExperiencePage from '../components/AddExperience';

const Education = () => {
    const labels = {
        firstLabel: "Education",
        secondLabel: "School",
        thirdLabel: "City",
        fourthLabel: "Degree"
    }
    return (
        <div className='w-10/12 mx-auto'>
            <ExperiencePage title='Add education and courses' labels={labels} />
        </div>
    )
}

export default Education;