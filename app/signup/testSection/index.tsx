import { Button, Steps, TestWindow, } from "@/components";
import { regStyles } from '@/styles';
import { useRouter } from 'next/router';

const TestSectionPage = () => {
  const router = useRouter();
  console.log(router)

  return (
    <div className={regStyles.registerContainer}>

      <Steps name={router.pathname} />
      <TestWindow/>
      <div className="mb-3 mt-8">
        <Button onClick={() => router.push('/signup/results')} title="Next" />
      </div>


    </div>
  )
}


export default TestSectionPage;