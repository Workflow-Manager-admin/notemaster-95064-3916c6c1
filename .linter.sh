#!/bin/bash
cd /home/kavia/workspace/code-generation/notemaster-95064-3916c6c1/notes_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

