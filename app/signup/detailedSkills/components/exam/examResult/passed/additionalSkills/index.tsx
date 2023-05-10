import { Button } from "@/components"
import { regStyles, testStyles } from "@/styles"
import { useRouter } from "next/router"
const AdditionalSkillsPage = () => {
    const router = useRouter()
    return (
        <div className="container">
           <div className="mt-24">
           <div className={testStyles.header}>
                <h2 className={`${testStyles.heading} mb-5`}>Additional skills assessment</h2>
                <p className={regStyles.paragraph}>A soft skills evaluation can point out areas where strengthening your abilities will have a significant positive impact on both the performance of your team and your own success.</p>
            </div>
            <div className={testStyles.startContainer}>
                <div className="w-[260px] my-5">
                <img src="/images/imagination.png"/>
                </div>
            </div>
            <div className="text-center mt-2 mb-12">
                <Button classes="min-w-[30%]" title="Start" onClick={() => router.push('/signup/detailed-skills/components/exam/exam-result/passed/test-window')} />
            </div>
           </div>
        </div>
    )
}
export default AdditionalSkillsPage