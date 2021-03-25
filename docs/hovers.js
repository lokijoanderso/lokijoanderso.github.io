window.onload = function () {

    // Get the Object by ID

    let svgs = document
        .getElementsByTagName("object");


    for (var i = 0; i < svgs.length; i++) {

        console.log("loop 1: ", svgs[i]);
        let doc = svgs[i].getSVGDocument();

        console.log("get doc: ", doc);

        doc.addEventListener("onmouseover", function () {
            EventTarget.getElementsByTagName("path")
                .setAttribute("fill", "blue");
        });
    }

};





 
