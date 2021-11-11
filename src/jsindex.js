function Movie(title, description, rate, img) {
    this.title = title;
    this.description = description;
    this.rate = rate;
    this.img = img;
}

const moviesInfo = [];
moviesInfo.push(new Movie('avengers', 'SUN 8 SEPT-10:00PM', '9/2', 'res/Images/avengers.png'))
moviesInfo.push(new Movie('hobbs & Shaw', 'SUN 8 SEPT-10:00PM', "7/7", 'res/Images/hobbs.jpg'))
moviesInfo.push(new Movie('john Wick 3', 'SUN 8 SEPT-10:00PM', "9/7", 'res/Images/john.jpg'))
moviesInfo.push(new Movie('deadpool 2', 'SUN 8 SEPT-10:00PM', "8/9", 'res/Images/dead.jpg'))
moviesInfo.push(new Movie('the Lion King', 'SUN 8 SEPT-10:00PM', "8/5", 'res/Images/lion.jpg'))
moviesInfo.push(new Movie('mad Max:Fur Road', 'SUN 8 SEPT-10:00PM', "8/7", 'res/Images/mad.jpg'))
moviesInfo.push(new Movie('aquaman', 'MON 8 SEPT-10:00PM', "8/4", 'res/Images/aqua.jpg'))
moviesInfo.push(new Movie('mission Impossible', 'SUN 8 SEPT-10:00PM', "8/3", 'res/Images/mission.jpg'))


const cardView = (cardInfo) => {
    return `
<div  class="card" style="width: 18rem;">
    <div>
        <img alt=${cardInfo.title} class="photo" src=${cardInfo.img}/>
        <svg class="play-btn" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="30" height="30"
viewBox="0 0 172 172"
style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none"  font-size="none"  style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#cccccc"><path d="M34.4,17.2c-3.16643,0 -5.73333,2.5669 -5.73333,5.73333c-0.00001,0.00747 -0.00001,0.01493 0,0.0224v63.04427v63.04427c-0.00001,0.00746 -0.00001,0.01493 0,0.02239c0,3.16643 2.5669,5.73333 5.73333,5.73333c1.19346,-0.00345 2.3561,-0.37925 3.32578,-1.075l0.0112,0.0112l113.71485,-62.52917c2.03773,-0.93223 3.34559,-2.96619 3.34817,-5.20703c0.00115,-2.30642 -1.37987,-4.38898 -3.50495,-5.28542l-113.55807,-62.45078h-0.0112c-0.97102,-0.69177 -2.13354,-1.06362 -3.32578,-1.0638z"></path></g></g></svg>
    </div>
    <div>
        <h3 class="title">
            ${cardInfo.title}
        </h3>
        <h5 class="rate">
            ${cardInfo.rate}
        </h5>
        <h4 class="dec">
            ${cardInfo.description}
        </h4>
    </div>
</div>
`
}

const generateCards = (cardInfoList) => {
    return cardInfoList.map(cardInfo => {
        return cardView(cardInfo)
    })
        .join(' ');
}

const cardContainer = document.getElementById("cardContainer");
cardContainer.innerHTML = generateCards(moviesInfo)


function onSearch(element) {
    const searchTerm = element.value;
    const filteredCards = moviesInfo.filter(card => {
        return card.title.includes(searchTerm) || card.description.includes(searchTerm)
    })

    cardContainer.innerHTML = generateCards(filteredCards)
}


