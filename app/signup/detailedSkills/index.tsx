import { Button} from "@/components"
import SelectOption from "@/components/select"
import { testStyles } from "@/styles"
import { useRouter } from "next/router"

const DetailedSkillsPage = () => {
    const router = useRouter()
    return (
        <div className={"container pt-16"}>
            <div className="text-center">
                <h2 className={testStyles.heading}>Detailed skills assessment</h2>
                <p className={testStyles.headingSecondary}>Pass detailed skills assessment to complete your account</p>
            </div>
            <div className='flex items-center justify-evenly py-28'>
                <div className="w-1/5">
                    <img src="/images/online-payment.png" alt="computer" />
                </div>
                <div className={testStyles.infoText}>
                    <p>Choose your direction</p>
                    <div className="mt-4 mb-3">
                        <SelectOption
                            options={[
                            { label: 'Python', value: 'py' },
                            { label: 'Javascript', value: 'js' },
                            { label: 'PHP', value: 'php' },
                            { label: 'C#', value: 'csharp' },]} />
                    </div>

                    <span>40 min</span>
                </div>
            </div>
            <div className="text-center mt-8 mb-12">
                <Button classes="min-w-[30%]" title="Start" onClick={() => router.push('/signup/detailed-skills/components/exam')} />
            </div>
        </div>
    )
}
export default DetailedSkillsPage