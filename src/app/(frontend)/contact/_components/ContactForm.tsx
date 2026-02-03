'use client'

import { useState } from 'react'
import {
  Button,
  Input,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Textarea,
} from '@/components/ui'

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission (replace with actual implementation later)
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      const form = e.target as HTMLFormElement
      form.reset()
    }, 3000)
  }

  return (
    <>
      <h2 className="font-playfair text-3xl md:text-4xl text-studio-purple-400 mb-2">
        Send us a <span className="text-studio-pink-400">Message</span>
      </h2>
      <p className="text-text-body mb-8">
        Fill out the form below and we&apos;ll get back to you as soon as possible.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div className="space-y-2">
          <Label htmlFor="name" className="text-text-heading font-medium">
            Name <span className="text-studio-pink-400">*</span>
          </Label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Your full name"
            required
            className="bg-white border-studio-cream-200 focus:border-studio-pink-400 focus:ring-studio-pink-400"
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="email" className="text-text-heading font-medium">
            Email <span className="text-studio-pink-400">*</span>
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="your.email@example.com"
            required
            className="bg-white border-studio-cream-200 focus:border-studio-pink-400 focus:ring-studio-pink-400"
          />
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-text-heading font-medium">
            Phone
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="(760) 123-4567"
            className="bg-white border-studio-cream-200 focus:border-studio-pink-400 focus:ring-studio-pink-400"
          />
        </div>

        {/* Lesson Interest */}
        <div className="space-y-2">
          <Label htmlFor="lessonInterest" className="text-text-heading font-medium">
            Lesson Interest
          </Label>
          <Select name="lessonInterest">
            <SelectTrigger
              id="lessonInterest"
              className="bg-white border-studio-cream-200 focus:border-studio-pink-400 focus:ring-studio-pink-400"
            >
              <SelectValue placeholder="Select a lesson type" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="piano">Piano</SelectItem>
              <SelectItem value="guitar">Guitar</SelectItem>
              <SelectItem value="vocal">Vocal</SelectItem>
              <SelectItem value="theory">Music Theory</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Message */}
        <div className="space-y-2">
          <Label htmlFor="message" className="text-text-heading font-medium">
            Message
          </Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Tell us about your musical goals, experience level, or any questions you have..."
            rows={6}
            className="bg-white border-studio-cream-200 focus:border-studio-pink-400 focus:ring-studio-pink-400 resize-none"
          />
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <Button
            type="submit"
            variant="studio"
            size="lg"
            disabled={isSubmitting || isSubmitted}
            className="w-full text-base px-8 py-6"
          >
            {isSubmitting ? 'Sending...' : isSubmitted ? 'Message Sent!' : 'Send Message'}
          </Button>
        </div>

        {isSubmitted && (
          <div className="bg-studio-pink-50 border border-studio-pink-200 rounded-lg p-4 text-text-body">
            Thank you for reaching out! We&apos;ll get back to you shortly.
          </div>
        )}
      </form>
    </>
  )
}
