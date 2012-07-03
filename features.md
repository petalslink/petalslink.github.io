---
layout: standard
title: "Petals ESB Features"
---  
# <a id="features"></a>Main features

-  Distributivity: Petals ESB is distributed platform. Each deployed instance has the ability of communicating with other instances over a network.

-  Guaranteed Message Delivery: a message being sent to a service will always be delivered. If the service is off-line or unreachable, the message will be either stored, or sent to an equivalent service.

-  Message Routing: the effective recipient of a message can be chosen at runtime in function of various criteria.

-  Robustness: forwarding messages are persisted. In case of incident, the platform can restore its state and reemit messages that were not processed.

-  Respect of standards: Petals ESB is built with and upon standards. This is true for both the container and the component features.

-  Monitoring: the content and the properties of the messages that transit in the bus can be monitored.

-  Extensibility: with its component-based architecture, it is possible to extend, update and modify the platform dynamically.

-  Tools: that may not sound like a feature for the platform, but Petals ESB is completed by several tools, including a development environment, a [Web console], a governance solution, a Maven plug-in, administration ANT scripts and many more. These different tools target various project actors and profiles, making it a complete suite.
