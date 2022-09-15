#!/bin/zsh
# Notice this script only runs locally to update proto file from backend repo
cd ../../proto &&  \
  git pull protoOrigin main && \
  cp -r proto ../admin && \
  echo "Done" && \
  cd ../admin &&\
protoc -I=proto --plugin=node_modules/ts-proto/protoc-gen-ts_proto --ts_proto_opt=esModuleInterop=true --ts_proto_out=src/service/api/schema proto/*.proto
