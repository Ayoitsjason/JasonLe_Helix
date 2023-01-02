# Helix
Ask questions and get help from the community

# How It's Made:

Front End
Tech used: React, CSS

Back End
Tech used: Python, Django, MySQL

Copyright (c) 2023 Jason Le

# File Tree
root  
  |- helix_backend  
  | |- helix_backend  
  | |- portal  
  |- helix_frontend  
  | |- public  
  | |- src  
  | | |- api  
  | | |- components  
  | | |- css  
  | | |- images  
  | | |- utils  
 
# Getting Started
1. Create virtual environment inside root folder named "env"
2. Run `activate_virtualenv.bat` script to activate virtual environment
3. Run `pip install -r requirements.txt` to install necessary backend libraries and packages
4. Change directory to "helix_frontend"
5. Run `npm install` to install necessary frontend libraries and packages
6. Change directory to helix_backend
7. Inside .env file, fill in MYSQL_NAME & MYSQL_PASS then save file
8. Open 2 new terminals
9. [Terminal 1] - inside root folder of project, run `start_backend.bat` to start backend server
10. [Terminal 2] - inside root folder of project, run `start_frontend.bat` to start frontend server

**Note: 
Frontend Server (Port: 3000) Backend Server (Port: 8000)

**Note: 
Must have SQL server up and running  

SQL Settings: {  
'USER':'root'  
'NAME': [env_var]  
'HOST: '127.0.0.1'  
'PASSWORD': [env_var]  
'PORT': '3306'  
}

## Available Scripts

In the project directory, you can run:

### `activate_virtualenv.bat`

### `deactivate_virtualenv.bat`

### `start_backend.bat`

### `start_frontend.bat`
