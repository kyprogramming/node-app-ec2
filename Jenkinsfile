pipeline {
    agent any
    tools {
        nodejs 'NodeJS'
        // docker 'Docker'
        dockerTool 'Docker'
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