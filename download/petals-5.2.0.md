---
layout: standard
title: "Download &raquo; Petals ESB 5.2.0"
menu: "download"
---

# Petals EE 5.2.0

[Download Petals ESB 5.2.0](https://repository.ow2.org/nexus/content/groups/public/org/ow2/petals/petals-esb-enterprise-edition/5.2.0/petals-esb-enterprise-edition-5.2.0.zip "Petals ESB 5.2.0") (167 Mb)

- Released on October 1<sup>st</sup>, 2018
- The release notes are available [here](https://jira.petalslink.com/secure/IssueNavigator.jspa?mode=hide&requestId=10260).

- Java 8 is now required.
- Improvements on components:
  - Petals BC Rest was been reworked to improve its consumer side.
  - Petals BC SOAP: WS-Security was reworked upgrading to Apache Axis 2 1.7.7 and is now fully based on WS-Policy.
  - Petals SE Flowable was reworked to manage correctly WSDL imported by process definition. That includes a rework of concurrent processings by service providers (based on Petals SE POJO) and new commands on Petals ESB CLI about Petals SE Flowable.
  - Several bug fixes and other improvements, including an upgrade of Apache Commons Pool (fix for a memory leak).
- Access [the Petals ESB container documentation](https://doc.petalslink.com/display/petalsesb520)
- Access [the Petals ESB component documentation](https://doc.petalslink.com/display/petalscomponents/Petals+Components)

# Petals Studio 1.4.0

Petals Studio 1.4.0 is the maintenance release of Petals Studio for Petals 5.0.0 / 5.1.0 / 5.2.0.
Select the right version of Petals Studio for your operating system.

<a href="http://download.petalslink.com/petals-studio/Petals-Studio--1.4.0--linux.gtk.x86.zip"><img alt="Linux x32" src="/resources/images/linux_32.png" /></a>
<a href="http://download.petalslink.com/petals-studio/Petals-Studio--1.4.0--linux.gtk.x86_64.zip"><img alt="Linux x64" src="/resources/images/linux_64.png" /></a>
<a href="http://download.petalslink.com/petals-studio/Petals-Studio--1.4.0--macosx.cocoa.x86_64.zip"><img alt="MacOS" src="/resources/images/mac.png" /></a><br />

<a href="http://download.petalslink.com/petals-studio/Petals-Studio--1.4.0--win32.win32.x86.zip"><img alt="Windows x32" src="/resources/images/windows_32.png"/></a>
<a href="http://download.petalslink.com/petals-studio/Petals-Studio--1.4.0--win32.win32.x86_64.zip"><img alt="Windows x64" src="/resources/images/windows_64.png"/></a>

- Released on March 21<sup>th</sup>, 2017
- Take a look at the [Release Notes](https://jira.petalslink.com/secure/ReleaseNote.jspa?projectId=10070&version=10323)
- Access [the documentation](https://doc.petalslink.com/display/petalsstudio14/Petals+Studio+1.4)

# Docker Images

Docker images for Petals can be downloaded from [Docker Hub](https://hub.docker.com/u/petals/).

# Debian Packages

The essential parts of Petals EE are available as Debian packages.
This is useful in particular for production environments.

- The [Petals commons package](https://repository.ow2.org/nexus/content/groups/public/org/ow2/petals/petals-commons-deb/1.2.0/petals-commons-deb-1.2.0.deb) required for all packages.

<!-- -->

- The [Petals ESB container](https://repository.ow2.org/nexus/content/groups/public/org/ow2/petals/petals-esb-default-deb/5.2.0-1.0/petals-esb-default-deb-5.2.0-1.0.deb).
- The [auto-loader](https://repository.ow2.org/nexus/content/groups/public/org/ow2/petals/petals-autoloader-deb/1.1.0-1.0/petals-autoloader-deb-1.1.0-1.0.deb) extension for the container.

<!-- -->

- The [Petals ESB Registry node](https://repository.ow2.org/nexus/content/groups/public/org/ow2/petals/petals-registry-overlay-deb/1.1.0-1.0/petals-registry-overlay-deb-1.1.0-1.0.deb).
- [Petals ESB Registry CLI](https://repository.ow2.org/nexus/content/groups/public/org/ow2/petals/petals-registry-cli-deb/1.2.0-1.0/petals-registry-cli-deb-1.2.0-1.0.deb), the command-line administration tool for Petals ESB Registry.

<!-- -->

- [Petals CLI](https://repository.ow2.org/nexus/content/groups/public/org/ow2/petals/petals-cli-distrib-deb/3.1.1-1.0/petals-cli-distrib-deb-3.1.1-1.0.deb), the command-line administration tool for Petals ESB.
- Debian package adding commands for:
  - [BC Gateway](https://repository.ow2.org/nexus/content/groups/public/org/ow2/petals/petals-cli-bc-gateway/2.1.0/petals-cli-bc-gateway-2.1.0.deb),
  - [BC SFTP](https://repository.ow2.org/nexus/content/groups/public/org/ow2/petals/petals-cli-bc-sftp/1.1.0/petals-cli-bc-sftp-1.1.0.deb),
  - [SE Flowable](https://repository.ow2.org/nexus/content/groups/public/org/ow2/petals/petals-cli-se-flowable/1.0.0/petals-cli-se-flowable-1.0.0.deb)
- Debian packages to monitor Petals with Cacti:
[Base package](https://repository.ow2.org/nexus/content/groups/public/org/ow2/petals/petals-cli-cmd-monitoring-deb/2.1.0-1.0/petals-cli-cmd-monitoring-deb-2.1.0-1.0.deb) -
[Cacti extension](https://repository.ow2.org/nexus/content/groups/public/org/ow2/petals/petals-cli-cmd-monitoring-mo-cacti-deb/2.1.0-1.0/petals-cli-cmd-monitoring-mo-cacti-deb-2.1.0-1.0.deb).
- Debian packages to monitor Petals with Nagios:
[Base package](https://repository.ow2.org/nexus/content/groups/public/org/ow2/petals/petals-cli-cmd-monitoring-deb/2.1.0-1.0/petals-cli-cmd-monitoring-deb-2.1.0-1.0.deb) -
[Nagios extension](https://repository.ow2.org/nexus/content/groups/public/org/ow2/petals/petals-cli-cmd-monitoring-so-nagios-deb/2.1.0-1.0/petals-cli-cmd-monitoring-so-nagios-deb-2.1.0-1.0.deb).

Notice the base package is the same for both monitoring tools.

# ZIP Archives

In addition to the Petals Enterprise Edition ZIP archive, several Petals ESB variants and tools are provided as ZIP Archive.
This is useful in particular for development environments.

- The [Minimal Petals container](https://repository.ow2.org/nexus/content/groups/public/org/ow2/petals/petals-esb-minimal-zip/5.2.0/petals-esb-minimal-zip-5.2.0.zip) is a Petals ESB container without any extensions.
- The default [Petals container](https://repository.ow2.org/nexus/content/groups/public/org/ow2/petals/petals-esb-default-zip/5.2.0/petals-esb-default-zip-5.2.0.zip) is a Petals ESB container with following extension: Petals Auto-loader, Petals Embedded Overlay Registry.
- The [auto-loader](https://repository.ow2.org/nexus/content/groups/public/org/ow2/petals/petals-autoloader-zip/1.1.0-1.0/petals-autoloader-zip-1.1.0-1.0.zip) extension to add to a minimal Petals container.

<!-- -->

- The [Petals ESB Registry node](https://repository.ow2.org/nexus/content/groups/public/org/ow2/petals/petals-registry-overlay-zip/1.1.0-1.0/petals-registry-overlay-zip-1.1.0-1.0.zip).
- [Petals ESB Registry CLI](https://repository.ow2.org/nexus/content/groups/public/org/ow2/petals/petals-registry-cli-zip/1.2.0-1.0/petals-registry-cli-zip-1.2.0-1.0.zip), the command-line administration tool for Petals ESB Registry.

<!-- -->

- The [Minimal Petals CLI](https://repository.ow2.org/nexus/content/groups/public/org/ow2/petals/petals-cli/3.1.1/petals-cli-3.1.1.zip), the command-line administration tool for Petals ESB, without any extension.
- The default [Petals CLI](https://repository.ow2.org/nexus/content/groups/public/org/ow2/petals/petals-cli-distrib-zip/3.1.1-1.0/petals-cli-distrib-zip-3.1.1-1.0.zip), the command-line administration tool for Petals ESB with following extension: monitoring command with its Cacti and Nagios extensions, the command to check BC SFTP connections and commands to operate the Petals BC Gateway.

# Community Pack

Now, each version of Petals ESB Enterprise can be completed by elements delivered with the [Community Pack for Petals EE](https://repository.ow2.org/nexus/content/groups/public/org/ow2/petals/petals-community-pack/5.2.0/petals-community-pack-5.2.0.zip). This pack contains extra components and shared libraries.

