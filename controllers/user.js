const User =  require('../models/User');

const addUser  =   async(req ,res ,next)=>{
    try{
  
      if(!req.body.phonenumber){
        throw new Error('number is needed');
      }
      const name = req.body.name;
      const email = req.body.email ;
      const phonenumber = req.body.phonenumber ;
    
      const data = await User.create({
        name: name ,
        email : email ,
        phonenumber : phonenumber
      });
      res.status(201).json({newUserDetail : data});
    }
    catch(err){
      res.status(500).json({
        error: err
      })
    }
  };

  const getUser =  async(req ,res ,next)=>{
    try {
      const users = await User.findAll();
      res.status(200).json({allUsers: users});
    }
    catch(error){
      console.log('get user is failing',JSON.stringify(error) )
      res.status(500).json({error: error})
    }
  }

  const deleteUser = async(req ,res)=>{
    try{
  if(req.params.id == 'undefined'){
    console.log('ID is  missing');
    return res.status(400).json({err : "ID is missing"});
  }
      const uId = req.params.id ;
      await User.destroy({where :{id :uId}});
      res.sendStatus(200);
    }catch(err){
      res.status(500).json({error : err})
    }
  
  }

  module.exports  ={
    addUser,
    getUser,
    deleteUser
  }