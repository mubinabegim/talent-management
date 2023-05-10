import { detailedSkillsStyles, regStyles, testStyles } from "@/styles"
import Example from "./PieChart"
import { Button } from "@/components"
import { useRouter } from "next/router"

const LastPage = () => {
    const router = useRouter()

    return (
        <div className="container">
            <div className="mt-24">
                <h2 className={`${testStyles.heading} text-violet-500`}>Here's How Your Skills Stack Up:</h2>
                <div className="flex items-center justify-center">
                    <div className="w-[600px]">
                        <Example />

                    </div>
                    <div className="flex flex-col gap-2 w-[50%]">
                        <div className="flex gap-2 items-center">
                            <div className="bg-blue-500 w-[100px] h-14"></div>
                            <p className="text-xs font-semibold text-blue-700">Your program solving skill's result is 25% </p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <div className="bg-amber-400 w-[152px] h-14"></div>
                            <p className="text-xs font-semibold text-amber-600">Your critical thinking's result is 34% </p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <div className="bg-emerald-500 w-[200px] h-14"></div>
                            <p className="text-xs font-semibold text-emerald-700">Your networking's result is 41% </p>
                        </div>
                    </div>

                </div>
                <div>
                    <p className={`${regStyles.paragraph}`}>Try to practice your skills with our courses</p>
                    <div className={`${detailedSkillsStyles.cardsgroup} max-w-[60%] mx-auto`}>
                        <div className={`${detailedSkillsStyles.card} w-[210px]`}>
                            <div className={`${detailedSkillsStyles.cardHeader} min-h-[250px] flex items-center justify-center`}>
                                <p className={regStyles.paragraph}>Time-management</p>
                            </div>
                            <div className={detailedSkillsStyles.cardFooter}>
                                <Button classes="rounded-3xl py-0.5" title="Go to a course" />
                            </div>
                        </div>
                        <div className={`${detailedSkillsStyles.card} w-[210px]`}>
                            <div  className={`${detailedSkillsStyles.cardHeader} min-h-[250px] flex items-center justify-center px-6`}>
                            <p className={regStyles.paragraph}>Problem-solving</p>

                            </div>
                            <div className={detailedSkillsStyles.cardFooter}>
                                <Button  classes="rounded-3xl py-0.5" title="Go to a course" />
                            </div>
                        </div>
                        <div className={`${detailedSkillsStyles.card} w-[210px]`}>
                            <div  className={`${detailedSkillsStyles.cardHeader} min-h-[250px] flex items-center justify-center px-6`}>
                            <p className={regStyles.paragraph}>Decision-making</p>

                            </div>
                            <div className={detailedSkillsStyles.cardFooter}>
                                <Button classes="rounded-3xl py-0.5" title="Go to a course" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-10 text-center">
                    <Button onClick={() => router.push('/signup/profile-created')} title="Go to my profile" />
                </div>
            </div>
        </div>
    )
}
export default LastPage