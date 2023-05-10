import { Button } from "@/components"
import { regStyles } from "@/styles"
import { useRouter } from "next/router"

const PassedExamPage = () => {
    const router = useRouter()
    return (
        <div className={`${regStyles.registerContainer}`}>

            <div className=" w-[350px] mt-16">
                <img src="/images/graduationCap.png" alt="education" />
            </div>
            <div>
                <p className={`${regStyles.paragraph} `}>Congratulations!</p>
                <p className={`${regStyles.paragraph} `}>
                    You have successfully passed the qualification test.
                </p>
                <p className={`${regStyles.paragraph}  mt-6 mb-8`}>Your score is <span className={regStyles.userScore}>45/50</span></p>

            </div>


            <div className=" mb-10 text-center ">
                <Button onClick={() => router.push('/signup/profile-created')} title="Go to my profile" />
                <div className="mt-5 ">
                    <Button onClick={() => router.push('/signup/detailed-skills/components/exam/exam-result/passed/additional-skills')} title="Take additional skills assessment" />

                </div>
            </div>


        </div>
    )
}
export default PassedExamPage