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

var myTemplate = new GitGraph.Template( myTemplateConfig);

var gitgraph3 = new GitGraph({
        elementId: "scenario-3",
        template:  "blackarrow",
        orientation: "vertical",
        mode: "compact"
        }); 

        var master3 = gitgraph3.branch({
                name: "master",
                column: 1,
	    	showLabel: true
                }); 
        master3.commit("Our master branch");
        master3.checkout();
	master3.checkout();
        var dev_a = gitgraph3.branch({
                parentBranch: master3,
                name: "dev_a",
                column: 3,
	    	showLabel: true
                }); 

        var dev_b = gitgraph3.branch({
                parentBranch: master3,
                name: "dev_b",
                column: 2,
	    	showLabel: true
                }); 
        master3.checkout();
        dev_a.commit("Developer A checks out master and makes a commit against his branch").commit("And another commit").commit("Another one");
	//master3.commit("Developer B opens a branch at this point");
        dev_b.commit("Developer B makes a commit against his branch").commit("And another").commit("This one is merged");
	dev_b.merge(master3);
	dev_a.commit("Developer A fetches the changes after the merge at this point");
	//dev_a.merge(master3.commit);
	//master3.checkout();
	dev_a.commit("\n Developer A has fetched the changes, and merges their changes back into master");
	dev_a.merge(master3);
