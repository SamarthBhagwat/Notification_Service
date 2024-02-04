'use strict';

const { NOTIFICATION_TICKET_STATUS } = require('../utils/common/enum');

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NotificationTicket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  NotificationTicket.init({
    subject:{
      type: DataTypes.STRING,
      allowNull: false
    } ,
    content: {
      type: DataTypes.STRING,
      allowNull: false
    },
    recepientEmail: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        isEmail: true
      }
    },
    status: {
      type: DataTypes.ENUM,
      allowNull: false,
      values: [NOTIFICATION_TICKET_STATUS.PENDING, NOTIFICATION_TICKET_STATUS.SUCCESS, NOTIFICATION_TICKET_STATUS.FAILED]
    },
    notificationTime: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'NotificationTicket',
  });
  return NotificationTicket;
};