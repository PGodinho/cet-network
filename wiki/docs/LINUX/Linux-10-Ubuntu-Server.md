---
title: Server
icon: fontawesome/solid/server
---
## [Ubuntu Server Documentation](https://ubuntu.com/server/docs)

## [System Administration](https://help.ubuntu.com/community/SystemAdministration)

## [Switch PHP Versions](https://php.tutorials24x7.com/blog/how-to-switch-php-version-on-ubuntu-20-04-lts)

### Verify PHP

php --version

#### PHP 7.0

sudo update-alternatives --set php /usr/bin/php7.0

sudo update-alternatives --set phar /usr/bin/phar7.0

sudo update-alternatives --set phar.phar /usr/bin/phar.phar7.0

##### PHP 8.0

sudo update-alternatives --set php /usr/bin/php8.0

sudo update-alternatives --set phar /usr/bin/phar8.0

sudo update-alternatives --set phar.phar /usr/bin/phar.phar8.0

##### Switch PHP

sudo update-alternatives --config php
