const { Model, DataTypes } = require('sequelize');


class User extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            registry: DataTypes.STRING,
            password: DataTypes.STRING,
        }, {
            sequelize
        });
    }
}

module.exports = User;