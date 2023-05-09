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
        <SelectOption label="Degree" value={''} />
      </div>
      <div className="mb-3">
        <SelectOption label="Choose your direction" value={''} />
      </div>
      <div className="mb-3">
        <SelectOption label="Choose your skills" value={''} />
      </div>
      <div className="mb-3 mt-8">
        <Button onClick={() => router.push('/signup/test-section')} title="Next" />
      </div>


    </div>
  )
}


export default DirectionsPage;