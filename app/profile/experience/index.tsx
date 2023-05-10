import React from 'react';
import ExperiencePage from '../components/AddExperience';

const AddExperience = () => {
    const labels = {
        firstLabel: "Position",
        secondLabel: "Employer",
        thirdLabel: "City",
    }
    return (
        <div className='w-10/12 mx-auto'>
            <ExperiencePage title='Add experience' labels={labels} />
        </div>
    )
}

export default AddExperience;