import { TestWindow, Button } from "@/components"
import { testStyles } from "@/styles"
import { useRouter } from "next/router"

const PersonalityQuestionsPage = () => {
    const router = useRouter()
    const handleNavigate = () => {
        router.replace('/signup/professional-test/components/interest-identification')
    }
    return (
        <div className="container">
            <div className=" flex items-center justify-center gap-4 my-6 ">
                <img className="max-w-[90px]" src="/images/imagination.png" />
                <p className={testStyles.headingSecondary}>Personality question</p>
            </div>
            <TestWindow />
            <div className="mb-3 mt-8  text-center">
                <Button onClick={handleNavigate} title="Next" />
            </div>

        </div>
    )
}
export default PersonalityQuestionsPage