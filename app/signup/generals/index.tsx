import { Button, Input, Steps } from "@/components";
import SelectOption from "@/components/select";
import { homeStyles, regStyles } from '@/styles';
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";
import { useRouter } from 'next/router';

const SignUp = () => {
  const router = useRouter();

  return (
    <div className={regStyles.registerContainer}>
      <h2 className={` ${homeStyles.secondGradeHeading} flex items-center justify-center gap-2  mb-4 mt-16 `}>
        <FaCheckCircle /> Register and pass tests to verify your account
      </h2>
      <Steps name={router.pathname} />

      <div className="mb-3">
        <Input label="First name" />
      </div>
      <div className="mb-3">
        <Input label="Last name" />
      </div>
      <div className="mb-3">
        <Input label="Email" type="email" />
      </div>
      <div className="mb-3">
        <SelectOption label="Country" options={[
          { label: 'Russia', value: 'ru' },
          { label: 'USA', value: 'us' },
          { label: 'Russia', value: 'ru' },]} />
      </div>
      <div className="mb-3">
        <Input label="Phone number" type="number" />
      </div>
      <div className="mt-8">
        <Button onClick={() => router.push('/signup/directions')} title="Next" />
      </div>


    </div>
  )
}


export default SignUp;