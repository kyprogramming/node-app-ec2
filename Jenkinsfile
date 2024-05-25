pipeline {
    agent {
        docker {
            image 'docker:latest' // Use an image with Docker installed
            args '--privileged -v /var/run/docker.sock:/var/run/docker.sock' // Mount Docker socket
        }
    }
    stages {
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t my-image .'
            }
        }
    }
}