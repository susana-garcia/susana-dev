---
title: 'How to Use ConfigMaps in Kubernetes'
description: 'Learn how to use ConfigMaps in Kubernetes with some examples.'
tags: ['code', 'kubernetes', 'k8s', 'configmap']
image: 'https://boxboat.com/2018/07/05/gitops-kubernetes-rolling-update-configmap-secret-change/kube-configmap-secret-deployment.png'
publishedAt: '2020-04-13T11:11:11.915Z'
updatedAt: '2020-05-09T14:56:10.915Z'
---

When starting to use a new technology, one of the first questions to answer is how to manage your application's configuration. In the Kubernetes world, that answer is ConfigMaps.

With this article, you'll learn how to use them.

# What is a ConfigMap?

A ConfigMap is a dictionary composed of by a key-value pairs of strings.
It basically stores (public) configuration settings for your code. If you want to store secret configuration settings, you'll need to store them in another manner.

# How ConfigMaps are deployed

1. You have ConfigMap/s for every environment.
2. A ConfigMap is created and added to a Kubernetes cluster.
3. Containers in a Pod reference the ConfigMap to use its values.

# Optimal way to create and mount a ConfigMap

For me the best way to use ConfigMaps is defining a YAML and reference them using `envFrom/configMapRef`.

## Here is an example of a ConfigMap in a YAML file

```yaml
kind: ConfigMap
apiVersion: v1
metadata:
  name: env-vars-configmap
  namespace: my-namespace
data:
  # Configuration values as key-value properties where value is a string
  base_url: https://my.website.dev/
  database_port: "3306"

  # Also you can read those values from variables
  base_url: ${BASE_URL}
  database_port: "${DATABASE_PORT}"

  # Or set as file contents
  file_keys: |
    color.good=purple
    color.bad=yellow
```

To added it to your namespace in the Kubernetes cluster:

```bash
$ kubectl apply -f env-vars-configmap.yaml -n my-namespace
```

Also you can see the values of the environment variables executing:

```bash
$ kubectl get configmap -n my-namespace env-vars-configmap.yaml -o yaml
```

_Tip: this last command is useful when you have errors in the ConfigMap. If you use variables, try replace them with the real values and see which one fails._

## Reference the ConfigMap

Set the `envFrom/configMapRef` in each container to an object containing the list of ConfigMaps you want to include.

```yaml
kind: Pod
apiVersion: v1
metadata:
  name: pod-configmap
  namespace: my-namespace
spec:
  containers:
    - name: my-container
      image: nginx:1.7.9
      envFrom:
        - configMapRef:
            name: env-vars-configmap
```

Attach to the created Pod using:

```bash
$ kubectl exec -it pod-configmap sh
```

Then run `env` and see that all keys are now available as environment variables.

For more information related to ConfigMaps, please check the [Kubernetes documentation](https://kubernetes.io/docs/tasks/configure-pod-container/configure-pod-configmap/).
