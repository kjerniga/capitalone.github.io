---
layout: post
title: "Vertical Slicing - Some Practical Ideas"
date: 2016-04-13 16:30:00
author: Kumar Manickavasagam
tags: [Programming, Scrum, Agile]
category: blog
excerpt: In agile development, sizing & slicing a story is important in delivering business value while achieving development goals such as continuous integration, deployment, and testing. If a story is too large then the team runs the risk of not completing the story within the current sprint. If a story is too small, tangible results cannot be demonstrated.
images:
  whiteboard: /assets/posts/vertical-slicing/whiteboard.jpeg
---

[![Whiteboard]({{ site.baseurl | append: page.images.whiteboard }})]({{ site.baseurl | append: page.images.whiteboard }})

In agile development, sizing & slicing a story is important in delivering business value while achieving development goals such as continuous integration, deployment, and testing. If a story is too large then the team runs the risk of not completing the story within the current sprint. If a story is too small, tangible results cannot be demonstrated.

<!--more-->

Here at Capital One we use agile methodology in developing our software applications and operational processes. For the last two years I have lead a team of six engineers using agile to deliver several customer-facing features. In this article, I’ll give my perspective on vertical slicing and review some of the principles and ideas my team has been following.

We’ll be using the example of developing a web application and walk through some of the ideas supporting vertical slicing in software development.

## Who Wants To Eat Just The Icing?

A multilayered cake is best enjoyed if one can taste every layer in a single slice. Who wants to eat just the icing? Similarly, user stories contain multiple layers and each one contributes to the fulfillment of business requirements. For example, let’s say you have a fully developed web application that offers great customer experience and serves millions of users. What if this application has no audit logs? Would you be able to determine the effectiveness of your application across that wide of a user base?

On the other hand, what if your application is a pilot, serves a small set of customers, but has all the necessary layers (audit logs in our example) to provide a solid feedback loop for fine tuning the application or fixing nuances before a big bang roll-out? If this sounds good to you, how do you go about slicing your stories correctly so you’re getting more than just a mouthful of icing?

## Project Context

Recently my team delivered a self-service feature that allowed our customers to reset their online profile password. This is a simple application that verifies a customer’s data, challenges the user with a couple of security questions, resets their password, and sends them an email confirmation. We will review how the principles of vertical slicing applied to this development context.

### Stand Up The Page

If you’re standing up new page(s) for the application, make them available before the supporting validations and business logic. This helps the Product Owner see what’s coming and how it aligns with the overall vision. In the above example, we stood up the pages to collect customer data as a first step without any detailed validations. This helped us in many ways, most notable of them were:

#### Align with Product Owner’s vision

Since the Product Owner could see the page layout early in the cycle, it became easier for the team to incorporate product management suggestions and tweaks.

#### Get a head start on test automation

With the application pages up and running, our test automation engineers were able to write scripts against the page fields and objects. This gave them a great jumpstart on the development process.

Since pages at this stage most likely lack validations, “standing up the page” can be story #1 for your process. You will build on top of this page in subsequent smaller chunked stories.

### Client Side And Server Side Validations

For forms, it is normal that some validations are handled on the client-side (for example mandatory fields) and some others on the server-side. Here is the strategy we applied to handle validations in discrete stories – break them down and use one story to complete client-side validations and another story to complete server-side validations.

In our use case, the server-side validations required some back end services that were not available when the skeleton application was first “stood up.” Because of this, completing the client-side validations before the server-side validations helped the team visualize the placement of error messages on the web page. This gave the Product Owner early feedback so decisions could be made regarding location relative to other page components, as well as insight into their effectiveness from an end user’s perspective.

For your projects, you may choose to validate some fields client-side and some server-side. You may also choose to handle these stories at different sprints, or within the same sprint, given complexity of your application. Regardless of the sequencing, when those stories are complete, your application is ready from validations stand-point.

### Back Button/Page Refresh And Other Atypical User Interactions

These are not normal user navigations but more of negative testing situation. If the form is submitted again through page refresh, how does the back end handle it? If the user pushes the back button, will the content from the previous page display correctly? Will the user still be in a secure session? Should the application log the user out?

As you can see, these are some atypical user navigations that could potentially disrupt the application behavior. Having a separate story to handle these unique cases helps harden the application. In the example above, on pages deep inside navigation, our application logged the user out if the back button was pushed; whereas in early navigation the user was able to go back and made edits without needing to log back in. With this focus lens on, we caught several behavioral anomalies which otherwise would not have been caught if we’d sliced our story differently.

For your application, defining the application behavior for such use cases and individually testing them can greatly enhance the resiliency of the application.

### Cross Browser And Device Compatibility

You now have a functional application that works well on the major, popular browsers but does not render well on some older versions or devices with unique form factors. At Capital One, we aim to reach the widest possible customer base and make applications that work across the full spectrum of devices and browsers (to a reasonable extent of course, IE8 any one?)

However, this doesn’t need to weigh on you during the initial phases of development. With small changes we were able to address the quirkiness of certain devices and browsers (Yes, IE8 was one of them) and reached the targeted global audience.

The important factor is the ability to focus through a discrete story and address “quirks” later in the development process. For your project, you may even choose not to serve some combinations of browsers/devices for your initial launch. The decision is yours, but the key is to create a story that captures the work discretely.

### Accessibility Standards

In our example, we were building features on top of a legacy application so testing for accessibility was an important milestone for project delivery. This helped us get an early read on accessibility to assess the impacts and work ahead of us. The strategy we followed was to run functional and accessibility tests in parallel early on in the project cycle to give us time to react to any deficiencies discovered.

### Logging Requirements

Generally, most application will have logging requirements. And not just developer logs but audit logs that help generate operational metrics. In our project, we set up the application to write audit logs into an operational table where the analytics team would pick up records through a nightly batch script. While the analytics team engaged with the project later in the cycle, we were ready to deploy a basic version of the application onto the QA environment much earlier than the analytics team could develop the appropriate batch scripts.

We were faced with two options – either to delay the initial deployment until the batching scripts were ready or to go ahead with audit logging turned off. As there is a lot of value in deploying an application early to get a head start on testing, we went with the latter option. As a result, our test engineers were able to test the application while the development team worked with the analytics team to turn on the feature.

So, what is the key take-away? Do not wait for this feature to delay your initial deployment schedule. This story here will capture the work.

### Middleware/Integration Services

In some cases, your application may need data from multiple back ends. If this is so, the approach that worked best for us was to ‘phase’ the back end calls. In our project example, we had to make several invocations to the database and a couple calls to external APIs. One strategy that worked was to first code for the “happy path” scenarios. My team first wrote code to handle the success responses from the APIs, then followed up with additional code to handle error conditions.

From a web application stand point, it can get really interesting if the API you are utilizing is being developed concurrently (either by your team or by a different team) with your own application. The point to push for here is to have a basic version of the service available early on so you can integrate with it sooner rather than later.

## Conclusion

The following picture illustrates the workflow from early in the cycle to the point where it’s ready for production. Each box lists the criteria that are met before the team can declare “Done.” It also represents the code that is “ready” to move onto the next phase.

In this article I reviewed some ideas on how to go about splitting stories to not only give incremental business value but also achieve development goals such as continuous integration, deployment, and testing. We talked about right sizing stories so the team can finish them on sprint while demonstrating tangible results. While far from a comprehensive deep-dive on the topic, hopefully this will help you implement vertical slicing into your own project flow.
