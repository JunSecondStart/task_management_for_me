#!/bin/bash

cat /Users/fujitajunya/Desktop/dev/reactProject/task_management_for_me/src/views/components/unique/Tips/tasklist/SavedTask.tsx | sed 's/storedtask/storedtask_tips/g' > ./overwrite/SavedTask.tsx
