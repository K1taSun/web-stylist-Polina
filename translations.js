// słownik PL / RU - wszystkie teksty strony
const translations = {
  pl: {
    // NAV
    nav_logo:      "Polina",
    nav_home:      "Strona główna",
    nav_services:  "Usługi",
    nav_chat:      "Stylowy czat",
    nav_reviews:   "Opinie",
    nav_collab:    "Współpraca",
    nav_book:      "Zapisz się",
    nav_quote:     '\u201eStyl to j\u0119zyk, kt\u00f3rym m\u00f3wisz bez s\u0142\u00f3w.\u201c',

    // HERO
    hero_eyebrow:       "Personal Stylist",
    hero_title:         "Twój styl<br /><em>Twoja siła</em>",
    hero_subtitle:      "Odkryj wizerunek, który mówi za Ciebie — bez słów, bez kompromisów.",
    hero_cta_primary:   "Zapisz się",
    hero_cta_secondary: "Poznaj usługi",

    // SERVICES
    services_eyebrow: "Co oferuję",
    services_title:   "Usługi",
    svc1_title: "Analiza sylwetki i kolorystyki",
    svc1_desc:  "Odkryjemy Twój typ urody i sylwetki, by każda stylizacja była stworzona specjalnie dla Ciebie.",
    svc2_title: "Shopping & Wardrobe edit",
    svc2_desc:  "Razem zrobimy zakupy lub uporządkujemy Twoją garderobę — zostanie tylko to, co działa.",
    svc3_title: "Stylizacja na wydarzenie",
    svc3_desc:  "Wesele, sesja zdjęciowa, biznesowe spotkanie — przygotuję Cię od stóp do głów.",
    svc4_title: "Konsultacja online",
    svc4_desc:  "Zdalna analiza, porady i gotowe lookbooki — bez wychodzenia z domu.",

    // CHAT
    chat_eyebrow: "Szybki kontakt",
    chat_title:   "Stylowy czat",
    chat_body:    "Masz pytanie dotyczące stylizacji? Napisz do mnie bezpośrednio — odpowiem w ciągu 24 h i pomogę wybrać kolejny krok na drodze do Twojego wymarzonego wizerunku.",
    chat_btn:     "Napisz na Instagram",

    // REVIEWS
    reviews_eyebrow: "Co mówią klientki",
    reviews_title:   "Opinie",
    rev1_text: "Polina całkowicie odmieniła mój sposób ubierania się. Po jednej sesji czuję się jak nowa osoba. Jej oko do detali jest absolutnie niesamowite!",
    rev1_name: "— Marta K.",
    rev2_text: "Nareszcie wiem, co zakładać na ważne spotkania. Wardrobe edit to był najlepszy prezent, jaki zrobiłam sobie w tym roku.",
    rev2_name: "— Joanna W.",
    rev3_text: "Shopping z Poliną? Absolutna magia! Znalazłyśmy rzeczy, których sama nigdy bym nie wzięła — a teraz to moje ulubione ubrania.",
    rev3_name: "— Agnieszka T.",
    rev4_text: "Konsultacja online przekroczyła moje oczekiwania. Szczegółowy lookbook, konkretne wskazówki i niesamowite wyczucie stylu.",
    rev4_name: "— Katarzyna M.",

    // COLLAB
    collab_eyebrow: "Razem możemy więcej",
    collab_title:   "Współpraca",
    col1_title: "Marki i sklepy",
    col1_desc:  "Chętnie współpracuję z markami modowymi przy kampaniach, lookbookach i eventach.",
    col2_title: "Fotografie i media",
    col2_desc:  "Stylizacja do sesji zdjęciowych, filmów i projektów wydawniczych.",
    col3_title: "Warsztaty i szkolenia",
    col3_desc:  "Prowadzę grupowe warsztaty stylizacji i wykłady o modzie dla firm i uczelni.",

    // FORM
    book_eyebrow:     "Pierwszy krok",
    book_title:       "Zapisz się",
    form_name:        "Imię i nazwisko",
    form_email:       "Adres e-mail",
    form_ig:          "Instagram (opcjonalnie)",
    form_service:     "Wybór usługi",
    form_submit:      "Wyślij zgłoszenie",
    form_success:     "✦ Dziękuję! Odezwę się wkrótce.",
    form_err_name:    "Podaj swoje imię",
    form_err_email:   "Podaj poprawny e-mail",
    form_err_service: "Wybierz usługę",
    opt1: "Analiza sylwetki i kolorystyki",
    opt2: "Shopping & Wardrobe edit",
    opt3: "Stylizacja na wydarzenie",
    opt4: "Konsultacja online",
    opt5: "Współpraca",

    // FOOTER
    footer_tagline: "Personal Stylist · PL & RU",
    footer_copy:    "© 2026 Polina. All rights reserved.",
  },

  ru: {
    // NAV
    nav_logo:      "Полина",
    nav_home:      "Главная",
    nav_services:  "Услуги",
    nav_chat:      "Стильный чат",
    nav_reviews:   "Отзывы",
    nav_collab:    "Сотрудничество",
    nav_book:      "Записаться",
    nav_quote:     "«Стиль — это язык, на котором ты говоришь без слов.»",

    // HERO
    hero_eyebrow:       "Персональный стилист",
    hero_title:         "Твой стиль<br /><em>Твоя сила</em>",
    hero_subtitle:      "Найди образ, который говорит за тебя — без слов, без компромиссов.",
    hero_cta_primary:   "Записаться",
    hero_cta_secondary: "Узнать больше",

    // SERVICES
    services_eyebrow: "Что я предлагаю",
    services_title:   "Услуги",
    svc1_title: "Анализ силуэта и цветотипа",
    svc1_desc:  "Определим твой тип внешности и силуэта, чтобы каждый образ был создан именно для тебя.",
    svc2_title: "Шопинг и разбор гардероба",
    svc2_desc:  "Вместе сходим за покупками или разберём твой гардероб — останется только то, что работает.",
    svc3_title: "Стилизация к событию",
    svc3_desc:  "Свадьба, фотосессия, деловая встреча — подготовлю тебя с головы до пят.",
    svc4_title: "Онлайн-консультация",
    svc4_desc:  "Дистанционный анализ, советы и готовые лукбуки — не выходя из дома.",

    // CHAT
    chat_eyebrow: "Быстрый контакт",
    chat_title:   "Стильный чат",
    chat_body:    "Есть вопрос по стилю? Напиши мне напрямую — отвечу в течение 24 ч и помогу выбрать следующий шаг к твоему идеальному образу.",
    chat_btn:     "Написать в Instagram",

    // REVIEWS
    reviews_eyebrow: "Что говорят клиентки",
    reviews_title:   "Отзывы",
    rev1_text: "Полина полностью изменила мой подход к одежде. После одной сессии я чувствую себя абсолютно новым человеком. Её чувство деталей — просто невероятное!",
    rev1_name: "— Марта К.",
    rev2_text: "Наконец-то знаю, что надевать на важные встречи. Разбор гардероба — лучший подарок, который я сделала себе в этом году.",
    rev2_name: "— Жанна В.",
    rev3_text: "Шопинг с Полиной — абсолютная магия! Мы нашли вещи, которые я никогда бы не выбрала сама — а теперь это моя любимая одежда.",
    rev3_name: "— Алина Т.",
    rev4_text: "Онлайн-консультация превзошла все мои ожидания. Подробный лукбук, конкретные советы и невероятное чувство стиля.",
    rev4_name: "— Катерина М.",

    // COLLAB
    collab_eyebrow: "Вместе можем больше",
    collab_title:   "Сотрудничество",
    col1_title: "Бренды и магазины",
    col1_desc:  "С удовольствием сотрудничаю с модными брендами в кампаниях, лукбуках и мероприятиях.",
    col2_title: "Фото и медиа",
    col2_desc:  "Стилизация для фотосессий, видео и издательских проектов.",
    col3_title: "Воркшопы и тренинги",
    col3_desc:  "Провожу групповые воркшопы по стилю и лекции о моде для компаний и университетов.",

    // FORM
    book_eyebrow:     "Первый шаг",
    book_title:       "Записаться",
    form_name:        "Имя и фамилия",
    form_email:       "Электронная почта",
    form_ig:          "Instagram (необязательно)",
    form_service:     "Выбор услуги",
    form_submit:      "Отправить заявку",
    form_success:     "✦ Спасибо! Скоро свяжусь с тобой.",
    form_err_name:    "Введи своё имя",
    form_err_email:   "Введи корректный e-mail",
    form_err_service: "Выбери услугу",
    opt1: "Анализ силуэта и цветотипа",
    opt2: "Шопинг и разбор гардероба",
    opt3: "Стилизация к событию",
    opt4: "Онлайн-консультация",
    opt5: "Сотрудничество",

    // FOOTER
    footer_tagline: "Персональный стилист · PL & RU",
    footer_copy:    "© 2026 Полина. Все права защищены.",
  }
};
