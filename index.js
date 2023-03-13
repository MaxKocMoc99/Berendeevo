let offset = 0 // смещение от левого края
if (document.documentElement.clientWidth < 767) {
    const sliderItems= document.querySelectorAll('.slider__item-adaptive')
    sliderItems.forEach(sliderItem  => sliderItem.insertAdjacentHTML('beforeend', `<div class="adaptive__slider">
    <button class="prev-adaptive"><svg xmlns="http://www.w3.org/2000/svg" width="61" height="11" viewBox="0 0 61 11">
    <path id="left_scroll" data-name="left scroll" d="M0,5l4.95,5L0,5,4.95,0ZM.5,5h0Z" transform="translate(0.5 0.5)" fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
  </svg>
  
        <div class="scroll-adaptive"></div>
    </button>
    <button class="next-adaptive"><svg xmlns="http://www.w3.org/2000/svg" width="61" height="11" viewBox="0 0 61 11">
    <path id="right_scroll" data-name="right scroll" d="M0,5,4.95,0,0,5l4.95,5ZM.5,5h0Z" transform="translate(60.5 10.5) rotate(180)" fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
  </svg>
    <div class="scroll-adaptive"></div>
    </button>
    </div>`))
    const leisureSliderArrow = document.querySelector('.slider__slider__leisure__img')
    const leisureSliderButton = document.querySelector('.scroll-3')
    
    leisureSliderArrow.style.opacity = 1
    leisureSliderButton.style.opacity = 1

    const anotherTexts = document.querySelectorAll('.anothertext')
    const adaptiveDescriptionText = document.querySelector('.description__adpative')
    adaptiveDescriptionText.insertAdjacentHTML('afterend', `
    <div class="description__block__text description__adpative">
   <div>Дремучий хвойный лес, чистота воздуха</div> 
   <div> и воды помогут вам за несколько дней </div> 
   <div> получить заряд энергии и отдохнуть </div> 
   <div> от городской суеты.</div> 
   <div>Ваш организм обогатится всеми </div> 
   <div> полезными элементами, которые даёт</div> 
   <div>  хвойный лес.</div> </div>
</div>`)
    adaptiveDescriptionText.style.display = 'none'
anotherTexts[0].textContent = 'Рыбалка — это зачастую способ отвлечения от повседневной жизни, возможность вырваться от рутины.'
anotherTexts[1].textContent = 'Занятия спортом — это неотъемлемая часть жизни человека. Вы можете поиграть в волейбол, теннис и пострелять из лука.'
}

class Slider{
    constructor(selector, prev, next, items, offset) {
        this.offset = offset
        this.$el = document.querySelector(selector)
        this.width = document.querySelector(selector).offsetWidth
        this.$next = document.querySelector(next)
        this.$prev = document.querySelector(prev)
        this.$items = document.querySelectorAll(items)
        this.offsetNumber = this.width / this.$items.length
    }
    main(){
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

class adaptiveSlider extends Slider{
    constructor(selector, prev, next, items, offset) {
       super(selector, prev, next, items, offset)
        this.$next = document.querySelectorAll(next)
        this.$prev = document.querySelectorAll(prev)
    }
    main(){
        this.neededOffset = this.width - this.offsetNumber
        this.$next.forEach(next => next.addEventListener('click', () => {
        this.offset += this.offsetNumber
        if (this.offset > this.neededOffset) {
            this.offset = 0
        }
       this.$el.style.left = -this.offset + 'px'
    }))
       this.$prev.forEach(prev => prev.addEventListener('click', () => {
        this.offset -= this.offsetNumber
        if (this.offset < 0) {
            this.offset = this.neededOffset
        }
           this.$el.style.left = -this.offset + 'px'
    })  )
    }
}

class lesSlider extends Slider{
    constructor(selector, prev, next, items, offset) {
        super(selector, prev, next, items, offset)
    }
    main(){
        this.$next.addEventListener('click', () => {
        this.offset += 518
        if (this.offset > 518) {
            this.offset = 0
        }
            this.$el.style.left = -this.offset + 'px'
    })
        this.$prev.addEventListener('click', () => {
            this.offset -= 518
        if (this.offset < 0) {
            this.offset = 518
        }
           this.$el.style.left = -this.offset + 'px'
    })  
    }
}

const mainSlider = new Slider('.slider__line', '.prev', '.next', '.slider__item', offset)
mainSlider.main()
const mainSliderAdaptive = new adaptiveSlider('.slider__line', '.prev-adaptive', '.next-adaptive', '.slider__item-adaptive', offset)
mainSliderAdaptive.main()
const restaurantSlider = new Slider('.slider__line-second', '.prev-second', '.next-second', '.restaurant__slider__item', offset)
restaurantSlider.main()

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
const bookIzbas = document.querySelectorAll('.location__main__item__text__buttons__book')
for (izba of bookIzbas) { 
    izba.addEventListener('click', (event) => {
        if (event.target.closest('.location__main__item')) {
            event.target.closest('.location__main__item').style.display = 'none'
         event.target.closest('.location__main__item').nextElementSibling.style.display = 'flex'
            wrapper.style.filter = 'brightness(80%)'
            wrapper.style.backgroundColor = 'rgba(0, 0, 0, 0.2)'
       }
    })
}

const jesuses = document.querySelectorAll('.jesus-jesus')
for (j of jesuses) { 
    j.addEventListener('click', (event) => {
        if (event.target.closest('.location__main__item__popup')) {
            event.target.closest('.location__main__item__popup').style.display = 'none'
         event.target.closest('.location__main__item__popup').previousElementSibling.style.display = 'flex'
         wrapper.style.filter = 'none'
            wrapper.style.backgroundColor = 'white'
       }
    })
}

class locationForm {
    constructor(buttons, wrapper) {
        this.buttons = document.querySelectorAll(buttons)
        this.wrapper = document.querySelector(wrapper)
    }
    main() {
        for (this.button of this.buttons) {
            this.button.addEventListener('click', (event) => {
                if (event.target.closest('.location__main__item__popup__container')) {
                    const neededArray = event.target.previousElementSibling.querySelectorAll('.location__main__item__popup__container__input')
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
                            event.target.closest('.location__main__item__popup__container').style.display = 'none'
                            event.target.closest('.location__main__item__popup__container').nextElementSibling.nextElementSibling.style.display = 'block'
                            this.wrapper.style.filter = 'none'
                            this.wrapper.style.backgroundColor = 'white'
                         }, 2000)
                }
                }
})
            }
        }
}
    
class popupForm extends locationForm{
    constructor(buttons, wrapper) {
        super(buttons, wrapper)
        this.buttons = document.querySelector(buttons)
    }
    main() {
        this.buttons.addEventListener('click', (event) => {
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
        this.buttons.addEventListener('click', (event) => {
            console.log(this.buttons)
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

const locationFormPopup = new locationForm('.location__main__item__popup__container__button', '.wrapper')
locationFormPopup.main()

const popupFormPopup = new popupForm('.popup__container__button', '.wrapper')
popupFormPopup.main()

const popupFormForm = new formForm('.form__form__button', '.wrapper')
popupFormForm.main()

const scrollUp = document.getElementById('footer__main__item__square')

scrollUp.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
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

const bookHeader = document.querySelector('.header__button')
const popup = document.querySelector('.popup')

bookHeader.addEventListener('click', () => {
    popup.style.display = 'flex'
    wrapper.style.filter = 'brightness(80%)'
    wrapper.style.backgroundColor = 'rgba(0, 0, 0, 0.2)'
})

const jesus = document.getElementById('jesus-header')

jesus.addEventListener('click', () => {
    popup.style.display = 'none'
    wrapper.style.filter = 'none'
    wrapper.style.backgroundColor = 'white'
})
const leisureSlider = new lesSlider('.leisure__slider__line-third', '.next-3', '.prev-3', '.leisure__slider__item', offset)
leisureSlider.main()

const keyupInputs = document.querySelectorAll('.keyup-input')

keyupInputs.forEach(input => {
    input.addEventListener('keyup', () => {
        input.classList.add('keyup-popup')
    })
})