const express = require('express');
const router = express.Router();

router.get('/signup',async(req,res)=>{
    res.send("Signup endpoint");
});

router.get('/login',async(req,res)=>{
    res.send("login endpoint");
});

router.get('/logout',async(req,res)=>{
    res.send("logout endpoint");
});

module.exports = router;