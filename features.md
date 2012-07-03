---
layout: standard
title: "Petals ESB Features"
---  
# <a id="features"></a>Main features

- **Distributed**: Petals ESB is a natively distributed platform. Each deployed instance has the ability of communicating with other instances over a network.

- **Guaranteed Message Delivery**: A message being sent to a service will always be delivered. If the service is off-line or unreachable, the message will be either stored, or sent to an equivalent service.

- **Message Routing**: The message target (service provider) is chosen at runtime according to rules deployed in the container.

- **Robustness**: Messages are persisted. In case of incident, the platform can restore its state and reemit messages that were not processed.

- **Respect of standards**: Petals ESB is built with and upon standards. This is true for both the container and the component features.

- **Monitoring**: The messages content and their properties can be monitored.

- **Extensibility**: With its component-based architecture, it is possible to extend, update and modify the platform dynamically at runtime.

- **Tools**: Petals ESB is completed by several tools, including a development environment based on Eclipse, a Web console, a governance solution, some Maven plugins, management ANT scripts and many more. These different tools target various project actors and profiles, making Petals a complete suite.
