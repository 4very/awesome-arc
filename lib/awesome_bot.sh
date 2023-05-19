#!/bin/sh
awesome_bot readme.md -w $(cat ./lib/allowed_urls.txt | sed -e 'H;${x;s/\n/,/g;s/^,//;p;};d')