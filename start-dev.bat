@echo off
echo ========================================
echo   비상기어 개발 서버 시작 중...
echo ========================================
echo.

cd client
echo 📁 디렉토리: %cd%
echo.

echo 🚀 개발 서버를 시작합니다...
npm run dev

pause
