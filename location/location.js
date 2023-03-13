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


const sliders = document.querySelectorAll('.slider__slider')

const bookIzbas = document.querySelectorAll('.location__main__item__text__buttons__book')
for (izba of bookIzbas) { 
    izba.addEventListener('click', (event) => {
        if (event.target.closest('.location__main__item')) {
            event.target.closest('.location__main__item').style.display = 'none'
            event.target.closest('.location__main__item').nextElementSibling.nextElementSibling.style.display = 'flex'
            event.target.closest('.location__main__item').nextElementSibling.style.display = 'none'
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
            event.target.closest('.location__main__item__popup').previousElementSibling.previousElementSibling.style.display = 'flex'
         wrapper.style.filter = 'none'
            wrapper.style.backgroundColor = 'white'
       }
    })
}

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

const bookHeader = document.querySelector('.header__button')
const popup = document.querySelector('.popup')

bookHeader.addEventListener('click', () => {
    popup.style.display = 'flex'
    wrapper.style.filter = 'brightness(80%)'
    wrapper.style.backgroundColor = 'rgba(0, 0, 0, 0.2)'
})

const keyupInputs = document.querySelectorAll('.keyup-input')

keyupInputs.forEach(input => {
    input.addEventListener('keyup', () => {
        input.classList.add('keyup-popup')
    })
}) 

const jesus = document.getElementById('jesus-header')

jesus.addEventListener('click', () => {
    popup.style.display = 'none'
    wrapper.style.filter = 'none'
    wrapper.style.backgroundColor = 'white'
})

let offset = 0 // смещение от левого края
const nextButton = document.querySelectorAll('.next')
const prevButton = document.querySelectorAll('.prev')

nextButton.forEach(next => { 
    next.addEventListener('click', (event) => {
        if (event.target.closest('.slider__slider')) {
          const sliderLine = event.target.closest('.slider__slider').previousElementSibling.querySelector('.location__main__item__img__line')
            offset += 259
            if (offset > 259) {
                offset = 0
            }
            sliderLine.style.left = -offset + 'px'
        }
    })
})


prevButton.forEach(prev => { 
    prev.addEventListener('click', (event) => {
        if (event.target.closest('.slider__slider')) {
            const sliderLine = event.target.closest('.slider__slider').previousElementSibling.querySelector('.location__main__item__img__line')
            offset += 259
            if (offset > 259) {
                offset = 0
            }
            sliderLine.style.left = -offset + 'px'
        }
})
}) 