# 一、优化SQL

## 发现问题

接口测试时非常慢，压测的结果大概为 5 秒。

## 解决步骤

### 1. 定位慢查询

#### 开源工具

可以使用以下开源工具进行慢查询定位：

- **Arthas**
- **Prometheus**
- **Skywalking**

#### MySQL 自带慢查询

1. 修改 MySQL 配置文件 `/etc/my.cnf`，开启慢查询日志功能：

```
# 开启 MySQL 慢查询开关
slow_query_log=1
# 设置慢查询时间（单位：秒）
long_query_time=2
```

1. 保存配置后重启 MySQL 服务。
2. 查看慢查询日志：/var/lib/mysql/localhost-slow.log

### 2. 分析SQL

#### EXPLAN或DESC命令获取MySQL如何执行SELECT语句的信息

语法：
```
在SELECT语句前加上关键字EXPLAN/DESC
```
关键字：
possible_keys（可能用到的索引）
key（实际用到的索引）
key_len 索引占用的大小
Extra 额外的优化建议（是否出现回表）
type sql链接的类型 (NULL，system, const, eq_ref, ref,range,index（避免使用）,all（避免使用）)