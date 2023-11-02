
"use client"

import { useState } from "react";

export default function InputArea() {
    return (
        <>
            <div className="relative mb-3 space-y-2">
                <label className="text-[#44444F] font-normal text-sm">Tell us about yourself</label>
                <textarea
                    className=" appearance-none w-full h-20 border border-gray-400 rounded-xl outline-none resize-none text-gray-500 p-2"
                    id="inputArea"
                    placeholder="Hello my name..."
                />
            </div>
        </>
    )
}
