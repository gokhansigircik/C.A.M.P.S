# C.A.M.P.S

C.A.M.P.S is a camp registration and operations platform built with React, Java, Spring Boot, and MySQL.

## Product problem

Manual registration creates scattered records, repeated data entry, unclear schedules, and slow follow up. This project turns that workflow into a structured web application with a client interface, backend services, persistent records, activity data, and checkout flow thinking.

## What it shows

| Area | Evidence |
| --- | --- |
| Full stack architecture | React client, Spring Boot server, MySQL persistence, Maven project structure, and configuration split for local setup. |
| Operations workflow | Camps, activities, users, schedules, registration details, counselor views, and dashboard style screens. |
| Backend fundamentals | Controllers, models, repositories, services, application properties, and test configuration. |
| Product execution | A real business process was translated into a usable software workflow instead of a static demo. |

## Stack

React, JavaScript, Java, Spring Boot, Maven, MySQL, Stripe flow structure, CSS.

## Run locally

Start the backend.

```bash
cd server
cp src/main/resources/application-example.properties src/main/resources/application.properties
./mvnw spring-boot:run
```

Start the frontend.

```bash
cd client
npm install
npm start
```

Run backend tests.

```bash
cd server
./mvnw test
```

Build the frontend.

```bash
cd client
npm run build
```

## Hiring signal

This is the strongest full stack project in the profile. It shows how Gokhan approaches software for operations: model the workflow, organize the data, build the interface, connect the backend, and keep the system understandable for future improvement.
