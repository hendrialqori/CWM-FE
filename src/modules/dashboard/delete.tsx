import ButtonSpin from "#/components/ui/button-spin"
import { cn } from "#/lib/utils"
import { useProductMutation } from "#/services/product-service"
import { useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"

type Props = {
    id: number
    onClose: () => void
}

function ProductDelete({ id, onClose }: Props) {
    const queryClient = useQueryClient()
    const { deleteMutation } = useProductMutation()

    const deleteProduct = () => {
        deleteMutation.mutate({ id }, {
            onSuccess: () => {
                toast.success(`Success delete product`, { position: "top-right" })
                onClose()

                setTimeout(() => {
                    queryClient.invalidateQueries({ queryKey: ["PRODUCT/LIST"] })
                    queryClient.invalidateQueries({ queryKey: ["TRANSACTION/LIST"] })
                }, 500)
            },
            onError: (error) => {
                const message = error.response?.data.message
                toast.error(JSON.stringify(message))
            }
        })
    }

    const disabledButton = deleteMutation.isPending

    return (
        <div className="bg-white rounded-xl px-10 py-10 w-[360px] space-y-7">
            <p className="font-medium text-center text-xs md:text-sm">Hapus produk ini ?</p>
            <div className="grid grid-cols-2 gap-3">
                <button
                    disabled={disabledButton}
                    className="text-xs md:text-sm font-medium bg-[#F8F8F8] border border-[#DBDBDB] rounded-lg py-2 h-10 hover:outline-double hover:outline-black"
                    onClick={onClose}
                >
                    Batal
                </button>
                <button
                    disabled={disabledButton}
                    className={cn(
                        "text-xs md:text-sm font-medium bg-black text-white rounded-lg py-2 h-10",
                        "outline-double active:outline-black disabled:bg-black/70",
                    )}
                    onClick={deleteProduct}
                >
                    {disabledButton ? <ButtonSpin /> : "Hapus"}
                </button>
            </div>
        </div>
    )
}

export { ProductDelete }