import { TestWindow, Button } from "@/components"
import { testStyles } from "@/styles"
import { useRouter } from "next/router"

const InterestIdentificationPage = () => {
    const router = useRouter()
    return (
        <div className="container">
            <div className=" flex items-center justify-center gap-4 my-6 ">
                <img className="max-w-[90px]" src="/images/interest.png" />
                <p className={testStyles.headingSecondary}>Interests identification</p>
            </div>
            <TestWindow />
            <div className="mb-3 mt-8 text-center">
                <Button onClick={() => router.push('/signup/professional-test/components/career-questions')} title="Next" />
            </div>

        </div>
    )
}
export default InterestIdentificationPage