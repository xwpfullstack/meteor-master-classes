(function(){
Template.__checkName("addPost");
Template["addPost"] = new Template("Template.addPost", (function() {
  var view = this;
  return [ Blaze._TemplateWith(function() {
    return "headerButtonLeft";
  }, function() {
    return Spacebars.include(view.lookupTemplate("contentFor"), function() {
      return [ "\n    ", Blaze._TemplateWith(function() {
        return {
          text: Spacebars.call(""),
          icon: Spacebars.call("chevron-left"),
          path: Spacebars.call("lists")
        };
      }, function() {
        return Spacebars.include(view.lookupTemplate("ionNavBackButton"));
      }), "\n  " ];
    });
  }), "\n\n  ", Blaze._TemplateWith(function() {
    return "headerTitle";
  }, function() {
    return Spacebars.include(view.lookupTemplate("contentFor"), function() {
      return [ "\n    ", HTML.H1({
        "class": "title"
      }, "Add Post"), "\n  " ];
    });
  }), "\n\n  ", Spacebars.include(view.lookupTemplate("ionView"), function() {
    return [ "\n    ", Spacebars.include(view.lookupTemplate("ionContent"), function() {
      return [ "\n\n      ", Blaze._TemplateWith(function() {
        return {
          collection: Spacebars.call("Posts"),
          id: Spacebars.call("add-form"),
          type: Spacebars.call("insert")
        };
      }, function() {
        return Spacebars.include(view.lookupTemplate("autoForm"), function() {
          return [ "\n        ", Blaze._TemplateWith(function() {
            return {
              id: Spacebars.call("title"),
              name: Spacebars.call("title")
            };
          }, function() {
            return Spacebars.include(view.lookupTemplate("afQuickField"));
          }), "\n        ", Blaze._TemplateWith(function() {
            return {
              id: Spacebars.call("body"),
              name: Spacebars.call("body")
            };
          }, function() {
            return Spacebars.include(view.lookupTemplate("afQuickField"));
          }), "\n\n        ", HTML.DIV({
            "class": "button-bar"
          }, "\n          ", HTML.A({
            "class": "button icon ion-android-send button-positive"
          }, "Submit"), "\n        "), "\n      " ];
        });
      }), "\n\n    " ];
    }), "\n  " ];
  }) ];
}));

})();
