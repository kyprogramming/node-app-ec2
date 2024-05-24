    pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                // Checkout source code from GitHub repository
                git 'https://github.com/kyprogramming/node-app-ec2.git'
            }
        }
        stage('Build') {
            steps {
                // Install dependencies and build Node.js application
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                // Run tests (if any)
                sh 'npm test'
            }
        }
        stage('Dockerize') {
            steps {
                // Build Docker image
                script {
                    docker.build('yourusername/node-app')
                }
            }
        }
        stage('Deploy') {
            steps {
                // Deploy Docker container (e.g., using Docker Compose or Kubernetes)
                // Example: docker-compose up -d
                sh 'docker-compose up -d'
            }
        }
    }
}
