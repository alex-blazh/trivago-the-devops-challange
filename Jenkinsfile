pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Build docker images'){
            steps{
                sh './web-app/build_and_push.sh'
            }
        }

        stage('Deploy to DEV environment'){
            steps{
                sh 'docker stack up --compose-file trivago-compose.yml trivago'
            }
        }
    }
}