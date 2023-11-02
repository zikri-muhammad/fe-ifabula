
"use client"

import { useState, useEffect } from "react";

export default function InputSelect({ label, children, change, name }: { label: any, children: React.ReactNode, change?: any, name?: any }) {
    const [isInputFilled, setIsInputFilled] = useState(false);
    const [placeholderSelect, setPlaceholderSelect] = useState<boolean>()

    useEffect(() => {
        setPlaceholderSelect(false)
    }, [])


    const handleInputChange = (e: any) => {
        const inputValue = e.target.value;
        change && change(e)
        setPlaceholderSelect(e.target.value ? true : false),
            setIsInputFilled(!!inputValue);
    };

    return (
        <>
            <div className="relative mb-3">
                <select
                    name={name}
                    className={(!placeholderSelect && " text-gray-400 italic ") + "peer block min-h-[auto] w-full rounded-xl border border-gray-400 bg-transparent px-3 py-3 leading-[1.6] outline-none transition-all duration-200 focus:border-primary-light focus:placeholder:opacity-100 peer-focus:text-primary motion-reduce:transition-none text-gray-500 placeholder:text-red-500 [&:not([placeholder-active])]:placeholder:opacity-0"}
                    id="inputSelect"
                    placeholder={label}
                    onChange={handleInputChange}
                >
                    <option disabled={placeholderSelect} className="text-gray-400 bg-white italic">{label}</option>
                    {children}
                </select>
                <label
                    htmlFor="inputSelect"
                    className={`pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate  leading-[1.6]  transition-all duration-200 ease-out 
                    ${isInputFilled ? ' -translate-y-[0.9rem] bg-white scale-[0.8] text-blue-400 px-2 pt-[0.37rem] ' : 'text-transparent pt-3 '} peer-focus:pt-[0.37rem] peer-focus:-translate-y-[0.9rem] peer-focus:bg-white peer-focus:px-2 peer-focus:scale-[0.8] peer-focus:text-primary-light motion-reduce:transition-none `}
                >
                    {label}
                </label>
            </div>
        </>
    )
}
