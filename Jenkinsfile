pipeline {
    agent any
    tools {
        nodejs 'nodejs'
        // docker 'Docker'
        dockerTool 'docker'
        // git 'Git'
    }   
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