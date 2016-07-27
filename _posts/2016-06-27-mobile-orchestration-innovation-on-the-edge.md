---
layout: redirected
title: "Mobile Orchestration – Innovation on the Edge"
date: 2016-06-27 14:05:00
author: Andrew Rosenbaum
tags: [Mobile App Development, API]
category: blog
excerpt: The growth of mobile apps as a primary conduit to interact with users has greatly changed how developers build and deliver software. With an active mobile user base of millions of customers, providing a top-notch mobile user experience is an absolute expectation here at Capital One. Yes, we’re one of the top financial institutions in the country, but our online presence means we function like a top digital and technology company as well.
images:
  banner: /assets/posts/mobile-orchestration-innovation-on-the-edge/mobile-banner.png
redirect_to: https://developer.capitalone.com/blog-post/mobile-orchestration-innovation-on-the-edge/?io=true
---

[![Mobile Orchestration Banner]({{ site.baseurl | append: page.images.banner }})]({{ site.baseurl | append: page.images.banner }})

The growth of mobile apps as a primary conduit to interact with users has greatly changed how developers build and deliver software. With an active mobile user base of millions of customers, providing a top-notch mobile user experience is an absolute expectation here at Capital One. Yes, we’re one of the top financial institutions in the country, but our online presence means we function like a top digital and technology company as well.

In fact, this drives us to continually innovate when it comes to how our users interact with us on their mobile devices. This drive to change the user experience also drives how we approach mobile development in general. With the App Store review process, version disparity, and hardware divergence, it is becoming more and more challenging to ship features and updates following a rapid, continuous delivery model. In order to offset this change, more and more business logic is moving to server side code in order to regain control of the delivery experience.  

*Mobile Orchestration provides services to extend the functionality of our existing APIs, deliver new capabilities specific for our mobile users, and assist our engineering teams in overall feature delivery.*

By providing optimized, user experience-focused APIs, we are able to combine the right data with the best user interface for our customers. This allows our customers to consume their financial data in new ways, providing them with more insight into how they spend or save their hard earned money.  

As developers, mobile orchestration allows us to quickly create new “data” experiences in our APIs so we can help deliver new “user” experiences to our customers. By getting their feedback quickly, we can create an active feedback loop between engineers and customers, leading to newer and better “user” experiences. This also reduces the amount of extraneous work and code in our native apps, moving that logic to the server so we can re-use it for other apps, and stop re-inventing the wheel with each new product.

The Mobile Orchestration Team at Capital One extends our native apps to our servers by building off of three main pillars - *the Mobile Edge, Experience APIs, and Mobile Platform Services*.  Our approach creates a high degree of consistency in how we implement new services; taking into account best practices to ensure that, while we enforce our standards, we’re also enforcing standards that make sense.  

The strength of our pillars is derived from the adoption of several projects from the Netflix OSS Center. [Zuul](https://github.com/Netflix/zuul/wiki) (yes, from the movie Ghostbusters), [Hystrix](https://github.com/Netflix/Hystrix/wiki/How-it-Works), [Ribbon](https://github.com/Netflix/ribbon) and [Eureka](https://github.com/Netflix/eureka), are examples of where we have leveraged open source projects to help define and enforce our standards within Mobile Orchestration.

## The Mobile Edge
This is where the “front-door” concept of mobile orchestration lies. Here we provide the entry point for our native client apps to access data over HTTPS using Netflix’s Zuul OSS Project.  At the “edge” we provide the routing and filters specific to each client and app. Each production app is provided with it’s own Mobile Edge, which allows for optimal flexibility in shipping client specific changes, while eliminating potential impacts on other apps.  

For example, using mobile orchestration we can ship a new server-side change for Capital One Mobile App for iPhone and be sure that it will not impact other clients. We can also customize the interaction between each of our mobile apps and it’s own “front-door.”

Providing these custom “edges” ensures rapid implementation and deployment of critical fixes, or customized flows, that would otherwise need to wait for an app store submission or backend dependency deployment.

## The Micro Experience and Experience APIs
The other big component of mobile orchestration lies in the ability to deliver customized APIs for client app consumption. These APIs do not reflect the resources or data models, but are a direct tie-in to the user experience flow the app is creating. Hence, the name Experience API, or xAPI.   

In order to optimize how we build and ship these xAPIs, we coined the concept of a *Micro Experience*. A micro experience essentially combines multiple related xAPIs into a single deployable unit. You can think of a micro experience as something like “Redeem Rewards”, and each of the xAPIs would be an aspect of the flow making up the rewards experience (GET rewards balance, POST redemption, GET eligible transactions, etc).  

While micro services are all the rage right now, the micro __experience__ is an adapted solution that allows us to better define the services built by mobile orchestration. It describes a decoupled and *user experience*-focused architecture (rather than *task* focused micro services).

## Mobile Platform Services
The last piece of the puzzle are the mobile-specific APIs we built as part of our platform. App Authentication, Forced Upgrade, Feature Toggle, Feature Throttle are all examples of APIs we provide as standard features of the platform. These are common implementations of capabilities that have value across all the mobile products we work with.

One huge part of achieving this design has been our partnership with the Capital One DevOps team Mobius. Our desire to *ship early and ship often* doesn’t become reality without the hard work that goes on to build the automation, notifications/monitoring, and infrastructure design that supports the concept of continuous deployment.  

## Mobile Orchestration – Reusable, Agile, Maintainable
Mobile Orchestration is simply an extension of our native apps onto the server.  We provide the reusability, agility, and maintainability of logic that would otherwise be wasted in costly reimplementation; or suffer from delays due to external dependencies. We build to be nimble and fast, with agreed upon standards and open dialogue taking the place of process and formal reviews.
