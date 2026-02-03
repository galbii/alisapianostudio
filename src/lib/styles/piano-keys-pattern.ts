/**
 * Piano Keys Background Pattern
 *
 * Generates a subtle SVG pattern of piano keys that can be used as a background watermark.
 * The pattern is designed to be used at very low opacity (0.03-0.05) for a subtle effect.
 *
 * Usage:
 * ```tsx
 * <div style={{ backgroundImage: getPianoKeysPattern() }}>
 *   Content here
 * </div>
 * ```
 */

export function getPianoKeysPattern(opacity: number = 0.04): string {
  const svg = `
    <svg width="120" height="80" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="piano-keys" x="0" y="0" width="120" height="80" patternUnits="userSpaceOnUse">
          <!-- White keys -->
          <rect x="0" y="0" width="20" height="80" fill="black" opacity="${opacity}" />
          <rect x="20" y="0" width="20" height="80" fill="black" opacity="${opacity * 0.3}" />
          <rect x="40" y="0" width="20" height="80" fill="black" opacity="${opacity}" />
          <rect x="60" y="0" width="20" height="80" fill="black" opacity="${opacity * 0.3}" />
          <rect x="80" y="0" width="20" height="80" fill="black" opacity="${opacity}" />
          <rect x="100" y="0" width="20" height="80" fill="black" opacity="${opacity * 0.3}" />

          <!-- Black keys (shorter, positioned on top) -->
          <rect x="14" y="0" width="12" height="48" fill="black" opacity="${opacity * 2}" />
          <rect x="34" y="0" width="12" height="48" fill="black" opacity="${opacity * 2}" />
          <rect x="54" y="0" width="12" height="48" fill="black" opacity="${opacity * 2}" />
          <rect x="74" y="0" width="12" height="48" fill="black" opacity="${opacity * 2}" />
          <rect x="94" y="0" width="12" height="48" fill="black" opacity="${opacity * 2}" />
          <rect x="114" y="0" width="12" height="48" fill="black" opacity="${opacity * 2}" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#piano-keys)" />
    </svg>
  `

  // Encode SVG as data URL
  const encodedSvg = encodeURIComponent(svg.trim())
  return `url("data:image/svg+xml,${encodedSvg}")`
}

/**
 * Alternative: Simplified piano pattern with just key outlines
 */
export function getPianoKeysPatternSimple(opacity: number = 0.03): string {
  const svg = `
    <svg width="100" height="60" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="piano-simple" x="0" y="0" width="100" height="60" patternUnits="userSpaceOnUse">
          <!-- White key outlines -->
          <rect x="0" y="0" width="20" height="60" fill="none" stroke="black" stroke-width="1" opacity="${opacity}" />
          <rect x="20" y="0" width="20" height="60" fill="none" stroke="black" stroke-width="1" opacity="${opacity}" />
          <rect x="40" y="0" width="20" height="60" fill="none" stroke="black" stroke-width="1" opacity="${opacity}" />
          <rect x="60" y="0" width="20" height="60" fill="none" stroke="black" stroke-width="1" opacity="${opacity}" />
          <rect x="80" y="0" width="20" height="60" fill="none" stroke="black" stroke-width="1" opacity="${opacity}" />

          <!-- Black key outlines -->
          <rect x="14" y="0" width="12" height="36" fill="black" opacity="${opacity * 1.5}" />
          <rect x="34" y="0" width="12" height="36" fill="black" opacity="${opacity * 1.5}" />
          <rect x="54" y="0" width="12" height="36" fill="black" opacity="${opacity * 1.5}" />
          <rect x="74" y="0" width="12" height="36" fill="black" opacity="${opacity * 1.5}" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#piano-simple)" />
    </svg>
  `

  const encodedSvg = encodeURIComponent(svg.trim())
  return `url("data:image/svg+xml,${encodedSvg}")`
}

/**
 * Musical notes pattern as an alternative decorative element
 */
export function getMusicalNotesPattern(opacity: number = 0.04): string {
  const svg = `
    <svg width="80" height="80" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="musical-notes" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
          <!-- Musical note 1 -->
          <circle cx="20" cy="40" r="4" fill="black" opacity="${opacity}" />
          <rect x="23" y="20" width="2" height="20" fill="black" opacity="${opacity}" />

          <!-- Musical note 2 -->
          <circle cx="60" cy="30" r="4" fill="black" opacity="${opacity}" />
          <rect x="63" y="10" width="2" height="20" fill="black" opacity="${opacity}" />

          <!-- Small accent notes -->
          <circle cx="40" cy="60" r="2" fill="black" opacity="${opacity * 0.7}" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#musical-notes)" />
    </svg>
  `

  const encodedSvg = encodeURIComponent(svg.trim())
  return `url("data:image/svg+xml,${encodedSvg}")`
}
