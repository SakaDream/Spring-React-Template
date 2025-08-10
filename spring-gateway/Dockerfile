# Use Gradle image to build the application
FROM gradle:8.7-jdk21 AS build
WORKDIR /home/gradle/src

COPY gradle gradlew settings.gradle.kts build.gradle.kts ./
COPY src ./src

RUN ./gradlew bootJar --no-daemon

# Run stage
FROM eclipse-temurin:21-jre
WORKDIR /app

COPY --from=build /home/gradle/src/build/libs/*.jar app.jar

EXPOSE 8082
ENTRYPOINT ["java","-jar","/app/app.jar"]
