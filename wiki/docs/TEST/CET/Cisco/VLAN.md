# VLAN

```bash
> Router/Switch(config)#vlan [VLAN number or name]
```

## SWITCH

```bash
Switch(config)#vlan [VLAN number or name]
```

Switch ports could be either **access** or **trunk**.

### ACCESS port

**is  assigned to a single VLAN** . These ports are configured for switch ports that connect to devices with a normal network card, for example a PC in a network.

### TRUNK port

is a port that can be **connected to another switch or router**. This port can carry traffic of multiple VLANs.

```bash
Switch(config)#interface GigabitEthernet 0/1
Switch(config-if)#switchport mode trunk
Switch(config-if)#exit
Switch(config)#
```

---

## ROUTER

### inter-VLAN routing on the router

```bash
Router>enable
Router#config terminal

Router(config)#int fa0/0
Router(config-if)#no shutdown

Router(config-if)#int fa0/0.10
Router(config-subif)#encapsulation dot1q 10
Router(config-subif)#ip add 192.168.1.1 255.255.255.0
Router(config-subif)#

Router(config-subif)#int fa0/0.20
Router(config-subif)#encapsulation dot1q 20
Router(config-subif)#ip add 192.168.2.1 255.255.255.0
```
