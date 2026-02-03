export interface Lesson {
  id: string
  title: string
  description: string
  ageRange: string
  features: string[]
}

export const lessons: Lesson[] = [
  {
    id: 'piano',
    title: 'Piano Lessons',
    description:
      'Comprehensive piano instruction from beginner to advanced levels. Our structured curriculum builds strong fundamentals while nurturing musical expression and creativity.',
    ageRange: '3+',
    features: [
      'Classical and contemporary repertoire',
      'Music theory integration',
      'Technique development',
      'Performance preparation',
      'Certificate of Merit preparation',
    ],
  },
  {
    id: 'guitar',
    title: 'Guitar Lessons',
    description:
      'Learn acoustic and electric guitar with personalized instruction tailored to your musical interests. From folk to rock, classical to jazz, explore the versatility of the guitar.',
    ageRange: '6+',
    features: [
      'Chord progressions and strumming patterns',
      'Fingerstyle technique',
      'Music reading and tablature',
      'Genre exploration',
      'Ensemble playing opportunities',
    ],
  },
  {
    id: 'vocal',
    title: 'Vocal Lessons',
    description:
      'Develop your voice with professional vocal training. Learn proper breathing techniques, vocal health, and expressive performance skills across multiple genres.',
    ageRange: '8+',
    features: [
      'Breath control and support',
      'Vocal range expansion',
      'Diction and pronunciation',
      'Performance confidence',
      'Repertoire development',
    ],
  },
  {
    id: 'music-theory',
    title: 'Music Theory',
    description:
      'Deepen your understanding of music through comprehensive theory instruction. Learn the language of music and how it applies to your instrument and performance.',
    ageRange: '7+',
    features: [
      'Scales and key signatures',
      'Harmony and chord progressions',
      'Form and analysis',
      'Composition basics',
      'Written and aural skills',
    ],
  },
  {
    id: 'ear-training',
    title: 'Ear Training',
    description:
      'Develop your musical ear with systematic training in pitch recognition, interval identification, and rhythmic accuracy. Essential skills for all musicians.',
    ageRange: '6+',
    features: [
      'Interval recognition',
      'Chord quality identification',
      'Melodic dictation',
      'Rhythmic patterns',
      'Harmonic progression recognition',
    ],
  },
  {
    id: 'sight-reading',
    title: 'Sight Reading',
    description:
      'Build confidence in reading music at first sight. Our progressive approach helps students become fluent music readers, essential for ensemble participation and auditions.',
    ageRange: '6+',
    features: [
      'Pattern recognition',
      'Progressive difficulty levels',
      'Multiple clefs and keys',
      'Rhythmic fluency',
      'Performance under pressure',
    ],
  },
]
