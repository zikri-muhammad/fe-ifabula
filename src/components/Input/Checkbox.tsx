"use client"

export default function InputCheckbox() {


    return (
        <>
            <div className="flex gap-2 relative">
                <input type="checkbox" name="selecting" className={` "relative peer  appearance-none w-5 h-5 cursor-pointer  rounded-sm bg-[#E6E6E6] mt-1 checked:bg-success checked:opacity-[0.15] checked:border-0"`} />
                <svg
                    className="absolute w-5 h-5 p-0.5 mt-1 hidden peer-checked:block pointer pointer-events-none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#6DD230"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="4"
                >
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
            </div>
        </>
    )
}