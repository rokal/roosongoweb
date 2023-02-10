import { useEffect, useState } from 'react'
import Image, { ImageProps } from 'next/image'

export const FallbackImage = ({ src, ...rest }: ImageProps) => {
    const [imgSrc, setImgSrc] = useState(src)

    useEffect(() => {
        setImgSrc(src)
    }, [src])

    return (
        <Image
            {...rest}
            src={imgSrc ? imgSrc : '/images/image_placeholder.jpg'}
            onError={() => {
                setImgSrc('/images/image_placeholder.jpg')
            }}
        />
    )
}