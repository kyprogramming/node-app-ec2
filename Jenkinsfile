pipeline {
    agent any
    tools {
        nodejs 'nodejs'
        dockerTool 'docker'
    }
    environment {
        DOCKER_REPO = 'kkyprogramming' 
        DOCKER_IMAGE = 'test-node-app'
        DOCKER_IMAGE_VERSION = '1.0'
        DOCKER_REGISTRY_URL = 'https://hub.docker.com/'
        DOCKER_REGISTRY_CREDENTIALS_ID = 'dockerhub-credentials'

        AWS_ACCESS_KEY_ID     = credentials('aws-access-key-id')
        AWS_SECRET_ACCESS_KEY = credentials('aws-secret-access-key')
        AWS_DEFAULT_REGION    = 'your-aws-region'
        EC2_INSTANCE_ID       = 'your-ec2-instance-id'
        DOCKER_IMAGE_NAME     = 'your-docker-image-name'


        EC2_HOST = 'ec2-13-50-226-61.eu-north-1.compute.amazonaws.com'
        SSH_CREDENTIALS_ID = 'ec2-ssh-key'
        DOCKER_IMAGE = 'your-docker-image:latest'
        CONTAINER_NAME = 'your-container-name'


    }   
    stages {
        stage('checkout-repo') {
            steps {
                checkout scm
            }
        }
         stage('install') {
            steps {
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
            steps {
                script {
                    sh 'docker --version'
                    sh "docker build -t ${env.DOCKER_IMAGE}:${env.DOCKER_IMAGE_VERSION} ."
                }
            }
        }
        stage('docker-image-push') {
            steps {
                withCredentials([usernamePassword(credentialsId: "${env.DOCKER_REGISTRY_CREDENTIALS_ID}", usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
                    // sh 'chown -R $(id -u):$(id -g) $HOME/.docker'
                    sh "docker login -u $DOCKER_USERNAME -p $DOCKER_PASSWORD"
                    sh "docker tag ${env.DOCKER_IMAGE}:${env.DOCKER_IMAGE_VERSION} ${env.DOCKER_REPO}/${env.DOCKER_IMAGE}:${env.DOCKER_IMAGE_VERSION}"
                    sh "docker push ${env.DOCKER_REPO}/${env.DOCKER_IMAGE}:${env.DOCKER_IMAGE_VERSION}"
                    sh "docker logout"
                }
            }
        }
        stage('docker-image-pull') {
            steps {
                script {
                    sh "docker pull ${env.DOCKER_REPO}/${env.DOCKER_IMAGE}:${env.DOCKER_IMAGE_VERSION}"
                }
            }
        }
        // stage('Deploy to EC2') {
        //     steps {
        //         script {
        //             withAWS(credentials: [
        //                 awsAccessKeyId(credentialsId: 'aws-access-key-id', accessKeyVariable: 'AWS_ACCESS_KEY_ID'),
        //                 awsSecretAccessKey(credentialsId: 'aws-secret-access-key', secretKeyVariable: 'AWS_SECRET_ACCESS_KEY')
        //             ], region: AWS_DEFAULT_REGION) {
        //                 sh "docker run -d --rm --name my-container -p 80:80 ${env.DOCKER_IMAGE}:${env.DOCKER_IMAGE_VERSION}"
        //             }
        //         }
        //     }
        // }

    }   
}