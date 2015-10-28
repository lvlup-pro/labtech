#!/bin/bash
set -e
npm install
npm run build
rm -rf demo || true
mkdir -p demo
cp -r build demo/
cp -r assets demo/
cp index.html demo/
cp config.example.json demo/config.json
cp hosts.example.json demo/hosts.json
