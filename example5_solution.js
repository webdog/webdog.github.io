var myTemplateConfig_solution = { 
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
    }
   },
      
    message: {         
      displayAuthor: true,
      displayBranch: true,
      displayHash: false,        
      font: "normal 14pt Arial"        
    },        
    tooltipHTMLFormatter: function ( commit ) {     
      return "" + commit.sha1 + "" + ": " + commit.message;    
    }     
};
var myTemplate_solution = new GitGraph.Template( myTemplateConfig_solution);
var gitgraph5_solution = new GitGraph({
        elementId: "resolution",
        template: "blackarrow",
        orientation: "vertical",
        mode: "compact"
        }); 

        var master5_solution = gitgraph5_solution.branch({
                name: "master",
                column: 1,
	    	showLabel: true
                }); 
        master5_solution.commit("Our master branch");
        
	var dev_d_solution = gitgraph5_solution.branch({
                parentBranch: master5_solution,
                name: "dev_d",
                column: 2,
	    	showLabel: true
                }); 

        var dev_a_solution = gitgraph5_solution.branch({
                parentBranch: dev_d_solution,
                name: "dev_a",
                column: 3,
	    	showLabel: true
                }); 
        master5_solution.checkout();
	dev_d_solution.commit("Developer A checks out master and makes a commit against his branch").commit("And another commit").commit("Another one");
       	dev_a_solution.commit("Dev D makes a commit.").commit("And another");
	dev_a_solution.commit();
	dev_a_solution.merge(dev_d_solution);
	dev_d_solution.merge(master5_solution);
	
