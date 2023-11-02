"use client"

import Image from "next/image";
import { motion } from "framer-motion";
import ButtonSolid from "../Button/ButtonSolid";
import { ReactNode, useEffect } from "react";

export default function ModalReguler({ children, title, close, className, submit } :{ children: ReactNode, title?:any, close?:any, className?:any, submit?:any }) {

    useEffect(() => {
        const handleEsc = (event: any) => {
            if (event.keyCode === 27) {
                close && close()
            }
        };
        window.addEventListener('keydown', handleEsc);

        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, []);

    return (
        <div className="fixed z-20 m-auto inset-0 overflow-hidden h-full w-full flex justify-center items-center">
            <div className="absolute -z-10 w-full h-full backdrop-blur-lg" onClick={close} />
            <motion.div
                key="modal"
                initial={{
                    opacity: 0.2,
                    scale: 0
                }}
                transition={{
                    duration: 0.1
                }}
                animate={{
                    opacity: 1,
                    scale: 1
                }}
                exit={{
                    opacity: 0,
                    scale: 0
                }}
                className={`shadow-xl flex flex-col rounded-xl mx-4 md:mx-0 bg-white w-[90vh] max-w-[90vh] 2xl:w-[100vh] h-auto max-h-[95vh] overflow-hidden ${className}`}>
                <div className="flex items-center px-5 justify-between bg-gradient-to-r from-primary to-primary-dark w-full py-4">
                    <div className="text-white pl-2 text-lg font-semibold">
                        {title}
                    </div>
                    <div onClick={close} className="transition-all h-7 w-7 text-white p-2 hover:rounded-full hover:bg-transparent/20 cursor-pointer">
                        <Image alt="times" src={require("@/assetts/icons/times.svg")} className="w-full h-full" />
                    </div>
                </div>
                <form onSubmit={(e) => (e.preventDefault(), close(), submit && submit())}>
                    <div className="w-full max-h-[70vh] px-6 pt-6 pb-2 space-y-4 overflow-y-auto scrollbar-thin scrollbar-thumb-info scrollbar-track-secondary">
                        {children}
                    </div>
                </form>
                <div className="w-full flex justify-center sm:justify-end p-2.5 space-x-2">
                    <div className="w-full justify-center flex px-4 sm:justify-end space-x-2 sm:space-x-4 pb-2">
                        <ButtonSolid className="text-sm bg-danger px-4 text-white " title="Close" click={close} />
                        <ButtonSolid className="text-sm bg-primary px-4 text-white " title="Submit" click={() => (submit && submit())} />
                    </div>
                </div>
            </motion.div>
        </div>
    )
}