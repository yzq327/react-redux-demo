#!/bin/bash

# 部署到生产环境的脚本
echo "Starting deployment to production environment..."
export db_username=$1
export db_password=$2
npm run build:prod
# 添加实际部署命令，例如 scp, rsync, kubectl 等
echo "Deployment to production environment completed."

