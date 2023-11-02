import { getServerSession } from "next-auth"
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function authenticateLayout({ children }: { children: React.ReactNode }) {
    const session = await getServerSession(authOptions)
    if (!session) return redirect("/auth/signin")
    
    return (
        <>
            {children}
        </>
    )
}