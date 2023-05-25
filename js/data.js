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
                type: 'tb',
                description: 'Maximum configurable storage'
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
                type: 'tb',
                description: 'Maximum configurable storage'
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
                type: 'tb',
                description: ""
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
    let first = document.createElement("div")
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

    first.style.backgroundImage = `url("./img/${el.img}")`

    second.classList.add("second")
    second.classList.add("row")
    second_p.classList.add("price")
    buy.classList.add("buy")

    buy.innerHTML = "Buy"
    second_h3.innerHTML = el.title
    second_p.innerHTML = "from $ "
    second_span.innerHTML = el.price
    second_a.href = el.url

    let main = document.createElement("div")

    let display = document.createElement("div")
    let display_title = document.createElement("p")
    let display_span = document.createElement("span")
    let display_descr = document.createElement("p")

    let chip = document.createElement("div")
    let chip_img = document.createElement("img")
    let chip_title = document.createElement("p")
    let chip_descr = document.createElement("p")

    let ram = document.createElement("div")
    let ram_img = document.createElement("img")
    let ram_title = document.createElement("p")
    let ram_descr = document.createElement("p")

    let memory = document.createElement("div")
    let memory_title = document.createElement("p")
    let memory_descr = document.createElement("p")

    let battery = document.createElement("div")
    let battery_img = document.createElement("img")
    let battery_title = document.createElement("p")

    let camera = document.createElement("div")
    let camera_img = document.createElement("img")
    let camera_title = document.createElement("p")
    let camera_descr = document.createElement("p")

    let weight = document.createElement("div")
    let weight_title = document.createElement("p")
    let weight_descr = document.createElement("p")

    let other = document.createElement("div")
    let other_icons = document.createElement("div")
    let other_title = document.createElement("p")
    let icons = {
        'Touch Bar': "./img/icons/brightness.svg",
        'Sound': "./img/icons/volume.svg",
        'Touch ID': "./img/icons/touch_id.svg"
    }

    for (let icon of el.specs.other) {
        other_title.dataset.icon = el.specs.other[el.specs.other.indexOf(icon)]

        let key = other_title.getAttribute("data-icon")
        let other_img = document.createElement("img")
        other_img.src = icons[key]

        other_icons.append(other_img)

        other_img.style.width = "48px"
        other_img.style.height = "44px"
        if (el.specs.other.length !== 1) {
            other_img.classList.add("patterns")

            console.log(el.specs.other.length);
        }

    }
    let link = document.createElement("div")
    let more = document.createElement("a")

    main.classList.add("main")
    main.classList.add("row")

    display.classList.add("item")
    display.classList.add("row")
    other_icons.classList.add("icons")

    display_title.innerHTML = `"`
    display_title.style.fontWeight = `600`
    display_title.style.fontSize = `26px`
    display_span.innerHTML = el.specs.display.size
    display_descr.innerHTML = el.specs.display.title

    chip.classList.add("item")
    chip.classList.add("row")

    chip_img.src = el.specs.chip.title.includes("M1") ? "./img/m1.png" : "./img/intel.png"
    chip_title.innerHTML = el.specs.chip.title
    chip_descr.innerHTML = el.specs.chip.description
    chip.style.justifyContent = "start"


    ram.classList.add("item")
    ram.classList.add("row")

    ram_img.src = el.specs.ram.title.includes("16GB") ? "./img/memory.png" : "./img/memory2.png"
    ram_title.innerHTML = el.specs.ram.title
    ram_descr.innerHTML = el.specs.ram.description
    ram.style.justifyContent = "start"
    
    memory.classList.add("item")
    memory.classList.add("row")
    
    memory_title.innerHTML = el.specs.memory.size + el.specs.memory.type.toUpperCase()
    memory_descr.innerHTML = el.specs.memory.description
    memory_title.style.fontWeight = `600`
    memory_title.style.fontSize = `26px`
    memory.style.justifyContent = "start"
    
    battery.classList.add("item")
    battery.classList.add("row")
    
    battery_img.src = "./img/battery.png"
    battery_title.innerHTML = `Up to ${el.specs.battery} hours battery life`
    
    camera.classList.add("item")
    camera.classList.add("row")
    
    camera_img.src = "./img/video.png"
    camera_title.innerHTML = el.specs.camera.title
    camera_descr.innerHTML = el.specs.camera.description
    camera.style.justifyContent = "start"

    weight.classList.add("item")
    weight.classList.add("row")

    weight_title.innerHTML = el.specs.weight + 'Ib.'
    weight_descr.innerHTML = "Weight"

    weight_title.style.fontWeight = `600`
    weight_title.style.fontSize = `26px`


    other.classList.add("item")
    other.classList.add("row")

    other_title.innerHTML = el.specs.other.length === 1 ? el.specs.other[0] : el.specs.other[0] + " and " + el.specs.other[2]


    link.classList.add("link")
    more.innerHTML = "Learn more >"
    more.href = "#"

    column.append(top, main)
    top.append(first, second)
    // first.append(firstImg)
    second.append(second_h3, second_p, btns, second_a)
    second_p.append(second_span)
    second_a.append(buy)

    main.append(display, chip, ram, memory, battery, camera, weight, other, link)

    display.append(display_title, display_descr)
    display_title.prepend(display_span)

    chip.append(chip_img, chip_title, chip_descr)

    ram.append(ram_img, ram_title, ram_descr)

    chip.append(chip_img, chip_title, chip_descr)

    memory.append(memory_title, memory_descr)

    battery.append(battery_img, battery_title)

    camera.append(camera_img, camera_title, camera_descr)

    weight.append(weight_title, weight_descr)

    other.append(other_icons, other_title)

    link.append(more)


    wrapper.append(column)

}