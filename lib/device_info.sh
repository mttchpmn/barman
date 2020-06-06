#!/bin/bash

# BATTERY
BATT_PERCENTAGE=$(pmset -g batt | grep -Eo "\d+%")
BATT_REMAINING=$(pmset -g batt | grep -Eo "\d+:\d+")
BATT_CHARGING="false"

if [ "$(pmset -g batt | grep -Eo "AC Power")" == "AC Power" ]; then
    BATT_CHARGING="true"
fi

# NETWORK
WIFI_NAME=$(networksetup -getairportnetwork en0 | cut -c 24-)
DEVICE_NAME=$(networksetup -getcomputername)
MAC_ADDRESS=$(networksetup -getmacaddress en0)
INTERNAL_IP_ADDRESS=$(ifconfig en0 | grep -Eo "inet \d+.\d+.\d+.\d+" | cut -c 6-)

# CPU
# Note - Requires 'iStats' -> run gem install iStats
CPU_TEMP=$(istats cpu temp | grep -Eo "\d{2}.\d+")


echo $STATUS_CHECK
echo $BATT_CHARGING