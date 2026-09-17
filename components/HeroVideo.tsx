'use client'

import { useEffect, useState } from 'react'
import { video } from '@/content/images'

const hero = video.heroLoop

/**
 * Das einzige Stueck Client-JS auf der Seite — und nur, weil die Anforderung
 * ohne JS nicht erfuellbar ist: unter 768 px darf das Video gar nicht erst
 * geladen werden. Das `media`-Attribut auf <source> wird von Browsern in
 * <video> nicht ausgewertet (anders als in <picture>), CSS `display:none`
 * verhindert den Download nicht zuverlaessig.
 *
 * Also: das Poster-Bild ist immer da und ist das LCP-Element. Das <video>
 * wird erst nach dem Mount eingehaengt, und nur wenn der Viewport >= 768 px
 * ist und der Nutzer keine reduzierte Bewegung angefordert hat.
 *
 * Ohne JS bleibt das Poster stehen. Die Seite funktioniert vollstaendig.
 */
export function HeroVideo({
  objectPosition = 'center',
  className = '',
  alt,
}: {
  objectPosition?: string
  /** Extra-Klassen auf der Medien-Ebene, z. B. ein Helligkeitsfilter. */
  className?: string
  /** alt-Text des Posterbilds, in der Sprache der Seite. */
  alt: string
}) {
  const [showVideo, setShowVideo] = useState(false)

  useEffect(() => {
    if (typeof window.matchMedia !== 'function') return
    const wideEnough = window.matchMedia('(min-width: 768px)').matches
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (wideEnough && !reducedMotion) setShowVideo(true)
  }, [])

  return (
    <div className={`absolute inset-0 overflow-hidden bg-[#1c1512] ${className}`}>
      <img
        src={hero.poster}
        alt={alt}
        width={hero.w}
        height={hero.h}
        loading="eager"
        fetchPriority="high"
        decoding="sync"
        /* objectPosition entscheidet, WELCHER Teil des 16:9-Frames zu sehen
           ist. Das Motiv liegt in der unteren Haelfte; ohne Verschiebung
           zeigt ein hoher Ausschnitt vor allem die schwarze Leere oben. */
        style={{ objectPosition }}
        className="absolute inset-0 h-full w-full object-cover"
      />
      {showVideo ? (
        <video
          poster={hero.poster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          tabIndex={-1}
          width={hero.w}
          height={hero.h}
          style={{ objectPosition }}
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={hero.webm} type="video/webm" />
          <source src={hero.mp4} type="video/mp4" />
        </video>
      ) : null}
    </div>
  )
}
