#!/bin/bash

cat two.txt | sed 's/Plans/Servermanagement/g' > ./sedOnlyLargeLetter.txt

cat sedOnlyLargeLetter.txt | sed 's/plans/servermanagement/g' > ./sedSmallLetterToo.txt
