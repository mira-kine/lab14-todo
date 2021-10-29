import { lyrics } from './data/to-do.js';

export function findById(items, id) {
    for (let item of items) {
        if ((item.id) === id) {
            return item;
        }
    }
}

export function setUser(userObject) {
    // info from login listener
        // 'submit' button
    // stringify and push to localStorage
    const loginString = JSON.stringify(userObject);
    localStorage.setItem('USER', loginString);
        //'user-name'
        //'user-password'
        // to-do items
}


export function getUser() {
    // GET -- take from local storage
    const loginString = localStorage.getItem('USER');
    return JSON.parse(loginString);
    //stringify
    // push to local storage
}


const list = document.getElementById('form');
export function renderList(){
    for (let lyric of lyrics){ 
        const label = document.createElement('label');
        
        const radioButton = document.createElement('input');
        radioButton.type = 'radio';
        radioButton.value = lyric.id;
        
        const span = document.createElement('span');
        span.textContent = lyric.list;
        label.append(radioButton, span);
        list.append(label);
    }
}


// export function removeItem(){
    
// }