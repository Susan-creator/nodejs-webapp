# Node.js Web Application with Automated CI/CD Deployment

## Overview

This is a simple Node.js web application that includes a fully automated CI/CD pipeline using GitHub Actions. The pipeline performs the following tasks:

Runs unit tests to ensure code quality

Performs security scanning using SonarQube (Self-Hosted)

Builds and pushes a Docker image to DockerHub

Deploys the application to an AWS EC2 instance

## Features
- **Express.js Web Server**
- **Unit Testing with Jest & Supertest**
- **Security Scanning with SonarQube**
- **Dockerized Application**
- **CI/CD Pipeline with GitHub Actions**
- **Automated Deployment to AWS EC2**

## Project Structure

nodejs-webapp/
│── src/
│   ├── app.js          # Main application file
│── tests/
│   ├── app.test.js     # Unit tests
│── .github/workflows/
│   ├── deploy.yml      # GitHub Actions workflow for CI/CD
│── Dockerfile          # Docker configuration
│── package.json        # Node.js dependencies & scripts
│── README.md           # Project documentation

## Prerequisites
- **Node.js 18+**
- **Docker installed**
- **GitHub Actions (Configured in this repo)**
- **SonarQube (Self-Hosted) running on an EC2 instance**
- **AWS EC2 Instance set up for deployment**
- **DockerHub Account for storing images**

## Installation & Setup
1. Clone the repository:
   git clone https://github.com/Susan-creator/nodejs-webapp.git
   cd nodejs-webapp

2. Install dependencies:
   npm install

3. Run the application:
   npm start

4. Open the application in your browser:
   http://localhost:3000

## Running Tests
To run unit tests:
npm test

##  SonarQube Security Scanning

The pipeline integrates SonarQube to perform static code analysis.

SonarQube is hosted on an AWS EC2 instance.

- name: Run SonarQube Scanner
    run: |
      npm install -g sonarqube-scanner
      sonar-scanner \
        -Dsonar.projectKey=my-nodejs-app \
        -Dsonar.sources=. \
        -Dsonar.host.url=http://your-ec2-public-ip:9000 \
        -Dsonar.login=${{ secrets.SONAR_TOKEN }}

## Docker Usage
### Build and Run Locally
1. Build the Docker image:
   docker build -t myapp:latest .

2. Run the container:
   docker run -p 3000:3000 myapp:latest

## CI/CD Pipeline
This project includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that:
1. Runs unit tests on every push to `main`
2. Builds and pushes the Docker image to Docker Hub
3. Deploys the updated application to an AWS EC2 instance

### Deployment Steps
1. Commit & push changes:
   git add .
   git commit -m "New feature added"
   git push origin main

2. GitHub Actions will automatically test, build, and deploy the application.

## Environment Variables & Secrets
Set the following **GitHub Secrets**:
| Secret Name        | Value (Example)          |
|--------------------|------------------------- |
| `DOCKER_USERNAME`  | Your Docker Hub username |
| `DOCKER_PASSWORD`  | Your Docker Hub password |
| `EC2_HOST`         | (EC2 Public IP)          |
| `SSH_PRIVATE_KEY`  | Your EC2 SSH Private Key
  'SONAR_TOKEN	        Your SonarQube API Token |


## Author
[Owoicho Susan] - DevOps Engineer

