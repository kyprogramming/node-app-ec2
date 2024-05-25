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
                    sh 'usermod -aG docker $USER'
                    sh 'systemctl restart docker'
                    sh 'ls -l /var/run/docker.sock'
                    sh 'sudo chown root:docker /var/run/docker.sock'
                    sh 'sudo chmod 660 /var/run/docker.sock'
                    sh 'sudo systemctl restart docker'
                    sh 'docker ps'
                    sh 'docker build -t my-node-app .'
                }
            }
        }
    }
}