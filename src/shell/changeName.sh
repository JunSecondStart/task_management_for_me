#!/bin/bash

cat sedCodingDetail.sh | sed 's/storedtask_plans/storedtask_servermanagement/g' > ./sedShell/TaskDetail_one.sh
cat ./sedShell/TaskDetail_one.sh | sed 's/Plans/Servermanagement/g' > ./sed/TaskDetail.sh

cat sedCodingList.sh | sed 's/storedtask_plans/storedtask_servermanagement/g' > ./sedShell/Tasklist_one.sh
cat ./sedShell/Tasklist_one.sh | sed 's/Plans/Servermanagement/g' > ./sed/Tasklist.sh

cat sedCodingSaved.sh | sed 's/storedtask_plans/storedtask_servermanagement/g' > ./sedShell/TaskSaved_one.sh
cat ./sedShell/TaskSaved_one.sh | sed 's/Plans/Servermanagement/g' > ./sed/TaskSaved.sh

cat sedCodingStore.sh | sed 's/storedtask_plans/storedtask_servermanagement/g' > ./sedShell/TaskStore_one.sh
cat ./sedShell/TaskStore_one.sh | sed 's/Plans/Servermanagement/g' > ./sed/TaskStore.sh
