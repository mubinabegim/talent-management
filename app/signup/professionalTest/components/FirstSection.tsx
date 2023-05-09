import { Button } from "@/components"
import { regStyles, testStyles } from "@/styles"
import { useRouter } from "next/router"
const FirstSection = () => {
    const router = useRouter()
    return (
        <div className="container">
            <div className={testStyles.header}>
                <h2 className={testStyles.heading}>Professional orientation test</h2>
                <p className={regStyles.paragraph}>Take the test now and discover your top careers and detailed personality traits using advanced machine learning, psychometrics, and cutting-edge technologies</p>
            </div>
            <div className={testStyles.startContainer}>
                <div className={testStyles.infoChain}>
                    <div className="absolute left-[-22px]  top-[-6px] flex flex-col gap-36">
                        <div className={testStyles.infoItem}>
                            <div className={testStyles.circle}></div>
                            <div className={testStyles.infoText}>
                                <p>Personality questions</p>
                                <span>3 min</span>
                            </div>
                        </div>
                        <div className={testStyles.infoItem}>
                            <div className={testStyles.circle}></div>
                            <div className={testStyles.infoText}>
                                <p>Interests identification</p>
                                <span>3 min</span>
                            </div>
                        </div>
                        <div className={testStyles.infoItem}>
                            <div className={testStyles.circle}></div>
                            <div className={testStyles.infoText}>
                                <p>Career match questions</p>
                                <span>3 min</span>
                            </div>
                        </div>
                        <div className={testStyles.infoItem}>
                            <div className={testStyles.circle}></div>
                            <div className={testStyles.infoText}>
                                <p>Results</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className={testStyles.startImg}>
                    <img src="/images/undraw_businessman_re_mlee.svg" alt="businessman" />
                </div>
            </div>
            <div className="text-center mt-2 mb-12">
                <Button classes="min-w-[30%]" title="Start" onClick={() => router.push('/signup/professional-test/components/personality-questions')} />
            </div>
        </div>
    )
}
export default FirstSection