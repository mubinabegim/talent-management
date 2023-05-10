import { Button } from "@/components"
import { regStyles, testStyles } from "@/styles"
import { useRouter } from "next/router"
import { FaLocationArrow, FaMap, FaMapMarked, FaMapMarkedAlt, FaMapMarker, FaMapMarkerAlt, FaMapSigns, FaSearchLocation } from "react-icons/fa"

const SecondVerifyPage = () => {
    const router = useRouter()
    return (
        <div className="container">
            <div className="mt-20 max-w-[60%] mx-auto ">
                <div className="flex justify-between mb-8 ">
                    <div>
                        <p className={`${regStyles.paragraph} text-start mb-2`}> Lalala Test Center</p>
                        <p className={`${regStyles.paragraph} text-start`}> Select preffered test time</p>
                    </div>
                    <div className="flex gap-1 items-center">
                        <FaMapMarkerAlt />
                        <span>
                            Show on Map
                        </span>
                    </div>
                </div>
                <div className="flex justify-between items-center border-4 border-violet-400 p-4 rounded-2xl">
                    <div>
                        <p className={regStyles.paragraph}>August 25, 9:00</p>
                        <p>Python test</p>
                    </div>
                    <div>
                        <Button onClick={() => router.push('/verifications/components/third-verify')} title="Book a test"/>
                    </div>
                </div>
                <div className="flex justify-between items-center border-4 border-violet-400 p-4 rounded-2xl my-6">
                    <div>
                        <p className={regStyles.paragraph}>August 25, 10:00</p>
                        <p>Python test</p>
                    </div>
                    <div>
                        <Button  onClick={() => router.push('/verifications/components/third-verify')} title="Book a test"/>
                    </div>
                </div>
                <div className="flex justify-between items-center border-4 border-violet-400 p-4 rounded-2xl">
                    <div>
                        <p className={regStyles.paragraph}>August 25, 17:00</p>
                        <p>Python test</p>
                    </div>
                    <div>
                        <Button  onClick={() => router.push('/verifications/components/third-verify')} title="Book a test"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SecondVerifyPage