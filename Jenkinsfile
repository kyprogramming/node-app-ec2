pipeline {
    agent any
     tools {
        nodejs 'nodejs'
        // docker 'Docker'
        dockerTool 'docker'
        // git 'Git'
    }   
    // agent {
    //     docker {
    //         image 'your-docker-image-with-dind'
    //         args '--privileged -v /var/run/docker.sock:/var/run/docker.sock'
    //     }
    // }
     environment {
        DOCKERHUB_CREDENTIALS = credentials('admin') // Replace 'dockerhub-id' with your credentials ID in Jenkins
        DOCKER_IMAGE = 'node-app-jenkins' // Replace with your Docker image name
        DOCKER_REGISTRY = 'kkyprogramming' // Replace with your Docker registry
    }
    stages {
        stage('checkout') {
            steps {
                checkout scm
                sh 'npm install'
            }
        }
        stage('test') {
            steps {
                sh 'npm run test'
            }
        }
        stage('build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('docker-build') {
            // steps {
            //     sh 'docker --version'
            //     sh 'docker build -t node-app .'
            // }
             steps {
                script {
                    dockerImage = docker.build("${DOCKER_REGISTRY}/${DOCKER_IMAGE}:${env.BUILD_NUMBER}")
                }
            }
        }
         stage('Push Docker Image') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', 'DOCKERHUB_CREDENTIALS') {
                        dockerImage.push()
                        dockerImage.push('latest')
                    }
                }
            }
        }
    }
     post {
        always {
            cleanWs()
        }
    }
}
// pipeline {
//     agent any
//     tools {
//         nodejs 'nodejs'
//         // docker 'Docker'
//         dockerTool 'docker'
//         // git 'Git'
//     }   
//     stages {
//         stage('Check Docker Image') {
//             steps {
//                 script {
//                     sh 'docker --version'
//                     sh 'systemctl status docker'
                
//                 }
//             }
//         }
//     }
// }