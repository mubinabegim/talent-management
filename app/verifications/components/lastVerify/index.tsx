import { Button, Input } from "@/components"
import SelectOption from "@/components/select"
import { inputStyles, regStyles, testStyles } from "@/styles"
import { useRouter } from "next/router"
import { FaCheckSquare, FaChessBoard, FaRegCheckSquare, FaUser, FaUserAlt, FaUserCircle } from "react-icons/fa"

const LastVerifyPage = () => {
    const router = useRouter()
    return (
        <div className="container">
            <div className="mt-20 max-w-[60%] mx-auto flex justify-center items-center h-[80vh] ">
                <div>
                    <p className={regStyles.paragraph}>Test information</p>
                    <div className=" flex gap-8 border-4 border-violet-400 rounded-2xl p-4">
                        <ul>
                            <li className={`${regStyles.paragraph} text-start mb-2`}> Lalala Test Center</li>
                            <li className="my-2">Blablabla street, Tashkent, Uzbekistan</li>
                            <li className="my-2 underline">August 25, 10:00</li>
                            <li className="my-2">Python test</li>
                        </ul>
                        <div className="text-center flex items-center justify-center flex-col">
                            <div> <FaUserCircle className="text-7xl" /></div>
                            <span>+9989777-77-77</span>
                            <p className="font-extrabold text-lg">Jandos Jandosov</p>

                        </div>
                    </div>
                    <div className="text-center flex items-center flex-col justify-center py-8">
                        <FaRegCheckSquare className="text-7xl mt-2 mb-4" />
                        <p>Thank you for booking! The administrator will contact you to confirm the booking details.</p>
                    </div>

                    <div className="mb-5 text-center">
                        <Button onClick={() => router.push('/profile')} title="Go to my profile" />
                    </div>
                </div>
            </div>
        </div>
    )

}
export default LastVerifyPage