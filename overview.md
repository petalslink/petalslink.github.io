---
layout: standard
title: "Petals ESB Overview"
menu: "overview"
---

# Introduction

Petals ESB is an open-source Enterprise Service Bus (ESB).  
More concretely, Petals ESB is a Java platform based on SOA principles to interconnect heterogeneous systems, applications and services.
It acts as a mediation and a communication layer in Information Systems. Its architecture and supported standards make it a valuable solution for both integration, SOA projects and Information System urbanization.


<h1 title="Service Oriented Architectures" id="soa">SOA</h1>

One of the key features of Petals ESB is its distributed aspect, which can be seen as an alternative to cluster solutions.
Several physical Petals servers can constitute virtually a single bus. Coupled to SOA principles, this gives a lot of flexibility in the architectures that can be implemented with Petals
(high availability, fail-over, mirroring...). Communications between systems are resolved as message exchanges between service providers and service consumers, their relation being controlled
by a contract. Mapping applications and systems with service providers and consumers improves the system modularity and enables loose coupling between applications.


# Standards

Petals ESB supports many communication protocols (SOAP over HTTP/S, Mail, FTP, SFTP...). It also supports several standards, including web services, WS-Security, XSLT, XML Schema, EIP, BPMN 2.0...


# Main features

- **Distributed**: Petals ESB is a natively distributed platform. Each deployed instance has the ability of communicating with other instances over a network.

- **Guaranteed Message Delivery**: A message being sent to a service will always be delivered. If the service is off-line or unreachable, the message will be either stored, or sent to an equivalent service.

- **Message Routing**: The message target (service provider) is chosen at runtime according to rules deployed in the container.

- **Robustness**: Messages are persisted. In case of incident, the platform can restore its state and re-emit messages that were not processed.

- **Respect of standards**: Petals ESB is built with and upon standards. This is true for both the container and the component features.

- **Monitoring**: The messages content and their properties can be monitored.

- **Extensibility**: With its component-based architecture, it is possible to extend, update and modify the platform dynamically at runtime.

- **Tools**: Petals ESB is completed by several tools, including a powerful command-line client, a Web console, a development environment based on Eclipse, a Maven plug-in, integration with various monitoring solutions and many more. These different tools target various project actors and profiles, making Petals a complete suite for IT projects.


<h1 title="Unique Selling Proposition" id="usp">USP</h1>

Unlike many ESB from the market, Petals focuses on urbanization issues and at being the back-bone of an Information System. Petals artifacts find easily their equivalent in architecture methodologies and their various layers: functional, logical, physical, etc. Petals also promotes the use of BPM (Business Process Modeling) approaches, even if it is not the trend anymore. Petals ESB includes [Flowable](https://www.flowable.org/), a Business Process engine, as one of its components.

<a href="/resources/images/flowable.jpg">
	<img src="/resources/images/flowable.jpg" alt="Overview of an executable BPMN diagram in Flowable Modeler" />
</a>

Integration approches are also supported thanks to [Apache Camel](https://camel.apache.org/) and other components.

<!--
<a href="/resources/images/camel.gif">
	<img src="/resources/images/camel.gif" alt="Overview of a EIP (Enterprise Integration Pattern) available in Camel" />
</a>
-->


# Open Source

As we believe sharing is beneficial for all, releases of Petals ESB, related components and tools are open source.
We try to keep our products as open as possible, while being respectful of the license of libraries / products we reuse.

* Petals ESB and its components are published under the terms of the [LGPL 2.1](http://www.gnu.org/licenses/lgpl-2.1.html "Lesser General Public License v2.1").
* Petals Cockpit is published under the terms of the [AGPL 3.0](https://gitlab.com/linagora/petals-cockpit/blob/master/LICENSE.md "Affero General Public License").
* Petals Studio, based on Eclipse, is published under the terms of the [EPL 1.0](http://www.eclipse.org/legal/epl-v10.html "Eclipse Public License 1.0").

