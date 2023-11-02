"use client"

import BaseFooter from "@/components/Base/Footer";
import ButtonSolid from "@/components/Button/ButtonSolid";
import InputNumber from "@/components/Input/Number";
import InputText from "@/components/Input/Text";
import ModalReguler from "@/components/Modal/Reguler";
import AdminLayout from "@/components/layouts/AdminLayout";
import { useAppDispatch, useAppSelector } from "@/stores/hook";
import { addBook, deleteBook, getBook, setDetail, updateBook } from "@/stores/slices/bookSlice";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function AdminBooksPage() {

    const books = useAppSelector((state) => state.books)
    const detailBook: any = books.detail

    const dispatch = useAppDispatch();

    const [addModal, setAddModal] = useState(false)
    const [editModal, setEditModal] = useState(false)
    const [deleteModal, setDeleteModal] = useState(false)

    useEffect(() => {
        dispatch(getBook())
    }, []);

    const [form, setForm] = useState<any>(null)


    function detailEdit(item: any) {
        dispatch(setDetail(item))
        setEditModal(true)
    }

    function detailDelete(item: any) {
        dispatch(setDetail(item))
        setDeleteModal(true)
    }

    function changeForm(e: any) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    function submitBook() {
        dispatch(addBook(form)).then(() => {
            setForm(null)
            setAddModal(false)
        })
    }

    function handleUpdate() {
        dispatch(updateBook(form)).then(() => {
            setForm(null)
            setEditModal(false)
        })
    }

    function handleDelete() {
        dispatch(deleteBook()).then(() => {
            setForm(null)
            setDeleteModal(false)
        })
    }

  return (
        
        <AdminLayout title="Book" >
            <div className="px-6 pt-8 space-y-5">
                <div className="space-y-5">
                    <div className="text-white text-3xl font-semibold">
                        Books
                    </div>
                    <div className="text-base font-semibold">
                        <div className="text-gray-500">
                            Admin / <span className="text-[#0BB885]">Books</span>
                        </div>
                    </div>
                </div>
                <div className="w-full">
                    <ButtonSolid className="bg-primary-light px-4 text-base " title="Add Book" click={() => setAddModal(true)} />
                </div>
                <table className='w-full'>
                    <thead>
                        <tr className='w-full font-normal h-12 text-[#323232] space-x-20 bg-[#F9F9F9]'>
                            <th className="text-start px-4 rounded-l-xl">Judul</th>
                            <th className="text-start px-4">Penerbit</th>
                            <th className="text-start px-4">Penulis</th>
                            <th className="text-start px-4">Tahun Terbit</th>
                            <th className="text-start px-4">Jumlah</th>
                            <th className="text-center px-4">Description</th>
                            <th className="text-center px-4 rounded-r-xl" >Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.source.map((item: any, i) => (
                            <tr key={i} className='w-full text-white space-x-20 border-b border-[#979797]'>
                                <td className=' px-4 text-lg font-normal max-w-sm  '>
                                    {item.judul}
                                </td>
                                <td className=' text-lg font-normal '>
                                    {item.penulis}
                                </td>
                                <td className=' text-lg font-normal '>
                                    {item.penerbit}
                                </td>
                                <td className=' px-4 text-lg text-center font-normal max-w-[5rem]'>
                                    {item.tahun_terbit}
                                </td>
                                <td className='px-4 text-lg text-center font-normal max-w-[5rem]'>
                                    {item.jumlah_tersedia}
                                </td>
                                <td className='px-4 text-lg font-normal text-start line-clamp-3 '>
                                    {item.description}
                                </td>
                                <td className='p-2 text-lg font-normal'>
                                    <div className="flex justify-center space-x-2">
                                        <ButtonSolid title="Edit" className="bg-primary" click={() => detailEdit(item)} />
                                        <ButtonSolid title="Delete" className="bg-danger" click={() => detailDelete(item)} />
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <BaseFooter />
            <AnimatePresence>
                {addModal &&
                    <ModalReguler
                        title="Add Book"
                        close={() => setAddModal(false)}
                        submit={submitBook}
                    >
                        <div className="space-y-4">
                            <InputText change={changeForm} name="judul" label="Judul" />
                            <InputText change={changeForm} name="penerbit" label="Penerbit" />
                            <InputText change={changeForm} name="penulis" label="Penulis" />
                            <InputText change={changeForm} name="tahun_terbit" label="Tahun Terbit" />
                            <InputNumber change={changeForm} name="jumlah_tersedia" label="Jumlah Tersedia" />
                            <InputText change={changeForm} name="description" label="Description" />
                        </div>
                    </ModalReguler>
                }
            </AnimatePresence>

            <AnimatePresence>
                {editModal &&
                    <ModalReguler
                        title="Edit Book"
                        close={() => setEditModal(false)}
                        submit={handleUpdate}
                    >
                        <div className="space-y-4">
                            <InputText defaultValue={detailBook?.judul} change={changeForm} name="judul" label="Judul" />
                            <InputText defaultValue={detailBook?.penerbit} change={changeForm} name="penerbit" label="Penerbit" />
                            <InputText defaultValue={detailBook?.penulis} change={changeForm} name="penulis" label="Penulis" />
                            <InputText defaultValue={detailBook?.tahun_terbit} change={changeForm} name="tahun_terbit" label="Tahun Terbit" />
                            <InputNumber defaultValue={detailBook?.jumlah_tersedia} change={changeForm} name="jumlah_tersedia" label="Jumlah Tersedia" />
                            <InputText defaultValue={detailBook?.description} change={changeForm} name="description" label="Description" />
                        </div>
                    </ModalReguler>
                }
            </AnimatePresence>

            <AnimatePresence>
                {deleteModal &&
                    <ModalReguler
                        title="Delete Book"
                        close={() => setDeleteModal(false)}
                        submit={handleDelete}
                    >
                        <div className="space-y-4 text-lg text-danger">
                            Apakah Anda yakin ingin menghapus data <span className=" font-semibold">"{detailBook?.judul}"</span> ?
                        </div>
                    </ModalReguler>
                }
            </AnimatePresence>
        </AdminLayout >
    )
}