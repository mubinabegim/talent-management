import { Button, Steps } from "@/components";
import {  regStyles } from '@/styles';
import { useRouter } from 'next/router';

const ResultsHomePage = () => {
  const router = useRouter();
  console.log(router)

  return (
    <div className={regStyles.registerContainer}>

      <Steps name={router.pathname} />
      <div className=" w-[350px]">
        <img src="/images/graduationCap.png" alt="education" />
      </div>
      <div>
      <p className={`${regStyles.paragraph} `}>Congratulations!</p>
      <p className={`${regStyles.paragraph} `}>
         You have successfully passed the qualification test.
      </p>
      <p className={`${regStyles.paragraph}  mt-6 mb-8`}>Your score is <span className={regStyles.userScore}>29/30</span></p>
      <p className={`${regStyles.paragraph} mb-14 `}>Press next to create your account.</p>

      </div>


      <div className=" mb-10">
        <Button onClick={() => router.push('/signup/profile-created')} title="Next" />
      </div>


    </div>
  )
}


export default ResultsHomePage;