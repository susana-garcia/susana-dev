---
title: 'How to Use Secrets in Kubernetes'
description: 'Learn how to use Secrets in Kubernetes with some examples.'
tags: ['code', 'kubernetes', 'k8s', 'secret']
publishedAt: '2020-04-18T10:10:10.915Z'
updatedAt:
---

# Secrets in Kubernetes

Kubernetes Secrets let you store and manage sensitive information like as passwords, OAuth tokens, ssh keys, etc. 

With this article, you'll learn how to use them easily.

# What is a Secret in Kubernetes?

A secret is an object that contains sensitive information like passwords, keys, tokens...

To use it, a Pod needs to reference it:
* As files in a volume mounted on one or more of its containers.
* By the `kubelet` when pulling images for the Pod.

# Optimal way to create and mount a Secret

For me the easiest way to use Secrets is defining a YAML and reference them using `envFrom/secretRef`.

1. Here is a yaml configuration file you can use to create a Secret that holds a username and a password:

```yaml
apiVersion: v1
kind: Secret
metadata:
  name: my-secret
data:
  username: my-username
  password: vdg7JbgkdnRnN03e
```

2. Reference the Secret (my-secret-pod.yaml):

```yaml
kind: Pod
apiVersion: v1
metadata:
  name: my-secret-pod
  namespace: my-namespace
spec:
  containers:
    - name: my-container
      image: nginx:1.7.9
      envFrom:
        - secretRef:
            name: my-secret
```

3. Then you just need to create the Pod:

```bash
$ kubectl apply -f my-secret-pod.yaml -n my-namespace
```

For more information related to Secrets, please check the [Kubernetes documentation](https://kubernetes.io/docs/tasks/inject-data-application/distribute-credentials-secure/).
