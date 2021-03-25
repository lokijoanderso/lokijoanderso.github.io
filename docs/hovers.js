window.onload = function () {

    // Get the Object by ID

    let svgs = document
        .getElementsByTagName("object");

    for (var i = 0; i < svgs.length; i++) {

        let doc = svgs[i].getSVGDocument();

        doc.addEventListener("onmouseover", function () {

            console.log(EventTarget);

            EventTarget.getElementsByTagName("path")
                .setAttribute("fill", "blue");
        });
    }

};





 
