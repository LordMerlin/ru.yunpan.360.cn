// ==UserScript==
// @name        Yunpan.360.ru
// @namespace   Vismmax
// @description Перевод сайта yunpan.360.cn
// @include     http://yunpan.360.cn/*
// @include     https://yunpan.360.cn/*
// @include     *yunpan.360.cn/*
// @version     0.1
// @grant       none
// ==/UserScript==

//Перевод местами очень вольный

var dict = {

    'title' : '360 Cloud Drive - бесплатное, неограниченное, безопасное пространство',   // 360云盘 - 安全免费 无限空间
    'logo' : '360 Cloud Drive',   // 360云盘
    'nav_36' : 'Получить 36T',   // 36T免费空间
    'nav_home' : 'Домой',   // 首页
    'nav_group' : 'Группы',   // 共享群
    'nav_download' : 'Скачать',   // 下载
    'nav_forum' : 'Форум',   // 论坛

    'footer_agreement' : 'Соглашение',   // 使用协议
    'footer_privacy' : 'Конфиденциальность',   // 隐私保护
    'footer_releasenote' : 'Журнал',   // 更新日志
    'footer_help' : 'Помощь',   // 帮助中心
    'footer_forum' : 'Форум',   // 问题反馈
    'footer_mailto' : 'Сообщить о незаконном содержании: ',   // 违法内容举报：

    'login_title' : 'Добро пожаловать!',   // 欢迎使用360云盘！
    'login_account' : '№ тел. / имя / email',   // 手机号/用户名/邮箱
    'login_account_label' : 'Логин',   // 帐号
    'login_password' : 'Пароль',   // 请输入您的密码
    'login_password_label' : 'Пароль',   // 密码
    'login_error' : 'Пожалуйста, введите буквы или цифры, без учета регистра',   // 请输入图中的字母或数字，不区分大小写
    'login_use' : 'В настоящее время вы используете облако c учетной записи',   // 您当前正在使用的云盘帐号是：
    'login_phrase' : 'Код:',   // 验证码
    'login_phrase_label' : 'Код:',   // 验证码
    'login_lwm' : 'Сменить рисунок',   // 点击更换图片
    'login_refreshCaptchaLogin' : 'Сменить',   // 换一张
    'login_tipsPhraseLogin' : 'Пожалуйста, введите буквы или цифры, без учета регистра',   // 请输入图中的字母或数字，不区分大小写
    'login_regNewAccount' : 'Регистрация',   // 注册新帐号
    'login_keep' : ' Запомнить',   //  下次自动登录
    'login_findPwd' : 'Забыли пароль?',   // 忘记密码？
    'login_submit' : 'Войти',   // 登录
    'login_submit_go' : 'Вход',   // 登录中
    'login_reg' : 'Регистрация',   // 注册360账号
    'login_goMy' : 'Войти в облоко',   // 进入我的云盘
    'login_info_p' : 'Вы вошли как:',   // 您当前正在使用的云盘帐号是：
    'login_logout' : 'Выход>>',   // 更换帐号&gt;&gt;
    'login_dl_pc' : 'PC с синхронизацией',   // PC同步版下载
    'login_dl_mac' : 'Mac с синхронизацией',   // Mac同步版下载
    'login_qrcode' : 'Сканировать для загрузки',   // 手机扫描 直接下载
    'login_noCookie' : 'Для входа необходимо включить cookie',   // 浏览器已禁止设置cookie，无法正常登录，请
    'login_opencookie' : ' Включить cookie ',   // 启用cookie
    'login_loginErrorMsg' : 'Введите правильные данные',   //
    'login_clientBtn' : 'PC версия',
    'login_mobileBtn' : 'Для мобильного',

    'reg_title' : 'Добро пожаловать в Облако 360',   // 欢迎注册360云盘
    'reg_email' : 'Почтовый ящик',   // 邮箱
    'reg_tips_loginEmail' : 'Пожалуйста, введите свой почтовый ящик, ',   // 请输入您的常用邮箱，
    'reg_fac_email' : 'Нет почты?',   // 没有邮箱？
    'reg_password' : 'Пароль',   // 密码
    'reg_tips_password' : '6-20 символов (с учетом регистра)',   // 6-20个字符，（区分大小写）
    'reg_repassword' : 'Подтвердите пароль',   // 确认密码
    'reg_tips_repassword' : 'Пожалуйста, введите пароль еще раз',   // 请再次输入密码
    'reg_agree' : ' Я прочитал и согласен',   // 我已经阅读并同意
    'reg_fac_agree' : '《360 Условия предоставления услуг》',   // 《360用户服务条款》
    'reg_submit' : 'Зарегистрироваться',   // 立即注册

    'my_title' : '360 Cloud Drive - Мой диск',   // 360云盘 - 我的云盘
    'topPanel_logo' : 'Домашняя страница',   // 云盘首页
    'topPanel_file' : 'Файлы', // 网盘
    'topPanel_file_title' : 'Наиболее безопасный сетевой диск', // 最安全的网络U盘
    'topPanel_xiangce' : 'Фотоальбом', // 相册
    'topPanel_xiangce_title' : 'Фотоальбом', // 相册
    'topPanel_collect' : 'Коллекция', // 云收藏
    'topPanel_collect_title' : 'Сохраненные данные из браузера', // 从浏览器保存的内容
    'topPanel_more' : 'Больше', // 更多
    'topPanel_more_title' : 'Еще больше облачных сервисов', // 更多云服务

    'userInfo_profile' : 'Профиль', // 帐号中心
    'userInfo_auth' : 'Сертификация', // 申请个人认证
    'userInfo_message' : 'Сообщения', // 云盘消息
    'userInfo_ypLevel' : 'Уровень', // 云盘等级
    'userInfo_volRecords' : 'Записи', // 扩容记录
    'userInfo_recharge' : 'Обновление', // 空间升级卡
    'userInfo_inviteFri' : 'Пригласить друга', // 邀请好友
    'userInfo_tpFeedback' : 'Форум', // 意见反馈
    'userInfo_tpHelp' : 'Помощь', // 帮助中心
    'userInfo_lottery' : 'Лотерея', // 每日抽奖
    'userInfo_tpExit' : 'Выход', // 退出云盘

    'leftPanel_file' : 'Все файлы', // 全部文件
    'leftPanel_sFile' : 'Сейф', // 保险箱
    'leftPanel_link' : 'Расшаренные', // 我的分享
    'leftPanel_group' : 'Группы', // 我的共享群
    'leftPanel_recycle' : 'Корзина', // 回收站
    'leftPanel_space' : '++', // 扩容

    'mainPanel_search' : 'Поиск файла',   // 当前页文件搜索
    'mainPanel_pluginTip' : 'Новые функции! Ускоренная загрузка. Загрузка больших файлов.',   // 新！支持云加速上传啦！支持极速秒传、大文件上传、断点续传哦~
    'mainPanel_download' : 'Установите плагин для быстрой загрузки',   // 安装云加速控件
    'mainPanel_pluginSetupSuccess' : 'Установка прошла успешно',   // 上传控件安装成功，快来体验吧！

    // btns-filelist
    'toolbar_tbUpload' : 'Загрузить',   // 上传
    'toolbar_tbNew' : 'Новая папка',   // 新建文件夹
    'toolbar_tbOffline' : 'Загрузить оффлайн',   // 离线下载
    'toolbar_tbDl' : 'Скачать',   // 下载
    'toolbar_tbPackDl' : 'Скачать',   // 下载
    'toolbar_tbDel' : 'Удалить',   // 删除
    'toolbar_tbLink' : 'Общий доступ',   // 分享 (Поделиться)
    'toolbar_tbLinkBatch' : 'Общий доступ',   // 分享 (Поделиться)
    'toolbar_tbMore' : 'Больше',   // 更多

    // btns-sfilelist
    'toolbar_tdMoveOut' : 'Передача файлов в сейф',   // 转出文件保险箱
    'toolbar_tbLockSfile' : 'Сразу заблокировать сейф',   // 立即锁上保险箱

    // btns-link
    'toolbar_tbLinkView' : 'Просмотреть общие ссылки',   // 查看分享链接
    'toolbar_tbLinkDel' : 'Отменить общий доступ',   // 取消分享
    'toolbar_tbExtractOn' : 'Возможность извлечения кода',   // 启用提取码
    'toolbar_tbExtractOff' : 'Отмена извлечения кода',   // 取消提取码
    'toolbar_tbLinkCopy' : 'Копирование общей ссылки',   // 复制分享链接
    'toolbar_shareTopTip' : 'В связи с борьбой с порнографией, функции общего доступа временно недоступны. ',   // 为配合有关部门的“扫黄打非”净网行动，云盘分享功能临时调整。
    'toolbar_shareTopTip_a' : 'Подробнее',   // 查看详情

    // btns-recycle
    'toolbar_tbRestore' : 'Восстановить',   // 还原文件
    'toolbar_tbDisdel' : 'Удалить',   // 删除
    'toolbar_tbClearall' : 'Очистить корзину',   // 清空回收站
    'toolbar_tbOpenPassword' : 'Установить пароль',   // 对回收站启用云盘安全密码
    'toolbar_tbOpenPasswordDone' : 'Снять пароль',   // 回收站云盘安全密码启用中

    // btns-hisfile
    'toolbar_tbHisReFile_title' : 'Восстановить до выбранной версии',   // 还原到选中版本
    'toolbar_tbHisReFile' : 'Восстановить',   // 穿越到选中时光号
    'toolbar_tbHisView' : 'Посмотреть онлайн',   // 在线查看
    'toolbar_tbHisViewPic' : 'Посмотреть онлайн',   // 在线查看
    'toolbar_tbHisDl' : 'Скачать',   // 下载

    'toolbar_miniUpload_title' : 'Загрузить файл',   // 上传文件

    // display-mode
    'toolbar_tbText_title' : 'Просмотр в виде списка',   // 切换到列表视图
    'toolbar_tbText' : 'Список',   // 列表视图
    'toolbar_tbPic_title' : 'Просмотр в виде эскизов',   // 切换到大图视图
    'toolbar_tbPic' : 'Эскизы',   // 大图标视图

    // sort
    'toolbar_name' : 'Имя',   // 文件名
    'toolbar_fsize' : 'Размер',   // 大小
    'toolbar_newUpload' : 'Последние',   // 最近上传 (Недавно загруженные)
    'toolbar_fmtime' : 'Дата',   // 修改日期
    'toolbar_delDate' : 'Дата',   // 删除日期
    'toolbar_shareDate' : 'Дата',   // 日期

    'crumb_back' : 'Назад',   // 返回上一级
    'crumb_firstItem' : 'Все файлы',   // 全部文件
    'crumb_recyclePrompt' : '(Советы: файлы в корзине не занимают облачного пространства, и сохраняются в течение 90 дней, после чего будут автоматически удалены.)',   // （温馨提示：回收站文件不占用您云盘空间，保留90天后将自动删除。）

    'column_name' : 'Имя файла',   // 文件名
    'column_size' : 'Размер',   // 大小
    'column_time' : 'Дата',   // 修改日期
    'column_code' : 'Код',   // 提取码
    'column_hit' : 'Загрузки',   // 下载次数

    'fileListHistory_columnHisversionid' : 'Версия',   // 时光号
    'fileListHistory_columnHissize' : 'Размер',   // 大小
    'fileListHistory_columnHistime' : 'Дата изменения',   // 修改日期

    'loadingMask' : 'Загрузка списка файлов...',   // 加载文件列表中...

    // x-yp
    'x_rename' : 'Переименовать',   // 重命名
    'x_sfilemove' : 'Переместить',   // 移动
    'x_moveoutsfile' : 'Из сейфа',   // 转出文件保险箱
    'x_filehistory' : 'История',   // 文件时光机
    'x_move' : 'Переместить',   // 移动
    'x_moveinsfile' : 'В сейф',   // 转入文件保险箱
    'x_offline' : 'Загрузить оффлайн',   // 离线下载
    'x_opendoc' : 'Посмотреть онлайн',   // 在线查看
    'x_dl' : 'Скачать',   // 下载
    'x_packDl' : 'Скачать',   // 下载
    'x_del' : 'Удалить',   // 删除
    'x_restore' : 'Восстановить',   // 还原
    'x_diskdel' : 'Удалить',   // 删除
    'x_moveinfile' : 'В сейф',   // 转入文件保险箱
    'x_link' : 'Общий доступ',   // 分享
    'x_linkBatch' : 'Общий доступ',   // 分享
    'x_dellink' : 'Отменить общий доступ',   // 取消分享
    'x_linkView' : 'Просмотреть ссылки',   // 查看分享链接
    'x_linkDel' : 'Отменить общий доступ',   // 取消分享
    'x_linkCopy' : 'Копировать ссылку',   // 复制分享链接
    'x_extractOn' : 'Возможность извлечения кода',   // 启用提取码
    'x_extractOff' : 'Отмена извлечения кода',   // 取消提取码
    'x_upload' : 'Загрузить файл',   // 上传文件
    'x_new' : 'Новая папка',   // 新建文件夹
    'x_refresh' : 'Обновить',   // 刷新
    'x_copyPwd' : 'Копировать',   // 复制

    'BasePanel_closeLink' : 'Закрыть',   // 关闭
    'BasePanel_minimizeLink' : 'Минимизитовать',   // 关闭

    'BasePanel1_hd' : 'Загрузка файлов в облако',   // 上传文件到360云盘
    'BasePanel1_pluginTip' : 'Установите плагин для ускорения и загрузки больших файлов. ',   // 当前浏览器可升级为“云加速上传”，支持文件秒传、断点续传、大文件上传
    'BasePanel1_pluginTip_a' : 'Установить плагин',   // 安装升级控件
    'BasePanel1_selectFileBtn' : 'Выбрать',   // 添加文件
    'BasePanel1_fileSelect' : 'Файл',   // 添加文件
    'BasePanel1_folderSelect' : 'Папку',   // 添加文件夹
    'BasePanel1_YPUpload2' : 'Пожалуйста, выберите файл для загрузки',   // 请选择要上传的文件
    'BasePanel1_uploadDeny1' : 'Не могут быть загружены в текущий каталог, вы можете загрузить в каталог',   // 不可上传至当前目录，可上传至“
    'BasePanel1_uploadDeny2' : 'и его подпапки',   // ”中及其子文件
    'BasePanel1_uploadDeny_s' : 'Все файлы',   // 全部文件
    'BasePanel1_uploadPath' : 'В: ',   // 到：
    'BasePanel1_networkAbnormalTip' : 'Проблемы с сетью, загрузка приостановлена. Пожалуйста, проверьте вашу сеть',   // 网络异常，上传暂停。请检查您的网络
    'BasePanel1_dragTip' : 'Перетащите файлы для загрузки',   // 试试将电脑里的文件拖拽到此上传
    'BasePanel1_dragTip_p' : '(Ваш браузер поддерживает перетаскивание)',   // （您的浏览器支持此拖拽功能）
//    'BasePanel1_uploadTips_p1' : 'Макс. размер файла 360Мб ',   // 网页版单文件最大支持360M，
    'BasePanel1_uploadTips_p1' : 'Для загрузки файлов больше 360Мб (до 10Гб) ',   // 网页版单文件最大支持360M，
    'BasePanel1_uploadTips_p2' : ' для загрузки файлов 10Гб',   // ，上传10G超大文件
    'BasePanel1_uploadTips_a' : 'установить клиент PC',   // 安装PC客户端
    'BasePanel1_uploadStatusBtn' : 'Завершить',   // 完成
    'BasePanel1_warningNote' : 'Инструкция',   // 上传须知
    'BasePanel1_H_tooltip' : '360 запрещает загружать, посылать, передавать или любым другим способом размещать и/или распространять контент, который является незаконным, вредоносным, клеветническим, оскорбляет нравственность, демонстрирует (или является пропагандой) насилия и жестокости, нарушает права интеллектуальной собственности, пропагандирует ненависть и/или дискриминацию людей по расовому, этническому, половому, религиозному, социальному признакам, содержит оскорбления в адрес каких-либо лиц или организаций, содержит элементы (или является пропагандой) порнографии, детской эротики.',   // 严禁利用360云盘存储、下载、传播暴力恐怖音视频，以及其他任何非法、有害信息，一经发现将严格按照相关法律法规处理。
    'BasePanel1_em' : 'Отменить',   // 取消
    'BasePanel1_info1' : 'Загружено: ',   // 已上传：
    'BasePanel1_info2' : 'Скорость: ',   // 速度：
    'BasePanel1_info3' : 'Осталось: ',   // 剩余时间：

    'BasePanel2_hd' : 'Управление задачами',   // 任务管理
    'BasePanel2_offdlTitle1' : 'Последние ',   // 最近
    'BasePanel2_offdlTitle2' : ' оффлайн загрузок',   // 离线下载任务记录
    'BasePanel2_offdlBtnCreate' : 'Создать',   // 新建普通下载
    'BasePanel2_columnName' : 'Имя',   // 任务名
    'BasePanel2_columnSize' : 'Размер',   // 大小
    'BasePanel2_columnStatus' : 'Статус',   // 下载状态
    'BasePanel2_columnOp' : 'Операция',   // 操作
    'BasePanel2_offdlSaveTip1' : 'Файлы сохраняется в ',   // 离线下载的文件统一保存到
    'BasePanel2_offdlSaveTip2' : ' папке',   // 文件夹里
    'BasePanel2_offdlSaveTip_s' : '[специальной]',   // [来自-离线下载的文件]
    'BasePanel2_background' : 'В фоне',   // 后台运行
    'BasePanel2_clean' : 'Очистить',   // 清空历史记录

    'BasePanel3_hd' : 'Новая загрузка в автономном режиме',   // 新建离线下载任务
    'BasePanel3_offdlTitle' : 'Пожалуйста, введите адрес ссылки, для скачивания файла:',   // 请输入要下载的文件链接地址：
    'BasePanel3_placeholder' : 'Поддержка HTTP, FTP ссылок',   // 支持HTTP、FTP链接下载
    'BasePanel3_cancel' : 'Отмена',   // 取消
    'BasePanel3_start' : 'Начать',   // 开始下载

    'PanelFileBox_hd' : 'Переместить файл (папку)',   // 移动文件（夹）
    'PanelFileBox_msg' : 'Выберите место для перемещения',   // 选择移动到的位置
    'PanelFileBox_move' : 'Переместить',   // 确定移动
    'PanelFileBox_cancel' : 'Отмена',   // 取消

    '' : ''   //
};


if (window.location.pathname === '/') {
    translate_header();
    translate_footer();
    translate_loginPanel();
    translate_downloadList();
    replace_slides();
}

if (window.location.pathname.indexOf('/reg') === 0) {

    translate_header();
    translate_footer();

    var reg_node = document.getElementById('reg');
    console.log(reg_node);
    reg_node.addEventListener('DOMNodeInserted', function (ev) {
        if (ev.target.id == 'modRegWrap') {
            translate_regPanel();
        }
    }, false);
}

if (window.location.pathname.indexOf('/my') === 0) {

    rename('title', 'text', dict.my_title);

    translate_topPanel();
    translate_userInfo();
    translate_leftPanel();
    translate_search();
    translate_setupPlugin();
    translate_toolbar();
    translate_sort();
    translate_displayMode();
    translate_fileListHistory();
    translate_column();

    document.addEventListener("DOMNodeInserted", function (ev) {
        if (ev.target.id === 'loadingMask') {
            translate_loadingMask();
        }
        if (ev.target.id === 'x-yp-1') {
            translate_x_yp_1();
        }
        if (ev.target.id === 'x-yp-2') {
            translate_x_yp_2();
        }
        if (ev.target.id === 'x-yp-3') {
            translate_x_yp_3();
        }
        if (ev.target.id === 'x-yp-4') {
            translate_x_yp_4();
        }
        if (ev.target.id === 'list') {
            translate_copyBox();
        }
        if (ev.target.id.indexOf('BasePanel') === 0) {
            if (ev.target.getElementsByClassName('upload-toolbar').length) {
                translate_PanelUpload(ev.target.id);
                ev.target.addEventListener("DOMNodeInserted", function () {
                    translate_PanelUpload(ev.target.id);
                }, false);
            }
            if (ev.target.getElementsByClassName('offdl-dia').length) {
                translate_PanelOffdl(ev.target.id);
                ev.target.addEventListener("DOMNodeInserted", function () {
                    translate_PanelOffdl(ev.target.id);
                }, false);
            }
            if (ev.target.getElementsByClassName('offdl-dia-create').length) {
                translate_PanelOffdlCreate(ev.target.id);
            }
            if (ev.target.getElementsByClassName('fileBox').length) {
                translate_PanelFileBox(ev.target.id);
                ev.target.addEventListener("DOMNodeInserted", function () {
                    translate_PanelFileBox(ev.target.id);
                }, false);
            }
        }
    }, false);

    document.getElementById('crumb').addEventListener("DOMNodeInserted", function () {
        translate_crumb();
    }, false);
    document.getElementById('fileListHead').addEventListener("DOMNodeInserted", function () {
        translate_column();
    }, false);
}

function rename (sel, attr, text, nn) {
    var noda;
    if (!nn) nn = 0;
    if (noda = document.querySelectorAll(sel)) {
        for (var i=0; i<noda.length; i++) {
            switch (attr) {
                case 'text':
                    var ch = noda[i].childNodes;
                    for (var j=nn; j<ch.length; j++) {
                        if (ch[j].nodeName === '#text') {
                            ch[j].textContent = text;
                            break;
                        }
                    }
                    break;
                case 'title':
                    noda[i].title = text;
                    break;
                case 'placeholder':
                    noda[i].placeholder = text;
                    break;
                case 'value':
                    noda[i].value = text;
                    break;
                default:
                    break;
            }
        }
    }
}

function translate_header() {
    rename('title', 'text', dict.title);
    rename('a.logo', 'text', dict.logo);
    rename('.nav a[href="http://huodong.yunpan.360.cn/xt"]', 'text', dict.nav_36);
    rename('.nav a[href="/"]', 'text', dict.nav_home);
    rename('.nav a[href="http://qun.yunpan.360.cn/"]', 'text', dict.nav_group);
    rename('.nav a[href="/index/download"]', 'text', dict.nav_download);
    rename('.nav a[href^="http://bbs.360safe.com/forum.php"]', 'text', dict.nav_forum);
    document.getElementsByClassName('nav')[0].getElementsByTagName('li')[0].style.padding = '0 30px 0 0';
}

function translate_footer() {
    rename('.footer a[href="/resource/html/agreement.html"]', 'text', dict.footer_agreement);
    rename('.footer a[href="http://www.360.cn/privacy/v2/360yunpan.html"]', 'text', dict.footer_privacy);
    rename('.footer a[href="/index/releasenote"]', 'text', dict.footer_releasenote);
    rename('.footer a[href="/index/help"]', 'text', dict.footer_help);
    rename('.footer a[href^="http://bbs.360safe.com/forum.php"]', 'text', dict.footer_forum);
    rename('.footer a[href="mailto:360report@360.cn"]', 'text', dict.footer_mailto);
}

function translate_loginPanel() {
    rename('.login-panel h1', 'text', dict.login_title);
    rename('#modLoginWrap .login-error-msg', 'text', dict.login_error);
    rename('#loginAccount', 'placeholder', dict.login_account);
    rename('#lpassword', 'placeholder', dict.login_password);
    rename('#phraseLogin', 'placeholder', dict.login_phrase);
    rename('#loginForm label[for="iskeepalive"]', 'text', dict.login_keep);
    rename('#findPwd', 'text', dict.login_findPwd);
    rename('#loginSubmit', 'value', dict.login_submit);
    rename('.login-panel a[href="http://yunpan.360.cn/reg"]', 'text', dict.login_reg);
    rename('#infobarNoCookie', 'text', dict.login_noCookie);
    rename('#infobarNoCookie a', 'text', dict.login_opencookie);
    rename('label[for="loginAccount"]', 'text', dict.login_account_label);
    rename('label[for="lpassword"]', 'text', dict.login_password_label);
    rename('label[for="phraseLogin"]', 'text', dict.login_phrase_label);
    rename('#lwm', 'title', dict.login_lwm);
    rename('#refreshCaptchaLogin', 'text', dict.login_refreshCaptchaLogin);
    rename('#tips-phraseLogin', 'text', dict.login_tipsPhraseLogin);
    rename('.submit .reg-new-account', 'text', dict.login_regNewAccount);
    rename('#infoPanel .go-my', 'text', dict.login_goMy);
    rename('#infoPanel p', 'text', dict.login_info_p);
    rename('#infoPanel a[href^="/user/logout"]', 'text', dict.login_logout);

    var err;
    if (err = document.querySelector('#login .login-error-msg')) {
        err.addEventListener("DOMNodeInserted", function () {
            rename('#login .login-error-msg', 'text', dict.login_loginErrorMsg);
        }, false);
    }
}

function translate_downloadList() {
    rename('.download-list a[href="http://down.360safe.com/yunpan/360yunpan_setup.exe"]', 'text', dict.login_dl_pc);
    rename('.download-list a[href="http://down.360safe.com/yunpan/360yunpan_mac.pkg"]', 'text', dict.login_dl_mac);
    var dl = document.querySelectorAll('.other-list a');
    for (var i=0; i<dl.length; i++) {
        dl[i].style.width = 'auto';
        dl[i].style.paddingLeft = '10px';
        dl[i].style.paddingRight = '10px';
    }
    var qrcode = document.getElementsByClassName('qrcode-download-desc')[0];
    qrcode.textContent = dict.login_qrcode;
    qrcode.style.width = '115px';
}

function replace_slides() {
    var slides = document.querySelectorAll('.slide img');
    for (var j=0; j<slides.length; j++) {
        slides[j].setAttribute('src', 'http://lorempixel.com/960/388/city/'+Math.floor(Math.random()*10));
        slides[j].parentNode.getElementsByClassName('btn')[0].style.background = 'none';
    }
}

function translate_regPanel() {
    document.querySelector('h1.reg-title').textContent = dict.reg_title;
    document.querySelector('label[for="loginEmail"]').textContent = dict.reg_email;
    document.getElementById('tips-loginEmail').childNodes[0].textContent = dict.reg_tips_loginEmail;
    document.querySelector('#tips-loginEmail a').textContent = dict.reg_fac_email;
    document.querySelector('label[for="password"]').textContent = dict.reg_password;
    document.getElementById('tips-password').textContent = dict.reg_tips_password;
    document.querySelector('label[for="rePassword"]').textContent = dict.reg_repassword;
    document.getElementById('tips-rePassword').textContent = dict.reg_tips_repassword;
    document.querySelector('label[for="is_agree"]').childNodes[1].textContent = dict.reg_agree;
    document.querySelector('label[for="is_agree"] + a').textContent = dict.reg_fac_agree;
    document.getElementById('regSubmitBtn').value = dict.reg_submit;
    document.getElementById('regSubmitBtn').text = dict.reg_submit;
    document.querySelector('label[for="rePassword"]').style.left = '-105px';
    document.querySelector('label[for="rePassword"]').style.width = '95px';
    document.querySelector('label[for="loginEmail"]').style.lineHeight = '18px';
    document.querySelector('label[for="rePassword"]').style.lineHeight = '18px';
}

function translate_topPanel() {
    document.getElementById('logo').title = dict.topPanel_logo;
    document.querySelector('#topPanel .pan').textContent = dict.topPanel_file;
    document.querySelector('#topPanel .pan').title = dict.topPanel_file_title;
    document.querySelector('#topPanel .xiangce').textContent = dict.topPanel_xiangce;
    document.querySelector('#topPanel .xiangce').title = dict.topPanel_xiangce_title;
    document.querySelector('#topPanel .collect').textContent = dict.topPanel_collect;
    document.querySelector('#topPanel .collect').title = dict.topPanel_collect_title;
    document.querySelector('#topPanel .more').textContent = dict.topPanel_more;
    document.querySelector('#topPanel .more').title = dict.topPanel_more_title;
    var nav_a = document.querySelectorAll('.nav-bar a');
    for (var i=0; i<nav_a.length; i++) {
        nav_a[i].style.width = 'auto';
        nav_a[i].style.background = 'none';
        nav_a[i].style.textIndent = '0';
        nav_a[i].style.lineHeight = '56px';
        nav_a[i].style.fontSize = '20px';
        nav_a[i].style.color = '#fff';
    }
}

function translate_userInfo() {
    document.querySelector('#profile .text').textContent = dict.userInfo_profile;
    document.querySelector('#userInfo a[href="http://yunpan.360.cn/userAuth"] .text').textContent = dict.userInfo_auth;
    document.querySelector('#saveMessage .text').textContent = dict.userInfo_message;
    document.querySelector('#ypLevel .text').textContent = dict.userInfo_ypLevel;
    document.querySelector('#volRecords .text').textContent = dict.userInfo_volRecords;
    document.querySelector('#recharge .text').textContent = dict.userInfo_recharge;
    document.querySelector('#inviteFri .text').textContent = dict.userInfo_inviteFri;
    document.querySelector('#tpFeedback .text').textContent = dict.userInfo_tpFeedback;
    document.querySelector('#tpHelp .text').textContent = dict.userInfo_tpHelp;
    document.querySelector('#lottery-everyday .text').textContent = dict.userInfo_lottery;
    document.querySelector('#tpExit .text').textContent = dict.userInfo_tpExit;
    document.querySelector('.user-info-wrap').style.width = '120px';
}

function translate_leftPanel() {
    document.querySelector('#leftPanel .tab-file .text').textContent = dict.leftPanel_file;
    document.querySelector('#leftPanel .tab-sFile .text').textContent = dict.leftPanel_sFile;
    document.querySelector('#leftPanel .tab-link .text').textContent = dict.leftPanel_link;
//    document.querySelector('#leftPanel .tab-group .text').textContent = dict.leftPanel_group;
    document.querySelector('#leftPanel .tab-recycle .text').textContent = dict.leftPanel_recycle;
    document.querySelector('#leftPanel .update-space').textContent = dict.leftPanel_space;
}

function translate_search() {
    rename('#searchPlaceholder', 'text', dict.mainPanel_search);
    rename('#searchInput', 'placeholder', dict.mainPanel_search);
}

function translate_setupPlugin() {
    rename('#pluginTip span', 'text', dict.mainPanel_pluginTip);
    rename('#pluginTip .download', 'text', dict.mainPanel_download);
    rename('#pluginSetupSuccess', 'text', dict.mainPanel_pluginSetupSuccess);
}

function translate_sort() {
    rename('.sort .name', 'text', dict.toolbar_name);
    rename('.sort .fsize', 'text', dict.toolbar_fsize);
    rename('.sort .new-upload', 'text', dict.toolbar_newUpload);
    rename('.sort .fmtime', 'text', dict.toolbar_fmtime);
    rename('.sort .del-date', 'text', dict.toolbar_delDate);
    rename('.sort .share-date', 'text', dict.toolbar_shareDate);
    var sort_a = document.querySelectorAll('#toolbar .sort a');
    for (var i=0; i<sort_a.length; i++) {
        sort_a[i].style.fontFamily = 'inherit';
    }
}

function translate_displayMode() {
    rename('#tbText', 'title', dict.toolbar_tbText_title);
    rename('#tbText .cmd', 'text', dict.toolbar_tbText);
    rename('#tbPic', 'title', dict.toolbar_tbPic_title);
    rename('#tbPic .cmd', 'text', dict.toolbar_tbPic);
}

function translate_toolbar() {
    // btns-filelist
    rename('#tbUpload .label', 'text', dict.toolbar_tbUpload);
    rename('#tbNew .label', 'text', dict.toolbar_tbNew);
    rename('#tbOffline .label', 'text', dict.toolbar_tbOffline);
    rename('#tbDl .label', 'text', dict.toolbar_tbDl);
    rename('#tbPackDl .label', 'text', dict.toolbar_tbPackDl);
    rename('#tbDel .label', 'text', dict.toolbar_tbDel);
    rename('#tbLink .label', 'text', dict.toolbar_tbLink);
    rename('#tbLinkBatch .label', 'text', dict.toolbar_tbLinkBatch);
    rename('#tbMore .label', 'text', dict.toolbar_tbMore);

    // btns-sfilelist
    rename('#tdMoveOut .label', 'text', dict.toolbar_tdMoveOut);
    rename('#tbLockSfile .label', 'text', dict.toolbar_tbLockSfile);

    // btns-link
    rename('#tbLinkView .label', 'text', dict.toolbar_tbLinkView);
    rename('#tbLinkDel .label', 'text', dict.toolbar_tbLinkDel);
    rename('#tbExtractOn .label', 'text', dict.toolbar_tbExtractOn);
    rename('#tbExtractOff .label', 'text', dict.toolbar_tbExtractOff);
    rename('#tbLinkCopy .label', 'text', dict.toolbar_tbLinkCopy);
    rename('.share-top-tip', 'text', dict.toolbar_shareTopTip);
    rename('.share-top-tip a', 'text', dict.toolbar_shareTopTip_a);

    // btns-recycle
    rename('#tbRestore .label', 'text', dict.toolbar_tbRestore);
    rename('#tbDisdel .label', 'text', dict.toolbar_tbDisdel);
    rename('#tbClearall .label', 'text', dict.toolbar_tbClearall);
    rename('#tbOpenPassword .label', 'text', dict.toolbar_tbOpenPassword);
    rename('#tbOpenPasswordDone .label', 'text', dict.toolbar_tbOpenPasswordDone);
    document.getElementById('tbDisdel').style.width = 'auto';

    // btns-hisfile
    rename('#tbHisReFile', 'title', dict.toolbar_tbHisReFile_title);
    rename('#tbHisReFile .label', 'text', dict.toolbar_tbHisReFile);
    rename('#tbHisView .label', 'text', dict.toolbar_tbHisView);
    rename('#tbHisViewPic .label', 'text', dict.toolbar_tbHisViewPic);
    rename('#tbHisDl .label', 'text', dict.toolbar_tbHisDl);

    rename('.mini-upload', 'title', dict.toolbar_miniUpload_title);
}

function translate_fileListHistory() {
    rename('.column-hisversionid span', 'text', dict.fileListHistory_columnHisversionid);
    rename('.column-hissize span', 'text', dict.fileListHistory_columnHissize);
    rename('.column-histime span', 'text', dict.fileListHistory_columnHistime);
}

function translate_crumb() {
    var crumb;
    rename('#crumb .back', 'text', dict.crumb_back);
    rename('#crumb .first-item', 'text', dict.leftPanel_file);
    rename('#crumb .first-item', 'title', dict.leftPanel_file);
    rename('#crumb .gohome', 'text', document.querySelector('#leftPanel .nav .current .text').textContent);
    rename('#crumb .gohome', 'title', document.querySelector('#leftPanel .nav .current .text').textContent);
    rename('#crumb .recycle-prompt', 'text', dict.crumb_recyclePrompt);
    if (crumb = document.querySelector('#crumb .back')) {
        crumb.style.width = 'auto';
    }
}

function translate_column() {
    rename('#fileListHead .column-name .file-sort', 'text', dict.column_name);
    rename('#fileListHead .column-size .file-sort', 'text', dict.column_size);
    rename('#fileListHead .column-time .file-sort', 'text', dict.column_time);
    rename('#fileListHead .column-code', 'text', dict.column_code);
    rename('#fileListHead .column-hit', 'text', dict.column_hit);
}

function translate_loadingMask() {
    rename('#loadingMask span', 'text', dict.loadingMask);
}

function translate_x_yp_1() {
    rename('#x-yp-1 .rename .text', 'text', dict.x_rename);
    rename('#x-yp-1 .sfilemove .text', 'text', dict.x_sfilemove);
    rename('#x-yp-1 .moveoutsfile-menu .text', 'text', dict.x_moveoutsfile);
    rename('#x-yp-1 .filehistory .text', 'text', dict.x_filehistory);
}
function translate_x_yp_2() {
    rename('#x-yp-2 .rename .text', 'text', dict.x_rename);
    rename('#x-yp-2 .move .text', 'text', dict.x_move);
    rename('#x-yp-2 .moveinsfile .text', 'text', dict.x_moveinsfile);
    rename('#x-yp-2 .offline-menu .text', 'text', dict.x_offline);
    rename('#x-yp-2 .filehistory .text', 'text', dict.x_filehistory);
}
function translate_x_yp_3() {
    rename('#x-yp-3 .opendoc .text', 'text', dict.x_opendoc);
    rename('#x-yp-3 .dl .text', 'text', dict.x_dl);
    rename('#x-yp-3 .pack-dl .text', 'text', dict.x_packDl);
    rename('#x-yp-3 .del .text', 'text', dict.x_del);
    rename('#x-yp-3 .rename .text', 'text', dict.x_rename);
    rename('#x-yp-3 .move .text', 'text', dict.x_move);
    rename('#x-yp-3 .sfilemove .text', 'text', dict.x_sfilemove);
    rename('#x-yp-3 .restore .text', 'text', dict.x_restore);
    rename('#x-yp-3 .diskdel .text', 'text', dict.x_diskdel);
    rename('#x-yp-3 .moveinsfile .text', 'text', dict.x_moveinsfile);
    rename('#x-yp-3 .moveoutsfile .text', 'text', dict.x_moveoutsfile);
    rename('#x-yp-3 .filehistory .text', 'text', dict.x_filehistory);
    rename('#x-yp-3 .link .text', 'text', dict.x_link);
    rename('#x-yp-3 .link-batch .text', 'text', dict.x_linkBatch);
    rename('#x-yp-3 .dellink .text', 'text', dict.x_dellink);
    rename('#x-yp-3 .link-view .text', 'text', dict.x_linkView);
    rename('#x-yp-3 .link-del .text', 'text', dict.x_linkDel);
    rename('#x-yp-3 .link-copy .text', 'text', dict.x_linkCopy);
    rename('#x-yp-3 .extract-on .text', 'text', dict.x_extractOn);
    rename('#x-yp-3 .extract-off .text', 'text', dict.x_extractOff);
}
function translate_x_yp_4() {
    rename('#x-yp-4 .upload .text', 'text', dict.x_upload);
    rename('#x-yp-4 .new .text', 'text', dict.x_new);
    rename('#x-yp-4 .refresh .text', 'text', dict.x_refresh);
}

function translate_copyBox() {
    rename('#fileList .copy-box a', 'text', dict.x_copyPwd);
}

function translate_PanelUpload(id) {
    id = '#' + id;
    rename(id+' .hd h3', 'text', dict.BasePanel1_hd);
    rename(id+' .plugin-tip', 'text', dict.BasePanel1_pluginTip);
    rename(id+' .plugin-tip a', 'text', dict.BasePanel1_pluginTip_a);
    rename(id+' .file-select', 'text', dict.BasePanel1_fileSelect);
    rename(id+' .folder-select', 'text', dict.BasePanel1_folderSelect);
    rename(id+' #YPUpload-2', 'title', dict.BasePanel1_YPUpload2);
    rename(id+' .uploadDeny', 'text', dict.BasePanel1_uploadDeny1, 0);
    rename(id+' .uploadDeny', 'text', dict.BasePanel1_uploadDeny2, 1);
    rename(id+' .uploadDeny span', 'text', dict.BasePanel1_uploadDeny_s);
    rename(id+' .uploadPath', 'text', dict.BasePanel1_uploadPath);

    rename(id+' .network-abnormal-tip', 'text', dict.BasePanel1_networkAbnormalTip);
    rename(id+' .drag-tip h1', 'text', dict.BasePanel1_dragTip);
    rename(id+' .drag-tip p', 'text', dict.BasePanel1_dragTip_p);
    rename(id+' .upload-tips p:first-child', 'text', dict.BasePanel1_uploadTips_p1);
//    rename(id+' .upload-tips p:last-child', 'text', dict.BasePanel1_uploadTips_p2);
    rename(id+' .upload-tips p:last-child', 'text', '');
    rename(id+' .upload-tips a', 'text', dict.BasePanel1_uploadTips_a);
    rename(id+' #uploadStatusBtn', 'text', dict.BasePanel1_uploadStatusBtn);
    rename(id+' .minimize-link span', 'text', dict.BasePanel_minimizeLink);
    rename(id+' .close-link span', 'text', dict.BasePanel_closeLink);
    document.querySelector(id+' .drag-tip').style.background = 'none';
    document.querySelector(id+' .drag-tip h1').style.display = 'block';
    document.querySelector(id+' .drag-tip p').style.display = 'block';
    var path = document.getElementById('curUploadPath').textContent;
    var new_path = dict.leftPanel_file;
    if (path.indexOf('/') >= 0) {
        var dir = path.slice(path.indexOf('/'));
        new_path = dict.leftPanel_file+dir;
    }
    rename(id+' #curUploadPath', 'text', new_path);
    rename(id+' #curUploadPath', 'title', new_path);

//    var btn_wrap = document.querySelector('#BasePanel1 .jx-select-file');
    var btn = document.querySelector(id+' .jx-select-file-btn');
//    btn_wrap.style.width = 'auto';
//    btn_wrap.height = 'auto';
    btn.classList.add('y-btn');
    btn.classList.add('y-btn-blue');
//    btn.style.width = 'auto';
//    btn.style.height = 'auto';
    if (!btn.querySelector('.text')) {
        var sp = document.createElement('span');
        sp.classList.add('text');
        sp.style.position = 'absolute';
        sp.style.width = '100%';
        sp.style.height = '100%';
        sp.style.left = '-16px';
        sp.style.top = '6px';
        sp.textContent = dict.BasePanel1_selectFileBtn;
        btn.appendChild(sp);
    }
    rename(id+' .warning-note a', 'text', dict.BasePanel1_warningNote);
    rename(id+' #H_tooltip p', 'text', dict.BasePanel1_H_tooltip);
    rename(id+' #H_tooltip p+p', 'text', '');

    rename(id+' #uploadItemList .info', 'text', dict.BasePanel1_info1, 0);
    rename(id+' #uploadItemList .info', 'text', dict.BasePanel1_info2, 2);
    rename(id+' #uploadItemList .info', 'text', dict.BasePanel1_info3, 4);
    rename(id+' #uploadItemList li em', 'text', dict.BasePanel1_em);
    rename(id+' #uploadItemList li em', 'title', dict.BasePanel1_em);
}

function translate_PanelOffdl(id) {
    id = '#' + id;
    rename(id+' .hd h3', 'text', dict.BasePanel2_hd);
    rename(id+' .offdl-title', 'text', dict.BasePanel2_offdlTitle1, 0);
    rename(id+' .offdl-title', 'text', dict.BasePanel2_offdlTitle2, 1);
    rename(id+' .offdl-btn-create .label', 'text', dict.BasePanel2_offdlBtnCreate);
    rename(id+' .column-name', 'text', dict.BasePanel2_columnName);
    rename(id+' .column-size', 'text', dict.BasePanel2_columnSize);
    rename(id+' .column-status', 'text', dict.BasePanel2_columnStatus);
    rename(id+' .column-op', 'text', dict.BasePanel2_columnOp);
    rename(id+' .offdl-save-tip', 'text', dict.BasePanel2_offdlSaveTip1, 0);
    rename(id+' .offdl-save-tip', 'text', dict.BasePanel2_offdlSaveTip2, 1);
    rename(id+' .offdl-save-tip strong', 'text', dict.BasePanel2_offdlSaveTip_s);
    rename(id+' .offdl-btn-box .y-btn .label', 'text', dict.BasePanel2_background);
    rename(id+' .offdl-btn-box .y-btn:last-child .label', 'text', dict.BasePanel2_clean);
    rename(id+' .close-link span', 'text', dict.BasePanel_closeLink);
}

function translate_PanelOffdlCreate(id) {
    id = '#' + id;
    rename(id+' .hd h3', 'text', dict.BasePanel3_hd);
    rename(id+' .offdl-title', 'text', dict.BasePanel3_offdlTitle);
    rename(id+' .offdl-placeholder', 'text', dict.BasePanel3_placeholder);
    rename(id+' #offdlUrl', 'placeholder', dict.BasePanel3_placeholder);
    rename(id+' .offdl-save-tip', 'text', dict.BasePanel2_offdlSaveTip1, 0);
    rename(id+' .offdl-save-tip', 'text', dict.BasePanel2_offdlSaveTip2, 1);
    rename(id+' .offdl-save-tip strong', 'text', dict.BasePanel2_offdlSaveTip_s);
    rename(id+' .offdl-btn-box .y-btn', 'text', dict.BasePanel3_cancel);
    rename(id+' .offdl-btn-box .y-btn:last-child', 'text', dict.BasePanel3_start);
    rename(id+' .close-link span', 'text', dict.BasePanel_closeLink);
}

function translate_PanelFileBox(id) {
    id = '#' + id;
    rename(id+' .hd h3', 'text', dict.PanelFileBox_hd);
    rename(id+' h3.msg', 'text', dict.PanelFileBox_msg);
    rename(id+' .root-node strong', 'text', dict.leftPanel_file);
    rename(id+' .y-btn.move', 'text', dict.PanelFileBox_move);
    rename(id+' .y-btn.y-btn-gray', 'text', dict.PanelFileBox_cancel);
    rename(id+' .close-link span', 'text', dict.BasePanel_closeLink);
}