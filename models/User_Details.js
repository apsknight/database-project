const Sequelize = require("sequelize")
const db = require("../database/db")

module.exports = db.sequelize.define(
    'user_details',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Minimun_Donation_Amount: {
            type: Sequelize.INTEGER
        },
        Content_Type: {
            type: Sequelize.STRING
        },
        Link_To_Content: {
            type: Sequelize.STRING
        },
        About_You: {
            type: Sequelize.STRING
        }
    },
    {
        timestamps: false
    }
)