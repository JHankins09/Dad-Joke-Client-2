#!/bin/bash

curl "https://icanhazdadjoke.com/" \
--include \
--request GET \
--header "Accept: application/json" \
--User-agent "Joke App - hanksin.jamesb@gmail.com"

echo
