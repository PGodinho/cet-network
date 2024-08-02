# [CISCO IOS](https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/fundamentals/configuration/15mt/fundamentals-15-mt-book/cf-cli-basics.html)

## [VSC Cisco IOS Syntax](https://marketplace.visualstudio.com/items?itemName=jamiewoodio.cisco)

**`enable`** :- This command is used to enter in privileged exec mode.

**`configure terminal`** :- This command is used to enter in global configuration mode.

**`interface serial 0/0/0`** :- This command is used to enter in interface mode.

### [Cisco Interface name Format](https://www.cisco.com/assets/sol/sb/Switches_Emulators_v2_3_5_xx/help/350_550/index.html#page/tesla_350_550_olh/ts_getting_started_01_22.html)

`<interface-type> <slot> / <port>`

| Interface         | `<interface-type>` |
| ----------------- | -------------------- |
| Ethernet          | Ethernet             |
| FastEthernet      | FastEthernet         |
| GigabitEthernet   | GigabitEthernet      |
| 10GigabitEthernet | TenGigabitEthernet   |
| Serial            | Serial               |
| ISDN BRI          | BRI                  |

## [Meraki](https://documentation.meraki.com/)

## [Router Network](https://router-network.com/)

```shell
Router>enable
```

## ADMIN Accesss

Acesso administrativo

```shell
Router>enable
Router>reload startup-config
Router#configure terminal
Router(config)#
```

### NAME

Nome

```shell
Router(config)#hostname nameDoHost
```

### Save Settings

```shell
Router#
Router#show running-config
Router#show startup-config
Router#copy running-config startup-config
Router#end
Router#write
```

### [Banner](https://networklessons.com/cisco/ccie-routing-switching/how-to-configure-cisco-ios-banners)

#### Mensagem

```shell
Router(config)#banner motd #mensagem# [ex: Acesso reservado a utilizadores autorizados]
Router(config)#interface FastEthernet0/1
Router(config-if)#description #####
Router(config-if)#end
Router#show interfaces
```

### Segurança

#### Administrador

```shell
Router(config)#enable secret Passw0rd.
Router(config)#exit
```

##### [Enable Password / Enable Secret](https://community.cisco.com/t5/network-security/enable-password-and-enable-secret/td-p/1931118)

> **#enable password** - it will enables a password that based on a **clear text.**
>
> These passwords were stored as clear-text in the configuration, and could be read by anyone calling  **show running-config** .
>
> Cisco then implemented **service password-encryption** to store these passwords as a different combination of characters using an algorithm. These are the passwords of type "7". This was still insecure: Googling "cisco password decryption" will yield websites that will decrypt type 7 passwords.
>
> **# enable secret -** it will enables a password and **password encryption** that based on the **md5** hashing algorithm. This is is a most recommended command to supply while enabling a password to any cisco network devices.
>
> Finally, Cisco came up with **enable secret** which hashes the passwords with an MD5 algorithm. The only way to find the original passwords would be through the use of a rainbow table, and even that is unlikely as more than two character strings may return the same MD5 hash.

#### Consola

```shell
Router#configure terminal
Router(config)#
Router(config)#line console 0
Router(config-line)#password Passw0rd. (consola)
Router(config-line)#logging synchronous
Router(config-line)#history size 0
Router(config-line)#exit
Router(config)#
Router(config)#service password-encryption
```

---

## PORT/IF/CONFIG

Configuração de Portas

```shell
Router#configure terminal
Router(config)#
Router(config)#interface g0/0
Router(config-if)#
Router(config-if)#ip address 192.168.1.254 255.255.255.0 #-->Depende da arquitetura de rede
Router(config-if)#no shutdown
Router(config-if)# exit
Router(config)#interface g0/1
Router(config-it)#
Router(config-it)#ip address 10.10.10.254 255.255.255.0 #-->Depende da arquitetura de rede
Router(config-it)#no shutdown
Router(config-it)#exit
Router#
```

---

## [RIP](https://en.wikipedia.org/wiki/Routing_Information_Protocol) ( *Routing Information Protocol* )

Padrão para troca de informações entre os *[gateways](https://pt.wikipedia.org/wiki/Gateway "Gateway")* e *[hosts](https://pt.wikipedia.org/wiki/Host "Host")*.

Projetado para redes com tamanho moderado, que utilizam uma tecnologia razoavelmente homogénea

RIP2, é uma evolução do RIP, e destina-se a expandir a quantidade de informação útil carregada nos pacotes e também adicionar uma medida de segurança.

### [How to configure RIP on a Cisco router](https://networklessons.com/rip/how-to-configure-rip-on-a-cisco-router)

```shell
Router(config)#router rip
Router(config)#version 2
Router(config)#network 192.168.1.0 #rede 1 // no network --> erase
Router(config)#network 145.23.23.0 #rede 2
```

### [Debug](https://study-ccna.com/debug-command/)

```shell
Router#debug ip rip [debug ip icmp] [debug all]
Router#no debug ip rip
```

---

## [Telnet](https://en.wikipedia.org/wiki/Telnet)

```shell
Router->enable
Router->configure terminal
Router(config)#line vty 0 15 #abre 16 ligações
Router(config)#line vty
Router(config-line)#password telnet
Router(config-line)#logging synchronous
Router(config-line)#history size 15
Router(config-line)#exec-timeout 120 #segundos
Router(config-line)#exit
```

## SSH Config

```shell
Router>
Router>enable
Router#configure terminal
Router(config)#hostname RT-FSociety
Router(config)#ip domain-name fsociety.net
Router(config)#crypto key generate rsa
Router(config)#ip ssh time-out 60 (segundos)
Router(config)#ip ssh authentication-retries 2
Router(config)#username admin privilege 15 secret cisco
Router(config)#line vty 0 15
Router(config-line)#login local
Router(config-line)#transport input ssh
Router(config-line)#exit
Router(config)#exit
Router#copy running-config startup-config
Router#show running-config
Router#exit
```

## [VLAN](https://pt.wikipedia.org/wiki/Virtual_LAN)

### [Cofigurar VLANs](https://www.cisco.com/c/en/us/td/docs/switches/datacenter/sw/5_x/nx-os/layer2/configuration/guide/Cisco_Nexus_7000_Series_NX-OS_Layer_2_Switching_Configuration_Guide_Release_5-x_chapter4.html)

---

```shell
Switch(config)#interface vlan [vlan name or number]
Switch(config-if)#ip address [ip address] [subnet mask]
```

EG:

```bash
Switch>enable
Switch>configure terminal
Switch(config)#interface vlan 1
Switch(config)#ip address 192.168.1.100 255.255.255.0
Switch(config)#no shutdown
Switch(config)#ip default-gateway ##.##.##.##
Switch(config)#show vlan
Switch#configure terminal
Switch(config)#interface f0/1
Switch(config-if)#switchport mode access
Switch(config-if)#switchport access vlan 10
Switch(config-if)#exit
Switch(config)#interface range f0/11-14
Switch(config-if-range)#switchport mode access
Switch(config-if-range)#switchport access vlan 20
Switch(config-if-range)#exit
Switch(config-if)#switchport mode trunk
Switch(config-if)#switchport trunk allowed vlan 20 [,30,40]
```

## [Configuring a LAN with DHCP and VLANs](https://www.cisco.com/en/US/docs/routers/access/800/850/software/configuration/guide/dhcpvlan.html)

### Creating and assigning VLANs

To create a VLAN, run the following command in global configuration mode.

```shell
Switch(config)#vlan [VLAN number or name]
```

To assign a VLAN to an interface, use the following command.

```shell
Switch(config-if)#switchport access vlan [VLAN number or name]
```

Create 3 VLANs: VLAN 10, VLAN 20, and VLAN 30 by running the following commands.

```shell
Switch>enable
Switch#configure terminal
Switch(config)#vlan 10
Switch(config-vlan)#exit
Switch(config)#vlan 20
Switch(config-vlan)#exit
Switch(config)#vlan 30
Switch(config-vlan)#exit
Switch(config)#
```

Assign **VLAN 10** to *Fa0/1* and  *Fa0/2* , **VLAN 20** to *Fa0/3* and  *Fa0/4* , and **VLAN 30** to *Fa0/5* and  *Fa0/6* .

```shell
Switch>enable
Switch#configure terminal
Switch(config)#interface FastEthernet 0/1
Switch(config-if)#switchport access vlan 10
Switch(config-if)#exit
Switch(config)#interface FastEthernet 0/2
Switch(config-if)#switchport access vlan 10
Switch(config-if)#exit
Switch(config)#interface FastEthernet 0/3
Switch(config-if)#switchport access vlan 20
Switch(config-if)#exit
Switch(config)#interface FastEthernet 0/4
Switch(config-if)#switchport access vlan 20
Switch(config-if)#exit
Switch(config)#interface FastEthernet 0/5
Switch(config-if)#switchport access vlan 30
Switch(config-if)#exit
Switch(config)#interface FastEthernet 0/6
Switch(config-if)#switchport access vlan 30
Switch(config-if)#exit
Switch(config)#
```

### Configuring trunk port

```shell
Switch(config)#interface GigabitEthernet 0/1
Switch(config-if)#switchport mode trunk
Switch(config-if)#exit
Switch(config)#
```

### Configuring DHCP server and creating DHCP pools

By default, DHCP service is enabled on all supporting Cisco switches. To use this service, we have to create and configure a DHCP pool on the switch.

The following table lists the steps that are required to create and configure a DHCP pool.

| **Configuration step** | **Description ( *required command* )**                                                                                                                    |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Define reserved IP addresses | Use the'ip dhcp excluded-address' command to define the range of reserved IP addresses.                                                                           |
| Create the DHCP pool         | To create a DHCP pool and enter DHCP pool configuration mode, use the'ip dhcp pool [*pool name* ]' command.                                                     |
| Define IP range for lease    | use the 'network [*network ID* ] [ *subnet mask* ]' command to define the range of IP addresses. DHCP uses this range to provide IP configuration to clients. |
| Set default gateway IP       | To set the default gateway IP address, use the 'default-router [*IP address of the default gateway* ]' command.                                                 |
| Set DNS server IP            | To set the DNS server IP address, use the'dns-server [*IP address of the DNS server* ]' command.                                                                |

Create three DHCP pools by using the above configuration steps.

```shell
Switch>enable
Switch#configure terminal
Switch(config)#ip dhcp excluded-address 10.0.0.1 10.0.0.10
Switch(config)#ip dhcp excluded-address 20.0.0.1 20.0.0.10
Switch(config)#ip dhcp excluded-address 30.0.0.1 30.0.0.10
Switch(config)#ip dhcp pool vPool10
Switch(dhcp-config)#network 10.0.0.0 255.0.0.0
Switch(dhcp-config)#default-router 10.0.0.1
Switch(dhcp-config)#dns-server 4.4.4.4
Switch(dhcp-config)#exit
Switch(config)#ip dhcp pool vPool20
Switch(dhcp-config)#network 20.0.0.0 255.0.0.0
Switch(dhcp-config)# default-router 20.0.0.1
Switch(dhcp-config)# dns-server 8.8.8.8
Switch(dhcp-config)#exit
Switch(config)#ip dhcp pool vPool30
Switch(dhcp-config)#network 30.0.0.0 255.0.0.0
Switch(dhcp-config)#default-router 30.0.0.1
Switch(dhcp-config)#dns-server 30.0.0.2
Switch(dhcp-config)#exit
Switch(config)#
```

### Assigning IP addresses to VLANs

DHCP uses the IP address of a VLAN to determine the pool from which it should provide an IP configuration. To assign an IP address to the VLAN, use the following commands.

```shell
Switch>enable
Switch#configure terminal
Switch(config)#interface vlan [vlan name or number]
Switch(config-if)#ip address [ip address] [subnet mask]
```

Assign an IP address to each VLAN from the reserved IP address of the corresponding DHCP pool.

```shell
Switch>enable
Switch#configure terminal
Switch(config)#interface vlan 10
Switch(config-if)#ip address 10.0.0.5 255.0.0.0
Switch(config-if)#exit
Switch(config)#interface vlan 20
Switch(config-if)#ip address 20.0.0.5 255.0.0.0
Switch(config-if)#exit
Switch(config)#interface vlan 30
Switch(config-if)#ip address 30.0.0.5 255.0.0.0
Switch(config-if)#exit
Switch(config)#
```

### Configuring the router's interface

By default, different VLANs cannot communicate with each other. To allow communication between different VLANs, we have to connect them through a router. We don't need a dedicated router interface for each VLAN. Routers support interface virtualization. We can use a single router interface to allow communication between multiple VLANs.

To virtualize the Fa0/0 interface and to configure it to allow communication between different VLANs, use the following configuration on the router.

```shell
Router>enable
Router#configure terminal
Enter configuration commands, one per line. End with CNTL/Z.
Router(config)#interface FastEthernet 0/0
Router(config-if)#no ip address
Router(config-if)#no shutdown
Router(config-if)#exit
Router(config)#interface FastEthernet 0/0.10
Router(config-subif)#encapsulation dot1Q 10
Router(config-subif)#ip address 10.0.0.1 255.0.0.0
Router(config-subif)#exit
Router(config)#interface FastEthernet 0/0.20
Router(config-subif)#encapsulation dot1Q 20
Router(config-subif)#ip address 20.0.0.1 255.0.0.0
Router(config-subif)#exit
Router(config)#interface FastEthernet 0/0.30
Router(config-subif)#encapsulation dot1Q 30
Router(config-subif)#ip address 30.0.0.1 255.0.0.0
Router(config-subif)#exit
Router(config)#
```

## [VOIP](https://pt.wikipedia.org/wiki/Voz_sobre_IP)

### [Packet Tracer 8.1.1 tutorial - IP telephony basic configuration](https://www.packettracernetwork.com/tutorials/voipconfiguration.html)

### Router Config

```shell
Router>
Router>enable
Router#configure terminal
Router(config)#ip dhcp pool VOICE
Router(dhcp-config)#option 150 ip 10.10.10.254 #atribuir som/voz
Router(dhcp-config)#exit
Router(config)#
Router(config)#telephony-service
Router(config-telephony)#max-dn 3 #n.º de telefones
Router(config-telephony)#max-ephones 3 #Qtd de telefones fisicos
Router(config-telephony)#ip source-address 10.10.10.254 port 2000
Router(config-telephony)#auto assign 1 to 3
Router(dhcp-telephony)#exit
```

### Phone Config

```shell
ephone-dn 1
number 1002
```

### Switch config

```shell
int range f0/1-3
switchport voice vlan 1
```

---

## [TCP/IP](https://pt.wikipedia.org/wiki/Endere%C3%A7o_IP)

## [Transmission Control Protocol](https://en.wikipedia.org/wiki/Transmission_Control_Protocol)

## [Internet Protocol](https://en.wikipedia.org/wiki/Internet_Protocol)

## [DHCP](https://pt.wikipedia.org/wiki/Dynamic_Host_Configuration_Protocol)

## [Dynamic Host Configuration Protocol](https://en.wikipedia.org/wiki/Dynamic_Host_Configuration_Protocol)

```shell
Router>enable
Router(config)#configure terminal
Router(config)#ip dhcp pool DHCPSERVER
Router(dhcp-config)#network 10.10.10.0 255.255.255.0
Router(dhcp-config)#default-router 10.10.10.254
Router(dhcp-config)#dns-server 30.30.30.30
Router(dhcp-config)#exit
Router(config)#exit
```

IP DHCP excluded-address (excluir os 20 primeiros IP's)

```shell
Router>enable
Router>configure terminal
Router(config)#ip dhcp excluded-address 10.10.10.1 10.10.10.20
Router(config)#ip dhcp excluded-address 10.10.10.250 10.10.10.254
Router(config)#end
Router>write
```

## [NTP](https://en.wikipedia.org/wiki/Network_Time_Protocol)

**Network Time Protocol** ( **NTP** ) is a [networking protocol](https://en.wikipedia.org/wiki/Networking_protocol "Networking protocol") for [clock synchronization](https://en.wikipedia.org/wiki/Clock_synchronization "Clock synchronization") between computer systems.

```shell
Router>enable
Router(config)#configure terminal
Router(config)#ntp server xx.xx.xx.xx
Router(config)#exit
Router#copy running-config startup-config
```

Destination filename [startup-config]?

```shell
Router#write
```

SHOW Options:

```shell
Router#show ntp status
Router#show ntp associations
Router#show clock
Router#show detail
```

## [Set Clock Rate on Router Serial Interface](https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/interface/command/ir-cr-book/ir-c2.html)

## DTE (Data Terminating Equipment)

DTE devices are computers, routers and bridges. Slaves

## DCE (Data Circuit Terminating Equipment)

Equipment or devices which provide clocking to other devices. Master

---

```shell
Router>enable
Router#(config-if)# clock rate 64000
```

---

## NAT

## [Network address translation](https://en.wikipedia.org/wiki/Network_address_translation)

## ARP

## [Address Resolution Protocol](https://en.wikipedia.org/wiki/Address_Resolution_Protocol)

## [FireWall - Router](https://www.cisco.com/c/en/us/td/docs/routers/access/1800/1801/software/configuration/guide/scg/firewall.html)

ACL - Access Control List

The ACLs are divided into two types

* standard ACLs,
  * are access control lists that define which traffic is allowed to travel and cross a network. They are used to filter traffic based on source and destination IP addresses.
* extended ACLs.
  * are more difficult to configure and require more processor time than the standard access lists, but they enable a much more granular level of control.

A standard ACL can be either a numbered or named.

A numbered ACL has a range of **1-99** or **1300-1999** .

When configuring a standard ACL, you will need to specify a range of IP addresses.

The range can be either a host IP address or a network IP address.

---

**ACL Rules STD - Reverse Mask

**0.0.0.0 for Host

**0.0.0.255 for NETWORK

---

```shell
RT(config)#access-list 1 deny 192.168.1.0  0.0.0.255
RT(config)#access-list 2 permit 192.168.7.0  0.0.0.255
RT(config)#access-list 2 permit any
RT(config)#int fa 0/0  (192.168.1.0)
RT(config)#int fa 1/0 (10.0.0.0)
RT(config-if)#ip access-group 2  out
RT# show access-list
```

---

## [Frame Relay](https://content.cisco.com/chapter.sjs?uri=/searchable/chapter/content/en/us/td/docs/ios-xml/ios/wan_frly/configuration/15-s/wan-frly-15-s-book/wan-cfg-frm-rly.html.xml)

Ligaçãode dados de altavelocidade

A comunicação é feita dividindo o pack em quadros (frame) de forma a acelerar o envio, no entanto é uma rede não confiável pois não temcontrolo de erros nem de fluxo.

Baseia-se num circuito“virtual” onde as portas são utilizadas para a partilha de frames.

```shell
Router>enable
Router#configure terminal
Router(config)#interface serial 0/0/0
Router(config-if)#encapsulation frame-relay
```

A estratégia é criar uma tabela com as ligações necessárias, em cada Porta Série, atribuir uma DLCI para cada ligação (router).

The DLCI is a number that identifies the logical circuit between the router and the frame relay switch.

![Frame Relay DLCI](https://github.com/PGodinho/cet-network/blob/main/image/wiki-pics/dlci-table.png?raw=true)

Permite uma melhor visualização das ligações a manipular:

![Frame Relay Table](https://github.com/PGodinho/cet-network/blob/main/image/wiki-pics/frame-relay-table.png?raw=true)

---
