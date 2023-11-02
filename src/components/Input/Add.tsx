"use client"

export default function InputAdd({ placeholder, className }: { placeholder: string, className: any }) {


    return (
        <>
            <input className={`${className} bg-transparent text-black text-xl font-semibold border-b-2 px-4 py-2 border-primary-dark focus:outline-none placeholder:font-normal`}
                placeholder={placeholder}
            />
        </>
    )
}