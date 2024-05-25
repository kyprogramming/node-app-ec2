pipeline {
    agent any
    // agent {
    //     docker {
    //         image 'node:latest'
    //         args '-u root:root'  // Use root user to avoid permission issues
    //     }
    // }
    environment {
        DOCKER_IMAGE = 'kkyprogramming/mode-app-ec2:v4'
        DOCKER_CREDENTIALS_ID = 'Jaymataki@123'
    }
    tools {
        nodejs 'NodeJS'
    } 
    // stage('Checkout') {
    //         steps {
    //             git 'https://github.com/kyprogramming/node-app-ec2.git'
    //         }
    // }
    stages {
        stage('Debug1') {
        steps {
            sh 'echo $PATH'
            sh 'node -v'
            sh 'npm -v'
        }
        }
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Te1s1t') {
            steps {
                sh 'npm test'
            }
        }

         stage('Build Docker Image') {
            steps {
                script {
                    docker.build("${env.DOCKER_IMAGE}:${env.BUILD_NUMBER}")
                }
            }
        }
        // stage('Push Docker Image') {
        //     steps {
        //         script {
        //             docker.withRegistry('https://index.docker.io/v1/', env.DOCKER_CREDENTIALS_ID) {
        //                 docker.image("${env.DOCKER_IMAGE}:${env.BUILD_NUMBER}").push()
        //                 docker.image("${env.DOCKER_IMAGE}:${env.BUILD_NUMBER}").push('latest')
        //             }
        //         }
        //     }
        // }
        // stage('Deploy') {
        //     steps {
        //         sh 'docker-compose up -d'
        //     }
        // }
    }
}




// {
//         docker {
//             image 'node:alpine'
//             args '-p 3000:3000'
//         }
//     }

// pipeline {
//   agent any
//   stages {
//     stage('Checkout') {
//       steps {
//         git 'https://github.com/your-repo/your-nodejs-app.git'
//       }
//     }
//     stage('Build') {
//       steps {
//         script {
//           def nodejs = tool name: 'NodeJS 14', type: 'NodeJSInstallation'
//           env.PATH = "${nodejs}/bin:${env.PATH}"
//           sh 'npm install'
//         }
//       }
//     }
//     stage('Test') {
//       steps {
//         sh 'npm test'
//       }
//     }
//     stage('Build Docker Image') {
//       steps {
//         script {
//           docker.build("${env.DOCKER_IMAGE}:${env.BUILD_NUMBER}")
//         }
//       }
//     }
//     stage('Push Docker Image') {
//       steps {
//         script {
//           docker.withRegistry('https://index.docker.io/v1/', 'docker-hub-credentials') {
//             docker.image("${env.DOCKER_IMAGE}:${env.BUILD_NUMBER}").push()
//             docker.image("${env.DOCKER_IMAGE}:${env.BUILD_NUMBER}").push('latest')
//           }
//         }
//       }
//     }
//     stage('Deploy') {
//       steps {
//         script {
//           docker.withRegistry('https://index.docker.io/v1/', 'docker-hub-credentials') {
//             sh 'docker-compose up -d'
//           }
//         }
//       }
//     }
//   }
// }
