# LINUX [notes]

## Who & Where?

### Who

```bash
whoami
```

### Where

```bash
pwd
```

#### What can I do?

## [RHEL web console](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/7/html-single/managing_systems_using_the_rhel_7_web_console/index#what-is-the-RHEL-web-console_getting-started-with-the-web-console)

### System

```bash
lshw
```

### Dump to HTML

```bash
lshw -html > system.html
```

```bash
cd /home/user/public_html/
```

```bash
lshw -html > system.html
```

## [Users and Groups](https://linuxize.com/post/how-to-create-users-in-linux-using-the-useradd-command/)

### **useradd** [OPTIONS] USERNAME

```bash
useradd username
```

### [user with home folder]

```bash
useradd -m username
```

```bash
useradd -m username -G sudo
```

```bash
usermod -aG sudo username
```

```bash
gpasswd -a username sudo
```

```bash
usermod -aG wheel username
```

#### [full access]

```bash
nano /etc/sudoers
```

```bash
username ALL=(ALL:ALL) ALL
```

#### Delete

```bash
deluser username
```

```bash
deluser --remove-all-files username
```

### List Users

`less /etc/passwd`

`awk -F: '{ print $1}' /etc/passwd`

`cut -d: -f1 /etc/passwd`

`getent passwd | grep user`

---

## [ROOT Login](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/6/html/v2v_guide/preparation_before_the_p2v_migration-enable_root_login_over_ssh)

```bash
/etc/ssh/sshd_config
```

 #PermitRootLogin yes

```bash
sudo sed -i 's/#PermitRootLogin prohibit-password/PermitRootLogin yes/' /etc/ssh/sshd_config
```

```bash
sudo systemctl restart ssh
```

```bash
sudo passwd
```

### Cockpit

```bash
/etc/cockpit/disallowed-users
```

---

## [Window Manager](https://en.wikipedia.org/wiki/Window_manager)

## [APT Repository](https://www.linuxfordevices.com/tutorials/ubuntu/remove-an-apt-repository-ubuntu)

[Methods To Remove an APT](https://www.linuxfordevices.com/tutorials/ubuntu/remove-an-apt-repository-ubuntu)

```bash
add-apt-repository --remove ppa:linuxuprising/java
```

## [NetworkManager](https://learn.microsoft.com/en-us/windows-server/networking/core-network-guide/core-network-guide#BKMK_planning)

```bash
nmcli
nmcli d
nmcli connection show
nmcli device show
nmcli device set eth0 managed [yes/no]
```

## [Core Network Planning](https://learn.microsoft.com/en-us/windows-server/networking/core-network-guide/core-network-guide#BKMK_planning)

## [NetworkTools](https://www.geeksforgeeks.org/linux-networking-tools/?ref=lbp)

### [Subnet Calculator](https://www.solarwinds.com/free-tools/advanced-subnet-calculator)

### [Network Interface Name](https://www.baeldung.com/linux/network-interface-configure)

```bash
ip -br -4 a
ls /sys/class/net
ip link set eth0 up/down
```

`ifconfig eth0 up/down`

#### Network Config - Scripts

```bash
nano /etc/network/interfaces
```

```bash
ifup
```

```bash
ifdown
```

```bash
ifquery
```

### Running Network Script

```bash
systemctl start|stop|restart|status networking.service
```

The **systemctl** utility clears any existing environment variables and ensures correct execution.

```bash
ifconfig ethx xxx.xxx.xxx.xxx netmask xxx.xxx.xxx.xxx
```

### List Services

```bash
systemctl list-unit-files --type=service
```

## NetworkManager

### Interface not managed

```bash
/etc/NetworkManager/conf.d/10-globally-managed-devices.conf
```

---

## Netplan

### [Restart Network Interface in Linux](https://www.cyberciti.biz/faq/linux-restart-network-interface/)

---

### Firewall

#### [Firewalld](https://firewalld.org/)

#### [IPTables](https://www.linode.com/docs/guides/what-is-iptables/)

#### [IPTables](https://manpages.debian.org/unstable/iptables/iptables.8.en.html)

## [FRRouting](https://frrouting.org/)

[Router](https://frrouting.org/)

---

## DHCP

isc-dhcp-server

### DHCP Config

```bash
/etc/default/isc-dhcp-server
INTERFACES v4 = "eth0"
```

```bash
/etc/dhcp/dhcpd.conf
option domain-name "domain.com";
option domain-name-servers XX.XX.XX.XX;
default-lease-time 7200;
authoritative;
```

---

## DNS

### DNS settings

#### [Make Permanent DNS Changes on resolv.conf in Linux](https://kifarunix.com/make-permanent-dns-changes-on-resolv-conf-in-linux/)

`apt install resolvconf`

```bash
/etc/resolvconf/resolv.conf.d/base

domain example.com
nameserver 8.8.8.8
nameserver 8.8.4.4
```

--

```bash
resolvconf -u
```

---

nano /etc/resolv.conf

---

### [Bind9](https://bind9.readthedocs.io/en/latest/index.html)

### Set Hostname

```bash
hostnamectl set-hostname --static "_ServerName"_
hostnamectl set-hostname --pretty "_ServerName"_
```

### Local addresses inside your network

/etc/hosts

### IP - Static

apt install snapd

- auto eth0
- iface eth0 inet static
- address 192.168.X.X
- netmask 255.255.255.0
- gateway 192.168.1.254
- dns-nameservers 192.168.1.254

### Fixing the Ubuntu's connection

```bash
sudo dhclient -v -4
sudo echo 'nameserver 8.8.8.8' > /etc/resolv.conf
```

## [Troubleshoot network connectivity](https://www.a2hosting.com/kb/getting-started-guide/internet-and-networking/troubleshooting-network-connectivity-with-ping-and-traceroute)

## [SAMBA Share](https://wiki.samba.org/index.php/Main_Page)

### Domain controller on Linux server

How to use *[Samba](https://www.samba.org/samba/what_is_samba.html)* as a reliable domain controller Linux server.

### Prerequisites

* Hostname: space.net
* IP Address: 10.10.10.254
* Domain: SPACE.NET
* FQDN: pdc.space.net

### Preparing the Domain Controller on Linux Server

Add your server’s hostname and FQDN entries in the local *hosts* (`/etc/hosts`) file.

Delete any entry that maps your hostname or FQDN to any IP besides the static IP.

Add an entry to map your host’s FQDN and static IP address.

![Hosts](https://github.com/PGodinho/cet-network/blob/main/image/wiki-pics/etc-hosts.png?raw=true)

Save the  *hosts* (/etc/hosts) file and exit the editor.

### FQDN Resolution

hostname -A

ping -c4 pdc.space.net

samba-tool domain provision

--option="interfaces=lo eth0"

--use-rfc2307

--domain=XBYTE

--realm=XBYTE.NET

--server-role=dc

--dns-backend=SAMBA_INTERNAL

## [SAMBA AD](https://wiki.samba.org/index.php/Main_Page)

## [Dimensioning a Samba Active Directory server](https://samba.tranquil.it/doc/en/samba_fundamentals/samba_server_dimensionning.html#dimensioning-a-samba-active-directory-server)

## [Installing and configuring a Samba-AD server](https://samba.tranquil.it/doc/en/samba_config_server/samba_conf_index.html)

## APACHE

## Folder permissions for a website

### The right folder permissions for a website on a Linux server

Say you have a website running on Linux. What are the correct permissions for the folder that contains the HTML, CSS, images, JavaScript files and so on?

This is something that has been bugging me since my day one of web development. In this article I want to sort it out for good.

## Prerequisites

The website is stored in a Linux server like Ubuntu, and it is run by a web server like Apache or Nginx. You are the project owner and the sole user responsible for maintaining it.

The site is made of static content like CSS, images, HTML pages as well as some dynamic content generated by the web server on the fly — for example, a PHP script that manages file upload. So the web server needs to read the static content in order to display it to the public, as well as write data into the site folder as instructed by the script files.

Finally, let's pretend your user is called `john`, the website folder is located in `/var/www/my-website.com/` and the web server belongs to the `www-data` user group.

## Set the folder permissions

Your user will be the owner of the website directory and will have full read, write and execute permissions. The web server will be the group owner and initially will have read and execute permissions, except for some folders where it will have write access. No one else will be allowed to mess around with the whole website directory.

To get started, login into your server and run the four commands below.

### 1: set your user as the owner

```bash
chown -R john /var/www/my-website.com/
```

This command sets `john` as the owner of every file and folder inside the directory (`-R` stands for recursive).

### 2: set the web server as the group owner

```bash
chgrp -R www-data /var/www/my-website.com/
```

This command sets `www-data` as the group owner of every file and folder inside the directory. Recursive mode, as above.

### 3: 750 permissions for everything

```bash
chmod -R 750 /var/www/my-website.com/
```

The third command sets the permissions: read, write and execute (7) for the owner (i.e. you), read and execute (5) for the group owner (i.e. the web server), zero permissions at all (0) for others. Once again this is done on every file and folder in the directory, recursively.

### 4: new files and folders inherit group ownership from the parent folder

```bash
chmod g+s /var/www/my-website.com/
```

The last command makes all files/folders created within the directory to automatically take on the group ownership of the parent folder, that is your web server. The `s` flags is a special mode that represents the [setuid/setgid](https://en.wikipedia.org/wiki/Chmod#Special_modes). In simple words, new files and directories created by the web server will have the same group ownership of `my-website.com/` folder, which we set to `www-data` with the second command.

## When the web server needs to write

If you have folders that need to be writable by the web server, you can just modify the permission values for the group owner so that `www-data` has write access. Run this command on each writable folder:

```bash
chmod g+w /var/www/my-website.com/<writable-folder>
```

For security reasons apply this only where necessary and not on the whole website directory.

---

## [PHP](https://techvblogs.com/blog/install-multiple-php-versions-on-ubuntu-22-04)

## [Install KVM on Ubuntu Linux](https://adamtheautomator.com/ubuntu-install-kvm/)

## [ZSH](https://ohmyz.sh/) - CLI

## Install

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

## Find your [Theme](https://github.com/ohmyzsh/ohmyzsh/wiki/Themes)

## Select theme using `omz`:

`omz theme set nameTheme/nameTheme`

## [Geeks4Geeks](https://www.geeksforgeeks.org/)

## ASCII LOGO

host /etc/motd

[AANSI Shadow](https://patorjk.com/software/taag/#p=display&f=ANSI%20Shadow&t=Type%20Something%20)

## [VI text editor](https://kb.iu.edu/d/adxz)

The vi text editor has three modes: Command, Input, and Ex.

## Command mode

When starting, vi begins in command mode. If you are ever unsure which mode you're in, press `Esc` to return to command mode. In command mode, you can move around with the arrow keys, or by using the vi movement keys, as follows:

| `h` | left  |
| ----- | ----- |
| `j` | down  |
| `k` | up    |
| `l` | right |

Several vi commands are listed in the table below:

| Command         | Action                                                   |
| --------------- | -------------------------------------------------------- |
| --------------- |                                                          |
| `Ctrl-b`      | Go back one page                                         |
| -               | -                                                        |
| `Ctrl-f`      | Go forward one page                                      |
| `x`           | Delete the character the cursor is on                    |
| `Shift-x`     | Delete the character before the cursor                   |
| `dd`          | Delete the current line                                  |
| `Shift-d`     | Delete everything from the cursor to the end of the line |
| `u`           | Undelete a line you just deleted                         |
| `Shift-u`     | Undo all changes to the current line                     |
| `Shift-z-z`   | Save your file and exit the vi editor                    |

## Input mode

The input mode lets you insert or append text. To insert text before the cursor's current position, in command mode, press `i`. Similarly, to append after the cursor, you can type `a`. Remember that you can't move around with the cursor keys in this mode. When you're done entering text, press `Esc` to go back to command mode.

## Ex mode

The ex mode is an extension of command mode. To get into it, press `Esc` and then `:` (the colon). The cursor will go to the bottom of the screen at a colon prompt. Write your file by entering `:w` and quit by entering `:q`. You can combine these to save and exit by entering `:wq`. However, if you're finished with your file, it's generally more convenient to type `Shift-z-z` from command mode.

## Quit the vi editor without saving your changes

To quit the [vi](https://kb.iu.edu/d/adxz) editor without saving any changes you've made:

1. If you are currently in insert or append mode, press `Esc`.
2. Press `:` (colon). The cursor should reappear at the lower left corner of the screen beside a colon prompt.
3. Enter the following:

   ```bash
    q!
   ```

   This will quit the editor, and all changes you have made to the document will be lost.

## [Kali.org](https://www.kali.org/)

## [Kali inside Hyper-V (Guest VM)](https://www.kali.org/docs/virtualization/install-hyper-v-guest-vm/)
