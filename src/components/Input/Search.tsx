"use client"

import Image from "next/image"

export default function InputSearch({ placeholder, className }: { placeholder: string, className: any }) {


    return (
        <>
            <div className="flex justify-start items-center relative ">
                <Image alt="search" className="w-6 h-6 absolute" src={require(`@/assetts/icons/search_icon.svg`)} />
                <input className={`${className} bg-transparent text-black text-xl font-semibold border-b-2 px-10 py-2 border-primary-dark focus:outline-none placeholder:font-normal`}
                    placeholder={placeholder}
                />
            </div>
        </>
    )
}