FROM jekyll/builder:3.8

# add docker user 'jekyll' to the host jenkins group
# RUN groupadd --gid 504 jenkins && usermod -a -G jenkins jekyll

# RUN npm config set unsafe-perm true && npm install -g s3-cli

RUN apk update && apk add ca-certificates && rm -rf /var/cache/apk/*
ADD *.crt /usr/local/share/ca-certificates/
RUN update-ca-certificates

WORKDIR /srv/jekyll