const express = require("express")
const users = express.Router()
const cors = require("cors")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

const User = require("../models/User")
const User_details = require("../models/User_Details")
users.use(cors())


process.env.SECRET_KEY = 'secret'

User.sync()
User_details.sync()

users.post("/register", (req, res) => {
    const today = new Date()
    const userData = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
        created: today
    }

    User.findOne({
        where: {
            email: req.body.email
        }
    })
        .then(user => {
            if (!user) {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    userData.password = hash
                    User.create(userData)
                        .then(user => {
                            res.json({ status: user.email + ' registered' })
                           // res.redirect('localhost:8080/#/register/details')
                        })
                        .catch(err => {
                            res.send('error: ' + err)
                        })
                })
            } else {
               // console.log("hiiiii");
                res.json({success: false});
                //res.json({ error: 'User already exists' })
            }
        })
        .catch(err => {
            res.send('error: ' + err)
        })
})

users.post("/register/details", (req,res) =>{
    const userData = {
        Minimun_Donation_Amount: req.body.minimum_donation,
        Content_Type: req.body.content,
        Link_To_Content: req.body.link_content,
        About_You: req.body.about_you
    }
    User_details.create(userData).then((user) =>{
      //  User_details.belongsTo(Users, {targetKey:'id',foreignKey: 'id'});
        User.findOne({
            where:{
                id: user.id
            }
        }).then((data) =>{
            res.json({ status: data.email + ' registered' })
        })
    })

});

users.post("/login", (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    })
        .then(user => {
            if (user) {
                if (bcrypt.compareSync(req.body.password, user.password)) {
                    let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
                        expiresIn: 1440
                    })
                    res.send(token)
                }
            } else {
                res.status(400).json({ error: 'User does not exist' })
            }
        })
        .catch(err => {
            res.status(400).json({ error: err })
        })
})

users.post('/get_details',(req,res) =>{
    const email = req.body.email
    User_details.belongsTo(User, {foreignKey: 'id'})
    User.belongsTo(User_details, {foreignKey: 'id'})
    User_details.findOne({
        include:[{
            model:User,
            required: true,
            where:{ 
                email: email
            }
        }]
    }).then((user)=>{
        res.send(user.dataValues)
    })

})

module.exports = users