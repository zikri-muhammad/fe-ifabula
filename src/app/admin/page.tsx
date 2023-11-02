"use client"

import BaseFooter from "@/components/Base/Footer";
import ButtonSolid from "@/components/Button/ButtonSolid";

import InputSelect from "@/components/Input/Select";
import InputText from "@/components/Input/Text";
import AdminLayout from "@/components/layouts/AdminLayout";
import UserLayout from "@/components/layouts/UserLayout";
import { useAppDispatch, useAppSelector } from "@/stores/hook";
import { addBook, getBook } from "@/stores/slices/bookSlice";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function DashboardAdmin() {


    const books = useAppSelector((state) => state.books)
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getBook())
    }, []);

    const [form, setForm] = useState<any>(null)


    function changeForm(e: any) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    function submitBook() {
        dispatch(addBook(form))
        setForm(null)
    }

    const Info = [
        {
            icon_local: "Icon_Total_Cost_White.svg",
            icon_hover: "Icon_Total_Cost.svg",
            desc: "$35,768",
            name: "Total Buku",
        },
        {
            icon_local: "Icon_Champion.svg",
            icon_hover: "Icon_Champion_White.svg",
            desc: "$66,053",
            name: "Total Sales",
        },
        {
            icon_local: "Icon_Calender.svg",
            icon_hover: "Icon_Calender_White.svg",
            desc: "$35,000,00",
            name: "This Week",
        },
        {
            icon_local: "Icon_PieChart.svg",
            icon_hover: "Icon_PieChart_White.svg",
            desc: "$63,00K",
            name: "Revenue",
        },
        {
            icon_local: "Icon_Wallet.svg",
            icon_hover: "Icon_Wallet_White.svg",
            desc: "Last payment",
            name: "$1250",
        }
    ]

    return (
        <>

            <AdminLayout title="Home" >
                <div className="px-6 pt-8 space-y-5">
                    <div className="space-y-2">
                        <div className="text-white text-3xl font-semibold">
                            Dashboard
                        </div>
                        <div className="text-base font-semibold">
                            <div className="text-gray-500">
                                Home / <span className="text-[#0BB885]">Dashboard</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex  transition-all overflow-x-auto scrollbar-none overflow-hidden justify-start md:justify-center space-x-5 ">
                        {
                            Info.map((item, i) => (
                                <button onClick={() => console.log('click')} key={i} className="min-w-[10rem] w-full flex items-center justify-center space-x-4 rounded-lg py-7 bg-[#1C243F] cursor-pointer hover:bg-[#0BB885] focus:bg-[#0BB885] group ">
                                    <div>
                                        {
                                            <Image src={require(`@/assetts/icons/${item.icon_local}`)} alt="info" className={(item.icon_local == "Icon_Total_Cost_White.svg" ? "w-14 h-14 " : "w-9 h-9 ") + "block group-hover:hidden group-focus:hidden"} />
                                        }
                                        {
                                            <Image src={require(`@/assetts/icons/${item.icon_hover}`)} alt="info" className={(item.icon_hover == "Icon_Total_Cost.svg" ? "w-14 h-14 " : "w-9 h-9 ") + "hidden group-hover:block group-focus:block"} />
                                        }
                                    </div>
                                    <div className="flex flex-col justify-start ">
                                        <div className="flex justify-start text-lg  text-white ">
                                            {item.name}
                                        </div>
                                        <div className="flex justify-start text-base whitespace-nowrap text-gray-500 group-hover:text-white group-focus:text-white">
                                            {item.desc}
                                        </div>
                                    </div>
                                </button>
                            ))
                        }
                    </div>
                </div>
                <BaseFooter />
            </AdminLayout >
        </>
    )
}