#!/bin/bash

# 部署到开发环境的脚本
echo "Starting deployment to development environment..."
export db_username=$1
export db_password=$2
npm run build:dev
# 添加实际部署命令，例如 scp, rsync, kubectl 等
echo "Deployment to development environment completed."
