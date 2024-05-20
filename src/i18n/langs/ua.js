const ua = {
  message: {
    new_connection: 'Нове з`єднання',
    refresh_connection: 'Оновити',
    edit_connection: 'Редагувати з`єднання',
    duplicate_connection: 'Копіювати підключення',
    del_connection: 'Видалити з`єднання',
    close_connection: 'Закрити з`єднання',
    add_new_line: 'Додати новий рядок',
    dump_to_clipboard: 'Копіювати як команду',
    redis_version: 'Версія Redis',
    process_id: 'ID процесу',
    used_memory: 'Використано пам`яті',
    used_memory_peak: 'Максимальний обсяг пам`яті',
    used_memory_lua: 'Використання пам`яті Lua',
    connected_clients: 'Підключено клієнтів',
    total_connections_received: 'Кількість з`єднань',
    total_commands_processed: 'Кількість команд',
    key_statistics: 'Статистика по ключам',
    all_redis_info: 'Вся інформація Redis',
    server: 'Сервер',
    memory: 'Оперативна пам`ять',
    stats: 'Статистика',
    settings: 'Налаштування',
    ui_settings: 'Зовнішній вигляд',
    feature_settings: 'Функція',
    common_settings: 'Генеральний',
    confirm_to_delete_row_data: 'Підтвердити видалення даних рядка?',
    delete_success: 'Успішно видалено',
    delete_failed: 'Видалити не вдалося',
    modify_success: 'Успішно змінено',
    modify_failed: 'Зміни не вдалося',
    add_success: 'Успішно додано',
    add_failed: 'Додати не вдалося',
    value_exists: 'Значення вже існує',
    value_not_exists: 'Значення не існує',
    refresh_success: 'Успішно оновлено',
    click_enter_to_rename: 'Натисніть сюди або Enter, щоб перейменувати ключ',
    click_enter_to_ttl: 'Натисніть сюди або Enter, щоб змінити час життя ключа TTL',
    confirm_to_delete_key: 'Підтвердіть видалення {key}?',
    confirm_to_rename_key: 'Підтвердити перейменування {old} -> {new}?',
    edit_line: 'Редагувати рядок',
    auto_refresh: 'Автоматичне оновлення',
    auto_refresh_tip: 'Автоматичне оновлення, оновлення кожні {interval} секунд',
    key_not_exists: 'Ключ не існує',
    collapse_all: 'Згорнути все',
    expand_all: 'Розгорнути все',
    json_format_failed: 'Не вдалося форматувати в JSON',
    msgpack_format_failed: 'Не вдалося форматувати в MessagePack',
    php_unserialize_format_failed: 'PHP Unserialize форматування невдале',
    clean_up: 'Очистити',
    redis_console: 'Redis консоль',
    confirm_to_delete_connection: 'Ви впевнені, що хочете видалили з`єднання?',
    connection_exists: 'Налаштування з таким з`єднанням вже існує',
    close_to_edit_connection: 'Ви повинні закрити з`єднання перед змінами. Ви хочете продовжити?',
    close_to_connection: 'Підтвердження закриття з`єднання?',
    ttl_delete: 'Встановлення TTL <= 0 видалить ключ. Ви впевнені?',
    max_page_reached: 'Досягнуто максимальну кількість сторінок',
    add_new_key: 'Новий ключ',
    enter_new_key: 'Будь ласка, спочатку введіть нове ім`я ключа',
    key_type: 'Тип ключа',
    save: 'Зберегти',
    enter_to_search: 'Введіть ключ для пошуку',
    export_success: 'Успішно експортовано',
    select_import_file: 'Виберіть файл',
    import_success: 'Успішно імпортовано',
    put_file_here: 'Перетягніть файли сюди або натисніть, щоб вибрати',
    config_connections: 'Налаштування з`єднання',
    import: 'Імпорт',
    export: 'Експорт',
    open: 'Відкрити',
    close: 'Закрити',
    open_new_tab: 'Відкрити в новому вікні',
    exact_search: 'Точний пошук',
    enter_to_exec: 'Натисніть Enter для виконання команди, клавіші вгору і вниз для перемикання історії команд',
    pre_version: 'Версія',
    manual_update: 'Сторінка для зкачування',
    retry_too_many_times: 'Занадто багато спроб з`єднатись. Будь ласка, перевірте стан сервера',
    key_to_search: 'Пошук за ключовими словами',
    begin_update: 'Оновити',
    ignore_this_version: 'Ігнорувати цю версію',
    check_update: 'Перевірити оновлення',
    update_checking: 'Перевірка оновлень, будь ласка, чекайте ...',
    update_available: 'Знайдена нова версія',
    update_not_available: 'У Вас остання версія програми',
    update_error: 'Оновлення не вдалося',
    update_downloading: 'Завантаження ...',
    update_download_progress: 'Прогрес завантаження',
    update_downloaded: 'Оновлення завершено, запустіть програму, будь ласка.\
    [Tips]: Якщо ви використовуєте Windows, після закриття програми, дочекавшись значка робочого столу, щоб оновити його до нормального стану (приблизно 10 секунд), а потім ви можете відкрити його знову',
    mac_not_support_auto_update: 'MacOS не підтримує автоматичне оновлення, <a href="https://github.com/qishibo/AnotherRedisDesktopManager/releases">скачайте</a> і перевстановіть додаток вручну, \
    Або виконайте комманду <br><code>brew reinstall --cask another-redis-desktop-manager </code>\
    <br><hr><br>❤️якщо це корисно для вас, ви можете спонсорувати через <a href="https://apps.apple.com/app/id1516451072">AppStore</a>, і AppStore автоматично оновить його для вас.',
    font_family: 'Шрифти',
    font_faq_title: 'Інструкції з налаштування шрифту',
    font_faq: '1. Можна встановити кілька шрифтів. <br>\
    2. Вибір шрифту відбувається в послідовному порядку, рекомендується спочатку вибрати англійський шрифт, а потім вибрати український шрифт. <br> \
    3. У деяких випадках, коли список системних шрифтів не може бути завантажений, ви можете вручну ввести ім`я встановленого шрифту',
    private_key_faq: 'В даний час підтримуються закриті RSA ключі, що починаються з <pre> ----- BEGIN RSA PRIVATE KEY ----- </ pre> \
    Якщо ключ починається з <pre> ----- BEGIN OPENSSH PRIVATE KEY ----- </ pre> Вам потрібно конвертувати його через <pre> ssh-keygen -p -m pem -f ~ / .ssh / id_rsa < / pre> Ця операція не вплине на попередній вхід в систему з закритим ключем',
    dark_mode: 'Темна тема',
    load_more_keys: 'завантажити ще',
    key_name: 'Ім`я ключа',
    project_home: 'Сторінка додатка',
    cluster_faq: 'Виберіть будь-який вузол в кластері і заповніть його, він автоматично визначить інші вузли',
    redis_status: 'Інформація Redis',
    confirm_flush_db: 'Ви впевнені, що видалили всі ключі в db {db}?',
    flushdb: 'Видалити всі ключі',
    flushdb_prompt: 'введіть "{txt}"',
    info_disabled: 'Виняток при виконанні команди Info (можливо, було відключено), інформація про Redis не відображається',
    page_zoom: 'Масштаб сторінки',
    scan_disabled: 'Виняток при виконанні команди Scan (можливо, було відключено), неможливо відобразити список ключів',
    key_type_not_support: 'показ цього типу поки не підтримується, використовуйте консоль',
    delete_folder: 'Сканувати та видаляти цілу папку',
    multiple_select: 'Вибрати кілька',
    copy: 'Копіювати',
    copy_success: 'Копіювання успішно',
    keys_to_be_deleted: 'Ключі для видалення',
    delete_all: 'Видалити все',
    clear_cache: 'Oчистити кеш',
    mark_color: 'Позначити колір',
    key_no_permission: 'Термін дії дозволу на читання файлу закінчився, будь-ласка, виберіть файл ключа вручну',
    toggle_check_all: 'вибрати все | скасувати вибір усіх',
    select_lang: 'Оберіть мову',
    clear_cache_tip: 'Коли виникає проблема з клієнтом, ця операція видалить усі з\'єднання та конфігурації для відновлення клієнта',
    detail: 'деталь',
    separator_tip: 'Розділювач дерева, встановлений на порожній, щоб вимкнути дерево та клавіші відображення як список',
    confirm_modify_unvisible_content: 'Вміст містить невидимі символи, ви можете безпечно редагувати їх у "Hex View". Якщо продовження редагування у "Text View" може спричинити помилки кодування, впевнено продовжувати?',
    keys_per_loading: 'Кількість ключів',
    keys_per_loading_tip: 'Кількість клавіш, що завантажуються кожного разу. Занадто велике значення може вплинути на продуктивність',
    host: 'Aдресу',
    port: 'Порт',
    username: 'Ім\'я користувача',
    password: 'Пароль',
    connection_name: 'Спеціальна назва',
    separator: 'Cепаратор',
    timeout: 'Час вийшов',
    private_key: 'Приватний ключ',
    public_key: 'Відкритий ключ',
    authority: 'Авторизація',
    redis_node_password: 'Пароль вузла Redis',
    master_group_name: 'Назва групи Master',
    command_log: 'Журнал',
    sentinel_faq: 'Ви можете вибрати один із декількох сторожових. Будь ласка, заповніть конфігурацію сторожової адреси, порту та пароля. Пароль вузла Redis - це пароль головного вузла, який контролює сторожовий.',
    hotkey: 'Гаряча клавіша',
    persist: 'Видаліть термін дії',
    custom_formatter: 'Спеціальне форматування',
    edit: 'Pедагувати',
    new: 'Додати',
    custom: 'Hалаштувати',
    hide_window: 'Сховати вікно',
    minimize_window: 'Згорнути вікно',
    maximize_window: 'Розгорнути вікно',
    load_all_keys: 'завантажити все',
    show_load_all_keys: 'Кнопка «Увімкнути», щоб завантажити всі ключі',
    load_all_keys_tip: 'Завантажте всі ключі одночасно. Якщо кількість ключів занадто велика, клієнт може застрягти. Будь ласка, використовуйте його правильно',
    tree_node_overflow: 'Занадто багато ключів або папок, тільки {num} дисплея. Якщо ваш ключ не тут, рекомендується використовувати нечіткий пошук, або встановити роздільник для поширення ключів у теки',
    connection_readonly: 'Режим лише для читання. Додавання, редагування та видалення заборонено',
    memory_analysis: 'Аналіз пам\'яті',
    begin: 'Почніть',
    pause: 'Пауза',
    restart: 'Перезавантажте',
    max_display: 'Максимальна кількість показів: {num}',
    max_scan: 'Максимальна кількість сканувань: {num}',
    close_left: 'Закрити ліві вкладки',
    close_right: 'Закрити праві вкладки',
    close_other: 'Закрийте інші вкладки',
    slow_log: 'Повільний запит',
    load_current_folder: 'Завантажувати лише поточну папку',
    custom_name: 'Спеціальна назва',
  },
};

export default ua;
