const moment  = require("moment");

module.exports = Object.freeze({
    CALENDAR_INITIAL_EVENTS : [
        {title : "Созвон", theme : "GREEN", startTime : moment().add(-12, 'd').startOf('day'), endTime : moment().add(-12, 'd').endOf('day')},
        {title : "Встреча с техниками", theme : "PINK", startTime : moment().add(-8, 'd').startOf('day'), endTime : moment().add(-8, 'd').endOf('day')},
        {title : "Созвон", theme : "GREEN", startTime : moment().startOf('day'), endTime : moment().endOf('day')},
        {title : "Встреча с клиентом", theme : "PURPLE", startTime : moment().startOf('day'), endTime : moment().endOf('day')},
        {title : "Встреча с клиентом", theme : "ORANGE", startTime : moment().add(3, 'd').startOf('day'), endTime : moment().add(3, 'd').endOf('day')},
        {title : "Встреча по проекту", theme : "PINK", startTime : moment().add(5, 'd').startOf('day'), endTime : moment().add(5, 'd').endOf('day')},
        {title : "Встреча по поводу продаж", theme : "GREEN", startTime : moment().add(8, 'd').startOf('day'), endTime : moment().add(8, 'd').endOf('day')},
    ],

    RECENT_TRANSACTIONS : [
        {name : "Kiv", avatar : "https://preview.redd.it/jay-jo-pants-v0-4zfof2hv3b0b1.jpg?width=640&crop=smart&auto=webp&s=534da6f1b145b64f0c4b8f865488b424023ed62a", 
        email : "kiv@gmail.com", location : "Москва", amount : 10000, date : moment().endOf('day')},
        {name : "Александр", avatar : "https://yt3.googleusercontent.com/pU1CjXA_sqq-VXXAtRJqpQTbqnBBmR0hBzO3c3F_FTeU-VDitgQVohwchyfmiFuU3xwjMTN7PA=s900-c-k-c0x00ffffff-no-rj", 
        email : "alexandr@gmail.com.com", location : "Москва", amount : 190, date : moment().add(-1, 'd').endOf('day')},
        {name : "Илья", avatar : "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/1037354_v9_bb.jpg",
         email : "ilya@gmail.com.com", location : "Москва", amount : 112, date : moment().add(-1, 'd').endOf('day')},
        {name : "Арсений", avatar : "https://www.rollingstone.com/wp-content/uploads/2023/11/Travis-Scott-Talks-Astroworld.jpg?w=1581&h=1054&crop=1",
         email : "arseniy@gmail.com.com", location : "Москва", amount : 111, date : moment().add(-1, 'd').endOf('day')},
        {name : "Максим", avatar : "https://lohslakeviews.com/wp-content/uploads/2022/04/yeat-what-you-need-to-know-900x796.jpg", 
        email : "maks1@gmail.com.com", location : "Нижний Новгород", amount : 190, date : moment().add(-2, 'd').endOf('day')},
        {name : "Леонид", avatar : "https://the-flow.ru/uploads/images/resize/830x0/adaptiveResize/04/12/44/27/49/172246e40cd7.jpg", 
        email : "leonid@gmail.com.com", location : "Кстово", amount : 230, date : moment().add(-2, 'd').endOf('day')},
        {name : "Максим", avatar : "https://is1-ssl.mzstatic.com/image/thumb/AMCArtistImages126/v4/63/21/ee/6321ee1a-fd94-cc0f-aa2c-2d38b6374489/07031c4f-d89c-4f88-ab80-314c5210748f_file_cropped.png/375x375bb.jpg", 
        email : "maks2@gmail.com.com", location : "Ярославль", amount : 331, date : moment().add(-2, 'd').endOf('day')},
    
    ]
});
