FROM jekyll/builder:3.8

# RUN groupadd --gid 504 jenkins && useradd --uid 504 --gid jekyll

RUN groupadd --gid 504 jenkins \
  && usermod -a -G jenkins jekyll

RUN npm config set unsafe-perm true && npm install -g s3-cli

WORKDIR /srv/jekyll