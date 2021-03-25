window.onload = function () {

    // Get the a links with class="svg"

    let svgs = document
        .getElementsByClassName("svg");


    // interate through them to attach hover listeners

    for (var i = 0; i < svgs.length; i++) {

        let link = svgs[i];

        link.addEventListener("mouseover", function () {

            let obj = event.target
                .getElementsByTagName("object");

            console.log("obj: ", obj);

            let doc = obj[0].contentDocument;

            console.log("doc: ", doc);

            doc.getElementsByTagName("path")[0]
                .setAttribute("fill", "#1A5398");
        });

        link.addEventListener("mouseout", function () {

            let obj = event.target
                .getElementsByTagName("object");

            console.log("obj: ", obj);

            let doc = obj[0].contentDocument;

            console.log("doc: ", doc);

            doc.getElementsByTagName("path")[0]
                .setAttribute("fill", "black");
        });
    }

};





 
