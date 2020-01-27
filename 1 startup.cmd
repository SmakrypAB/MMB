@echo off
cd C:\Users\kvisi\Desktop\coding\MMD
pm2 start MMB.js --watch, --output C:\Users\kvisi\Desktop\coding\MMB\logs
echo started MMB
pause