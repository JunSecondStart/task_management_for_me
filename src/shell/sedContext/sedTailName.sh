#!/bin/bash

cat two.txt | sed 's/Plans/Tips/g' > ./sedOnlyLargeLetter.txt

cat sedOnlyLargeLetter.txt | sed 's/plans/tips/g' > ./sedSmallLetterToo.txt
