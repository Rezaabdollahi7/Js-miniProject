const listItems = [
    { id: 1, name: 'Amin', family: 'Saeedi Rad' },
    { id: 2, name: 'Amir', family: 'Zehtab' },
    { id: 3, name: 'Qadir', family: 'Yolme' },
    { id: 4, name: 'Babak', family: 'Mohammadi' },
    { id: 5, name: 'Hasan', family: 'Ghahreman Zadeh' },

    { id: 6, name: 'Amin', family: 'Saeedi Rad' },
    { id: 7, name: 'Amir', family: 'Zehtab' },
    { id: 8, name: 'Qadir', family: 'Yolme' },
    { id: 9, name: 'Babak', family: 'Mohammadi' },
    { id: 10, name: 'Hasan', family: 'Ghahreman Zadeh' },

    { id: 11, name: 'Saeed', family: 'Ehsani' },
    { id: 12, name: 'Siamak', family: 'Modiri' },
    { id: 13, name: 'Mohsen', family: 'Ansari' },
    { id: 14, name: 'Mehran', family: 'Ali Pour' },
    { id: 15, name: 'Amir Hossein', family: 'Mahtabi' },

    { id: 16, name: 'Hossein', family: 'Amino' },
    { id: 17, name: 'Melika', family: 'Ehsani' },
    { id: 18, name: 'Qadir', family: 'Yolme' },
    { id: 19, name: 'Fatemeh', family: 'Alilou' },
    { id: 20, name: 'Ehsan', family: 'Tayyebi' },

    { id: 21, name: 'Zahra', family: 'Gholami' },
    { id: 22, name: 'Matin', family: 'Sahebi' },

];

let itemListContainer = document.querySelector('#list')
let paginationContainer = document.querySelector('#pagination')

let currentPage = 1
let rowsCount = 5

function displayUesrsList(allUesrsArray, usersContainer, rowsCount, currentPage) {
    usersContainer.innerHTML = ''

    let endIndex = rowsCount * currentPage
    let startIndex = endIndex - rowsCount

    let paginatedItems = allUesrsArray.slice(startIndex, endIndex)

    paginatedItems.forEach(function (user) {
        let Element = document.createElement('div')
        Element.classList.add('item')
        Element.innerHTML = user.name + ' ' + user.family

        usersContainer.appendChild(Element)
    })

}

function setupPagination(allUesrsArray, pagesContainer, rowsCount) {

    pagesContainer.innerHTML = ''

    let pageCount = Math.ceil(allUesrsArray.length / rowsCount)

    for (let i = 1; i < pageCount + 1; i++) {
        let btn = ButtonGenerator(i, allUesrsArray)
        pagesContainer.appendChild(btn)
    }

}

function ButtonGenerator(page, allUesrsArray) {
    let button = document.createElement('button')
    button.innerHTML = page

    if (page === currentPage) {
        button.classList.add('active')
    }
    button.classList.add('pgbtn')

    button.addEventListener('click', function () {
        currentPage = page
        displayUesrsList(allUesrsArray, itemListContainer, rowsCount, currentPage)

        let prevPage = document.querySelector('button.active')
        prevPage.classList.remove('active')

        button.classList.add('active')


    })

    return button
}

displayUesrsList(listItems, itemListContainer, rowsCount, currentPage)
setupPagination(listItems, paginationContainer, rowsCount)