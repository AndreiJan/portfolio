import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

// SEO Metadata - This will apply to all pages
export const metadata: Metadata = {
  // Basic metadata
  title: {
    default: 'Andrei Mendoza - Full Stack Developer & IT Specialist',
    template: '%s | Andrei Mendoza'
  },
  description: 'Full-stack developer and IT Desktop Specialist specializing in React, Next.js, Node.js, and modern web technologies. Building innovative web solutions and digital experiences.',
  
  // Keywords for SEO
  keywords: [
    'Andrei Mendoza',
    'full stack developer',
    'web developer',
    'IT specialist',
    'React developer',
    'Next.js developer',
    'Node.js',
    'MongoDB',
    'MySQL',
    'Firebase',
    'Flask',
    'Python',
    'JavaScript',
    'TypeScript',
    'portfolio',
    'freelance developer',
    'TAVANCA Network',
    'web development',
    'software engineer'
  ],
  
  // Author information
  authors: [{ name: 'Andrei Mendoza' }],
  creator: 'Andrei Mendoza',
  publisher: 'Andrei Mendoza',
  
  // Robots directives
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Open Graph metadata (for Facebook, LinkedIn, Discord, etc.)
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://andreimendoza.ca', // Update with your actual domain
    title: 'Andrei Mendoza - Full Stack Developer & IT Specialist',
    description: 'Full-stack developer specializing in React, Next.js, and modern web technologies. View my portfolio of web applications and projects.',
    siteName: 'Andrei Mendoza Portfolio',
  },
  
  
  // Verification codes (add these when you verify your site)
  
  // Canonical URL
  alternates: {
    canonical: 'https://andreimendoza.ca', // Update with your actual domain
  },
  
  // Category
  category: 'technology',
  
  // Web app manifest
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // JSON-LD Structured Data for better SEO
  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Andrei Mendoza',
    url: 'https://andreimendoza.ca', // Update with your actual domain
    jobTitle: 'Full Stack Developer',
    worksFor: {
      '@type': 'Organization',
      name: 'KairoVA Web',
    },
    sameAs: [
      'https://github.com/AndreiJan', // Update with your actual GitHub
      'https://www.linkedin.com/in/andrei-mendoza-74b3872a1', // Update with your actual LinkedIn
      'https://www.instagram.com/andrei_jan_m', // Update with your actual Instagram
    ],
    knowsAbout: [
      'React',
      'Next.js',
      'Node.js',
      'Flask',
      'Python',
      'JavaScript',
      'TypeScript',
      'MongoDB',
      'MySQL',
      'Firebase',
      'Web Development',
      'Full Stack Development',
      'IT Support',
    ],
    description: 'Full-stack developer and IT Desktop Specialist specializing in React, Next.js, and modern web technologies.',
  }

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Andrei Mendoza Portfolio',
    url: 'https://andreimendoza.ca', // Update with your actual domain
    description: 'Professional portfolio showcasing web development projects and technical skills',
    author: {
      '@type': 'Person',
      name: 'Andrei Mendoza',
    },
    inLanguage: 'en-US',
  }

  return (
    <html lang="en">
      <head>
        {/* JSON-LD Structured Data */}
        <Script
          id="person-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}