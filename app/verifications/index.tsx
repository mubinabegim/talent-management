import { Button } from "@/components"
import { regStyles, testStyles } from "@/styles"
import { useRouter } from "next/router"

const MainVerifyComponent = () =>{
    const router = useRouter()

return(
    <div className="container text-center">
        <div className="mt-24 max-w-[60%] mx-auto   flex flex-col gap-14 items-center justify-center">
            <h2 className={testStyles.heading}>Schedule a test in a test center and get your profile verified</h2>
            <div className="max-w-[40%]  mb-16">
                <img src="/images/approved.png" alt="approved" />
            </div>
            <p className={testStyles.headingSecondary}>Register and pass tests to verify your account</p>
            <div className="mb-10  text-center">
                    <Button onClick={() => router.push('/verifications/components/first-verify')} title="Register for a test" />
                </div>
        </div>
    </div>
)
}
export default MainVerifyComponent