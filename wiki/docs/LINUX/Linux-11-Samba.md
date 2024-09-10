---
title: Samba Share
icon: fontawesome/solid/square-share-nodes
---

## Samba Share

## [Auto-mount Samba / **CIFS** shares via fstab on Linux](https://timlehr.com/2018/01/auto-mount-samba-cifs-shares-via-fstab-on-linux/ "Permalink to Auto-mount Samba / CIFS shares via fstab on Linux")

January 30, 2018

Set up via  */etc/fstab*.  

Unfortunately, when things break, the feedback you get from running *mount -a* is often rather generic and of little help.  
A typical error:

```bash
sudo mount -a
mount error(5): Input/output error
Refer to the mount.cifs(8) manual page (e.g. man mount.cifs)
```

Not too helpful, is it?  
Debugging issues like this one can be quite tedious and time consuming, so I decided to write a little guide to mounting Windows (Samba) network shares on Linux (Fedora 26 in my case).
There are a lot of guides out there already, but I found some things especially important and wanted to point those out.  

Let’s get started.

---

### 1. Install dependencies

Install the necessary “cifs-utils” with the package manager of your choice.  
e.g. **DNF** on Fedora.

```bash
sudo apt install cifs-utils
```

### 2. Create mountpoints

Create a directory (mountpoint) in */media* for every network share you want to mount.  
If /media does not exist yet, create it first.  
This is the location where you commonly mount removable volumes in Linux.  
After the mount is successful, you access all files on your network share from that directory, so be sure to give it a good name.  
e.g. */media/mordor*

### 3. Create a credentials file (optional)

Usually network shares have access protection, so you’ll want to store your user credentials in a local credentials file.  
If you don’t want this, you’ll have to specify the credentials everytime you want to mount, so I highly recommend it, as long as it’s your machine you are mounting on.  
The credential file should be in any location in your user directory, e.g.  */home/tim/.smb* , and should look similiar to this:

```bash
user=tim
password=mySecretPassword
domain=myDomain
```

### 4. Edit /etc/fstab

Now you should be all set and ready to edit your */etc/fstab* file to do some mount magic.  
Just open the file with a text editor of your choice and add the following lines to the bottom of the file.

**Important:**  
Do not change or delete any other lines in the file! This can do serious harm to your system configuration and you might end up with a broken **OS**.  
You have been warned.

```bash
#forWindowsServer2008sambashares:
//mordor/media/mordorcifsuid=0,credentials=/home/tim/.smb,iocharset=utf8,noperm00
#forWindowsServer2016sambashares:
//isengard/media/isengardcifsuid=0,credentials=/home/tim/.smb,iocharset=utf8,vers=3.0,noperm00
```

**Notice the small difference?**  
If things do not work, it’s usually because the “vers” argument is not set or incorrect.  
It specifies the Samba version to be used and depending on your server setup this might range from “*vers=1.0”* to “ *vers=3.0”* .  
In my experience you best start of trying to mount the share without it and try-again with different settings if this doesn’t work out.

For Windows server 2008 shares I can usually get away without it.  
In more recent versions like Windows Server 2016 it likely needs to be “*vers=2.1”* or “ *vers=3.0”* .  
However, my experience so far is limited to Fedora and a single network, so you might have to tweak the value some more.

### 5. Manually mount the share for testing

Although entries in */etc/fstab* are automatically mounted when the system boots, it’s pretty annoying to debug your mount command this way.  
Here are two commands handy to manually mount and unmount all entries in fstab.

```bash
sudo mount -a
sudo umount -a
```

If you run the first command and do not get any errors, the mounting seems to have worked out fine. Don’t forget to check your mountpoint to make sure you have read / write access!

If you have any issues with your setup, feel free to leave a comment and I’ll try my best to help you out, although I’m far from being an expert on this topic. Good luck!

---
