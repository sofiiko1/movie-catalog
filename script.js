// === Данные о фильмах ===
// poster: CDN Кинопоиска — st.kp.yandex.net/images/film_big/{KP_ID}.jpg
// rutube: ID видео из ссылки rutube.ru/video/{ID}/
const movies = {
  action: [
    { title: "Каскадёры",     year: 2024, rating: 7.2, duration: 126, poster: "https://st.kp.yandex.net/images/film_big/535243.jpg",  rutube: "faa9bafe1b32b4b4f0a6802e21a5915f", description: "Голливудский каскадёр обнаруживает, что его жизнь удивительно похожа на сюжет реального заговора. Экшен-комедия с Райаном Гослингом в главной роли." },
    { title: "Аргайл",        year: 2024, rating: 5.8, duration: 139, poster: "https://st.kp.yandex.net/images/film_big/4507204.jpg", rutube: "429951b6ba03e6179c9214a59f73e490", description: "Писательница шпионских романов оказывается в центре реальных шпионских событий. Её выдуманные истории оказываются пугающе точными." },
    { title: "Лакомый кусок", year: 2026, rating: 0,   duration: 0,   poster: "https://st.kp.yandex.net/images/film_big/6398494.jpg", rutube: "0c3c2c6bb06c2be2a9e01e349de6e918", description: "Боевик о противостоянии опытного спецагента и международной преступной группировки, охотящейся за секретными технологиями." },
    { title: "Убежище",       year: 2026, rating: 0,   duration: 0,   poster: "https://st.kp.yandex.net/images/film_big/6548103.jpg", rutube: "925d9eac1ab48ae4c70b85bd4508e0fd", description: "Группа людей вынуждена скрываться в подземном бункере, когда мир снаружи рушится. Но главная угроза может оказаться внутри." },
    { title: "Джон Уик 4",    year: 2023, rating: 8.1, duration: 169, poster: "https://avatars.mds.yandex.net/get-mpic/11393590/2a0000019bb079b64c91cc13caccc33f8e04/optimize", rutube: "0a76b55b5eef921258d9234fb77119e2", description: "Легендарный Джон Уик находит путь победить Высокий стол. Прежде чем обрести свободу, ему предстоит сразиться с новым могущественным врагом по всему миру." },
    { title: "Топ Ган: Мэверик", year: 2022, rating: 7.8, duration: 131, poster: "https://avatars.mds.yandex.net/get-kinopoisk-image/4486454/d0b911da-7dda-4dcf-b57b-8b34c212259d/3840x", rutube: "3755ecd04a7aacfe6a5260f0afd2af72", description: "Спустя 30 лет Мэверик по-прежнему лучший пилот в мире. Его направляют тренировать элитных выпускников для выполнения особой опасной миссии." },
    { title: "Форсаж 10",     year: 2023, rating: 5.7, duration: 141, poster: "https://st.kp.yandex.net/images/film_big/1260309.jpg", rutube: "23c9f7025b5e108bdef9a8bb2628b993", description: "Доминик Торетто и его семья сталкиваются со своим самым опасным противником — сыном Дантея, который жаждет мести за отца." },
    { title: "Миссия невыполнима: Смертельная расплата", year: 2023, rating: 7.3, duration: 163, poster: "https://avatars.mds.yandex.net/get-kinopoisk-image/4716873/a291432b-f686-4bc0-ad5a-2ced30fd6d8f/3840x", rutube: "8311556977043152307569bc49e654bb", description: "Итан Хант выходит на охоту за дьявольским оружием, способным угрожать всему человечеству. Это его самая опасная миссия." },
  ],
  comedy: [
    { title: "Иван Васильевич меняет всё!", year: 2023, rating: 6.5, duration: 106, poster: "https://st.kp.yandex.net/images/film_big/5394690.jpg", rutube: "bc1f90afd3444bacab05eff869fadafe", description: "Современный ремейк советской классики о машине времени. Управдом и вор случайно попадают в прошлое, а царь Иван Грозный — в наши дни." },
    { title: "Бременские музыканты",        year: 2023, rating: 6.8, duration: 104, poster: "https://st.kp.yandex.net/images/film_big/5047464.jpg", rutube: "3d8c7210fd7e446e1922547973a9b615", description: "Захватывающая версия любимой сказки о четырёх друзьях-музыкантах. Трубадур, Принцесса, Кот, Пёс и Петух отправляются в новое большое приключение." },
    { title: "Следствие ведут овечки",      year: 2026, rating: 0,   duration: 0,   poster: "https://st.kp.yandex.net/images/film_big/6447742.jpg", rutube: "22892869912a63e93c8a08843ef2a784", description: "Смешная история о необычных детективах-животных, расследующих загадочные дела фермы. Ни одна улика не ускользнёт от пушистых следователей." },
    { title: "Дьявол носит Prada 2",        year: 2026, rating: 0,   duration: 0,   poster: "https://st.kp.yandex.net/images/film_big/6373982.jpg", rutube: "78a091e509a0870a7ea76738c18a9cf9", description: "Продолжение культовой истории о моде и амбициях. Миранда Пристли снова в деле, а мир высокой моды переживает новый кризис." },
    { title: "Барби",    year: 2023, rating: 7.0, duration: 114, poster: "https://www.film.ru/sites/default/files/styles/thumb_260x400/public/movies/posters/18042055-2365271.jpeg", rutube: "8916f54870cb13d875c08e3a8e2df1c3", description: "Барби выгоняют из идеального Барбилэнда, и она отправляется в реальный мир, чтобы найти своё настоящее «я». Комедия с Марго Робби и Райаном Гослингом." },
    { title: "Холоп 2",  year: 2024, rating: 7.3, duration: 116, poster: "https://www.kino-teatr.ru/news/31912/288208.jpg", rutube: "abc50f8a77fa497db534255592bd5033", description: "Гриша, изменившийся после жизни крепостного, берётся перевоспитать избалованную Катю. Теперь уже она окажется служанкой в XVIII веке." },
    { title: "Чебурашка 2", year: 2026, rating: 0, duration: 0, poster: "https://avatars.mds.yandex.net/get-kinopoisk-image/10812607/72511266-d619-45f7-9040-ae5caeb5181c/600x900", rutube: "0932c76fb1175082505510138fec9887", description: "Непоседливый Чебурашка взрослеет и всё больше отбивается от рук. Гена изо всех сил пытается его воспитать, но крепкая дружба всегда побеждает." },
    { title: "Вонка",    year: 2023, rating: 7.0, duration: 116, poster: "https://media.kg-portal.ru/movies/w/willywonka/posters/willywonka_6s_2x.jpg", rutube: "3f12644132fd1a25b69202a9b79766ce", description: "История молодого Вилли Вонки — великого изобретателя и шоколатье. Как мечтательный юноша стал самым знаменитым создателем сладостей в мире?" },
  ],
  drama: [
    { title: "Воздух",                 year: 2024, rating: 7.5, duration: 150, poster: "https://st.kp.yandex.net/images/film_big/1311129.jpg", rutube: "d60fe2631e04af317c6df18e95c47efa", description: "Военная драма о советских лётчицах Второй мировой войны. Молодые девушки встают на защиту неба Родины, проявляя невероятное мужество." },
    { title: "Красавица",              year: 2026, rating: 0,   duration: 0,   poster: "https://cdn.litres.ru/pub/c/cover_415/73456278.webp",   rutube: "e89ac5ffbf44cee52331849b1bd3eaf8", description: "История о силе духа и поиске себя в мире, где внешность значит слишком много. Драма о том, что истинная красота — внутри." },
    { title: "Большая земля",          year: 2025, rating: 0,   duration: 0,   poster: "https://st.kp.yandex.net/images/film_big/5594759.jpg", rutube: "edd10e646a17c1dad64a9d697ef61fa5", description: "Эпическая история о людях, строивших страну в тяжелейших условиях. Судьбы героев переплетаются на фоне великих событий." },
    { title: "Есть только МиГ",        year: 2025, rating: 0,   duration: 0,   poster: "https://st.kp.yandex.net/images/film_big/7075428.jpg", rutube: "7e376ebe20d2fa8c880a83646db26055", description: "Драма о судьбе военного лётчика, для которого небо — смысл всей жизни. Основана на реальных событиях советской авиации." },
    { title: "Оппенгеймер",            year: 2023, rating: 8.0, duration: 180, poster: "https://upload.wikimedia.org/wikipedia/ru/b/bf/%D0%9E%D0%BF%D0%BF%D0%B5%D0%BD%D0%B3%D0%B5%D0%B9%D0%BC%D0%B5%D1%80_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC_%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80.jpg", rutube: "2c4a6cead0c405ffde0f23b2f6842395", description: "История создателя атомной бомбы. Роберт Оппенгеймер руководит секретным Манхэттенским проектом, который навсегда изменил ход истории." },
    { title: "Мастер и Маргарита",     year: 2024, rating: 7.6, duration: 157, poster: "https://cdn.kanobu.ru/editor/images/78/d2a0df5a-b1d9-4727-8084-430696c0c781.jpg", rutube: "b0d230e1fbb4f6ecf5c8fdb6d435d270", description: "Москва 1930-х. Писатель переживает опалу, его возлюбленная Маргарита встречает загадочного Воланда, явившегося в город с чёрной магией." },
    { title: "Зона интересов",         year: 2023, rating: 7.1, duration: 105, poster: "https://upload.wikimedia.org/wikipedia/ru/3/3e/%D0%97%D0%BE%D0%BD%D0%B0_%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D0%BE%D0%B2_%28%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%29.webp", rutube: "8d74e23a83bf73e0d812b3901f478893", description: "Комендант Освенцима и его жена строят идиллический быт у стен лагеря. Победитель Оскара 2024 за лучший международный фильм." },
    { title: "Бедные-несчастные",      year: 2023, rating: 7.9, duration: 141, poster: "https://cdn.premierzal.ru/files/image/jhayimv-ikyy2e4a.jpg", rutube: "d6c7967cb7bc9d9fa5e1e88befe69cb7", description: "Молодая женщина с пересаженным мозгом исследует мир и себя в сюрреалистическом приключении. Обладатель «Золотого льва» и Оскара с Эммой Стоун." },
  ],
  horror: [
    { title: "Восстание зловещих мертвецов", year: 2023, rating: 7.1, duration: 97,  poster: "https://st.kp.yandex.net/images/film_big/1446132.jpg", rutube: "d6a98489af8a8ff1dfc65d29a7f23879", description: "Кровожадные мертвецы вырываются на свободу в городском многоквартирном доме. Двум сёстрам придётся сражаться за жизнь своей семьи." },
    { title: "Пять ночей с Фредди",          year: 2023, rating: 5.4, duration: 110, poster: "https://st.kp.yandex.net/images/film_big/952158.jpg",  rutube: "a1249aba0bee6fad46676c20a58cbf14", description: "Ночной охранник в заброшенном ресторане обнаруживает, что аниматронные куклы оживают с наступлением темноты. Экранизация культовой игры." },
    { title: "Оно. Первое пришествие",       year: 2025, rating: 0,   duration: 0,   poster: "https://st.kp.yandex.net/images/film_big/7337360.jpg", rutube: "e46dff84ce02058e3cc8123b48a5d264", description: "Приквел культового хоррора: история первого появления зловещего Пеннивайза в городе Дерри за 27 лет до событий оригинала." },
    { title: "Я иду искать 2",               year: 2026, rating: 0,   duration: 0,   poster: "https://st.kp.yandex.net/images/film_big/6747282.jpg", rutube: "f0cca022a93ef33ba8e5d91561b825d7", description: "Продолжение триллера о жуткой игре в прятки, из которой не все выходят живыми. Новые участники, новые правила, новый ужас." },
    { title: "Тихое место: День первый",    year: 2024, rating: 7.0, duration: 99,  poster: "https://upload.wikimedia.org/wikipedia/ru/3/34/%D0%A2%D0%B8%D1%85%D0%BE%D0%B5_%D0%BC%D0%B5%D1%81%D1%82%D0%BE_-_%D0%94%D0%B5%D0%BD%D1%8C_%D0%BF%D0%B5%D1%80%D0%B2%D1%8B%D0%B9.webp", rutube: "640b93c57c3012a608a668f4a643acca", description: "Нью-Йорк в первые часы вторжения слепых монстров с острым слухом. Приквел культовой франшизы — как всё началось в самый первый день." },
    { title: "Субстанция",                  year: 2024, rating: 7.0, duration: 140, poster: "https://upload.wikimedia.org/wikipedia/ru/1/18/%D0%A1%D1%83%D0%B1%D1%81%D1%82%D0%B0%D0%BD%D1%86%D0%B8%D1%8F_%28%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%29.webp", rutube: "eb057968fbb94c25f3ba13498ee15c4a", description: "Стареющая звезда принимает таинственный препарат, порождающий молодую версию себя. Шокирующий боди-хоррор с Деми Мур и Маргарет Куолли." },
    { title: "Собиратель душ",              year: 2024, rating: 5.9, duration: 101, poster: "https://upload.wikimedia.org/wikipedia/ru/2/2a/%D0%A1%D0%BE%D0%B1%D0%B8%D1%80%D0%B0%D1%82%D0%B5%D0%BB%D1%8C_%D0%B4%D1%83%D1%88_%28%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%2C_2024%29.jpg", rutube: "c8cf4bfc6ffac9e7430d85603b356f99", description: "Агент ФБР охотится за серийным убийцей по прозвищу Длинноногий, уничтожившим за десять лет несколько семей без видимых следов. С Николасом Кейджем." },
    { title: "Два, три, демон, приди!",     year: 2023, rating: 7.3, duration: 95,  poster: "https://upload.wikimedia.org/wikipedia/ru/2/27/Talk_to_Me_2022.jpeg", rutube: "32aba0a49da9db396ddb3418008f971e", description: "Тинейджеры обнаружили способ вызывать духов через загадочную мумифицированную руку. Связь с потусторонним миром стремительно выходит из-под контроля." },
  ],
  scifi: [
    { title: "Создатель",                    year: 2023, rating: 6.7, duration: 133, poster: "https://st.kp.yandex.net/images/film_big/4499408.jpg", rutube: "bb69adcb5321b6494a7d11f0cd9e4b45", description: "В мире будущего, где ИИ и люди ведут войну, солдат обнаруживает, что оружие противника — маленький ребёнок-андроид." },
    { title: "Флэш",                         year: 2023, rating: 6.7, duration: 144, poster: "https://st.kp.yandex.net/images/film_big/195483.jpg",  rutube: "b0e852bae2d92286e210f329ac643f2e", description: "Флэш использует способности для путешествия во времени, чтобы спасти маму. Но изменив прошлое, он сталкивается с непредвиденными последствиями." },
    { title: "Человек-муравей: Квантомания", year: 2023, rating: 6.1, duration: 124, poster: "https://st.kp.yandex.net/images/film_big/1318868.jpg", rutube: "18fc71214d03bfbcf214637dc8d81e04", description: "Скотт Лэнг и его семья затягиваются в Квантовое царство, где встречают таинственного и могущественного Канга-Завоевателя." },
    { title: "Проект «Конец света»",         year: 2026, rating: 0,   duration: 0,   poster: "https://st.kp.yandex.net/images/film_big/1382256.jpg", rutube: "571d9bdefd9dd9b3412e88ffd62ef50e", description: "Группа учёных обнаруживает сигнал из глубин космоса, способный уничтожить всё живое на Земле. У них есть 72 часа." },
    { title: "Дюна: Часть вторая",           year: 2024, rating: 8.1, duration: 166, poster: "https://st.kp.yandex.net/images/film_big/4912681.jpg", rutube: "1442bf34b5b9cfc739c809cd19a6718f", description: "Пол Атрейдес объединяется с фрименами в войне против Харконненов. Эпическое завершение дилогии Дени Вильнёва по роману Фрэнка Херберта." },
    { title: "Стражи Галактики 3",           year: 2023, rating: 7.9, duration: 150, poster: "https://upload.wikimedia.org/wikipedia/ru/thumb/3/30/Guardians_of_the_Galaxy_Vol_3_poster.jpg/960px-Guardians_of_the_Galaxy_Vol_3_poster.jpg", rutube: "9b5ed3aa73c931cb0869d451b4d43dc3", description: "Стражи отправляются в опасное путешествие, чтобы спасти Ракету от смертоносного чипа. Финальная глава трилогии от Джеймса Ганна." },
    { title: "Аватар: Путь воды",            year: 2022, rating: 7.5, duration: 192, poster: "https://avatars.mds.yandex.net/get-kinopoisk-image/10768063/035e9573-0377-43b2-b129-c3362bdf36ef/600x900",  rutube: "ad47cc4cb648b7afa6ce39284152e525", description: "Джейк Салли с семьёй покидает родное племя и исследует океанические миры Пандоры, когда угроза с Земли возвращается." },
    { title: "Трансформеры: Восхождение Звероботов", year: 2023, rating: 5.8, duration: 127, poster: "https://avatars.mds.yandex.net/get-kinopoisk-image/4486454/79b22385-23ae-43b0-87a0-a7aa3c9b01bd/600x900", rutube: "d31b3cdc5266f40539eb67796d79726d", description: "Нью-Йорк 1994 года. Два человека оказываются в многовековом конфликте Оптимуса Прайма со Звероботами и смертоносными Террорконами." },
  ],
  animation: [
    { title: "Головоломка 2", year: 2024, rating: 7.9, duration: 100, poster: "https://st.kp.yandex.net/images/film_big/5102255.jpg", rutube: "da35ffc084b7cee7041ea0d3f7869c32", description: "Райли стала подростком, и в её голове появляются новые тревожные эмоции. Радость и её друзья должны найти способ сохранить равновесие." },
    { title: "Элементарно",   year: 2023, rating: 7.0, duration: 101, poster: "https://st.kp.yandex.net/images/film_big/4889667.jpg", rutube: "cff380a39b56cd468a05655aa26b7939", description: "В городе, где живут стихии — огонь, вода, земля и воздух — девушка-огонь и парень-вода открывают, как много у них общего." },
    { title: "Шрэк 5",        year: 2026, rating: 0,   duration: 0,   poster: "https://st.kp.yandex.net/images/film_big/1040433.jpg", rutube: "91512431216496e2508ca29f9c8645ad", description: "Зелёный великан возвращается в новое большое приключение вместе с Фионой, Осликом и Котом в сапогах." },
    { title: "Прыгуны",       year: 2026, rating: 0,   duration: 0,   poster: "https://st.kp.yandex.net/images/film_big/6111021.jpg", rutube: "c4e06de46dc699fbbd88a836306bc6b8", description: "Команда маленьких героев с удивительными способностями отправляется в опасное путешествие через невероятные фантастические миры." },
    { title: "Гадкий я 4",    year: 2024, rating: 6.5, duration: 95,  poster: "https://upload.wikimedia.org/wikipedia/ru/4/46/%D0%93%D0%B0%D0%B4%D0%BA%D0%B8%D0%B9_%D1%8F_4_%28%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80%29.jpg", rutube: "a7d9311467b1e59ff64c950769588abe", description: "Грю и Люси встречают нового ребёнка — Грю-младшего, который явно не рад отцу. А тут ещё появляется новый суперзлодей Максим Ле Маль." },
    { title: "Миграция",      year: 2023, rating: 6.5, duration: 83,  poster: "https://upload.wikimedia.org/wikipedia/ru/5/58/Migration_%282023%29_poster.jpg", rutube: "92f69c14908d86bba37339bf56c3b462", description: "Семья уток решает покинуть привычный пруд и отправиться в захватывающее путешествие через Нью-Йорк прямо на Ямайку." },
    { title: "Черепашки-ниндзя: Хаос мутантов", year: 2023, rating: 7.2, duration: 99, poster: "https://avatars.mds.yandex.net/get-kinopoisk-image/4486454/7803459d-4939-429d-9749-e2f06e6cf212/576x", rutube: "a895ffda9ead9b573785b9ed24a21757", description: "Четыре брата-черепашки решают выйти из тени и стать героями Нью-Йорка. На их пути — целая армия мутантов." },
    { title: "Заветное желание", year: 2023, rating: 5.9, duration: 95, poster: "https://avatars.mds.yandex.net/get-kinopoisk-image/10900341/2a9d8232-9337-4c3a-a9e0-ba09c0c27641/600x900", rutube: "1a26494ccfac6c1d3b44b5322cf75d25", description: "17-летняя Аша живёт в волшебном королевстве, где мечты сбываются. Её слишком сильное желание призывает с неба загадочную звезду Стар." },
  ],
};

// Быстрый поиск фильма по rutube ID
const movieById = Object.values(movies).flat().reduce((acc, m) => {
  acc[m.rutube] = m;
  return acc;
}, {});

// Соответствие ключа жанра → id контейнера в HTML
const genreContainers = {
  action:    "action-row",
  comedy:    "comedy-row",
  drama:     "drama-row",
  horror:    "horror-row",
  scifi:     "sci-fi-row",
  animation: "animation-row",
};

// Создаёт CSS-заглушку вместо постера
function createPlaceholder(title) {
  const div = document.createElement("div");
  div.className = "movie-poster-placeholder";
  div.textContent = title;
  return div;
}

// Создаёт DOM-карточку для одного фильма
function createCard(movie) {
  const card = document.createElement("div");
  card.className = "movie-card";

  // Постер: если задан — показываем картинку с фолбэком на заглушку
  if (movie.poster) {
    const img = document.createElement("img");
    img.alt = movie.title;
    img.loading = "lazy";
    img.onerror = () => card.replaceChild(createPlaceholder(movie.title), img);
    img.src = movie.poster;
    card.appendChild(img);
  } else {
    card.appendChild(createPlaceholder(movie.title));
  }

  // Блок с названием и рейтингом
  const info = document.createElement("div");
  info.className = "movie-info";

  const titleEl = document.createElement("div");
  titleEl.className = "movie-title";
  titleEl.textContent = movie.title;

  const ratingEl = document.createElement("div");
  if (movie.rating > 0) {
    ratingEl.className = "movie-rating";
    ratingEl.textContent = `★ ${movie.rating.toFixed(1)}`;
  } else {
    ratingEl.className = "movie-rating movie-rating--new";
    ratingEl.textContent = `Новинка ${movie.year}`;
  }

  const heartBtn = document.createElement("button");
  heartBtn.className = "heart-btn" + (getFavorites().has(movie.rutube) ? " liked" : "");
  heartBtn.dataset.id = movie.rutube;
  heartBtn.textContent = "♥";
  heartBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleFavorite(movie);
  });

  const bottom = document.createElement("div");
  bottom.className = "movie-info-bottom";
  bottom.appendChild(ratingEl);
  if (movie.duration) {
    const durationEl = document.createElement("div");
    durationEl.className = "movie-duration";
    durationEl.textContent = `${movie.duration} мин`;
    bottom.appendChild(durationEl);
  }
  bottom.appendChild(heartBtn);

  info.appendChild(titleEl);
  info.appendChild(bottom);
  card.appendChild(info);

  card.addEventListener("click", () => showTrailer(movie));
  return card;
}

// Открывает модальное окно с Rutube-плеером
function showTrailer(movie) {
  document.getElementById("trailer-iframe").src =
    `https://rutube.ru/play/embed/${movie.rutube}?autoplay=1`;
  document.getElementById("modal-movie-title").textContent = movie.title;
  document.getElementById("modal-movie-description").textContent = movie.description || "";
  document.getElementById("modal").classList.remove("hidden");
}

// Закрывает окно и останавливает видео
function closeModal() {
  document.getElementById("modal").classList.add("hidden");
  document.getElementById("trailer-iframe").src = "";
}

// === Избранное ===

function getFavorites() {
  return new Set(JSON.parse(localStorage.getItem("kino-favorites") || "[]"));
}

function saveFavorites(set) {
  localStorage.setItem("kino-favorites", JSON.stringify([...set]));
}

function toggleFavorite(movie) {
  const favorites = getFavorites();
  if (favorites.has(movie.rutube)) {
    favorites.delete(movie.rutube);
  } else {
    favorites.add(movie.rutube);
  }
  saveFavorites(favorites);
  const isLiked = favorites.has(movie.rutube);
  document.querySelectorAll(`.heart-btn[data-id="${movie.rutube}"]`).forEach(btn => {
    btn.classList.toggle("liked", isLiked);
  });
  renderFavorites();
}

function renderFavorites() {
  const favorites = getFavorites();
  const row = document.getElementById("favorites-row");
  const empty = document.getElementById("favorites-empty");
  row.innerHTML = "";
  if (favorites.size === 0) {
    empty.style.display = "";
    return;
  }
  empty.style.display = "none";
  favorites.forEach(id => {
    if (movieById[id]) row.appendChild(createCard(movieById[id]));
  });
}

// Отрисовывает все жанры
function renderAll() {
  Object.entries(genreContainers).forEach(([genre, containerId]) => {
    const container = document.getElementById(containerId);
    movies[genre].forEach(movie => container.appendChild(createCard(movie)));
  });
}

// Закрытие по кнопке «×»
document.querySelector(".close-modal").addEventListener("click", closeModal);

// Закрытие по клику на тёмный фон вокруг плеера
document.getElementById("modal").addEventListener("click", (e) => {
  if (e.target === document.getElementById("modal")) closeModal();
});

// Закрытие по клавише Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

// Гамбургер-меню
const burger = document.getElementById("burger");
const mainNav = document.getElementById("main-nav");

burger.addEventListener("click", () => {
  burger.classList.toggle("open");
  mainNav.classList.toggle("open");
});

// Плавная прокрутка по ссылкам навигации + закрытие мобильного меню
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    burger.classList.remove("open");
    mainNav.classList.remove("open");
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

renderAll();
renderFavorites();

// Свайп мышью для рядов с фильмами (десктоп)
document.querySelectorAll(".movies-row").forEach(row => {
  let startX = 0;
  let scrollLeft = 0;
  let isDragging = false;
  let hasMoved = false;

  row.addEventListener("mousedown", (e) => {
    isDragging = true;
    hasMoved = false;
    startX = e.pageX - row.offsetLeft;
    scrollLeft = row.scrollLeft;
    row.classList.add("dragging");
  });

  window.addEventListener("mouseup", () => {
    isDragging = false;
    row.classList.remove("dragging");
  });

  row.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    const x = e.pageX - row.offsetLeft;
    const diff = x - startX;
    if (Math.abs(diff) > 4) hasMoved = true;
    row.scrollLeft = scrollLeft - diff;
  });

  // Блокируем открытие фильма если было перетаскивание, а не клик
  row.addEventListener("click", (e) => {
    if (hasMoved) e.stopPropagation();
  }, true);
});
