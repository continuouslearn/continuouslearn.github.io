---
layout: post
title:  "Install Ubuntu VMs on MacOS"
date:   2023-02-05 15:08:30 -0800
categories: Kubernetes
---
Use multipass to install Ubuntu VMs on Mac

1: Install multipass

https://multipass.run/docs/installing-on-macos

2: Start Ubuntu ckamaster  as kubernetes master

{% highlight ruby %}
multipass launch --name ckamaster
multipass start ckamaster
multipass stop ckamaster
multipass set local.ckamaster.cpus=2
multipass set local.ckamaster.disk=35G
multipass set local.ckamaster.memory=4G
{% endhighlight %}

[jekyll-docs]: https://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/
