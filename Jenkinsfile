pipeline{
    agent any
    tools {nodejs "node"}
        stages{
            stage('Preparing Environment'){
                steps{
                    git branch:'development', url:'https://github.com/vanestorz/my-portofolio'
                    sh 'npm install'
                }
            }
            stage('Build'){
                steps{
                    sh 'npm run build'
                }
            }
            stage('Deployment'){
                steps{
                    
                }
            }
        }
}