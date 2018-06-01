'use strict';

/**
 * @ngdoc function
 * @name serviceQuizApp.controller:BricksABunchCtrl
 * @description
 * # BricksABunchCtrl
 * Controller of the serviceQuizApp
 */
angular.module('serviceQuizApp')
  .controller('BricksABunchCtrl', ['brickWarehouse',function (warehouse) {
    this.name = 'Bricks A Bunch';
    this.redBricks = warehouse.bricks.red;

    // this.redBricks = {
    //   '1x1': {
    //     quantity: 13,
    //     price: 0.01
    //   },
    //   '2x2': {
    //     quantity: 48,
    //     price: 0.03
    //   },
    //   '2x6': {
    //     quantity: 9,
    //     price: 0.05
    //   }
    // };
    // 
    this.addToCart = function(size){
      warehouse.decreaseQty('red',size);
    }
  }]);
