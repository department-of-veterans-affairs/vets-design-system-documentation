FROM jekyll/builder:3.8

# add docker user 'jekyll' to the host jenkins group
# RUN groupadd --gid 504 jenkins && usermod -a -G jenkins jekyll

RUN apk --no-cache add ca-certificates
ADD *.crt /usr/local/share/ca-certificates/
RUN update-ca-certificates

RUN npm config set unsafe-perm true && npm install -g s3-cli

WORKDIR /srv/jekyll