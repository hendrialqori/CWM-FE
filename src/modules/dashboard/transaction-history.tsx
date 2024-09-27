"use client";

import React from "react";
import Datepicker from "#/components/ui/date-picker";
import {
    Table, TableBody, TableCell,
    TableHead, TableHeader, TableRow
} from "#/components/ui/table";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
import { type DateValueType } from "react-tailwindcss-datepicker";


function badgeColor(value: string) {
    switch (value) {
        case "pending":
            return "bg-yellow-300"
        case "success":
            return "bg-green-400 text-white"
        case "failed":
            return "bg-red-600 text-white"
        default:
            throw new Error("No one value matching!")
    }
}

function TransactionHistory() {

    const [datePicker, setDatePicker] = React.useState<DateValueType>({} as DateValueType)

    function handleChangeDatePicker(date: DateValueType) {
        setDatePicker({ startDate: date?.startDate!, endDate: date?.startDate! })
    }

    return (
        <div className="space-y-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
                <h2 className="-tracking-wider text-base md:text-lg font-semibold">Transactions history</h2>
                <div className="w-full max-w-[300px]" aria-label="date picker container">
                    <Datepicker
                        date={datePicker}
                        onChange={handleChangeDatePicker}
                    />
                </div>
            </div>
            <div className="relative w-full overflow-auto">
                <Table className="min-w-max w-full">
                    <TableHeader className="bg-[#F2F4F7]">
                        <TableRow className="text-sm xl:text-base font-medium">
                            <TableHead className="w-1/6">Date</TableHead>
                            <TableHead className="w-1/6">Email</TableHead>
                            <TableHead className="w-1/6">Phone</TableHead>
                            <TableHead className="w-1/6">Status</TableHead>
                            <TableHead className="w-2/6">Product</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {Array.from({ length: 1 }).map((_, i) => (
                            <TableRow key={i} className="text-xs md:text-sm xl:text-base font-medium">
                                <TableCell className="py-4 px-2 text-nowrap">Senin, 24 oktober 2024</TableCell>
                                <TableCell className="py-4 px-2 text-nowrap">chikajesica12@gmail.com</TableCell>
                                <TableCell className="py-4 px-2 text-nowrap">628 967771221</TableCell>
                                <TableCell className="py-4 px-2">
                                    <div className={`${badgeColor("failed")} w-max px-4 py-[2px] rounded-full center-flex`} aria-label="badge">
                                        <p className="text-xs md:text-sm xl:text-base">Failed</p>
                                    </div>
                                </TableCell>
                                <TableCell className="py-4 px-2">Survive in Chinese part 1 Bab 1-5</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            <div className="flex items-center justify-center md:justify-end gap-4">
                <button className="bg-[#F8F8F8] border border-[#DBDBDB] rounded-md p-[2px] hover:outline-double hover:outline-black">
                    <GrFormPrevious className="text-2xl" />
                </button>
                <p className="text-xs md:text-sm font-medium">Menampilkan 1 - 5 dari 100</p>
                <button className="bg-[#F8F8F8] border border-[#DBDBDB] rounded-md p-[2px] hover:outline-double hover:outline-black">
                    <GrFormNext className="text-2xl" />
                </button>
            </div>
        </div>
    )
}

export { TransactionHistory }