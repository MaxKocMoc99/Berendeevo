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
    const adaptiveTexts = document.querySelectorAll('.paragraph')
    adaptiveTexts.forEach(par => par.style.display = 'none')
    adaptiveTexts[0].insertAdjacentHTML('afterend', `<div class="paragraph">
   <div><b>1.</b> Настоящая Политика конфиденциальности (далее – Политика) в соответствии с действующим законодательством  </div>
   <div>РФ, в том числе в соответствии с Федеральным </div>
   <div>законом от 27 июля 2006 года № 152 - ФЗ   </div>
   <div>«О персональных данных», действует  </div>
   <div> в отношении всей информации, которую   </div>
   <div> ООО «НовТурСервис» ОГРН 1135331000628,  </div>
   <div>  место нахождения  175421, Россия, </div>
   <div> Новгородская область, Валдайский район,    </div>
   <div> деревня Шуя (далее – Исполнитель, Компания)   </div>
   <div>  может получить о пользователе услуг   </div>
   <div>  (далее – Пользователь) во время использования   </div>
   <div>  последним сайта: <a href="#"> <span class="blue"> https://valday.nov.ru/</span></a></div>`)
   adaptiveTexts[1].insertAdjacentHTML('afterend', `<div class="paragraph">
   <div><b>  2.</b>  Перед началом использования сайта, подачи</div> 
   <div>заявки, пожалуйста, ознакомьтесь с условиями </div> 
   <div>настоящей Политики конфиденциальности. </div> 
   <div> В случае несогласия с этими условиями пользователь должен воздержаться</div> 
   <div>от получения услуг.</div> </div>`)
   adaptiveTexts[2].insertAdjacentHTML('afterend', `<div class="paragraph">
   <div> <b>  3.</b>  Администрация Исполнителя гарантирует</div>
   <div>конфиденциальность личной информации</div>
   <div>Пользователя, предоставленной Пользователем</div>
   <div> в процессе использования сайта, подачи заявки.</div>
   <div>  Персональные данные, полученные</div>
   <div>  ООО «НовТурСервис» в процессе использования</div>
   <div>  сайта, подачи заявки, хранятся в защищенных</div>
   <div>    базах данных, закрытых для общего доступа.</div>
         <div>   Нажимая на кнопку </div> 
         <div>  «Забронировать/Отправить», вы даете согласие</div>
         <div> на обработку персональных данных и</div>
         <div> соглашаетесь c политикой конфиденциальности.</div>
 </div>`)
 adaptiveTexts[3].insertAdjacentHTML('afterend', `  <div class="paragraph">
  <div><b>  4.</b>  В рамках настоящей Политики под</div>
  <div>«персональной информацией Пользователя» </div>
  <div>понимаются: </div>
  <div> – персональная информация, которую</div>
  <div> Пользователь предоставляет о себе самостоятельно при регистрации (создании</div>
    <div>  учётной записи) или в процессе использования сайта;</div>
    <div>– данные, которые автоматически передаются</div>
    <div>сайтом Исполнителя в процессе его</div>
    <div> использования с помощью установленного</div>
    <div> на устройстве Пользователя программного</div>
    <div>  обеспечения, в том числе IP-адрес, информация </div>
    <div>из cookie, информация о браузере Пользователя</div>
    <div>(или иной программе, с помощью которой</div>
        <div>  осуществляется доступ к сайту), время доступа,</div>
        <div>  адрес запрашиваемой страницы.</div>
        <div>Исполнитель по общему правилу не проверяет</div>
        <div>достоверность персональной информации,</div>
        <div>предоставляемой Пользователями,</div>
        <div> и не осуществляет контроль за их дееспособностью. Однако Исполнитель исходит</div>
        <div>из того, что Пользователь предоставляет</div>
        <div> достоверную и достаточную персональную</div>
        <div> информацию по вопросам, </div>
        <div>предлагаемым в форме регистрации,</div>
        <div>и поддерживает эту информацию</div>
        <div> в актуальном состоянии. </div>
</div>`)
adaptiveTexts[4].insertAdjacentHTML('afterend', `  <div class="paragraph">
 <div><b>  5.</b>  Оставляя контактные данные, вы несете</div>
 <div> ответственность за корректность вносимой </div>
 <div> информации. При заказе тестирования либо </div>
 <div> обратного звонка на нашем сайте необходимо </div>
 <div> верно указать ваше имя, телефон, электронную</div>
 <div>почту. Личные данные Пользователя</div>
 <div>не подлежат публичному разглашению</div>
 <div> за пределами организации.</div>
</div>`)
adaptiveTexts[5].insertAdjacentHTML('afterend', `  <div class="paragraph">
<div><b>  6.</b> Представитель компании свяжется с вами</div>
<div>в ближайшее время после получения заявки.</div>
<div> Рабочие часы, в которые возможен контакт:</div>
<div>  с 8:00 до 23:00 по московскому времени,</div>
<div>   с понедельника по воскресенье. В случае </div>
<div>   невозможности оперативного контакта</div>
<div>  по телефону, представитель компании будет</div>
<div>   стремиться связаться с вами в течение всей </div>
<div>следующей недели в указанные выше</div>
<div> рабочие часы.</div>
</div>`)
adaptiveTexts[6].insertAdjacentHTML('afterend', `  <div class="paragraph">
<div><b>  7.</b>  Предоставив персональные данные на сайте</div>
<div>компании, вы автоматически соглашаетесь с тем,</div>
<div> что указанные вами данные могут быть</div>
<div>  использованы администрацией кафе</div>
<div>   в информационной и рекламной рассылке, в том</div>
<div>   числе по email и SMS. Вы можете отказаться</div>
<div>    от получения любого рода рассылки, сообщив</div>
<div>     об этом представителю компании</div>
<div>      по электронному адресу: <b> novturservis@yandex.ru</b></div>
<div>       или по телефону: <b>+7 (911) 621-77-70</b>.</div>
</div>`)
adaptiveTexts[7].insertAdjacentHTML('afterend', `  <div class="paragraph">
<div><b>  8.</b>  Информация, представленная на странице,</div>
<div> носит справочно-ознакомительный характер</div>
<div>и не является публичной офертой. Более</div>
<div>  детальную информацию об эко-клубе</div>
<div>  «Берендеево царство» вы можете получить</div>
<div>    по телефону:<b> +7 (911) 621-77-70.</b></div>
</div>`)
adaptiveTexts[8].insertAdjacentHTML('afterend', `  <div class="paragraph">
<div><b>  9.</b>  Личные данные Пользователей могут быть</div>
<div>переданы лицам, не связанным с настоящим</div>
<div> сайтом, если это необходимо:</div>
<div>– для соблюдения закона,</div>
<div>нормативно-правового акта, исполнения</div>
<div> решения суда;</div>
<div>– для выявления или</div>
<div> воспрепятствования мошенничеству;</div>
<div>– для устранения технических неисправностей</div>
<div> в работе сайта;</div>
<div>– для предоставления информации </div>
<div>на основании запроса уполномоченных </div>
<div>государственных органов.</div>
</div>`)
adaptiveTexts[9].insertAdjacentHTML('afterend', `  <div class="paragraph">
<div><b>  10.</b>  Исполнитель принимает необходимые</div>
<div>и достаточные организационные и технические</div>
<div>  меры для защиты персональной информации</div>
<div> Пользователя от неправомерного</div>
<div>   или случайного доступа, уничтожения,</div>
<div>    изменения, блокирования, копирования,</div>
<div>     распространения, а также от иных</div>
<div>      неправомерных действий с ней третьих лиц.</div>
</div>`)
adaptiveTexts[10].insertAdjacentHTML('afterend', `  <div class="paragraph">
<div><b>  11.</b>  Обновления политики конфиденциальности</div>
<div>публикуются на данной странице. Новая</div>
<div>  редакция Политики вступает в силу с момента </div>
<div> ее размещения, если иное не предусмотрено</div>
<div>  новой редакцией Политики. Для удобства</div>
<div>Пользователей все версии политики</div>
<div> конфиденциальности подлежат сохранению </div>
<div> в архивных файлах.</div>
</div>`)
adaptiveTexts[11].insertAdjacentHTML('afterend', `  <div class="paragraph">
<b>  12.</b>  Редакция от 15/11/2021 г.
</div>`)
}