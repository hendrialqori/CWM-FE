import type { Meta } from "#/@type"
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

type Props = {
    meta: Meta | undefined
    onPrevious: () => void;
    onNext: () => void
}

function ButtonPagination({ icon, ...rest }:
    { icon: React.ReactNode } & React.ComponentPropsWithoutRef<"button">) {
    return (
        <button
            className="bg-[#F8F8F8] border border-[#DBDBDB] rounded-md p-[3px] hover:outline-double hover:outline-black"
            {...rest}
        >
            {icon}
        </button>
    )
}

export function Pagination({ meta, onPrevious, onNext }: Props) {
    if (!meta?.total_row) return null

    return (
        <div className="flex items-center justify-center md:justify-end gap-4">
            <ButtonPagination
                icon={<GrFormPrevious className="text-2xl" />}
                onClick={onPrevious}
            />
            <p className="text-xs md:text-sm font-medium">
                Menampilkan {meta?.from ?? "-"} - {meta?.to ?? "-"} dari {meta?.total_row}
            </p>
            <ButtonPagination
                icon={<GrFormNext className="text-2xl" />}
                onClick={onNext}
            />
        </div>
    )
}