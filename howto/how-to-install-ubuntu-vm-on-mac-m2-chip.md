#### This tutorial instruct how to install Ubuntu VMs on Mac using multipass

## 1: Install multipass

Go to multipass website, downloaad and install it

https://multipass.run/docs/installing-on-macos

## 2: Start Ubuntu ckamaster  as kubernetes master

```
multipass launch --name ckamaster
multipass start ckamaster
multipass stop ckamaster
multipass set local.ckamaster.cpus=2
multipass set local.ckamaster.disk=35G
multipass set local.ckamaster.memory=4G
```

## 3: Start Ubuntu ckaworker1 and 2 as kubernetes worker1 and 2

```
multipass launch --name ckaworker1
multipass stop ckaworker1
multipass set local.ckaworker1.cpus=2
multipass start ckaworker1
multipass list
multipass stop ckaworker1
multipass set local.ckaworker1.cpus=2
multipass set local.ckaworker1.disk=35G
multipass set local.ckaworker1.memory=4G
```

## 4: Check Ubuntu VMs:

```
multipass list
Name                    State             IPv4             Image
cka1                    Deleted           --               Not Available
ckamaster               Running           192.168.64.5     Ubuntu 22.04 LTS
ckanode1                Running           192.168.64.3     Ubuntu 22.04 LTS
ckanode2                Running           192.168.64.4     Ubuntu 22.04 LTS
```

## 5: Check VM resource

```
multipass info ckamaster
Name:           ckamaster
State:          Running
IPv4:           192.168.64.7
Release:        Ubuntu 22.04.1 LTS
Image hash:     b27163374c83 (Ubuntu 22.04 LTS)
Load:           0.19 0.06 0.02
Disk usage:     1.4G out of 9.5G
Memory usage:   154.9M out of 2.9G
Mounts:         --
```
