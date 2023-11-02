"use client"

import ButtonSolid from "@/components/Button/ButtonSolid";
import InputEmail from "@/components/Input/Email";
import InputPassword from "@/components/Input/Password";
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {


    const router = useRouter()
    const [form, setForm] = useState<any>({
        redirect: false
    })


    function changeForm(e: any) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
    })
    }

    function submitForm(e: any) {
        e && e.preventDefault()
        signIn("credentials", form).then((data: any) => {
            if (data.ok) {
                return router.replace("/")
            } else {

            }
        })
    }

    return (
        <div className={`min-h-screen w-full bg-[#FAFAFB] relative `}>
            <div className='w-auto h-auto relative space-y-[50vh]'>
                <div className='bg-white w-full absolute h-[50vh] skew-y-[3deg] rounded-b-[4rem] -top-[2.5rem]' />
            </div>
            <div className='z-8 absolute w-full h-full items-center flex flex-col  '>
                <div className='w-full h-full  flex flex-col items-center justify-center'>
                    <div className="space-y-10">
                        <div className='text-6xl font-bold w-full h-[20%] text-[#44444F]  flex justify-center items-center'>
                            Sign In
                        </div>
                        <div className="text-sm md:text-normal text-center text-[#92929D] px-2 md:px-0">
                            Just sign in if you have an account in here. Enjoy our Website
                        </div>
                    </div>
                    <div className='w-auto h-auto md:w-[560px] md:h-[314px] p-12 rounded-3xl bg-white'>
                        <div className='w-full h-full flex flex-col space-y-16 items-center'>
                            <div className='w-full h-full flex flex-col justify-between '>
                                <div className="flex flex-col space-y-4">
                                    <InputEmail change={changeForm} name="email" label={"Your Email / Username"} />
                                    <InputPassword change={changeForm} name="password" label={"Enter Password"} />
                                    <div className="w-full flex items-center justify-between px-2 pb-6">
                                        <div className="flex space-x-3">
                                            <input type="checkbox" name="selecting" className="w-4 h-4 accent-primary" />
                                            <div className="text-black text-sm">
                                                Remember Me
                                            </div>
                                        </div>
                                        <div className="text-primary-light text-sm">
                                            Forgot Password?
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full flex space-x-4">
                                    <ButtonSolid click={submitForm} className={"w-full bg-primary px-4 py-3"} title="Login" />
                                </div>
                            </div>
                            <div className="text-primary text-sm font-semibold">
                                Already have an Square account? <Link className="cursor-pointer hover:text-primary-dark" href={`/auth/register`}>Register</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}