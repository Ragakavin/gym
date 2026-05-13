# UPLIFT Gym Fitness App

Fitness tracking and workout guidance platform with personalized exercise routines for different muscle groups.

## Live Demo
Coming soon on Railway

## Features
- Workout routines: Arms, Chest, Back, Legs
- Progress tracking
- Body type calculator
- Nutrition guide
- Payment integration ready
- Trainer login system

## Tech Stack
- **Backend**: Spring Boot 3.2.4, Java 21
- **Frontend**: HTML5, CSS, JavaScript
- **Deployment**: Docker, Railway

## Local Development

### Backend
```bash
cd backend
mvn spring-boot:run
```
Server runs on `http://localhost:8080`

### Project Structure
```
web tech/
├── backend/              # Spring Boot application
│   ├── src/
│   ├── pom.xml
│   └── Dockerfile
├── arms.html, chest.html, etc.  # Frontend (served by backend)
└── railway.toml          # Railway deployment config
```

## Deployment

### Deploy on Railway
1. Push this repo to GitHub
2. Go to railway.app
3. Create new project from GitHub repo
4. Railway auto-detects Dockerfile and deploys

The app is configured to work with Railway's environment variables automatically.

## API Endpoints
- `GET /api/arms` - Arm exercises
- `GET /api/chest` - Chest exercises
- `GET /api/back` - Back exercises
- `GET /api/legs` - Leg exercises
- `GET /api/health` - Health check

## License
MIT
