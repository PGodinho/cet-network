---
title: Linux [Sebenta]
icon: fontawesome/solid/book-skull
---

## Linux

## [nixCraft](https://www.cyberciti.biz/)

---

### Who & Where

#### Who

```bash
whoami
```

#### Where

```bash
pwd
```

## System

[`lshw`](https://linux.die.net/man/1/lshw)

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

---

## [Users &amp;Groups](https://linuxize.com/post/how-to-create-users-in-linux-using-the-useradd-command/)

### **adduser** [OPTIONS] username

```bash
adduser username
```

### User [with home folder]

```bash
adduser -m username
```

```bash
usermod -a -G sudo username
```

```bash
gpasswd -a username sudo
```

```bash
nano /etc/sudoers [full access]
```

```bash
username ALL=(ALL:ALL) ALL
```

```bash
deluser username
```

```bash
deluser --remove-all-files username
```

### List Users

```bash
less /etc/passwd
```

```bash
awk -F: '{ print $1}' /etc/passwd
```

```bash
cut -d: -f1 /etc/passwd
```

```bash
getent passwd | grep user
```

---

## [ROOT Login](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/6/html/v2v_guide/preparation_before_the_p2v_migration-enable_root_login_over_ssh)

```bash
/etc/ssh/sshd_config
```

PermitRootLogin yes

```bash
sudo sed -i 's/#PermitRootLogin prohibit-password/PermitRootLogin yes/' /etc/ssh/sshd_config
```

```bash
sudo systemctl restart ssh
```

```bash
sudo passwd
```

cockpit

```bash
/etc/cockpit/disallowed-users
```

---

## [Scripting](https://bash.cyberciti.biz/guide/Main_Page)

## Window Manager

## [APT Repository](https://www.linuxfordevices.com/tutorials/ubuntu/remove-an-apt-repository-ubuntu)

[Methods To Remove an APT](https://www.linuxfordevices.com/tutorials/ubuntu/remove-an-apt-repository-ubuntu)

add-apt-repository --remove ppa:linuxuprising/java

## [NetworkManager](https://learn.microsoft.com/en-us/windows-server/networking/core-network-guide/core-network-guide#BKMK_planning)

nmcli

nmcli d

nmcli conection show

nmcli device show

nmcli device set eth0 managed yes/no

## [Core Network Planning](https://learn.microsoft.com/en-us/windows-server/networking/core-network-guide/core-network-guide#BKMK_planning)

## [NetworkTools](https://www.geeksforgeeks.org/linux-networking-tools/?ref=lbp)

### [Subnet Calculator](https://www.solarwinds.com/free-tools/advanced-subnet-calculator)

### [Network Interface Name](https://www.baeldung.com/linux/network-interface-configure)

```bash
ip -br -4 a
```

```bash
ls /sys/class/net
```

```bash
ip link set eth0 up/down
```

```bash
ifconfig eth0 up/down
```

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

ifconfig ethx *xxx.xxx.xxx.xxx* netmask *xxx.xxx.xxx.xxx*

### List Services

systemctl list-unit-files --type=service

## NetworkManager

### Interface not managed

/etc/NetworkManager/conf.d/10-globally-managed-devices.conf

---

netplan

---

### [Restart Network Interface in Linux](https://www.cyberciti.biz/faq/linux-restart-network-interface/)

---

### Firewall

#### [Firewalld](https://firewalld.org/)

#### [IPTables](https://www.linode.com/docs/guides/what-is-iptables/)

## FRRouting

[Router](https://frrouting.org/)

---

### DHCP

isc-dhcp-server

#### DHCP Config

/etc/default/isc-dhcp-server

INTERFACES v4 = "eth0"

/etc/dhcp/dhcpd.conf

option domain-name "domain.com";

option domain-name-servers XX.XX.XX.XX;

default-lease-time 7200;

authoritative;

---

### DNS

#### DNS settings

##### [Make Permanent DNS Changes on resolv.conf in Linux](https://kifarunix.com/make-permanent-dns-changes-on-resolv-conf-in-linux/)

install resolvconf

/etc/resolvconf/resolv.conf.d/base
domain example.com
nameserver 8.8.8.8
nameserver 8.8.4.4

---

```bash
resolvconf -u
```

---

nano /etc/resolv.conf

---

#### [Bind9](https://bind9.readthedocs.io/en/latest/index.html)

### Set Hostname

```bash
hostnamectl set-hostname --static "ServerName"

hostnamectl set-hostname --pretty "ServerName"
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

```bash
[$] ping google.com # check Internet connection
[$] traceroute google.com # trace IP packets
[$] ifconfig # check host config
[$] route -n # check routing config
[$] dig [@dns-server.com] host.dom [{a|mx|any}] |less # check host.dom DNS records by dns-server.com # for a {a|mx|any} record
[$] ipchains -L -n |less # check packet filter (2.2 kernel)
[$] iptables -L -n |less # check packet filter (2.4 kernel)
[$] netstat -a # find all open ports
[$] netstat -l --inet # find listening ports
[$] netstat -ln --tcp # find listening TCP ports (numeric)
```

---

## [SAMBA Share](https://wiki.samba.org/index.php/Main_Page)

## Domain controller on Linux server

How to use *[Samba](https://www.samba.org/samba/what_is_samba.html)* as a reliable domain controller Linux server.

### Prerequisites

- Hostname: space.net
- IP Address: 10.10.10.254
- Domain: SPACE.NET
- FQDN: pdc.space.net

### Preparing the Domain Controller on Linux Server

Add your server’s hostname and FQDN entries in the local *hosts* (`/etc/hosts`) file.

Delete any entry that maps your hostname or FQDN to any IP besides the static IP.

Add an entry to map your host’s FQDN and static IP address.

Save the *hosts* (/etc/hosts) file and exit the editor.

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

## [PHP](https://techvblogs.com/blog/install-multiple-php-versions-on-ubuntu-22-04)

## [Kali.org](https://www.kali.org/)

### [Kali inside Hyper-V (Guest VM)](https://www.kali.org/docs/virtualization/install-hyper-v-guest-vm/)

## [ZSH](https://ohmyz.sh/) - CLI

## Install

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

## Find your [Theme](https://github.com/ohmyzsh/ohmyzsh/wiki/Themes)

## Select theme using `omz`

`omz theme set nameTheme/nameTheme`

## [Geeks4Geeks](https://www.geeksforgeeks.org/)

## ASCII LOGO

host /etc/motd

[AANSI Shadow](https://patorjk.com/software/taag/#p=display&f=ANSI%20Shadow&t=Type%20Something%20)

## [VI text editor](https://kb.iu.edu/d/adxz)

The vi text editor has three modes: Command, Input, and Ex.

### Command mode

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

### Input mode

The input mode lets you insert or append text. To insert text before the cursor's current position, in command mode, press `i`. Similarly, to append after the cursor, you can type `a`. Remember that you can't move around with the cursor keys in this mode. When you're done entering text, press `Esc` to go back to command mode.

### Ex mode

The ex mode is an extension of command mode. To get into it, press `Esc` and then `:` (the colon). The cursor will go to the bottom of the screen at a colon prompt. Write your file by entering `:w` and quit by entering `:q`. You can combine these to save and exit by entering `:wq`. However, if you're finished with your file, it's generally more convenient to type `Shift-z-z` from command mode.

### Quit the vi editor without saving your changes

To quit the [vi](https://kb.iu.edu/d/adxz) editor without saving any changes you've made:

1. If you are currently in insert or append mode, press `Esc`.
2. Press `:` (colon). The cursor should reappear at the lower left corner of the screen beside a colon prompt.
3. Enter the following:

   ```bash
    q!
   ```

   This will quit the editor, and all changes you have made to the document will be lost.

## [Install KVM on Ubuntu Linux](https://adamtheautomator.com/ubuntu-install-kvm/)
