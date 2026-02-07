# Quick Setup Guide

## Installation Steps

1. **Extract the project folder** to your desired location

2. **Open terminal** in the `lilac-therapy-website` folder

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```

5. **Open your browser** and go to:
   ```
   http://localhost:3000
   ```

## What You'll See

A beautiful, fully responsive therapy website with:
- Smooth scrolling sections
- Interactive FAQ accordions
- Professional credentials display
- Calming color palette (creams, sage greens, lilac purples)
- Elegant typography (Cormorant & Work Sans fonts)
- Hover effects and animations

## Customization

### Update Content
Edit `app/page.tsx` to change:
- Practice name and tagline
- Specialties (self-esteem, relationships, burnout)
- FAQs and answers
- Professional credentials
- Contact information

### Change Colors
Edit `tailwind.config.ts` to modify the color palette

### Modify Fonts
Edit `app/globals.css` to change font families

## Build for Production

```bash
npm run build
npm start
```

## Deployment

Deploy to:
- **Vercel** (recommended for Next.js): https://vercel.com
- **Netlify**: https://netlify.com
- **Any hosting service** that supports Node.js

## Tech Stack

- Next.js 15 (React framework)
- Tailwind CSS (styling)
- TypeScript (type safety)
- Google Fonts (Cormorant & Work Sans)

## Support

For Next.js help: https://nextjs.org/docs
For Tailwind help: https://tailwindcss.com/docs

Enjoy your beautiful new therapy website! 🌸
