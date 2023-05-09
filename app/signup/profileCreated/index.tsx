import { Button, Steps } from "@/components";
import { regStyles } from '@/styles';
import { useRouter } from 'next/router';
import { FaUser } from "react-icons/fa";
const FirstProfilePage = () => {
  const router = useRouter();
  console.log(router)

  return (
    <div className={regStyles.registerContainer}>

      <Steps name={router.pathname} />

      <div>
        <p className={regStyles.paragraph}>Dear, &#40;name&#41;</p>
        <p className={regStyles.paragraph}>Your profile is successfully created</p>
      </div>
      <div className={regStyles.card}>
        <div className={regStyles.cardHeader}>
          <div>
            <FaUser className="text-5xl text-indigo-500" />
          </div>
          <div className={regStyles.userName}>
            <span>Name Surname</span>
          </div>
        </div>
        <div className={regStyles.cardBody}>
          <div className="mb-3">
            <span>Direction</span>
            <div className={regStyles.cardInfo}></div>
          </div>
          <div className="mb-3">
            <span>Skills</span>
            <div className={regStyles.cardInfo}></div>
          </div>
          <div className="mb-3">
            <span>Test score</span>
            <p className={regStyles.userScore}>29/30</p>
            <div className={regStyles.progressBarContainer}>
              <div className={regStyles.progress}></div>
            </div>
          </div>
          <div className={regStyles.otherInfo}>
            <span>Other info</span>
          </div>
        </div>

        <div className={regStyles.completeBadge}>
          <img src="/images/badge4.svg" alt="complete badge" />
        </div>
      </div>

      <div className="mb-10 mt-8 text-center">
        <Button onClick={() => router.push('/signup/profile')} title="Go to my profile" />
        <div className="my-6">
          <Button onClick={() => router.push('/signup/')} title="Go to Detailed skills assignment" />

        </div>
        <Button onClick={() => router.push('/signup/professional-test')} title="Go to Professional orientation test" />
      </div>


    </div>
  )
}


export default FirstProfilePage;