
const router = require('express').Router();
const {User} = require("../../models")

//TODO - ROUTE THAT GETS ALL THE USERS, include friends?
router.get('/', async(req,res)=> {
    try{
   const userData= await  User.find()
   .populate('friends')
   .populate('thoughts')
        res.json(userData)
     }catch (err) {
            console.log(err)
            res.send(err)
            
        }
})

//TODO - ROUTE THAT CREATES A NEW USER
router.post('/', async (req,res)=> {
    try{
  const userData= await User.create({
        username: req.body.username,
        email: req.body.email
  })
      res.json(userData)  
    } catch (err) {
        console.log(err)
        res.send(err)
    }
})

//TODO - ROUTE THAT GETS A SINGLE USER BASED ON USER ID
router.get('/:userId', async (req,res) => {
    try{
     const userData= await  User.findById(req.params.userId)
    res.json(userData)
    } catch (err) {
        console.log(err)
        res.send(err)
    }
})
  


//TODO - ROUTE THAT UPDATES A SINGLE USER
router.put('/:userId', async (req,res)=> {
    try{
        const userData= await  User.findByIdAndUpdate(req.params.userId,req.body)
       res.json(userData)
       } catch (err) {
           console.log(err)
           res.send(err)
       }
})

//TODO - ROUTE THAT DELETES A SINGLE USER BASED ON USER ID
router.delete('/:userId',async (req,res)=> {
    try{
        const userData= await  User.findByIdAndDelete(req.params.userId)
       res.json(userData)
       } catch (err) {
           console.log(err)
           res.send(err)
       }
});

//TODO - ROUTE THAT ADDS A FRIEND TO A USER
router.put('/:userId/friends/:friendId',async (req,res)=> {
    try{
        const userData= await  User.findById(req.params.userId)
       res.json(userData)
       } catch (err) {
           console.log(err)
           res.send(err)
       }
})

//TODO - ROUTE THAT DELETES A FRIEND FROM A USER'S FRIENDS, DONT DELETE THE FRIEND AS A USER THOUGH!
router.delete('/:userId/friends/:friendId', (req,res)=> {
  
});

module.exports = router;
