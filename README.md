# Satyam Mishra Portfolio

Professional AI/ML Engineer portfolio built with Next.js App Router, TypeScript, TailwindCSS, and Framer Motion.

## Tech Stack
- Next.js (App Router)
- TypeScript
- TailwindCSS
- Framer Motion
- React Icons
- Vercel-ready deployment

## Project Structure
```text
app/
components/
projects/
public/images/
styles/
```

## Local Development
Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production Build
```bash
npm run build
npm start
```

## Deploy on Vercel

### Option 1: Vercel Dashboard
1. Push this repository to GitHub.
2. Go to [Vercel](https://vercel.com/new).
3. Import the GitHub repository.
4. Keep default framework setting as `Next.js`.
5. Click `Deploy`.

### Option 2: Vercel CLI
```bash
npm i -g vercel
vercel
```
Then follow the prompts.

## Notes
- Replace `/public/resume.pdf` with your latest resume file to enable the download button.
- Update social/profile URLs in `components/portfolio-page.tsx` if needed.
- GitHub stats are fetched from public APIs and can be rate-limited temporarily.

## Scripts
- `npm run dev` - Run development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run lint checks

## License
MIT
