#!/bin/bash -v

sleep_random () {
  SLEEP_TIME=$((10 + RANDOM % 21));
  echo "sleeping ${SLEEP_TIME}s";
  sleep $SLEEP_TIME;
};

test_server () {
    NAME=$1;
    URL=$2;
    RESPONSE=$(curl -s ${URL});
    echo "response $NAME -> $RESPONSE";
    sleep_random;
};

test_servers () {
  URLS=(
    "https://modular-server.onrender.com/authors/count"
    "https://modular-server.onrender.com/score/count"
    "https://shrtr.onrender.com/@/count"
  );
  NAMES=(
    "blog-posts"
    "asteroids"
    "shrtr"
  );
  HITS=("" "" "");
  for i in `seq 1 $((1 + RANDOM % 4))`; do
    SELECTED=$((RANDOM % ${#URLS[@]}));
    test_server ${NAMES[$SELECTED]} ${URLS[$SELECTED]};
    HITS[$SELECTED]="HIT";
  done
  echo
  for i in `seq 0 $((${#URLS[@]} - 1))`; do
    if [ -z ${HITS[$i]} ]; then
      test_server ${NAMES[$i]} ${URLS[$i]};
    fi
  done
};

test_servers;
