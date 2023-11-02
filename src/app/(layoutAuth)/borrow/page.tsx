"use client"

import BaseFooter from "@/components/Base/Footer";
import ButtonSolid from "@/components/Button/ButtonSolid";
import InputDate from "@/components/Input/InputDate";
import InputSelect from "@/components/Input/Select";
import InputText from "@/components/Input/Text";
import ModalReguler from "@/components/Modal/Reguler";
import UserLayout from "@/components/layouts/UserLayout";
import { useAppDispatch, useAppSelector } from "@/stores/hook";
import { getBook } from "@/stores/slices/bookSlice";
import { addBorrowing, getBorrowingsUser, updateBorriwing } from "@/stores/slices/borrowingSlice";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function UserBorrowPage() {

    const [form, setForm] = useState<any>(null)
    const borrowing = useAppSelector((state) => state.borrowings)

    const dispatch = useAppDispatch();

    const [addModal, setAddModal] = useState(false)
    const [editModal, setEditModal] = useState(false)

    const books = useAppSelector((state) => state.books)
    const detailBook: any = books.detail

    useEffect(() => {
        dispatch(getBook())
    }, []);

    useEffect(() => {
        dispatch(getBorrowingsUser())
    }, []);

    function submitBorrowing() {
        dispatch(addBorrowing(form)).then(() => {
            setForm(null)
            setAddModal(false)
        })
    }

    function handleUpdate() {
        dispatch(updateBorriwing(form)).then(() => {
            setForm(null)
            setEditModal(false)
        })
    }

    function changeForm(e: any) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }



    return (
      
        <UserLayout title="Borrow" >
            <div className="px-6 pt-8 space-y-5">
                <div className="space-y-5">
                    <div className="text-white text-3xl font-semibold">
                        Borrow
                    </div>
                    <div className="text-base font-semibold">
                        <div className="text-gray-500">
                            / <span className="text-[#0BB885]">Borrow</span>
                        </div>
                    </div>
                </div>
                <div className="w-full">
                    <ButtonSolid className="bg-primary-light px-4 text-base " title="Pinjam Buku" click={() => setAddModal(true)} />
                </div>
                <table className='w-full'>
                    <thead >
                        <tr className='w-full font-normal h-12 text-[#323232] space-x-20 bg-[#F9F9F9]'>
                            <th className="text-start px-4 rounded-l-2xl">Judul</th>
                            <th className="text-start">Borrow</th>
                            <th className="text-start">Return</th>
                            <th className="text-start">Status</th>
                            {/* <th className="text-start px-4 rounded-r-2xl">Action</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {borrowing.source.map((item: any, i) => (
                            <tr key={i} className='w-full text-white space-x-20 border-b border-[#979797]'>
                                <td className=' px-4 text-lg font-normal max-w-sm  '>
                                    {item.book.judul}
                                </td>
                                <td className=' text-lg font-normal '>
                                    {item.borrowDate}
                                </td>
                                <td className=' text-lg font-normal '>
                                    {item.returnDate}
                                </td>
                                <td className='p-4 text-lg text-center font-normal max-w-[5rem] '>
                                    <div className={`${item.dayDate ? "bg-success " : " bg-primary-light "} + " w-full text-base p-1 rounded-lg "`}>
                                        {item.dayDate ? "Return" : "Pinjam "}
                                    </div>
                                </td>
                                {/* <td className='p-4 text-lg text-center font-normal max-w-[2rem]'>
                                    <div className="w-full ">
                                        <ButtonSolid className="bg-primary-light px-4 text-base " title="edit" click={() => setEditModal(true)} />
                                    </div>
                                </td> */}

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <BaseFooter />
            <AnimatePresence>
                {addModal &&
                    <ModalReguler
                        title="Pinjam Buku"
                        close={() => setAddModal(false)}
                        submit={submitBorrowing}
                    >
                        <div className="space-y-4">
                            <InputSelect label="Judul Buku" name="book" change={changeForm} >
                                {books.source.map((item: any, i) => (
                                    <>
                                        <option key={i} value={item.id} className="text-black not-italic bg-white">{item.judul}</option>
                                    </>
                                ))}
                            </InputSelect>
                        </div>
              
                        <div className="space-y-4">
                            <InputDate label="Return Date" name="returnDate" change={changeForm} />
                        </div>
                        
                    </ModalReguler>
                }
            </AnimatePresence>

            <AnimatePresence>
                {editModal &&
                    <ModalReguler
                        title="Edit Pinjam Buku"
                        close={() => setEditModal(false)}
                        submit={handleUpdate}
                    >
                        <div className="space-y-4">
                            <InputSelect label="Judul Buku" name="book" change={changeForm} >
                                {books.source.map((item: any, i) => (
                                    <>
                                        <option key={i} value={item.id} className="text-black not-italic bg-white">{item.judul}</option>
                                    </>
                                ))}
                            </InputSelect>
                        </div>
                        <div className="space-y-4">
                            <InputDate label="Return Date" name="returnDate" change={changeForm} />
                        </div>
                    </ModalReguler>
                }
            </AnimatePresence>
        </UserLayout >
    )
}