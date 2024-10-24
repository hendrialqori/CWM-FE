import Image from "next/image"
import { LuPencil } from "react-icons/lu";
import { PiFileZipDuotone } from "react-icons/pi";
import { STATIC } from "#/constants"

type ImagePreviewProps = {
    image: string, onChangeImage: () => void
}

export function ImagePreview({ image, onChangeImage }: ImagePreviewProps) {
    return (
        <div className="flex items-center gap-3">
            <div className="relative size-16 shadow-sm ">
                <Image
                    src={`${STATIC}/${image}`}
                    width={40}
                    height={40}
                    className="size-full rounded-lg object-cover border border-gray-100"
                    alt="preview-avatar"
                />
                <button
                    type="button"
                    className="absolute -bottom-2 -right-2 bg-gray-100 border border-gray-200 rounded-full p-1"
                    onClick={onChangeImage}
                >
                    <LuPencil className="text-base" />
                </button>
            </div>
            <p className="text-xs md:text-[0.8rem] line-clamp-1 w-9/12">{image}</p>
        </div>
    )
}


type ZipPreviewProps = {
    zip: string, onChangeZip: () => void
}

export function ZipPreview({ zip, onChangeZip }: ZipPreviewProps) {
    return (
        <div className="flex items-center gap-3">
            <div className="relative size-16 center-flex bg-gray-50 shadow-md">
                <PiFileZipDuotone className="text-2xl" />
                <button
                    type="button"
                    className="absolute -bottom-2 -right-2 bg-gray-100 border border-gray-200 rounded-full p-1"
                    onClick={onChangeZip}
                >
                    <LuPencil className="text-base" />
                </button>
            </div>
            <p className="text-xs md:text-[0.8rem] line-clamp-1 w-9/12">{zip}</p>
        </div>
    )
}