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

const popupButton = document.querySelector('.popup__container__button')

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

if (document.documentElement.clientWidth < 767) {
    const anotherText = document.querySelector('.title-2')
    anotherText.textContent = 'Встречаем Новый Год и праздники'
    const proposalTexts = document.querySelectorAll('.proposal__text__text')
    const proposalParaf1 = document.querySelector('.proposal__text__parahraph-1')
    const proposalParaf2 = document.querySelector('.proposal__text__parahraph-2')
    const proposalParaf3 = document.querySelector('.proposal__text__parahraph-3')
    proposalTexts[0].insertAdjacentHTML('afterend', `
    <div class="proposal__text__text proposal__text__parahraph-1">
    <div>Предлагаем вам провести новогодние</div>
    <div>праздники вместе с нами.</div>
  </div>`)
  proposalTexts[1].insertAdjacentHTML('afterend', `
  <div class="proposal__text__text proposal__text__parahraph-2">
  <div>Насладитесь праздниками в зимней сказке.</div>
  <div>Праздники по-русски – всегда весело,</div>
  <div>Вкусно и красиво. </div>
  </div>`)
  proposalTexts[2].insertAdjacentHTML('afterend', `
  <div class="proposal__text__parahraph-3"><div>Узнать цены и забронировать коттедж можно </div>
  <div>по телефону: <b> +7 (8162) 50-22-99</b></div></div>`)
    proposalParaf1.style.display = 'none'
    proposalParaf2.style.display = 'none'
    proposalParaf3.style.display = 'none'
    const adaptiveDownTexts = document.querySelectorAll('.downtext')
    adaptiveDownTexts[0].insertAdjacentHTML('afterend', `
    <div class="downtext">(с посетителями соседней базы)</div>
    `)
    adaptiveDownTexts[1].insertAdjacentHTML('afterend', `
    <div class="downtext">(игры, хороводы, угощения и многое другое)</div>
    `)
    adaptiveDownTexts[0].style.display = 'none'
    adaptiveDownTexts[1].style.display = 'none'
}