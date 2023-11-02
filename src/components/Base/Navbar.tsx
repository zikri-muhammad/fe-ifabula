"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { signOut } from "next-auth/react";
import ButtonSolid from "../Button/ButtonSolid"
import { getSession } from "next-auth/react";
import { useAppDispatch, useAppSelector } from "@/stores/hook";
import { setShow } from "@/stores/slices/sidebarSlice";

export default function BaseNavbar() {
    const [toggle, setToggle] = useState(false)
    const [user, setUser] = useState<any>(null)
    const notif = true

    const dispatch = useAppDispatch()
    const sidebar = useAppSelector((state) => state.sidebar)

    function toggleSidebar() {
        dispatch(setShow(!sidebar.show))
    }

    async function getUser() {
        const session = await getSession()
        const user = session?.user as any
        setUser(user)
    }

    useEffect(() => {
        getUser()
    }, []);

    function logout() {
        signOut()
    }
    return (
        <>

            <nav className="bg-[#151A2E] shadow-lg w-full py-3 px-2 md:px-20 flex items-center top-0 left-0 border-b border-gray-600 ">
                <div className="w-full flex justify-between items-center space-x-4">
                    <button className="px-2" onClick={toggleSidebar}>
                        <Image src={require("@/assetts/icons/Logo.svg")} className="md:hidden 2xl:w-auto" alt="Logo" />
                    </button>
                    <div className="w-auto flex items-center space-x-4">
                        <div className="w-auto h-auto relative flex items-end justify-end">
                            <Image onClick={() => setToggle(!toggle)} src={require(`@/assetts/avatar.svg`)} alt="avatar" className="w-10 h-10 cursor-pointer" />
                            {
                                notif && (
                                    <div className="bg-success w-2 h-2 items-end absolute rounded-full" />
                                )
                            }
                        </div>
                        <div className="text-white text-base font-semibold ">
                            Hello, {user?.name}
                        </div>
                    </div>
                </div>
            </nav>
            <div className="">
                {toggle && (
                    <div className="w-full fixed z-10 mt-2 justify-end">
                        <div className="relative">
                            <div onClick={() => setToggle(false)} className="w-full h-full absolute " />
                            <div className="absolute right-2 md:right-80 bg-white shadow-lg p-4 rounded-lg w-64 border">
                                <div className="w-full flex flex-col select-none">
                                    <div onClick={logout} className="flex items-center space-x-4 hover:bg-gray-100 rounded-lg p-4 cursor-pointer">
                                        <div className="w-5 h-5">
                                            <Image src={require("@/assetts/icons/logout-red.svg")} alt="logout-red" className="w-full h-full" />
                                        </div>
                                        <div className="text-danger font-semibold">
                                            Logout
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
                }
            </div>
        </>
    )
}