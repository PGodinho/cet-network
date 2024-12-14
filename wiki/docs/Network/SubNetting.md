<<<<<<< HEAD
---
title: Subnet
icon: fontawesome/brands/osi
author: €u
---
## IP address classes

IPv4 addresses divide into five classes. The primary difference between the first three classes -- Class A, Class B and Class C -- is the number of subnets versus the number of hosts per subnet.

The following table outlines the details between IP address classes.

A subnetwork, or subnet, is a logical subdivision of an IP network.
The practice of dividing a network into two or more networks is called subnetting.

| Name    | First octet | Number of subnets         | Number of hosts            | Description                                 |
| ------- | ----------- | ------------------------- | -------------------------- | ------------------------------------------- |
| Class A | 1 to 126    | 126                       | Approximately 16.7 million | Many hosts per network.                     |
| Class B | 128 to 191  | 16,384                    | 65,536                     | Many hosts per network.                     |
| Class C | 192 to 223  | Approximately 2.1 million | 254                        | Many networks with fewer hosts per network. |
| Class D | 224 to 239  | n/a                       | n/a                        | Multicasting.                               |
| Class E | 240 to 254  | n/a                       | n/a                        | Experimental.                               |

Class D addresses are for a specific type of communication known as multicasting, which lets a host transmit thousands of data streams to other devices. 
Class E also isn't used with standard IPv4 networking. Instead, IP address researchers use Class E addresses for experimental and developmental purposes. 
This classification system is known as classful addressing. Classful addressing relies on rigid divisions between the network ID and host ID. 
These divisions always occur at the eighth, 16th or 24th bits in the address.

---

## Private IPv4 address ranges

### Private IP address ranges

Systems and sites on the public internet consume most of the roughly 4.3 billion available IPv4 addresses. 
However, private networks can reserve some ranges for internal use. 
Networks in home offices and businesses likely use one of these ranges.

| Reserved class | Range       | Default subnet mask | Description                                      |
| -------------- | ----------- | ------------------- | ------------------------------------------------ |
| Class A        | 10.0.0.0    | 255.0.0.0           | Larger networks with many hosts.                 |
| Class B        | 172.16.0.0  | 255.255.0.0         | Medium networks with a moderate number of hosts. |
| Class C        | 192.168.0.0 | 255.255.255.0       | Smaller networks with fewer hosts.               |

<div style="page-break-after: always"></div>

## IPv4 Subnets Sheet

| **CIDR** | **Subnet Mask** | **Total IPs** | **Usable IPs** |
| :------------: | :-------------------: | ------------------: | -------------------: |
|      /32      |    255.255.255.255    |                   1 |                    1 |
|      /31      |    255.255.255.254    |                   2 |                    2 |
|      /30      |    255.255.255.252    |                   4 |                    2 |
|      /29      |    255.255.255.248    |                   8 |                    6 |
|      /28      |    255.255.255.240    |                  16 |                   14 |
|      /27      |    255.255.255.224    |                  32 |                   30 |
|      /26      |    255.255.255.192    |                  64 |                   62 |
|      /25      |    255.255.255.128    |                 128 |                  126 |
|      /24      |     255.255.255.0     |                 256 |                  254 |
|      /23      |     255.255.254.0     |                 512 |                  510 |
|      /22      |     255.255.252.0     |                1024 |                 1022 |
|      /21      |     255.255.248.0     |                2048 |                 2046 |
|      /20      |     255.255.240.0     |                4096 |                 4094 |
|      /19      |     255.255.224.0     |                8192 |                 8190 |
|      /18      |     255.255.192.0     |              16,384 |               16,382 |
|      /17      |     255.255.128.0     |              32,768 |               32,766 |
|      /16      |      255.255.0.0      |              65,536 |               65,534 |
|      /15      |      255.254.0.0      |             131,072 |              131,070 |
|      /14      |      255.252.0.0      |             262,144 |              262,142 |
|      /13      |      255.248.0.0      |             524,288 |              524,286 |
|      /12      |      255.240.0.0      |           1,048,576 |            1,048,574 |
|      /11      |      255.224.0.0      |           2,097,152 |            2,097,150 |
|      /10      |      255.192.0.0      |           4,194,304 |            4,194,302 |
|       /9       |      255.128.0.0      |           8,388,608 |            8,388,606 |
|       /8       |       255.0.0.0       |          16,777,216 |           16,777,214 |
|       /7       |       254.0.0.0       |          33,554,432 |           33,554,430 |
|       /6       |       252.0.0.0       |          67,108,864 |           67,108,862 |
|       /5       |       248.0.0.0       |         134,217,728 |          134,217,726 |
|       /4       |       240.0.0.0       |         268,435,456 |          268,435,454 |
|       /3       |       224.0.0.0       |         536,870,912 |          536,870,910 |
|       /2       |       192.0.0.0       |       1,073,741,824 |        1,073,741,822 |
|       /1       |       128.0.0.0       |       2,147,483,648 |        2,147,483,646 |

<div style="page-break-after: always"></div>

---

## Subnet Calculator

[Mx Tool Box](https://mxtoolbox.com/subnetcalculator.aspx)

[Solar Winds](https://www.solarwinds.com/free-tools/advanced-subnet-calculator)

[Vultr](https://www.vultr.com/resources/subnet-calculator/)
=======
---
title: Subnet
icon: fontawesome/brands/osi
author: €u
---
## IP address classes

IPv4 addresses divide into five classes. The primary difference between the first three classes -- Class A, Class B and Class C -- is the number of subnets versus the number of hosts per subnet.

The following table outlines the details between IP address classes.

A subnetwork, or subnet, is a logical subdivision of an IP network.
The practice of dividing a network into two or more networks is called subnetting.

| Name    | First octet | Number of subnets         | Number of hosts            | Description                                 |
| ------- | ----------- | ------------------------- | -------------------------- | ------------------------------------------- |
| Class A | 1 to 126    | 126                       | Approximately 16.7 million | Many hosts per network.                     |
| Class B | 128 to 191  | 16,384                    | 65,536                     | Many hosts per network.                     |
| Class C | 192 to 223  | Approximately 2.1 million | 254                        | Many networks with fewer hosts per network. |
| Class D | 224 to 239  | n/a                       | n/a                        | Multicasting.                               |
| Class E | 240 to 254  | n/a                       | n/a                        | Experimental.                               |

Class D addresses are for a specific type of communication known as multicasting, which lets a host transmit thousands of data streams to other devices. 
Class E also isn't used with standard IPv4 networking. Instead, IP address researchers use Class E addresses for experimental and developmental purposes. 
This classification system is known as classful addressing. Classful addressing relies on rigid divisions between the network ID and host ID. 
These divisions always occur at the eighth, 16th or 24th bits in the address.

---

## Private IPv4 address ranges

### Private IP address ranges

Systems and sites on the public internet consume most of the roughly 4.3 billion available IPv4 addresses. 
However, private networks can reserve some ranges for internal use. 
Networks in home offices and businesses likely use one of these ranges.

| Reserved class | Range       | Default subnet mask | Description                                      |
| -------------- | ----------- | ------------------- | ------------------------------------------------ |
| Class A        | 10.0.0.0    | 255.0.0.0           | Larger networks with many hosts.                 |
| Class B        | 172.16.0.0  | 255.255.0.0         | Medium networks with a moderate number of hosts. |
| Class C        | 192.168.0.0 | 255.255.255.0       | Smaller networks with fewer hosts.               |

<div style="page-break-after: always"></div>

## IPv4 Subnets Sheet

| **CIDR** | **Subnet Mask** | **Total IPs** | **Usable IPs** |
| :------------: | :-------------------: | ------------------: | -------------------: |
|      /32      |    255.255.255.255    |                   1 |                    1 |
|      /31      |    255.255.255.254    |                   2 |                    2 |
|      /30      |    255.255.255.252    |                   4 |                    2 |
|      /29      |    255.255.255.248    |                   8 |                    6 |
|      /28      |    255.255.255.240    |                  16 |                   14 |
|      /27      |    255.255.255.224    |                  32 |                   30 |
|      /26      |    255.255.255.192    |                  64 |                   62 |
|      /25      |    255.255.255.128    |                 128 |                  126 |
|      /24      |     255.255.255.0     |                 256 |                  254 |
|      /23      |     255.255.254.0     |                 512 |                  510 |
|      /22      |     255.255.252.0     |                1024 |                 1022 |
|      /21      |     255.255.248.0     |                2048 |                 2046 |
|      /20      |     255.255.240.0     |                4096 |                 4094 |
|      /19      |     255.255.224.0     |                8192 |                 8190 |
|      /18      |     255.255.192.0     |              16,384 |               16,382 |
|      /17      |     255.255.128.0     |              32,768 |               32,766 |
|      /16      |      255.255.0.0      |              65,536 |               65,534 |
|      /15      |      255.254.0.0      |             131,072 |              131,070 |
|      /14      |      255.252.0.0      |             262,144 |              262,142 |
|      /13      |      255.248.0.0      |             524,288 |              524,286 |
|      /12      |      255.240.0.0      |           1,048,576 |            1,048,574 |
|      /11      |      255.224.0.0      |           2,097,152 |            2,097,150 |
|      /10      |      255.192.0.0      |           4,194,304 |            4,194,302 |
|       /9       |      255.128.0.0      |           8,388,608 |            8,388,606 |
|       /8       |       255.0.0.0       |          16,777,216 |           16,777,214 |
|       /7       |       254.0.0.0       |          33,554,432 |           33,554,430 |
|       /6       |       252.0.0.0       |          67,108,864 |           67,108,862 |
|       /5       |       248.0.0.0       |         134,217,728 |          134,217,726 |
|       /4       |       240.0.0.0       |         268,435,456 |          268,435,454 |
|       /3       |       224.0.0.0       |         536,870,912 |          536,870,910 |
|       /2       |       192.0.0.0       |       1,073,741,824 |        1,073,741,822 |
|       /1       |       128.0.0.0       |       2,147,483,648 |        2,147,483,646 |

<div style="page-break-after: always"></div>

---

## Subnet Calculator

[Mx Tool Box](https://mxtoolbox.com/subnetcalculator.aspx)

[Solar Winds](https://www.solarwinds.com/free-tools/advanced-subnet-calculator)

[Vultr](https://www.vultr.com/resources/subnet-calculator/)
>>>>>>> 204284b416a7163fc9dfa49d5fc9b039ee120812
