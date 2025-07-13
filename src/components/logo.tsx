import Image from "next/image"

type ImageProps = {
    alt: string,
    src: string,
    width?: number,
    height?: number
}

export function ImageComponent({alt,src,height=120,width=200}: ImageProps)
{
    return <Image src={src} alt={alt} height={height} width={width} />
}