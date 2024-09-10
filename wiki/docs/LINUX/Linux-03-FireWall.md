---
title: FireWall
icon: fontawesome/solid/shield-halved
---

## [Firewalld](https://firewalld.org/)

### [Using and configuring firewalld](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/9/html/configuring_firewalls_and_packet_filters/using-and-configuring-firewalld_firewall-packet-filters)

#### [How to configure a firewall on Linux with firewalld](https://www.redhat.com/sysadmin/firewalld-linux-firewall)

```shell
firewall-cmd  [Option] [Rule]
```

| Option                          | Description                                                                                                                                                                                                              |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| --add-rich-rule='[RichRule]'    | Add specified [*RichRule* ] rule to default zone. To add rule in other zone, provide its name as argument with ***--zone*** option. To add rule permanently use ***--permanent*** option.              |
| --query-rich-rule='[RichRule]'  | Figure out whether the specified rule is added in default zone or not. To query in other zone, provide its name with***--zone*** option.                                                                                 |
| --remove-rich-rule='[RichRule]' | Remove specified [*RichRule* ] rule from default zone. To remove rule from other zone, provide its name as argument with ***--zone*** option. To remove rule permanently use ***--permanent*** option. |
| --list-rich-rules               | List all rules from default zone. To list rules from other zone, provide its name as argument with***--zone*** option.                                                                                                   |

Syntax

```shell
Rule
[source] [destination]
{service|port|protocol|icmp-block|masquerade|forward-port}
    [log] [audit]
[accept|reject|drop]
```

---

```shell
firewall-cmd --list-all-zones
```

```shell
firewall-cmd --get-active-zones
```

```shell
firewall-cmd --zone=internal --add-service=ssh
```

```shell
firewall-cmd --zone=public --remove-service=ssh
```

```shell
firewall-cmd --list-rich-rules
```

```shell
firewall-cmd --list-all
```

### Deny all connect

```shell
firewall-cmd --permanent --zone=drop --change-interface=eth0
```

```shell
firewall-cmd --permanent --direct --add-rule ipv4 filter OUTPUT 2 -j DROP
```

specific port for specific Ip:

```shell
firewall-cmd --permanent --zone=home --add-rich-rule='rule family="ipv4" port="8080/tcp" source address="192.168.78.76/32" accept'
```

accept special connect:

```shell
firewall-cmd --permanent --zone=home --add-source=192.168.1.1/32
```

```shell
firewall-cmd --permanent --zone=home --remove-source=192.168.1.1/32
```

```shell
firewall-cmd --permanent --zone=drop --add-rich-rule='rule family="ipv4" source address="192.168.1.1/32" accept'
```

#### [Masquerade](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/7/html/security_guide/sec-configuring_ip_address_masquerading)

```shell
firewall-cmd --zone=external --add-masquerade
```

```shell
firewall-cmd --zone=external --remove-masquerade
```

---

### Complex Firewall Rules

#### Rich Language

```shell
rule [family="rule family"]
    [ source [NOT] [address="address"] [mac="mac-address"] [ipset="ipset"] ]
    [ destination [NOT] address="address" ]
    [ element ]
    [ log [prefix="prefix text"] [level="log level"] [limit value="rate/duration"] ]
    [ audit ]
    [ action ]
```

#### [How to add Rich Rules](https://www.computernetworkingnotes.com/linux-tutorials/firewalld-rich-rules-explained-with-examples.html)

EG: " *Allow Telnet connection only from 192.168.1.101/24. Limit this connection one per minute. Drop Telnet connection from remaining hosts.* "

```shell
firewall-cmd --add-rich-rule='rule family=ipv4 source address=192.168.1.101/32 service name=telnet limit value=1/m accept'
```

Let's understand this command step by step

| Command / Option/ Argument | Descriptions                                                                                                                                                                                                                                                                                      |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| firewall-cmd               | main command                                                                                                                                                                                                                                                                                      |
| --add-rich-rule            | This option tells main command that we want to perform add operation                                                                                                                                                                                                                              |
| rule                       | The***rule*** keyword represents the starting point of rule. Rules start with single quote followed by a rule keyword and end with a single quote ( ‘rule…………').                                                                                                                     |
| -s 192.168.1.101/32        | This is a filter condition which says apply the rule if packet is coming from source 192.168.1.101/24. Don't confuse with /32. It is not a subnet mask. It is a wildcard mask. In rich rules we use wildcard mask instead of subnet mask. To specify a particular host /32 wildcard mask is used. |
| service name=telnet        | This is also a filter condition which says apply the rule if packet is coming for telnet service                                                                                                                                                                                                  |
| limit value=1/m            | Allow only one connection in a minute                                                                                                                                                                                                                                                             |
| accept                     | Allow the packet if filter conditions are match.                                                                                                                                                                                                                                                  |

In easy language above command says "Let the packet pass if it is coming for telnet service from host 192.168.1.101/24".

Here I have question for you " *Is this rule sufficient for first requirement? Or do we need to add one more rule which deny all hosts from network 192.168.1.0/24* ."

If only rich rules are going to filter the traffic then as I explained above ( in rich rule ordering section) we need one more rule to meet with first requirement.

* First rule :- Allow host 192.168.1.101/24
* Second rule :- Deny network 192.168.1.0/24

Following command will create rich rule for second requirement which says " *Allow SSH connection from network 192.168.1.0/24. Log each access with "SSH Access" prefix* "

```shell
firewall-cmd --add-rich-rule='rule family=ipv4 source address=192.168.1.0/24 service name=ssh log prefix="SSH Access" level="notice" accept'
```

Following command will create rich rule for third requirement ( *Allow FTP connection only from 192.168.1.2/24. Reject FTP connections from remaining systems* .).

```shell
firewall-cmd --add-rich-rule='rule family=ipv4 source address=192.168.1.2/32 port port=21 protocol=tcp  accept'
```

Following command will create rich rule for last requirement (*Reject ping requests from all hosts with error message.* ).

```shell
firewall-cmd --add-rich-rule='rule protocol value=icmp reject'
```

---

### SAVE

```shell
firewall-cmd --runtime-to-permanent
```

### RELOAD

```shell
systemctl reload firewalld
```

---

### RESTORE to DEFAULT

```shell
iptables -F`
```

## IPTables

### [RH-IPTables](https://access.redhat.com/documentation/pt-br/red_hat_enterprise_linux/6/html/security_guide/sect-security_guide-iptables)

```shell
iptables -A FORWARD -i ens34 -o ens33 -m state --state
```

```shell
iptabels -t nat -A POSTROUTING -o ens33 -j MASQUERADE
```

```shell
iptabels -A FORWARD -p tcp -s 10.10.10.0/24 -d 0/0 --dpo
```
