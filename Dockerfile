FROM jekyll/builder:3.8

# add docker user 'jekyll' to the host jenkins group
RUN groupadd --gid 504 jenkins && usermod -a -G jenkins jekyll

# allows ssl connections through TIC (npm downloads from github for example)
COPY /etc/pki/ca-trust/source/anchors/dod-eca.pem dod-eca.crt
COPY /etc/pki/ca-trust/source/anchors/VA-Internal-S2-ICA1-v1.pem.pem VA-Internal-S2-ICA1-v1.crt
COPY /etc/pki/ca-trust/source/anchors/VA-Internal-S2-ICA2-v1.pem VA-Internal-S2-ICA2-v1.crt
COPY /etc/pki/ca-trust/source/anchors/VA-Internal-S2-RCA-v1.pem VA-Internal-S2-RCA-v1.crt
COPY /etc/pki/ca-trust/source/anchors/va.pem va.crt

ADD *.crt /usr/local/share/ca-certificates/
RUN update-ca-certificates


RUN npm config set unsafe-perm true && npm install -g s3-cli

WORKDIR /srv/jekyll