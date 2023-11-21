//your JS code here. If required.
 document.addEventListener("DOMContentLoaded", function() {
            
            var body = document.body;

           
            if (body.children.length === 0) {
                
                var paragraph = document.createElement("p");

             
                paragraph.textContent = "DOM load success";

               
                body.appendChild(paragraph);
            }
        });