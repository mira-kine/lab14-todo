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
    const loginString = JSON.stringify(userObject)
    localStorage.setItem('USER', loginString);
        //'user-name'
        //'user-password'
        // to-do items
}


export function getUser() {
    // GET -- take from local storage
    const loginString = localStorage.getItem('USER')
    return JSON.parse(loginString)
    //stringify
    // push to local storage
}





export function renderList()

// export function addItem() - will use eventlistener instead.

export function removeItem()

