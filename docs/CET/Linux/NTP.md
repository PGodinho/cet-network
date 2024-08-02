# [NTP](https://en.wikipedia.org/wiki/Network_Time_Protocol)

## [Configuring NTP](https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst4000/8-2glx/configuration/guide/ntp.html) by cisco

### Configure Router as NTP Client

```bash
Router>
Router>enable
Router#configure terminal
Router(config)#clock timezone PT 0
Router(config)#ntp server 10.0.0.1
```

### Configure NTP Authentication on router

```bash
Router>
Router>enable
Router(config)#ntp authentication-key 1 md5 Passw0rd.
Router(config)#ntp trusted-key 123
Router(config)#ntp server 10.0.0.1  key  123
```

### Check Status of NTP Sync

```bash
Router#
Router#show ntp status
Router#show ntp associations
Router#show clock
Router#show clock detail

```


## [MASTER CLOCK](https://en.wikipedia.org/wiki/Master_clock)

## SERVER CLOCK

## [NETWORK CLOCK](https://en.wikipedia.org/wiki/Clock_network)

### [Clock NetWork](https://en.wikipedia.org/wiki/Clock_network)
