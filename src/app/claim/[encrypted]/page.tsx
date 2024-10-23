import { DownloadFile } from "#/modules/Encrypted/download-file";

type Props = {
    params: {
        encrypted: string
    }
}

export default function Encrypted(props: Props) {
    return (
        <DownloadFile encrypted={props.params.encrypted} />
    )
}