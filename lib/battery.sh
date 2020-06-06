#!/bin/bash

# BATTERY
BATT_PERCENTAGE=$(pmset -g batt | grep -Eo "\d+%" | cut -c -2)
BATT_REMAINING=$(pmset -g batt | grep -Eo "\d+:\d+")
BATT_CHARGING="false"

echo $BATT_PERCENTAGE $BATT_REMAINING $BATT_CHARGING