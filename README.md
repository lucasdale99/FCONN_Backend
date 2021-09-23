# FCONN_Backend
This is the Node, Express backend that connects to the MongoDB for the FCONN project.

In order to start up this project locally:
1. Open up bash terminal.
2. Type in 'nodemon server'
3. This starts watching on  https://localhost:5000

Don't Forget
You need to add your IP address to connect to the DB otherwise you'll get a 

    connection <monitor> to ip closed at Timeout error.

This just means that your IP isn't allowed to connect. This is something you only do in development. 

To start up the backend server
-Make sure to install all the npm packages in the package.json under dependencies.

On Mac
Install Nodemon globally:
sudo npm install -g --force nodemon

Then run:
sudo nodemon server

On Windows run in administrator mode:
Install nodemon globally and run:

1. npm install

2. npm install -g --force nodemon

3. nodemon server
