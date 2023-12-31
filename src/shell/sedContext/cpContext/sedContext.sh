#!/bin/bash

cp /Users/fujitajunya/Desktop/dev/reactProject/task_management_for_me/src/context/index_cp.tsx .

cat index.tsx | sed 's/storedtask/storedtask_plans/g' > .
