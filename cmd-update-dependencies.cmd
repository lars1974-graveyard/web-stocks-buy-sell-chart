rd /S /Q temp-dependencies
mkdir temp-dependencies
cd temp-dependencies
call npm init -y
call npm install lit-element
call npm install redux
call npm install --save-dev snowpack
call npx snowpack
cd ..
xcopy temp-dependencies\web_modules src\lib\ /y
copy temp-dependencies\package.json src\lib\original-package.json /y

rem rd /S /Q temp-dependencies
