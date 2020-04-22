:: rollup must be installed: npm install --global rollup
rmdir dist /S /Q
xcopy src\images dist\images\ /s/h/e/k/f/c
xcopy src\sounds dist\sounds\ /s/h/e/k/f/c
xcopy src\css dist\css\ /s/h/e/k/f/c
copy src\index.html dist\index.html
echo "Copy done"
call rollup -f esm -o dist/app.js src/app.js
