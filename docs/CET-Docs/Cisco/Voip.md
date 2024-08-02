# [VOIP](https://pt.wikipedia.org/wiki/Voz_sobre_IP)

## [IP Telephony/Voice over IP (VoIP)](https://www.cisco.com/c/en/us/tech/voice/ip-telephony-voice-over-ip-voip/index.html)

### [Packet Tracer 8.1.1 tutorial - IP telephony basic configuration](https://www.packettracernetwork.com/tutorials/voipconfiguration.html)

### [Router Config](https://github.com/PGodinho/cet-network/wiki/CET-Packet-Tracer-IOS#router-config)

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

### [Phone Config](https://github.com/PGodinho/cet-network/wiki/CET-Packet-Tracer-IOS#phone-config)

```shell
ephone-dn 1
number 1002
```

### [Switch config](https://github.com/PGodinho/cet-network/wiki/CET-Packet-Tracer-IOS#switch-config)

```shell
int range f0/1-3
switchport voice vlan 1
```
