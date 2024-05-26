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



Just run this code step by step it will 

sudo apt update

sudo apt install openjdk-17-jre

java -version
 
curl -fsSL https://pkg.jenkins.io/debian-stable/jenkins.io-2023.key | sudo tee \
  /usr/share/keyrings/jenkins-keyring.asc > /dev/null
echo deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc] \
  https://pkg.jenkins.io/debian-stable binary/ | sudo tee \
  /etc/apt/sources.list.d/jenkins.list > /dev/null

sudo apt-get update

sudo apt-get install jenkins

sudo systemctl start jenkins.service

sudo systemctl status jenkins



http://13.50.226.61:8080/