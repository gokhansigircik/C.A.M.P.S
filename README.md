# C.A.M.P.S

A full stack camp operations platform for managing activities, students, scheduling, counselor context, and checkout flow.

## Product story

C.A.M.P.S connects strongly with Gokhan's hospitality background because it models a real operations environment: people, schedules, activities, registration, details, and payments. It is the strongest full stack case study in the portfolio because it combines a React client with a Spring Boot and MySQL backend.

## What it demonstrates

| Area | Evidence |
| --- | --- |
| Full stack architecture | React frontend and Spring Boot backend live in one repo. |
| Product workflow | Users move through welcome, login, dashboard, activity details, creation, editing, and payment screens. |
| API modeling | Backend controllers, models, repositories, and services organize activity and user data. |
| UI composition | Calendar, navigation, detail, dashboard, form, and checkout components. |
| Business thinking | The app models operational tasks a camp or activity business would need. |

## Stack

React, JavaScript, Material UI, React Router, Spring Boot, Java 17, MySQL, JPA, Maven, Stripe SDK.

## Run locally

### Backend

1. Create a MySQL database named `camps`.
2. Copy `server/src/main/resources/application-example.properties` to `server/src/main/resources/application.properties`.
3. Update the database username and password for your machine.
4. Start the Spring Boot app.

```bash
cd server
./mvnw spring-boot:run
```

### Frontend

```bash
cd client
npm install
npm start
```

## Project structure

```text
client/src
├── components
├── pages
└── images

server/src/main/java/com/joana/studentsystem
├── controllers
├── models
├── repositories
└── services
```

## Next improvements

1. Add seed data for demo activities and users.
2. Add API documentation for activity and registration routes.
3. Add screenshots of the dashboard, calendar, and checkout flow.
4. Add frontend form validation and backend error response examples.
5. Add an end to end demo path for a recruiter to review quickly.
