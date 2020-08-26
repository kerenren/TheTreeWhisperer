the below instructions will help you quickly i
- install mysql community server 
- workbench 
- create a tree_whisperer DATABASE
- create the required tables (and optional configuration)

step1 
download and install mysql
https://dev.mysql.com/get/Downloads/MySQL-8.0/mysql-8.0.21-winx64.zip

step2 
download and install workbench
https://dev.mysql.com/get/Downloads/MySQLGUITools/mysql-workbench-community-8.0.21-winx64.msi

step3 
open new query_tab (file>> second option)

step4 
CREATE DATABASE tree_whisperer_new;
refresh schema(left_side_bar) and double click on created tree_whisperer

step5 
CREATE TABLE leafs (
  id INTEGER PRIMARY KEY,
  photo_path VARCHAR(255),
  state VARCHAR(255),
  time_stamp VARCHAR(255)
 );
 
optional if we use plant features
step6 
CREATE TABLE plants (
  id INTEGER PRIMARY KEY,
  plant_name VARCHAR(255),
  state VARCHAR(255),
  time_stamp VARCHAR(255)
 );
 
step7 
ALTER TABLE leafs
  ADD plant_id VARCHAR(255) NOT NULL
  AFTER state;

step8 
DROP TABLE leafs

step9
CREATE TABLE leafs (
  id INTEGER PRIMARY KEY,
  photo_path VARCHAR(255),
  state VARCHAR(255),
  plant_id INTEGER,
  time_stamp VARCHAR(255),
  FOREIGN KEY (plant_id) REFERENCES plants(id)
 );