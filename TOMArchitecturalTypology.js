"use strict";
define(['require', 'scene'],
  function(require, Scene) {

    class TOMArchitecturalTypology extends Scene {
      constructor() {
          console.log("Going to Super Scene TOMArchitecturalTypology");
          var config = {
            "id": "TOMArchitecturalTypology",
            "groupid": "architecture",
            "languages": ['en-US', 'nl-NL'],
          };
          super(config);
        }
        // You must copy this, else we do not know where we are
      get path() {
        return require.toUrl("./").split('?')[0];
      }
    };

    return new TOMArchitecturalTypology();

  });
