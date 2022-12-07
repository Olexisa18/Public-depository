/** The Document */
const _document = {
    elements: new Map(),
    getRoomById: function( id ) {
        console.log(` The element with ID  ${ id } is returned `);
    },
    getElementsByClassName: function( class_name ) {
        console.log(` The elements with class name  ${ id } are returned `);
    },
    createElement: function( tag_name ) {
        console.log("Element created : ", tag_name );
        console.log(" The Elemnt "+ tag_name +" is created ");
        console.log(` The element ${ tag_name } is created `);
    }
}

/** The location */
const _location = {
    host: "localhos",
    herf: "some/path?name=sds",
    reload: function() { console.log(' Reloading the page....') }
}

/** The window */
const _window = {
    document : _document,
    location : _location,
    innerHight: 111,
    innerWidth: 200
}











/** Usig functions - Modules */

// const _document1 = new Doc();

// function Doc() 
// {
    
//     return {
//         elements: new Map(),
//         getRoomById: function( id ) {
    
//         },
//         getElementsByClassName: function( class_name ) {
    
//         },
//         createElement: function( tag_name ) {
            
//         }
//     }
// }