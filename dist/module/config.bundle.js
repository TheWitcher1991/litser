const path=require("path");module.exports={Files:require(path.join(__dirname,"/class/Files.bundle")),rpath:{db:"../../../../db/db.json",config:"../../../../db/config.json",launchDB:"../../../db/db.json",launchConfig:"../../../db/config.json",log:"../../../log.dev.txt"},files_:[],all:[],tmpf:{},rkey:a=>{let b="";for(;b.length<a;)b+=Math.random().toString(36).substring(2);return b.substring(0,a)},get db(){try{return require(path.join(__dirname,this.rpath.db))}catch(a){}},get config(){try{return require(path.join(__dirname,this.rpath.config))}catch(a){}},get size(){return Object.keys(this.db).length},_fs:""};
