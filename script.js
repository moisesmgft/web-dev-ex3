$(document).ready(function() {
    // Function to handle selecting nodes
    function handleNodeSelection(node) {
        $("li.selected").removeClass("selected");
        node.addClass("selected");
    }

    // Select a node when clicked
    $("#treeview").on("click", "li", function(event) {
        // Check if the clicked node is not the root node
        if (!$(event.target).is("span")) {
            handleNodeSelection($(this));
            event.stopPropagation(); // Prevent event propagation to parent nodes
        }
    });
    
    // Remove selection when clicking outside any node
    $(document).click(function(event) {
        if (!$(event.target).closest("#treeview").length) {
            $("li.selected").removeClass("selected");
        }
    });


    // Add a new child node to the selected node
    $("#addNode").click(function() {
        const newNodeName = prompt("Insira o nome do elemento:");
        if (newNodeName) {
            const selectedNode = $("li.selected");
            if (selectedNode.length > 0) {
                if (!selectedNode.children("ul").length) {
                    selectedNode.append("<ul></ul>");
                }
                const newNode = $("<li><span>" + newNodeName + "</span></li>");
                newNode.appendTo(selectedNode.children("ul"));
                handleNodeSelection(newNode); // Select the newly added node
            } else {
                alert("Por favor, selecione um elemento.");
            }
        }
    });

    // Remove the selected node and its children
    $("#removeNode").click(function() {
        const selectedNode = $("li.selected");
        selectedNode.remove();
    });

    // Modify the name of the selected node
    $("#modifyNode").click(function() {
        const selectedNode = $("li.selected");
        const newNodeName = $("#modifyNodeName").val();
        if (newNodeName) {
            selectedNode.children("span").text(newNodeName);
        }
    });


});
