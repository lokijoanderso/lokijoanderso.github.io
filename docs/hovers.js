window.onload = function () {

    // Get the Object by ID

    let svgs = document
        .getElementsByClassName("svg");

    for (var i = 0; i < svgs.length; i++) {

        let link = svgs[i];

        link.addEventListener("mouseover", function () {

            let obj = event.target
                .getElementsByTagName("object");

            console.log("obj: ", obj);

            let doc = obj[0].contentDocument;

            console.log("doc: ", doc);

            doc.getElementsByTagName("path")
                .setAttribute("fill", "blue");
        });
    }

};





 
