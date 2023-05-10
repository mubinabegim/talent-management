import { Button, Input } from "@/components"
import SelectOption from "@/components/select"
import { inputStyles, testStyles } from "@/styles"
import { useRouter } from "next/router"

const TestPage = () => {
    const router = useRouter()
    return (
        <div className="container">
            <div className="mt-20 px-auto flex flex-col justify-center items-center">
                <p className={testStyles.headingSecondary}>Book a test now!</p>
                <div>
                    <div className="mb-6 mt-8">
                        <SelectOption label="Select the test center"
                            options={[
                                {label: "", value:""},
                                { label: 'Lalala', value: 'lalala' },
                                { label: 'Pearson VUE', value: 'pearson vue' },
                                { label: 'Prometric', value: 'prometric' },
                                { label: 'CodeSignal', value: 'codeSignal' }
                            ]}
                        />
                    </div>
                    <div className="mb-6 ">
                        <SelectOption label="Select your direction"
                            options={[
                                { label: 'Web Development', value: 'web development' },
                                { label: 'IOS Development', value: 'ios Development' },
                                { label: 'Design', value: 'design' }
                            ]}
                        />
                    </div>
                    <div className="mb-6 ">
                        <Input  label="Select the date" type="date"  />
                    </div>
                    <div className="mb-6  text-center">
                        <Button onClick={() => router.push('/verifications/components/second-verify')} title="Search"/>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default TestPage