window.onload = function () {

    // Get the Object by ID

    let svgs = document
        .getElementsByClassName("svg");

    for (var i = 0; i < svgs.length; i++) {

        let link = svgs[i];

        link.addEventListener("onmouseover", function () {

            console.log("mouse over: ", EventTarget);

            EventTarget.getSVGDocument()
                .getElementsByTagName("path")
                .setAttribute("fill", "blue");
        });
    }

};





 
