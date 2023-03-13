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
    const titleText = document.querySelector('.title__text')
    titleText.insertAdjacentHTML('afterend', `
    <div class="title__text">
    <div>Мы сделаем ваш отдых незабываемым.</div>
    <div> Во избежание возможных недоразумений</div>
    <div> убедительная просьба с вашей стороны</div>
    <div> соблюдать установленные правила поведения</div>
    <div> временного пребывания на базе отдыха</div>
    <div> и данную инструкцию.</div></div>
    `)
    titleText.style.display = 'none';
    const greetingText = document.querySelector('.greetings__text')
    greetingText.insertAdjacentHTML('afterend', `
    <div class="greetings__text">
    <div>Мы сделаем ваш отдых незабываемым.</div>
    <div> Во избежание возможных недоразумений</div>
    <div> убедительная просьба с вашей стороны</div>
    <div> соблюдать установленные правила поведения</div>
    <div> временного пребывания на базе отдыха</div>
    <div> и данную инструкцию.</div></div>
    `)
    greetingText.style.display = 'none'
    const mainTitle = document.querySelector('.main__title')
    mainTitle.insertAdjacentHTML('afterend', `
    <div class="greetings__text">
    <div>Мы сделаем ваш отдых незабываемым.</div>
    <div> Во избежание возможных недоразумений</div>
    <div> убедительная просьба с вашей стороны</div>
    <div> соблюдать установленные правила поведения</div>
    <div> временного пребывания на базе отдыха</div>
    <div> и данную инструкцию.</div></div>
    `)
    const adaptiveParagrafTexts = document.querySelectorAll('.paragraph')
    adaptiveParagrafTexts.forEach(par => par.style.display = 'none')
    adaptiveParagrafTexts[0].insertAdjacentHTML('afterend', `<div class="paragraph">
    <div>1. Заселение осуществляется в 14:00.</div>
    <div>Выселение в 12:00. Опоздания и досрочные</div>
    <div>выезды не компенсируются.</div>
</div>`)
    adaptiveParagrafTexts[1].insertAdjacentHTML('afterend', `<div class="paragraph">
<div>2. Основанием для проживания на базе является</div>
<div>путевка или квитанция об оплате</div>
<div>(при предварительной оплате проживания)</div>
<div>или кассовый чек.</div>
</div>`)
    adaptiveParagrafTexts[2].insertAdjacentHTML('afterend', `<div class="paragraph">
<div>3. Отдыхающие, при заселении на базу, обязаны</div>
<div>предоставлять необходимые документы,</div>
<div>удостоверяющие личность.</div>
</div>`)
    adaptiveParagrafTexts[3].insertAdjacentHTML('afterend', `<div class="paragraph">
<div>4. Число отдыхающих в номере должно строго</div>
<div>соответствовать количеству мест, оплаченных</div>
<div>согласно тарифу проживания.</div>
</div>`)
    adaptiveParagrafTexts[4].insertAdjacentHTML('afterend', `<div class="paragraph">
<div>5. При заселении взимается «залоговая сумма»,</div>
<div>для обеспечения ответственности отдыхающих</div>
<div>и на случай утери или порчи имущества (посуда,</div>
<div>ключи и т. п.) – 3000 рублей за номер. При выезде</div>
<div>«залоговая сумма» будет возвращена, если</div>
<div>администратор не выявит никаких нарушений.</div>
</div>`)
    adaptiveParagrafTexts[5].insertAdjacentHTML('afterend', `<div class="paragraph">
<div>6. На базу, в исключительных случаях,</div>
<div>разрешается привоз кошек и собак,</div>
<div>за исключением бойцовских и сторожевых</div>
<div>пород, по согласованию с администрацией</div>
<div>и при наличии паспорта на животного.</div>
<div>Основанием для содержания на базе кошек</div>
<div>и собак является квитанция об оплате</div>
<div>их содержания, которая оформляется на месте</div>
<div>после регистрации животных.</div>
<div>Владельцы кошек и собак обязаны принимать</div>
<div>меры, обеспечивающие безопасность</div>
<div>окружающих. Не допускать загрязнения</div>
<div>собаками и кошками номеров и территории</div>
<div>базы. В случае загрязнения указанных мест,</div>
<div>владельцы животных немедленно должны их</div>
<div>устранить. Не допускать собак и кошек в места</div>
<div>общего пользования. Выгуливать собак только</div>
<div>за территорией базы в намордниках</div>
<div>и на поводке.</div>
<div>Стоимость пребывания животного:</div>
<div>Низкий, средний сезоны – 200 ₽ / сутки;</div>
<div>Высокий сезон – 300 ₽ / сутки.</div>
</div>`)

    adaptiveParagrafTexts[6].insertAdjacentHTML('afterend', `<div class="paragraph">
    <div>7. Все отдыхающие обязаны сохранять</div>
    <div>и бережно относиться к имуществу базы</div>
    <div> и окружающей природной среде во время всего</div>
    <div> пребывания на базе отдыха. Любой нанесенный</div>
    <div>материальный ущерб имуществу базы</div>
    <div> оплачивается отдыхающими в полном объеме.</div>
    <div> Ущерб рассчитывается администратором базы</div>
    <div> по рыночной стоимости имущества. За ущерб,</div>
    <div> нанесенный окружающей среде в результате</div>
    <div> неправомочных действий</div>
    <div> (несанкционированная рубка, разведение</div>
    <div> костров, ловля рыбы запрещенными методами</div>
    <div> и т. д.), отдыхающие несут персональную</div>
    <div> ответственность согласно действующему</div>
    <div> законодательству.</div>
</div>`)
adaptiveParagrafTexts[7].insertAdjacentHTML('afterend', `<div class="paragraph">
<div>8. Отдыхающие обязаны соблюдать правила</div>
<div>и нормы поведения на территории базы отдыха</div>
<div>и в номере:</div>
<div>– содержать в чистоте номер и территорию,</div>
<div>прилегающую к домику;</div>
<div>– запрещается шуметь и мешать</div>
<div>другим отдыхающим;</div>
<div>– запрещается нарушать тишину после 23 часов</div>
<div>любыми способами и в том числе</div>
<div>звуковыми эффектами.</div>
</div>`)
adaptiveParagrafTexts[8].insertAdjacentHTML('afterend', `<div class="paragraph">
<div>9. Во избежание пожара необходимо соблюдать</div>
<div>меры безопасности, внимательнее относиться</div>
<div>к электронагревательным бытовым приборам,</div>
<div>сети освещения и в случае их неисправности</div>
<div>немедленно обратиться к администратору базы.</div>
<div>Категорически запрещается самостоятельно</div>
<div>проводить ремонт электросети,</div>
<div>электроприборов и т.д. Запрещается курение</div>
<div>в номерах. Запрещается разведение костров</div>
<div>на территории, кроме оборудованных для этого</div>
<div>мест указанных администрацией.</div>
</div>`)
adaptiveParagrafTexts[9].insertAdjacentHTML('afterend', `<div class="paragraph">
<div>10. Отдыхающие должны соблюдать правила</div>
<div>поведения на воде. Купаться только</div>
<div>в специально отведенных местах.</div>
<div>При пользовании плавательными средствами</div>
<div>убедиться в исправности, не превышать</div>
<div>количество посадочных мест, пользоваться</div>
<div>спасательными жилетами, воздержаться</div>
<div>от прогулок в нетрезвом состоянии при плохой</div>
<div>погоде. Купание в проруби запрещается.</div>
</div>`)
adaptiveParagrafTexts[10].insertAdjacentHTML('afterend', `<div class="paragraph">
<div>11. Отдыхающие обязаны ставить в известность</div>
<div>администрацию о наличии любых видов оружия</div>
<div>(охотничьего, травматического, служебного</div>
<div>и т. д.) с предъявлением документов,</div>
<div>подтверждающих право на хранение и ношение.</div>
</div>`)
adaptiveParagrafTexts[11].insertAdjacentHTML('afterend', `<div class="paragraph">
<div>12. Администрация базы отдыха оставляет</div>
<div>за собой право отказать в предоставлении услуг</div>
<div>отдыхающим, нарушающим правила</div>
<div>пребывания на базе отдыха без возмещения</div>
<div>стоимости проживания.</div>
</div>`)
adaptiveParagrafTexts[12].insertAdjacentHTML('afterend', `<div class="paragraph">
<div>13. Администрация не несет ответственность:</div>
<div>за травмы, полученные отдыхающими во время</div>
<div>пребывания на базе или во время пользования</div>
<div>инвентарем базы, за любые медицинские</div>
<div>расходы, возникшие в результате несчастных</div>
<div>случаев и других страховых случаев,</div>
<div>за сохранность личных вещей</div>
<div>и имущества отдыхающих.</div>
</div>`)
adaptiveParagrafTexts[13].insertAdjacentHTML('afterend', `<div class="paragraph">
<div>14. В случае возникновения форс-мажорных</div>
<div>обстоятельств, влияющих на работу базы отдыха,</div>
<div>Администрация ответственности не несет.</div>
<div>Конфликты, возникающие между отдыхающими,</div>
<div>разрешаются  через администратора</div>
<div>или директора базы. Вопросы, не оговоренные</div>
<div>в инструкции по временному проживанию</div>
<div>на базе отдыха, согласовываются</div>
<div>с администратором или директором базы.</div>
</div>`)
    const title = document.querySelector('.title-2')
    title.insertAdjacentHTML('afterend', `<div class="title-2">
    <div>Администрация клуба</div>
    <div>«Берендеево царство»</div>
  </div>`)
    title.style.display = 'none'
}