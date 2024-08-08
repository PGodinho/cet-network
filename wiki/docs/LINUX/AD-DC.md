# [AD-DC ](https://wiki.samba.org/index.php/Main_Page)

## [Active Directory Domain Controller](https://wiki.samba.org/index.php/Main_Page)

## [Samba as AD and Domain Controller](https://fedoramagazine.org/samba-as-ad-and-domain-controller/)

Having a server with Samba providing AD and Domain Controller functionality will provide you with a very mature and professional way to have a centralized place with all users and groups information.

This solution is useful for authenticating applications such as WordPress, FTP servers, HTTP servers...

## Pre-requisites

A fresh Linux server installation.

ROOT access Level

## Definitions

 **Hostname** : dc1.domain.name
 **Domain** : domain.name
 **IP** : 10.1.1.242/24

## Considerations

* Once the domain was chosen, you can't change it, be wise;
* In the */etc/hosts* file, the server name can't be on *127.0.0.1* line, it must be on its IP address line;
* Use a fixed IP address for the server, as a result, the server's IP won't change;
* Once you provision the DC server, do not provision another one, join other ones to the domain instead;
* For the DNS server, we will choose  *SAMBA_INTERNAL*, so we can have the DNS forwarding feature;
* It is necessary to have a time synchronization service running in the server, like chrony or  *ntp* , so you can avoid numerous problems from not having the server and clients synchronized with the same time.

## Samba Instalation

```bash
apt install samba samba-dc samba-client krb5-workstation
```

## Configurations

For setting up Samba as an AD and Domain Controller, you will have to prepare the environment with a functional configuration before you start using it.

### Hostname

Ensure the hostname of your server is set to its [fully-qualified domain name (FQDN)](https://docs.fedoraproject.org/en-US/Fedora/25/html/Networking_Guide/ch-Configure_Host_Names.html#sec_Understanding_Host_Names).

```bash
hostnamectl hostname dc1.domain.name
```

### Firewall

You will need to allow some UDP and TCP ports through the firewall so that clients will be able to connect to the Domain Controller.

I will show you two methods to add them. Choose the one that suits you best.

#### First method

This is the most straightforward method, firewalld comes with a service with all ports needed to open Samba DC, which is called  *samba-dc* . Add it to the firewall rules:

Add the service:

```bash
firewall-cmd --permanent --add-service samba-dc
```

#### Second method

Alternatively, you can add the rules from the command line:

```bash
firewall-cmd --permanent --add-port={53/udp,53/tcp,88/udp,88/tcp,123/udp,135/tcp,137/udp,138/udp,139/tcp,389/udp,389/tcp,445/tcp,464/udp,464/tcp,636/tcp,3268/tcp,3269/tcp,49152-65535/tcp}
```

Reload  *firewalld* :

```bash
firewall-cmd --reload
```

### SELinux

To run a Samba DC and running with SELinux in enforcing mode, it is necessary to set some samba booleans for SELinux to on. After these booleans are set, it should not be necessary to disable SELinux.

```bash
setsebool -P samba_create_home_dirs=on samba_domain_controller=on samba_enable_home_dirs=on samba_portmapper=on use_samba_home_dirs=on
```

Restore the default SELinux security contexts for files:

```bash
restorecon -Rv /
```

### Samba

First, move or remove the */etc/samba/smb.conf* file if it exists:

```bash
mv /etc/samba/smb.conf /etc/samba/smb.conf.bak
```

Samba uses its own DNS service, and for that reason, the service won't start if *systemd-resolved* is running, that is why it is necessary to edit its configuration to stop listening on port 53 and use Samba's DNS.

Create the directory /etc/systemd/resolved.conf.d/ if it does not exist:

```bash
mkdir /etc/systemd/resolved.conf.d/
```

Create the file */etc/systemd/resolved.conf.d/custom.conf* that contains the custom config:

```bash
[Resolve]
DNSStubListener=no
Domains=domain.name
DNS=10.1.1.242
```

**Remember to change the DNS and *Domains *entries to be your Samba DC server.****

Restart the *systemd-resolved* service:

```bash
systemctl restart systemd-resolved
```

Finally, provision the Samba configuration. *samba-tool* provides every step needed to make Samba an AD server.

Using the  *samba-tool* , provision the Samba configuration:

```bash
samba-tool domain provision --server-role=dc --use-rfc2307 --dns-backend=SAMBA_INTERNAL --realm=DOMAIN.NAME --domain=DOMAIN --adminpass=Passw0rd.
```

The *‐‐use-rfc2307* argument provides POSIX attributes to Active Directory, which stores Unix user and group information on LDAP ([rfc2307.txt](https://www.rfc-editor.org/rfc/rfc2307.txt)).

Make sure that you have the correct *dns forwarder* address set in  */etc/samba/smb.conf* . Concerning this tutorial, it should be **different** from the server's own IP address 10.1.1.242, in my case I set to 8.8.8.8, however your mileage may vary:

Changing the *dns forwarder* value on */etc/samba/smb.conf* file:

```bash
[global]
        DNS forwarder = 8.8.8.8
        netbios name = DC1
        realm = DOMAIN.NAME
        server role = active directory domain controller
        workgroup = DOMAIN
        idmap_ldb: use rfc2307 = yes
[sysvol]
        path = /var/lib/samba/sysvol
        read only = No
[netlogon]
        path = /var/lib/samba/sysvol/domain.name/scripts
        read only = No
```

### Kerberos

After Samba installation, it was provided a *krb5.conf* file that we will use:

```bash
cp /usr/share/samba/setup/krb5.conf /etc/krb5.conf.d/samba-dc
```

Edit */etc/krb5.conf.d/samba-dc* content to match your organization information:

```bash
[libdefaults]  default_realm = DOMAIN.NAME
  dns_lookup_realm = false
  dns_lookup_kdc = true
[realms]
DOMAIN.NAME = {
  default_domain = DOMAIN
}
[domain_realm]
  dc1.dimain.name = DOMAIN.NAME
```

### Starting and enabling Samba on boot time

To make sure that Samba will start on system initialization, enable and start it:

```bash
systemctl enable samba
systemctl start samba
```

## Testing

### Connectivity

```bash
smbclient -L localhost -N
```

As a result of *smbclient* command, shows that connection was successful.

```bash
Anonymous login successful
        Sharename       Type      Comment
        ---------       ----      -------
        sysvol          Disk
        netlogon        Disk
        IPC$            IPC       IPC Service (Samba 4.15.6)
SMB1 disabled -- no workgroup available
```

Now, test the *Administrator* login to *netlogon* share:

```bash
smbclient //localhost/netlogon -UAdministrator -c 'ls'
```

```bash
Password for [DOMAIN\Administrator]:
  .                              D        0  Sat Mar 26 05:45:13 2022
  ..                             D        0  Sat Mar 26 05:45:18 2022

                8154588 blocks of size 1024. 7307736 blocks available
```

### DNS test

To test if the name resolution is working, execute the following commands:

```bash
host -t SRV _ldap._tcp.domain.name.
_ldap._tcp.domain.name has SRV record 0 100 389 dc1.domain.name.
```

```bash
host -t SRV _kerberos._udp.domain.name.
_kerberos._udp.domain.name has SRV record 0 100 88 dc1.domain.name.
```

```bash
host -t A dc1.domain.name.
dc1.onda.org has address 10.1.1.242
```

If you get the error:

```bash
-bash: host: command not found
```

Install the *bind-utils* package:

```bash
apt install bind-utils
```

### Kerberos test

Testing Kerberos is important because it generates the required tickets to let clients authenticate with encryption. It heavily relies on correct time.

It can't be stressed enough to have date and time set correctly, and that is why it is so important to have a time synchronization service running on both clients and servers.

```bash
kinit administrator
```

```bash
klist
```

## Adding a user to the Domain

*samba-tool* provides us an interface for executing Domain administration tasks, so we can add a user to the Domain easily.

The *samba-tool* help is very comprehensive:

```bash
samba-tool user add --help
```

Adding user *anonimo* to the domain:

```bash
samba-tool user add anonimo --unix-home=/home/anonimo --login-shell=/bin/bash --gecos 'Anónimo S.' --given-name=Anónimo --surname='Sousa' --mail-address='anonimo.sousa@domain.name'
```

To list the users on Domain:

```bash
samba-tool user list
```

## Wrap up and conclusion

We started out by installing Samba and required applications in a fresh Linux installation. We've also explained the problems that this solution solves. Thereafter, we did an initial configuration that prepares the environment to be ready to Samba to operate as an AD and Domain Controller.

Then, we proceeded to cover how to have Samba up and running alongside Fedora Linux security features, like having it working with *firewalld* and SELinux enabled. We did some important testing to make sure everything was fine and ended by showing a bit on how to administrate users using  *samba-tool* .

To summarize, if you want to establish a robust solution for centralizing authentication across your network, servers (If one wanted to, one could even join a Windows 10 client to this Samba domain [ *tested with Windows 10 Professional version 20H2* ]) and services, consider using this approach as part of your infrastructure.

Now that you know how to have a Samba as AD and Domain Controller solution

---
