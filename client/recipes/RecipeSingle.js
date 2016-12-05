Template.RecipeSingle.onCreated(function() {
    var self = this;
    self.autorun(function() {
      self.subscribe('recipes');
    });
});

Template.RecipeSingle.helpers({
  recipes: ()=> {
    var id = FlowRouter.getParam('id');
    return Recipes.findOne({_id: id});
  }
});
