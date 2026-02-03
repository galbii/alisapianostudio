interface StudioStoryProps {
  children?: React.ReactNode
}

export function StudioStory({ children }: StudioStoryProps) {
  if (children) {
    return <div className="prose prose-lg max-w-none">{children}</div>
  }

  return (
    <section className="py-16 md:py-20 bg-studio-cream-100">
      <div className="container max-w-4xl">
        <h2 className="font-playfair text-4xl md:text-5xl text-studio-purple-400 text-center mb-12">
          Our <span className="text-studio-pink-400">Story</span>
        </h2>

        <div className="space-y-6 text-lg text-text-body leading-relaxed">
          <p>
            Founded in 1998 by Alisa Aslanyan, Alisa&apos;s Piano Studio has been nurturing musical
            talent in Southern California for over 26 years. What began as a passion for teaching
            has grown into a family-owned operation with two thriving locations in Victorville and
            Glendale.
          </p>

          <p>
            As a proud member of the Music Teachers Association of California (MTAC), we maintain
            the highest standards of musical education. Our commitment to excellence is reflected in
            our students&apos; remarkable 100% Certificate of Merit pass rate—a testament to the
            quality instruction and dedicated practice our teaching approach inspires.
          </p>

          <p>
            Our family-owned operation allows us to create a warm, welcoming environment where
            students of all ages—from 3 years old to adults—feel supported in their musical
            journey. We believe that music education should be both rigorous and joyful, combining
            strong technical foundations with creative expression and personal growth.
          </p>

          <p>
            Both of our locations serve as vibrant hubs for musical learning and community
            building. As an approved charter school vendor, we&apos;re proud to make quality piano
            education accessible to homeschool families and provide flexible learning options that
            fit diverse schedules and learning styles.
          </p>
        </div>
      </div>
    </section>
  )
}
