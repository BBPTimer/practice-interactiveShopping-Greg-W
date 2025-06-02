const addButton = document.getElementById("addButton");

const itemText = document.getElementById("itemText");

const groceryList = document.getElementById("groceryList");

function createListItem(input) {
    if(input === "") {
        return;
    }

    //Create list item
    const item = document.createElement("li");
    item.innerHTML = input;

    //Add remove button to list item
    const removeButton = document.createElement("button");
    removeButton.innerHTML = "Remove";
    item.appendChild(removeButton);

    //Add edit button to list item
    const editButton = document.createElement("button");
    editButton.innerHTML = "Edit";
    item.appendChild(editButton);

    //Create event handler that removes item from list upon clicking remove button
    removeButton.addEventListener("click", () => {
        item.remove();
    });

    //Create event handler that replaces original item with text input and save button, and then replaces text input and save button with updated item
    editButton.addEventListener("click", () => {
        //Create new list item
        const newItemForm = document.createElement("li");

        //Add text input to list item
        const updatedItemText = document.createElement("input");
        updatedItemText.type = "text";
        updatedItemText.value = input;
        newItemForm.appendChild(updatedItemText);

        //Adds save button to list item
        const saveButton = document.createElement("button");
        saveButton.innerHTML = "Save";
        newItemForm.appendChild(saveButton);

        //Replaces original item with text input and save button
        groceryList.replaceChild(newItemForm, item);

        //Replaces text input and save button with updated item
        saveButton.addEventListener("click", () => {
            groceryList.replaceChild(createListItem(updatedItemText.value), newItemForm);
        });
    });

    return item;
}

addButton.addEventListener("click", () => {
    //Add new item to list
    groceryList.appendChild(createListItem(itemText.value));
    //Clear text input
    itemText.value = "";
});