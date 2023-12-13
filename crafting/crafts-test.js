var assert = require('chai').assert;
var { createMaterial, calculateMaterialCost, createSupplyCloset, addSupply, createNewProject, compareMaterials } = require('./crafts');

describe('Crafting', function() {

  describe('Material', function() {
    it('should create a new material', function() {
      var yarn = createMaterial('yarn', 'skein', 6.99);

      assert.equal(yarn.name, 'yarn');
      assert.equal(yarn.unit, 'skein');
      assert.equal(yarn.costPerUnit, 6.99);
    });

    it('should calculate cost of material', function() {
      var fabric = createMaterial('fabric', 'yard', 12.50);

      var fabricCost = calculateMaterialCost(fabric, 4);

      assert.equal(fabricCost, `4 yards of fabric costs $50.`);

      var paint = createMaterial('paint', 'pint', 3.95);

      var paintCost = calculateMaterialCost(paint, 5);

      assert.equal(paintCost, `5 pints of paint costs $19.75.`);
    });
  });

  describe('Supply Closet', function() {
    it('should create a supply closet', function() {
      var fabric = createMaterial('fabric', 'yard', 12.50);
      var paint = createMaterial('paint', 'pint', 3.95);
      var yarn = createMaterial('yarn', 'skein', 6.99);

      var myCloset = createSupplyCloset([fabric, paint, yarn]);

      assert.deepEqual(myCloset, { supplies: ['fabric', 'paint', 'yarn'] });
    });

    it('should be able to start empty', function() {
      var myCloset = createSupplyCloset();

      assert.deepEqual(myCloset, { supplies: [] });
    });

    it('should be able to add new supplies to the supply closet', function() {
      var glitter = createMaterial('glitter', 'ounce', .99);
      
      var myCloset = createSupplyCloset([glitter]);

      var thread = createMaterial('thread', 'bobbin', 3.67);

      var updatedCloset = addSupply(myCloset, thread);

      assert.deepEqual(updatedCloset, ['glitter', 'thread']);
    });

    it('should not allow you to add the same supply again', function() {
      var fabric = createMaterial('fabric', 'yard', 12.50);
      var paint = createMaterial('paint', 'pint', 3.95);

      var myCloset = createSupplyCloset([fabric, paint]);

      assert.deepEqual(addSupply(myCloset, fabric), 'You already have fabric in your closet!');
    })
  });

  describe('Project', function() {
    it('should create a new craft project', function() {
      var thread = createMaterial('thread', 'bobbin', 3.67);
      var fabric = createMaterial('aida fabric', 'yard', 15.50);
      var materials = [thread, fabric];

      var crossStitchProject = createNewProject(materials, 'in progress');

      assert.deepEqual(crossStitchProject.materialsNeeded, materials);
      assert.equal(crossStitchProject.status, 'in progress');
    });

    it('should have a status of not started if not specified', function() {
      var string = createMaterial('warp string', 'yard', .49);
      var yarn = createMaterial('yarn', 'skein', 7.85);

      assert.equal(createNewProject([string, yarn]).status, 'not started');
    });

    it('should be able to see if you have the necessary supplies to start a project', function() {
      var paper = createMaterial('paper', 'ream', 13.99);
      var paint = createMaterial('paint', 'bottle', '4.50');
      
      var materials = [paper, paint];

      var mySupplies = createSupplyCloset(materials);

      var paintProject = createNewProject(materials);

      var check = compareMaterials(paintProject, mySupplies);

      assert.equal(check, 'Yay! You can start this project!');
    });

    it('should be able to see if you have the necessary supplies to start a project', function() {
      var string = createMaterial('warp string', 'yard', .49);
      var yarn = createMaterial('yarn', 'skein', 7.85);

      var mySupplies = createSupplyCloset([string]);

      var weavingProject = createNewProject([yarn, string]);

      var check = compareMaterials(weavingProject, mySupplies);

      assert.equal(check, 'Oh no! You need to go shopping before you can start this project!');
    })
  });
});