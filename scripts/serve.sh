#!/usr/bin/env bash

set -euo pipefail

echo "Injecting app name as ${REACT_APP_APP_NAME}"
serve -s build -l ${PORT:-3000}