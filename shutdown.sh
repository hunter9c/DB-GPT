# mac设备上的grep命令可能不支持grep -P选项，请使用Homebrew安装;或使用ggrep命令
ps -eo pid,user,cmd|grep -P '[dbgpt_server.py]'|grep 38000 |grep -v grep|awk '{print $1}'|xargs kill -9