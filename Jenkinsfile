pipeline {
    agent any
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
            }
        }
        stage('build') {
            steps {
                sh 'sudo apt install npm'
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