'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('scheduled_informations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      schedule_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users_schedule_details',
          key: 'schedule_id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      schedule_datetime: {
        type: Sequelize.DATE,
        allowNull: false
      },
      scheduler_name: {
        type: Sequelize.STRING(64),
        allowNull: false
      },
      status: {
        type: Sequelize.INTEGER(2),
        allowNull: false,
        defaultValue: 0
        // 0- Not Yet Started, 1- Running, 2-Completed, 3-Errored
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('scheduled_informations');
  }
};