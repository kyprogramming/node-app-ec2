pipeline {
    agent any
    tools {
        nodejs 'NodeJS'
        // docker 'Docker'
        dockerTool 'Docker'
        // git 'Git'
    } 
    // agent {
    //     docker {
    //         image 'docker:19.03.12' // Use a Docker image with Docker CLI installed
    //         args '--privileged -v /var/run/docker.sock:/var/run/docker.sock' // Mount Docker socket
    //     }
    // }
    stages {
        stage('Build Docker Image') {
            steps {
                script {
                    // Build Docker image
                    sh 'docker build -t my-node-app .'
                }
            }
        }
    }
}