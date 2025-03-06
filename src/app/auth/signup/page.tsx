import { Page } from "@/components/Page";
import Link from "next/link";
import logo from "@public/icon_white_icons.jpg";
import Image from "next/image";

export default function Signup() {
    return (
        <Page back={true}>
            <div className="bg-white h-screen text-black px-3 flex flex-col justify-between pb-7 overflow-hidden">
                
                <div className="flex justify-center">
                    <Image src={logo} alt="" className="" height={200} width={300} />
                </div>


                <div className="">
                    <div className="mb-3">
                        <p>Lets get trading</p>
                        <p>Welcome Back</p>
                    </div>
                    <form>
                        <div className="relative mb-4">
                            <input type="text" id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter your email" />
                            <label htmlFor="floating_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-12 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Email</label>
                        </div>

                        <div className="relative mb-5">
                            <input type="password" id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter your password" />
                            <label htmlFor="floating_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-12 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Password</label>
                        </div>

                        <div className="mb-6">
                            <Link href="/">Forgot Password?</Link>
                        </div>

                        <button
                            className="h-[50px] w-full flex-row items-center justify-center rounded-full bg-[#134AFF]"
                            
                            >
                            <span className="text-center font-SFBOLD text-white">
                                Signin
                            </span>
                        </button>
                    </form>


                    
                </div>
                    <div className="text-center flex justify-center gap-1">
                        <span>Already have an account?</span>
                        <Link href="/">Sign Up</Link>
                    </div>
            </div>
        </Page>
    )
}