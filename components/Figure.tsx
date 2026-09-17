import type { Img } from '@/content/images'

type Props = {
  image: Img
  /** Der alt-Text kommt aus dem Woerterbuch der jeweiligen Sprache,
      nicht aus dem Bild-Manifest: er wird vorgelesen. */
  alt: string
  /** Nur das Hero-Bild bekommt priority. Alles andere laedt lazy. */
  priority?: boolean
  className?: string
  imgClassName?: string
  /** sizes-Hinweis fuer den Browser; rein informativ, kein Layout-Effekt. */
  sizes?: string
  caption?: string
  captionClassName?: string
}

/**
 * Ein <img> mit allem, was es braucht:
 * width/height aus dem Manifest (verhindert Layout-Shift),
 * alt-Text aus dem Woerterbuch der Seitensprache,
 * loading="lazy" ueberall ausser beim Hero.
 *
 * Kein next/image: der Export ist statisch, die WebP-Dateien sind bereits
 * optimiert, und so bleibt die Kontrolle ueber width/height/alt vollstaendig.
 */
export function Figure({
  image,
  alt,
  priority = false,
  className,
  imgClassName,
  sizes,
  caption,
  captionClassName = '',
}: Props) {
  const el = (
    <img
      src={image.src}
      alt={alt}
      width={image.w}
      height={image.h}
      sizes={sizes}
      decoding={priority ? 'sync' : 'async'}
      {...(priority
        ? { loading: 'eager' as const, fetchPriority: 'high' as const }
        : { loading: 'lazy' as const })}
      className={imgClassName ?? 'h-full w-full object-cover'}
      /* Nie ueber die native Groesse hinaus skalieren. */
      style={{ maxWidth: `${image.w}px` }}
    />
  )

  if (!caption) return <div className={className}>{el}</div>

  return (
    <figure className={className}>
      {el}
      <figcaption className={`mt-3 text-sm text-muted ${captionClassName}`}>{caption}</figcaption>
    </figure>
  )
}
