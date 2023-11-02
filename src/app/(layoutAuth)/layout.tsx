import { getServerSession } from "next-auth"
import { redirect } from "next/navigation";
import { Providers } from "@/stores/provider";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { ToastContainer } from "react-toastify";

export default async function authenticateLayout({ children }: { children: React.ReactNode }) {
    const session: any = await getServerSession(authOptions)
    if (!session) return redirect("/auth/signin")

    if (session.user.role === "admin") return redirect("/admin")

    return (
        <>
            <Providers> 
              {children}
            </Providers>
        </>
    )
}