pipeline {
    agent any
     tools {
        nodejs 'nodejs'
        // docker 'Docker'
        dockerTool 'docker'
        // git 'Git'
    }
    environment {
        DOCKER_IMAGE = 'my-node-app:1.0' // Replace with your Docker image name
        DOCKER_REGISTRY = 'kkyprogramming' // Replace with your Docker registry URL
        DOCKER_REGISTRY_URL = 'https://hub.docker.com/'
        DOCKER_REGISTRY_CREDENTIALS_ID = 'dockerhub-credentials'
    }   
    // agent {
    //     docker {
    //         image 'your-docker-image-with-dind'
    //         args '--privileged -v /var/run/docker.sock:/var/run/docker.sock'
    //     }
    // }
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
            //     sh 'docker build -t my-node-app:1.0 .'
            // }
            steps {
                script {
                    sh 'docker --version'
                    sh 'docker build -t my-node-app:1.0 .'
                }
            }
        }
        stage('Push Docker Image') {
            steps {
                // withCredentials([usernamePassword(credentialsId: 'dockerhub-credentials', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
                //         sh "docker login -u $DOCKER_USERNAME -p $DOCKER_PASSWORD"
                //         // sh "docker tag my-node-app:1.0 kkyprogramming/my-node-app:1.0"
                //         // sh "docker push kkyprogramming/my-node-app:1.0"
                //         sh "docker logout"
                // }

                withCredentials([usernamePassword(credentialsId: "${env.DOCKER_REGISTRY_CREDENTIALS_ID}", usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
                    // sh "docker login -u ${DOCKER_USERNAME} -p ${DOCKER_PASSWORD}"
                    // sh 'echo $DOCKER_PASSWORD'
                    sh 'echo  $DOCKER_REGISTRY_URL'
                    sh 'echo $DOCKER_USERNAME'
                    sh 'echo $DOCKER_PASSWORD'
                    sh 'docker login -u $DOCKER_USERNAME -p $DOCKER_PASSWORD'

                    // dockerImage.push()
                    // dockerImage.push('latest')
                    sh "docker logout"
                }

                // withCredentials([usernamePassword(credentialsId: 'dockerhub-credentials', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
                //     script {
                //         sh "docker login -u ${DOCKER_USERNAME} -p ${DOCKER_PASSWORD} ${DOCKER_REGISTRY}"
                //         dockerImage.push()
                //         dockerImage.push('latest')
                //         sh "docker logout ${DOCKER_REGISTRY}"
                //     }
                // }
            }
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