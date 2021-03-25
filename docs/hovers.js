window.onload = function () {

    // Get the Object by ID

    let svgs = document
        .getElementsByTagName("object");


    for (var i = 0; i < svgs.length; i++) {

        console.log("loop 1: ", svgs[i]);
        let doc = svgs[i].getSVGDocument();

        console.log("get doc: ", doc);

        let path = doc.getElementsByTagName("path");

        console.log("get path: ", path);

        path.addEventListener("onmouseover", function () {
            path.setAttribute("fill", "blue");
        });
    }

};





 
