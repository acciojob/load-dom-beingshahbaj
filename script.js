//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
    console.log("DOMContentLoaded event fired");

    var body = document.body;

    if (body.children.length === 0) {
        console.log("Body has no children");

        var paragraph = document.createElement("p");
        paragraph.textContent = "DOM load success";

        body.appendChild(paragraph);
    } else {
        console.log("Body already has children:", body.children);
    }
});
