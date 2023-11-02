
"use client"

import Image from "next/image";
import { useState } from "react";

export default function InputPassword({ label, name, change }: { label: any, name?: any, change?:any}) {
    const [isInputFilled, setIsInputFilled] = useState(false);
    const [show, setShow] = useState(false)

    const handleInputChange = (e: any) => {
        const inputValue = e.target.value;
        change && change(e)
        setIsInputFilled(!!inputValue);
    };

    return (
        <>
            <div className="relative mb-3">
                <div className="relative grid">
                    <input
                        name={name}
                        type={show ? "text" : "password"}
                        className="peer block min-h-[auto] w-full rounded-xl border border-gray-400 bg-transparent px-3 py-3 leading-[1.6] outline-none transition-all duration-200 focus:border-primary-light focus:placeholder:opacity-100 
                            peer-focus:text-primary motion-reduce:transition-none text-gray-500 placeholder:text-red-500 [&:not([placeholder-active])]:placeholder:opacity-0"
                        id="inputPassword"
                        onChange={handleInputChange}
                    />
                    <div onClick={() => setShow(!show)} className="w-8 h-full absolute right-2 cursor-pointer hover:opacity-70 flex justify-center items-center">
                        <Image src={require(`@/assetts/icons/${show ? "eye_show_icon.svg" : "eye_hide_icon.svg"}`)} className="w-5 h-5" alt="eye" />
                    </div>
                </div>
                <label
                    htmlFor="inputPassword"
                    className={`pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate  leading-[1.6]  transition-all duration-200 ease-out 
                    ${isInputFilled ? 'text-primary-light -translate-y-[0.9rem] bg-white scale-[0.8] px-2 pt-[0.37rem] ' : 'text-[#B5B5BE] pt-3 '} peer-focus:pt-[0.37rem] peer-focus:-translate-y-[0.9rem] peer-focus:bg-white peer-focus:px-2 peer-focus:scale-[0.8] peer-focus:text-primary-light motion-reduce:transition-none `}
                >
                    {label}
                </label>

            </div>
        </>
    )
}
