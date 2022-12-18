
let todoItems = [];


/**
 * @function TodoList
 * @param {string} form_id - The ID of the form.
 * @param {string} list_id - The ID of the list element
 * 
 * @return {void}
 */

function TodoList(form_id, list_id) {
    /// Get the form
    let form = document.getElementById(form_id);
    /// Get the list
    let list = document.getElementById(list_id);

    /// Get the input value
    let input = form.querySelectorAll('[todo-name]')[0];

    /// Get the textarae vlaue
    let desc = form.querySelectorAll('[todo-desc]')[0];

    /// The add todo button
    let btn = form.querySelectorAll('[todo-btn]')[0];

    /// Assign the clikc event to the button.
    btn.addEventListener('click', todoItem);

    /// todoItem
    function todoItem() {
        /// Create todo item
        // Getting the value from name input;
        let inputVal = input.value;
        // Getting the value from description input;
        let descrVal = desc.value;
        //Creating output element for name; 
        let h5 = document.createElement('h5');
        //Creating output element for description;
        let p = document.createElement('p');
        //Creating close button
        let close_el = document.createElement('span');
        close_el.innerText = 'X';
        close_el.style.position = "absolute";
        close_el.style.top = '5px';
        close_el.style.right = '5px';
        close_el.style.color = 'red';
        close_el.style.fontWeight = 'bolder';
        close_el.style.cursor = 'pointer';
        close_el.onclick = function () { alert(" I clickd....") };

        // Creating checkbox
        let checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.style.position = "absolute";
        checkbox.style.bottom = '5px';
        checkbox.style.right = '5px';
        checkbox.onchange = function () { alert(' Checkbox is changed ') }

        ///Putting value of name input to name output element
        h5.innerText = inputVal;

        ///Putting value of name input to name output element
        p.innerHTML = "<span>" + descrVal + "</span>";

        // Now, when we have created all 4 ellement of our todoitem, but we also need to create a todoitem and then open it in the list element< that we already have.
        let todoItemEl = document.createElement('li');
        ///Putting some style to the todoitem:
        todoItemEl.classList.add('list-group-item');
        todoItemEl.classList.add('m-2');
        todoItemEl.style.position = 'relative';
        //Opening todoItem in the list element;
        list.append(todoItemEl);

        ////Opening all 4 elements in the todoItem;

        todoItemEl.append(h5);
        /// Append description
        todoItemEl.append(p);
        /// Append close element
        todoItemEl.append(close_el);
        /// Append checkbox
        todoItemEl.append(checkbox);

        return todoItemEl;
    }
    /// Then we need to add our todoItem to the array of todoItems.
    let newItem = new todoItem(input.value, desc.value);
    todoItems.push(newItem);
    return newItem;





}




