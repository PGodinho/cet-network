---
title: NetWork
icon: fontawesome/solid/network-wired
---

## [Networking Guide](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/7/html/networking_guide/index)

### [Red Hat Products and Documentation](https://access.redhat.com/products?product-tab=glossary##)

## [NetworkManager](https://networkmanager.dev/)

### [NetworkManager Docs](https://networkmanager.dev/docs/)

```bash
apt install network-manager
```

```bash
nmcli
```

```bash
nmcli d
```

```bash
nmcli conection show
```

```bash
nmcli device show
```

```bash
nmcli device set eth0 managed yes/no
```

```bash
nmcli connection modify <interface_name> +ipv4.routes "<network_ip> <gateway_ip>"
```

```bash
nmcli connection modify eth0 +ipv4.routes "10.0.3.0/24 10.0.3.1"
```

---

### Config files

**[NetworkManager.conf](https://gitlab.freedesktop.org/NetworkManager/NetworkManager/-/blob/main/contrib/fedora/rpm/NetworkManager.conf)**

```bash
/etc/NetworkManager/etworkManager.conf
```

---

## [Netplan](https://netplan.readthedocs.io/)

### [Examples](https://netplan.readthedocs.io/en/0.106/examples/)

```bash
netplan get
```

<!-- termynal: {"prompt_literal_start": ["$", ">>>", "PS >"], title: TERMINAL, buttons: windows} -->
```bash
$ netplan apply

PS ** (generate:4647): WARNING **: 14:11:26.187: 
Permissions for '/etc/netplan/01-netcfg.yaml' are too open.
Netplan configuration should NOT be accessible by others.
```

```bash
sudo chmod 600 /etc/netplan/your_config_file.yam
```

## [DHCP](https://en.wikipedia.org/wiki/Dynamic_Host_Configuration_Protocol)

## [Dynamic Host Configuration Protocol](https://en.wikipedia.org/wiki/Dynamic_Host_Configuration_Protocol)

[ISC.ORG](https://www.isc.org/)

ISC develops and distributes three open source Internet networking software packages:

* [BIND 9](https://www.isc.org/bind),
* [ISC DHCP](https://www.isc.org/dhcp),
* [Kea DHCP](https://www.isc.org/kea).

## [ISC-DHCP-SERVER](https://www.isc.org/dhcp/)

### Install & Config

---

#### Troubleshoot

#### Examples
