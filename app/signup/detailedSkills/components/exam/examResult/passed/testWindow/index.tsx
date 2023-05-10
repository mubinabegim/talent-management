import { Button, Circle } from "@/components"
import { testWindowStyles } from "@/styles"
import { useRouter } from "next/router"

const TestWindowPage = () => {
    const router = useRouter()
    return (
        <div className="container">
            <div className={`${testWindowStyles.testWinWrapper} mt-20`}>
                <h3 className={testWindowStyles.testHeading}> Test window</h3>
                <p className={`${testWindowStyles.question} mt-2`}>
                    How do you identify and assess talent within an IT organization, and what metrics or tools do you use to measure performance?</p>
                    <Circle
                     circles={[
                        {radius: 15, label:'Very Rarely'},
                        {radius: 25, label:'Rarely'},
                        {radius: 35, label:'Sometimes'},
                        {radius: 45, label:'Often'},
                        {radius: 55, label:'Very Often'},




                    ]}/>
                <p className={`${testWindowStyles.question} mt-14`}>
                    What strategies and tactics have you found to be most effective in retaining and developing top talent in the IT field, and how do you balance the needs of individual employees with those of the organization as a whole?
                </p>
                <Circle
                     circles={[
                        {radius: 15, label:'Very Rarely'},
                        {radius: 25, label:'Rarely'},
                        {radius: 35, label:'Sometimes'},
                        {radius: 45, label:'Often'},
                        {radius: 55, label:'Very Often'},
                    ]}/>
            </div>
            <div className="mb-3 mt-8  text-center">
                <Button onClick={() => router.push('/signup/detailed-skills/components/exam/exam-result/passed/last-page')} title="Submit" />
            </div>
        </div>


    )
}
export default TestWindowPage