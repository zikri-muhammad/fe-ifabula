"use client"

import AdminLayout from "@/components/layouts/AdminLayout";
import { useAppDispatch, useAppSelector } from "@/stores/hook";
import { getProfiles } from "@/stores/slices/profileSlice";
import { useEffect } from "react";

export default function AdminUserManagement() {

    const profiles = useAppSelector((state) => state.profile)

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getProfiles())
    }, []);
    return (
        <>
            <AdminLayout title="userManagement">
                <div className="px-6 pt-8 space-y-5">
                    <div className="space-y-5">
                        <div className="text-white text-3xl font-semibold">
                            User Management
                        </div>
                        <div className="text-base font-semibold">
                            <div className="text-gray-500">
                                Admin / <span className="text-[#0BB885]">User Management</span>
                            </div>
                        </div>
                    </div>
                    <table className='w-full'>
                        <thead >
                            <tr className='w-full font-normal h-12 text-[#323232] space-x-20 bg-[#F9F9F9]'>
                                <th className="text-start px-4 rounded-l-xl">Nama</th>
                                <th className="text-start px-4">Email</th>
                                <th className="text-start px-4 rounded-r-xl">Role</th>
                            </tr>
                        </thead>
                        <tbody>
                            {profiles.source.map((item: any, i) => (
                                <tr key={i} className='w-full text-white space-x-20 border-b border-[#979797]'>
                                    <td className=' px-4 text-lg font-normal max-w-sm  '>
                                        {item.name}
                                    </td>
                                    <td className=' px-4 text-lg font-normal '>
                                        {item.email}
                                    </td>
                                    <td className='px-4 text-lg font-normal '>
                                        {item.role}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </AdminLayout>

        </>
    )
}