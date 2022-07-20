# Express/React Best Practices
This project is created for test and run best practices in Express and React.


## Authentication Management & Http Status
* JWT authentication with refresh tokens: Store JWT access token in memory and refresh token in cookie.
* 401: It's better to used for all unauthorized states (not exist token, user password problem and ...)


## To Do List
#### Select Best Authentiaction Mechanism. [:heavy_check_mark:]
* Use JWT to generate access and refresh token and send to client after login request.
* Client store JWT access token in memory and refresh token stored in cookie from backend response.
* After any page refresh, if user is logined, client call refresh request and update tokens.
* User can aceess to required_auth APIs with in memory access token.

#### Manage IsLogined Global State in React (Persist Login). [:heavy_check_mark:]
* Use refresh token, AuthProvider context and AuthManager component.

#### Resolve Extra Server Request Problem by Check in Client. [:heavy_check_mark:]
* Definition: It's update in next sequence after login (Profile.js) X No!\
Problem is render Profile page twice (one after login, one after refresh). Both of them fetch request to server.
* Resolve this issue with remove wrong useffect dependencies.

#### Setup CSRF Protection Config. [:heavy_check_mark:]
* Use csurf (CSRF token middleware) package and CsrfManager component.

#### Check and Verify Authentication Mechanism Functionality after the Access Token Expires. [:heavy_check_mark:]
* Now: If access token expires, land on login page. Problem: refresh token is ok and must use it rather re-login.
* Use refresh api call after request is failed.

#### Prevent Default Browser Console Error Logs. [:heavy_check_mark:]
* Use from custom axios and clear console is catch blocks.

#### Select Best Database (Mongo).

#### Check and Verify User Exist in Database.

#### Study and Develop PWA Version

#### Study React reportWebVitals Package.
<br/>

## Optimization and Improvements
#### Check to decrease number of refresh reqs (refresh just on need auth page?) (It's Correct?)

#### Axios Error Handling Best Practices.
* Source: https://www.youtube.com/watch?v=brcHK3P6ChQ&list=PL0Zuz27SZ-6PRCpm9clX0WiBEMB70FWwd&index=2

#### Add Blacklist Mechanism for Prevent Old Tokens.
* Source: https://supertokens.com/blog/revoking-access-with-a-jwt-blacklist

<br/>
React from Scratch
<br/>
React Global State with Context
