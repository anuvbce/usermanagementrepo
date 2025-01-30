# Usermanagement

1. This project is completely developed using Angular
2. User Management has fout components.
   a. Add User - to add a new user
   b. View User - to view users givenby userId.
   c. Edit User - to edit a specific user.
   d. Delete User - to delete a specific user.
3. The landing page has full user list along with a provision to View | Edit | Delete buttons.
4. When the user clicks on any one of the button the application will navigate to that correcponding page
5. Project hase used service which User Service for RestApi calls.
6. https://jsonplaceholder.typicode.com/users is used for the data Manipulation.
7. For UI components and tools Angular Material is used
   8

# Set Up

1. check node version - node -v
2. check npm version -v
   if not install them using
   a.Download the NVM Windows installer from the NVM for Windows GitHub repository.

   b.Run the installer and follow the on-screen instructions.

   c.Once the installation is complete, open a new command prompt or PowerShell window.

   d.Verify the installation by running the following command: node -v, npm -v

3. install json-server using npm install --save json-server
4. add angular material using ng add @angular/material

# Run commands

1. ng new usermanagement - to create project folder along with nod_modules.
2. ng generate component <componentname> - to generate a component
3. ng generate interface <interfacename> - to generate interfaces
4. ng generate service <servicename> - to generate services
5. json-server --watch db.json - to work and manipulate with data
6. ng serve or npm start - to see the ouput
