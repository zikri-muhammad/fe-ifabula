"use client"

import BaseFooter from "@/components/Base/Footer";
import AdminLayout from "@/components/layouts/AdminLayout";
import { useAppDispatch, useAppSelector } from "@/stores/hook";
import { getBorrowings } from "@/stores/slices/borrowingSlice";
import { useEffect } from "react";

export default function AdminBorrowPage() {

    const borrowing = useAppSelector((state) => state.borrowings)

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getBorrowings())
    }, []);

    return (
        <AdminLayout title="Borrow" >
            <div className="px-6 pt-8 space-y-5">
                <div className="space-y-5">
                    <div className="text-white text-3xl font-semibold">
                        Borrow
                    </div>
                    <div className="text-base font-semibold">
                        <div className="text-gray-500">
                            Admin / <span className="text-[#0BB885]">Borrow</span>
                        </div>
                    </div>
                </div>
                <table className='w-full'>
                    <thead >
                        <tr className='w-full font-normal h-12 text-[#323232] space-x-20 bg-[#F9F9F9]'>
                            <th className="text-start px-4 rounded-l-xl">Nama Peminjam</th>
                            <th className="text-start px-4">Email</th>
                            <th className="text-start px-4">Judul</th>
                            <th className="text-start px-4">Borrow Date</th>
                            <th className="text-start px-4">Return Date</th>
                            <th className="text-start px-4 rounded-r-xl">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {borrowing.source.map((item: any, i) => (
                          
                            <tr key={i} className='w-full text-white space-x-20 border-b border-[#979797]'>
                                <td className=' px-4 text-lg font-normal max-w-sm  '>
                                    {item.user?.name || ""}
                                </td>
                                <td className=' text-lg font-normal '>
                                    {item.user?.email || ""}
                                </td>
                                <td className=' text-lg font-normal '>
                                    {item.book?.judul || ""}
                                </td>
                                <td className=' px-4 text-lg text-center font-normal max-w-[2rem]'>
                                    {item.borrowDate}
                                </td>
                                <td className='px-4 text-lg text-center font-normal max-w-[2rem]'>
                                    {item.returnDate}
                                </td>
                                <td className='px-4 text-lg text-center font-normal max-w-[5rem] '>
                                    <div className={`${item.dayDate ? "bg-success " : " bg-primary-light "} + " w-full text-base p-1 rounded-lg "`}>
                                        {item.dayDate ? "Return" : "Pinjam "}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <BaseFooter />
        </AdminLayout >
    )
}