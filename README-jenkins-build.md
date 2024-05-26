# Build and push image to the Docker hub

Step by step build process in jenkins to push image to docker hub

## Step 1: Build Jenkins  Image
Install node version manager (nvm) by typing the following at the command line.

```bash
docker build -t custom-jenkins-docker .
docker run -d -p 8080:8080 -p 50000:50000 --name jenkins-docker --group-add docker -v /var/run/docker.sock:/var/run/docker.sock custom-jenkins-docker

docker build -t custom-jenkins-2 . --no-cache
docker run -d -p 8080:8080 -p 50000:50000 --name custom-jenkins-container-2 --group-add docker -v /var/run/docker.sock:/var/run/docker.sock custom-jenkins-2
```
