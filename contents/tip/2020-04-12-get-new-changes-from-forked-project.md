---
title: 'How to Get Changes from Forked Project'
description: 'Learn how to get changes committed to a project you forked.'
tags: ['git', 'code', 'fork']
publishedAt: '2020-04-12T12:44:00.915Z'
updatedAt:
---

## 1. Clone your forked project

This is only important if it's not yet in your workspace

```bash
git clone git@github.com:YOUR-USERNAME/YOUR-FORKED-PROJECT.git
```

## 2. Add remote from original repository in your forked one

```bash
cd into/cloned/forked-project
git remote add upstream git://github.com/ORIGINAL-DEV-USERNAME/PROJECT-YOU-FORKED-FROM.git
git fetch upstream
```

## 3. Updating your forked project from the original one to have their changes

```bash
git pull upstream master
```

## 4. Solve conflicts (if any)

## 5. Finally push changes

```bash
git push
```
