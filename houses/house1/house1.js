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

const bookHeader = document.querySelector('.header__button')
const popup = document.querySelector('.popup')

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

const scrollUp = document.getElementById('footer__main__item__square')

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

scrollUp.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
})

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

const popupFormForm1 = new formForm('.form__form__button-1', '.wrapper')
popupFormForm1.main()

const popupFormForm2 = new formForm('.form__form__button-2', '.wrapper')
popupFormForm2.main()

const popupFormPopup = new popupForm('.popup__container__button', '.wrapper')
popupFormPopup.main()

const popupInputs = document.querySelectorAll('.popup__container__input')
popupInputs.forEach(input => {
    input.addEventListener('keyup', () => {
        input.classList.add('keyup-popup')
    })
}) 

let offset = 0 // смещение от левого края
const sliderLine = document.querySelectorAll('.slider__line')
const nextButton = document.querySelectorAll('.next')
const prevButton = document.querySelectorAll('.prev')

nextButton.forEach(next => {
    next.addEventListener('click', () => {
        offset += 320
        if (offset > 1600) {
            offset = 0
        }
        sliderLine.forEach(line => {line.style.left = -offset + 'px'})
    })
})

prevButton.forEach(next => {
    next.addEventListener('click', () => {
        offset -= 320
        if (offset < 0) {
            offset = 1600
        }
        sliderLine.forEach(line => { line.style.left = -offset + 'px' })
    })
})

const sliderFooterLine = document.querySelector('.footer__slider__line')
const nextFooterButton = document.querySelector('.next-footer')
const prevFooterButton = document.querySelector('.prev-footer')

nextFooterButton.addEventListener('click', () => {
    offset += 279
    if (offset > 558) {
        offset = 0
    }
    sliderFooterLine.style.left = -offset + 'px'
})

prevFooterButton.addEventListener('click', () => {
    offset -= 279
    if (offset < 0) {
        offset = 558
    }
    sliderFooterLine.style.left = -offset + 'px'
}) 

if (document.documentElement.clientWidth < 767) {
    const anotherText= document.querySelector('.anothertext')
    anotherText.insertAdjacentHTML('afterend', `
    <div class="description__button__text anothertext">
    <div>Уютный рубленный деревянный дом, </div>
    <div>состоящий из 2 номеров, с отдельными</div>
    <div> входами на разных этажах.</div>
    <div>Возле дома имеется мангал с необходимыми</div>
    <div>принадлежностями, беседка.</div></div>`)
    anotherText.style.display = 'none'
}