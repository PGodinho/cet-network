# [CMD](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/cmd)

```bash
ipconfig /all /release /renew
```

```bash
arp -a
```

## Change IP Address in Windows via Command Prompt

```
netsh interface show interface
```

### To set/change an address:

```
netsh interface ip set address "Ethernet" static 10.0.0.100 255.255.0.0 10.0.0.1 1
```

Where "Ethernet" is the name of the interface,

10.0.0.100 is the IP address,

255.255.0.0 is the subnet mask,

and

10.0.0.1 is the default gateway.

### To see a list of NICs with their configured network settings

```
netsh interface ip show config
```

### To set a static IP

```
netsh interface ip set address "ifname in quotes" static ipaddr subnetmask gateway metric
```

Ex:

if you need to set the IP address on Local Area Connection 3 to 10.0.0.100 (with a /16 subnet mask and a 10.0.0.1 default gateway:

```
netsh interface ip set address "Local Area Connection 3" static 10.0.0.100 255.255.0.0 10.0.0.1 1
```

If you are setting a static IP for the first time, you will also need to configure a DNS server:

```
netsh interface ipv4 add dnsserver "Local Area Connection 3" address=8.8.8.8 index=1
```

To change the connection back to DHCP

```
netsh interface ip set address "Local Area Connection 3" dhcp
```

---

## WINDOWS SYSADMIN COMMANDS ( EXPLORER / CMD / POWERSHELL )

**please use these tools with caution, data loss can happen.**
use help ( /?, /help, -?, -help, get-command) if necessary.

---

## USEFUL COMMANDS ( POWERSHELL ):

page by: [koomalabra.henkka.info](https://koomalabra.henkka.info/)

( | out-gridview *is optional* )

| command                                                                                                                             | description                                                                |
| ----------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| get-command *                                                                                                                       | list all powershell commands / aliases / help                              |
| get-process                                                                                                                         | shows all processes                                                        |
| stop-process -name [appname]                                                                                                        | stop application / process by name                                         |
| stop-process -id [appid]                                                                                                            | stop application / process by id                                           |
| calc                                                                                                                                | start calculator                                                           |
| cd c:\users\[username]\desktop                                                                                                      | change current directory to users desktop                                  |
| dir -name                                                                                                                           | list current directory files and forlders                                  |
| chkdsk c:                                                                                                                           | checks disk drive c for errors !use with caution - read help before start! |
| get-service                                                                                                                         | shows all services                                                         |
| powershell_ise                                                                                                                      | start ps_ise utility - use it to learn powershell                          |
| taskmgr                                                                                                                             | start task-manager gui                                                     |
| whoami                                                                                                                              | shows hostname and current username                                        |
| winver                                                                                                                              | shows build details about windows                                          |
| get-childitem -path *.txt -recurse                                                                                                  | list all txt-files (textfiles) from current directory and all subfolders   |
| firewall                                                                                                                            | open windows firewall gui                                                  |
| get-date                                                                                                                            | shows date and time                                                        |
| get-disk                                                                                                                            | shows available disks                                                      |
| get-netadapter                                                                                                                      | shows available net interfaces                                             |
| get-netipinterface                                                                                                                  | shows connections                                                          |
| get-ciminstance win32_computersystem                                                                                                | show information about host system                                         |
| get-volume                                                                                                                          | list all disk volumes                                                      |
| systeminfo                                                                                                                          | host system information / check hyper-v requirements                       |
| tasklist                                                                                                                            | List all processes currently running                                       |
| iex "& { $(irm https://aka.ms/install-powershell.ps1) } -UseMSI"                                                                    | Install default Windows 10 Powershell to latest version                    |
| New-SmbShare -Name [Share name] -Path D:\[Shared folder] -FullAccess [Domain/Username] -description "New shared folder description" | Create new shared folder                                                   |

---

## DESKTOP / WORKSTATION / ( SERVER ) ( GUI SETTINGS ):

( use windows search / run / powershell to input and start .msc applications )

| msc file                   | console                | description                                                                                                                                                                                                             |
| -------------------------- | ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| compmgmt.msc               | computer management    | includes system tools ( task scheduler, event viewer, shared folders, local users and groups, performance and device manager ), storage ( disk management ), and services and applications ( services and wmi control ) |
| devmgmt.msc                | device manager         | opens the device manager to manage hardware and devices                                                                                                                                                                 |
| devmoderunasuserconfig.msc |                        |                                                                                                                                                                                                                         |
| diskmgmt.msc               | disk management        | opens disk management to administrate connected storage devices                                                                                                                                                         |
| eventvwr.msc               | event viewer           | opens the event viewer which displays operating system, software, and hardware events                                                                                                                                   |
| fsmgmt.msc                 | shared folders         | loads the list of shared folders, sessions, and open files                                                                                                                                                              |
| gpedit.msc                 | group policy editor    | loads the group policy editor to manage system policies                                                                                                                                                                 |
| lusrmgr.msc                | local users and groups | interface to manage local users and user groups                                                                                                                                                                         |
| perfmon.msc                | performance monitor    | loads the windows performance monitor                                                                                                                                                                                   |
| printmanagement.msc        | print management       | manage printers                                                                                                                                                                                                         |
| secpol.msc                 | local security policy  | loads policies such as account policies, public key policies, or advanced audit policy configuration                                                                                                                    |
| services.msc               | services manager       | loads the list of installed services to manage them                                                                                                                                                                     |
| taskschd.msc               | task scheduler         | loads the task scheduler to manage tasks                                                                                                                                                                                |
| wf.msc                     | windows firewall       | starts windows firewall with advanced security                                                                                                                                                                          |
| wmimgmt.msc                | wmi management         | configure and control the windows management instrumentation service                                                                                                                                                    |

---

SERVER ( GUI SETTINGS ):

| msc file      | console                              |
| ------------- | ------------------------------------ |
| adsiedit.msc  | adsi edit                            |
| dnsmgmt.msc   | dns manager                          |
| domain.msc    | active directory domains and trust   |
| dsa.msc       | active directory users and computers |
| dssite.msc    | active directory sites and services  |
| gpmc.msc      | group policy management              |
| gpme.msc      | group policy mangement editor        |
| servermanager | server manager                       |
| wbadmin.msc   | windows server backup                |

---

## NETWORK COMMANDS ( CMD / POWERSHELL ):

| type          | description                          |
| ------------- | ------------------------------------ |
| ping          | test network host communication      |
| netstat       | test network communication           |
| arp           | map ip adresses to mac addresses     |
| nbtstat       | diagnose domain                      |
| hostname      | display hostname                     |
| tracert       | test network hosts communication     |
| ipconfig /all | display host and network information |
| nslookup      | diagnose dns                         |
| route         | view routing tables                  |
| pathping      | test and ping hosts                  |

---

OTHER COMMANDS ( CMD / POWERSHELL ):

| type            | description                    |
| --------------- | ------------------------------ |
| diskpart        | manage hard-drives             |
| pnputil         | manage drivers                 |
| icacls          | manage permissions             |
| bcdedit         | boot configuration data editor |
| slmgr -rearm    | renew windows lisence          |
| driverquery     | view installed drivers         |
| gpupdate /force | update policies                |
| control         | open control panel             |

---

DISKPART COMMANDS ( CMD / POWERSHELL ):

| type           | description                       |
| -------------- | --------------------------------- |
| select disk 0  | select primary disk               |
| list disk      | shows disks                       |
| list partition | shows partitions of active disk   |
| list volume    | shows details about disks         |
| detail disk    | shows details about selected disk |

---

KEYBOARD SHORTCUTS ( WIN = WINDOWS KEY ):

| press              | action                          |
| ------------------ | ------------------------------- |
| WIN + D            | show / hide desktop             |
| WIN + E            | show file explorer              |
| WIN + I            | show settings                   |
| WIN + R            | show run                        |
| WIN + S            | show search                     |
| WIN + T            | switch applications             |
| WIN + X            | show command menu               |
| WIN + Pause        | show system                     |
| WIN + TAB          | show / switch open applications |
| WIN + Arrows       | change app layout               |
| CTRL + SHIFT + ESC | task manager                    |
| ALT + F4           | close window                    |

---

HIDE FILES / FOLDERS (POWERSHELL):

attrib +s +h *.* /D

UNHIDE FILES / FOLDERS (POWERSHELL):

attrib -s -h *.* /D

---

[WIN] + r and type:

shell:startup

(Open folder with shortcuts to open applications on windows boot)

shell:appsfolder

(Open folder containing all application menu items)

---

## SUBNETTING (example in yellow):

| number of subnets:``        | 1   | 2   | 4   | 8    | 16  | 32  | 64  | 128 | 256 |
| --------------------------- | --- | --- | --- | ---- | --- | --- | --- | --- | --- |
| number of hosts per subnet: | 256 | 128 | 64  | 32`` | 16  | 8   | 4   | 2   | 1   |
| subnet mask:                | /24 | /25 | /26 | /27  | /28 | /29 | /30 | /31 | /32 |

Use this command in Powershell if you can not run scripts:

Set-ExecutionPolicy Unrestricted

---

ESSENTIAL SOFTWARE (WINDOWS):

> - visual studio code   (Code editor)
> - everything   (File search)
> - winscp   (FTP client)
> - total commander   (File manager)
> - tiny wall   (Additional firewall)
> - bluestacks   (Android OS emulator)
> - vmware player   (Virtual machine)
> - 7 zip   (Archive manager)
> - notepad++   (Text editor)

ESSENTIAL ADD-ONS (FIREFOX):

> - adblock plus   (Block some ads on websites)
> - colorzilla   (Color management tool for web designers)
> - web developer   (A must-have add-on for web developers)

FIREFOX KEYBOARD SHORTCUTS (WINDOWS / LINUX):

> - [CTRL] + [SHIFT] + [i]   (Opens the Web developers panel)
> - [CTRL] + [+]   (Zoom in closer to the content of the web page)
> - [CTRL] + [-]   (Zoom out the content of the web page)
> - [CTRL] + [0]   (reset the zooming of the web page content)
> - [CTRL] + [u]   (open the tab for the web page source code)

[-&gt; Linux cheat sheet](https://henkka.info/demo.ict/linux)
[-&gt; Networking cheat sheet](https://henkka.info/demo.ict/osi)
[-&gt; Screen resolution cheat sheet](https://henkka.info/demo.ict/resolutions)

Updated: 21-06-23 (d/m/y)
