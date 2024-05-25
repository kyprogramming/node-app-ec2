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
                    sh 'sudo usermod -aG docker jenkins'
                    sh 'sudo service docker start'
                    sh 'sudo systemctl start docker'
                    sh 'sudo service docker status'
                    sh 'docker inspect -f . docker:latest'
                }
            }
        }
    }
}