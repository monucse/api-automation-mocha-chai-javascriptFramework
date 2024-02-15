pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                deleteDir()
                // Checkout source code from version control
                bat 'git clone https://github.com/monucse/api-automation-mocha-chai-javascriptFramework.git'
            }
        }
        
        stage('Install Dependencies') {
            steps {
                
                dir('api-automation-mocha-chai-javascriptFramework') {
                    // Install Node.js dependencies
                    bat 'npm install'
                }
             
            }
        }
        
        stage('Build') {
            steps {
                dir('api-automation-mocha-chai-javascriptFramework') {
                    // Run Tests
                    bat 'npm run test1'
                }
            }
        }
        
        stage('Test') {
            steps {
                // Run tests
                dir('api-automation-mocha-chai-javascriptFramework') {
                    // Run Tests
                    bat 'npm test'
                }            
            }
        }
        
        stage('Deploy') {
            steps {
                // Example deployment steps, adjust as needed
                echo 'Deployed successfully'
            }
        }
    }   
}
