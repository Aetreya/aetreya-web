# Aetreya

## Introduction

Welcome to Aetreya! This is a full-stack web application that have forum discussion as the main feature. This README provides detailed instructions on how to set up and run the application locally for development or testing purposes.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- [Node.js](https://nodejs.org/)
- [Java JDK](https://www.oracle.com/java/technologies/javase-downloads.html)
- [MySQL](https://dev.mysql.com/downloads/mysql/)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Aetreya/aetreya-web.git
   ```

2. Navigate to the project directory:

   ```bash
   cd aetreya-web
   ```

### Database Setup

1. Navigate to the backend directory:

   ```bash
   cd backend
   ```

2. Create the database using query on database.sql

   ```bash
   mysql -u yourdbusername -p < database.sql
   ```

### Frontend Setup

1. Navigate to frontend directory and Install the dependencies

   ```bash
   npm install
   ```

## Running the Application

### Backend

1. Navigate to backend folder then run:

   ```bash
      ./mvnw  spring-boot:run -Dspring-boot.run.jvmArguments="-DDB_URL=jdbc:mysql://localhost:3306/aetreya_restfulapi -DDB_USERNAME=yourdbusername -DDB_PASSWORD=yourdbpassword"
   ```

   change yourdbusername and yourdbpassword with yours.

### Frontend

1. Navigate to frontend folder then run:

   ```bash
     npm run dev
   ```
