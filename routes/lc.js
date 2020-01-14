const express=require('express');
const pool=require('../pool.js');
var router=express.Router();

//登录
router.get("/v1/login/:phone&:upwd",function(req,res){
  var $phone=req.params.phone;
  var $upwd=req.params.upwd;
  var sql="SELECT * FROM lc_user WHERE phone=? AND upwd=?";
  pool.query(sql,[$phone,$upwd],function(err,result){
	console.log(result);
    if(err) throw err;
	if(result.length>0){
	  res.send("1");
	}else{
	 res.send("0");
	}
  });
});

//根据手机号查询
router.get("/v1/getPhone/:phone",function(req,res){
  var $phone=req.params.phone;
  console.log($phone);
  var sql="SELECT * FROM lc_user WHERE phone=?";
  pool.query(sql,[$phone],function(err,result){
    if(err) throw err;
	if(result.length>0){
	  res.send(result);
	}else{
	  res.send("0");
	}
  });
});

//根据邮箱查询
router.get("/v1/getEmail/:email",function(req,res){
  var $email=req.params.email;
  var sql="SELECT * FROM lc_user WHERE email=?";
  pool.query(sql,[$email],function(err,result){
    if(err) throw err;
	if(result.length>0){
	  res.send(result);
	}else{
	  res.send("0");
	}
  });
});

//注册
router.post("/v1/reg",function(req,res){
  var $phone=req.body.phone;
  var $email=req.body.email;
  var $upwd=req.body.upwd;
  var $cpwd=req.body.cpwd;
    //var $obj=req.body;
  var sql="INSERT INTO lc_user VALUES(phone=?,email=?,upwd=?,cpwd=?)";
  pool.query(sql,[$phone,$email,$upwd,$cpwd],function(err,result){
    if(err) throw err;
	if(result.affectedRows>0){
	  res.send("1");
	}else{
	  res.send("0");
	}
  });
});


module.exports=router;