type Props = {
    onClose: () => void
}

function ProductDelete({ onClose }: Props) {
    return (
        <div className="bg-white rounded-xl px-10 py-10 w-[360px] space-y-7">
            <p className="font-medium text-center">Hapus produk ini ?</p>
            <div className="grid grid-cols-2 gap-3">
                <button
                    className="bg-[#F8F8F8] border border-[#DBDBDB] rounded-lg py-2 h-10 hover:outline-double hover:outline-black"
                    onClick={onClose}
                >
                    Batal
                </button>
                <button className="text-sm font-medium bg-black text-white rounded-lg py-2 h-10 outline-double active:outline-black">
                    Hapus
                </button>
            </div>
        </div>
    )
}

export { ProductDelete }