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
    }   
    stages {
        stage('checkout') {
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
    }   
}