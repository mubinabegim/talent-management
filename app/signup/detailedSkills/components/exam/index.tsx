import { Button } from "@/components"
import { detailedSkillsStyles, testWindowStyles } from "@/styles"
import { useRouter } from "next/router"

const ExamPage = () => {
    const router = useRouter()
    return (
        <div className="container">
            <div className="mt-16">
                <div className={detailedSkillsStyles.timeContainer}>
                    <p>Time left:</p>
                    <p>39:14</p>
                </div>
                <div className={`${testWindowStyles.testWinWrapper} min-h-[460px]`}>
                    <h3 className={testWindowStyles.testHeading}> Test window</h3>
                    <p className={`${testWindowStyles.question} mt-2`}>Solve a task...</p>
                    <p className={`${testWindowStyles.question} mt-8 text-center`}>What type of programming language experience is most important for this position?</p>
                    <ol>
                        <li className={testWindowStyles.testQA}>
                            1.   Object-Oriented Programming (OOP)
                        </li>
                        <li className={`${testWindowStyles.testQA} my-3`}>
                            2.  Functional Programming
                        </li>
                        <li className={testWindowStyles.testQA}>
                            3. Procedural Programming
                        </li>
                    </ol>


                </div>
                <div className="mb-3 mt-8 text-center">
                    <Button onClick={() => router.push('/signup/detailed-skills/components/exam/exam-result/passed/congrats')} title="Next" />
                </div>
            </div>
        </div>
    )
}
export default ExamPage