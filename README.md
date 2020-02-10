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

## How to check app in cluster
```
kubectl expose pod helloworld --type=NodePort --name=helloworld-service
minikube service helloworld-service --url
```
Then using url that you got ping server with browser / curl command / Postman / etc.
## Docker Hub image link
[irynalian/kubernetes](https://hub.docker.com/r/irynalian/kubernetes)
