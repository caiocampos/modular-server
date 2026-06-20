#!/bin/bash

if [ -z "$1" ]; then
    echo "Error: Invalid module name."
    exit 1
fi

MODULE="$1"
SUBFOLDER="$2"

ORIGIN_PATH=
FINAL_PATH="./src/modules/$MODULE"


if [ -z "$2" ]; then
    ORIGIN_PATH="./out/$MODULE/src/"
else
    ORIGIN_PATH="./out/$MODULE/$SUBFOLDER/src/"
fi

mkdir -p "$FINAL_PATH"

if [ -d "$ORIGIN_PATH" ]; then
    cp -r "$ORIGIN_PATH"/* "$FINAL_PATH"
    rm -rf "./out/$MODULE"
    
    ls "$FINAL_PATH"
else
    echo "Error: $ORIGIN_PATH don't exists."
    exit 1
fi