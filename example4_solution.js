var myTemplateConfig = { 
  colors: [ "#F00", "#0F0", "#0FF", "#00F" ], // branches colors, 1 per column                                                         
  
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
var myTemplate = new GitGraph.Template( myTemplateConfig);
var gitgraph4 = new GitGraph({
        elementId: "resolution",
        template: "blackarrow",
        orientation: "vertical",
        mode: "compact"
        }); 

        var master4 = gitgraph4.branch({
                name: "master",
                column: 1
                }); 
        master4.commit("Our master branch");
        var dev_a = gitgraph4.branch({
                parentBranch: master4,
                name: "dev_a",
                column: 4,
	    	showLabel: true
                }); 

        var dev_b = gitgraph4.branch({
                parentBranch: master4,
                name: "dev_b",
                column: 3,
	    	showLabel: true
                }); 
        
	
	var dev_c = gitgraph4.branch({
		parentBranch: master4,
	    	name: "dev_c",
	    	column: 2,
	    	showLabel: true
		});

	master4.checkout();
        //dev_a.commit("Developer A checks out master and makes a commit against his branch").commit("And another commit").commit("Another one");
	master4.commit("Developer B opens a branch at this point");
        //dev_b.commit("Developer B makes a commit against his branch").commit("And another").commit("This one is merged");
	master4.commit("Developer C opens a branch against the same master");
	dev_c.commit("Developer C makes a commit.").commit("And another").commit("And this one gets merged");
	//dev_a.commit("Developer A makes another change, run git fetch to update the branch after Dev B's merger to PROD");
	dev_c.merge(master4);
	dev_a.commit("test commit").commit("Another").commit("Another");
	dev_b.commit("test commit").commit("Another").commit("Another");

