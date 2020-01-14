SET NAMES UTF8;
DROP DATABASE IF EXISTS lc;
CREATE DATABASE lc CHARSET=UTF8;
USE lc;
#网站信息表
CREATE TABLE lc_site_info(
  site_name VARCHAR(16),
  logo  VARCHAR(64),
  copyrighe VARCHAR(64)
);
INSERT INTO lc_site_info VALUES('lc','../../img/index/logo.png','杭州华橙网络科技有限公司 浙ICP备 16023676号-4

浙公安网备 浙公网安备33010802009519号

经营许可备案：浙许可20180011号');
#导航条
CREATE TABLE lc_navbar_item(
   name VARCHAR(16),
   url VARCHAR(64),
   title VARCHAR(32)
);
INSERT INTO lc_navbar_item VALUES("首页","/index.html","index");
INSERT INTO lc_navbar_item VALUES("摄像机","/carema.html","carema");
INSERT INTO lc_navbar_item VALUES("智能锁","/lock.html","lock");
INSERT INTO lc_navbar_item VALUES("套装","/a.html","a");
INSERT INTO lc_navbar_item VALUES("录像机","/k.html","k");
INSERT INTO lc_navbar_item VALUES("报警器","/pj.html","pj");
INSERT INTO lc_navbar_item VALUES("云服务","/fw.html","fw");
INSERT INTO lc_navbar_item VALUES("周边配件","/sx.html","sx");
INSERT INTO lc_navbar_item VALUES("服务支持","/sx.html","sx");

#用户表
CREATE TABLE lc_user(
 phone VARCHAR(11) PRIMARY KEY,
 email VARCHAR(64),
 upwd  VARCHAR(32),
 cpwd  VARCHAR(32)
);

INSERT INTO lc_user VALUES('17811111111','1367771@163.com','123456','123456');
INSERT INTO lc_user VALUES('17811111112','1367772@163.com','123456','123456');
INSERT INTO lc_user VALUES('17811111113','1367773@163.com','123456','123456');
INSERT INTO lc_user VALUES('17811111114','1367774@163.com','123456','123456');
INSERT INTO lc_user VALUES('17811111115','1367775@163.com','123456','123456');
INSERT INTO lc_user VALUES('17811111116','1367776@163.com','123456','123456');
INSERT INTO lc_user VALUES('17811111117','1367777@163.com','123456','123456');
INSERT INTO lc_user VALUES('17811111118','1367778@163.com','123456','123456');
INSERT INTO lc_user VALUES('17811111119','1367779@163.com','123456','123456');
INSERT INTO lc_user VALUES('17811111102','1367702@163.com','123456','123456');
INSERT INTO lc_user VALUES('17811111103','1367703@163.com','123456','123456');
