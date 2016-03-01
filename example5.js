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
   arrow: {
        size: 8,
        offset: 3
    }
};
var myTemplate = new GitGraph.Template( myTemplateConfig);
var gitgraph5 = new GitGraph({
        elementId: "scenario-5",
        template: "blackarrow",
        orientation: "vertical",
        mode: "compact"
        }); 

        var master5 = gitgraph5.branch({
                name: "master",
                column: 1
                }); 
        master5.commit("Our master branch");
        
	var dev_d = gitgraph5.branch({
                parentBranch: master5,
                name: "dev_d",
                column: 2
                }); 

        var dev_a = gitgraph5.branch({
                parentBranch: dev_d,
                name: "dev_a",
                column: 3
                }); 
        master5.checkout();
	dev_d.commit("Developer A checks out master and makes a commit against his branch").commit("And another commit").commit("Another one");
       	dev_a.commit("Dev D makes a commit.").commit("And another");
	dev_a.commit("Test");
	
