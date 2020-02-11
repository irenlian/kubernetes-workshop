# Kubernetes workshop

Workshop of Kubernetes basics.

[Presentation](https://prezi.com/lusuvicikuiu/kubernetes/)

## How to install

```
git clone git@github.com:irenlian/kubernetes-workshop.git
cd kubernetes-workshop
```

## How to run

```
docker-compose -f docker-compose.yml up
```

## How to deploy

Requirements: [minikube](https://minikube.sigs.k8s.io/docs/start/) and 
[kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/).

```
minikube start
kubectl create -f deploy/app.yml
```
or
```
minikube start
kubectl create -f deploy/deployment.yml
```

## How to check app in cluster
```
kubectl expose pod helloworld --type=NodePort --name=helloworld-service
```
or
```
kubectl create -f deploy/service.yml
```
Then get url to ping server with browser / curl command / Postman / etc.
```
minikube service helloworld-service --url
```
## Docker Hub image link
[irynalian/kubernetes](https://hub.docker.com/r/irynalian/kubernetes)
