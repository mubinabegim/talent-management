import { testWindowStyles } from "@/styles"
const TestWindow = () => {
    return (
        <div className={testWindowStyles.testWinWrapper}>
            <h3 className={testWindowStyles.testHeading}> Test window</h3>
            <p className={`${testWindowStyles.question} mt-2`}>
                How do you identify and assess talent within an IT organization, and what metrics or tools do you use to measure performance?</p>
            <ol>
                <li className={testWindowStyles.testQA}>
                    1.  Performance reviews and feedback from managers and peers
                </li>
                <li className={`${testWindowStyles.testQA} my-3`}>
                    2. Employee engagement surveys and retention rates
                </li>
                <li className={testWindowStyles.testQA}>
                    3. Technical skills assessments and certification programs
                </li>
            </ol>
            <p className={`${testWindowStyles.question} mt-8`}>
                What strategies and tactics have you found to be most effective in retaining and developing top talent in the IT field, and how do you balance the needs of individual employees with those of the organization as a whole?
            </p>
            <ol>
                <li className={testWindowStyles.testQA}>
                    1. Offering competitive salaries and benefits packages
                </li>
                <li className={`${testWindowStyles.testQA} my-3`}>
                    2.  Providing opportunities for skills development and career growth
                </li>
                <li className={testWindowStyles.testQA}>
                    3. Focusing on team-building and collaboration within the organization


                </li>
            </ol>
        </div>
    )
}
export default TestWindow
