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
var gitgraph2 = new GitGraph({
        elementId: "scenario-2",
        template: "blackarrow",
        orientation: "vertical",
        mode: "compact"
        }); 

        var master2 = gitgraph2.branch({
                name: "master",
                column: 3,
	    	showLabel: true
                }); 
        master2.commit("Our master branch");
        //master2.commit("Developer opens a branch at this point")    
        //master2.checkout();
	//master2.checkout();
        var dev_a = gitgraph2.branch({
                parentBranch: master2,
                name: "dev_a",
                column: 4,
		showLabel: true
                }); 

        var dev_b = gitgraph2.branch({
                parentBranch: master2,
                name: "dev_b",
                column: 5,
                showLabel: true
		}); 
        dev_a.commit("Developer A checks out master and makes a commit against his branch").commit("And another commit").commit("Another one");
        //dev_a.delete();
	master2.commit("Developer B opens a branch against master. Dev A is still working in their local copy, no changes pushed upstream")
        dev_b.commit("Developer B makes a commit against his branch").commit("And another").commit("This one is merged");
        //dev_b.merge(master2);
