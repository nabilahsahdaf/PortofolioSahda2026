@echo off
title Portofolio Nabilah Sahda Firjatullah
cd /d "%~dp0"

echo =====================================================================
echo   MEMULAI SERVER WEBSITE PORTOFOLIO NABILAH SAHDA FIRJATULLAH
echo =====================================================================
echo.
echo   Local Address: http://localhost:5173
echo   Browser Anda akan otomatis terbuka dalam beberapa detik...
echo   (Untuk menghentikan server, tutup jendela ini atau tekan Ctrl + C)
echo.
echo =====================================================================

start http://localhost:5173
node server.js

if %ERRORLEVEL% NEQ 0 (
  echo.
  echo [PERINGATAN] Node.js tidak terdeteksi di PATH sistem.
  echo Mencoba alternatif menggunakan Python...
  start http://localhost:5173
  python -m http.server 5173
)

pause
