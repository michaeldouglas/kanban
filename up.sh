#! /bin/bash

echo "🔥 Up Front and Back"

npm i --prefix ./back
npm i --prefix ./client

echo "🔥 Up Docker"
docker-compose up