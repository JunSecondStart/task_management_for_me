#!/bin/bash

cat /Users/fujitajunya/Desktop/dev/reactProject/task_management_for_me/src/views/components/unique/Plans/tasklist/TaskDetail.tsx | sed 's/storedtask/storedtask_plans/g' > ./sed/TaskDetail.tsx
