## Prerequisites
- install Nodejs
- Open Command Prompt and install the below 
- `npm install -g protractor` to install protractor
- `npm install` to install the project dependencies

## Description
1. Access to http://qaexercise.envalfresco.com/settings
2. Change Provider to ECM
3. Click Apply
4. Navigate to http://qaexercise.envalfresco.com/login
    - Insert Username and Password
    - Username : guest@example.com
    - Password : Password
    - Click Login
5. Navigate to http://qaexercise.envalfresco.com/files
6. Click on 'create new folder' icon.
7. New folder dialog is displayed.
8. Introduce your Github username (for example in my case) "magemello".
9. Name has been added.
10. Click on 'Create' button.
11. The dialog is closed. Folder with your Github username is created in the current folder.
12. Click on 'create new folder' icon.
13. New folder dialog is displayed.
14. Introduce your Github username (for example in my case) "magemello".
15. Name has been added.
16. Click on 'Create' button.
17. The dialog is not closed.
18. The message "There's already a folder with this name. Try a different name" is displayed.
19. Select the folder with your Github username
20. Open Options window (3 dots)
21. Click delete

## Description
- run tests: `protractor conf.js`

