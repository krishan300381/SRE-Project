@echo off
cd /d "%~dp0"

:: Start the backend (Spring Boot)
start cmd /k "cd admin && mvn spring-boot:run"

:: Wait for backend to initialize (optional)
timeout /t 5 /nobreak

:: Start the frontend (Vite + React)
start cmd /k "cd admin-app && npm run dev"

:: Start the frontend (Vite + React)
start cmd /k "cd client-app && npm run dev"

