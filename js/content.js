/**
 * Контент санитарной книги.
 * При добавлении новой темы — дополняй объект или замени placeholder.
 * content — HTML-строка (поддерживаются .info-box, .warn-box, .img-block и т.д.)
 */

const heroImage = (query, seed) =>
  `https://source.unsplash.com/featured/1600x900/?${encodeURIComponent(query)}&sig=${seed}`;

export const bookMeta = {
  title: 'Санитарная книга',
  subtitle: 'Полевое руководство по медицинской подготовке',
  project: 'Military RP · Garry\'s Mod',
  defaultHero: heroImage('military medical field hospital', 101),
};

export const sections = [
  {
    id: 'intro',
    title: 'Главная',
    shortTitle: 'Главная',
    isHome: true,
    heroImage: heroImage('military medic field hospital', 101),
    content: `
      <p class="lead">Добро пожаловать в электронную <strong>санитарную книгу</strong>. Здесь собраны правила, процедуры и базовые знания для медицинского персонала и бойцов на поле боя.</p>
      <div class="feature-grid">
        <div class="feature-card">
          <span class="feature-num">01</span>
          <h3>Регламент</h3>
          <p>Общие положения и порядок действий при спасении.</p>
        </div>
        <div class="feature-card">
          <span class="feature-num">02</span>
          <h3>База</h3>
          <p>Кровотечения, ранения, ожоги, переломы, шок — всё, что нужно знать каждому.</p>
        </div>
        <div class="feature-card">
          <span class="feature-num">03</span>
          <h3>Тактмед</h3>
          <p>Лекции и практические материалы по тактической медицине в RP-среде.</p>
        </div>
      </div>
      <div class="info-box">
        <strong>Как пользоваться:</strong> выбери раздел в меню слева. Тексты будут добавляться по мере заполнения — кидай темы по очереди, и они появятся здесь.
      </div>
    `,
  },
  {
    id: 'general',
    number: '1',
    title: 'Общие положения',
    shortTitle: 'Общие положения',
    heroImage: heroImage('military medical command tent', 102),
    content: `
      <p class="lead">Медицинская служба является неотъемлемым элементом структуры полка и отвечает за сохранение боеспособности личного состава.</p>
      <div class="article-rules">
        <div class="rule-item">
          <span class="rule-num">1.1</span>
          <div class="rule-body"><strong>Медслужба.</strong> Санитары поддерживают здоровье личного состава, оказывают помощь, проводят профилактику и следят за санитарно-гигиеническим состоянием подразделений.</div>
        </div>
        <div class="rule-item">
          <span class="rule-num">1.2</span>
          <div class="rule-body"><strong>Цель.</strong> Основная задача — своевременно оказывать помощь при травмах, болезнях и боевых ранениях, обеспечивая бойцов всем необходимым для выживания и восстановления.</div>
        </div>
        <div class="rule-item">
          <span class="rule-num">1.3</span>
          <div class="rule-body"><strong>Круглосуточная готовность.</strong> В любое время суток в медпункте должен находиться дежурный медицинский работник, готовый принять раненого или организовать эвакуацию.</div>
        </div>
        <div class="rule-item">
          <span class="rule-num">1.4</span>
          <div class="rule-body"><strong>Обращение за помощью.</strong> Каждый военнослужащий обязан знать место медпункта и порядок обращения. При травме или ухудшении состояния боец сообщает командиру и следует указаниям медперсонала.</div>
        </div>
        <div class="rule-item">
          <span class="rule-num">1.5</span>
          <div class="rule-body"><strong>Территория медпункта.</strong> На её территории запрещено использовать оружие, применять силу, находиться без разрешения и мешать оказанию помощи.</div>
        </div>
        <div class="rule-item">
          <span class="rule-num">1.6</span>
          <div class="rule-body"><strong>Санитарный контроль.</strong> Медслужба наблюдает за состоянием личного состава, качеством питания, воды и соблюдением норм гигиены.</div>
        </div>
        <div class="rule-item">
          <span class="rule-num">1.7</span>
          <div class="rule-body"><strong>Взаимодействие.</strong> Медики работают со всеми подразделениями полка, обеспечивая медицинское сопровождение на учениях и в боевых действиях.</div>
        </div>
        <div class="rule-item">
          <span class="rule-num">1.8</span>
          <div class="rule-body"><strong>Дисциплина.</strong> Каждый медработник обязан соблюдать устав, приказы и проявлять решительность, аккуратность и хладнокровие.</div>
        </div>
        <div class="rule-item">
          <span class="rule-num">1.9</span>
          <div class="rule-body"><strong>Ответственность.</strong> За нарушение правил, халатность или утрату имущества несёт личную ответственность виновное лицо.</div>
        </div>
      </div>
      <div class="info-box">
        <strong>Ключевой принцип:</strong> в любой обстановке санитар действует быстро, дисциплинированно и с холодной головой.
      </div>
    `,
  },
  {
    id: 'rescue',
    number: '2',
    title: 'Порядок спасения',
    shortTitle: 'Спасение',
    heroImage: heroImage('combat rescue mission', 104),
    content: `
      <p class="lead">В боевой обстановке помощь делится на три зоны: красную, жёлтую и зелёную. Каждая зона задаёт свой уровень угрозы и допустимые действия.</p>
      <div class="zone-grid">
        <div class="zone-card zone-red">
          <div class="zone-header">
            <span class="zone-dot"></span>
            <span>Красная зона</span>
          </div>
          <div class="zone-body">
            <p><strong>Активный бой под обстрелом.</strong> Главная цель — вытащить бойца из-под огня, а не проводить полноценное лечение.</p>
            <ol class="steps-list">
              <li>Оцени обстановку и не выбегай бездумно под огонь.</li>
              <li>Если раненый в сознании, скомандуй ему отползти в укрытие или обозначить себя.</li>
              <li>Используй дымовые гранаты, прикрытие и взаимодействие с отделением.</li>
              <li>После выноса доложи по рации и сообщи о состоянии раненого.</li>
            </ol>
            <div class="zone-rule">Главное правило: в красной зоне не лечишь — спасаю от обстрела.</div>
            <div class="radio-quote">102-й, докладывает [позывной]. Один раненый, состояние [тяжёлое/среднее/лёгкое]. Вытащил из-под обстрела, оказываю первую помощь.</div>
          </div>
        </div>
        <div class="zone-card zone-yellow">
          <div class="zone-header">
            <span class="zone-dot"></span>
            <span>Жёлтая зона</span>
          </div>
          <div class="zone-body">
            <p><strong>Условно безопасная зона.</strong> Здесь допускается первичная помощь, стабилизация и подготовка к эвакуации.</p>
            <ol class="steps-list">
              <li>Проверь дыхание, пульс, сознание и наличие кровотечения.</li>
              <li>Проведи быструю стабилизацию: жгут, повязка, шина, обработка ожогов.</li>
              <li>Если раненый без сознания — проверь дыхательные пути и при необходимости сделай искусственное дыхание.</li>
              <li>При тяжёлом состоянии вызови транспорт или носилки для эвакуации.</li>
            </ol>
            <div class="zone-rule">В жёлтой зоне ты уже не просто боец — ты медик на первых минутах.</div>
            <div class="radio-quote">102-й медвзвод, раненый стабилизирован, запрашиваю эвакуацию в зелёную зону.</div>
          </div>
        </div>
        <div class="zone-card zone-green">
          <div class="zone-header">
            <span class="zone-dot"></span>
            <span>Зелёная зона</span>
          </div>
          <div class="zone-body">
            <p><strong>Полностью безопасная территория.</strong> Здесь проводят полный осмотр, лечение и медицинское сопровождение.</p>
            <ol class="steps-list">
              <li>Проведи детальный осмотр: давление, пульс, сознание, дыхание, состояние ран.</li>
              <li>Организуй наблюдение, обезболивание и дальнейшую транспортировку.</li>
              <li>Передай бойца медикам и сделай итоговый доклад.</li>
            </ol>
            <div class="zone-rule">Главная цель зелёной зоны — вернуть бойца в строй или обеспечить ему надлежащую реабилитацию.</div>
            <div class="radio-quote">102-й, докладывает [позывной]. Раненый доставлен в зелёную зону, состояние стабильное.</div>
          </div>
        </div>
      </div>
      <div class="warn-box">
        <strong>Запрещено:</strong> тянуть раненого за руки или ноги при подозрении на травму позвоночника, снимать жгут без разрешения медиков и затягивать эвакуацию, если есть угроза жизни.
      </div>
    `,
  },
  {
    id: 'basics',
    number: '3',
    title: 'Базовые знания',
    shortTitle: 'Базовые знания',
    heroImage: heroImage('field medicine training', 105),
    isGroup: true,
    content: `
      <p class="lead">Фундаментальные знания для оказания первой помощи и стабилизации раненого на поле боя.</p>
      <div class="feature-grid">
        <div class="feature-card">
          <span class="feature-num">01</span>
          <h3>Кровотечение</h3>
          <p>Определи тип кровотечения и останови кровь до эвакуации.</p>
        </div>
        <div class="feature-card">
          <span class="feature-num">02</span>
          <h3>Ранения</h3>
          <p>Не вынимай инородные тела и не лей жидкость прямо в рану.</p>
        </div>
        <div class="feature-card">
          <span class="feature-num">03</span>
          <h3>Стабилизация</h3>
          <p>Проверь сознание, дыхание, пульс и держи пострадавшего в безопасности.</p>
        </div>
      </div>
      <div class="info-box">
        <strong>Правило:</strong> сначала оцени обстановку, потом действуй. Поспешность без оценки может убить не меньше, чем промедление.
      </div>
    `,
    children: [
      {
        id: 'bleeding',
        number: '3.1',
        title: 'Виды кровотечений',
        shortTitle: 'Кровотечения',
        heroImage: heroImage('blood loss emergency care', 106),
        content: `
          <p class="lead">Кровотечение — самая частая причина смерти в боевых условиях. Важно быстро определить его тип и остановить до прибытия медиков.</p>
          <div class="type-grid">
            <div class="type-card type-card--danger">
              <h4>Артериальное</h4>
              <p class="type-desc">Самое опасное, кровь ярко-красная и бьёт пульсирующей струёй.</p>
              <ul>
                <li>Наложи жгут выше раны, но не на сустав.</li>
                <li>Укажи время наложения.</li>
                <li>Проверь, чтобы пульс ниже жгута пропал.</li>
                <li>Срочно эвакуируй пострадавшего.</li>
              </ul>
            </div>
            <div class="type-card type-card--warn">
              <h4>Венозное</h4>
              <p class="type-desc">Кровь тёмно-вишнёвая, вытекает равномерно и не бьёт струёй.</p>
              <ul>
                <li>Наложи давящую повязку прямо на рану.</li>
                <li>Если повязка пропиталась — добавь поверх ещё бинт, не снимая старую.</li>
                <li>Подними конечность выше уровня сердца.</li>
              </ul>
            </div>
            <div class="type-card type-card--info">
              <h4>Капиллярное</h4>
              <p class="type-desc">Поверхностное, чаще при царапинах и порезах.</p>
              <ul>
                <li>Обработай края антисептиком.</li>
                <li>Закрой стерильной повязкой.</li>
                <li>Следи за чистотой раны, чтобы не развилось воспаление.</li>
              </ul>
            </div>
            <div class="type-card type-card--danger">
              <h4>Внутреннее</h4>
              <p class="type-desc">Кровь не выходит наружу, а скапливается внутри тела.</p>
              <ul>
                <li>Распознай по бледности, холодному поту и учащённому пульсу.</li>
                <li>Срочно эвакуируй.</li>
                <li>Не давай воду или еду, поддерживай дыхание и контроль пульса.</li>
              </ul>
            </div>
          </div>
          <div class="warn-box">
            <strong>Дополнительно:</strong> жгут можно наложить ремнём, бинтом, турникетом или другим подручным средством. Максимум времени — 30 минут зимой, 1 час летом. После эвакуации медик обязан ослабить или заменить жгут.
          </div>
        `,
      },
      {
        id: 'wounds',
        number: '3.2',
        title: 'Типы ранений и их классификация',
        shortTitle: 'Типы ранений',
        heroImage: heroImage('trauma treatment battlefield', 107),
        content: `
          <p class="lead">Ранение — это нарушение целостности тканей под действием пули, осколка, ножа или взрывной волны. Важно остановить кровь, не занести инфекцию и стабилизировать состояние бойца.</p>
          <div class="type-grid">
            <div class="type-card type-card--danger">
              <h4>Осколочное</h4>
              <ul>
                <li>Не вытаскивай осколки самостоятельно.</li>
                <li>Обработай края антисептиком, если это безопасно.</li>
                <li>Закрой стерильной повязкой и готовь к эвакуации.</li>
              </ul>
            </div>
            <div class="type-card type-card--danger">
              <h4>Огнестрельное</h4>
              <ul>
                <li>Не трогай пулю и не пытайся достать её.</li>
                <li>Останови кровотечение и обработай края раны без давления.</li>
                <li>При сильном кровотечении накладывай жгут.</li>
              </ul>
            </div>
            <div class="type-card type-card--warn">
              <h4>Колото-резаное</h4>
              <ul>
                <li>Если предмет остался в теле — не вынимай его.</li>
                <li>Зафиксируй его бинтами или тканью.</li>
                <li>Останови кровотечение и готовь к эвакуации.</li>
              </ul>
            </div>
            <div class="type-card type-card--info">
              <h4>Ушибы и контузии</h4>
              <ul>
                <li>Посади или уложи бойца.</li>
                <li>Проверь зрачки, так как разный размер может указывать на травму головы.</li>
                <li>Дай покой и наблюдай до прихода медиков.</li>
              </ul>
            </div>
          </div>
          <div class="danger-box">
            <strong>Что нельзя делать:</strong> не вытаскивай осколки, ножи и пули, не лей воду, спирт или йод прямо в рану, не перевязывай грязной тряпкой и не давай еду или воду при тяжёлых ранениях.
          </div>
        `,
      },
      {
        id: 'injury-types',
        number: '3.3',
        title: 'Основные виды травм',
        shortTitle: 'Виды травм',
        heroImage: heroImage('burn fracture treatment', 108),
        content: `
          <p class="lead">Ожоги, переломы, ушибы и вывихи требуют быстрой фиксации и аккуратной эвакуации. Ошибки здесь могут привести к усилению боли, шоку и осложнениям.</p>
          <div class="type-grid">
            <div class="type-card type-card--warn">
              <h4>Ожоги</h4>
              <ul>
                <li>Убери источник жара или химии.</li>
                <li>Остуди место чистой водой 10–15 минут, но не ледяной.</li>
                <li>Не вскрывай пузыри и не трогай прилипшую одежду.</li>
                <li>Наложи стерильную сухую повязку и эвакуируй.</li>
              </ul>
            </div>
            <div class="type-card type-card--danger">
              <h4>Переломы</h4>
              <ul>
                <li>Не пытайся вправить кость.</li>
                <li>Зафиксируй место шиной, захватывая два сустава выше и ниже перелома.</li>
                <li>При открытом переломе сначала останови кровь, затем фиксируй.</li>
                <li>Проверь, чтобы бинт не пережимал сосуды.</li>
              </ul>
            </div>
            <div class="type-card type-card--info">
              <h4>Травмы и ушибы</h4>
              <ul>
                <li>Признаки: боль, синяк, отёк, ограничение движения.</li>
                <li>Приложи холод на 10–15 минут, если есть возможность.</li>
                <li>Подними повреждённую часть выше уровня сердца.</li>
              </ul>
            </div>
            <div class="type-card type-card--warn">
              <h4>Растяжения и вывихи</h4>
              <ul>
                <li>Не пытайся вправить сам.</li>
                <li>Зафиксируй повреждённую часть как при переломе.</li>
                <li>Приложи холод и дай покой.</li>
              </ul>
            </div>
          </div>
          <div class="info-box">
            <strong>Признаки перелома:</strong> сильная боль, деформация конечности, опухоль, синяк, хруст при движении или видимая кость при открытом переломе.
          </div>
        `,
      },
      {
        id: 'condition-check',
        number: '3.4',
        title: 'Проверка состояния пострадавшего',
        shortTitle: 'Проверка состояния',
        heroImage: heroImage('army medic pulse check', 109),
        content: `
          <p class="lead">Первая минута после нахождения раненого — решающая. Сначала оцени состояние, потом действуй.</p>
          <ol class="steps-list">
            <li>Проверь сознание: обратитесь громко, спросите, как зовут, слегка потрясите за плечо.</li>
            <li>Проверь дыхание: открой рот, запрокинь голову назад, прислушайся к дыханию.</li>
            <li>Проверь пульс на шее и осмотри тело на наличие кровотечения.</li>
            <li>Если дыхания нет, начинай СЛР: 30 нажатий и 2 вдоха, если это возможно.</li>
          </ol>
          <div class="warn-box">
            <strong>Важно:</strong> если у пострадавшего кровь изо рта или подозрение на травму головы, не делай вдохи рот в рот — только компрессии.
          </div>
        `,
      },
      {
        id: 'evacuation',
        number: '3.5',
        title: 'Эвакуация',
        shortTitle: 'Эвакуация',
        heroImage: heroImage('military evacuation stretcher', 110),
        content: `
          <p class="lead">Эвакуация — это не просто транспортировка. Это способ снизить риск ухудшения состояния и сохранить жизнь при переносе.</p>
          <div class="article-rules">
            <div class="rule-item">
              <span class="rule-num">1</span>
              <div class="rule-body"><strong>Оцени обстановку.</strong> Сначала определяй, ты в красной, жёлтой или зелёной зоне.</div>
            </div>
            <div class="rule-item">
              <span class="rule-num">2</span>
              <div class="rule-body"><strong>Останови угрозы жизни.</strong> Останови кровотечение, зафиксируй перелом и проверь дыхание.</div>
            </div>
            <div class="rule-item">
              <span class="rule-num">3</span>
              <div class="rule-body"><strong>Подготовь к переноске.</strong> Освободи от мешающего снаряжения, но не оставляй оружие без присмотра.</div>
            </div>
            <div class="rule-item">
              <span class="rule-num">4</span>
              <div class="rule-body"><strong>Используй правильный способ.</strong> Для быстрых выносов — волоком, для средней дистанции — вдвоём на руках, для длительной перевозки — носилки.</div>
            </div>
          </div>
          <div class="scenario-block">
            <h4>Минимум для эвакуации</h4>
            <div class="scenario-meta">
              <span>Носилки или импровизированные носилки</span>
              <span>Жгут, бинты, шина</span>
              <span>Радиосвязь для доклада</span>
            </div>
            <p>На переносчике или на бумажке отмечай имя, позывной, тип ранения, время жгута и что уже сделано.</p>
          </div>
          <div class="rp-block">/me накладывает жгут выше раны и фиксирует время маркером<br>/do на бинте написано 12:34, кровотечение остановлено<br>/me зовёт: «102-й, докладывает, выносим раненого в укрытие»</div>
        `,
      },
      {
        id: 'burns-fractures',
        number: '3.6',
        title: 'Ожоги, переломы',
        shortTitle: 'Ожоги и переломы',
        heroImage: heroImage('military fracture splint', 111),
        content: `
          <p class="lead">Ожоги и переломы опасны не только болью, но и шоком, потерей жидкости и осложнениями от неправильной помощи.</p>
          <div class="type-grid">
            <div class="type-card type-card--warn">
              <h4>Степени ожога</h4>
              <ul>
                <li>1 степень — кожа красная, болит, но без пузырей.</li>
                <li>2 степень — появляются пузыри и сильная боль.</li>
                <li>3 степень — кожа белая или обугленная, нервная чувствительность снижена.</li>
                <li>4 степень — ткани поражены глубоко, до кости, требуется только эвакуация.</li>
              </ul>
            </div>
            <div class="type-card type-card--danger">
              <h4>Первая помощь при переломе</h4>
              <ul>
                <li>Не пытайся вправить кость.</li>
                <li>Зафиксируй конечность шиной или импровизированной доской.</li>
                <li>Шина должна захватывать два сустава: выше и ниже перелома.</li>
                <li>Проверь, чтобы бинт не пережимал сосуды.</li>
              </ul>
            </div>
          </div>
          <div class="danger-box">
            <strong>Чего нельзя делать:</strong> мазать жиром, лить спирт, вскрывать пузыри, сдирать прилипшую одежду и промывать ожог грязной водой.
          </div>
        `,
      },
      {
        id: 'shock-first-aid',
        number: '3.7',
        title: 'Шок и первая помощь',
        shortTitle: 'Шок',
        heroImage: heroImage('combat casualty treatment', 112),
        content: `
          <p class="lead">Шок — это состояние, когда организм перестаёт нормально поддерживать кровообращение. Без стабилизации человек может потерять сознание и умереть даже без видимых тяжёлых ран.</p>
          <div class="article-rules">
            <div class="rule-item">
              <span class="rule-num">1</span>
              <div class="rule-body"><strong>Признаки:</strong> бледная кожа, холодный пот, частый слабый пульс, быстрое дыхание, вялость, потеря сознания.</div>
            </div>
            <div class="rule-item">
              <span class="rule-num">2</span>
              <div class="rule-body"><strong>Причины:</strong> сильная кровопотеря, ожоги, переломы, травмы внутренних органов и тяжёлый стресс.</div>
            </div>
            <div class="rule-item">
              <span class="rule-num">3</span>
              <div class="rule-body"><strong>Алгоритм:</strong> останови кровь, зафиксируй перелом, уложи пострадавшего на спину, приподними ноги, укрой теплом и следи за дыханием.</div>
            </div>
            <div class="rule-item">
              <span class="rule-num">4</span>
              <div class="rule-body"><strong>Не давай пить.</strong> Особенно если есть подозрение на внутренние повреждения или тяжёлое состояние.</div>
            </div>
          </div>
          <div class="warn-box">
            <strong>Психологический шок:</strong> человек может трястись, паниковать или терять контроль над собой. Подойди спокойно, говори уверенно и не дави на него.</div>
        `,
      },
    ],
  },
  {
    id: 'tactical-med',
    number: '4',
    title: 'Тактическая медицина',
    shortTitle: 'Тактмед',
    heroImage: heroImage('tactical medicine training', 113),
    isGroup: true,
    content: `
      <p class="lead">Тактмед — это не просто лечение, а часть выживания отделения. Раненый, которому помогли и эвакуировали, — это сохранённая жизнь и сохранённая боеспособность команды.</p>
      <div class="chain-list">
        <span class="chain-item">Сам боец</span>
        <span class="chain-arrow">→</span>
        <span class="chain-item">Напарник</span>
        <span class="chain-arrow">→</span>
        <span class="chain-item">Тактический медик</span>
        <span class="chain-arrow">→</span>
        <span class="chain-item">Эвакуация</span>
      </div>
      <div class="info-box">
        <strong>Философия:</strong> пуля не заживает, а значит любой раненый — это ЧП для всего отделения, а не личная проблема одного бойца.
      </div>
    `,
    children: [
      {
        id: 'tacmed-lecture',
        number: '4.1',
        title: 'Лекция',
        shortTitle: 'Лекция',
        heroImage: heroImage('military field briefing', 114),
        content: `
          <p class="lead">Контур выживания — это круг, в котором завязан каждый участник отделения: сам боец, напарник, медик и эвакуация.</p>
          <div class="mars-grid">
            <div class="mars-item">
              <span class="mars-letter">M</span>
              <span class="mars-word">Move</span>
              <span class="mars-desc">Раненый перемещается в укрытие, если может.</span>
            </div>
            <div class="mars-item">
              <span class="mars-letter">A</span>
              <span class="mars-word">Assess</span>
              <span class="mars-desc">Оцени угрозу, кровотечение, инородное тело и тип ранения.</span>
            </div>
            <div class="mars-item">
              <span class="mars-letter">R</span>
              <span class="mars-word">Report</span>
              <span class="mars-desc">Доложи по радио и передай командиру точную информацию.</span>
            </div>
            <div class="mars-item">
              <span class="mars-letter">S</span>
              <span class="mars-word">Stop</span>
              <span class="mars-desc">Останови кровотечение и подготовь к эвакуации.</span>
            </div>
          </div>
          <div class="triage-row">
            <span class="triage triage-red">Красный — срочно</span>
            <span class="triage triage-yellow">Жёлтый — отсрочено</span>
            <span class="triage triage-green">Зелёный — ходячий</span>
            <span class="triage triage-black">Чёрный — безнадежный</span>
          </div>
          <div class="scenario-block">
            <h4>Что не делать никогда</h4>
            <ul>
              <li>Не вытаскивай осколок или нож из раны, если он тампонирует сосуд.</li>
              <li>Не давай воду без сознания.</li>
              <li>Не делай укол обезболивающего при ранении в живот.</li>
              <li>Не геройствуй — выживание отделения важнее личной славы.</li>
            </ul>
          </div>
        `,
      },
      {
        id: 'tacmed-practice',
        number: '4.2',
        title: 'Практика',
        shortTitle: 'Практика',
        heroImage: heroImage('military rescue drill', 115),
        content: `
          <p class="lead">Практика строится на трёх принципах: реализм, доверие к раненому и слаженность группы.</p>
          <div class="scenario-block">
            <h4>Сценарий 1. Эвакуация под огнём</h4>
            <div class="scenario-meta">
              <span>Задача: вытащить раненого в укрытие</span>
              <span>Роль: боец и носильщики</span>
            </div>
            <p>Боец сообщает: «Я ранен! На левой ноге! Не могу идти!»; напарник прикрывает его огнём, медик стабилизирует, а носильщики выносят в безопасную зону.</p>
          </div>
          <div class="scenario-block">
            <h4>Сценарий 2. Триаж</h4>
            <div class="scenario-meta">
              <span>Задача: разложить раненых по приоритету</span>
              <span>Роль: санитар</span>
            </div>
            <p>Красный — тяжёлое ранение с массивным кровотечением, жёлтый — стабилен, зелёный — лёгкие ранения, чёрный — без признаков жизни.</p>
          </div>
          <div class="scenario-block">
            <h4>Сценарий 3. Полевой ПСР</h4>
            <div class="scenario-meta">
              <span>Задача: создать укрытие и обозначить точку сбора</span>
              <span>Роль: вся группа</span>
            </div>
            <p>Бойцы обозначают ПСР ярким предметом, оттаскивают жёлтых и зелёных с линии огня, а медик работает с красными по приоритету.</p>
          </div>
        `,
      },
    ],
  },
  {
    id: 'conclusion',
    number: '5',
    title: 'Заключительные положения',
    shortTitle: 'Заключение',
    heroImage: heroImage('armed forces medical unit', 116),
    content: `
      <p class="lead">Санитарная книга — это не просто набор правил. Это инструкция по выживанию, дисциплине и сохранению боеспособности в любых условиях.</p>
      <div class="info-box">
        <strong>Итог:</strong> каждый боец обязан знать базовую медицину, каждый напарник обязан быть готов помочь, а каждый медик обязан держать порядок, спокойствие и контроль.
      </div>
    `,
  },
];

/** Плоский список всех секций для роутинга */
export function flattenSections(list = sections) {
  const result = [];
  for (const section of list) {
    result.push(section);
    if (section.children) {
      result.push(...flattenSections(section.children));
    }
  }
  return result;
}

export function findSectionById(id) {
  return flattenSections().find((s) => s.id === id) ?? sections[0];
}
