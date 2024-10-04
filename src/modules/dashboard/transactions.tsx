"use client";

import React from "react";
import Datepicker from "#/components/ui/date-picker";
import Flow from "#/components/control-flow";
import { DateType, type DateValueType } from "react-tailwindcss-datepicker";
import { useGetTransactiontList } from "#/services/transaction.service";
import { Pagination } from "./transaction-pagination";
import { TableData, TableSkeleton } from "./transaction-table";
import dayjs from "dayjs";

export function Transactions() {
    const limit = 5
    const [datePicker, setDatePicker] = React.useState<DateValueType>({} as DateValueType)
    const [currentPage, setCurrentPage] = React.useState(1)

    const { data, isPending, isSuccess } = useGetTransactiontList({
        page: currentPage,
        limit,
        start_date: datePicker?.startDate ? dayjs(datePicker?.startDate).format("YYYY-MM-DD") : "",
        end_date: datePicker?.endDate ? dayjs(datePicker?.endDate).format("YYYY-MM-DD") : ""
    })

    function handleChangeDatePicker(date: DateValueType) {
        setDatePicker({ startDate: date?.startDate as DateType, endDate: date?.endDate as DateType })
    }

    function prevPage() {
        setCurrentPage((prev) => Math.max(1, prev + -1))
    }

    function nextPage() {
        if (data?.meta.to ?? 0 === data?.meta.total_row ?? 0) {
            return
        }
        setCurrentPage((prev) => {
            const acc = prev + 1
            return acc
        })
    }

    return (
        <div className="space-y-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
                <h2 className="font-fredoka -tracking-wide text-base md:text-lg font-semibold">Transactions history</h2>
                <div className="w-full max-w-[300px]" aria-label="date picker container">
                    <Datepicker
                        date={datePicker}
                        onChange={handleChangeDatePicker}
                        disabled={isPending}
                    />
                </div>
            </div>
            <Flow>
                <Flow.If condition={isPending}>
                    <TableSkeleton rows={5} />
                </Flow.If>
                <Flow.ElseIf condition={isSuccess}>
                    <TableData transactions={data?.data} />
                    <Pagination
                        meta={data?.meta}
                        onPrevious={prevPage}
                        onNext={nextPage}
                    />
                </Flow.ElseIf>
                <Flow.Else>
                    <p className="text-xs md:text-sm lg:text-base text-red-500">
                        Something when wrong!
                    </p>
                </Flow.Else>
            </Flow>

        </div>
    )
}
