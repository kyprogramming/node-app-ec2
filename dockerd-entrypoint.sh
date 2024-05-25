#!/bin/bash
# Start the Docker daemon
/usr/bin/dockerd &
# Start the Jenkins agent
exec /sbin/tini -- /usr/local/bin/jenkins.sh
