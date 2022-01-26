'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    await queryInterface.createTable('Order', {
      orderId: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      customerId: {
        allowNull: true,
        type: Sequelize.UUID,
      },
      deliveryDate: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      totalPrice: {
        allowNull: true,
        type: Sequelize.FLOAT,
      }

    });

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
