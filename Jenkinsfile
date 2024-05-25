pipeline {
    agent any

    stages {
        stage('Check Docker Image') {
            steps {
                script {
                    sh 'docker inspect -f . docker:latest'
                }
            }
        }
    }
}