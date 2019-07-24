# Petals ESB's web site

[![Build Status](https://travis-ci.org/petalslink/petalslink.github.io.svg?branch=master)](https://travis-ci.org/petalslink/petalslink.github.io)
[![License](https://img.shields.io/badge/license-Creative%20Commons-blue.svg)](http://creativecommons.org/licenses/by/3.0/)
[![Web site](https://img.shields.io/badge/website-petals.ow2.org-712e7f.svg)](http://petals.ow2.org)

This repository contains the sources for the web site of Petals ESB, the the open-source Enterprise Service Bus.
On every commit, a [routine](http://jekyllrb.com/) is executed. It generates static HTML files and hosts
them on [GitHub pages](https://pages.github.com/).


## Building the Web Site

To build the web site locally, you can use Docker...

```
cd petalslink.github.io/
docker run --rm --label=jekyll --name=petals-website --volume=$(pwd):/srv/jekyll -it -p 4000:4000 jekyll/jekyll jekyll serve
```

... or you can install [Jekyll](http://jekyllrb.com/) directly on your machine.  
Then, use...

* `bundle exec jekyll serve -w` to run a web server locally.
* `bundle exec jekyll build` to simply generate static HTML files.
* `sudo bundle install` to resolve problems about missing gems or dependencies.

You will find more information on [Github's web site](https://help.github.com/articles/setting-up-your-pages-site-locally-with-jekyll/).


## Testing the Web Site

Beyond manual tests, we have a program that can verify the correctness of the HTML pages,
as well as the validity of all the links (both internal and external). This process is part of
the continuous integration.

It is also possible to run it on your local machine.  
Make sure to have Jekyll installed or started as a Docker container, as described above. If you
run it as a Docker container, open a new terminal and type in...

```bash
# Connect into the Jekyll container that runs the web site
docker exec -ti petals-website bash

# Execute the validation program
bundle exec htmlproofer ./_site --only-4xx --check-favicon --check-html --allow-hash-href
```

If you installed Jekyll directly on your machine, just go to the root of the project, open a terminal
and type in...

```bash
bundle exec htmlproofer ./_site --only-4xx --check-favicon --check-html --allow-hash-href
```

