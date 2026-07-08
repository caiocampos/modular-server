#!/bin/bash

sleep_random () {
  SLEEP_TIME=$((10 + RANDOM % 21));
  echo "sleeping ${SLEEP_TIME}s";
  sleep $SLEEP_TIME;
};

test_server () {
    NAME=$1;
    URL=$2;
    SLEEP=$3;
    if [ $SLEEP -eq 1 ]; then
      sleep_random;
    fi
    RESPONSE=$(curl -s ${URL});
    echo "response $NAME -> $RESPONSE";
};

test_servers () {
  URLS=(
    "https://modular-server.onrender.com/authors/count"
    "https://modular-server.onrender.com/score/count"
    "https://modular-server.onrender.com/links/count"
    "https://modular-server.onrender.com/restaurants-open/count"
  );
  NAMES=(
    "blog-posts"
    "asteroids"
    "shrtr"
    "restaurantes"
  );
  HITS=("" "" "");
  for i in `seq 1 $((1 + RANDOM % 4))`; do
    SLEEP=1;
    if [ $i -eq 1 ]; then
      SLEEP=0;
    fi
    SELECTED=$((RANDOM % ${#URLS[@]}));
    test_server ${NAMES[$SELECTED]} ${URLS[$SELECTED]} $SLEEP;
    HITS[$SELECTED]="HIT";
  done
  echo
  for i in `seq 0 $((${#URLS[@]} - 1))`; do
    if [ -z ${HITS[$i]} ]; then
      test_server ${NAMES[$i]} ${URLS[$i]} 1;
    fi
  done
};

test_servers;
