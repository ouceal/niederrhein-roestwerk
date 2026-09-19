'use client'

import { useEffect, useRef, useState } from 'react'
import { video } from '@/content/images'

const hero = video.heroLoop

/**
 * Das Video im Hero.
 *
 * Es lief einmal erst ab 768 px, um auf dem Telefon Daten zu sparen. Das
 * war gut gemeint und falsch herum gedacht: die meisten Besucher kommen
 * mit dem Telefon, und genau dort blieb das Erste, was man von der Seite
 * sieht, ein Standbild. Gespart wurden 856 KB — auf einer Seite, deren
 * Fotos zusammen ein Vielfaches davon wiegen, und deren Hero die einzige
 * Stelle ist, an der sich ueberhaupt etwas bewegt.
 *
 * Jetzt laeuft es ueberall. Zwei Ausnahmen bleiben, und beide sind keine
 * Vermutung ueber den Besucher, sondern eine Ansage von ihm:
 *   - prefers-reduced-motion: wer Bewegung abbestellt hat, bekommt keine.
 *   - Datensparmodus (Save-Data): wer dem Browser gesagt hat, dass sein
 *     Datenvolumen knapp ist, bekommt das Standbild.
 *
 * Das Poster ist immer da und bleibt das LCP-Element; das <video> wird
 * erst nach dem Mount eingehaengt und legt sich darueber. Ohne
 * JavaScript bleibt das Poster stehen, und die Seite ist vollstaendig.
 *
 * Zwei Dinge sind fuer iOS da und nur fuer iOS:
 *
 *   1. `muted` wird per Hand als ATTRIBUT gesetzt. React schreibt aus
 *      `muted` nur die Eigenschaft am DOM-Knoten und kein Attribut ins
 *      Markup — gemessen: `hasAttribute('muted')` war false, `.muted`
 *      war true. Chrome reicht die Eigenschaft; Safari prueft beim
 *      Laden das Attribut und verweigert sonst das automatische
 *      Abspielen. Ein Video, das auf dem Telefon stumm bleiben MUSS,
 *      darf diese Ansage nicht der Bibliothek ueberlassen.
 *
 *   2. `play()` wird ausdruecklich aufgerufen und sein Versprechen
 *      abgefangen. Safari lehnt ab, wenn der Stromsparmodus an ist —
 *      das ist sein gutes Recht, aber eine unbehandelte Ablehnung
 *      landet als Fehler in der Konsole. Lehnt es ab, bleibt das
 *      Poster stehen, und das ist das richtige Bild.
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
  const film = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (typeof window.matchMedia !== 'function') return
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    // `connection` kennt nicht jeder Browser; fehlt es, wird nicht gespart.
    const sparmodus = Boolean(
      (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData
    )
    if (!reducedMotion && !sparmodus) setShowVideo(true)
  }, [])

  useEffect(() => {
    const el = film.current
    if (!showVideo || !el) return
    // Reihenfolge zaehlt: erst stumm, dann abspielen.
    el.defaultMuted = true
    el.muted = true
    el.setAttribute('muted', '')
    void el.play().catch(() => {
      /* Abgelehnt (z. B. Stromsparmodus) — das Poster bleibt stehen. */
    })
  }, [showVideo])

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
          ref={film}
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
          {/* Der codecs-Zusatz ist der eigentliche Punkt dieser Zeile.
              Aus dem blossen „video/mp4" macht jeder Browser ein
              „vielleicht" — auch einer, der H.264 gar nicht kann. Er
              nimmt die Datei dann trotzdem und bleibt stehen. Mit der
              genauen Angabe antwortet er „nein" und laesst das Poster
              stehen, was das richtige Bild ist. Dieselbe Ungenauigkeit
              hat vorher das WebM auf dem iPhone gerissen.
              avc1.640032 = High Profile, Level 5.0; abgelesen aus der
              avcC-Box der Datei, nicht geraten. */}
          <source src={hero.mp4} type='video/mp4; codecs="avc1.640032"' />
        </video>
      ) : null}
    </div>
  )
}
