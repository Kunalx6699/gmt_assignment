# Lilac Therapy Website

A serene and elegant therapy practice website built with Next.js 15 and Tailwind CSS.

## Features

- 🌸 Calming, nature-inspired design with soft color palette
- 📱 Fully responsive across all devices
- ⚡ Built with Next.js 15 App Router
- 🎨 Custom Tailwind configuration
- ✨ Smooth animations and transitions
- ♿ Accessible and semantic HTML
- 🎯 Interactive FAQ and credentials sections

## Design Elements

- **Typography**: Cormorant (serif) for headings, Work Sans for body text
- **Colors**: Soft creams, sage greens, and lilac purples
- **Layout**: Asymmetric sections with generous whitespace
- **Components**: Expandable FAQs, specialty cards, CTA sections

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Install dependencies:
\`\`\`bash
npm install
\`\`\`

2. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## Project Structure

\`\`\`
/
├── app/
│   ├── page.tsx          # Main homepage component
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── tailwind.config.ts    # Tailwind configuration
├── package.json
└── README.md
\`\`\`

## Customization

### Colors

Edit the color palette in `tailwind.config.ts`:

\`\`\`typescript
colors: {
  lilac: {
    cream: '#f5f3f0',
    sage: '#6b7e6d',
    dark: '#2d3a2e',
    // ... more colors
  }
}
\`\`\`

### Content

Update the content in `app/page.tsx`:
- Specialties array
- FAQ items
- Professional credentials
- Contact information

### Fonts

The project uses Google Fonts:
- **Cormorant** - Elegant serif for headings
- **Work Sans** - Clean sans-serif for body text

Change fonts in `globals.css`.

## Sections

1. **Hero** - Welcoming introduction with tagline
2. **About** - Personal approach to therapy
3. **Specialties** - Three focus areas (Self-Esteem, Relationships, Burnout)
4. **Support** - List of issues addressed
5. **Therapist Bio** - Personal introduction
6. **FAQs** - Expandable questions
7. **Credentials** - Professional background
8. **CTA** - Call to action
9. **Footer** - Contact info and links

## Technologies

- [Next.js 15](https://nextjs.org/)
- [React 19](https://react.dev/)
- [Tailwind CSS 3.4](https://tailwindcss.com/)
- [TypeScript 5](https://www.typescriptlang.org/)

## License

This is a template website. Customize for your own use.

## Credits

Design inspired by the Lilac Template for therapy practices.
