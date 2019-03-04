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
                   sshPublisher(publishers: [sshPublisherDesc(configName: 'andhikahs.tech', transfers: [sshTransfer(cleanRemote: false, excludes: '', execCommand: 'rm -r server-config/docker/nginx/development/staging/*', execTimeout: 120000, flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: '[, ]+', remoteDirectory: 'staging/', remoteDirectorySDF: false, removePrefix: 'build', sourceFiles: 'build/**/'), sshTransfer(cleanRemote: false, excludes: '', execCommand: '', execTimeout: 120000, flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: '[, ]+', remoteDirectory: 'staging/', remoteDirectorySDF: false, removePrefix: 'build', sourceFiles: 'build/**/')], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: false)]) 
                }
            }
        }
}