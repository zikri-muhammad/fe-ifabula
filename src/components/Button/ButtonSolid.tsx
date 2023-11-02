"use client"

export default function ButtonSolid({ title, className, click }: { title : string, className: any, click? : any }) {


    return (
        <>
            <button onClick={click} className={`${className} text-white text-xl rounded-lg h-auto py-1 px-2 whitespace-nowrap`}>
                {title} 
            </button>
        </>
    )
}