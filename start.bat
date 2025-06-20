@echo off
echo Iniciando Seu Post Meu Like...
cd /d "%~dp0"
npm run build
if %errorlevel% neq 0 (
    echo Erro na compilacao!
    pause
    exit /b 1
)
echo Aplicativo compilado com sucesso!
echo Iniciando aplicativo...
npm start
pause