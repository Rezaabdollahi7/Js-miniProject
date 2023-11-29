const listItems = [
    { id: 1, tittle: 'پروژه های کاربردی با php', desc: '"مینی پروژه‌های کاربری با PHP" یه دوره آموزشی گام به گام هست که برای توسعه‌دهندگان وب، ', author: 'معین فرجی', courseTime: '99:17', courseStar: '5.0', coursePrice: '4,500,000', customers: '3101', courseCat: ['بک اند ', 'پی اچ  پی'], imgSrc: './src/img/courses/php.jpg' },
    { id: 2, tittle: 'آموزش ری اکت ( ReactJS ) در دنیای واقعی | از 0 تا استخدام  ', desc: 'حدود 40 ساعت آموزش جامع و تخصصی ری اکت!  شما در دوره آموزش ری اکت ReactJS ،  ', author: 'محمد امین', courseTime: '18:17', courseStar: '4.5', coursePrice: '2,700,000', customers: '1020', courseCat: ['فرانت اند'], imgSrc: './src/img/courses/react.png' },
    { id: 3, tittle: 'آموزش الگوریتم و  داده به زبان ساده ', desc: 'الگوریتم، یک مهارت ضروری برای ورود به دنیای برنامه نویسیه که دیدگاه شما رو به مسائل  ', author: ' رضا دولتی', courseTime: '24:52', courseStar: '3.8', coursePrice: '1,500,000', customers: '2536', courseCat: [' ارتقای مهارت ها '], imgSrc: './src/img/courses/alghoritm.webp' },
    { id: 4, tittle: 'مینی پروژه های تخصصی با Html، Css + دیزاین اختصاصی ', desc: 'عنوان دوره گویای همه چی هست اما نیازه برخی موارد گفته بشه تا بتونید با دید بهتری تو این  ', author: ' حمید عبادی', courseTime: '4:39', courseStar: '4.0', coursePrice: '3,500,000', customers: '8425', courseCat: ['فرانت اند'], imgSrc: './src/img/courses/css.jpg' },

    { id: 5, tittle: 'Clean Code برای برنامه نویسان  ', desc: 'فرق بین یه برنامه‌نویس تازه‌کار و حرفه‌ای نوع دیدگاه و طرز کدنویسیشونه. برنامه‌نویس  ', author: ' محمد ظهیری', courseTime: '10:17', courseStar: '2.7', coursePrice: '500,000', customers: '1000', courseCat: [' ارتقای مهارت ها '], imgSrc: './src/img/courses/code.jpg' },
    { id: 6, tittle: 'زیر و بَم و منطق دیپلوی برای برنامه نویسان JS ', desc: 'تو هر فیلدی فعالیت بکنی برای پرزنت خودت تو بازار کار و نمایش نمونه کارات نیاز به دپلوی  ', author: ' حامد ادهم', courseTime: '99:99', courseStar: '1.0', coursePrice: '7,750,000', customers: '2001', courseCat: [' ارتقای مهارت ها '], imgSrc: './src/img/courses/js.jpg' },
    { id: 7, tittle: 'آموزش ساخت ربات تلگرام با PHP ', desc: 'توی دوره فوق‌العاده جذاب و کاربردی "ربات تلگرام با PHP"، به دنیای عجیب و جذاب ربات نویسی  ', author: 'معین فرجی', courseTime: '45:17', courseStar: '3.5', coursePrice: '4,500,000', customers: '3101', courseCat: ['بک اند ', 'پی چی پی'], imgSrc: './src/img/courses/php.jpg' },
    { id: 8, tittle: 'آموزش بوت استرپ 5 مقدماتی تا پیشرفته (2023) ', desc: 'آموزش bootstrap 5 خوش اومدین به آموزش بوت استرپ 5 سبزلرن! حتما تا الان html و css ', author: ' مهرشاد براتی', courseTime: '23:41', courseStar: '4.2', coursePrice: '1,250,000', customers: '3056', courseCat: ['فرانت اند'], imgSrc: './src/img/courses/bootstrap.jpg' },

    { id: 9, tittle: 'دوره پروژه محور متخصص جنگو ', desc: 'از ویژگی های مهم این دوره میتونیم به توضیح کامل مفاهیم پایه و ساختاری، کامل بودن و  ', author: ' رضا دولتی', courseTime: '45:20', courseStar: '3.9', coursePrice: '500,000', customers: '2026', courseCat: ['بک اند ', 'پایتون'], imgSrc: './src/img/courses/django.png' },
    { id: 10, tittle: 'آموزش حرفه ای NodeJS بدون پیش نیاز ', desc: 'الان و امروز کمتر کسی هست که از بازار کار داغ نود جی اس با خبر نباشه و یکی از…      ', author: ' یگانه جعفری', courseTime: '12:00', courseStar: '5.0', coursePrice: '9,900,000', customers: '9999', courseCat: ['بک اند '], imgSrc: './src/img/courses/node.jpg' },
    { id: 11, tittle: 'آموزش git و github ', desc: 'گیت یه Version Controller هست که نسخه های مختلف پروژه هامون رو مدیریت و نگهداری  ', author: 'احسان عراقی', courseTime: '29:27', courseStar: '2.8', coursePrice: '2,250,000', customers: '6500', courseCat: [' ارتقای مهارت ها '], imgSrc: './src/img/courses/git.jpg' },
    { id: 12, tittle: 'پروژه های کاربردی با پایتون', desc: 'قبل از اینکه بخواین این دوره رو ببینید اگر دوره آموزش پایتون رو ندیدین حتما دوره رو ببینید  ', author: ' محمد واحدی', courseTime: '8:00', courseStar: '4.0', coursePrice: '2,500,000', customers: '4000', courseCat: [' پایتون '], imgSrc: './src/img/courses/python.png' },

];

let itemListContainer = document.querySelector('#list')
let paginationContainer = document.querySelector('#pagination')

let currentPage = 1
let rowsCount = 3

function displayUesrsList(allUesrsArray, usersContainer, rowsCount, currentPage) {
    usersContainer.innerHTML = ''

    let endIndex = rowsCount * currentPage
    let startIndex = endIndex - rowsCount

    let paginatedItems = allUesrsArray.slice(startIndex, endIndex)

    paginatedItems.forEach(function (e) {
        // item
        let itemCard = document.createElement('div');
        itemCard.classList.add('item-card')
        
        let cardImg = document.createElement('img');
        cardImg.classList.add('item-img')
        cardImg.src = e.imgSrc;
        itemCard.appendChild(cardImg)
        
        // card body
        let cardBody = document.createElement('div');
        cardBody.classList.add('card-body')
        
        let cardCatWrapper = document.createElement('div');
        cardCatWrapper.classList.add('card-cat-wrapper')
       
        for( i= 0 ; i < e.courseCat.length ; i++ ){
            let cardCat = document.createElement('span');
            cardCat.classList.add('card-cat')
            cardCat.innerHTML = e.courseCat[i];
            cardCatWrapper.appendChild(cardCat)
        }
     
        
        let cardTittle = document.createElement('h3');
        cardTittle.classList.add('card-tittle')
        cardTittle.innerHTML = e.tittle
        
        
        let cardDesc = document.createElement('p');
        cardDesc.classList.add('card-desc')
        cardDesc.innerHTML = e.desc

        // extra details
        let cardExtraDetails = document.createElement('div');
        cardExtraDetails.classList.add('card-extra-details')
            // star section
            let starSectionWrapper = document.createElement('div');
            starSectionWrapper.classList.add('star-section-wrapper')
            let iStar = document.createElement('i');
            iStar.classList.add('fa-solid')
            iStar.classList.add('fa-star')
            let starCount = document.createElement('span');
            starCount.classList.add('star-count')
            starCount.innerHTML = e.courseStar
            starSectionWrapper.appendChild(iStar)
            starSectionWrapper.appendChild(starCount)
            // clock section
            let clockSectionWrapper = document.createElement('div');
            clockSectionWrapper.classList.add('clock-section-wrapper')
            let iClock = document.createElement('i');
            iClock.classList.add('fa-regular')
            iClock.classList.add('fa-clock')
            let clockTime = document.createElement('span');
            clockTime.classList.add('clock-time')
            clockTime.innerHTML = e.courseTime
            clockSectionWrapper.appendChild(clockTime)
            clockSectionWrapper.appendChild(iClock)
            //author section
            let authorSectionWrapper = document.createElement('div');
            authorSectionWrapper.classList.add('author-section-wrapper')
            let iAuthor = document.createElement('i');
            iAuthor.classList.add('fa-solid')
            iAuthor.classList.add('fa-user')
            let authorName = document.createElement('span');
            authorName.classList.add('author-name')
            authorName.innerHTML = e.author
            authorSectionWrapper.appendChild(authorName)
            authorSectionWrapper.appendChild(iAuthor)
        // en of extra details

        let hrElem = document.createElement('hr')

        // footer
        let cardFooter = document.createElement('div');
        cardFooter.classList.add('card-footer')

            // price
            let coursePriceWrapper = document.createElement('div');
            coursePriceWrapper.classList.add('course-price-wrapper')
            let coursePrice = document.createElement('span');
            coursePrice.classList.add('course-price')
            coursePrice.innerHTML = e.coursePrice
            let coursePriceElem = document.createElement('span');
            coursePriceElem.innerHTML = 'تومان'
            coursePriceWrapper.appendChild(coursePrice)
            coursePriceWrapper.appendChild(coursePriceElem)
            // users
            let usersCounterWrapper = document.createElement('div');
            usersCounterWrapper.classList.add('users-counter-wrapper')
            let usersCounter = document.createElement('span');
            usersCounter.classList.add('users-counter')
            usersCounter.innerHTML = e.customers
            let iUsers = document.createElement('i');
            iUsers.classList.add('fa-regular')
            iUsers.classList.add('fa-clock')
            usersCounterWrapper.appendChild(usersCounter)
            usersCounterWrapper.appendChild(iUsers)
        // end footer

        itemCard.appendChild(cardBody)
        cardBody.appendChild(cardCatWrapper)
        cardBody.appendChild(cardTittle)
        cardBody.appendChild(cardDesc)
        cardBody.appendChild(cardExtraDetails)
        cardExtraDetails.appendChild(starSectionWrapper)
        cardExtraDetails.appendChild(clockSectionWrapper)
        cardExtraDetails.appendChild(authorSectionWrapper)
        cardBody.appendChild(hrElem)
        cardBody.appendChild(cardFooter)
        cardFooter.appendChild(coursePriceWrapper)
        cardFooter.appendChild(usersCounterWrapper)
        coursePriceWrapper.appendChild(coursePrice)
        coursePriceWrapper.appendChild(coursePriceElem)



        usersContainer.appendChild(itemCard)
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