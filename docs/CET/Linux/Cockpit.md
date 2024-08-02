# [Cockpit](https://www.redhat.com/sysadmin/intro-cockpit)

## Cockpit, a browser-based administration tool for Linux

### [Applications](https://cockpit-project.org/applications.html)

#### [Navigator](https://github.com/45Drives/cockpit-navigator)

#### [SAMBA-AD](https://github.com/abbra/cockpit-app-samba-ad)

## Certificate

### Install

```bash
apt install python3-certbot python3-certbot-dns-rfc2136
```

### Register ACME account

```bash
certbot register --email "use-a-real-address@spam.lovelett.me"
```

### Request Certificate

```bash
certbot certonly --dns-rfc2136 --domains $FQDN
```

After this completes you should have certificates in:

`/etc/letsencrypt/live/$FQDN`

Additionally, you can verify the certificates using:

`certbot certificates`

Cockpit loads certificates from the `/etc/cockpit/ws-certs.d` directory.

It will use the last file in the directory with a `.cert` or `.crt` extension in alphabetical order.

The private key can be contained in a separate file with the same name as the certificate, but with a `.key` suffix instead.

The key must not be encrypted.

This can be achieved by copying the Let's Encrypt key and certificate to the correct location for Cockpit.

#### [Use Let&#39;s Encrypt certificates with Cockpit](https://ryan.lovelett.me/posts/letsencrypt-cockpit/)

```bash
cp /etc/letsencrypt/live/cp/etc/letsencrypt/live/FQDN/fullchain.pem /etc/cockpit/ws-certs.d/$FQDN.crt
```

```Bash
cp /etc/letsencrypt/live/cp/etc/letsencrypt/live/FQDN/privkey.pem /etc/cockpit/ws-certs.d/$FQDN.key
```

To check that the certificates Cockpit will use is now correct run the following command:

```bash
$ remotectl certificate
certificate: /etc/cockpit/ws-certs.d/$FQDN.crt
```

Restarting the Cockpit server (`systemctl restart cockpit`) should get the updated certificate in place.

```bash
$ cp /etc/letsencrypt/live/$FQDN/fullchain.pem /etc/cockpit/ws-certs.d/$FQDN.crt
$ cp /etc/letsencrypt/live/$FQDN/privkey.pem /etc/cockpit/ws-certs.d/$FQDN.key
## NOTE: The user and group may be different
$ chown cockpit-ws:cockpit-ws /etc/cockpit/ws-certs.d/$FQDN.crt /etc/cockpit/ws-certs.d/$FQDN.key
```

---
