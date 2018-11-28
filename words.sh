#!/bin/bash

FILTER="grep -E $3"
if [ -z "$3" ]; then
  FILTER='cat'
fi

REGEX="{$1}"

if [ -z "$2" ]; then
  REGEX=".{$1}"
else
  REGEX="[$2]{$1}"
fi

echo grep -iE "^$REGEX$" /usr/share/dict/words | $FILTER
grep -iE "^$REGEX$" /usr/share/dict/words | $FILTER