import { Button, Input, Steps } from "@/components";
import { homeStyles, regStyles } from '@/styles';
import { useRouter } from 'next/router'
const RegisterPage = () => {
  const router = useRouter();
  return (
    <div className={`${regStyles.registerContainer} h-[90vh]`}>

      <h2 className={homeStyles.secondGradeHeading}>Personal account sign in</h2>

      <div className="mb-3 text-center">
        <Input label="Email" type="email" />
      </div>
      <div className="mb-5 text-center">
        <Input label="Password" type="password" />
      </div>
      <div className="mb-3 text-center">
        <Button title="Sign in" />
      </div>
      <div className="mb-3 text-center">

        <Button onClick={() => router.push('/signup/general-information')} title="I don't have a profile" />
      </div>

    </div>
  )


}


export default RegisterPage;