"use client"

import { useState, useEffect } from "react";

export default function InputEmail({ label, name, change }: { label: any, name: any, change?: any }) {
    const [valueInput, setValueInput] = useState<any>(null)
    const [onError, setOnError] = useState<any>(null)
    const [isInputFilled, setIsInputFilled] = useState(false);

    const handleInputChange = (e: any) => {
        const inputValue = e.target.value;
        change(e)
        setValueInput(e.target.value);
        setIsInputFilled(!!inputValue);
    };

    const validateEmail = (email: any) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    useEffect(() => {
        if (valueInput) {
            if (validateEmail(valueInput)) {
                setOnError(false)
            } else {
                setOnError(true)
            }
        }
    }, [valueInput]);

    return (
        <>
            <div className="relative mb-3">
                <input
                    name={name}

                    type="email"
                    className={`${onError ? " border-red-500 " : " border-gray-400 "}  peer block min-h-[auto] w-full rounded-xl border bg-transparent px-3 py-3 leading-[1.6] outline-none transition-all duration-200 focus:border-primary-light focus:placeholder:opacity-100 
                            peer-focus:text-primary motion-reduce:transition-none text-gray-500  [&:not([placeholder-active])]:placeholder:opacity-0`}
                    id="inputEmail"
                    onChange={handleInputChange}
                />
                <label
                    htmlFor="inputEmail"
                    className={`pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate  leading-[1.6]  transition-all duration-200 ease-out 
                    ${isInputFilled ? `${onError ? " text-red-400 " : " text-primary-light "} -translate-y-[0.9rem]  bg-white scale-[0.8]  px-2 pt-[0.37rem] ` : 'text-[#B5B5BE] pt-3 '} peer-focus:pt-[0.37rem] peer-focus:-translate-y-[0.9rem] peer-focus:bg-white peer-focus:px-2 peer-focus:scale-[0.8] peer-focus:text-primary-light motion-reduce:transition-none `}
                >
                    {label}
                </label>
            </div>
        </>
    )
}
