export default {
    createMail,
    // creatMails,
    getEmailsToRender, 
    getEmailById
}

let gMails =[{

    subject: 'Wassap?',
    body: 'Pick up!',
    isRead: false,
    sentAt: 1551133930594
},

{

    subject: 'Wassap?',
    body: 'Pick up!',
    isRead: false,
    sentAt: 1551133930594
},

{

    subject: 'asdas?',
    body: 'asd!',
    isRead: false,
    sentAt: 1551133930594
},

{

    subject: 'asdasd?',
    body: 'Pasdp!',
    isRead: false,
    sentAt: 1551133930594
},

{

    subject: 'geqg?',
    body: 'Pagp!',
    isRead: false,
    sentAt: 1551133930594
},

{

    subject: 'Wagap?',
    body: 'Pick up!',
    isRead: false,
    sentAt: 1551133930594
},

{

    subject: 'agap?',
    body: 'Pick up!',
    isRead: false,
    sentAt: 1551133930594
},
]


function createMail(subject,body) {
    let newMail={
        subject:subject,
        body : body,
        isread :false,
        sentAt : Date.now()
    }
return newMail
}

function getEmailById(id){
   const curEmail= gBooks.find(email=>email.id===id)
   return Promise.resolve(curEmail)
}



// function creatMails () {
//     gMails.push(createMail('asfasfasf','asfasfasfasfasfasfsasfasfasf'))
//     gMails.push(createMail('asfasfasfasfasf1213132','sdfgdfgdsffgdf'))
//     gMails.push(createMail('kjasdvlkuadbvkluadbva','asfasfasfafasf'))
//     gMails.push(createMail('work','what about the work'))
//     gMails.push(createMail('play','lets play'))
//     gMails.push(createMail('go','go to hell'))
//     gMails.push(createMail('hi','asdasdasd'))
//     gMails.push(createMail('asdasdwe','asdasdhhhrr'))
//     gMails.push(createMail('aewfahh','hboiskjv'))
//     gMails.push(createMail('fdasf','asddghea'))
//     console.log(gMails);
    
// }

function getEmailsToRender() {
    return gMails
}

