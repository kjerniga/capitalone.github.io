---
layout: redirected
title: "Delivering Microservices for Enterprise with DevOps"
date: 2016-06-01 13:15:00
author: Gnanendra Dathathreya
tags: [Microservices, API, DevOps, Cloud]
category: blog
excerpt: It is an exciting time to work in Capital One’s Technology Department as we’re utilizing open source software and emergent cloud technologies to build great digital products and a world-class developer experience. As an Architect, I work with development teams to help realize next-gen architectures such as microservices, cloud-native apps, and DevOps.
images:
  containers: /assets/posts/delivering-microservices-for-enterprise/containers.png
  pipeline: /assets/posts/delivering-microservices-for-enterprise/pipeline.png
  automation: /assets/posts/delivering-microservices-for-enterprise/automation.png
redirect_to: https://developer.capitalone.com/blog-post/delivering-microservices-for-enterprise-with-devops/?io=true
---

[![Shipping Containers]({{ site.baseurl | append: page.images.containers }})]({{ site.baseurl | append: page.images.containers }})

It is an exciting time to work in Capital One’s Technology Department as we’re utilizing open source software and emergent cloud technologies to build great digital products and a world-class developer experience. As an Architect, I work with development teams to help realize next-gen architectures such as microservices, cloud-native apps, and DevOps.

About a year ago, my team embarked on a new microservices architecture utilizing our advanced API development practices. Capital One already had API coding frameworks, hundreds of APIs in production, and had even hosted several API summits. To advance microservices adoption, we had to clearly describe the characteristics of our microservices, how they compared with existing APIs, and showcase the value proposition by developing several proofs of concepts.

The timing for Capital One to fully leverage cloud technologies couldn’t be better for advancing microservices architecture adoption.

## Microservices Characteristics

Our first step in this process was to define quantifiable microservices characteristics and start drawing comparisons with our API practices for adopting microservices architecture. The microservices characteristics are:

### 1. Microservices are small and focus on doing one thing well

Capital One’s RESTful API ontology practices and Domain Driven Design (DDD) principles keep the scope of the service small. For Capital One, the number of lines of code is secondary to the methods for determining the scope of a microservice. What matters is that functionality is limited in scope.

### 2. Microservices run in their own containers

An app server typically runs many API services resulting in a monolithic app server. A single faulty service can bring down the entire app server and all the services running on it. Microservice differs in that each service runs in its own container.

### 3. Microservices own their own data

Microservices own their data either on an individual database or within a partition in a larger database. This differs from APIs where a large database is shared between multiple APIs. In microservices architecture, data access happens through the microservice API that owns the data. Using cloud technologies allows for leveraging managed databases, making it operationally possible for each microservice to have its own database.

### 4. Microservices communicates via language-agnostic APIs

Capital One’s practice of using RESTful APIs with JSON payloads align with microservices architecture.

### 5. Microservices use events to propagate data changes to other services

Microservices leverage messaging and event-driven architecture for sharing data between microservices. Async events via inter-service messaging bus promote scalability and fault tolerance.

### 6. Microservices are independently deployable and scalable with full automation

As part of the microservices adoption journey, Capital One has developed automation tools for creating cloud infrastructure stacks, building and deploying microservices, and scaling based on the usage.

## DDD and DevOps  - Two Sides of the Microservices Coin

Domain Driven Design and API ontology practices help in designing the scope and size of microservices. [Eric Evans’ Domain Driven Design](https://domainlanguage.com/ddd/#https://domainlanguage.com/ddd/) book is an excellent reference for decomposing an application domain into aggregates that can form the basis for the scope of microservices. While we do not follow the entirety of his recommendations, we do believe in the importance of decomposing applications and integrate that into our architecture.

Part of creating our microservices architecture involved developing infrastructure automation, container management solutions, and a DevOps pipeline for our microservices. We see containers at different abstraction levels like Virtual Machines, JVM, and Docker Container and use them as applicable. Docker and container management solutions increases infrastructure resource utilization, speeds up development, and decouples app layer from infrastructure.

Within our Architecture team, we have been working with several internal customers to pilot DDD principles for microservices and container management solutions for microservices DevOps pipeline. These pilots promise to change how many of our systems are developed and implemented.

## Tools Change, Focus on DevOps Pipeline Capabilities Instead

In our miscroservices pilot we focused on the capabilities of our microservices DevOps pipeline components and developed an operationally simple solution for each component. Components are loosely coupled via APIs and are built for replacement.

Our DevOps pipeline components for microservices include Source Code Management (SCM), Build Server, Code Repo, Image Repo, Cluster Manager, Container Scheduler, Dynamic Service Discovery, Software Load Balancer and Cloud Load Balancer.

[![DevOps Pipeline]({{ site.baseurl | append: page.images.pipeline }})]({{ site.baseurl | append: page.images.pipeline }})

As shown above, the stack includes Github for SCM, Jenkins for Build, Nexus for Code Repo, Docker Registry for Image Repo that are our standard enterprise DevOps tooling.

Docker packages microservices that can be run as software containers on any Linux machine. But containers just by themselves are not that useful. It is this DevOps pipeline along with our Container Management Solution that delivers microservices at enterprise scale.

Our team experimented with several open source and cloud based Cluster Manager and Container Scheduler Solutions. Each of these solutions has a great set of features and comes with different levels of operational complexity.

Based on our pilot results, internal teams started adopting cloud based container orchestration solution for operational simplicity. We also have teams running open source based container orchestration solutions.

We use Consul for dynamic service discovery. Nginx is used as a reverse proxy that gets dynamically configured with Docker container end points via Consul Template.

Our goal is to build a solution for each component in the pipeline knowing a better solution would replace that later. When that happens, it would be a simple swap of that component without impacting the whole pipeline.

## Automation accelerates adoption

Capital One is a federated organization with a “you build it, you own it” culture that provides autonomy and speed for delivery teams. We will not run one big cluster for the entire enterprise. In order for federated teams to run their microservices in their own stack we needed the ability to automate container management stack creation.

To achieve this, we developed push button automation tools using Hashicorp’s Terraform for container stack creation. Our automation tools create highly available Cloud Compute Cluster, Consul cluster for Service Discovery, and other required system components.

[![Push Button Automation]({{ site.baseurl | append: page.images.automation }})]({{ site.baseurl | append: page.images.automation }})

Our federated teams use these automation tools to create container stacks providing a parameter file as input. Parameter file capture configuration information required to create the stack in the cloud infrastructure.

Developing automation tools for creating a highly available, scalable and fault tolerant distributed container stack was both challenging and exciting for our team. To quote an example, we encountered unstable consul cluster with flapping leader election when we ran 50 plus Linux VMs with 300 plus containers for 60 services. Consul’s read pressure on the watch items from a large number of consul templates was causing the instability. We redesigned our Consul Templates to reduce the watch pressure and remediate the issue.

## Exciting Future Ahead

Developing apps as a collection of microservices and running them as containers increases resource utilization and reduces our cloud cost. We currently leverage microservices architecture when developing new apps in the cloud and when moving large on-prem apps to the cloud by incrementally decomposing them as microservices. Our engineering and automation work in microservices and container management space is accelerating our cloud journey and improving our developer experience.
