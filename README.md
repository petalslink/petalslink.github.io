# petals.ow2.org

> Community web site for Petals ESB, an open-source Enterprise Service Bus.

## Run

Download Jekyll at jekyllrb.com and run *rake start*.

## Generate

To generate the site, launch 'rake generate'. The site is generated under the _site folder.  
You can also use *jekyll --server* or *jekyll --server --auto*. 

## Deploy

To deploy to petals.ow2.org, launch *rake deploy ow2login=YYY ow2password=XXX*.
The web site can also be deployed automatically from a CI server (e.g. Jenkins).
