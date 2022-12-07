/**
 * Signing of declaration of consent.
 * Check the tasks / fix
 * Questions
 * Continue Todo app
 *      Todolist
 *      Adding Todo item
 *      Delete todo item
 *      Add validations
 *      Data structure
 */



function createTodo() {

    /** The input */
    let input = document.getElementById('name');
    /** The textarea */
    let tarea = document.getElementById('description');
    /** A todo list element */
    let listEl = createTodoElement(input.value, tarea.value);
    /** The ul elemnet */
    let todolist = document.getElementById('todoList');
    /** Add todo element to the list */
    todolist.append(listEl);

}

function createTodoElement(name, description) {
    /** The name element */
    let h5 = document.createElement('h5');
    /** The description element */
    let p = document.createElement('p');

    /** The close lement */

    let close_el = document.createElement('span');
    close_el.innerText = 'X';
    close_el.style.position = "absolute";
    close_el.style.top = '5px';
    close_el.style.right = '5px';
    close_el.style.color = 'red';
    close_el.style.fontWeight = 'bolder';
    close_el.style.cursor = 'pointer';
    close_el.onclick = function clearFunc() {
        li.remove();
    }




    /** The checkbox */

    let checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.style.position = "absolute";
    checkbox.style.bottom = '5px';
    checkbox.style.right = '5px';
    checkbox.onchange = function () { alert(' Checkbox is changed ') };




    /** The name of Todo */
    h5.innerText = name;

    /** The description of Todo */
    p.innerHTML = "<span>" + description + "</span>";

    /** The Todd item */
    let li = document.createElement('li');
    li.classList.add('list-group-item');
    li.classList.add('m-2');
    li.style.position = 'relative';

    /** Append elments */
    /// Append name

    li.append(h5);
    /// Append description
    li.append(p);
    /// Append close element
    li.append(close_el);
    /// Append checkbox
    li.append(checkbox);




    return li;


}


