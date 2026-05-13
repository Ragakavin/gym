# UPLIFT Gym Fitness App

Fitness tracking and workout guidance platform with personalized exercise routines for different muscle groups.

## Live Demo
Coming soon on Vercel

## Features
- Workout routines: Arms, Chest, Back, Legs
- Progress tracking
- Body type calculator
- Nutrition guide
- Payment integration ready
- Trainer login system

## Tech Stack
- **Frontend**: HTML5, CSS, JavaScript
- **API**: Vercel Serverless Functions
- **Deployment**: Vercel

## Local Development

### Start Spring Backend (optional)
```bash
cd backend
mvn spring-boot:run
```
Server runs on `http://localhost:8080`

### Frontend on Vercel-style routes
- Workout pages call relative API routes (`/api/...`) for production compatibility.
- For local testing without Vercel, run the Spring backend and open pages via `http://localhost:8080`.

### Project Structure
```
web tech/
├── api/                  # Vercel serverless APIs
├── images/               # Static image assets
├── *.html                # Frontend pages
├── style.css
└── backend/              # Optional local Spring backend
```

## Deployment

### Deploy on Vercel
1. Push this repo to GitHub
2. Go to vercel.com and import the repository
3. Framework Preset: `Other`
4. Root Directory: project root (`web tech`)
5. Deploy

The app serves static pages and API routes on the same domain.

## API Endpoints
- `GET /api/arms` - Arm exercises
- `GET /api/chest` - Chest exercises
- `GET /api/back` - Back exercises
- `GET /api/legs` - Leg exercises
- `GET /api/health` - Health check

## License
MIT
