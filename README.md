# Hawk Security 
The main purpose of this web application is to create a platform where security services can perform their daily task easily. On our website, employees can view their shifts and update their availability whenever they want. Moreover, admin can view, update and add shifts, can view employee's availabilities. Also, admins can add new locations and new job postings. 
 
  Application is live at [Web Service](https://hawk-security.herokuapp.com/).
 
## Authors
- Nikita Patel, *B00826639*
- Milap Bhanderi - *B00823109*
- Yash Shah - *B00841980*
- Krutin Trivedi - *B00843516*

## What are the framework & libraries used ?
This application is built using the following frameworks and libraries :package:.
* [React Js](https://reactjs.org/) - Web application Library
* [Bootstrap](https://getbootstrap.com/)  - CSS Framework
* [Google Fonts](https://fonts.google.com/) - Web Fonts Library
* [HTML and CSS](https://www.w3schools.com/html/)- Web designing Language
* [Node JS](https://nodejs.org/en/) - MVC Framework to build Web Services.
* [MongoDB](https://www.mongodb.com/) - NoSQL Database used for data storage.

## What cloud service did we used to store data ? 
* [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

## What are the prerequisite required ?
 * Node JS - [Install](https://nodejs.org/en/download/)
 * React JS - [Install](https://reactjs.org/docs/add-react-to-a-website.html)
 * Express JS - [Install](https://expressjs.com/en/starter/installing.html)

## How to run the application ?
1. Clone the repo to your local machine using `https://git.cs.dal.ca/nvpatel/hawk_security.git`
2. Navigate to the workspace folder using `cd hawk_security`
3. Run `npm install` to install all the packages that are require to run the backend of the project. (in case you are having problem run `npm i bcryptjs express is-empty jsonwebtoken mongoose passport passport-jwt validator cors dotenv nodemailer`)

### Front End
4. Navigate to front-end workspace using `cd Frontend`
5. Run `npm install` to install all the packages that are require to run the front-end of the project. (in case you are having problem run `npm install @material-ui/core @fullcalendar/list react-bootstrap bootstrap react-datepicker reactstrap axios classnames jwt-decode react-redux react-router-dom redux redux-thunk react-toastify` and `npm install --save react-router-dom @fullcalendar/react @fullcalendar/core @fullcalendar/daygrid`)
6. Launch the app using `npm start`
7. Now the application will open in your default browser in following URL [localhost:3000](http://localhost:3000/).

### Back End
8. Run the server by using `node app.js` in separte terminal. 
9. Now the server will be up in following URL [localhost:5000](http://localhost:5000/).

**Note** The above steps will succeed only if the prerequisite platforms are installed in your local machine.

## What you can expect to see in here ?

Credetials to accsess developed feature. 
Admin login credetials - email:  admin@gmail.com - Password: admin123
Employee login credentials - email: user@gmail.com - Password: user123

### Feature Owner - Nikita Patel
1. **Employee Shift Display** - This page, allows employees to view their shifts in calendar format. The employee can view their shifts after logging into the system. They can select different options like a week, list and month to view shifts. 
2. **Admin Shifts display** - This page will allow admin to view shifts assigned on each day. Admins can log in to the system and they will be redirected to this page where they can select the date and view all the shifts assigned on that date. 

### Feature Owner - Milap Bhanderi 
3. **Job_form** - With the help of this page, the admin can post the vacant position of the Hawk Security on the Jobs page of website. It will be a simple form where the admin will provide information such as Job ID, Job Role, Job Description, and Job Qualification.
4. **Job_display** - With this page, the general public can get information about the current openings of Hawk Security by vising "JOBS" section on the website.

### Feature Owner - Yash Shah 
5. **Add Shifts** - This page, allows the admins to add the shifts for the employees. The admin can select the employee from the drop-down menu and select the starting date of the week. He can then enter all the details in the format given on the page and in case of any invalid data entry, he/she will be prompted with an error message. After successful entry, the admin is alerted with a success message and then these shift details are stored in the database using the API written by me.
6. **Check Availabilities** - This page will render the employee availabilities stored in the database. The admin can check out all the timings for all the days on this page.

### Feature Owner - Krutin Trivedi
7. **Profile Managemnet For Employee** - This feature will allow employee to create new profile, log into their profile, view it, edit it, remove it's profile. if employee forgots it's password it can change it also. it has the below pages that provides the full functionality.

`Login`: http://hawk-security.herokuapp.com/login.
`Register`: http://hawk-security.herokuapp.com/register.
`Remove Profile`: http://hawk-security.herokuapp.com/Remove_profile.
`Update Profile`: http://hawk-security.herokuapp.com/User_update_profile.
`Forgot Password`: http://hawk-security.herokuapp.com/Forgot_password.
`Reset Password`: http://hawk-security.herokuapp.com/job_form.

8. **Profile Managemnet For Admin** - This feature will allow employee to log into their profile, view it, edit it, remove it's profile. if employee forgots it's password it can change it also. it has the below pages that provides the full functionality.

`Login`: http://hawk-security.herokuapp.com/login.
`Remove Profile`: http://hawk-security.herokuapp.com/Remove_profile.
`Update Profile`: http://hawk-security.herokuapp.com/User_update_profile.
`Forgot Password`: http://hawk-security.herokuapp.com/Forgot_password.
`Reset Password`: http://hawk-security.herokuapp.com/job_form.

9. **Request a quote** - This feature will allow general user to connect to Hawk security services in case they want their services.

`Request a quote`: http://hawk-security.herokuapp.com/request.

## Application tour :
Now let us go for around to visit the above pages.

### Employee shift display - Nikita Patel
* To access this feature of the application, you must be logged in. 
*  After successful login, you will be redirected to these pages. 

### Availability and Shifts add forms - Yash Shah
* To access this feature of the application, you must be logged in as admin or user. 
* After successful login, you can select an Availability link from the navigation bar that will redirect you to Availability add form.
* If you log in, you can select an option from nav bar to check Availability and add Shift form. 

### Job form and display - Milap Bhanderi 
* First, one needs to log in as an admin to the website. After successfully logging to the website, you can navigate to `INSERT/JOBS`. As an admin, you can add a new job from the `FORM` displayed on the website by providing details such as Job ID, Job Role, Job Description, and Job Qualification. [Image of JOB_FORM](https://i.imgur.com/jhrmds7.png)
* This page is for the general public so anyone can access it by just visiting our website. Once the admin adds the job posts, everyone can see the job openings on this page.
[Image of JOB_DISPLAY](https://i.imgur.com/aYvlSbB.png)

### Profile Managemnet(Admin/Employee) - Krutin Trivedi 
* Initially, the Employee will have to create an account to use this web application. The creation of the account can be easily done through the email address and a password with some basic details like first name, last name. Once you are registered you will be able to login to the application using your email address and password. The system is built in such a manner that it will detect you and redirect to respectively whether you are an admin or employee.
**Note** Admin credentials will directly add through Database to provide security.
* Once you are logged into the system as an employee or as admin you will be able to update your profile the same way you register, remove your profile. The system will be having a feature of forgetting and resetting your password, through which the user will be able to change the password. All this feature will provide users with the feasibility and flexibility in their hands.
* This whole system runs on JWT (JSON Web Tokens) so, it can provide some protection from XSS and CSRF attacks to the application. We also stored the password using the 256SHA hashing method to provide security in case the system gets compromised in any manner. If you forgot your password, you could go to forgot password then you will get an e-mail on your email address register with the application to reset the password. As this whole application runs on the JWT session and after receiving mail, it will authenticate you with the JWT session and then you will be able to reset your password.

## Other references

1. A free tutorial to learn HTML and CSS. (n.d.). Retrieved from https://marksheet.io/sass-scss-less.html
2. "React Component - Docs | FullCalendar", Fullcalendar.io, 2020. [Online]. Available: https://fullcalendar.io/docs/react. [Accessed: 05- Apr- 2020].
3. Youtube. 2020. [online] Available at: <https://www.youtube.com/watch?v=1tRLveSyNz8> [Accessed 5 April 2020].
4. "Node.js Mongoose - save() - Insert Document to MongoDB", TutorialKart, 2020. [Online]. Available: https://www.tutorialkart.com/nodejs/mongoose/insert-document-to-mongodb/. [Accessed: 05- Apr- 2020].
5. S. mongoose and A. Pandey, "Save function is not working in expressjs mongoose", Stack Overflow, 2020. [Online]. Available: https://stackoverflow.com/questions/36811803/save-function-is-not-working-in-expressjs-mongoose. [Accessed: 05- Apr- 2020].
6. "How to populate React Big Calendar with data from API", Medium, 2020. [Online]. Available: https://medium.com/@sajclarke/how-to-populate-react-big-calendar-with-data-from-api-b89dc7362d8. [Accessed: 05- Apr- 2020].
7. Broder, J. (2020). Online Markdown Editor - Dillinger, the Last Markdown Editor ever.. [online] Dillinger.io. Available at: https://dillinger.io/ [Accessed 2 Feb. 2020].
8. W3schools.com. (2020). HTML5 Introduction. [online] Available at: https://www.w3schools.com/html/html5_intro.asp [Accessed 2 Feb. 2020].
9. W3schools.com. (2020). CSS Tutorial. [online] Available at: https://www.w3schools.com/css/default.asp [Accessed 2 Feb. 2020].
10. "React – A JavaScript library for building user interfaces", Reactjs.org, 2020. [Online]. Available: https://reactjs.org/. [Accessed: 05- Apr- 2020]
11. Mark Otto, a. (2020). Components · Bootstrap. [online] Getbootstrap.com. Available at: https://getbootstrap.com/docs/3.3/components/ [Accessed 2 Feb. 2020].
12. Photopea.com. (2020). Photopea | Online Photo Editor. [online] Available at: https://www.photopea.com/ [Accessed 2 Feb. 2020].
13. a. Mark Otto, "Cards", Getbootstrap.com, 2020. [Online]. Available: https://getbootstrap.com/docs/4.0/components/card/. [Accessed: 05- Apr- 2020]
14. "Imgur", Imgur, 2020. [Online]. Available: https://imgur.com/. [Accessed: 05- Apr- 2020]
15. Learn the MERN Stack - Full Tutorial (MongoDB, Express, React, Node.js). By: freeCodeCamp.org. Accessed: https://www.youtube.com/watch?v=7CqJlxBYj-M&t=4084s
16. Tables in React. Accessed: https://react-bootstrap.github.io/components/table/
17. Broder, J. (2020). Online Markdown Editor - Dillinger, the Last Markdown Editor ever.. [online] Dillinger.io. Available at: https://dillinger.io/ [Accessed 2 Feb. 2020].
18. "Build a Login/Auth App with the MERN Stack — Part 1 (Backend)", Medium, 2020. [Online]. Available: https://blog.bitsrc.io/build-a-login-auth-app-with-mern-stack-part-1-c405048e3669. [Accessed: 20- Mar- 2020].
19. "Build a Login/Auth App with the MERN Stack — Part 2 (Frontend & Redux Setup)", Medium, 2020. [Online]. Available: https://blog.bitsrc.io/build-a-login-auth-app-with-mern-stack-part-2-frontend-6eac4e38ee82. [Accessed: 20- Mar- 2020].
20. "Build a Login/Auth App with the MERN Stack — Part 3 (Linking Redux with React Components)", Medium, 2020. [Online]. Available: https://blog.bitsrc.io/build-a-login-auth-app-with-the-mern-stack-part-3-react-components-88190f8db718. [Accessed: 20- Mar- 2020].
21. images: https://www.freepik.com/