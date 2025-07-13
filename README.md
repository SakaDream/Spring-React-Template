# Spring React Template

This is a full-stack monorepo project that includes a React frontend, a Spring Boot backend, a Spring Authorization Server for OAuth2, and a Spring Cloud Gateway.

## Modules

### 1. react-template

This is a React application that serves as the frontend for the project.

**To run:**

```bash
cd react-template
npm install
npm start
```

### 2. spring-authorization-server

This is a Spring Boot application that provides an OAuth2 Authorization Server.

**To run:**

```bash
cd spring-authorization-server
./gradlew bootRun
```

### 3. spring-boot-service-template

This is a Spring Boot application that serves as the main backend service.

**To run:**

```bash
cd spring-boot-service-template
./gradlew bootRun
```

### 4. spring-gateway

This is a Spring Cloud Gateway that acts as a reverse proxy for the backend services.

**To run:**

```bash
cd spring-gateway
./gradlew bootRun
```

## Architecture

The `react-template` frontend communicates with the `spring-boot-service-template` backend through the `spring-gateway`. The `spring-authorization-server` is used to secure the backend services with OAuth2.
