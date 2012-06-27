---
layout: standard
title: "Petals ESB overview"
---  
Petals ESB is an open-source Enterprise Service Bus (ESB) provided by the OW2 Middleware Consortium. 
More concretely, Petals ESB is a Java platform based on SOA principles to interconnect heterogeneous systems, applications and services. It acts as a mediation and a communication layer in Information Systems. Its architecture and supported standards make it a valuable solution for both integration and SOA projects.

<img src="http://files.petalslink.com/img/community/petals_esb_core-concept_en.png" alt="Illustration of Petals ESB's roles within an infrastructure" title="How Petals ESB helps you build a SOA infrastructure">

Petals ESB has been born from a French research project, the JOnES (Java Open source ESB) project in 2004. The ojective was to design a bus capable of massive scaling without performances or reliability loss ([learn more on Petals history]({{ site.url }}history.html"Learn more on Petals history").

As as result, one of the key features of Petals ESB is its distributed aspect, which can be seen as an alternative to cluster solutions.
Several physical Petals servers can constitute virtually a single bus. Coupled to SOA principles, this gives a lot of flexibility in the architectures that can be implemented with Petals (high availibility, fail-over, mirroring...). Communications between systems are resolved as message exchanges between service providers and service consumers, their relation being controlled by a contract. Mapping applications and systems with service providers and consumers improves the system modularity and leverages low-coupling between applications.

Petals ESB supports several communication protocol (SOAP over HTTP/S, Mail, FTP, SFTP...). It also supports several standards, including web services, WS-Security, XSLT, XML Schema... Petals ESB comes with tools for various users and project stages, from development to administration and monitoring tools.
[Discover all features of Petals suite]({{ site.url }}features.html"Detailed features of Petals suite").

As we believe sharing is beneficial for all, most releases of Petals ESB, related components and tools are published under LGPL v2.1. Only a few components and tools had to be released under other open source licenses, such as EPL or AGPL. [See detail of licenses used in Petals project]({{ site.url }}licenses.html"See the detail of open source licenses used for Petals project").