---
title: SSH
subtitle: Nullam urna elit, malesuada eget finibus ut, ac tortor
description: 
icon: fontawesome/solid/terminal
---
Secure Shell (SSH) is a cryptographic network protocol used for secure connection between a client and a server and supports various authentication mechanisms.

## [Setup Passwordless SSH Login](https://linuxize.com/post/how-to-setup-passwordless-ssh-login/ "SSH-Password Less")

The two most popular mechanisms are passwords based authentication and public key based authentication.

### Setup SSH Passwordless Login

To set up a passwordless SSH login in Linux all you need to do is to generate a public authentication key and append it to the remote hosts `~/.ssh/authorized_keys` file.
