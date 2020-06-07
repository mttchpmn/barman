#!/bin/bash

# BATTERY
BATT_PERCENTAGE=$(pmset -g batt | grep -Eo "\d+%" | cut -c -3)
BATT_REMAINING=$(pmset -g batt | grep -Eo "\d+:\d+")
BATT_CHARGING="false"

if [ "$(pmset -g batt | grep -Eo "AC Power")" == "AC Power" ]; then
    BATT_CHARGING="true"
fi

echo $BATT_PERCENTAGE $BATT_CHARGING $BATT_REMAINING