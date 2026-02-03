export interface TeamMember {
  id: string
  name: string
  title: string
  credentials: string[]
  bio: string
  image: string
  order: number
}

export const team: TeamMember[] = [
  {
    id: 'alisa-aslanyan',
    name: 'Alisa Aslanyan',
    title: 'Founder & Lead Piano Instructor',
    credentials: ['MTAC Member since 1998', 'Certificate of Merit Evaluator'],
    bio: 'Alisa founded Alisa\'s Piano Studio with a vision to create a nurturing environment where students of all ages could discover the joy of music. With over 25 years of teaching experience and MTAC membership since 1998, she has guided hundreds of students to achieve their musical goals. Her students consistently excel in Certificate of Merit evaluations, maintaining the studio\'s proud 100% pass rate. Alisa\'s teaching philosophy emphasizes building strong technical foundations while fostering creativity and musical expression. She believes that every student has unique potential, and her patient, encouraging approach has helped students from age 3 to adult discover their musical voice.',
    image: '/images/team/alisa-aslanyan.jpg',
    order: 1,
  },
  {
    id: 'vahan-aslanyan',
    name: 'Vahan Aslanyan',
    title: 'Studio Director - Glendale Branch',
    credentials: ['Music Education Specialist', 'Multi-Instrumental Instructor'],
    bio: 'As Studio Director of the Glendale branch, Vahan brings dynamic leadership and diverse musical expertise to Alisa\'s Piano Studio. His comprehensive understanding of music education and operations ensures that every student receives exceptional instruction in a well-organized, inspiring environment. Vahan\'s multi-instrumental background allows him to provide unique insights into music theory and performance across disciplines. He is passionate about creating opportunities for students to grow not just as musicians, but as confident, creative individuals. Under his direction, the Glendale location has become a vibrant hub for musical learning and community building.',
    image: '/images/team/vahan-aslanyan.jpg',
    order: 2,
  },
  {
    id: 'varsenik-aslanyan',
    name: 'Varsenik (Varsi) Aslanyan',
    title: 'Piano Instructor',
    credentials: [
      'B.A. Piano Performance, Chapman University',
      'Certificate of Merit Specialist',
    ],
    bio: 'Varsi brings both academic excellence and genuine passion to her teaching. A graduate of Chapman University\'s prestigious piano performance program, she combines classical training with contemporary teaching methods that resonate with today\'s students. Her approach is characterized by enthusiasm, clarity, and attention to individual learning styles. Varsi excels at making complex musical concepts accessible and engaging, particularly for young learners. She specializes in Certificate of Merit preparation and has a remarkable track record of helping students achieve their highest potential in evaluations. Her warm personality and dedication create a supportive atmosphere where students feel motivated to practice and grow.',
    image: '/images/team/varsenik-aslanyan.jpg',
    order: 3,
  },
]
