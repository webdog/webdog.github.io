var myTemplateConfig = {
  colors: [ "#F00", "#0F0", "#0FF" ], // branches colors, 1 per column
  
  branch: {
    lineWidth: 8,
    spacingX: 50,
    showLabel: true,                  // display branch names on graph
    labelFont: "normal 16pt Arial",
    mergeStyle: "straight"
  },

  commit: {
    spacingY: -80,
    dot: {
      size: 18
    },
    message: {
      displayAuthor: true,
      displayBranch: true,
      displayHash: false,
      font: "normal 12pt Arial"
    },
    tooltipHTMLFormatter: function ( commit ) {
      return "" + commit.sha1 + "" + ": " + commit.message;
    }
  }
};
var myTemplate = new GitGraph.Template( myTemplateConfig );
var gitgraph = new GitGraph({
	elementId: "scenario-1",        
        template: myTemplate,
        orientation: "horizontal",
        mode: "extended"
        });
        
        var master = gitgraph.branch({
		name: "master",
	    	column: 1 
		});
        master.commit("Our master branch")
	master.checkout();
	
	var develop = gitgraph.branch({
		parentBranch: master,
	    	name: "dev-a",
	    	column: 2
		});
	
	develop.commit("Developer branches and makes a commit").commit("Another change").commit("Another change");
	develop.merge(master);
