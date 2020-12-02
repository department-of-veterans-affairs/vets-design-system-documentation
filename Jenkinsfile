pipeline {

  agent {
    dockerfile {
      label 'vetsgov-general-purpose'
    }
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
        sh 'bundle install'
      }
    }

    stage('Build static site for production') {
      steps {
        sh 'npm run build'
        sh 'JEKYLL_ENV=production bundle exec jekyll build'
      }
    }

    stage('Tar assets and upload to S3') {
      when {
        expression { env.BRANCH_NAME == 'master' }
      }
      steps {
        sh 'tar -C _site -cf _site.tar.bz2 .'

        withCredentials([[
          $class:           'UsernamePasswordMultiBinding', 
          credentialsId:    'vetsgov-website-builds-s3-upload',
          usernameVariable: 'AWS_ACCESS_KEY', 
          passwordVariable: 'AWS_SECRET_KEY']]) {
          sh "s3-cli put --acl-public --region us-gov-west-1 _site.tar.bz2 s3://bucket-vagov-design-builds-s3-upload/$GIT_COMMIT/site.tar.bz2"
        }
      }
    }

  }
}
