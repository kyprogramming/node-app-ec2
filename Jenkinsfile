    pipeline {
    agent {
        docker{
            image: 'node:latest'
            args: '-p 3000:3000'
        }
    }
    stages {
       
        stage('Build') {
            steps {
                // Install dependencies and build Node.js application
                sh 'npm install'
            }
        }
    }
}
