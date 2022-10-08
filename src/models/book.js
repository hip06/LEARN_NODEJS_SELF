'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Book extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Book.belongsTo(models.Category, { foreignKey: 'category_code', targetKey: 'code', as: 'categoryData' })
        }
    }
    Book.init({
        title: DataTypes.STRING,
        price: DataTypes.FLOAT,
        available: DataTypes.INTEGER,
        image: DataTypes.STRING,
        description: DataTypes.TEXT,
        category_code: DataTypes.STRING,
        filename: DataTypes.STRING,

    }, {
        sequelize,
        modelName: 'Book',
    });
    return Book;
};