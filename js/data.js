const data = [
    {
        title: 'MacBook Air',
        img: 'macbookair.png',
        price: 999,
        url: 'https://www.apple.com/shop/buy-mac/macbook-air',
        colors: ['#C7C8CA', '#B1B2B7', '#E3CCB4'],
        specs: {
            display: {
                title: 'Retina display',
                size: 13.3
            },
            chip: {
                title: 'Apple M1 chip',
                description: ''
            },
            ram: {
                title: 'Up to 16GB unified memory',
                description: 'For increased performance and power efficiency'
            },
            memory: {
                size: 2,
                type: 'tb'
            },
            battery: 18,
            camera: {
                title: '720p FaceTime HD camera',
                description: 'With the image signal processor of M1 for drastically improved performance'
            },
            weight: 2.8,
            other: [
                'Touch ID'
            ]
        }
    },
    {
        title: 'MacBook Pro 13”',
        img: 'macbook13.png',
        price: 1299,
        url: 'https://www.apple.com/shop/buy-mac/macbook-pro/13-inch',
        colors: ['#C7C8CA', '#B1B2B7'],
        specs: {
            display: {
                title: 'Retina display',
                size: 13.3
            },
            chip: {
                title: 'Apple M1 chip',
                description: 'Also available with Intel Core i5 or i7 processor'
            },
            ram: {
                title: 'Up to 16GB unified memory',
                description: 'For increased performance and power efficiency'
            },
            memory: {
                size: 2,
                type: 'tb'
            },
            battery: 20,
            camera: {
                title: '720p FaceTime HD camera',
                description: 'With the image signal processor of M1 for drastically improved performance'
            },
            weight: 3.0,
            other: [
                'Touch Bar',
                'Sound',
                'Touch ID'
            ]
        }
    },
    {
        title: 'MacBook Air',
        img: 'macbookpro.png',
        price: 999,
        url: 'https://www.apple.com/shop/buy-mac/macbook-pro/16-inch',
        colors: ['#C7C8CA', '#B1B2B7'],
        specs: {
            display: {
                title: 'Retina display',
                size: 16
            },
            chip: {
                title: 'Up to Intel Core i9 processor',
                description: ''
            },
            ram: {
                title: 'Up to 64GB memory',
                description: ''
            },
            memory: {
                size: 8,
                type: 'tb'
            },
            battery: 11,
            camera: {
                title: '720p FaceTime HD camera',
                description: ''
            },
            weight: 4.3,
            other: [
                'Touch Bar',
                'Sound',
                'Touch ID'
            ]
        }
    },
]

let wrapper = document.querySelector(".wrapper")

for (el of data) {
    let column = document.createElement("div")
    let top = document.createElement("div")
    let first = document.createElement("diм")
    // let firstImg = document.createElement("img")
    let second = document.createElement("div")
    let second_h3 = document.createElement("h3")
    let second_p = document.createElement("p")
    let second_span = document.createElement("span")
    let btns = document.createElement("div")
    let images = {
        '#C7C8CA': "./img/macbookpro.png",
        '#B1B2B7': "./img/macbook13.png",
        '#E3CCB4': "./img/macbookair.png"
    }
    for (let item of el.colors) {
        let btn = document.createElement("button")
        btn.style.background = item
        btn.dataset.color = item
        btns.append(btn)
        console.log(btn);
        let key = btn.getAttribute("data-color")
        btn.onclick = () => {
            first.style.backgroundImage = `url(${images[key]})`
        }
    }
    let second_a = document.createElement("a")
    let buy = document.createElement("button")

    column.classList.add("column")
    column.classList.add("row")
    top.classList.add("top")
    top.classList.add("row")
    first.classList.add("first")
    btns.classList.add("btns")

    first.style.backgroundImage = `url("./img/${el.img}~")`

    second.classList.add("second")
    second.classList.add("row")
    second_p.classList.add("price")
    buy.classList.add("buy")

    buy.innerHTML = "Buy"
    second_h3.innerHTML = el.title
    second_p.innerHTML = "from $ "
    second_span.innerHTML = el.price
    second_a.href = el.url

    column.append(top)
    top.append(first, second)
    // first.append(firstImg)
    second.append(second_h3, second_p, btns, second_a)
    second_p.append(second_span)
    second_a.append(buy)

    wrapper.append(column)

}