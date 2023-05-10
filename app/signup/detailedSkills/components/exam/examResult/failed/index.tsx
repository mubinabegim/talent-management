import { Button } from "@/components"
import { detailedSkillsStyles, regStyles } from "@/styles"
import { useRouter } from "next/router"
import { FaPython } from "react-icons/fa"

const FailedExamPage = () => {
    const router = useRouter()
    return (
        <div className="container">
            <div className="mt-16 flex items-center justify-center flex-col">
                <div className=" w-[300px]">
                    <img src="/images/fail.png" alt="education" />
                </div>
                <div>
                    <p className={`${regStyles.paragraph} `}> Unfortunately</p>
                    <p className={`${regStyles.paragraph} `}>
                        You have not passed the qualification test.
                    </p>
                    <p className={`${regStyles.paragraph}  mt-6 mb-8`}>Your score is <span className={regStyles.userScore}>18/50</span></p>

                </div>
                <div>
                    <p className={`${regStyles.paragraph} `}>Try to practice your skills with our courses</p>
                    <div className={detailedSkillsStyles.cardsgroup}>
                        <div className={detailedSkillsStyles.card}>
                            <div className={detailedSkillsStyles.cardHeader}>
                                <img src="/images/python.png" alt="python" />
                            </div>
                            <div className={detailedSkillsStyles.cardFooter}>
                                <Button onClick={() => router.push('https://www.freecodecamp.org/learn/scientific-computing-with-python/')} classes="rounded-3xl py-0.5" title="Go to a course" />
                            </div>
                        </div>
                        <div className={detailedSkillsStyles.card}>
                            <div className={detailedSkillsStyles.cardHeader}>
                                <img src="/images/web-development.png" alt="python" />
                            </div>
                            <div className={detailedSkillsStyles.cardFooter}>
                                <Button onClick={() => router.push('https://www.freecodecamp.org/news/tag/html/')} classes="rounded-3xl py-0.5" title="Go to a course" />
                            </div>
                        </div>
                        <div className={detailedSkillsStyles.card}>
                            <div className={detailedSkillsStyles.cardHeader}>
                                <img src="/images/css.png" alt="python" />
                            </div>
                            <div className={detailedSkillsStyles.cardFooter}>
                                <Button onClick={() => router.push('https://www.freecodecamp.org/news/tag/css/')} classes="rounded-3xl py-0.5" title="Go to a course" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-10">
                    <Button onClick={() => router.push('/signup/profile-created')} title="Go to my profile" />
                </div>
            </div>
        </div>
    )
}
export default FailedExamPage