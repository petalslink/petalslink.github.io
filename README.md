# petals.ow2.org

> Community web site for Petals ESB, an open-source Enterprise Service Bus.

## Run

Download Jekyll at jekyllrb.com and run *rake start*.

## Generate

To generate the site, launch 'rake generate'. The site is generated under the _site folder.  
You can also use *jekyll --server* or *jekyll --server --auto*. 

## Deploy

To deploy to petals.ow2.org, launch

    rake deploy ow2login=YYY ow2password=XXX

(also works with ow2login and ow2password environment variables).

## First time instructions

You will need ruby and several gems to generate and deploy the web site to the petals.ow2.org server:

    gem install jekyll
    gem install net-ssh
    gem install net-scp
    gem install stringex

