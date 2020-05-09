---
title: 'How to Grant Access to the Kubernetes API'
description: 'Learn how to Grant Access to the Kubernetes API.'
tags: ['code', 'kubernetes', 'k8s', 'access']
image: '/contents/article/how-to-grant-access-to-k8s-api.png?v1'
publishedAt: '2020-05-09T14:46:10.915Z'
updatedAt:
---

By default no access is granted to applications in Kubernetes. So we have to explicitly allow access to the parts of the API that your applications need.

Kubernetes includes a built-in role-based access control (RBAC) mechanism that enables you to configure specific sets of permissions that define how a given user (or group of users) can interact with any Kubernetes object in a specific Namespace of your cluster.

The RBAC API declares four kinds of Kubernetes object: Role, ClusterRole, RoleBinding and ClusterRoleBinding. In this article, I'll focus on Role and RoleBinding.

# How can we grant access to the Kubernetes API?

Kubernetes provides two resources that control the access to the API:

* Role: specifies what access is granted (set of permissions). When we create a Role, we need to specify the Namespace it belongs in.
* RoleBinding: specifies who the Role applies to (links a Role to subjects). 

# Create a Role

Here is a yaml configuration file you can use to create a `Role` that let us list the pods and get information on a particular pod:

```yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  name: my-role
  namespace: my-namespace
  labels:
    app: my-rbac-app
rules:
- apiGroups: [""] # "" indicates the core API group
  resources: ["pods"]
  verbs: ["get", "list"] # verbs to act on the that resource
```

A Role in isolation doesn't do anything until we bind it with a RoleBinding, so let's do that in the next step.

# Create a RoleBinding

Here is a yaml configuration file you can use to create a `RoleBinding` that give this role ("my-role") to all service accounts in the default namespace, meaning that all pods will have access to these APIs:

```yaml
apiVersion: rbac.authorization.k8s.io/v1
# This role binding allows "jane" to read pods in "my-namespace" namespace.
# You need to already have a Role named "my-role" in that namespace.
kind: RoleBinding
metadata:
  name: my-rolebinding
  namespace: my-namespace
  labels:
    app: my-rbac-app
subjects:
# You can specify more than one "subject"
- kind: Group
  name: system:serviceaccounts # "name" is case sensitive
  apiGroup: rbac.authorization.k8s.io
  namespace: my-namespace
roleRef:
  # "roleRef" specifies the binding to a Role
  kind: Role #this must be Role
  name: my-role # this must match the name of the Role you wish to bind to
  apiGroup: ""
```

# Create a Service Account

The best practice in security is to give as few permissions as possible. Kubernetes recommends to grant a role to an application-specific service account. This requires the application to specify a `serviceAccountName` in its pod spec and for the service account to be created.

Here is a yaml configuration file you can use to create a basic `ServiceAccount`:

```yaml
apiVersion: v1
kind: ServiceAccount
metadata:
  name: my-service-account
  namespace: my-namespace
  labels:
    app: my-rbac-app
```

We can start a pod with a `ServiceAccount` by adding that to it's spec definition:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-deployment
  namespace: my-namespace
  labels:
    app: my-app
    rbac: my-service-account
spec:
  replicas: 1
  selector:
    matchLabels:
      app: my-app
      namespace: my-namespace
      rbac: my-service-account
  template:
    metadata:
      labels:
        app: my-app
        namespace: my-namespace
        rbac: my-service-account
    spec:
      serviceAccountName: my-service-account
      containers:
        - name: my-container
          image: nginx:1.7.9
```

In the pod spec you can see `serviceAccountName: my-service-account`. The pod will be run as this `ServiceAccount` and all containers started from it will be running under that `ServiceAccount`.

Last step is to apply all yaml files in the repository:

```bash
$ kubectl apply -f my-role.yaml -f my-rolebinding.yaml -f my-serviceaccount.yaml -f my-deployment.yaml -n my-namespace
```

For more information related to RBAC Authorization, please check the [Kubernetes documentation](https://kubernetes.io/docs/reference/access-authn-authz/rbac/).
