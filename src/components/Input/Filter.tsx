"use client"

import { useState, useEffect } from "react";

export default function InputFilter({ label, children }: { label: any, children: React.ReactNode }) {

    const [placeholderSelect, setPlaceholderSelect] = useState<boolean>()

    useEffect(() => {
        setPlaceholderSelect(false)
    }, [])

    const handleInputChange = (e: any) => {
        setPlaceholderSelect(e.target.value ? true : false);
    };

    return (
        <>
            <select
                className={(!placeholderSelect && " text-black ") + " text-black text-xl font-semibold border-b-2 px-6 py-2 bg-white border-primary-dark focus:outline-none"}
                id="inputSelect"
                placeholder={label}
                onChange={handleInputChange}
            >
                <option disabled={placeholderSelect} className="text-gray-400 bg-white italic">{label}</option>
                {children}
            </select>
        </>
    )
}