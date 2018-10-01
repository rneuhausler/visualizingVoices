          // Add hover
          svg.append("path")
              .data([data])
            .enter().append("rect")
              .attr("class", "line")



   
            
            
                        //from  davegotz
            
       var tool_tip = d3.tip()
      .attr("class", "d3-tip")
      .offset([-8, 0])
      .html(function(d) { return "Radius: " + d; });
     svg.call(tool_tip);
    
    // Now render the SVG scene, connecting the tool tip to each circle.
    var circles = svg.selectAll("circle").data(radii);
    circles.enter().append("circle")
      .attr("r", function(d) { return d; })
      .attr("cx", function(d, i) { return 50 + 50*i; })
      .attr("cy", function(d, i) { return 50 + 50*i; })
      .style("fill", "red")
      .style("stroke", "black")
      .on('mouseover', tool_tip.show)
      .on('mouseout', tool_tip.hide);
            
            // d3.tip
// Copyright (c) 2013 Justin Palmer
// ES6 / D3 v4 Adaption Copyright (c) 2016 Constantin Gavrilete
// Removal of ES6 for D3 v4 Adaption Copyright (c) 2016 David Gotz
//
// Tooltips for d3.js SVG visualizations
            


              
            
            
                        //from d3noob github
  
        // set the dimensions and margins of the graph
        var margin = {top: 20, right: 20, bottom: 30, left: 50},
            width = 700 - margin.left - margin.right,
            height = 500 - margin.top - margin.bottom;

        // parse the date / time
        var parseDate = d3.timeParse("%Y-%m-%d");
        //var parseDate = d3.time.format("%Y-%m-%d").parse;
        var formatTime = d3.timeParse("%Y-%m-%d");

        // set the ranges
        var x = d3.scaleTime().range([0, width]);
        var y = d3.scaleLinear().range([height, 0]);

        // define the line
        var valueline = d3.line()
            .x(function(d) { return x(d.dt); })
            .y(function(d) { return y(d.count); });
            
        // Define the div for the tooltip
        var div = d3.select("body").append("div")	
                    .attr("class", "tooltip")				
                    .style("opacity", 0);
            
        // append the svg object to the body of the page
        // appends a 'group' element to 'svg'
        // moves the 'group' element to the top left margin
        var svg = d3.select("body").append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
          .append("g")
            .attr("transform",
                  "translate(" + margin.left + "," + margin.top + ")");
            
   
            

        // Get the data
        d3.csv("/data/comcenter.csv", function(error, data) {
          if (error) throw error;

          // format the data
          data.forEach(function(d) {
              d.dt = parseDate(d.dt);
              d.count = +d.count;
          });

          // Scale the range of the data
          x.domain(d3.extent(data, function(d) { return d.dt; }));
          y.domain([0, d3.max(data, function(d) { return d.count; })]);

          // Add the valueline path.
          svg.append("path")
              .data([data])
              .attr("class", "line")
              .attr("d", valueline);
            
            
         // Add the scatterplot
    svg.selectAll("dot")	
        .data(data)			
    .enter().append("circle")								
        .attr("r", 5)		
        .attr("cx", function(d) { return x(d.dt); })		 
        .attr("cy", function(d) { return y(d.count); })		
        .on("mouseover", function(d) {		
            div.transition()		
                .duration(200)		
                .style("opacity", .9);		
            div	.html(formatTime(d.dt) + "<br/>"  + d.count)	
                .style("left", (d3.event.pageX) + "px")		
                .style("top", (d3.event.pageY - 28) + "px");	
            })					
        .on("mouseout", function(d) {		
            div.transition()		
                .duration(500)		
                .style("opacity", 0);	
        });

          // Add the X Axis
          svg.append("g")
              .attr("transform", "translate(0," + height + ")")
              .call(d3.axisBottom(x));

          // Add the Y Axis
          svg.append("g")
              .call(d3.axisLeft(y));
            
        });
            





        <!-- from d3noob example -->
            
        // parse the date / time
        var parseTime = d3.timeParse("%Y-%m-%d");
        
            
            
            
        d3.csv("/data/comcenter.csv", function(error, data) {
            if (error) throw error;
            
            // format the data
            data.forEach(function(d) {
                d.dt = parseTime(d.dt)
            });
        });

            
            




 
        <!-- line 1 SVG -->
        
        <svg width="1000" height="100">
		  <path transform="translate(200, 0)" />
        </svg>
        
         <!-- scale SVG -->

        
        <svg width="1000" height="100">
		  <g class="axis" transform="translate(20, 0)" />
        </svg>
            

        
        
        <script>
            var data = [[0, 20], [100, 80], [200, 40], [300, 60], [400, 30]];
            var lineGenerator = d3.line();
            var pathString = lineGenerator(data);
            
            d3.select('path')
	          .attr('d', pathString);
        </script>
        
        
        
         <!-- axis -->

        <script>
            var scale = d3.scaleLinear().domain([0, 1000]).range([0, 600]);

            var axis = d3.axisBottom().scale(scale);


            d3.select('.axis')
	          .call(axis);

	    </script>  

        
        <h3> Title </h3>
        <p>
            This is a paragraph, here we write about our thang hello
        </p>




<!–– 
Learning D3, html, and CSS \('.')/

from https://d3indepth.com/introduction/

**** loading csv data ****

d3.csv('index.csv', function(err, data) {
  // Do something with the data
})



*** CREDIT ***

CA SVG: By Thadius856 


LINE, AXIS: D3 in Depth book by Peter Cook.




-->

        
        
        
                                <!-- WATER QUALITY CALIFORNIA -->




                        //from d3noob
            // Set the dimensions of the canvas / graph
        var margin = {top: 30, right: 20, bottom: 30, left: 50},
            width = 600 - margin.left - margin.right,
            height = 270 - margin.top - margin.bottom;

        // Parse the date / time
        var parseDate =  d3.timeParse("%Y-%m-%d");
        var formatTime = d3.timeFormat("%B %Y");

        // Set the ranges
        var x = d3.scaleTime().range([0, width]);
        var y = d3.scaleLinear().range([height, 0]);

        // Define the line
        var valueline = d3.line()
            .x(function(d) { return x(d.dt); })
            .y(function(d) { return y(d.count); });

        // Define the div for the tooltip
        var div = d3.select("body").append("div")	
            .attr("class", "tooltip")				
            .style("opacity", 0);

        // Adds the svg canvas
        var svg = d3.select("body"),
            width = +svg.attr("width"),
            height = +svg.attr("height"),
            transform = d3.zoomIdentity;
        
            //.append("svg")
            //    .attr("width", width + margin.left + margin.right)
            //    .attr("height", height + margin.top + margin.bottom)
            //.append("g")
            //    .attr("transform", 
            //          "translate(" + margin.left + "," + margin.top + ")"),

        // Get the data
        d3.csv("/data/comcenter.csv", function(error, data) {
            data.forEach(function(d) {
                d.dt = parseDate(d.dt);
                d.count = +d.count;
            });

            // Scale the range of the data
            x.domain(d3.extent(data, function(d) { return d.dt; }));
            y.domain([0, d3.max(data, function(d) { return d.count; })]);

            // Add the valueline path.
            svg.append("path")
                .attr("class", "line")
                .attr("d", valueline(data));

            // Add the scatterplot

            
            svg.selectAll("dot")	
                .data(data)			
            .enter().append("circle")								
                .attr("r", 5)		
                .attr("cx", function(d) { return x(d.dt); })		 
                .attr("cy", function(d) { return y(d.count); })
                .call(d3.drag()
                    .on("drag", dragged))
                .on("mouseover", function(d) {		
                    div.transition()		
                        .duration(200)		
                        .style("opacity", .9);		
                    div	.html(formatTime(d.dt) + "<br/>"  + d.count)	
                        .style("left", (d3.event.pageX) + "px")		
                        .style("top", (d3.event.pageY - 28) + "px");	
                    })					
                .on("mouseout", function(d) {		
                    div.transition()		
                        .duration(500)		
                        .style("opacity", 0);
                });
            
            
                svg.call(d3.zoom()
                         .scaleExtent([1 / 2, 8])
                         .on("zoom", zoomed));

                function zoomed() {
                  svg.attr("transform", d3.event.transform);
                }

                function dragged(d) {
                  d3.select(this).attr("cx", d.x = d3.event.x).attr("cy", d.y = d3.event.y);
                }


              // Add the X Axis
              svg.append("g")
                  .attr("transform", "translate(0," + height + ")")
                  .call(d3.axisBottom(x));

              // Add the Y Axis
              svg.append("g")
                  .call(d3.axisLeft(y));

        });









                                    // V4




    
                        //from d3noob
            // Set the dimensions of the canvas / graph
        var margin = {top: 30, right: 20, bottom: 30, left: 50},
            width = 600 - margin.left - margin.right,
            height = 270 - margin.top - margin.bottom;

        // Parse the date / time
        var parseDate =  d3.timeParse("%Y-%m-%d");
        var formatTime = d3.timeFormat("%B %Y");

        // Set the ranges
        var x = d3.scaleTime().range([0, width]);
        var y = d3.scaleLinear().range([height, 0]);

        // Define the line
        var valueline = d3.line()
            .x(function(d) { return x(d.dt); })
            .y(function(d) { return y(d.count); });

        // Define the div for the tooltip
        var div = d3.select("body").append("div")	
            .attr("class", "tooltip")				
            .style("opacity", 0);

        // Adds the svg canvas
        var svg = d3.select("body")
            .append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
            .append("g")
                .attr("transform", 
                      "translate(" + margin.left + "," + margin.top + ")");

        // Get the data
        d3.csv("/data/comcenter.csv", function(error, data) {
            data.forEach(function(d) {
                d.dt = parseDate(d.dt);
                d.count = +d.count;
            });

            // Scale the range of the data
            x.domain(d3.extent(data, function(d) { return d.dt; }));
            y.domain([0, d3.max(data, function(d) { return d.count; })]);

            // Add the valueline path.
            svg.append("path")
                .attr("class", "line")
                .attr("d", valueline(data));

            // Add the scatterplot
            svg.selectAll("dot")	
                .data(data)			
            .enter().append("circle")								
                .attr("r", 5)		
                .attr("cx", function(d) { return x(d.dt); })		 
                .attr("cy", function(d) { return y(d.count); })		
                .on("mouseover", function(d) {		
                    div.transition()		
                        .duration(200)		
                        .style("opacity", .9);		
                    div	.html(formatTime(d.dt) + "<br/>"  + d.count)	
                        .style("left", (d3.event.pageX) + "px")		
                        .style("top", (d3.event.pageY - 28) + "px");	
                    })					
                .on("mouseout", function(d) {		
                    div.transition()		
                        .duration(500)		
                        .style("opacity", 0);	
                });

              // Add the X Axis
              svg.append("g")
                  .attr("transform", "translate(0," + height + ")")
                  .call(d3.axisBottom(x));

              // Add the Y Axis
              svg.append("g")
                  .call(d3.axisLeft(y));

        });




\\ V3
        
            
            
            
            // Set the dimensions of the canvas / graph
        var margin = {top: 30, right: 20, bottom: 30, left: 50},
            width = 600 - margin.left - margin.right,
            height = 270 - margin.top - margin.bottom;

        // Parse the date / time
        var parseDate = d3.time.format("%Y-%m-%d").parse;
        var formatTime = d3.time.format("%Y %m");

        // Set the ranges
        var x = d3.time.scale().range([0, width]);
        var y = d3.scale.linear().range([height, 0]);

        // Define the axes
        var xAxis = d3.svg.axis().scale(x)
            .orient("bottom").ticks(5);

        var yAxis = d3.svg.axis().scale(y)
            .orient("left").ticks(5);

        // Define the line
        var valueline = d3.svg.line()
            .x(function(d) { return x(d.dt); })
            .y(function(d) { return y(d.count); });

        // Define the div for the tooltip
        var div = d3.select("body").append("div")	
            .attr("class", "tooltip")				
            .style("opacity", 0);

        // Adds the svg canvas
        var svg = d3.select("body")
            .append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
            .append("g")
                .attr("transform", 
                      "translate(" + margin.left + "," + margin.top + ")");

        // Get the data
        d3.csv("/data/comcenter.csv", function(error, data) {
            data.forEach(function(d) {
                d.dt = parseDate(d.dt);
                d.count = +d.count;
            });

            // Scale the range of the data
            x.domain(d3.extent(data, function(d) { return d.dt; }));
            y.domain([0, d3.max(data, function(d) { return d.count; })]);

            // Add the valueline path.
            svg.append("path")
                .attr("class", "line")
                .attr("d", valueline(data));

            // Add the scatterplot
            svg.selectAll("dot")	
                .data(data)			
            .enter().append("circle")								
                .attr("r", 5)		
                .attr("cx", function(d) { return x(d.dt); })		 
                .attr("cy", function(d) { return y(d.count); })		
                .on("mouseover", function(d) {		
                    div.transition()		
                        .duration(200)		
                        .style("opacity", .9);		
                    div	.html(formatTime(d.dt) + "<br/>"  + d.count)	
                        .style("left", (d3.event.pageX) + "px")		
                        .style("top", (d3.event.pageY - 28) + "px");	
                    })					
                .on("mouseout", function(d) {		
                    div.transition()		
                        .duration(500)		
                        .style("opacity", 0);	
                });

            // Add the X Axis
            svg.append("g")
                .attr("class", "x axis")
                .attr("transform", "translate(0," + height + ")")
                .call(xAxis);

            // Add the Y Axis
            svg.append("g")
                .attr("class", "y axis")
                .call(yAxis);

        });



       var zoom = d3.zoom()
          .scaleExtent([1, 100])
          .on('zoom', zoomFn);

      var zoomed = function() {
          d3.select('#div2').select('svg').select('g')
            .attr('transform', 'translate(' + d3.event.transform.x + ',' + d3.event.transform.y + ') scale(' + d3.event.transform.k + ')');
      }
            
d3.select('#div2').select('svg').select('rect').call(zoom);



              // Add the X Axis
              svg.append("g")
                  .attr("transform", "translate(0," + height + ")")
                  .call(d3.axisBottom(x));

              // Add the Y Axis
              svg.append("g")
                  .call(d3.axisLeft(y));
            
        


            