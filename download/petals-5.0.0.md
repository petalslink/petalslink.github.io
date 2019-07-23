---
layout: standard
title: "Download &raquo; Petals ESB 5.0.0"
menu: "download"
---

# Petals EE 5.0.0

[Download Petals ESB 5.0.0](http://repository.ow2.org/nexus/content/repositories/public/org/ow2/petals/petals-esb-enterprise-edition/5.0.0/petals-esb-enterprise-edition-5.0.0.zip "Petals ESB 5.0.0") (133 Mb)

- Released on Sept 22<sup>nd</sup>, 2016
- New & Noteworthy (take a look at the [Release Notes](https://jira.petalslink.com/secure/IssueNavigator.jspa?mode=hide&requestId=10190)):
  - Petals ESB uses a new registry based on a Hazelcast cluster,
  - A Petals ESB container can be dynamically added or removed from a topology,
  - Bug fixes and improvement on Petals ESB container and components
  - A great work has been done on quality (automatic tests, source code analysis, ...)
  - Domain support
  - Artifact repository and WS API are no more supported and was removed.
- Access [the Petals ESB container documentation](https://doc.petalslink.com/display/petalsesb502)
- Access [the Petals ESB component documentation](https://doc.petalslink.com/display/petalscomponents/Petals+Components)

# Petals Studio 1.4.0

Petals Studio 1.4.0 is the maintenance release of Petals Studio for Petals 5.0.0.
Select the right version of Petals Studio for your operating system.

<a href="http://download.petalslink.com/petals-studio/Petals-Studio--1.4.0--linux.gtk.x86.zip"><img alt="Linux x32" src="/resources/images/linux_32.png" /></a>
<a href="http://download.petalslink.com/petals-studio/Petals-Studio--1.4.0--linux.gtk.x86_64.zip"><img alt="Linux x64" src="/resources/images/linux_64.png" /></a>
<a href="http://download.petalslink.com/petals-studio/Petals-Studio--1.4.0--macosx.cocoa.x86_64.zip"><img alt="MacOS" src="/resources/images/mac.png" /></a><br />

<a href="http://download.petalslink.com/petals-studio/Petals-Studio--1.4.0--win32.win32.x86.zip"><img alt="Windows x32" src="/resources/images/windows_32.png"/></a>
<a href="http://download.petalslink.com/petals-studio/Petals-Studio--1.4.0--win32.win32.x86_64.zip"><img alt="Windows x64" src="/resources/images/windows_64.png"/></a>

- Released on March 21<sup>th</sup>, 2017
- Take a look at the [Release Notes](https://jira.petalslink.com/secure/ReleaseNote.jspa?projectId=10070&version=10323)
- Access [the documentation](https://doc.petalslink.com/display/petalsstudio14/Petals+Studio+1.4)

# Debian Packages

The essential parts of Petals EE are available as Debian packages.
This is useful in particular for production environments.

- The [Petals commons package](http://repository.ow2.org/nexus/content/groups/public/org/ow2/petals/petals-commons-deb/1.1.1/petals-commons-deb-1.1.1.deb) required for all packages.

<!-- -->

- The [Petals ESB container](http://repository.ow2.org/nexus/content/groups/public/org/ow2/petals/petals-esb-default-deb/5.0.2-1.0/petals-esb-default-deb-5.0.2-1.0.deb).
- The [auto-loader](http://repository.ow2.org/nexus/content/groups/public/org/ow2/petals/petals-autoloader-deb/1.0.3-1.0/petals-autoloader-deb-1.0.3-1.0.deb) extension for the container.

<!-- -->

- The [Petals ESB Registry node](http://repository.ow2.org/nexus/content/groups/public/org/ow2/petals/petals-registry-overlay-deb/1.0.2-1.0/petals-registry-overlay-deb-1.0.2-1.0.deb).
- [Petals ESB Registry CLI](http://repository.ow2.org/nexus/content/groups/public/org/ow2/petals/petals-registry-cli-deb/1.1.1-1.1/petals-registry-cli-deb-1.1.1-1.1.deb), the command-line administration tool for Petals ESB Registry.

<!-- -->

- [Petals CLI](http://repository.ow2.org/nexus/content/groups/public/org/ow2/petals/petals-cli-distrib-deb/2.3.1-1.0/petals-cli-distrib-deb-2.3.1-1.0.deb), the command-line administration tool for Petals ESB.
- Debian package adding commands for:
  - [BC Gateway](http://repository.ow2.org/nexus/content/repositories/public/org/ow2/petals/petals-cli-bc-gateway/1.0.1/petals-cli-bc-gateway-1.0.1.deb),
  - [BC SFTP](http://repository.ow2.org/nexus/content/repositories/public/org/ow2/petals/petals-cli-bc-sftp/1.0.3/petals-cli-bc-sftp-1.0.3.deb)
- Debian packages to monitor Petals with Cacti:
[Base package](http://repository.ow2.org/nexus/content/groups/public/org/ow2/petals/petals-cli-cmd-monitoring-deb/1.0.3-1.0/petals-cli-cmd-monitoring-deb-1.0.3-1.0.deb) -
[Cacti extension](http://repository.ow2.org/nexus/content/groups/public/org/ow2/petals/petals-cli-cmd-monitoring-mo-cacti-deb/1.0.2-1.0/petals-cli-cmd-monitoring-mo-cacti-deb-1.0.2-1.0.deb).
- Debian packages to monitor Petals with Nagios:
[Base package](http://repository.ow2.org/nexus/content/groups/public/org/ow2/petals/petals-cli-cmd-monitoring-deb/1.0.3-1.0/petals-cli-cmd-monitoring-deb-1.0.3-1.0.deb) -
[Nagios extension](http://repository.ow2.org/nexus/content/groups/public/org/ow2/petals/petals-cli-cmd-monitoring-so-nagios-deb/1.0.2-1.0/petals-cli-cmd-monitoring-so-nagios-deb-1.0.2-1.0.deb).

Notice the base package is the same for both monitoring tools.

# ZIP Archives

In addition to the Petals Enterprise Edition ZIP archive, several Petals ESB variants and tools are provided as ZIP Archive.
This is useful in particular for development environments.

- The [Minimal Petals container](http://repository.ow2.org/nexus/content/repositories/public/org/ow2/petals/petals-esb-minimal-zip/5.0.2/petals-esb-minimal-zip-5.0.2.zip) is a Petals ESB container without any extensions.
- The default [Petals container](http://repository.ow2.org/nexus/content/repositories/public/org/ow2/petals/petals-esb-default-zip/5.0.2/petals-esb-default-zip-5.0.2.zip) is a Petals ESB container with following extension: Petals Auto-loader, Petals Embedded Overlay Registry.
- The [auto-loader](http://repository.ow2.org/nexus/content/repositories/public/org/ow2/petals/petals-autoloader-zip/1.0.3-1.0/petals-autoloader-zip-1.0.3-1.0.zip) extension to add to a minimal Petals container.

<!-- -->

- The [Petals ESB Registry node](http://repository.ow2.org/nexus/content/repositories/public/org/ow2/petals/petals-registry-overlay-zip/1.0.2-1.0/petals-registry-overlay-zip-1.0.2-1.0.zip).
- [Petals ESB Registry CLI](http://repository.ow2.org/nexus/content/repositories/public/org/ow2/petals/petals-registry-cli-zip/1.1.1-1.0/petals-registry-cli-zip-1.1.1-1.0.zip), the command-line administration tool for Petals ESB Registry.

<!-- -->

- The [Minimal Petals CLI](http://repository.ow2.org/nexus/content/repositories/public/org/ow2/petals/petals-cli/2.3.1/petals-cli-2.3.1.zip), the command-line administration tool for Petals ESB, without any extension.
- The default [Petals CLI](http://repository.ow2.org/nexus/content/repositories/public/org/ow2/petals/petals-cli-distrib-zip/2.3.1-1.0/petals-cli-distrib-zip-2.3.1-1.0.zip), the command-line administration tool for Petals ESB with following extension: monitoring command with its Cacti and Nagios extensions, the command to check BC SFTP connections and commands to operate the Petals BC Gateway.

# Community Pack

Now, each version of Petals ESB Enterprise can be completed by elements delivered with the [Community Pack for Petals EE](http://repository.ow2.org/nexus/content/repositories/public/org/ow2/petals/petals-community-pack/5.0.0/petals-community-pack-5.0.0.zip). This pack contains extra components and shared libraries.

