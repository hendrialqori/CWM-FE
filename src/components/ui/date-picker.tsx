import {
    default as D,
    type DateValueType
} from "react-tailwindcss-datepicker";
import { cn, merge } from "#/lib/utils";

type Props = {
    date: DateValueType;
    onChange: (date: DateValueType) => void
    className?: string;
}

export default function Datepicker({ date, onChange, className }: Props) {
    return (
        <D
            useRange={false}
            asSingle={false}
            value={date}
            onChange={onChange}
            primaryColor="blue"
            separator="-"
            displayFormat="DD/MM/YYYY"
            classNames={{
                container: () => "",
                input: () => cn(merge(
                    "h-10 px-3 py-3 md:py-2 w-full bg-[#F4F4F4] text-sm font-medium rounded-lg",
                    "border border-[#EDEDF0] focus:border-[#EDEDF0] focus:bg-white focus:ring-1 focus:ring-offset-1 focus:ring-black",
                    className)
                ),
                toggleButton: ({ className }: any) => cn("[&>svg]:stroke-black", className)
            }}
            placeholder="Select your date range"
        />
    );
}