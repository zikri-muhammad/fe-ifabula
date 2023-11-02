import Head from "next/head";
import BaseNavbar from "../Base/Navbar";
import { useAppSelector } from "@/stores/hook";
import { ReactNode } from "react";
import Sidebar from "../Base/Sidebar";
import { useState } from "react"
import LinkItem from "../Link/Item";


export default function UserLayout({ children, title }: { children: ReactNode, title: string}) {

    const [menu, setMenu] = useState([
        {
            children: [
                {
                    name: "Home",
                    icon: "Icon_Home.svg",
                    link: "/",
                    notif: false,
                    active: false,
                    leading: false,
                    children: []
                },
                {
                    name: "Borrow",
                    icon: "Icon_Home.svg",
                    link: "/borrow",
                    notif: false,
                    active: false,
                    leading: false,
                    children: []
                },
            ]
        },
    ])

    function toggleMenu(indexParent: any, indexChild: any) {
        const newArray = [...menu]
        newArray[indexParent].children[indexChild].active = !newArray[indexParent].children[indexChild].active
        setMenu(newArray)
    }
    const showHide = useAppSelector((state) => state.sidebar.show)

    return (
        <>
            <Head>
                <title>{`${title && title + ' - '} user`}</title>
            </Head>
            <div className="w-full flex h-screen">
                <div className={(showHide ? "w-full md:w-auto print-none" : " w-auto print-none")}>
                    <Sidebar>
                        <div className="flex flex-col space-y-2 mt-10 py-4 px-4">
                            {
                                menu && menu.map((item, i) => (
                                    <div className="flex flex-col space-y-2" key={i}>
                                        <div className="flex flex-col space-y-2">
                                            {
                                                item.children.map((link, index) => (
                                                    <LinkItem key={index} active={link.active} subClick={() => toggleMenu(i, index)} notif={link.notif} subItem={link.children} icon={link.icon} title={link.name} leading={link.leading} href={link.link} />
                                                ))
                                            }
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </Sidebar>
                </div>
                <div className={(showHide ? "hidden md:!relative md:block " : "relative ") + "flex-grow h-screen overflow-y-auto"}>
                    <BaseNavbar />
                    <div className=" w-full">
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}