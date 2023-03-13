const menuOpen = document.querySelector('.menu__menu__btn')
const menuClose = document.querySelector('.menu__menu__btn-close')
const navbar = document.querySelector('.navbar')
const wrapper = document.querySelector('.wrapper')

menuOpen.addEventListener('click', () => {
    wrapper.style.filter = 'brightness(80%)'
    wrapper.style.backgroundColor = 'rgba(0, 0, 0, 0.2)'
    navbar.style.display = 'block'
})

menuClose.addEventListener('click', () => {
    navbar.style.display = 'none'
    wrapper.style.filter = 'none'
    wrapper.style.backgroundColor = 'white'
})

const scrollUp = document.getElementById('footer__main__item__square')

scrollUp.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
})

const bookHeader = document.querySelector('.header__button')
const popup = document.querySelector('.popup')
const popupButton = document.querySelector('.popup__container__button')

bookHeader.addEventListener('click', () => {
    popup.style.display = 'flex'
    wrapper.style.filter = 'brightness(80%)'
    wrapper.style.backgroundColor = 'rgba(0, 0, 0, 0.2)'
})

const jesus = document.querySelector('.jesus')

jesus.addEventListener('click', () => {
    popup.style.display = 'none'
    wrapper.style.filter = 'none'
    wrapper.style.backgroundColor = 'white'
})

let offset = 0 // смещение от левого края
class Slider{
    constructor(selector, next, prev, items, offset) {
        this.offset = offset
        this.$el = document.querySelector(selector)
        this.width = document.querySelector(selector).offsetWidth
        this.$next = document.querySelector(next)
        this.$prev = document.querySelector(prev)
        this.$items = document.querySelectorAll(items)
        this.offsetNumber = this.width / this.$items.length
        this.neededOffset = this.width - this.offsetNumber
        
        this.$next.addEventListener('click', () => {
            this.offset += this.offsetNumber
            if (this.offset > this.neededOffset) {
                this.offset = 0
            }
           this.$el.style.left = -this.offset + 'px'
        })
        this.$prev.addEventListener('click', () => {
            this.offset -= this.offsetNumber
            if (this.offset < 0) {
                this.offset = this.neededOffset
            }
            this.$el.style.left = -this.offset + 'px'
        })
    }
}
const slider1 = new Slider('.leisure__main__item__img__line', '.next', '.prev', '.slider__item-1', offset)
const slider2 = new Slider('.leisure__main__item__img__line-2', '.next-2', '.prev-2', '.slider__item-2', offset)
const slider3 = new Slider('.leisure__main__item__img__line-3', '.next-3', '.prev-3', '.slider__item-3', offset)
const slider4 = new Slider('.leisure__main__item__img__line-4', '.next-4', '.prev-4', '.slider__item-4', offset)
const slider5 = new Slider('.leisure__main__item__img__line-5', '.next-5', '.prev-5', '.slider__item-5', offset)
const slider6 = new Slider('.leisure__main__item__img__line-6', '.next-6', '.prev-6', '.slider__item-6', offset)
const slider7 = new Slider('.leisure__main__item__img__line-7', '.next-7', '.prev-7', '.slider__item-7', offset)

class popupForm{
    constructor(button, wrapper) {
        this.button = document.querySelector(button)
        this.wrapper = document.querySelector(wrapper)
    }
    main() {
        this.button.addEventListener('click', (event) => {
            if (event.target.closest('.popup__container')) {
                const neededArray = event.target.previousElementSibling.querySelectorAll('.popup__container__input')
                neededArray.forEach((input) => {
                    if (input.value.length) {
                        input.classList.add('greenbird')
                        input.classList.remove('redjesus')
                        input.nextElementSibling.style.display = 'none'
                    }
                    else {
                        input.classList.remove('greenbird')
                        input.classList.add('redjesus')
                        input.nextElementSibling.style.display = 'block'
                    }
                })
                if (neededArray[0].value.length && neededArray[1].value.length && neededArray[2].value.length) {
                    event.target.style.color = '#333333'
                    event.target.style.backgroundColor = 'white'
                    window.setTimeout(() => {
                        event.target.closest('.popup__container').style.display = 'none'
                        event.target.closest('.popup__container').nextElementSibling.style.display = 'block'
                        this.wrapper.style.filter = 'none'
                        this.wrapper.style.backgroundColor = 'white'
                     }, 2000)
            }
            }
})
    }
}

class formForm extends popupForm{
    main() {
        this.button.addEventListener('click', (event) => {
            if (event.target.closest('.form')) {
                const neededArray = event.target.previousElementSibling.querySelectorAll('.form__form__input')
                neededArray.forEach((input) => {
                    if (input.value.length) {
                        input.classList.add('greenbird')
                        input.classList.remove('redjesus')
                        input.nextElementSibling.style.display = 'none'
                    }
                    else {
                        input.classList.remove('greenbird')
                        input.classList.add('redjesus')
                        input.nextElementSibling.style.display = 'block'
                    }
                })
                if (neededArray[0].value.length && neededArray[1].value.length && neededArray[2].value.length) {
                    event.target.style.opacity = 1
                    window.setTimeout(() => {
                        event.target.closest('.form').nextElementSibling.style.display = 'block'
                     }, 2000)
            }
            }
})
    }
}

const popupFormForm = new formForm('.form__form__button', '.wrapper')
popupFormForm.main()

const popupFormPopup = new popupForm('.popup__container__button', '.wrapper')
popupFormPopup.main()

const popupInputs = document.querySelectorAll('.popup__container__input')
popupInputs.forEach(input => {
    input.addEventListener('keyup', () => {
        input.classList.add('keyup-popup')
    })
}) 

const instLogo = document.querySelector('.footer__main__item__square')
const whiteInstLogo = document.querySelector('.inst')

instLogo.addEventListener('mouseover', () => {
    whiteInstLogo.style.fill = "white"
})

instLogo.addEventListener('mouseout', () => {
    whiteInstLogo.style.fill = "#333"
})

const vkLogo = document.querySelector('.footer__main__item__square-vk')
const whiteVkLogo = document.querySelector('.vk')

vkLogo.addEventListener('mouseover', () => {
    whiteVkLogo.style.fill = "white"
})

vkLogo.addEventListener('mouseout', () => {
    whiteVkLogo.style.fill = "#333"
})

if (document.documentElement.clientWidth < 767) {
    const anotherTexts = document.querySelectorAll('.anothertext')
anotherTexts[0].textContent = 'Рыбалка — это зачастую способ отвлечения от повседневной жизни, возможность вырваться от рутины.'
    anotherTexts[1].textContent = 'Занятия спортом — это неотъемлемая часть жизни человека. Вы можете поиграть в волейбол, теннис и пострелять из лука.'
    anotherTexts[3].textContent = 'Просторный зал ресторана позволяет проводить различные торжества: юбилеи, дни рождения, банкеты, свадьбы, а также конференции, семинары и праздники. Вместимость – 60 посадочных мест.'
    anotherTexts[2].insertAdjacentHTML('afterend', `
    <div class="leisure__main__item__text__text leisure__main__item__text__text-4 anothertext"}>
   <div>Озеро Ужин тектонического происхождения</div> 
   <div>с глубиной более 85 метров. Здесь можно</div> 
   <div>загорать, купаться, кататься на лодке,</div> 
   <div>катамаране или на Sup-доске.</div> 
    </div>`)
    anotherTexts[2].style.display = 'none'
}