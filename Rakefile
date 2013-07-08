require 'rubygems'
require 'rake'

require 'net/ssh'
require 'net/scp'
require 'fileutils'
require 'stringex'

posts_dir = "_posts"    # directory for blog files
new_post_ext = "markdown"  # default new post file extension when using the new_post task

# Deployment variables
hostname = 'jupiter.objectweb.org'
path = '/var/lib/gforge/chroot/home/groups/petals/htdocs/'

# usage rake new
desc "Begin a new post in #{posts_dir}"
task :new do
  require './_plugins/titlecase.rb'
  
  puts "What should we call this post for now?"
  name = STDIN.gets.chomp
  
  mkdir_p "#{posts_dir}"
  title = name
  filename = "#{posts_dir}/#{Time.now.strftime('%Y-%m-%d')}-#{title.to_url}.#{new_post_ext}"
  puts "Creating new post: #{filename}"
  open(filename, 'w') do |post|
    system "mkdir -p #{posts_dir}/";
    post.puts "---"
    post.puts "layout: post"
    post.puts "title: \"#{title.gsub(/&/,'&amp;').titlecase}\""
    post.puts "date: #{Time.now.strftime('%Y-%m-%d %H:%M')}"
    post.puts "comments: true"
    post.puts "categories: "
    post.puts "---"
  end
end

desc "Startup Jekyll"
task :start do
  sh "jekyll serve"
end

desc "Generate the Web site"
task :generate do
  puts "Generating the Web site under the _site folder..."
  sh "jekyll build"
  puts "Done!"
end

#
# Need ow2login and ow2password parameters
# 
desc "Deploy the Web site"
task :deploy => :generate do
  login = ENV['ow2login']
  password = ENV['ow2password']
  raise "Please provide valid OW2 credentials" if !login or !password

  puts "Deploying the Web site to petals.ow2.org as #{login}..."    
  cd '_site'
  Net::SSH.start( hostname, login, :password => password ) do |ssh|
    ssh.scp.upload!( '.', path, :recursive => true )
  end
  puts "Deployed!"
  puts "=====> Please go to http://forge.ow2.org/project/admin/?group_id=213 and push the 'Push project Web site to production Now' button! <====="
end


task :default => :start
