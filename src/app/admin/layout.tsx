import { getServerSession } from "next-auth"
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { Providers } from "@/stores/provider";

export default async function authenticateLayout({ children }: { children: React.ReactNode }) {
    const session: any = await getServerSession(authOptions)
    if (!session) return redirect("/auth/signin")

    if (session.user.role === "user") return redirect("/")

    return (
        <>
            <Providers>
                {children}
            </Providers>
        </>
    )
}