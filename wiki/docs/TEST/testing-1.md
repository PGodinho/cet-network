# Teste N.º 1

Test #1

Teste #2

## T2 - Testing Code

```python title="code.py"
import tensorflow as tfdef whatever()
```

### Other Test with header and line numbers

```python title="code.py" linenums="1"
def bubble_sort(items):
 for i in range(len(items)):
  for j in range(len(items) - 1 -i):
   if items[j] > items[j + 1]:
      items[j], items[j + 1] = items[j + 1], items[j]
```

---

<div style="page-break-after: always"></div>

## Images

<figure markdown="span">

![Fader Draw](../draw/network-setup.drawio.svg)

<figcaption>Image caption</figcaption>
</figure>

<div style="page-break-after: always"></div>

---

### IPv4 Subnets Sheet

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

#### Private IPv4 address ranges

| **Range** | **Subnet Mask** |    **Range of IPs**    |
| :-------------: | :-------------------: | :---------------------------: |
|   10.0.0.0/8   |       255.0.0.0       |   10.0.0.0 - 10.255.255.255   |
|  172.16.0.0/12  |      255.240.0.0      |  172.16.0.0 - 172.31.255.255  |
| 192.168.0.0/16 |      255.255.0.0      | 192.168.0.0 - 192.168.255.255 |