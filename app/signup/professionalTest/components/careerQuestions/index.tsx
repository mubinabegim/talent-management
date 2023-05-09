import { TestWindow, Button } from "@/components"
import { testStyles } from "@/styles"
import { useRouter } from "next/router"

const CareerQuestionsPage = () => {
    const router = useRouter()
    return (
        <div className="container">
            <div className=" flex items-center justify-center gap-4 my-6 ">
                <img className="max-w-[90px]" src="/images/development.png" />
                <p className={testStyles.headingSecondary}>Career match questions</p>
            </div>
            <TestWindow />
            <div className="mb-3 mt-8  text-center">
                <Button onClick={() => router.push('/signup/professional-test/components/results')} title="Get results" />
            </div>

        </div>
    )
}
export default CareerQuestionsPage