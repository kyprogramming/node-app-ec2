pipeline {
    agent any
    tools {
        NodeJS '22.2.0'
    } 
    stages {
        stage('Example') {
            steps {
                sh 'npm versoin'
            }
        }
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
