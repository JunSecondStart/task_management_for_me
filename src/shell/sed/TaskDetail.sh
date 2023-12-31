#!/bin/bash

cat /Users/fujitajunya/Desktop/dev/reactProject/task_management_for_me/src/views/components/unique/Servermanagement/tasklist/TaskDetail.tsx | sed 's/storedtask/storedtask_servermanagement/g' > ./overwrite/TaskDetail.tsx
