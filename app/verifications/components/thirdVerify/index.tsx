import { Button, Input } from "@/components"
import { regStyles, testStyles } from "@/styles"
import { useRouter } from "next/router"
import { FaLocationArrow, FaMap, FaMapMarked, FaMapMarkedAlt, FaMapMarker, FaMapMarkerAlt, FaMapSigns, FaSearchLocation } from "react-icons/fa"

const ThirdVerifyPage = () => {
    const router = useRouter()
    return (
        <div className="container">
            <div className="mt-20 max-w-[60%] mx-auto flex justify-center items-center h-[80vh] ">
              <div>
              <p className={regStyles.paragraph}>Your contact details</p>
               <div className="mb-5">
                    <Input classes="p-6 min-w-[100%]" type="text" label="Name and Surname"/>
               </div>
               <div className="mb-5">
                    <Input  classes="p-6 w-[450px]" type="number" label="Phone number"/>
               </div>
               <div className="mb-5">
                    <input id="checkboxf" className="w-5" type="checkbox"/>
                    <label htmlFor="checkboxf"> I agree to the  terms and conditions</label>
               </div>
               <div className="mb-5 text-center">
                <Button   onClick={() => router.push('/verifications/components/last-verify')} title="Confirm booking"/>
               </div>
              </div>
            </div>
        </div>
    )
}
export default ThirdVerifyPage