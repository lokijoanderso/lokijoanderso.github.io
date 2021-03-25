window.onload = function () {

    // Get the Object by ID

    let svgs = document
        .getElementsByTagName("object");

    for (var i = 0; i < svgs.length; i++) {

        let doc = svgs[i];

        doc.addEventListener("onmouseover", function () {

            console.log(EventTarget);

            EventTarget.getSVGDocument()
                .getElementsByTagName("path")
                .setAttribute("fill", "blue");
        });
    }

};





 
