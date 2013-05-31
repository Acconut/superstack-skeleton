Pages.add("/")
    .template("home")
    .before(function(params, render) {
        render();
    });

Pages.add("/time")
    .template("time")
    .before(function(params, render) {
        render();
    })
    .after(function() {
        
        // Only inside browser, please!
        if(!isServer) {
            Methods._register("time");
            Methods.time({}, function(err, time) {
                
                // Clear the message ...
                document.getElementById("please-wait").innerHTML = "";
                
                // ... and show the time
                var e = document.createElement("p");
                e.innerHTML = "The time is " + (new Date(time)).toString();
                
                document.body.appendChild(e);
                
            });
        }
        
    });

Pages.else(function(url, notFound) {
    Pages.render("notFound", {url: url});
    document.title = "Not found!";
    notFound();
});