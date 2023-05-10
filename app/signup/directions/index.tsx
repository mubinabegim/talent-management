import { Button, Input, Steps, } from "@/components";
import SelectOption from "@/components/select";
import { regStyles } from '@/styles';
import { useRouter } from 'next/router';

const DirectionsPage = () => {
  const router = useRouter();
  console.log(router)

  return (
    <div className={regStyles.registerContainer}>

      <Steps name={router.pathname} />
      <div className="mb-3">
        <Input label="Place of study" />
      </div>
      <div className="mb-3">
        <Input label="Direction of study" />
      </div>
      <div className="mb-3">
        <SelectOption label="Degree" options={[
          { label: 'Bachelor', value: 'bachelor' },
          { label: 'Graduate degree', value: 'graduate' },
          { label: 'Master degree', value: 'master' },]}  />
      </div>
      <div className="mb-3">
        <SelectOption label="Choose your direction" options={[
          {label: 'Software Development', value: 'software development'},
          {label: 'Database Management', value: 'database management'},
          {label: 'Networking', value: 'networking'},
          {label: 'Cybersecurity', value: 'cybersecurity'},
          {label: 'AI and Machine Learning', value: 'AI'}
        ]} />
      </div>
      <div className="mb-3">
        <SelectOption label="Choose your skills" options={[
          {label: 'Database Management', value: 'database management'},
          {label: 'Software engineering', value: 'software engineering'}
        ]} />
      </div>
      <div className="mb-3 mt-8">
        <Button onClick={() => router.push('/signup/test-section')} title="Next" />
      </div>


    </div>
  )
}


export default DirectionsPage;