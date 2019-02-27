pipeline {

  agent {
    //label 'vetsgov-general-purpose'
    dockerfile true
  }

  // $HOME defaults to '/' when not set, which results in:
  //   Error: EACCES: permission denied, mkdir '/.npm'
  // jenkins runs docker using '-w <WORKSPACE>', so '.' points
  // to that WORKSPACE
  environment { HOME = '.' }

  stages {
    stage('Checkout Code') {
      steps {
        checkout scm
      }
    }

    stage('Install npm dependencies') {
      steps {
        sh 'npm install'
      }
    }

    stage('Build static site') {
      steps {
        sh 'bundle install && jekyll build'
      }
    }

    stage('Tar assets and upload to S3') {
      steps {
        script {
          ref = sh(returnStdout: true, script: 'git rev-parse HEAD').trim()
        }
        echo "ref=${ref}"
        echo "GIT_COMMIT={$GIT_COMMIT}"
        sh 'tar -cf _site.tar.bz2 _site/'

        withCredentials([[
          $class:           'UsernamePasswordMultiBinding', 
          credentialsId:    'vetsgov-website-builds-s3-upload',
          usernameVariable: 'AWS_ACCESS_KEY', 
          passwordVariable: 'AWS_SECRET_KEY']]) {
          sh "s3-cli put --acl-public --region us-gov-west-1 _site.tar.bz2 s3://bucket-vagov-design-builds-s3-upload/bill_test_ev/bill_test_filename.tar.bz2"
        }
      }
    }
  }
}