import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/async-storage.service.js'

const MAILS_DB = 'mailsDB'
const loggedinUser = {
  email: 'user@appsus.com',
  fullname: 'Mahatma Appsus',
}

export const mailService = {
  query, // List
  get, // Read
  remove, // Delete
  save, // Update/Create
  getDefaultFilter,
  getEmptyMail,
  getNextMail,
  getDummyMails,
}

_createMails()

function getDummyMails() {
  return [
    {
      id: 'e101',
      sender: 'noyem',
      from: 'noyemdahan@gmail.com',
      subject: 'אישור תשלום חשבון חשמל ',
      body: `אישור תשלום לחברת החשמל
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident modi dicta ea voluptates aliquam labore, dolor sint quod soluta minus quos possimus beatae esse maiores sit fugit minima pariatur maxime amet iusto omnis veritatis accusantium rem numquam. Similique harum dolore tenetur tempore asperiores aperiam maxime ex exercitationem distinctio! Dolores, sapiente dolorum possimus ut illo iste, enim dolore, quasi quibusdam dignissimos praesentium quam voluptate? Nihil quisquam praesentium quo recusandae laborum in fuga natus adipisci quibusdam impedit sunt officiis iste facere, itaque excepturi voluptas molestiae. Cum commodi esse veniam enim, suscipit, sunt ducimus recusandae totam ab, consectetur magnam reprehenderit molestias quaerat doloremque temporibus magni dolores perspiciatis odit earum nihil expedita voluptas! Minus perspiciatis ipsa veniam eos, aperiam laudantium sapiente non excepturi, perferendis, nobis cum voluptatum. Vel reiciendis numquam voluptas debitis adipisci laboriosam eum aliquam earum dolorem perferendis molestiae consectetur assumenda quaerat reprehenderit, dolores eligendi suscipit omnis quod iure maxime tempore aut saepe recusandae! Architecto, earum voluptate numquam quia consequatur non est illo dolorem recusandae omnis praesentium corrupti exercitationem error ut quasi deserunt iusto, dicta voluptatem eos corporis itaque ipsum. Vitae, dolorem maiores! Voluptatum eius eveniet corporis officia culpa ratione temporibus! Mollitia, magni iste veniam error voluptas non libero consectetur laudantium voluptatibus? Suscipit.`,
      isRead: false,
      sentAt: Date.now() - 5000000,
      to: loggedinUser.email,
      isStared: true,
      status: 'sent',
    },
    {
      id: 'e102',
      sender: 'HEVER WebMaster',
      from: 'notifications@github.com',
      subject: 'Contrary to popular belief, Lorem Ipsum is not simply random text.',
      body: `
      <small>Coding academy Nov22</small>
      <h3>Dear Lorem, </h3>
      <img src="https://www.logodesign.net/assets/images/new-ui/logo-category-abstract-logo.png" alt="logo" />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident modi dicta ea voluptates aliquam labore, dolor sint quod soluta minus quos possimus beatae esse maiores sit fugit minima pariatur maxime amet iusto omnis veritatis accusantium rem numquam. Similique harum dolore tenetur tempore asperiores aperiam maxime ex exercitationem distinctio! Dolores, sapiente dolorum possimus ut illo iste, enim dolore, quasi quibusdam dignissimos praesentium quam voluptate? Nihil quisquam praesentium quo recusandae laborum in fuga natus adipisci quibusdam impedit sunt officiis iste facere, itaque excepturi voluptas molestiae. Cum commodi esse veniam enim, suscipit, sunt ducimus recusandae totam ab, consectetur magnam reprehenderit molestias quaerat doloremque temporibus magni dolores perspiciatis odit earum nihil expedita voluptas! Minus perspiciatis ipsa veniam eos, aperiam laudantium sapiente non excepturi, perferendis, nobis cum voluptatum. Vel reiciendis numquam voluptas debitis adipisci laboriosam eum aliquam earum dolorem perferendis molestiae consectetur assumenda quaerat reprehenderit, dolores eligendi suscipit omnis quod iure maxime tempore aut saepe recusandae! Architecto, earum voluptate numquam quia consequatur non est illo dolorem recusandae omnis praesentium corrupti exercitationem error ut quasi deserunt iusto, dicta voluptatem eos corporis itaque ipsum. Vitae, dolorem maiores! Voluptatum eius eveniet corporis officia culpa ratione temporibus! Mollitia, magni iste veniam error voluptas non libero consectetur laudantium voluptatibus? Suscipit.`,
      isRead: true,
      sentAt: Date.now() - 120000000,
      to: loggedinUser.email,
      isStared: false,
      status: 'inbox',
    },
    {
      id: 'e103',
      sender: `LinkdIn`,
      from: 'info@icedtea-aesthetics.com',
      subject: `[YaronShapira/appsus] Run : pages build and deployment - Sprint3 ()`,
      body: `
<div class=""><div class="aHl"></div><div id=":qs" tabindex="-1"></div><div id=":x5" class="ii gt" jslog="20277; u014N:xr6bB; 4:W251bGwsbnVsbCxbXV0."><div id=":qd" class="a3s aiL msg-8391927122521842148"><u></u>          <div style="padding:0;margin:0 auto;width:100%!important;font-family:Helvetica Neue,Helvetica,Arial,sans-serif"> <div style="overflow:hidden;color:transparent;width:0;font-size:0;opacity:0;height:0"> Here are your network highlights‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌<wbr>&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌<wbr>&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌<wbr>&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌<wbr>&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌<wbr>&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌<wbr>&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌<wbr>&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌<wbr>&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌<wbr>&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌<wbr>&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp; </div> <table role="presentation" align="center" border="0" cellspacing="0" cellpadding="0" width="100%" bgcolor="#F3F2EF" style="background-color:#f3f2ef;table-layout:fixed"> <tbody> <tr> <td align="center" style="padding-top:24px"> <center style="width:100%"> <table role="presentation" border="0" class="m_-8391927122521842148mercado-email-container" cellspacing="0" cellpadding="0" width="512" bgcolor="transparent" style="background-color:transparent;margin:0 auto;max-width:512px;width:inherit"> <tbody> <tr> <td bgcolor="#FFFFFF" style="background-color:#ffffff;padding:24px 32px 0 32px;border-bottom:0px"> <table role="presentation" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%!important;min-width:100%!important"> <tbody> <tr> <td align="left" valign="middle"><a href="https://www.linkedin.com/comm/feed/?midToken=AQHTkVCuB40GUg&amp;midSig=2oPlZJ1yXBiWA1&amp;trk=eml-email_network_conversations_01-header-22-home&amp;trkEmail=eml-email_network_conversations_01-header-22-home-null-fs9mca%7Elc9c9xiu%7E8m-null-neptune%2Ffeed&amp;lipi=urn%3Ali%3Apage%3Aemail_email_network_conversations_01%3BHJeNncqDSEasPXEQvUePrw%3D%3D" style="color:#0a66c2;display:inline-block;text-decoration:none" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.linkedin.com/comm/feed/?midToken%3DAQHTkVCuB40GUg%26midSig%3D2oPlZJ1yXBiWA1%26trk%3Deml-email_network_conversations_01-header-22-home%26trkEmail%3Deml-email_network_conversations_01-header-22-home-null-fs9mca%257Elc9c9xiu%257E8m-null-neptune%252Ffeed%26lipi%3Durn%253Ali%253Apage%253Aemail_email_network_conversations_01%253BHJeNncqDSEasPXEQvUePrw%253D%253D&amp;source=gmail&amp;ust=1672420585300000&amp;usg=AOvVaw3RbIp341AB7UqDsCMoXmDv"> <img alt="LinkedIn" border="0" src="https://ci6.googleusercontent.com/proxy/-UIVmLcgxxql2wdrpg4bbzzfhEzXAF3nlvXLrk_W0BbZNFObrzozRM8v1uH0ejfdfSy6mlH9fGnu0XTtTRS6-Ts7mRt0jlk4yPaTxtX6cMq4KPoPbFrX8DvTsJ9K1-DXy49Da64xsSQjihgWkMflRcg1QJUZWxQvdLnGGlFVMQjldHWY0e6dOZr5uwdRceVsj-aOUG7bL2YZAgh77vui_Qg81j1MJgnRfhLcE-Rxy8klHVZsRBNAgrji-U-NQ6pIhvAGl8PT5iwvoSEwxcpqfEXokDLI1Y354c3l73qHmWRkDdZrHW-zZ-zo4blVHz8Ttqs8P1fbh1JdssvtOZTJXGvxogBAo4ZAW_JaRQhzQDCp5geG4zg-Nt4KGiEeWlQvsPhYWsaBWK9QndNKAmAOXPdqWWJ2_x4NEmWvawbRNVig5a3l-xvCFUNJgkPFvthwXcQYavLL0KldzN0ltfwSE64144avo0KJQWWYoYgzLvDzhWZ7aSZltpUq5DVTuBo=s0-d-e1-ft#https://www.linkedin.com/comm/dms/logo?midToken=AQHTkVCuB40GUg&amp;midSig=2oPlZJ1yXBiWA1&amp;trk=eml-email_network_conversations_01-null-30-null&amp;trkEmail=eml-email_network_conversations_01-null-30-null-null-fs9mca%7Elc9c9xiu%7E8m-null-comms%7Ebadging%7Edynamic&amp;lipi=urn%3Ali%3Apage%3Aemail_email_network_conversations_01%3BHJeNncqDSEasPXEQvUePrw%3D%3D&amp;_sig=1bZvXMLvrBiWA1" height="38" style="max-height:38px;outline:none;color:#ffffff;max-width:unset!important;text-decoration:none" class="CToWUd" data-bit="iit"></a></td> <td valign="middle" width="100%" align="right"><a href="https://www.linkedin.com/comm/in/noam-dahan-90a797227?midToken=AQHTkVCuB40GUg&amp;midSig=2oPlZJ1yXBiWA1&amp;trk=eml-email_network_conversations_01-header-31-profile&amp;trkEmail=eml-email_network_conversations_01-header-31-profile-null-fs9mca%7Elc9c9xiu%7E8m-null-neptune%2Fprofile%7Evanity%2Eview&amp;lipi=urn%3Ali%3Apage%3Aemail_email_network_conversations_01%3BHJeNncqDSEasPXEQvUePrw%3D%3D" style="margin:0;color:#0a66c2;display:inline-block;text-decoration:none" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.linkedin.com/comm/in/noam-dahan-90a797227?midToken%3DAQHTkVCuB40GUg%26midSig%3D2oPlZJ1yXBiWA1%26trk%3Deml-email_network_conversations_01-header-31-profile%26trkEmail%3Deml-email_network_conversations_01-header-31-profile-null-fs9mca%257Elc9c9xiu%257E8m-null-neptune%252Fprofile%257Evanity%252Eview%26lipi%3Durn%253Ali%253Apage%253Aemail_email_network_conversations_01%253BHJeNncqDSEasPXEQvUePrw%253D%253D&amp;source=gmail&amp;ust=1672420585300000&amp;usg=AOvVaw0bJzjc3_qqgbl_n-MIIiWx"> <table role="presentation" border="0" cellspacing="0" cellpadding="0" width="100%"> <tbody> <tr> <td align="left" valign="middle" style="padding:0 0 0 10px;padding-top:7px"></td> <td valign="middle" width="40" style="padding-top:7px;padding-left:10px"> <img alt="Noam Dahan" border="0" height="32" width="32" src="https://ci4.googleusercontent.com/proxy/iWldJrFMxHmjoeNmmx9M1dkMfKDfzsRIYl72fryclFaogH2mA_aQGfb045X3nuR0fFoPiJ57UdOYxjqbp2-DZH73vRtGYT3RkX1QBLO98iLZ7xZ6qDOZ6AQw8wrxrKMGO0Usk8ln_1u6Eel2ORnKEdBxPE9tKGu12Aj14gQw5xWCgPMSfigvOaIqZ_BBEkCX0OQPQXrpBGrxWbea7WExSAAPmWTwxAuIAc-S0_181KDVisdXq1aPZMZxBlDIn3Q=s0-d-e1-ft#https://media.licdn.com/dms/image/D4E03AQFklhark_5PQA/profile-displayphoto-shrink_100_100/0/1661682038058?e=2147483647&amp;v=beta&amp;t=lKWeCV6UO0u5ovf36lYlKQ_YvqWnBgIF6B8r23A5oyg" style="border-radius:50%;outline:none;color:#ffffff;max-width:unset!important;text-decoration:none" class="CToWUd" data-bit="iit"></td> </tr> </tbody> </table></a></td> </tr> </tbody> </table></td> </tr> <tr> <td> <table role="presentation" border="0" cellspacing="0" cellpadding="0" width="100%"> <tbody> <tr> <td> <table role="presentation" border="0" cellspacing="0" cellpadding="0" width="100%"> <tbody> <tr> <td style="padding:0"> <table role="presentation" border="0" cellspacing="0" cellpadding="0" width="100%"> <tbody> <tr> <td align="center" bgcolor="#FFFFFF" style="background-color:#ffffff;padding:24px 0"><a href="https://www.linkedin.com/comm/feed/?midToken=AQHTkVCuB40GUg&amp;midSig=2oPlZJ1yXBiWA1&amp;trk=eml-email_network_conversations_01-hero-0-headline&amp;trkEmail=eml-email_network_conversations_01-hero-0-headline-null-fs9mca%7Elc9c9xiu%7E8m-null-neptune%2Ffeed&amp;lipi=urn%3Ali%3Apage%3Aemail_email_network_conversations_01%3BHJeNncqDSEasPXEQvUePrw%3D%3D" style="color:#0a66c2;display:inline-block;text-decoration:none" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.linkedin.com/comm/feed/?midToken%3DAQHTkVCuB40GUg%26midSig%3D2oPlZJ1yXBiWA1%26trk%3Deml-email_network_conversations_01-hero-0-headline%26trkEmail%3Deml-email_network_conversations_01-hero-0-headline-null-fs9mca%257Elc9c9xiu%257E8m-null-neptune%252Ffeed%26lipi%3Durn%253Ali%253Apage%253Aemail_email_network_conversations_01%253BHJeNncqDSEasPXEQvUePrw%253D%253D&amp;source=gmail&amp;ust=1672420585300000&amp;usg=AOvVaw1O15T-wkJ-_djtJWaGqdV2"> <h2 style="margin:0;color:#000000;font-weight:500;font-size:24px;line-height:1.333">Your highlights</h2></a></td> </tr> <tr> <td> <table role="presentation" border="0" cellspacing="0" cellpadding="0" width="100%" style="border-spacing:0"> <tbody> <tr> <td> <hr style="background-color:#d9d9d9;margin:0;color:#d9d9d9;border-color:#d9d9d9;border-width:0;border-style:solid;height:1px"></td> </tr> <tr> <td bgcolor="#FFFFFF" style="background-color:#ffffff;padding:24px 32px 24px 32px"><a href="https://www.linkedin.com/comm/feed/update/urn:li:share:7013098022456684544?midToken=AQHTkVCuB40GUg&amp;midSig=2oPlZJ1yXBiWA1&amp;trk=eml-email_network_conversations_01-hero-1-check_update_cta&amp;trkEmail=eml-email_network_conversations_01-hero-1-check_update_cta-null-fs9mca%7Elc9c9xiu%7E8m-null-neptune%2Ffeed%2Eupdate&amp;lipi=urn%3Ali%3Apage%3Aemail_email_network_conversations_01%3BHJeNncqDSEasPXEQvUePrw%3D%3D" style="color:#0a66c2;display:inline-block;text-decoration:none;width:100%" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.linkedin.com/comm/feed/update/urn:li:share:7013098022456684544?midToken%3DAQHTkVCuB40GUg%26midSig%3D2oPlZJ1yXBiWA1%26trk%3Deml-email_network_conversations_01-hero-1-check_update_cta%26trkEmail%3Deml-email_network_conversations_01-hero-1-check_update_cta-null-fs9mca%257Elc9c9xiu%257E8m-null-neptune%252Ffeed%252Eupdate%26lipi%3Durn%253Ali%253Apage%253Aemail_email_network_conversations_01%253BHJeNncqDSEasPXEQvUePrw%253D%253D&amp;source=gmail&amp;ust=1672420585300000&amp;usg=AOvVaw0eOJBa8o8y-IbzNkqCUgeU"> <table role="presentation" border="0" cellspacing="0" cellpadding="0" width="100%"> <tbody> <tr> <td></td> </tr> <tr> <td align="left" style="padding:0 0 16px 0;padding-bottom:24px"><a href="https://www.linkedin.com/comm/feed/update/urn:li:share:7013098022456684544?midToken=AQHTkVCuB40GUg&amp;midSig=2oPlZJ1yXBiWA1&amp;trk=eml-email_network_conversations_01-hero-1-check_update_cta&amp;trkEmail=eml-email_network_conversations_01-hero-1-check_update_cta-null-fs9mca%7Elc9c9xiu%7E8m-null-neptune%2Ffeed%2Eupdate&amp;lipi=urn%3Ali%3Apage%3Aemail_email_network_conversations_01%3BHJeNncqDSEasPXEQvUePrw%3D%3D" style="color:#0a66c2;display:inline-block;text-decoration:none;width:100%" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.linkedin.com/comm/feed/update/urn:li:share:7013098022456684544?midToken%3DAQHTkVCuB40GUg%26midSig%3D2oPlZJ1yXBiWA1%26trk%3Deml-email_network_conversations_01-hero-1-check_update_cta%26trkEmail%3Deml-email_network_conversations_01-hero-1-check_update_cta-null-fs9mca%257Elc9c9xiu%257E8m-null-neptune%252Ffeed%252Eupdate%26lipi%3Durn%253Ali%253Apage%253Aemail_email_network_conversations_01%253BHJeNncqDSEasPXEQvUePrw%253D%253D&amp;source=gmail&amp;ust=1672420585300000&amp;usg=AOvVaw0eOJBa8o8y-IbzNkqCUgeU"> <table role="presentation" border="0" cellspacing="0" cellpadding="0" width="100%"> <tbody> <tr> <td valign="top" style="padding:0 12px 0 0"> <img alt="Commit " border="0" height="72" width="72" src="https://ci3.googleusercontent.com/proxy/gCn0HAiGK9HC7ruXe6B5EGSTCQBRpKulMXqFeLKd_ongUylptLrq6ebhsUvw3kVy_5vshu_YsGYGyKIvVdYsBLNKCqagCgFRGDutWbKkpP0heHnqgbMaIbqoEWd0ht0qpFaj8wSay-1j09Xo-SfBw-oCOQzbWKrYgEn08oKYPHFvpSCbMLoRg5qHiemWjNkC8MAvFpB6J9uIzpMDBVIyNiPTGwiDemvBodc03mgO8Ok=s0-d-e1-ft#https://media.licdn.com/dms/image/C4D0BAQE-mOUUa5zmEg/company-logo_100_100/0/1610346766770?e=2147483647&amp;v=beta&amp;t=rJ1PtSB8sG_cOxDtW39NOWXoUJLJ9HpcAwQaFG_qgr8" style="outline:none;color:#ffffff;max-width:unset!important;text-decoration:none" class="CToWUd" data-bit="iit"></td> <td valign="middle" width="100%"> <span style="word-wrap:break-word;margin:0 0 8px 0;color:#000000;word-break:break-word;font-weight:700;font-size:16px;line-height:1.5">Commit </span> <p style="margin:0;word-wrap:break-word;color:#737373;word-break:break-word;font-weight:400;font-size:14px;line-height:1.429">7,120 followers</p></td> </tr> </tbody> </table></a></td> </tr> <tr> <td align="left" style="padding-bottom:24px"> <span style="color:#262626;font-weight:400;font-size:16px;line-height:1.25">It gives us so much pleasure to introduce this week's star.&nbsp;<img data-emoji="💖" class="an1" alt="💖" aria-label="💖" src="https://fonts.gstatic.com/s/e/notoemoji/15.0/1f496/72.png" loading="lazy"> <img data-emoji="⭐" class="an1" alt="⭐" aria-label="⭐" src="https://fonts.gstatic.com/s/e/notoemoji/15.0/2b50/72.png" loading="lazy"> Guy Greenshtein <img data-emoji="⭐" class="an1" alt="⭐" aria-label="⭐" src="https://fonts.gstatic.com/s/e/notoemoji/15.0/2b50/72.png" loading="lazy"> is a Hybrid Cloud <img data-emoji="☁" class="an1" alt="☁" aria-label="☁" src="https://fonts.gstatic.com/s/e/notoemoji/15.0/2601/72.png" loading="lazy"> PS...</span> <span style="color:#0a66c2;font-weight:700;font-size:16px;line-height:1.25">see more</span></td> </tr> <tr> <td> <table role="presentation" border="0" cellspacing="0" cellpadding="0" width="100%"> <tbody> <tr> <td style="padding-bottom:24px"><img src="https://ci6.googleusercontent.com/proxy/vmYqH-fSbh1p1e7VI4lYJH86pWG1MkDZ8T5Xfyu4gbMoASHIjOSJezHPlmjmNiMio9wqcBcOd6xSls_RDv72x_xZnPWzjM8Ak5sG5FZbrUDzFJ5AxIQJsr1xTEFigtdDv5yZmNBxkrIKjRf5XJ1U7PhCcLHnfEoZpQX7ztVAIjhd3LXBwTGsE5MB1Kx-W5TllKM2h3iZA3BOuoqMx8tSA_z0DaUeT3cvPlOK_ET_FALVE6ynGOUGGQFpD_h4w16pvLJxaauDxvbt4v5Ar4IouT4zpF128HTZBldrH16CrA=s0-d-e1-ft#https://static.licdn.com/sc/p/com.linkedin.email-assets-frontend%3Aemail-assets-frontend-static-content%2B__latest__/f/%2Femail-assets-frontend%2Fimages%2Femail%2Fmercado%2Ficons%2Ficon_like_16_16_v1.png" border="0" alt="LIKE" height="16" width="16" style="outline:none;color:#737373;font-weight:400;text-decoration:none;vertical-align:middle;font-size:14px;padding-right:3px" class="CToWUd" data-bit="iit"><img src="https://ci6.googleusercontent.com/proxy/5V8ky4oq-d_RrqpomHBupDSZkjS9evZL_70aagkOtsVbfQHUbCb5cskRrBML4lDfEqsEOYqpItoV22DwBIW13VkqXw1aUOd9aVEvxjj5cyiZppao_pPmjm7CnKRB-kt4sJx5xMAe5-Jn0PYNbyjPOH6Y988khKebxepj2NMUKMpcyhkQfi26Zej0gnZmbeCczL8BfMbnUbxglIMuSMeaf9Tg0n7W2edyLgjCNKdspVCEGGJ46sdDqGOWz3uqwW3TwHvOsaphB_k_t8fY-25P-mm1VThPCRqMVDYdVZF1kWDX=s0-d-e1-ft#https://static.licdn.com/sc/p/com.linkedin.email-assets-frontend%3Aemail-assets-frontend-static-content%2B__latest__/f/%2Femail-assets-frontend%2Fimages%2Femail%2Fmercado%2Ficons%2Ficon_praise_16_16_v1.png" border="0" alt="PRAISE" height="16" width="16" style="outline:none;color:#737373;font-weight:400;text-decoration:none;vertical-align:middle;font-size:14px;padding-right:3px" class="CToWUd" data-bit="iit"><img src="https://ci6.googleusercontent.com/proxy/gxFUharJg7xRw6EejaXQCfXhmeyqJj_bGenbaoFuRVrzrOxaB7SyEB_pCfPr2-oS707kQT6HL6Yb3AMWBVogN2E5jXYt8br8-C5niq9Y34_zzwGSVqZLrGM8T28U6QCVElqlzJAkaxE9AI-Xs8z_sZdfeAbtQfsNK857MlCrPWUO4t5bXvHtR_SW2jU_8pm8AFYhc9uDJl4PZOZVhu3hBcPl_K1NZow0s1XjC2RF7C6Gg5BK1Xa3f53_QEZupCWvjIbmQ3f7vitSc8kaxO8k2pmLXHoXB5X29tfpFajPnrgcOw=s0-d-e1-ft#https://static.licdn.com/sc/p/com.linkedin.email-assets-frontend%3Aemail-assets-frontend-static-content%2B__latest__/f/%2Femail-assets-frontend%2Fimages%2Femail%2Fmercado%2Ficons%2Ficon_empathy_16_16_v1.png" border="0" alt="EMPATHY" height="16" width="16" style="outline:none;color:#737373;font-weight:400;text-decoration:none;vertical-align:middle;font-size:14px;padding-right:3px" class="CToWUd" data-bit="iit"> <span style="color:#737373;font-weight:400;font-size:14px;line-height:1.429">120</span> <span style="color:#737373;font-weight:400;font-size:14px;line-height:1.429">·</span> <span style="color:#737373;font-weight:400;font-size:14px;line-height:1.429">54 Comments</span></td> </tr> </tbody> </table></td> </tr> <tr> <td align="left"> <table border="0" cellpadding="0" cellspacing="0" style="display:inline-block"> <tbody> <tr> <td align="center" valign="middle"><a href="https://www.linkedin.com/comm/feed/update/urn:li:share:7013098022456684544?midToken=AQHTkVCuB40GUg&amp;midSig=2oPlZJ1yXBiWA1&amp;trk=eml-email_network_conversations_01-hero-1-check_update_cta&amp;trkEmail=eml-email_network_conversations_01-hero-1-check_update_cta-null-fs9mca%7Elc9c9xiu%7E8m-null-neptune%2Ffeed%2Eupdate&amp;lipi=urn%3Ali%3Apage%3Aemail_email_network_conversations_01%3BHJeNncqDSEasPXEQvUePrw%3D%3D" aria-label="Read more" style="word-wrap:normal;color:#0a66c2;word-break:normal;white-space:normal;display:block;text-decoration:none;width:100%;text-align:center" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.linkedin.com/comm/feed/update/urn:li:share:7013098022456684544?midToken%3DAQHTkVCuB40GUg%26midSig%3D2oPlZJ1yXBiWA1%26trk%3Deml-email_network_conversations_01-hero-1-check_update_cta%26trkEmail%3Deml-email_network_conversations_01-hero-1-check_update_cta-null-fs9mca%257Elc9c9xiu%257E8m-null-neptune%252Ffeed%252Eupdate%26lipi%3Durn%253Ali%253Apage%253Aemail_email_network_conversations_01%253BHJeNncqDSEasPXEQvUePrw%253D%253D&amp;source=gmail&amp;ust=1672420585301000&amp;usg=AOvVaw1JeXQsp1ZVCI9peErjY5QA"> <table role="presentation" border="0" cellspacing="0" cellpadding="0" width="auto"> <tbody> <tr> <td bgcolor="#FFFFFF" style="padding:12px 24px;color:#666666;font-weight:400;display:inline-block;text-decoration:none;font-size:16px;line-height:1.25em;border-color:#0a66c2;background-color:#ffffff;border-radius:34px;border-width:1px;border-style:solid"><a href="https://www.linkedin.com/comm/feed/update/urn:li:share:7013098022456684544?midToken=AQHTkVCuB40GUg&amp;midSig=2oPlZJ1yXBiWA1&amp;trk=eml-email_network_conversations_01-hero-1-check_update_cta&amp;trkEmail=eml-email_network_conversations_01-hero-1-check_update_cta-null-fs9mca%7Elc9c9xiu%7E8m-null-neptune%2Ffeed%2Eupdate&amp;lipi=urn%3Ali%3Apage%3Aemail_email_network_conversations_01%3BHJeNncqDSEasPXEQvUePrw%3D%3D" aria-hidden="true" style="color:#0a66c2;display:inline-block;text-decoration:none;width:100%" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.linkedin.com/comm/feed/update/urn:li:share:7013098022456684544?midToken%3DAQHTkVCuB40GUg%26midSig%3D2oPlZJ1yXBiWA1%26trk%3Deml-email_network_conversations_01-hero-1-check_update_cta%26trkEmail%3Deml-email_network_conversations_01-hero-1-check_update_cta-null-fs9mca%257Elc9c9xiu%257E8m-null-neptune%252Ffeed%252Eupdate%26lipi%3Durn%253Ali%253Apage%253Aemail_email_network_conversations_01%253BHJeNncqDSEasPXEQvUePrw%253D%253D&amp;source=gmail&amp;ust=1672420585301000&amp;usg=AOvVaw1JeXQsp1ZVCI9peErjY5QA">Read more</a></td> </tr> </tbody> </table></a></td> </tr> </tbody> </table></td> </tr> <tr> <td align="left" style="height:24px"></td> </tr> <tr> <td bgcolor="#f3f6f8" style="background-color:#f3f6f8;border-radius:8px;padding-bottom:0"> <table role="presentation" border="0" cellspacing="0" cellpadding="0" width="100%" style="border-color:#d9d9d9;border-width:0;border-style:solid"> <tbody> <tr> <td align="center" width="100" height="300" style="background-color:#d9d9d9;border-radius:8px;background-repeat:no-repeat;background-size:cover;background-image:url(https://ci4.googleusercontent.com/proxy/3o1EOnC1UgPKSs7UNC3JtmGcz4GfCxssl3ed1y-6vMfU4mqdK6V2TLP27NxSuKY3qhvjeOndxkjrPfSoKGhSMal_xIvJeobp7TmYtmIHeQxw0vsjYwBm8qu7oWDhkMvu-a126pm7fwOeXQS6nHnL2E0KDg6ebilQCgJRa7YhhpgHGG3ZjkdRKPz4pm6K_PzllkFdRUXTzDATkUbkHUiTdXX5_mDmjL4ujmwZVQl2y44=s0-d-e1-ft#https://media.licdn.com/dms/image/C4D22AQF1AcCE0Xvn7g/feedshare-shrink_800/0/1672052864367?e=2147483647&amp;v=beta&amp;t=D26qXsIzfxVHqBcWYVKWR2jbOO5j4q0b3CaBQ_91T3s);background-position:center center" bgcolor="#D9D9D9" background="https://ci4.googleusercontent.com/proxy/3o1EOnC1UgPKSs7UNC3JtmGcz4GfCxssl3ed1y-6vMfU4mqdK6V2TLP27NxSuKY3qhvjeOndxkjrPfSoKGhSMal_xIvJeobp7TmYtmIHeQxw0vsjYwBm8qu7oWDhkMvu-a126pm7fwOeXQS6nHnL2E0KDg6ebilQCgJRa7YhhpgHGG3ZjkdRKPz4pm6K_PzllkFdRUXTzDATkUbkHUiTdXX5_mDmjL4ujmwZVQl2y44=s0-d-e1-ft#https://media.licdn.com/dms/image/C4D22AQF1AcCE0Xvn7g/feedshare-shrink_800/0/1672052864367?e=2147483647&amp;v=beta&amp;t=D26qXsIzfxVHqBcWYVKWR2jbOO5j4q0b3CaBQ_91T3s"><a href="https://www.linkedin.com/comm/feed/update/urn:li:share:7013098022456684544?midToken=AQHTkVCuB40GUg&amp;midSig=2oPlZJ1yXBiWA1&amp;trk=eml-email_network_conversations_01-hero-1-check_update_cta&amp;trkEmail=eml-email_network_conversations_01-hero-1-check_update_cta-null-fs9mca%7Elc9c9xiu%7E8m-null-neptune%2Ffeed%2Eupdate&amp;lipi=urn%3Ali%3Apage%3Aemail_email_network_conversations_01%3BHJeNncqDSEasPXEQvUePrw%3D%3D" aria-label="Read more" style="color:#0a66c2;display:inline-block;text-decoration:none;width:100%" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.linkedin.com/comm/feed/update/urn:li:share:7013098022456684544?midToken%3DAQHTkVCuB40GUg%26midSig%3D2oPlZJ1yXBiWA1%26trk%3Deml-email_network_conversations_01-hero-1-check_update_cta%26trkEmail%3Deml-email_network_conversations_01-hero-1-check_update_cta-null-fs9mca%257Elc9c9xiu%257E8m-null-neptune%252Ffeed%252Eupdate%26lipi%3Durn%253Ali%253Apage%253Aemail_email_network_conversations_01%253BHJeNncqDSEasPXEQvUePrw%253D%253D&amp;source=gmail&amp;ust=1672420585301000&amp;usg=AOvVaw1JeXQsp1ZVCI9peErjY5QA"><img border="0" src="https://ci4.googleusercontent.com/proxy/3o1EOnC1UgPKSs7UNC3JtmGcz4GfCxssl3ed1y-6vMfU4mqdK6V2TLP27NxSuKY3qhvjeOndxkjrPfSoKGhSMal_xIvJeobp7TmYtmIHeQxw0vsjYwBm8qu7oWDhkMvu-a126pm7fwOeXQS6nHnL2E0KDg6ebilQCgJRa7YhhpgHGG3ZjkdRKPz4pm6K_PzllkFdRUXTzDATkUbkHUiTdXX5_mDmjL4ujmwZVQl2y44=s0-d-e1-ft#https://media.licdn.com/dms/image/C4D22AQF1AcCE0Xvn7g/feedshare-shrink_800/0/1672052864367?e=2147483647&amp;v=beta&amp;t=D26qXsIzfxVHqBcWYVKWR2jbOO5j4q0b3CaBQ_91T3s" alt="View image" width="0" style="outline:none;color:#ffffff;text-decoration:none;width:0;opacity:0;height:0" class="CToWUd" data-bit="iit"></a></td> </tr> </tbody> </table></td> </tr> </tbody> </table></a></td> </tr> <tr> <td> <hr style="background-color:#d9d9d9;margin:0;color:#d9d9d9;border-color:#d9d9d9;border-width:0;border-style:solid;height:1px"></td> </tr> <tr> <td bgcolor="#FFFFFF" style="background-color:#ffffff;padding:24px 32px 24px 32px"><a href="https://www.linkedin.com/comm/feed/update/urn:li:share:7012811024147845120?midToken=AQHTkVCuB40GUg&amp;midSig=2oPlZJ1yXBiWA1&amp;trk=eml-email_network_conversations_01-hero-2-check_update_cta&amp;trkEmail=eml-email_network_conversations_01-hero-2-check_update_cta-null-fs9mca%7Elc9c9xiu%7E8m-null-neptune%2Ffeed%2Eupdate&amp;lipi=urn%3Ali%3Apage%3Aemail_email_network_conversations_01%3BHJeNncqDSEasPXEQvUePrw%3D%3D" style="color:#0a66c2;display:inline-block;text-decoration:none;width:100%" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.linkedin.com/comm/feed/update/urn:li:share:7012811024147845120?midToken%3DAQHTkVCuB40GUg%26midSig%3D2oPlZJ1yXBiWA1%26trk%3Deml-email_network_conversations_01-hero-2-check_update_cta%26trkEmail%3Deml-email_network_conversations_01-hero-2-check_update_cta-null-fs9mca%257Elc9c9xiu%257E8m-null-neptune%252Ffeed%252Eupdate%26lipi%3Durn%253Ali%253Apage%253Aemail_email_network_conversations_01%253BHJeNncqDSEasPXEQvUePrw%253D%253D&amp;source=gmail&amp;ust=1672420585301000&amp;usg=AOvVaw1Bos7_Wgp5WmfmpZS7eizs"> <table role="presentation" border="0" cellspacing="0" cellpadding="0" width="100%"> <tbody> <tr> <td></td> </tr> <tr> <td align="left" style="padding:0 0 16px 0;padding-bottom:24px"><a href="https://www.linkedin.com/comm/feed/update/urn:li:share:7012811024147845120?midToken=AQHTkVCuB40GUg&amp;midSig=2oPlZJ1yXBiWA1&amp;trk=eml-email_network_conversations_01-hero-2-check_update_cta&amp;trkEmail=eml-email_network_conversations_01-hero-2-check_update_cta-null-fs9mca%7Elc9c9xiu%7E8m-null-neptune%2Ffeed%2Eupdate&amp;lipi=urn%3Ali%3Apage%3Aemail_email_network_conversations_01%3BHJeNncqDSEasPXEQvUePrw%3D%3D" style="color:#0a66c2;display:inline-block;text-decoration:none;width:100%" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.linkedin.com/comm/feed/update/urn:li:share:7012811024147845120?midToken%3DAQHTkVCuB40GUg%26midSig%3D2oPlZJ1yXBiWA1%26trk%3Deml-email_network_conversations_01-hero-2-check_update_cta%26trkEmail%3Deml-email_network_conversations_01-hero-2-check_update_cta-null-fs9mca%257Elc9c9xiu%257E8m-null-neptune%252Ffeed%252Eupdate%26lipi%3Durn%253Ali%253Apage%253Aemail_email_network_conversations_01%253BHJeNncqDSEasPXEQvUePrw%253D%253D&amp;source=gmail&amp;ust=1672420585301000&amp;usg=AOvVaw1Bos7_Wgp5WmfmpZS7eizs"> <table role="presentation" border="0" cellspacing="0" cellpadding="0" width="100%"> <tbody> <tr> <td valign="top" style="padding:0 12px 0 0"> <img alt="monday.com" border="0" height="72" width="72" src="https://ci6.googleusercontent.com/proxy/EYB5aLE1w8-0uhoj58QMwtSa5GsBdrvWNMP0SDZdsRiCABY4TeEqAvQlq4bPOqHsFaYR2CpMOVrMPZdd2_0X0PGMJx9xxyN1zizkY16BkxX8GGdsYuSu6UaWjcTaH8yVhlF2NthjT2XblhIKkayFlBfy5wKpfmXZs9ZkEFc8vgg8Zr3CWVs0Q2cfN14Lm_6YkF6TKdNViZeJ40rYNEEAHhN9XR--8YkqnsLhBXFxbnM=s0-d-e1-ft#https://media.licdn.com/dms/image/C4D0BAQEaKb5nqfTvNQ/company-logo_100_100/0/1519905483228?e=2147483647&amp;v=beta&amp;t=zgXPNIGtNW3FfKCKq6KUj7YN9s_f-70VI26iTLCuy9Y" style="outline:none;color:#ffffff;max-width:unset!important;text-decoration:none" class="CToWUd" data-bit="iit"></td> <td valign="middle" width="100%"> <span style="word-wrap:break-word;margin:0 0 8px 0;color:#000000;word-break:break-word;font-weight:700;font-size:16px;line-height:1.5">monday.com</span> <p style="margin:0;word-wrap:break-word;color:#737373;word-break:break-word;font-weight:400;font-size:14px;line-height:1.429">143,987 followers</p></td> </tr> </tbody> </table></a></td> </tr> <tr> <td align="left" style="padding-bottom:24px"> <span style="color:#262626;font-weight:400;font-size:16px;line-height:1.25">Ho ho ho, season's greetings to all! We're all about helping teams boost efficiency on every level. And you...</span> <span style="color:#0a66c2;font-weight:700;font-size:16px;line-height:1.25">see more</span></td> </tr> <tr> <td> <table role="presentation" border="0" cellspacing="0" cellpadding="0" width="100%"> <tbody> <tr> <td style="padding-bottom:24px"><img src="https://ci6.googleusercontent.com/proxy/vmYqH-fSbh1p1e7VI4lYJH86pWG1MkDZ8T5Xfyu4gbMoASHIjOSJezHPlmjmNiMio9wqcBcOd6xSls_RDv72x_xZnPWzjM8Ak5sG5FZbrUDzFJ5AxIQJsr1xTEFigtdDv5yZmNBxkrIKjRf5XJ1U7PhCcLHnfEoZpQX7ztVAIjhd3LXBwTGsE5MB1Kx-W5TllKM2h3iZA3BOuoqMx8tSA_z0DaUeT3cvPlOK_ET_FALVE6ynGOUGGQFpD_h4w16pvLJxaauDxvbt4v5Ar4IouT4zpF128HTZBldrH16CrA=s0-d-e1-ft#https://static.licdn.com/sc/p/com.linkedin.email-assets-frontend%3Aemail-assets-frontend-static-content%2B__latest__/f/%2Femail-assets-frontend%2Fimages%2Femail%2Fmercado%2Ficons%2Ficon_like_16_16_v1.png" border="0" alt="LIKE" height="16" width="16" style="outline:none;color:#737373;font-weight:400;text-decoration:none;vertical-align:middle;font-size:14px;padding-right:3px" class="CToWUd" data-bit="iit"><img src="https://ci6.googleusercontent.com/proxy/5V8ky4oq-d_RrqpomHBupDSZkjS9evZL_70aagkOtsVbfQHUbCb5cskRrBML4lDfEqsEOYqpItoV22DwBIW13VkqXw1aUOd9aVEvxjj5cyiZppao_pPmjm7CnKRB-kt4sJx5xMAe5-Jn0PYNbyjPOH6Y988khKebxepj2NMUKMpcyhkQfi26Zej0gnZmbeCczL8BfMbnUbxglIMuSMeaf9Tg0n7W2edyLgjCNKdspVCEGGJ46sdDqGOWz3uqwW3TwHvOsaphB_k_t8fY-25P-mm1VThPCRqMVDYdVZF1kWDX=s0-d-e1-ft#https://static.licdn.com/sc/p/com.linkedin.email-assets-frontend%3Aemail-assets-frontend-static-content%2B__latest__/f/%2Femail-assets-frontend%2Fimages%2Femail%2Fmercado%2Ficons%2Ficon_praise_16_16_v1.png" border="0" alt="PRAISE" height="16" width="16" style="outline:none;color:#737373;font-weight:400;text-decoration:none;vertical-align:middle;font-size:14px;padding-right:3px" class="CToWUd" data-bit="iit"><img src="https://ci6.googleusercontent.com/proxy/gxFUharJg7xRw6EejaXQCfXhmeyqJj_bGenbaoFuRVrzrOxaB7SyEB_pCfPr2-oS707kQT6HL6Yb3AMWBVogN2E5jXYt8br8-C5niq9Y34_zzwGSVqZLrGM8T28U6QCVElqlzJAkaxE9AI-Xs8z_sZdfeAbtQfsNK857MlCrPWUO4t5bXvHtR_SW2jU_8pm8AFYhc9uDJl4PZOZVhu3hBcPl_K1NZow0s1XjC2RF7C6Gg5BK1Xa3f53_QEZupCWvjIbmQ3f7vitSc8kaxO8k2pmLXHoXB5X29tfpFajPnrgcOw=s0-d-e1-ft#https://static.licdn.com/sc/p/com.linkedin.email-assets-frontend%3Aemail-assets-frontend-static-content%2B__latest__/f/%2Femail-assets-frontend%2Fimages%2Femail%2Fmercado%2Ficons%2Ficon_empathy_16_16_v1.png" border="0" alt="EMPATHY" height="16" width="16" style="outline:none;color:#737373;font-weight:400;text-decoration:none;vertical-align:middle;font-size:14px;padding-right:3px" class="CToWUd" data-bit="iit"> <span style="color:#737373;font-weight:400;font-size:14px;line-height:1.429">68</span> <span style="color:#737373;font-weight:400;font-size:14px;line-height:1.429">·</span> <span style="color:#737373;font-weight:400;font-size:14px;line-height:1.429">4 Comments</span></td> </tr> </tbody> </table></td> </tr> <tr> <td align="left"> <table border="0" cellpadding="0" cellspacing="0" style="display:inline-block"> <tbody> <tr> <td align="center" valign="middle"><a href="https://www.linkedin.com/comm/feed/update/urn:li:share:7012811024147845120?midToken=AQHTkVCuB40GUg&amp;midSig=2oPlZJ1yXBiWA1&amp;trk=eml-email_network_conversations_01-hero-2-check_update_cta&amp;trkEmail=eml-email_network_conversations_01-hero-2-check_update_cta-null-fs9mca%7Elc9c9xiu%7E8m-null-neptune%2Ffeed%2Eupdate&amp;lipi=urn%3Ali%3Apage%3Aemail_email_network_conversations_01%3BHJeNncqDSEasPXEQvUePrw%3D%3D" aria-label="Read more" style="word-wrap:normal;color:#0a66c2;word-break:normal;white-space:normal;display:block;text-decoration:none;width:100%;text-align:center" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.linkedin.com/comm/feed/update/urn:li:share:7012811024147845120?midToken%3DAQHTkVCuB40GUg%26midSig%3D2oPlZJ1yXBiWA1%26trk%3Deml-email_network_conversations_01-hero-2-check_update_cta%26trkEmail%3Deml-email_network_conversations_01-hero-2-check_update_cta-null-fs9mca%257Elc9c9xiu%257E8m-null-neptune%252Ffeed%252Eupdate%26lipi%3Durn%253Ali%253Apage%253Aemail_email_network_conversations_01%253BHJeNncqDSEasPXEQvUePrw%253D%253D&amp;source=gmail&amp;ust=1672420585302000&amp;usg=AOvVaw2bxJBmNwYLV01oTsPNUx0A"> <table role="presentation" border="0" cellspacing="0" cellpadding="0" width="auto"> <tbody> <tr> <td bgcolor="#FFFFFF" style="padding:12px 24px;color:#666666;font-weight:400;display:inline-block;text-decoration:none;font-size:16px;line-height:1.25em;border-color:#0a66c2;background-color:#ffffff;border-radius:34px;border-width:1px;border-style:solid"><a href="https://www.linkedin.com/comm/feed/update/urn:li:share:7012811024147845120?midToken=AQHTkVCuB40GUg&amp;midSig=2oPlZJ1yXBiWA1&amp;trk=eml-email_network_conversations_01-hero-2-check_update_cta&amp;trkEmail=eml-email_network_conversations_01-hero-2-check_update_cta-null-fs9mca%7Elc9c9xiu%7E8m-null-neptune%2Ffeed%2Eupdate&amp;lipi=urn%3Ali%3Apage%3Aemail_email_network_conversations_01%3BHJeNncqDSEasPXEQvUePrw%3D%3D" aria-hidden="true" style="color:#0a66c2;display:inline-block;text-decoration:none;width:100%" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.linkedin.com/comm/feed/update/urn:li:share:7012811024147845120?midToken%3DAQHTkVCuB40GUg%26midSig%3D2oPlZJ1yXBiWA1%26trk%3Deml-email_network_conversations_01-hero-2-check_update_cta%26trkEmail%3Deml-email_network_conversations_01-hero-2-check_update_cta-null-fs9mca%257Elc9c9xiu%257E8m-null-neptune%252Ffeed%252Eupdate%26lipi%3Durn%253Ali%253Apage%253Aemail_email_network_conversations_01%253BHJeNncqDSEasPXEQvUePrw%253D%253D&amp;source=gmail&amp;ust=1672420585302000&amp;usg=AOvVaw2bxJBmNwYLV01oTsPNUx0A">Read more</a></td> </tr> </tbody> </table></a></td> </tr> </tbody> </table></td> </tr> <tr> <td align="left" style="height:24px"></td> </tr> <tr> <td bgcolor="#f3f6f8" style="background-color:#f3f6f8;border-radius:8px;padding-bottom:0"> <table role="presentation" border="0" cellspacing="0" cellpadding="0" width="100%" style="border-color:#d9d9d9;border-width:0;border-style:solid"> <tbody> <tr> <td align="center" width="100" height="300" style="background-color:#d9d9d9;background-repeat:no-repeat;background-size:cover;border-top-left-radius:8px;border-top-right-radius:8px;background-image:url(https://ci6.googleusercontent.com/proxy/8dxNjZ7RT1fT1BZeXW4Ka-I9FNM6uhuD36IugWDr206-XoBbEWxsr0bGwmVHvNotxMyIIjp7wntb4nKJEYGdi4ngxhTLeSE5NUuAT_jB6vHc24wX2pdDxpV1FIk1Ia9p7MpmNjsaFvdnjWUxDjEq0Ld6OUu0DclPrGgqbrXEXTcZARgYZvZ5oYBxao-9bet26ncGHvJu3_9TbB_x8a-t3zjMyJedX8Pp9eJgccaCMdU2PwR9E4JD-A=s0-d-e1-ft#https://media.licdn.com/dms/image/sync/C4E27AQEdeCjAAZuWdA/articleshare-shrink_800/0/1670319092739?e=1672941600&amp;v=beta&amp;t=fhHtQZkULQQq25V9dYo39QxdAS6WW6COSwXCizM0pgk);background-position:center center" bgcolor="#D9D9D9" background="https://ci6.googleusercontent.com/proxy/8dxNjZ7RT1fT1BZeXW4Ka-I9FNM6uhuD36IugWDr206-XoBbEWxsr0bGwmVHvNotxMyIIjp7wntb4nKJEYGdi4ngxhTLeSE5NUuAT_jB6vHc24wX2pdDxpV1FIk1Ia9p7MpmNjsaFvdnjWUxDjEq0Ld6OUu0DclPrGgqbrXEXTcZARgYZvZ5oYBxao-9bet26ncGHvJu3_9TbB_x8a-t3zjMyJedX8Pp9eJgccaCMdU2PwR9E4JD-A=s0-d-e1-ft#https://media.licdn.com/dms/image/sync/C4E27AQEdeCjAAZuWdA/articleshare-shrink_800/0/1670319092739?e=1672941600&amp;v=beta&amp;t=fhHtQZkULQQq25V9dYo39QxdAS6WW6COSwXCizM0pgk"><a href="https://www.linkedin.com/comm/feed/update/urn:li:share:7012811024147845120?midToken=AQHTkVCuB40GUg&amp;midSig=2oPlZJ1yXBiWA1&amp;trk=eml-email_network_conversations_01-hero-2-check_update_cta&amp;trkEmail=eml-email_network_conversations_01-hero-2-check_update_cta-null-fs9mca%7Elc9c9xiu%7E8m-null-neptune%2Ffeed%2Eupdate&amp;lipi=urn%3Ali%3Apage%3Aemail_email_network_conversations_01%3BHJeNncqDSEasPXEQvUePrw%3D%3D" aria-label="Read more" style="color:#0a66c2;display:inline-block;text-decoration:none;width:100%" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.linkedin.com/comm/feed/update/urn:li:share:7012811024147845120?midToken%3DAQHTkVCuB40GUg%26midSig%3D2oPlZJ1yXBiWA1%26trk%3Deml-email_network_conversations_01-hero-2-check_update_cta%26trkEmail%3Deml-email_network_conversations_01-hero-2-check_update_cta-null-fs9mca%257Elc9c9xiu%257E8m-null-neptune%252Ffeed%252Eupdate%26lipi%3Durn%253Ali%253Apage%253Aemail_email_network_conversations_01%253BHJeNncqDSEasPXEQvUePrw%253D%253D&amp;source=gmail&amp;ust=1672420585302000&amp;usg=AOvVaw2bxJBmNwYLV01oTsPNUx0A"><img border="0" src="https://ci6.googleusercontent.com/proxy/8dxNjZ7RT1fT1BZeXW4Ka-I9FNM6uhuD36IugWDr206-XoBbEWxsr0bGwmVHvNotxMyIIjp7wntb4nKJEYGdi4ngxhTLeSE5NUuAT_jB6vHc24wX2pdDxpV1FIk1Ia9p7MpmNjsaFvdnjWUxDjEq0Ld6OUu0DclPrGgqbrXEXTcZARgYZvZ5oYBxao-9bet26ncGHvJu3_9TbB_x8a-t3zjMyJedX8Pp9eJgccaCMdU2PwR9E4JD-A=s0-d-e1-ft#https://media.licdn.com/dms/image/sync/C4E27AQEdeCjAAZuWdA/articleshare-shrink_800/0/1670319092739?e=1672941600&amp;v=beta&amp;t=fhHtQZkULQQq25V9dYo39QxdAS6WW6COSwXCizM0pgk" alt="View image" width="0" style="outline:none;color:#ffffff;text-decoration:none;width:0;opacity:0;height:0" class="CToWUd" data-bit="iit"></a></td> </tr> <tr> <td align="left"> <p style="margin:16px 16px 8px 16px;color:#000000;font-weight:600;font-size:14px">Five ways monday.com would make Santa's job easier</p></td> </tr> <tr> <td align="left"> <p style="margin:0 16px 16px 16px;color:rgba(0,0,0,.7)!important;font-weight:400;font-size:12px;line-height:1.333"></p></td> </tr> </tbody> </table></td> </tr> </tbody> </table></a></td> </tr> <tr> <td> <hr style="background-color:#d9d9d9;margin:0;color:#d9d9d9;border-color:#d9d9d9;border-width:0;border-style:solid;height:1px"></td> </tr> </tbody> </table></td> </tr> <tr> <td align="center" style="padding:32px 0"> <table border="0" cellpadding="0" cellspacing="0" style="display:inline-block"> <tbody> <tr> <td align="center" valign="middle"><a href="https://www.linkedin.com/comm/feed/?midToken=AQHTkVCuB40GUg&amp;midSig=2oPlZJ1yXBiWA1&amp;trk=eml-email_network_conversations_01-footer_promo-3-footer_see_all&amp;trkEmail=eml-email_network_conversations_01-footer_promo-3-footer_see_all-null-fs9mca%7Elc9c9xiu%7E8m-null-neptune%2Ffeed&amp;lipi=urn%3Ali%3Apage%3Aemail_email_network_conversations_01%3BHJeNncqDSEasPXEQvUePrw%3D%3D" aria-label="See more on LinkedIn" style="word-wrap:normal;color:#0a66c2;word-break:normal;white-space:normal;display:block;text-decoration:none;text-align:center" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.linkedin.com/comm/feed/?midToken%3DAQHTkVCuB40GUg%26midSig%3D2oPlZJ1yXBiWA1%26trk%3Deml-email_network_conversations_01-footer_promo-3-footer_see_all%26trkEmail%3Deml-email_network_conversations_01-footer_promo-3-footer_see_all-null-fs9mca%257Elc9c9xiu%257E8m-null-neptune%252Ffeed%26lipi%3Durn%253Ali%253Apage%253Aemail_email_network_conversations_01%253BHJeNncqDSEasPXEQvUePrw%253D%253D&amp;source=gmail&amp;ust=1672420585303000&amp;usg=AOvVaw00QrdE68apCFN87ge7egu3"> <table role="presentation" border="0" cellspacing="0" cellpadding="0" width="auto"> <tbody> <tr> <td bgcolor="#0A66C2" style="padding:12px 24px;color:#ffffff;font-weight:500;display:inline-block;text-decoration:none;font-size:20px;line-height:1.25em;border-color:#0a66c2;background-color:#0a66c2;border-radius:34px;border-width:1px;border-style:solid"><a href="https://www.linkedin.com/comm/feed/?midToken=AQHTkVCuB40GUg&amp;midSig=2oPlZJ1yXBiWA1&amp;trk=eml-email_network_conversations_01-footer_promo-3-footer_see_all&amp;trkEmail=eml-email_network_conversations_01-footer_promo-3-footer_see_all-null-fs9mca%7Elc9c9xiu%7E8m-null-neptune%2Ffeed&amp;lipi=urn%3Ali%3Apage%3Aemail_email_network_conversations_01%3BHJeNncqDSEasPXEQvUePrw%3D%3D" aria-hidden="true" style="color:#ffffff;display:inline-block;text-decoration:none" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.linkedin.com/comm/feed/?midToken%3DAQHTkVCuB40GUg%26midSig%3D2oPlZJ1yXBiWA1%26trk%3Deml-email_network_conversations_01-footer_promo-3-footer_see_all%26trkEmail%3Deml-email_network_conversations_01-footer_promo-3-footer_see_all-null-fs9mca%257Elc9c9xiu%257E8m-null-neptune%252Ffeed%26lipi%3Durn%253Ali%253Apage%253Aemail_email_network_conversations_01%253BHJeNncqDSEasPXEQvUePrw%253D%253D&amp;source=gmail&amp;ust=1672420585303000&amp;usg=AOvVaw00QrdE68apCFN87ge7egu3">See more on LinkedIn</a></td> </tr> </tbody> </table></a></td> </tr> </tbody> </table></td> </tr> </tbody> </table></td> </tr> </tbody> </table></td> </tr> </tbody> </table></td> </tr> <tr> <td> <table role="presentation" border="0" cellspacing="0" cellpadding="0" width="100%" bgcolor="#F3F2EF" align="left" style="background-color:#f3f2ef;padding-top:16px;color:#000000;text-align:left"> <tbody> <tr> <td> <table width="24" border="0" cellspacing="0" cellpadding="1"> <tbody> <tr> <td> <div style="height:0px;font-size:0px;line-height:0px"> &nbsp; </div></td> </tr> </tbody> </table></td> <td> <table role="presentation" border="0" cellspacing="0" cellpadding="0" width="100%"> <tbody> <tr> <td> <table role="presentation" border="0" cellspacing="0" cellpadding="0" width="100%"> <tbody> <tr> <td> <table width="1" border="0" cellspacing="0" cellpadding="1"> <tbody> <tr> <td> <div style="height:12px;font-size:12px;line-height:12px"> &nbsp; </div></td> </tr> </tbody> </table></td> </tr> <tr> <td align="left" style="padding:0;color:#000000;text-align:left"> <p style="margin:0;word-wrap:break-word;color:#000000;word-break:break-word;font-weight:400;font-size:12px;line-height:1.333">This email was intended for Noam Dahan. <a href="https://www.linkedin.com/e/v2?e=fs9mca-lc9c9xiu-8m&amp;lipi=urn%3Ali%3Apage%3Aemail_email_network_conversations_01%3BHJeNncqDSEasPXEQvUePrw%3D%3D&amp;a=customerServiceUrl&amp;midToken=AQHTkVCuB40GUg&amp;midSig=2oPlZJ1yXBiWA1&amp;ek=email_network_conversations_01&amp;articleId=4788" style="color:#0a66c2;text-decoration:underline;display:inline-block" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.linkedin.com/e/v2?e%3Dfs9mca-lc9c9xiu-8m%26lipi%3Durn%253Ali%253Apage%253Aemail_email_network_conversations_01%253BHJeNncqDSEasPXEQvUePrw%253D%253D%26a%3DcustomerServiceUrl%26midToken%3DAQHTkVCuB40GUg%26midSig%3D2oPlZJ1yXBiWA1%26ek%3Demail_network_conversations_01%26articleId%3D4788&amp;source=gmail&amp;ust=1672420585303000&amp;usg=AOvVaw3YDsxUCb4JXf7ryspjuWdL">Learn why we included this.</a></p></td> </tr> <tr> <td> <table width="1" border="0" cellspacing="0" cellpadding="1"> <tbody> <tr> <td> <div style="height:16px;font-size:16px;line-height:16px"> &nbsp; </div></td> </tr> </tbody> </table></td> </tr> <tr> <td align="left" style="padding:0;color:#000000;text-align:left"> <p style="margin:0;color:#000000;font-weight:400;font-size:12px;line-height:1.333">You are receiving Network Conversations emails.</p></td> </tr> <tr> <td> <table width="1" border="0" cellspacing="0" cellpadding="1"> <tbody> <tr> <td> <div style="height:16px;font-size:16px;line-height:16px"> &nbsp; </div></td> </tr> </tbody> </table></td> </tr> <tr> <td align="left" style="text-align:left"> <table role="presentation" align="center" border="0" cellspacing="0" cellpadding="0" width="100%"> <tbody> <tr> <td valign="middle" align="left" style="vertical-align:middle;text-align:left"><a href="https://www.linkedin.com/e/v2?e=fs9mca-lc9c9xiu-8m&amp;t=lun&amp;midToken=AQHTkVCuB40GUg&amp;midSig=2oPlZJ1yXBiWA1&amp;ek=email_network_conversations_01&amp;li=27&amp;m=unsub&amp;ts=unsub&amp;eid=fs9mca-lc9c9xiu-8m&amp;loid=AQG5VDquQQmJPgAAAYVe3AbndzQM-oaqw0ZT9SXCDSI48L6D45U9-QaT40gymD1Lw5dlHiYu7dcPgH2hmlfAGyp3BwO7u0aNU1vO7oIHxlt7VhHgjuJODZpHzVo" style="color:#0a66c2;text-decoration:underline;display:inline-block" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.linkedin.com/e/v2?e%3Dfs9mca-lc9c9xiu-8m%26t%3Dlun%26midToken%3DAQHTkVCuB40GUg%26midSig%3D2oPlZJ1yXBiWA1%26ek%3Demail_network_conversations_01%26li%3D27%26m%3Dunsub%26ts%3Dunsub%26eid%3Dfs9mca-lc9c9xiu-8m%26loid%3DAQG5VDquQQmJPgAAAYVe3AbndzQM-oaqw0ZT9SXCDSI48L6D45U9-QaT40gymD1Lw5dlHiYu7dcPgH2hmlfAGyp3BwO7u0aNU1vO7oIHxlt7VhHgjuJODZpHzVo&amp;source=gmail&amp;ust=1672420585303000&amp;usg=AOvVaw2Sxztj5Ys2u-ynoG2qk33B"> <span style="color:#0a66c2;font-weight:400;font-size:12px;line-height:1.333">Unsubscribe</span></a>&nbsp;&nbsp;·&nbsp;&nbsp;<a href="https://www.linkedin.com/e/v2?e=fs9mca-lc9c9xiu-8m&amp;lipi=urn%3Ali%3Apage%3Aemail_email_network_conversations_01%3BHJeNncqDSEasPXEQvUePrw%3D%3D&amp;a=customerServiceUrl&amp;midToken=AQHTkVCuB40GUg&amp;midSig=2oPlZJ1yXBiWA1&amp;ek=email_network_conversations_01&amp;li=26&amp;m=footer&amp;ts=help&amp;articleId=67" style="color:#0a66c2;text-decoration:underline;display:inline-block" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.linkedin.com/e/v2?e%3Dfs9mca-lc9c9xiu-8m%26lipi%3Durn%253Ali%253Apage%253Aemail_email_network_conversations_01%253BHJeNncqDSEasPXEQvUePrw%253D%253D%26a%3DcustomerServiceUrl%26midToken%3DAQHTkVCuB40GUg%26midSig%3D2oPlZJ1yXBiWA1%26ek%3Demail_network_conversations_01%26li%3D26%26m%3Dfooter%26ts%3Dhelp%26articleId%3D67&amp;source=gmail&amp;ust=1672420585303000&amp;usg=AOvVaw0dP6Krd6hCrWo0m2x-A4M1"> <span style="color:#0a66c2;font-weight:400;font-size:12px;line-height:1.333">Help</span></a></td> </tr> <tr> <td> <table width="1" border="0" cellspacing="0" cellpadding="1"> <tbody> <tr> <td> <div style="height:16px;font-size:16px;line-height:16px"> &nbsp; </div></td> </tr> </tbody> </table></td> </tr> </tbody> </table></td> </tr> <tr> <td align="left" style="padding:0;text-align:left"><a href="https://www.linkedin.com/comm/feed/?midToken=AQHTkVCuB40GUg&amp;midSig=2oPlZJ1yXBiWA1&amp;trk=eml-email_network_conversations_01-footer-24-home&amp;trkEmail=eml-email_network_conversations_01-footer-24-home-null-fs9mca%7Elc9c9xiu%7E8m-null-neptune%2Ffeed&amp;lipi=urn%3Ali%3Apage%3Aemail_email_network_conversations_01%3BHJeNncqDSEasPXEQvUePrw%3D%3D" style="color:#0a66c2;text-decoration:underline;display:inline-block" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.linkedin.com/comm/feed/?midToken%3DAQHTkVCuB40GUg%26midSig%3D2oPlZJ1yXBiWA1%26trk%3Deml-email_network_conversations_01-footer-24-home%26trkEmail%3Deml-email_network_conversations_01-footer-24-home-null-fs9mca%257Elc9c9xiu%257E8m-null-neptune%252Ffeed%26lipi%3Durn%253Ali%253Apage%253Aemail_email_network_conversations_01%253BHJeNncqDSEasPXEQvUePrw%253D%253D&amp;source=gmail&amp;ust=1672420585303000&amp;usg=AOvVaw1LrAiCVPDLT2EiuukpIjLX"><img alt="LinkedIn" border="0" height="14" src="https://ci3.googleusercontent.com/proxy/TLVrhEsucyWgfWgjIJZnBZHzni2d8Ll4LD8_inZMB-PNhHr73NcnoyxA8xhLhOXC_LFSvftEpvUsafXjizAvYOB7Ed3yjBiEPdAk4_mdOkalTT-11_-HdXKBBnW_1MDLOxiJ1fVuIH1TIBRR62tHlMzOBjxqBt6FoE58-Sr7mt6ELAKBTxmGSKxCL5GvWMrVKJ7fqPdKWeX93opfLcHbTeaLy9lp9hRwPAs6r0tu9vl6p4OiLje_A8GiYW4zTFXLF-4imM12Ywo43cFcjjuY-WGmlnuII6sO9DhAhg=s0-d-e1-ft#https://static.licdn.com/sc/p/com.linkedin.email-assets-frontend%3Aemail-assets-frontend-static-content%2B__latest__/f/%2Femail-assets-frontend%2Fimages%2Flogos%2Flogo_linkedin_mercado_blue_112x28.png" width="56" style="outline:none;color:#ffffff;max-width:unset!important;display:block;text-decoration:none" class="CToWUd" data-bit="iit"></a></td> </tr> <tr> <td> <table width="1" border="0" cellspacing="0" cellpadding="1"> <tbody> <tr> <td> <div style="height:16px;font-size:16px;line-height:16px"> &nbsp; </div></td> </tr> </tbody> </table></td> </tr> <tr> <td align="left" style="padding:0;color:#000000;text-align:left"> <p style="margin:0;color:#000000;font-weight:400;font-size:12px;line-height:1.333">© 2022 LinkedIn Ireland Unlimited Company, Wilton Plaza, Wilton Place, Dublin 2. LinkedIn is a registered business name of LinkedIn Ireland Unlimited Company. LinkedIn and the LinkedIn logo are registered trademarks of LinkedIn.</p></td> </tr> <tr> <td> <table width="1" border="0" cellspacing="0" cellpadding="1"> <tbody> <tr> <td> <div style="height:24px;font-size:24px;line-height:24px"> &nbsp; </div></td> </tr> </tbody> </table></td> </tr> </tbody> </table></td> </tr> </tbody> </table></td> <td> <table width="24" border="0" cellspacing="0" cellpadding="1"> <tbody> <tr> <td> <div style="height:0px;font-size:0px;line-height:0px"> &nbsp; </div></td> </tr> </tbody> </table></td> </tr> </tbody> </table></td> </tr> </tbody> </table> </center></td> </tr> </tbody> </table> <img alt="" role="presentation" src="https://ci4.googleusercontent.com/proxy/2a7k5HJQ4tEs3tgmrwQ3kTcK1enPOz6Nuyx6vKxGgMyx2UAV1Ddw258Y3hHFA8_GkEJNOVyZFMEGkVra-wMHoNeS3_QHxD41OqMtWXyKjgnRor58LdiNDBSLr1UD0xQyfJICTDr2djfifthqP6qiCaOGerl_2Fi4zgk-jSsl68A2l2J5YFDBxBACocXGclVW0w=s0-d-e1-ft#https://www.linkedin.com/emimp/ip_Wm5NNWJXTmhMV3hqT1dNNWVHbDFMVGh0OlpXMWhhV3hmYm1WMGQyOXlhMTlqYjI1MlpYSnpZWFJwYjI1elh6QXg6.gif" style="outline:none;color:#ffffff;text-decoration:none;width:1px;height:1px" class="CToWUd" data-bit="iit" jslog="138226; u014N:xr6bB; 53:W2ZhbHNlLDJd" l2v5owu1z=""><div class="yj6qo"></div><div class="adL"> </div></div><div class="adL"> </div></div></div><div id=":ok" class="ii gt" style="display:none"><div id=":ol" class="a3s aiL "></div></div><div class="hi"></div></div>
`,
      isRead: false,
      sentAt: Date.now() - 12000000,
      to: loggedinUser.email,
      isStared: false,
      status: 'inbox',
    },
    {
      id: 'e104',
      sender: 'Isha Life EU',
      from: 'info@ishalife.eu',
      subject: `don't miss our 5 day festive sale 🎁
      `,
      body: `
      <div style="width:100%;font-family:arial,'helvetica neue',helvetica,sans-serif;padding:0;Margin:0"><span style="display:none!important;font-size:0px;line-height:0;color:#ffffff;opacity:0;height:0;width:0">Make the most of the incredible five day discount sale at the Isha Life Store&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌<wbr>&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌<wbr>&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌<wbr>&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌<wbr>&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌<wbr>&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌<wbr>&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌<wbr>&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌<wbr>&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌<wbr>&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌<wbr>&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌<wbr>&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌<wbr>&nbsp;</span>
  <div style="background-color:#7d1916">
   <table width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#7d1916">
     <tbody><tr>
      <td class="m_-4247071174661548093es-m-margin" valign="top" style="padding:0;Margin:0">
       <table class="m_-4247071174661548093es-header" cellspacing="0" cellpadding="0" align="center" style="border-collapse:collapse;border-spacing:0px;table-layout:fixed!important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top">
         <tbody><tr>
          <td align="center" style="padding:0;Margin:0">
           <table class="m_-4247071174661548093es-header-body" cellspacing="0" cellpadding="0" align="center" style="border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px">
             <tbody><tr>
              <td align="left" style="padding:0;Margin:0">
               <table cellspacing="0" cellpadding="0" width="100%" style="border-collapse:collapse;border-spacing:0px">
                 <tbody><tr>
                  <td class="m_-4247071174661548093es-m-p0r" valign="top" align="center" style="padding:0;Margin:0;width:600px">
                   <table width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;border-spacing:0px">
                     <tbody><tr>
                      <td align="right" style="padding:0;Margin:0"><p style="Margin:0;font-family:merriweather,georgia,'times new roman',serif;line-height:21px;color:#333333;font-size:14px"><a style="text-decoration:underline;color:#ede5d6;font-size:14px" href="http://pxcrtw8c.r.eu-central-1.awstrack.me/L0/http:%2F%2Fishangam.isha.us%2Fmail%2Femailer%2F4090%2Fview%3Fdb=ishangam_us_prod_db%26res_id=1804494%26email=noyemdahan%2540gmail.com%26token=cedee1625fa3407a0f6390d4db60ea92e27d98c8cb214238d501553b456f41dfa40e3ff2843f89d81e1523acee6f3a432b53a8dc7fc3a1b881f0a0d97bb9dec6/1/01070185553cafb6-1d11afbb-42c4-46b4-bd64-be30df7978bc-000000/dDRJqwLSZ4V-lo9gQUVLbFHi7Z4=83" target="_blank" data-saferedirecturl="https://www.google.com/url?q=http://pxcrtw8c.r.eu-central-1.awstrack.me/L0/http:%252F%252Fishangam.isha.us%252Fmail%252Femailer%252F4090%252Fview%253Fdb%3Dishangam_us_prod_db%2526res_id%3D1804494%2526email%3Dnoyemdahan%252540gmail.com%2526token%3Dcedee1625fa3407a0f6390d4db60ea92e27d98c8cb214238d501553b456f41dfa40e3ff2843f89d81e1523acee6f3a432b53a8dc7fc3a1b881f0a0d97bb9dec6/1/01070185553cafb6-1d11afbb-42c4-46b4-bd64-be30df7978bc-000000/dDRJqwLSZ4V-lo9gQUVLbFHi7Z4%3D83&amp;source=gmail&amp;ust=1672421516801000&amp;usg=AOvVaw1Op4CwG_nFuYC5BBDH7HwA">Can't view Email?</a></p></td>
                     </tr>
                     <tr>
                      <td align="center" style="padding:0;Margin:0;font-size:0px"><a href="https://pxcrtw8c.r.eu-central-1.awstrack.me/L0/https:%2F%2Fishalife.eu/1/01070185553cafb6-1d11afbb-42c4-46b4-bd64-be30df7978bc-000000/zVTOo_zZmI6msAcz0klGDuypq6A=83" style="text-decoration:underline;color:#2cb543;font-size:14px" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://pxcrtw8c.r.eu-central-1.awstrack.me/L0/https:%252F%252Fishalife.eu/1/01070185553cafb6-1d11afbb-42c4-46b4-bd64-be30df7978bc-000000/zVTOo_zZmI6msAcz0klGDuypq6A%3D83&amp;source=gmail&amp;ust=1672421516801000&amp;usg=AOvVaw170sLZ4XBpr0f7ZTFK3LK_"><img class="m_-4247071174661548093adapt-img CToWUd" src="https://ci4.googleusercontent.com/proxy/lSMkR5KzZJO2xasHPjW1guoBZZq1uXDNqg0b4KrKC1Qbq2YZopZMjzf5f7dE6zR4ZNhT1bCJAib9yQnRrCs3o25aokqS8SKveBXla7whroHnqCmSGn1YeiYU22BgdvDELd-WOYiL5Lbl-CreVyYG6K13e5fsTAzE2TLHOzIUoF-pfHFXhQL_1eid1nlRfO4i0gz3QqQLOOaa_lTmAU0=s0-d-e1-ft#https://ptpbhc.stripocdn.email/content/guids/CABINET_b1c129104d4be4714a463030ad111b98/images/soft_brown_abstract_quote_instagram_post3.png" alt="Isha Life" style="display:block;border:0;outline:none;text-decoration:none;border-radius:0px 0px 20px 20px" width="600" title="Isha Life" height="600" data-bit="iit"></a></td>
                     </tr>
                   </tbody></table></td>
                 </tr>
               </tbody></table></td>
             </tr>
           </tbody></table></td>
         </tr>
       </tbody></table>
       <table cellpadding="0" cellspacing="0" class="m_-4247071174661548093es-content" align="center" style="border-collapse:collapse;border-spacing:0px;table-layout:fixed!important;width:100%">
         <tbody><tr>
          <td align="center" style="padding:0;Margin:0">
           <table class="m_-4247071174661548093es-content-body" cellspacing="0" cellpadding="0" align="center" style="border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px">
             <tbody><tr>
              <td align="left" style="Margin:0;padding-top:10px;padding-bottom:10px;padding-left:20px;padding-right:20px">
               <table cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse;border-spacing:0px">
                 <tbody><tr>
                  <td align="center" valign="top" style="padding:0;Margin:0;width:560px">
                   <table cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse;border-spacing:0px">
                     <tbody><tr>
                      <td align="center" style="padding:0;Margin:0;font-size:0px"><img class="m_-4247071174661548093adapt-img CToWUd" src="https://ci5.googleusercontent.com/proxy/6-x1f_L9SQe0nRdJBdrK1BWrDsYazUmbSypPZXvqx5my9zauW4e6dkba7UoqkwPKQkz_rL9SUKGC-jZ0WwbFad97LBTLZizHJ_Bn682rGeZpufXY-eHRsoqIW0A_MCT7xwch6l1FQWssfNJZihZpHTRAUc20Av9Go0wchto=s0-d-e1-ft#https://ptpbhc.stripocdn.email/content/guids/CABINET_dbeb0bc2040ee3059eebddcf61828b8d/images/edited_22.png" alt="" style="display:block;border:0;outline:none;text-decoration:none" width="302" height="21" data-bit="iit"></td>
                     </tr>
                   </tbody></table></td>
                 </tr>
               </tbody></table></td>
             </tr>
             <tr>
              <td align="left" bgcolor="#ffffff" style="Margin:0;padding-bottom:15px;padding-top:20px;padding-left:20px;padding-right:20px;background-color:#ffffff;border-radius:20px;background-image:url(https://ci3.googleusercontent.com/proxy/_NoNv0dpXQsDG2g4U5bT-7a1hkSoXcFrb3Rx7_3UWKwAB679GOkCVHsVkcBAaFiTrXYuPm76E8O_cUvhTkyYHlnOlUIewLAR1woqH7wGWUsMboyB_q9cCNHu2-Y6f0T4mk44volO-OeFLKaYXYBnIGenXoZBmNyAD7nlbR8=s0-d-e1-ft#https://ptpbhc.stripocdn.email/content/guids/CABINET_f8958bf22ef0ef1c471aa8c3362d74c6/images/layer_1_1.png);background-repeat:no-repeat;background-position:right top" background="https://ci3.googleusercontent.com/proxy/_NoNv0dpXQsDG2g4U5bT-7a1hkSoXcFrb3Rx7_3UWKwAB679GOkCVHsVkcBAaFiTrXYuPm76E8O_cUvhTkyYHlnOlUIewLAR1woqH7wGWUsMboyB_q9cCNHu2-Y6f0T4mk44volO-OeFLKaYXYBnIGenXoZBmNyAD7nlbR8=s0-d-e1-ft#https://ptpbhc.stripocdn.email/content/guids/CABINET_f8958bf22ef0ef1c471aa8c3362d74c6/images/layer_1_1.png">
               <table cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse;border-spacing:0px">
                 <tbody><tr>
                  <td align="center" valign="top" style="padding:0;Margin:0;width:560px">
                   <table cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse;border-spacing:0px">
                     <tbody><tr>
                      <td align="left" style="padding:0;Margin:0"><p style="Margin:0;font-family:merriweather,georgia,'times new roman',serif;line-height:24px;color:#333333;font-size:16px">Seasons Greetings!<br><br>We are delighted to announce that the <b><i>Isha Life Festive Sale</i></b> is now open.&nbsp;</p><p style="Margin:0;font-family:merriweather,georgia,'times new roman',serif;line-height:24px;color:#333333;font-size:16px"><br></p><p style="Margin:0;font-family:merriweather,georgia,'times new roman',serif;line-height:24px;color:#333333;font-size:16px">This offer is a one-off holiday discount on Isha Life Products, with up to 25%* off on selected items, available from 26th to 30th December.&nbsp;</p><p style="Margin:0;font-family:merriweather,georgia,'times new roman',serif;line-height:24px;color:#333333;font-size:16px"><br></p><p style="Margin:0;font-family:merriweather,georgia,'times new roman',serif;line-height:24px;color:#333333;font-size:16px">Make sure you’re all set for a joyful and vibrant new year ahead with the incredible offerings from Isha Life.&nbsp;</p><p style="Margin:0;font-family:merriweather,georgia,'times new roman',serif;line-height:24px;color:#333333;font-size:16px"><br></p><p style="Margin:0;font-family:merriweather,georgia,'times new roman',serif;line-height:24px;color:#333333;font-size:16px">Visit the Isha Life store now to see what sales are on offer.<br></p></td>
                     </tr>
                     <tr>
                      <td align="left" style="padding:0;Margin:0;padding-top:20px"><span class="m_-4247071174661548093es-button-border" style="border-style:solid;border-color:#7d1916;background:#ffffff;border-width:2px;display:inline-block;border-radius:30px;width:auto"><a href="https://pxcrtw8c.r.eu-central-1.awstrack.me/L0/https:%2F%2Fishalife.eu/3/01070185553cafb6-1d11afbb-42c4-46b4-bd64-be30df7978bc-000000/QghrYmnhhLE_YDwGdAZtKKJxYy0=83" class="m_-4247071174661548093es-button" style="text-decoration:none;color:#7d1916;font-size:18px;border-style:solid;border-color:#ffffff;border-width:10px 20px 10px 20px;display:inline-block;background:#ffffff;border-radius:30px;font-family:Montserrat,sans-serif;font-weight:normal;font-style:normal;line-height:22px;width:auto;text-align:center" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://pxcrtw8c.r.eu-central-1.awstrack.me/L0/https:%252F%252Fishalife.eu/3/01070185553cafb6-1d11afbb-42c4-46b4-bd64-be30df7978bc-000000/QghrYmnhhLE_YDwGdAZtKKJxYy0%3D83&amp;source=gmail&amp;ust=1672421516801000&amp;usg=AOvVaw31LFkpuHJOZfAmC8DOZZoV">Visit Isha Life Store</a></span></td>
                     </tr>
                     <tr>
                      <td align="left" style="padding:0;Margin:0;padding-top:20px"><p style="Margin:0;font-family:merriweather,georgia,'times new roman',serif;line-height:24px;color:#333333;font-size:16px">To take advantage of this exclusive offer of a 25% give away on selected products, click the link below. <b><i>Don’t miss out - catch the sale before it’s gone!</i></b><br></p></td>
                     </tr>
                     <tr>
                      <td align="left" style="padding:0;Margin:0;padding-top:20px"><span class="m_-4247071174661548093es-button-border" style="border-style:solid;border-color:#7d1916;background:#7d1916;border-width:2px;display:inline-block;border-radius:30px;width:auto"><a href="https://pxcrtw8c.r.eu-central-1.awstrack.me/L0/https:%2F%2Fishalife.eu/5/01070185553cafb6-1d11afbb-42c4-46b4-bd64-be30df7978bc-000000/03sYCsajgV4ZzWS0M2mi1odGTQ8=83" class="m_-4247071174661548093es-button" style="text-decoration:none;color:#ffffff;font-size:18px;border-style:solid;border-color:#7d1916;border-width:10px 20px 10px 20px;display:inline-block;background:#7d1916;border-radius:30px;font-family:Montserrat,sans-serif;font-weight:normal;font-style:normal;line-height:22px;width:auto;text-align:center" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://pxcrtw8c.r.eu-central-1.awstrack.me/L0/https:%252F%252Fishalife.eu/5/01070185553cafb6-1d11afbb-42c4-46b4-bd64-be30df7978bc-000000/03sYCsajgV4ZzWS0M2mi1odGTQ8%3D83&amp;source=gmail&amp;ust=1672421516802000&amp;usg=AOvVaw3WL9nTyRjKr4XxkljtLN5g">Order Here</a></span></td>
                     </tr>
                   </tbody></table></td>
                 </tr>
               </tbody></table></td>
             </tr>
             <tr>
              <td align="left" style="padding:0;Margin:0;padding-top:20px;padding-left:20px;padding-right:20px">
               <table cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse;border-spacing:0px">
                 <tbody><tr>
                  <td align="center" valign="top" style="padding:0;Margin:0;width:560px">
                   <table cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse;border-spacing:0px">
                     <tbody><tr>
                      <td align="center" height="20" style="padding:0;Margin:0"></td>
                     </tr>
                   </tbody></table></td>
                 </tr>
               </tbody></table></td>
             </tr>
             <tr>
              <td align="left" bgcolor="#ffffff" style="padding:20px;Margin:0;background-color:#ffffff;border-radius:20px">
               <table cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse;border-spacing:0px">
                 <tbody><tr>
                  <td align="center" valign="top" style="padding:0;Margin:0;width:560px">
                   <table cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse;border-spacing:0px">
                     <tbody><tr>
                      <td align="center" style="padding:0;Margin:0;padding-bottom:10px;font-size:0px"><img class="m_-4247071174661548093adapt-img CToWUd" src="https://ci5.googleusercontent.com/proxy/sGImMS7m4kp08BuJJAyN7eickRzQabUJfZhWMQGFxDRLxXJmAtTeeCQuBeCVC4F9Qw5od2kYqLyovFeSI72-LHfdlJ0eTvNqhpOIF5L85nRtunAAdfMrl_E_zDybh8KwzW35rSBS0VBmAxuHHTLYkvBZuFs3qaFThTGj8iaPdA=s0-d-e1-ft#https://ptpbhc.stripocdn.email/content/guids/CABINET_dbeb0bc2040ee3059eebddcf61828b8d/images/edited_3red.png" alt="" style="display:block;border:0;outline:none;text-decoration:none" width="302" height="21" data-bit="iit"></td>
                     </tr>
                     <tr>
                      <td align="left" style="padding:0;Margin:0"><p style="Margin:0;font-family:merriweather,georgia,'times new roman',serif;line-height:24px;color:#333333;font-size:16px">For any questions about these offerings, just email us at <a href="mailto:info@ishalife.eu" style="text-decoration:underline;color:#7d1916;font-size:16px" target="_blank">info@ishalife.eu</a></p><br><p style="Margin:0;font-family:merriweather,georgia,'times new roman',serif;line-height:24px;color:#333333;font-size:16px">With joy,</p><p style="Margin:0;font-family:merriweather,georgia,'times new roman',serif;line-height:24px;color:#333333;font-size:16px">Isha Volunteers<br><br><em>*on selected products while stocks last</em><br></p><p style="Margin:0;font-family:merriweather,georgia,'times new roman',serif;line-height:24px;color:#333333;font-size:16px;display:none"><br></p></td>
                     </tr>
                   </tbody></table></td>
                 </tr>
               </tbody></table></td>
             </tr>
             <tr>
              <td align="left" style="padding:0;Margin:0;padding-top:20px;padding-left:20px;padding-right:20px">
               <table cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse;border-spacing:0px">
                 <tbody><tr>
                  <td align="center" valign="top" style="padding:0;Margin:0;width:560px">
                   <table cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse;border-spacing:0px">
                     <tbody><tr>
                      <td align="center" height="20" style="padding:0;Margin:0"></td>
                     </tr>
                   </tbody></table></td>
                 </tr>
               </tbody></table></td>
             </tr>
           </tbody></table></td>
         </tr>
       </tbody></table>
       <table cellpadding="0" cellspacing="0" class="m_-4247071174661548093es-footer" align="center" style="border-collapse:collapse;border-spacing:0px;table-layout:fixed!important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top">
         <tbody><tr>
          <td align="center" style="padding:0;Margin:0">
           <table class="m_-4247071174661548093es-footer-body" align="center" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px">
             <tbody><tr>
              <td align="left" style="padding:20px;Margin:0;border-radius:20px 20px 0px 0px;background-color:#ede5d6" bgcolor="#ede5d6">
               <table cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse;border-spacing:0px">
                 <tbody><tr>
                  <td align="center" valign="top" style="padding:0;Margin:0;width:560px">
                   <table cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse;border-spacing:0px">
                     <tbody><tr>
                      <td align="center" class="m_-4247071174661548093es-m-txt-c" style="padding:0;Margin:0;font-size:0px" height="30"><a href="https://pxcrtw8c.r.eu-central-1.awstrack.me/L0/https:%2F%2Fishalife.eu/6/01070185553cafb6-1d11afbb-42c4-46b4-bd64-be30df7978bc-000000/902GfwB-RrNdxAf5In8paknXuNs=83" style="text-decoration:underline;color:#ffffff;font-size:14px" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://pxcrtw8c.r.eu-central-1.awstrack.me/L0/https:%252F%252Fishalife.eu/6/01070185553cafb6-1d11afbb-42c4-46b4-bd64-be30df7978bc-000000/902GfwB-RrNdxAf5In8paknXuNs%3D83&amp;source=gmail&amp;ust=1672421516802000&amp;usg=AOvVaw3n3JMh532KI7csnyHgfJ4c"><img src="https://ci3.googleusercontent.com/proxy/lFwZe4h_PodKWEY8J3r-43DkDcP8hwXfM14O9FLpjIeaDcsycW9pE5OrlCTuGa2bhYo0iu_4F_-f2Otnh3hRTylS0vtiCzUMoFJwehhm2WM9kNLAdJI5Az6cyN-xHK7nYo5B-ylpWLN2sYsWj39yHJwR5bv6bUgERSzxegN0DGEpwfqUaRY=s0-d-e1-ft#https://ptpbhc.stripocdn.email/content/guids/CABINET_dbeb0bc2040ee3059eebddcf61828b8d/images/ishalifehorizontal.png" alt="" style="display:block;border:0;outline:none;text-decoration:none" width="80" height="40" class="CToWUd" data-bit="iit"></a></td>
                     </tr>
                     <tr>
                      <td class="m_-4247071174661548093es-m-txt-c" style="padding:0;Margin:0;padding-top:15px;padding-bottom:15px;font-size:0" align="center">
                       <table class="m_-4247071174661548093es-table-not-adapt m_-4247071174661548093es-social" cellspacing="0" cellpadding="0" style="border-collapse:collapse;border-spacing:0px">
                         <tbody><tr>
                          <td valign="top" align="center" style="padding:0;Margin:0;padding-right:5px"><a href="https://pxcrtw8c.r.eu-central-1.awstrack.me/L0/https:%2F%2Fwww.facebook.com%2FIshaEurope%2F/1/01070185553cafb6-1d11afbb-42c4-46b4-bd64-be30df7978bc-000000/9f13gxpZlhiHt69QEEQmzkqPmes=83" style="text-decoration:underline;color:#ffffff;font-size:14px" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://pxcrtw8c.r.eu-central-1.awstrack.me/L0/https:%252F%252Fwww.facebook.com%252FIshaEurope%252F/1/01070185553cafb6-1d11afbb-42c4-46b4-bd64-be30df7978bc-000000/9f13gxpZlhiHt69QEEQmzkqPmes%3D83&amp;source=gmail&amp;ust=1672421516802000&amp;usg=AOvVaw36yvDSmOWu1Hmw2GZtPkJk"><img title="Facebook" src="https://ci4.googleusercontent.com/proxy/sw-qiV25M6tvisqr-NyBUWp9cu4nM1mBJqepVGB663JOYOKJwgg_YNzPgB_CUGw9rx63dQZinDTeqT5nXvil5j9CJgHJ7D4SNmPYdeGpeWakPXpX8CbFeIM7Vp_HlmUfWwMfg4rFT0Iv6Es32xQKtUaWv4D6OB0hDa028UGaKxb4AkrtxbgS9tkcCEY=s0-d-e1-ft#https://ptpbhc.stripocdn.email/content/assets/img/social-icons/rounded-black-bordered/facebook-rounded-black-bordered.png" alt="Fb" height="32" width="32" style="display:block;border:0;outline:none;text-decoration:none" class="CToWUd" data-bit="iit"></a></td>
                          <td valign="top" align="center" style="padding:0;Margin:0;padding-right:5px"><a href="https://pxcrtw8c.r.eu-central-1.awstrack.me/L0/https:%2F%2Ftwitter.com%2FIshaEurope/1/01070185553cafb6-1d11afbb-42c4-46b4-bd64-be30df7978bc-000000/0rs8kuxFjY2_InRn6CEEOUHLUhs=83" style="text-decoration:underline;color:#ffffff;font-size:14px" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://pxcrtw8c.r.eu-central-1.awstrack.me/L0/https:%252F%252Ftwitter.com%252FIshaEurope/1/01070185553cafb6-1d11afbb-42c4-46b4-bd64-be30df7978bc-000000/0rs8kuxFjY2_InRn6CEEOUHLUhs%3D83&amp;source=gmail&amp;ust=1672421516802000&amp;usg=AOvVaw1rw_nkhuFh6d4iMyyY5k-B"><img title="Twitter" src="https://ci6.googleusercontent.com/proxy/BXXI1rnD2rQOsFTm2bqgM0_FClOXHar_YF_t_fsq-GBC6lGDE8loy_UmVAzuIzbTKRFtN2d4IZ2EwxokJsoPAHsguMyxfi-SNZoyJE-OiuawTFSifI87GbMX2CyrPC7H1lFByVjSqDyeUfa5e95dBEguKPTY2PpLt_XRrgIRQE5c7JTrf8bfUqBSWw=s0-d-e1-ft#https://ptpbhc.stripocdn.email/content/assets/img/social-icons/rounded-black-bordered/twitter-rounded-black-bordered.png" alt="Tw" height="32" width="32" style="display:block;border:0;outline:none;text-decoration:none" class="CToWUd" data-bit="iit"></a></td>
                          <td valign="top" align="center" style="padding:0;Margin:0;padding-right:5px"><a href="https://pxcrtw8c.r.eu-central-1.awstrack.me/L0/https:%2F%2Fwww.instagram.com%2Fisha.uk.europe%2F/1/01070185553cafb6-1d11afbb-42c4-46b4-bd64-be30df7978bc-000000/mVtD264D7UBIpFxVcG76BTBSoso=83" style="text-decoration:underline;color:#ffffff;font-size:14px" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://pxcrtw8c.r.eu-central-1.awstrack.me/L0/https:%252F%252Fwww.instagram.com%252Fisha.uk.europe%252F/1/01070185553cafb6-1d11afbb-42c4-46b4-bd64-be30df7978bc-000000/mVtD264D7UBIpFxVcG76BTBSoso%3D83&amp;source=gmail&amp;ust=1672421516802000&amp;usg=AOvVaw0mrI0aGpH9HwadMaulokAB"><img title="Instagram" src="https://ci6.googleusercontent.com/proxy/guML0h9vSgjFl6S6T9r4c6sXA_b9PE_QS0V2Iuk8r92Me2gz1k6J4kWub6winC8imIVkDpvIsoedu88PIebSRyaAUMm7QX9Dlwsn-n8n5HX0xGuNmL0j5XJyr1IA5z9ieE51xSMXaP5XATzQmhFSfO_ro5qu74DzbGrpMBuNDJbVT-6V6d95HBE7vgLw=s0-d-e1-ft#https://ptpbhc.stripocdn.email/content/assets/img/social-icons/rounded-black-bordered/instagram-rounded-black-bordered.png" alt="Inst" height="32" width="32" style="display:block;border:0;outline:none;text-decoration:none" class="CToWUd" data-bit="iit"></a></td>
                          <td valign="top" align="center" style="padding:0;Margin:0;padding-right:5px"><a href="https://pxcrtw8c.r.eu-central-1.awstrack.me/L0/https:%2F%2Fwww.youtube.com%2Fuser%2Fsadhguru/1/01070185553cafb6-1d11afbb-42c4-46b4-bd64-be30df7978bc-000000/XfEDnwDUh_CoWbLS5oKN1ZD3_WQ=83" style="text-decoration:underline;color:#ffffff;font-size:14px" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://pxcrtw8c.r.eu-central-1.awstrack.me/L0/https:%252F%252Fwww.youtube.com%252Fuser%252Fsadhguru/1/01070185553cafb6-1d11afbb-42c4-46b4-bd64-be30df7978bc-000000/XfEDnwDUh_CoWbLS5oKN1ZD3_WQ%3D83&amp;source=gmail&amp;ust=1672421516802000&amp;usg=AOvVaw2Ya_UyAu5C3YLvaQBkUSyr"><img title="Youtube" src="https://ci6.googleusercontent.com/proxy/0-AJhCyAWiFI2L0u6uX4lTQWcjivvJQktq4dhf_VcO-r2QHvvrn7Z_23My6gB-eX7hsXPnPnQY4hxVlGnh8URWIdMH88gd6YKFY_XMolISX2Sn1CD3mo_HK6uFgmxBXJ81ejrQm8I6WpCgVATbqTIrNQYpjl7Ks9BPXX14OCFilz19oA724iu_6T9Q=s0-d-e1-ft#https://ptpbhc.stripocdn.email/content/assets/img/social-icons/rounded-black-bordered/youtube-rounded-black-bordered.png" alt="Yt" height="32" width="32" style="display:block;border:0;outline:none;text-decoration:none" class="CToWUd" data-bit="iit"></a></td>
                          <td valign="top" align="center" style="padding:0;Margin:0;padding-right:5px"><a href="https://pxcrtw8c.r.eu-central-1.awstrack.me/L0/https:%2F%2Fsoundcloud.com%2Fsadhguru/1/01070185553cafb6-1d11afbb-42c4-46b4-bd64-be30df7978bc-000000/ei3zewEZx0z16CsjD4mH1MDq3zg=83" style="text-decoration:underline;color:#ffffff;font-size:14px" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://pxcrtw8c.r.eu-central-1.awstrack.me/L0/https:%252F%252Fsoundcloud.com%252Fsadhguru/1/01070185553cafb6-1d11afbb-42c4-46b4-bd64-be30df7978bc-000000/ei3zewEZx0z16CsjD4mH1MDq3zg%3D83&amp;source=gmail&amp;ust=1672421516802000&amp;usg=AOvVaw2jxTIlGEW7VG9WudxJ_MGX"><img title="Soundcloud" src="https://ci4.googleusercontent.com/proxy/v_155_bfB1zDL3L3-244YheuMTw5QQFBlK1H87ArbwWmLfZqCCt2jemRFCxdwHFtzCtqxcYMCAMjsftyrUgGwrUBROw6tu_Itfgm11N9cyIbG2KDgNy-7iNRFQj3ZhlqmTBC-I2RzGgphNYEI4ZRn4mhEp9548w55dnmClFc4VAnp2AUqFfM5YsDOevSuA=s0-d-e1-ft#https://ptpbhc.stripocdn.email/content/assets/img/social-icons/rounded-black-bordered/soundcloud-rounded-black-bordered.png" alt="Sc" height="32" width="32" style="display:block;border:0;outline:none;text-decoration:none" class="CToWUd" data-bit="iit"></a></td>
                          <td valign="top" align="center" style="padding:0;Margin:0"><a href="https://pxcrtw8c.r.eu-central-1.awstrack.me/L0/https:%2F%2Fisha.sadhguru.org/1/01070185553cafb6-1d11afbb-42c4-46b4-bd64-be30df7978bc-000000/yJcmt4WWK1lxGMBTSn_3qkonrks=83" style="text-decoration:underline;color:#ffffff;font-size:14px" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://pxcrtw8c.r.eu-central-1.awstrack.me/L0/https:%252F%252Fisha.sadhguru.org/1/01070185553cafb6-1d11afbb-42c4-46b4-bd64-be30df7978bc-000000/yJcmt4WWK1lxGMBTSn_3qkonrks%3D83&amp;source=gmail&amp;ust=1672421516802000&amp;usg=AOvVaw3YtickA7qMUKhdRjDExnL_"><img title="World" src="https://ci5.googleusercontent.com/proxy/yBYleKelPn6Gq6wq2eYl5BJ35EE74sZtNcvPQNi2hyQamulqqoe8Xow1guDjqBRrHMzPa9Zd2e0lFR5c2tnzbaDFwhfjDp7GGEAbYHAxDiHI1dZ19MHQVjiW3YW2r0lsi0AF3HFVwmgJu2X-Se9Mo5rpZsZO-vmmwWM-fxjC3LnedXNTpG34Vg=s0-d-e1-ft#https://ptpbhc.stripocdn.email/content/assets/img/other-icons/rounded-black-bordered/globe-rounded-black-bordered.png" alt="World" height="32" width="32" style="display:block;border:0;outline:none;text-decoration:none" class="CToWUd" data-bit="iit"></a></td>
                         </tr>
                       </tbody></table></td>
                     </tr>
                     <tr>
                      <td class="m_-4247071174661548093es-m-txt-c" align="center" style="padding:0;Margin:0;padding-bottom:10px"><p style="Margin:0;font-family:montserrat,helvetica,arial,sans-serif;line-height:21px;color:#000000;font-size:14px">Copyright © 2022 Isha Foundation<br>111 Whitby Road, Slough, <span style="white-space:nowrap">Berkshire SL1 3DR</span><br>Company no. 07259502 <span style="white-space:nowrap">Charity no. 1152417</span></p></td>
                     </tr>
                     <tr>
                      <td class="m_-4247071174661548093es-m-txt-c" align="center" style="padding:0;Margin:0;padding-top:5px"><p style="Margin:0;font-family:montserrat,helvetica,arial,sans-serif;line-height:21px;color:#000000;font-size:14px"><a style="text-decoration:underline;color:#000000;font-size:14px;font-family:Montserrat,helvetica,arial,sans-serif" href="mailto:info@ishalife.eu" target="_blank">Contact Us</a> | <a style="text-decoration:underline;color:#000000;font-size:14px;font-family:Montserrat,helvetica,arial,sans-serif" href="https://pxcrtw8c.r.eu-central-1.awstrack.me/L0/https:%2F%2Fwww.ishayoga.eu%2Findex.php%2Fprivacy-policy/1/01070185553cafb6-1d11afbb-42c4-46b4-bd64-be30df7978bc-000000/GXqwdZog8u6XYbRbr87cAESkrWI=83" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://pxcrtw8c.r.eu-central-1.awstrack.me/L0/https:%252F%252Fwww.ishayoga.eu%252Findex.php%252Fprivacy-policy/1/01070185553cafb6-1d11afbb-42c4-46b4-bd64-be30df7978bc-000000/GXqwdZog8u6XYbRbr87cAESkrWI%3D83&amp;source=gmail&amp;ust=1672421516803000&amp;usg=AOvVaw1bWkxxs48Sipy4DyCXNHJ6">Privacy</a> | <a style="text-decoration:underline;color:#000000;font-size:14px;font-family:Montserrat,helvetica,arial,sans-serif" href="http://pxcrtw8c.r.eu-central-1.awstrack.me/L0/http:%2F%2Fishangam.isha.us%2Fmail%2Fisha_mailing%2F4090%2Funsubscribe%3Fdb=ishangam_us_prod_db%26res_id=1804494%26email=noyemdahan%2540gmail.com%26token=cedee1625fa3407a0f6390d4db60ea92e27d98c8cb214238d501553b456f41dfa40e3ff2843f89d81e1523acee6f3a432b53a8dc7fc3a1b881f0a0d97bb9dec6/1/01070185553cafb6-1d11afbb-42c4-46b4-bd64-be30df7978bc-000000/loJCjuLvmDPE-oAC2_WNnuPjcsA=83" target="_blank" data-saferedirecturl="https://www.google.com/url?q=http://pxcrtw8c.r.eu-central-1.awstrack.me/L0/http:%252F%252Fishangam.isha.us%252Fmail%252Fisha_mailing%252F4090%252Funsubscribe%253Fdb%3Dishangam_us_prod_db%2526res_id%3D1804494%2526email%3Dnoyemdahan%252540gmail.com%2526token%3Dcedee1625fa3407a0f6390d4db60ea92e27d98c8cb214238d501553b456f41dfa40e3ff2843f89d81e1523acee6f3a432b53a8dc7fc3a1b881f0a0d97bb9dec6/1/01070185553cafb6-1d11afbb-42c4-46b4-bd64-be30df7978bc-000000/loJCjuLvmDPE-oAC2_WNnuPjcsA%3D83&amp;source=gmail&amp;ust=1672421516803000&amp;usg=AOvVaw1QOHANz0CMBzDaeWE0CNIz">Unsubscribe</a> | <a style="text-decoration:underline;color:#000000;font-size:14px;font-family:Montserrat,helvetica,arial,sans-serif;white-space:nowrap" href="http://pxcrtw8c.r.eu-central-1.awstrack.me/L0/http:%2F%2Fishangam.isha.us%2Fmail%2Fisha_mailing%2F4090%2Fmanage%3Fdb=ishangam_us_prod_db%26res_id=1804494%26email=noyemdahan%2540gmail.com%26token=cedee1625fa3407a0f6390d4db60ea92e27d98c8cb214238d501553b456f41dfa40e3ff2843f89d81e1523acee6f3a432b53a8dc7fc3a1b881f0a0d97bb9dec6/1/01070185553cafb6-1d11afbb-42c4-46b4-bd64-be30df7978bc-000000/1Oky3jW8dnxgkExaFnq1Ik9J8Pw=83" target="_blank" data-saferedirecturl="https://www.google.com/url?q=http://pxcrtw8c.r.eu-central-1.awstrack.me/L0/http:%252F%252Fishangam.isha.us%252Fmail%252Fisha_mailing%252F4090%252Fmanage%253Fdb%3Dishangam_us_prod_db%2526res_id%3D1804494%2526email%3Dnoyemdahan%252540gmail.com%2526token%3Dcedee1625fa3407a0f6390d4db60ea92e27d98c8cb214238d501553b456f41dfa40e3ff2843f89d81e1523acee6f3a432b53a8dc7fc3a1b881f0a0d97bb9dec6/1/01070185553cafb6-1d11afbb-42c4-46b4-bd64-be30df7978bc-000000/1Oky3jW8dnxgkExaFnq1Ik9J8Pw%3D83&amp;source=gmail&amp;ust=1672421516803000&amp;usg=AOvVaw1lTDsvhSH0e8SRsGcN4srz">Manage Email Preferences</a></p></td>
                     </tr>
                   </tbody></table></td>
                 </tr>
               </tbody></table></td>
             </tr>
           </tbody></table></td>
         </tr>
       </tbody></table></td>
     </tr>
   </tbody></table>
  </div>
 <img alt="" src="https://ci6.googleusercontent.com/proxy/hMkixnYkFiAtbDeB8cOEuqg93mDF5dBt9HABlMMpJgw6mXWhiewy8_V-ukX6SaFZonVI2aB7SLLI1CIgDLzrOWleBDPPGCzcP7W1FQJfPA8Xp5Hxs4v_c0lzNcgLUJkDTCJif7HnpS3f47WL1H5fy7R0zEewkAC1NfSQdkMPjO-jeUU-EwgZeC7l_DVecQFLub_GA_WlOMCexTht3VM=s0-d-e1-ft#https://pxcrtw8c.r.eu-central-1.awstrack.me/I0/01070185553cafb6-1d11afbb-42c4-46b4-bd64-be30df7978bc-000000/XOk6s7xm8swiYWYp-7r-FZTn574=83" style="display:none;width:1px;height:1px" class="CToWUd" data-bit="iit" jslog="138226; u014N:xr6bB; 53:W2ZhbHNlLDJd" f9guzt6f3=""><div class="yj6qo"></div><div class="adL">
</div></div>
      `,
      isRead: true,
      sentAt: Date.now() - 1900000000,
      to: loggedinUser.email,
      isStared: false,
      status: 'inbox',
    },
    {
      id: 'e105',
      sender: 'Github',
      from: 'notifications@github.com',
      subject: `Tommy and 39 others made changes in your shared folders
      `,
      body: `<div id="m_7707452252046326481main" style="background:#f7f6f3;text-align:center;padding:20px;font-variant:normal;font-weight:normal;font-family:Arial;font-size:14px;color:black">
      <table border="0" cellspacing="0" cellpadding="0" width="100%" align="center">
          <tbody><tr style="font-family:Arial;font-size:12px;text-align:center">
              <td style="padding-right:25px" width="10%"><img src="https://ci4.googleusercontent.com/proxy/2jc_RUTw3rlWVQ-6iuX4-y06wDzEObT2fBJFFT5rgfAvF9U0XIBW0qHnxQHjHjA6835LPrMIYe-mrgCVEh1fiiPwmxcFAIhvJxR27CjM=s0-d-e1-ft#https://www.mcc.co.il/pics/site_home/mcc_new_logo_email.png" class="CToWUd" data-bit="iit"></td>
          </tr>
          <tr style="font-family:Arial;font-size:12px;text-align:center">
              <td><br></td>
          </tr>
          <tr style="font-family:Arial;font-size:22px;color:#444444;text-align:right" align="right">
              <td>שלום <u></u>נעם חיים דהן<u></u></td>
          </tr>
      </tbody></table><br>&nbsp;<div style="background-color:white;padding:5px;font-size:30px;font-weight:normal;border-right:1px solid #e1e2dd">
        
          
          <a href="https://www.mcc.co.il/site/pg/mcc_item_new,317896?eid=2446&amp;mid=437984" alt="" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.mcc.co.il/site/pg/mcc_item_new,317896?eid%3D2446%26mid%3D437984&amp;source=gmail&amp;ust=1672479134878000&amp;usg=AOvVaw0iPftNU9RLwNLEOckdJYQo">
            <img src="https://ci5.googleusercontent.com/proxy/tgOQgdahNoCJEQvPYOPFNuEb6eUP3UHddobEZWF-8xd0mr3DmHWKirKBs_nMT7AeZHGlQ6dFXiourJz_lUkT6XVy69ph81bnCTgA7w=s0-d-e1-ft#https://www.mcc.co.il/pics/site_home/ask_bmail_281222.jpg" alt="" class="CToWUd" data-bit="iit">
          </a>
          
          
          
          <p style="margin:0">מבצע דגמי מיצובישי עם הטבה לבחירתך
      </p>
      </div>
      <div style="background-color:white;font-size:18px;color:#7e8895;padding:1px 0;border-bottom:1px solid #e1e2dd;border-right:1px solid #e1e2dd">
        
          
          <a href="https://www.mcc.co.il/site/pg/mcc_item_new,317896?eid=2446&amp;mid=437984" alt="" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.mcc.co.il/site/pg/mcc_item_new,317896?eid%3D2446%26mid%3D437984&amp;source=gmail&amp;ust=1672479134879000&amp;usg=AOvVaw2B1uesqeF1jX5WVkJg1Fqs">
            
          </a>
          
          
          
          <p align="center">לראשונה ניתן לבחור: הנחה בלבד או הנחה וחבילת "בראש שקט" הכוללת שירותים, בדיקות וטיפולים ל- 3 שנים, על מגוון דגמים. בתוקף עד 17.1.23</p>
      <p><a href="https://www.mcc.co.il/site/pg/mcc_item_new,317896?eid=2446&amp;mid=437984" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.mcc.co.il/site/pg/mcc_item_new,317896?eid%3D2446%26mid%3D437984&amp;source=gmail&amp;ust=1672479134879000&amp;usg=AOvVaw2B1uesqeF1jX5WVkJg1Fqs"><img style="border:0px;display:block;margin-left:auto;margin-right:auto" src="https://ci5.googleusercontent.com/proxy/8U-zzBVkieiIs2dwILvsH9NvXL_yIqNkLHlWy2gSijFq9GAvg3TQfratoXACPsZ311DMXNwMFlJDMhLuKtMcO14QqEz63hZUvkijPFlXYKbNqOX_peCiqehsK4g=s0-d-e1-ft#https://www.mcc.co.il/pics/site_home/flags/mail_btn_car_nadlan_090320.png" alt="פרטים בקרוב" width="150" height="30" class="CToWUd" data-bit="iit"></a></p>
      </div>
      <br>&nbsp;<br>&nbsp;<table width="100%" border="0" cellspacing="0" cellpadding="0"><tbody><tr><td valign="top" width="320px">
      <table align="center" width="260" height="400" cellspacing="0" cellpadding="5" border="0" style="width:260px;display:inline-block;padding-bottom:20px;padding-top:10px;background-color:white;border-bottom:1px solid #e1e2dd;border-right:1px solid #e1e2dd">
        <tbody><tr>
          <td valign="top" align="center" height="110">
            <a style="text-decoration:none" href="https://www.mcc.co.il/site/pg/mcc_item_new,318778?eid=2446&amp;mid=437984" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.mcc.co.il/site/pg/mcc_item_new,318778?eid%3D2446%26mid%3D437984&amp;source=gmail&amp;ust=1672479134879000&amp;usg=AOvVaw1njFPL2cUB5OHcU67ja1F1"><img src="https://ci3.googleusercontent.com/proxy/k3fDzFb7UhyQwWEbNHtsMGkyOZVqgZAKH7nNhh_JO5gGOYJGRuSHK-fU7XerEYA3rGk1gMC_pl_OFVXVxj8kB1KCILIAMZoWGl_fJaqXSsWwC-M=s0-d-e1-ft#https://www.mcc.co.il/pics/site_home/story_shely_mail_261222.jpg" alt="" border="0" class="CToWUd" data-bit="iit"></a>
          </td>
        </tr>
        <tr>
          <td valign="top" align="center" width="220" height="70" style="font-family:Arial,sans-serif" dir="rtl">
            <h3 style="font-weight:normal;font-size:23px;text-align:center;margin:0" dir="rtl">חדש בכרטיס הנטען! STORY</h3>
          </td>
        </tr>
        <tr>
          <td valign="top" align="center" width="250" height="120" style="font-weight:normal;font-family:Arial,sans-serif;font-size:16px;color:#7e8895" dir="rtl">
            רשת חנויות מולטי-ברנד המציעה פריטים של מותגי אופנה מובילים תוך מתן חשיבות לשמירה על איכות הסביבה. מכבדים את הנטען בסניפים ובאונליין
          </td>
        </tr>
          <tr>
          <td valign="top" align="center" width="40">
            <a style="text-decoration:none" href="https://www.mcc.co.il/site/pg/mcc_item_new,318778?eid=2446&amp;mid=437984" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.mcc.co.il/site/pg/mcc_item_new,318778?eid%3D2446%26mid%3D437984&amp;source=gmail&amp;ust=1672479134879000&amp;usg=AOvVaw1njFPL2cUB5OHcU67ja1F1"> <img src="https://ci6.googleusercontent.com/proxy/tkDl0jmeMi2zBf59B_u00f9ITOdBUBI92mZ2B-_2slPi-iXg5b4zdQrVykavaWg5hDgo0SO8p2mkpwlz2llzqD2x7bKj4gFXXpx1xosDT0wtmuW5NL5SdLTV09g=s0-d-e1-ft#https://www.mcc.co.il/pics/site_home/flags/mail_btn_tzarchanut_090320.png" alt="more details" class="CToWUd" data-bit="iit"></a>
          </td>
        </tr>
      </tbody></table>
      </td><td valign="top" width="320px">
      <table align="center" width="260" height="400" cellspacing="0" cellpadding="5" border="0" style="width:260px;display:inline-block;padding-bottom:20px;padding-top:10px;background-color:white;border-bottom:1px solid #e1e2dd;border-right:1px solid #e1e2dd">
        <tbody><tr>
          <td valign="top" align="center" height="110">
            <a style="text-decoration:none" href="https://www.mcc.co.il/site/pg/mcc_item_new,318780?eid=2446&amp;mid=437984" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.mcc.co.il/site/pg/mcc_item_new,318780?eid%3D2446%26mid%3D437984&amp;source=gmail&amp;ust=1672479134879000&amp;usg=AOvVaw09gZrvn-0VYl7hcle3eegP"><img src="https://ci3.googleusercontent.com/proxy/ZU4xoZ5j2YtPiSNjjyLjLexIkBe4b3_MwLfoBS2JjycdlFWoirizDYH6-OaPbOFv4cb2NRTyvVUXdadBKzedheUobJ1yiS-N7RgABSvW1m8dRW0ZT_Kz-Q=s0-d-e1-ft#https://www.mcc.co.il/pics/site_home/scotchsoda_shely_mail_271222.jpg" alt="" border="0" class="CToWUd" data-bit="iit"></a>
          </td>
        </tr>
        <tr>
          <td valign="top" align="center" width="220" height="70" style="font-family:Arial,sans-serif" dir="rtl">
            <h3 style="font-weight:normal;font-size:23px;text-align:center;margin:0" dir="rtl">חדש בכרטיס הנטען! SCOTCH &amp; SODA</h3>
          </td>
        </tr>
        <tr>
          <td valign="top" align="center" width="250" height="120" style="font-weight:normal;font-family:Arial,sans-serif;font-size:16px;color:#7e8895" dir="rtl">
            מותג הידוע בעיצובים קלאסיים, המשלבים פרינטים מקוריים עם בדים איכותיים. מכבדים את הכרטיס הנטען בסניפים וברכישה אונליין
          </td>
        </tr>
          <tr>
          <td valign="top" align="center" width="40">
            <a style="text-decoration:none" href="https://www.mcc.co.il/site/pg/mcc_item_new,318780?eid=2446&amp;mid=437984" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.mcc.co.il/site/pg/mcc_item_new,318780?eid%3D2446%26mid%3D437984&amp;source=gmail&amp;ust=1672479134879000&amp;usg=AOvVaw09gZrvn-0VYl7hcle3eegP"> <img src="https://ci6.googleusercontent.com/proxy/tkDl0jmeMi2zBf59B_u00f9ITOdBUBI92mZ2B-_2slPi-iXg5b4zdQrVykavaWg5hDgo0SO8p2mkpwlz2llzqD2x7bKj4gFXXpx1xosDT0wtmuW5NL5SdLTV09g=s0-d-e1-ft#https://www.mcc.co.il/pics/site_home/flags/mail_btn_tzarchanut_090320.png" alt="more details" class="CToWUd" data-bit="iit"></a>
          </td>
        </tr>
      </tbody></table>
      </td></tr><tr><td colspan="2" valign="top"><br>&nbsp;</td></tr><tr></tr><tr><td valign="top" width="320px">
      <table align="center" width="260" height="400" cellspacing="0" cellpadding="5" border="0" style="width:260px;display:inline-block;padding-bottom:20px;padding-top:10px;background-color:white;border-bottom:1px solid #e1e2dd;border-right:1px solid #e1e2dd">
        <tbody><tr>
          <td valign="top" align="center" height="110">
            <a style="text-decoration:none" href="https://www.mcc.co.il/site/pg/mcc_item_new,318787?eid=2446&amp;mid=437984" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.mcc.co.il/site/pg/mcc_item_new,318787?eid%3D2446%26mid%3D437984&amp;source=gmail&amp;ust=1672479134879000&amp;usg=AOvVaw0hW7DCWiyS3A_jyUQNsm_J"><img src="https://ci4.googleusercontent.com/proxy/Hm_puFUgTcEtVcvJXl-5HU0jka0olVCI_-avmMkrfIu_EVfdYebllD4oQohuOohf4c_zU_HVDNHzuxcsaqQiaP9r_RBtSzJfWRr955Zc1sPtZQ=s0-d-e1-ft#https://www.mcc.co.il/pics/site_home/word_shely_mail_281222.jpg" alt="" border="0" class="CToWUd" data-bit="iit"></a>
          </td>
        </tr>
        <tr>
          <td valign="top" align="center" width="220" height="70" style="font-family:Arial,sans-serif" dir="rtl">
            <h3 style="font-weight:normal;font-size:23px;text-align:center;margin:0" dir="rtl">חדש בכרטיס הנטען! WORD</h3>
          </td>
        </tr>
        <tr>
          <td valign="top" align="center" width="250" height="120" style="font-weight:normal;font-family:Arial,sans-serif;font-size:16px;color:#7e8895" dir="rtl">
            רשת חנויות המציעה מותגים בינלאומיים ומובילה את אופנת ה-״סטריט״ עם פריטים לגברים, נשים וילדים. מכבדים את הנטען בסניפים
          </td>
        </tr>
          <tr>
          <td valign="top" align="center" width="40">
            <a style="text-decoration:none" href="https://www.mcc.co.il/site/pg/mcc_item_new,318787?eid=2446&amp;mid=437984" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.mcc.co.il/site/pg/mcc_item_new,318787?eid%3D2446%26mid%3D437984&amp;source=gmail&amp;ust=1672479134879000&amp;usg=AOvVaw0hW7DCWiyS3A_jyUQNsm_J"> <img src="https://ci6.googleusercontent.com/proxy/tkDl0jmeMi2zBf59B_u00f9ITOdBUBI92mZ2B-_2slPi-iXg5b4zdQrVykavaWg5hDgo0SO8p2mkpwlz2llzqD2x7bKj4gFXXpx1xosDT0wtmuW5NL5SdLTV09g=s0-d-e1-ft#https://www.mcc.co.il/pics/site_home/flags/mail_btn_tzarchanut_090320.png" alt="more details" class="CToWUd" data-bit="iit"></a>
          </td>
        </tr>
      </tbody></table>
      </td><td valign="top" width="320px">
      <table align="center" width="260" height="400" cellspacing="0" cellpadding="5" border="0" style="width:260px;display:inline-block;padding-bottom:20px;padding-top:10px;background-color:white;border-bottom:1px solid #e1e2dd;border-right:1px solid #e1e2dd">
        <tbody><tr>
          <td valign="top" align="center" height="110">
            <a style="text-decoration:none" href="https://www.mcc.co.il/site/pg/mcc_item_new,318781?eid=2446&amp;mid=437984" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.mcc.co.il/site/pg/mcc_item_new,318781?eid%3D2446%26mid%3D437984&amp;source=gmail&amp;ust=1672479134879000&amp;usg=AOvVaw17ewrnbbygOis--KqIJuFm"><img src="https://ci3.googleusercontent.com/proxy/_ZN2qSki6K5XSiQgCLsM1JIlB35Fv2E3LeIJ_92v9ijA8hQt4tj3PwtPa8LphO1IGf_whe2ME7Jon--wuNkao6MaUoc3nIXZRfqdukG10twyRYXM9Ib5=s0-d-e1-ft#https://www.mcc.co.il/pics/site_home/allsaints_shely_mail_271222.jpg" alt="" border="0" class="CToWUd" data-bit="iit"></a>
          </td>
        </tr>
        <tr>
          <td valign="top" align="center" width="220" height="70" style="font-family:Arial,sans-serif" dir="rtl">
            <h3 style="font-weight:normal;font-size:23px;text-align:center;margin:0" dir="rtl">חדש בכרטיס הנטען! ALL SAINTS</h3>
          </td>
        </tr>
        <tr>
          <td valign="top" align="center" width="250" height="120" style="font-weight:normal;font-family:Arial,sans-serif;font-size:16px;color:#7e8895" dir="rtl">
            מותג המציע פריטים ייחודיים בסגנון קז׳ואל המשלבים גוונים של שחור, עם עור ועיצובים א־סימטריים מקוריים בחיבור חזק לעולם המוזיקה
          </td>
        </tr>
          <tr>
          <td valign="top" align="center" width="40">
            <a style="text-decoration:none" href="https://www.mcc.co.il/site/pg/mcc_item_new,318781?eid=2446&amp;mid=437984" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.mcc.co.il/site/pg/mcc_item_new,318781?eid%3D2446%26mid%3D437984&amp;source=gmail&amp;ust=1672479134880000&amp;usg=AOvVaw2ISeXzy31e2t-HGobLrm5G"> <img src="https://ci6.googleusercontent.com/proxy/tkDl0jmeMi2zBf59B_u00f9ITOdBUBI92mZ2B-_2slPi-iXg5b4zdQrVykavaWg5hDgo0SO8p2mkpwlz2llzqD2x7bKj4gFXXpx1xosDT0wtmuW5NL5SdLTV09g=s0-d-e1-ft#https://www.mcc.co.il/pics/site_home/flags/mail_btn_tzarchanut_090320.png" alt="more details" class="CToWUd" data-bit="iit"></a>
          </td>
        </tr>
      </tbody></table>
      </td></tr><tr><td colspan="2" valign="top"><br>&nbsp;</td></tr><tr></tr><tr><td colspan="2" valign="top">
              <table cellpadding="0" cellspacing="0" width="548px" style="color:#7e8895;text-align:center;font-family:arial;font-size:14pt">
                  
                  <tbody><tr style="background-color:#f7f6f3">
                      <td dir="rtl"><p><span style="color:#000000">הנחה + תשלום בנטען על קוסמטיקה טבעית</span><br><span>100 ₪ הנחה בקנייה, מעל 400 ₪, על כל אתר Rocio המציע מוצרי קוסמטיקה, כלי עיסוי, אביזרים ומארזים מפנקים. בנוסף, תשלום עם הנטען&nbsp;</span><br><a href="https://www.mcc.co.il/site/pg/mcc_item_new,318728?eid=2446&amp;mid=437984" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.mcc.co.il/site/pg/mcc_item_new,318728?eid%3D2446%26mid%3D437984&amp;source=gmail&amp;ust=1672479134880000&amp;usg=AOvVaw1XPeFfm82HtoLMJKPaBx_f">פרטים נוספים</a></p></td>
                  </tr>
                  
                  <tr style="background-color:#f7f6f3">
                      <td dir="rtl"></td>
                  </tr>
                  
                  <tr style="background-color:#f7f6f3">
                      <td dir="rtl"><p><span style="color:#000000"><span>מחירים מיוחדים + תשלום בנטען ב"נאוטיקה הום"</span></span> <br><span>הנחות וכפל מבצעים על חלוק מגבת במגוון גדלים וצבעים ועל שמיכת פוך במילוי פלומה בגדלים שונים. הנחה נוספת בתשלום עם הכרטיס הנטען&nbsp;</span><br><a href="https://www.mcc.co.il/site/pg/mcc_item_new,317600?eid=2446&amp;mid=437984" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.mcc.co.il/site/pg/mcc_item_new,317600?eid%3D2446%26mid%3D437984&amp;source=gmail&amp;ust=1672479134880000&amp;usg=AOvVaw2_s4lWurRV5U3Oe1NQ4cj6">לפרטים נוספים</a></p></td>
                  </tr>
                  
                  <tr style="background-color:#f7f6f3">
                      <td dir="rtl"><img src="https://ci4.googleusercontent.com/proxy/bZYqncuSUSGkJASUjD50dQZfWjg3gF8h6UsA9ikiWBS4CSUFn8kZREeqz0UlkuPI8HQqFfBx7NadYruTzQOJjzZcLTt2t_CHvJzBPSifiK0Fn9Toc6ye=s0-d-e1-ft#https://www.mcc.co.il/pics/site_home/mail_separating_icon_060220.png" alt="" class="CToWUd" data-bit="iit"></td>
                  </tr>
                  
                  <tr style="background-color:#f7f6f3">
                      <td dir="rtl"><p><span style="color:#000000">הטבה + תשלום בנטען לטיפוח הפנים</span><br><span>מתנה בכל רכישה באתר הקוסמטיקה PELLE: סבון פנים קולגן בגודל 250ml (בשווי 150 ₪).&nbsp;</span><span>הנחה נוספת בתשלום עם הכרטיס הנטען</span><br><a href="https://www.mcc.co.il/site/pg/mcc_item_new,316999?eid=2446&amp;mid=437984" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.mcc.co.il/site/pg/mcc_item_new,316999?eid%3D2446%26mid%3D437984&amp;source=gmail&amp;ust=1672479134880000&amp;usg=AOvVaw1YIZlOJhTjWhAOfXZfq8XN">לפרטים נוספים</a></p></td>
                  </tr>
                  
                  <tr style="background-color:#f7f6f3">
                      <td dir="rtl"><img src="https://ci4.googleusercontent.com/proxy/bZYqncuSUSGkJASUjD50dQZfWjg3gF8h6UsA9ikiWBS4CSUFn8kZREeqz0UlkuPI8HQqFfBx7NadYruTzQOJjzZcLTt2t_CHvJzBPSifiK0Fn9Toc6ye=s0-d-e1-ft#https://www.mcc.co.il/pics/site_home/mail_separating_icon_060220.png" alt="" class="CToWUd" data-bit="iit"></td>
                  </tr>
                  
                  <tr style="background-color:#f7f6f3">
                      <td dir="rtl"><div align="right">
      <p style="text-align:center"><span style="color:#000000"><span>הטבה + תשלום בנטען לניחוח נעים במיוחד</span></span><br>&nbsp;<span>סבון רביעי חינם ברכישת שלושה סבונים באתר REMEDY המציע מוצרים טבעיים, מארזי מתנה ועוד. הנחה נוספת בתשלום עם הכרטיס הנטען&nbsp;</span><br><a href="https://www.mcc.co.il/site/pg/mcc_item_new,318727?eid=2446&amp;mid=437984" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.mcc.co.il/site/pg/mcc_item_new,318727?eid%3D2446%26mid%3D437984&amp;source=gmail&amp;ust=1672479134880000&amp;usg=AOvVaw35RP6vKuFyxtetAcYJZ0MF">לפרטים נוספים</a></p>
      </div></td>
                  </tr>
                  
                  <tr style="background-color:#f7f6f3">
                      <td dir="rtl"><img src="https://ci4.googleusercontent.com/proxy/bZYqncuSUSGkJASUjD50dQZfWjg3gF8h6UsA9ikiWBS4CSUFn8kZREeqz0UlkuPI8HQqFfBx7NadYruTzQOJjzZcLTt2t_CHvJzBPSifiK0Fn9Toc6ye=s0-d-e1-ft#https://www.mcc.co.il/pics/site_home/mail_separating_icon_060220.png" alt="" class="CToWUd" data-bit="iit"></td>
                  </tr>
                  
              </tbody></table>
      </td></tr><tr><td colspan="2" valign="top"><br>&nbsp;</td></tr><tr></tr><tr><td valign="top" width="320px">
      <table align="center" width="260" height="400" cellspacing="0" cellpadding="5" border="0" style="width:260px;display:inline-block;padding-bottom:20px;padding-top:10px;background-color:white;border-bottom:1px solid #e1e2dd;border-right:1px solid #e1e2dd">
        <tbody><tr>
          <td valign="top" align="center" height="110">
            <a style="text-decoration:none" href="https://www.mcc.co.il/site/pg/mcc_item_new,318737?eid=2446&amp;mid=437984" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.mcc.co.il/site/pg/mcc_item_new,318737?eid%3D2446%26mid%3D437984&amp;source=gmail&amp;ust=1672479134880000&amp;usg=AOvVaw39r3IU697CxpbSs_lZh9Ip"><img src="https://ci4.googleusercontent.com/proxy/h5iE09k-Wua2PFdVsErE5QiUEKlRQp24rKrG_1I3mNyloRYB5aEr6SG_rbfCHBzB6VgYsvMe5aUQW79bFOEfluLHhiu-Fd0tacqmNtN-LoISnpLHVQ=s0-d-e1-ft#https://www.mcc.co.il/pics/site_home/ruzilia_shely_mail_251222.jpg" alt="" border="0" class="CToWUd" data-bit="iit"></a>
          </td>
        </tr>
        <tr>
          <td valign="top" align="center" width="220" height="70" style="font-family:Arial,sans-serif" dir="rtl">
            <h3 style="font-weight:normal;font-size:23px;text-align:center;margin:0" dir="rtl">חדש בכרטיס הנטען! RUZILIA</h3>
          </td>
        </tr>
        <tr>
          <td valign="top" align="center" width="250" height="120" style="font-weight:normal;font-family:Arial,sans-serif;font-size:16px;color:#7e8895" dir="rtl">
            נרות טבעיים בניחוחות מיוחדים. המוצרים מגיעים במגוון במארזים משמחים: נרות יצוקים בכלי זכוכית ובכלי בטון המיוצרים בעבודת יד
          </td>
        </tr>
          <tr>
          <td valign="top" align="center" width="40">
            <a style="text-decoration:none" href="https://www.mcc.co.il/site/pg/mcc_item_new,318737?eid=2446&amp;mid=437984" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.mcc.co.il/site/pg/mcc_item_new,318737?eid%3D2446%26mid%3D437984&amp;source=gmail&amp;ust=1672479134880000&amp;usg=AOvVaw39r3IU697CxpbSs_lZh9Ip"> <img src="https://ci6.googleusercontent.com/proxy/tkDl0jmeMi2zBf59B_u00f9ITOdBUBI92mZ2B-_2slPi-iXg5b4zdQrVykavaWg5hDgo0SO8p2mkpwlz2llzqD2x7bKj4gFXXpx1xosDT0wtmuW5NL5SdLTV09g=s0-d-e1-ft#https://www.mcc.co.il/pics/site_home/flags/mail_btn_tzarchanut_090320.png" alt="more details" class="CToWUd" data-bit="iit"></a>
          </td>
        </tr>
      </tbody></table>
      </td><td valign="top" width="320px">
      <table align="center" width="260" height="400" cellspacing="0" cellpadding="5" border="0" style="width:260px;display:inline-block;padding-bottom:20px;padding-top:10px;background-color:white;border-bottom:1px solid #e1e2dd;border-right:1px solid #e1e2dd">
        <tbody><tr>
          <td valign="top" align="center" height="110">
            <a style="text-decoration:none" href="https://www.mcc.co.il/site/pg/mcc_item_new,318858?eid=2446&amp;mid=437984" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.mcc.co.il/site/pg/mcc_item_new,318858?eid%3D2446%26mid%3D437984&amp;source=gmail&amp;ust=1672479134880000&amp;usg=AOvVaw0YJCRwRM-U5O5wnA9dr3Iw"><img src="https://ci5.googleusercontent.com/proxy/z5p5KogcxOEQ_liP5KQ5t_E2ZmnfxuijGoJtoIE3GbnO4-_0So4ISL0z9tKZLEupjecE_EcCFz6Xvb3QDruRc0HL-U-OyPozy_xSfu9IYFtn=s0-d-e1-ft#https://www.mcc.co.il/pics/site_home/moy_shely_mail_261222.jpg" alt="" border="0" class="CToWUd" data-bit="iit"></a>
          </td>
        </tr>
        <tr>
          <td valign="top" align="center" width="220" height="70" style="font-family:Arial,sans-serif" dir="rtl">
            <h3 style="font-weight:normal;font-size:23px;text-align:center;margin:0" dir="rtl">חדש בכרטיס הנטען! MOY - אופנת ילדים</h3>
          </td>
        </tr>
        <tr>
          <td valign="top" align="center" width="250" height="120" style="font-weight:normal;font-family:Arial,sans-serif;font-size:16px;color:#7e8895" dir="rtl">
            אתר לרכישה אונליין המציע קולקציית בגדי תינוקות לבנים ולבנות מבדים אורגניים איכותיים, סטים, מארזי לידה, מצעים שוברי קניה ועוד
          </td>
        </tr>
          <tr>
          <td valign="top" align="center" width="40">
            <a style="text-decoration:none" href="https://www.mcc.co.il/site/pg/mcc_item_new,318858?eid=2446&amp;mid=437984" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.mcc.co.il/site/pg/mcc_item_new,318858?eid%3D2446%26mid%3D437984&amp;source=gmail&amp;ust=1672479134880000&amp;usg=AOvVaw0YJCRwRM-U5O5wnA9dr3Iw"> <img src="https://ci6.googleusercontent.com/proxy/tkDl0jmeMi2zBf59B_u00f9ITOdBUBI92mZ2B-_2slPi-iXg5b4zdQrVykavaWg5hDgo0SO8p2mkpwlz2llzqD2x7bKj4gFXXpx1xosDT0wtmuW5NL5SdLTV09g=s0-d-e1-ft#https://www.mcc.co.il/pics/site_home/flags/mail_btn_tzarchanut_090320.png" alt="more details" class="CToWUd" data-bit="iit"></a>
          </td>
        </tr>
      </tbody></table>
      </td></tr><tr><td colspan="2" valign="top"><br>&nbsp;</td></tr><tr></tr><tr><td valign="top" width="320px">
      <table align="center" width="260" height="400" cellspacing="0" cellpadding="5" border="0" style="width:260px;display:inline-block;padding-bottom:20px;padding-top:10px;background-color:white;border-bottom:1px solid #e1e2dd;border-right:1px solid #e1e2dd">
        <tbody><tr>
          <td valign="top" align="center" height="110">
            <a style="text-decoration:none" href="https://www.mcc.co.il/site/pg/category_9?eid=2446&amp;mid=437984" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.mcc.co.il/site/pg/category_9?eid%3D2446%26mid%3D437984&amp;source=gmail&amp;ust=1672479134880000&amp;usg=AOvVaw3KGoPW7yEBBeJhwoIG6GkE"><img src="https://ci4.googleusercontent.com/proxy/8pzG0FxX_X0xhIeeYX73NhL_JfcYn3gYF1Nryz81LbKlCnQCSgry_IqoDyuYaPN2T9nn--0d5t7GCxj53VgwmSuH2po6HzYVqe08PjO7DK_8Aw=s0-d-e1-ft#https://www.mcc.co.il/pics/site_home/logo_woman_mail_061222.jpg" alt="" border="0" class="CToWUd" data-bit="iit"></a>
          </td>
        </tr>
        <tr>
          <td valign="top" align="center" width="220" height="70" style="font-family:Arial,sans-serif" dir="rtl">
            <h3 style="font-weight:normal;font-size:23px;text-align:center;margin:0" dir="rtl">חגיגות יום האישה בארץ ובחו"ל – ההרשמה בעיצומה</h3>
          </td>
        </tr>
        <tr>
          <td valign="top" align="center" width="250" height="120" style="font-weight:normal;font-family:Arial,sans-serif;font-size:16px;color:#7e8895" dir="rtl">
            אירוע בוקר או ערב ב"ג'ונה" נתניה, חופשה ב"קלאב הוטל" אילת הכוללת אירועים, הופעות, שי והפתעות ונופשים מאורגנים באתונה או בלונדון
          </td>
        </tr>
          <tr>
          <td valign="top" align="center" width="40">
            <a style="text-decoration:none" href="https://www.mcc.co.il/site/pg/category_9?eid=2446&amp;mid=437984" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.mcc.co.il/site/pg/category_9?eid%3D2446%26mid%3D437984&amp;source=gmail&amp;ust=1672479134881000&amp;usg=AOvVaw2ShpjmjR9tYsAgbX2JvQJf"> <img src="https://ci5.googleusercontent.com/proxy/fBuo4tXapYCC_2SD05A28ZkmCww8J5cynbu1CrW0siBly2m0JOWiaMz3kKctX-24QvJ3Yh0iowNKokycPt0QvOB0isSBr_xyv939yNRrd8pawNZU1GDfmg=s0-d-e1-ft#https://www.mcc.co.il/pics/site_home/flags/mail_btn_tarbut_090320.png" alt="more details" class="CToWUd" data-bit="iit"></a>
          </td>
        </tr>
      </tbody></table>
      </td><td valign="top" width="320px">
      <table align="center" width="260" height="400" cellspacing="0" cellpadding="5" border="0" style="width:260px;display:inline-block;padding-bottom:20px;padding-top:10px;background-color:white;border-bottom:1px solid #e1e2dd;border-right:1px solid #e1e2dd">
        <tbody><tr>
          <td valign="top" align="center" height="110">
            <a style="text-decoration:none" href="https://www.mcc.co.il/site/pg/mcc_item_new,318629?eid=2446&amp;mid=437984" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.mcc.co.il/site/pg/mcc_item_new,318629?eid%3D2446%26mid%3D437984&amp;source=gmail&amp;ust=1672479134881000&amp;usg=AOvVaw28gbPSETItfft1tNCGtf2S"><img src="https://ci4.googleusercontent.com/proxy/F1UJCBd6A1XGuBGfDO9M6eg9Rmzb_ZFx0h9PBfwslZyGMrpgzCSZ7DXu7obEQ2KZ78M1Q5TreX9CsQQC_lDwwvFw65Z88oqye4ZN3BkM1rN3SdRRGA=s0-d-e1-ft#https://www.mcc.co.il/pics/site_home/ort_jerusalem_mail_281222.jpg" alt="" border="0" class="CToWUd" data-bit="iit"></a>
          </td>
        </tr>
        <tr>
          <td valign="top" align="center" width="220" height="70" style="font-family:Arial,sans-serif" dir="rtl">
            <h3 style="font-weight:normal;font-size:23px;text-align:center;margin:0" dir="rtl">חופשה חורפית מלאת אטרקציות בירושלים</h3>
          </td>
        </tr>
        <tr>
          <td valign="top" align="center" width="250" height="120" style="font-weight:normal;font-family:Arial,sans-serif;font-size:16px;color:#7e8895" dir="rtl">
            לילה במלון "יהודה" ע"ב לינה וארוחת בוקר כולל כרטיס לתערוכת Winter Lights בגן הבוטני וכרטיס לאטרקציה "מעלית הזמן" ב- 840 ₪ לזוג
          </td>
        </tr>
          <tr>
          <td valign="top" align="center" width="40">
            <a style="text-decoration:none" href="https://www.mcc.co.il/site/pg/mcc_item_new,318629?eid=2446&amp;mid=437984" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.mcc.co.il/site/pg/mcc_item_new,318629?eid%3D2446%26mid%3D437984&amp;source=gmail&amp;ust=1672479134881000&amp;usg=AOvVaw28gbPSETItfft1tNCGtf2S"> <img src="https://ci6.googleusercontent.com/proxy/tkDl0jmeMi2zBf59B_u00f9ITOdBUBI92mZ2B-_2slPi-iXg5b4zdQrVykavaWg5hDgo0SO8p2mkpwlz2llzqD2x7bKj4gFXXpx1xosDT0wtmuW5NL5SdLTV09g=s0-d-e1-ft#https://www.mcc.co.il/pics/site_home/flags/mail_btn_tzarchanut_090320.png" alt="more details" class="CToWUd" data-bit="iit"></a>
          </td>
        </tr>
      </tbody></table>
      </td></tr><tr><td colspan="2" valign="top"><br>&nbsp;</td></tr><tr></tr><tr><td colspan="2" valign="top">
              <table cellpadding="0" cellspacing="0" width="548px" style="color:#7e8895;text-align:center;font-family:arial;font-size:14pt">
                  
                  <tbody><tr style="background-color:#f7f6f3">
                      <td dir="rtl"><div>
      <p><span style="color:#000000">מרתון Playtika תל אביב 2023</span><br>10% הנחה במעמד חיוב כרטיס אשראי "חבר" בהרשמה למרוץ עם 6 מסלולים לבחירתכם. יום שישי, 24.2.23 שדרות רוקח ת"א.<br><a href="https://www.mcc.co.il/site/pg/mcc_item_new,317068?eid=2446&amp;mid=437984" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.mcc.co.il/site/pg/mcc_item_new,317068?eid%3D2446%26mid%3D437984&amp;source=gmail&amp;ust=1672479134881000&amp;usg=AOvVaw3Xon4zBkMAXDJLYQaLoLZU">לפרטים נוספים</a></p>
      </div></td>
                  </tr>
                  
                  <tr style="background-color:#f7f6f3">
                      <td dir="rtl"><img src="https://ci4.googleusercontent.com/proxy/bZYqncuSUSGkJASUjD50dQZfWjg3gF8h6UsA9ikiWBS4CSUFn8kZREeqz0UlkuPI8HQqFfBx7NadYruTzQOJjzZcLTt2t_CHvJzBPSifiK0Fn9Toc6ye=s0-d-e1-ft#https://www.mcc.co.il/pics/site_home/mail_separating_icon_060220.png" alt="" class="CToWUd" data-bit="iit"></td>
                  </tr>
                  
                  <tr style="background-color:#f7f6f3">
                      <td dir="rtl"><p><span style="color:#000000">עמותת "אח בוגר אחות בוגרת"</span> <br><span>עמותה עם סניפים בפריסה ארצית, הפועלת לליווי של ילדים/ות ונערים/ות במצבי סיכון, באמצעות הצמדת חונכים אישיים שעברו סדנאות הכשרה&nbsp;</span><br><a href="https://www.mcc.co.il/site/pg/mcc_item_new,319014?eid=2446&amp;mid=437984" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.mcc.co.il/site/pg/mcc_item_new,319014?eid%3D2446%26mid%3D437984&amp;source=gmail&amp;ust=1672479134881000&amp;usg=AOvVaw2FSNh2irJj1znUGxQU7PSQ">לפרטים נוספים</a></p></td>
                  </tr>
                  
                  <tr style="background-color:#f7f6f3">
                      <td dir="rtl"><img src="https://ci4.googleusercontent.com/proxy/bZYqncuSUSGkJASUjD50dQZfWjg3gF8h6UsA9ikiWBS4CSUFn8kZREeqz0UlkuPI8HQqFfBx7NadYruTzQOJjzZcLTt2t_CHvJzBPSifiK0Fn9Toc6ye=s0-d-e1-ft#https://www.mcc.co.il/pics/site_home/mail_separating_icon_060220.png" alt="" class="CToWUd" data-bit="iit"></td>
                  </tr>
                  
                  <tr style="background-color:#f7f6f3">
                      <td dir="rtl"><p><span style="color:#000000">הטבות מהנות של ישראכרט בחודש דצמבר</span> <br>הנחות שוות שיש לכם עם כרטיסי אשראי "חבר" - ישראכרט או אמקס, בפעילויות פנאי, המופע NEXT, מוזיאון השעווה, קולנוע, מקדונלדס ועוד&nbsp;<br><a href="https://www.mcc.co.il/site/pg/mcc_item_new,316852?eid=2446&amp;mid=437984" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.mcc.co.il/site/pg/mcc_item_new,316852?eid%3D2446%26mid%3D437984&amp;source=gmail&amp;ust=1672479134881000&amp;usg=AOvVaw0CW7sBr_becqn4q-2SRIgY">לפרטים נוספים&nbsp;</a></p></td>
                  </tr>
                  
                  <tr style="background-color:#f7f6f3">
                      <td dir="rtl"><img src="https://ci4.googleusercontent.com/proxy/bZYqncuSUSGkJASUjD50dQZfWjg3gF8h6UsA9ikiWBS4CSUFn8kZREeqz0UlkuPI8HQqFfBx7NadYruTzQOJjzZcLTt2t_CHvJzBPSifiK0Fn9Toc6ye=s0-d-e1-ft#https://www.mcc.co.il/pics/site_home/mail_separating_icon_060220.png" alt="" class="CToWUd" data-bit="iit"></td>
                  </tr>
                  
                  <tr style="background-color:#f7f6f3">
                      <td dir="rtl"><p><span style="color:#000000">מודעים לסביבה - נייר זה מיותר!</span> <br>מעוניינים לצמצם את כמות העלונים בתיבת הדואר? ניתן ללחוץ על בקשת הסרה מדיוור ולבקש הפסקת קבלת עלונים מודפסים ממועדון "חבר"&nbsp;<br><a href="https://www.mcc.co.il/site/pg/mcc_item_new,255896?eid=2446&amp;mid=437984" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.mcc.co.il/site/pg/mcc_item_new,255896?eid%3D2446%26mid%3D437984&amp;source=gmail&amp;ust=1672479134881000&amp;usg=AOvVaw2RrN6uY7snyWKjjxJOwPSS">לפרטים נוספים&nbsp;</a></p></td>
                  </tr>
                  
                  <tr style="background-color:#f7f6f3">
                      <td dir="rtl"><img src="https://ci3.googleusercontent.com/proxy/Jhi68Pq_PfjUzSiB7VRva7IIO4MLXQTUxbJt0fQTkrxw-RvZ0QFKgeKNs3jy4jJ_KCJsCdsbcKp3CG5Xa4ZlhoL8ATFbjX3Ewb1GUF7XlwtknGZ4zoo0NUQISpI_IsYXgQo_3pI8-eEre9k=s0-d-e1-ft#https://www.mcc.co.il/pics/site_home/mail_separating_icon_060220.png?eid=2446&amp;mid=437984" alt="" class="CToWUd" data-bit="iit"></td>
                  </tr>
                  
              </tbody></table>
      </td></tr></tbody></table>
      <br>&nbsp;<p style="text-align:right"><strong>* נא לא להשיב למייל זה. להסרתך מרשימת הדיוור האינטרנטי יש ללחוץ על האפשרות "להסרה מרשימת התפוצה" המופיעה בתחתית העמוד.</strong></p><p><br></p>
      
      
      <table border="0" cellspacing="0" cellpadding="0" width="100%" align="center">
          <tbody><tr style="font-family:Arial;font-size:12px;text-align:center">
              <td>
                  <table align="center" style="margin:0 auto 10px auto;font-family:Arial;font-size:12px">
                      <tbody><tr>
                          <td><a style="color:#363636" href="https://www.mcc.co.il/signin.aspx?eid=2446&amp;mid=437984" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.mcc.co.il/signin.aspx?eid%3D2446%26mid%3D437984&amp;source=gmail&amp;ust=1672479134881000&amp;usg=AOvVaw0qxaYal5r785W2vhUNOfEx">לאתר מועדון חבר צרכנות</a></td>
                          <td> | </td>
                          <td><a href="https://www.mcc.co.il/noemail.aspx?email=8f34737f6e90406dfc1e0263996a56a8,noyemdahan@gmail.com&amp;eid=2446&amp;mid=437984" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.mcc.co.il/noemail.aspx?email%3D8f34737f6e90406dfc1e0263996a56a8,noyemdahan@gmail.com%26eid%3D2446%26mid%3D437984&amp;source=gmail&amp;ust=1672479134881000&amp;usg=AOvVaw2dJf5VzsC_XBtDjfr3Ufjj">לחץ להסרה מרשימות התפוצה</a></td>
                     </tr>
                  </tbody></table>
              </td>
          </tr>
      </tbody></table>
      </div>`,
      isRead: false,
      sentAt: Date.now() - 1200000,
      to: loggedinUser.email,
      isStared: false,
      status: 'inbox',
    },
    {
      id: 'e106',
      sender: 'Iced Tea Aesthetics',
      from: 'updates-noreply@linkedin.com',
      subject: `Introduce this week's star. 💖`,
      body: `

      <td align="center" id="m_3734019650888846141bodyCell" valign="top">

      <div class="m_3734019650888846141templateContainer" style="display:table;width:600px">
      <div class="m_3734019650888846141templateContainerInner">
      
      
      <table border="0" cellpadding="0" cellspacing="0" width="100%">
      <tbody><tr>
      <td align="center" valign="top">
      <table border="0" cellpadding="0" cellspacing="0" class="m_3734019650888846141templateRow" width="100%">
      <tbody>
      <tr>
      <td class="m_3734019650888846141rowContainer m_3734019650888846141kmFloatLeft" valign="top">
      <table border="0" cellpadding="0" cellspacing="0" style="min-width:100%" width="100%">
      <tbody>
      <tr>
      <td style="padding:0px;padding-right:0px;background-color:#ffffff;padding-left:0px" valign="top">
      <table align="left" border="0" cellpadding="0" cellspacing="0" style="min-width:100%" width="100%">
      <tbody>
      <tr>
      <td class="m_3734019650888846141kmImageContent" style="padding:0" valign="top">
      <a href="https://trk.klclick.com/ls/click?upn=uEJq3bjyTJkuYJR3INXIlaR7UH-2BtWEQm5BnymlpMMkumRCyU-2BgIC9tWhemwM472ZhQF31F-2FqTxM4PdMRLmiGOW1y4I6R8Nj1n0jDuoxF-2FjTb9UixiYSzYtOBW22yu-2BT8fpZm56f0sEHU4lNN69gxhpnBE7UNDtwR4o2t3hbAiseXrEB99C5QXylZr332B9ha8mtPZZgH-2BuqxmZANb70Z-2BcNcY-2Fth49ml8xey0WVgorjMnCAgxbBSC8PJI0JrFKZnHiST_RwkSJRtVnVtCbVHovQZvrVnmAGWb8CnlQxqWIxU7wzMtD-2FWKJ297-2BwH-2BWb70WmVm-2FHyZUj3qSxrSmkkGeQ99O0YSj29Niy5h-2BVopC8PZTYVN1n0lz-2FHj2LlQQnyIX1Q7iBbG8h8TFmW7JFeINO7-2Bcd1Aibbq-2FnoXKqY-2FbgPTzcUBv3n54zNJ5VjItjzJJSNUD9XsOWIonkgbYAvChhH29k5TlCuW1oovgyXPaDLCpG0MeG97kjScZ27bTeGFcvV8n2vf8y76-2B4531jnSB59Kh9U5BFCM7b-2Fbn39CpF2Rh8-2FQuUNg2yUnAJAaVxc3TTFriJKv-2FDFgjrr5yYeIQDunRzPWf-2BVHsEuLzqlpCI8gaQF-2BEyShZOwDIVHO2s-2BfRIJDgDr2NB3lnUX7rqVaWU5LFATvhdk2J30-2FjR2rGa2fdFY-3D" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://trk.klclick.com/ls/click?upn%3DuEJq3bjyTJkuYJR3INXIlaR7UH-2BtWEQm5BnymlpMMkumRCyU-2BgIC9tWhemwM472ZhQF31F-2FqTxM4PdMRLmiGOW1y4I6R8Nj1n0jDuoxF-2FjTb9UixiYSzYtOBW22yu-2BT8fpZm56f0sEHU4lNN69gxhpnBE7UNDtwR4o2t3hbAiseXrEB99C5QXylZr332B9ha8mtPZZgH-2BuqxmZANb70Z-2BcNcY-2Fth49ml8xey0WVgorjMnCAgxbBSC8PJI0JrFKZnHiST_RwkSJRtVnVtCbVHovQZvrVnmAGWb8CnlQxqWIxU7wzMtD-2FWKJ297-2BwH-2BWb70WmVm-2FHyZUj3qSxrSmkkGeQ99O0YSj29Niy5h-2BVopC8PZTYVN1n0lz-2FHj2LlQQnyIX1Q7iBbG8h8TFmW7JFeINO7-2Bcd1Aibbq-2FnoXKqY-2FbgPTzcUBv3n54zNJ5VjItjzJJSNUD9XsOWIonkgbYAvChhH29k5TlCuW1oovgyXPaDLCpG0MeG97kjScZ27bTeGFcvV8n2vf8y76-2B4531jnSB59Kh9U5BFCM7b-2Fbn39CpF2Rh8-2FQuUNg2yUnAJAaVxc3TTFriJKv-2FDFgjrr5yYeIQDunRzPWf-2BVHsEuLzqlpCI8gaQF-2BEyShZOwDIVHO2s-2BfRIJDgDr2NB3lnUX7rqVaWU5LFATvhdk2J30-2FjR2rGa2fdFY-3D&amp;source=gmail&amp;ust=1672427197811000&amp;usg=AOvVaw2SWsTu2jQunYEeVp5WC8MC">
      <img align="left" alt="Iced Tea Aesthetics" class="m_3734019650888846141kmImage CToWUd" src="https://ci3.googleusercontent.com/proxy/SAOAK24uK5jc1xFKf6ILLqIHbVM80QwbJ6cWZeUVXw521atBzL-6C3d3BgMt2UzLAATtbXP1-9QMBLEB6Cfd8QAkGV9i3zZrqbjac5_kGxRr92TwaEooPJISWP9oLk3E0YkldIaQCVj0FtJajZG23INIu_D0G0Q=s0-d-e1-ft#https://d3k81ch9hvuctc.cloudfront.net/company/SzLFFq/images/973baadc-9cfb-4a57-b181-56d465a7b5ab.png" style="max-width:801px;padding:0;border-width:0;background-color:#ffffff" width="600" data-bit="iit">
      </a>
      </td>
      </tr>
      </tbody>
      </table>
      </td>
      </tr>
      </tbody>
      </table>
      <table border="0" cellpadding="0" cellspacing="0" width="100%">
      <tbody>
      <tr>
      <td class="m_3734019650888846141kmTextBlockInner" style="background-color:#000" valign="top">
      <table align="left" border="0" cellpadding="0" cellspacing="0" class="m_3734019650888846141kmTextContentContainer" width="100%">
      <tbody>
      <tr>
      <td class="m_3734019650888846141kmTextContent" style="padding-top:9px;padding-bottom:9px;padding-left:60px;padding-right:60px;text-align:center;color:#fff" valign="top">
      <h1 style="text-align:center;font-weight:bold"><span style="color:#f5f5f5">New Year Sale</span></h1>
      <h3 style="text-align:center"><span style="color:#d3d3d3">Ends tomorrow at midnight</span></h3>
      <p>Hey Noam, we're closing out the year with a bang. Don't miss your chance to save big on all your fave drip.</p>
      <h4 style="text-align:center;text-transform:uppercase"><span style="color:#d3d3d3">Unlock <strong class="m_3734019650888846141highlight">20%&nbsp;off your order of 2+&nbsp;items</strong>!</span></h4>
      <p><em>Until <strong>tomorrow</strong> at&nbsp;midnight.</em></p>
      <p style="padding-bottom:0">Use code: <span style="font-size:24px;padding:2px;border:2px dashed red;font-weight:500">ICE2022</span></p>
      </td>
      </tr>
      </tbody>
      </table>
      </td>
      </tr>
      </tbody>
      </table>
      <table border="0" cellpadding="0" cellspacing="0" style="width:100%!important" width="100%">
      <tbody>
      <tr>
      <td align="center" class="m_3734019650888846141kmButtonBlockInner" style="padding-top:9px;padding-bottom:40px;padding-left:0px;padding-right:0px;background-color:#000" valign="top">
      <table border="0" cellpadding="0" cellspacing="0" class="m_3734019650888846141kmButtonContentContainer" style="background-color:#f80012;border-radius:0px" width="">
      <tbody>
      <tr>
      
      <td align="center" class="m_3734019650888846141kmButtonContent" style="font-size:22px;color:#ffffff;letter-spacing:0px;font-weight:normal;font-family:&quot;Helvetica Neue&quot;,Arial" valign="middle">
      <a class="m_3734019650888846141kmButton" style="text-decoration:none;display:inline-block;padding-top:15px;padding-bottom:15px;font-size:22px;color:#ffffff;letter-spacing:0px;font-weight:normal;padding-left:15px;padding-right:15px;font-family:&quot;Helvetica Neue&quot;,Arial" title="" href="https://trk.klclick.com/ls/click?upn=uEJq3bjyTJkuYJR3INXIlaR7UH-2BtWEQm5BnymlpMMkvQUzP-2F7WpzYBirxCkK-2B70LIrkdvsTf5jt8plHXVLw6wV3ZmF-2Bopa-2BL1Rz6ngQb4TGYEyEUb8d5nvEpauu1tv41IZakFxuMohaTooAPEh0h2Xz0LYIvjbE8KFZr9tkI0f-2Fh-2BE-2BTIq1CnrT8sK5WZIIcZP5b21I3NOKIoEBl9NzHMQKdlj0reNeEAz5bRc5c-2FcQUsZve8fJN9EkvPIAph1cgSYnmJBhxYVE44UO0MT6frg-3D-3DmPx-_RwkSJRtVnVtCbVHovQZvrVnmAGWb8CnlQxqWIxU7wzMtD-2FWKJ297-2BwH-2BWb70WmVm-2FHyZUj3qSxrSmkkGeQ99O0YSj29Niy5h-2BVopC8PZTYVN1n0lz-2FHj2LlQQnyIX1Q7iBbG8h8TFmW7JFeINO7-2Bcd1Aibbq-2FnoXKqY-2FbgPTzcUBv3n54zNJ5VjItjzJJSNUD9XsOWIonkgbYAvChhH29k5TlCuW1oovgyXPaDLCpG0MeG97kjScZ27bTeGFcvV8AA3GYW3B8dF7aQVefnh5uewAjNpBhpaWmISgCY0oRsNydUZwo4-2B-2BCxwJCKsHFbK0pcIhu8sZxs9-2BBG7x735P-2F2HvLGPQtu6Z98XoWODOuHcWiRVvSXvadoY-2Bfw6O-2FuNY910GaUP5tdZWD7ZvXfexiYNfD7ud4sis9s90VTmbv1s-3D" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://trk.klclick.com/ls/click?upn%3DuEJq3bjyTJkuYJR3INXIlaR7UH-2BtWEQm5BnymlpMMkvQUzP-2F7WpzYBirxCkK-2B70LIrkdvsTf5jt8plHXVLw6wV3ZmF-2Bopa-2BL1Rz6ngQb4TGYEyEUb8d5nvEpauu1tv41IZakFxuMohaTooAPEh0h2Xz0LYIvjbE8KFZr9tkI0f-2Fh-2BE-2BTIq1CnrT8sK5WZIIcZP5b21I3NOKIoEBl9NzHMQKdlj0reNeEAz5bRc5c-2FcQUsZve8fJN9EkvPIAph1cgSYnmJBhxYVE44UO0MT6frg-3D-3DmPx-_RwkSJRtVnVtCbVHovQZvrVnmAGWb8CnlQxqWIxU7wzMtD-2FWKJ297-2BwH-2BWb70WmVm-2FHyZUj3qSxrSmkkGeQ99O0YSj29Niy5h-2BVopC8PZTYVN1n0lz-2FHj2LlQQnyIX1Q7iBbG8h8TFmW7JFeINO7-2Bcd1Aibbq-2FnoXKqY-2FbgPTzcUBv3n54zNJ5VjItjzJJSNUD9XsOWIonkgbYAvChhH29k5TlCuW1oovgyXPaDLCpG0MeG97kjScZ27bTeGFcvV8AA3GYW3B8dF7aQVefnh5uewAjNpBhpaWmISgCY0oRsNydUZwo4-2B-2BCxwJCKsHFbK0pcIhu8sZxs9-2BBG7x735P-2F2HvLGPQtu6Z98XoWODOuHcWiRVvSXvadoY-2Bfw6O-2FuNY910GaUP5tdZWD7ZvXfexiYNfD7ud4sis9s90VTmbv1s-3D&amp;source=gmail&amp;ust=1672427197811000&amp;usg=AOvVaw0I95Bj-CiJkcaUbJnvWku_">SAVE 20% STOREWIDE</a>
      </td>
      
      
      </tr>
      </tbody>
      </table>
      </td>
      </tr>
      </tbody>
      </table>
      <table border="0" cellpadding="0" cellspacing="0" width="100%">
      <tbody>
      <tr>
      <td class="m_3734019650888846141kmTextBlockInner" style="background-color:#000" valign="top">
      <table align="left" border="0" cellpadding="0" cellspacing="0" class="m_3734019650888846141kmTextContentContainer" width="100%">
      <tbody>
      <tr>
      <td class="m_3734019650888846141kmTextContent" style="padding-top:9px;padding-bottom:9px;padding-left:60px;padding-right:60px;text-align:center;color:#fff" valign="top">
      <p style="padding-bottom:0"><strong class="m_3734019650888846141highlight">For extra savings</strong>: Download our app (<a style="color:#f80012;font-weight:normal;text-decoration:underline" href="https://trk.klclick.com/ls/click?upn=uEJq3bjyTJkuYJR3INXIlVFoAtdgfgkwt6N73wpLr-2BKJ7ESj4dNMas6qvFg4E4eLMWx8EsGUP-2BKuQX4gqz0d2gm2JIV-2FQ6cr6OB-2FAgJ9skbqJgZufdQU9OM9sFI7RmG5WbehzeD36LxXE-2FAkYB72wLl2zZBAHcii-2BMxEsE8B8ywGT5hL8IThV4rYtzLoSccUWpJPD-2Flgklp9n7vJ9lc3bOTSdDnOZrAKReInfLz1U42l-2BXxNf-2F5Z7zcukS1IeCQU8JudaSonGHOSl2iu8ktyNTgROQ5iWZnsZ6FgD-2FRogzE-3Dfhrl_RwkSJRtVnVtCbVHovQZvrVnmAGWb8CnlQxqWIxU7wzMtD-2FWKJ297-2BwH-2BWb70WmVm-2FHyZUj3qSxrSmkkGeQ99O0YSj29Niy5h-2BVopC8PZTYVN1n0lz-2FHj2LlQQnyIX1Q7iBbG8h8TFmW7JFeINO7-2Bcd1Aibbq-2FnoXKqY-2FbgPTzcUBv3n54zNJ5VjItjzJJSNUD9XsOWIonkgbYAvChhH29k5TlCuW1oovgyXPaDLCpG0MeG97kjScZ27bTeGFcvV8duMBRoPEvkOFF8ZAb9rGXxrsQuJvrAHbx2vxMKzVV23AcVsm-2FTDv08gCDXBRktrzuwSz06zoAzxzI0Zh3ig5hND3tH2t-2F2IvxcS87EXY736wsSc36QJdkrOTg3E-2FdXIUgk7NtDIJIHei5-2FI-2BX4UQ71F5dJX6T31da0SuYfZHQsI-3D" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://trk.klclick.com/ls/click?upn%3DuEJq3bjyTJkuYJR3INXIlVFoAtdgfgkwt6N73wpLr-2BKJ7ESj4dNMas6qvFg4E4eLMWx8EsGUP-2BKuQX4gqz0d2gm2JIV-2FQ6cr6OB-2FAgJ9skbqJgZufdQU9OM9sFI7RmG5WbehzeD36LxXE-2FAkYB72wLl2zZBAHcii-2BMxEsE8B8ywGT5hL8IThV4rYtzLoSccUWpJPD-2Flgklp9n7vJ9lc3bOTSdDnOZrAKReInfLz1U42l-2BXxNf-2F5Z7zcukS1IeCQU8JudaSonGHOSl2iu8ktyNTgROQ5iWZnsZ6FgD-2FRogzE-3Dfhrl_RwkSJRtVnVtCbVHovQZvrVnmAGWb8CnlQxqWIxU7wzMtD-2FWKJ297-2BwH-2BWb70WmVm-2FHyZUj3qSxrSmkkGeQ99O0YSj29Niy5h-2BVopC8PZTYVN1n0lz-2FHj2LlQQnyIX1Q7iBbG8h8TFmW7JFeINO7-2Bcd1Aibbq-2FnoXKqY-2FbgPTzcUBv3n54zNJ5VjItjzJJSNUD9XsOWIonkgbYAvChhH29k5TlCuW1oovgyXPaDLCpG0MeG97kjScZ27bTeGFcvV8duMBRoPEvkOFF8ZAb9rGXxrsQuJvrAHbx2vxMKzVV23AcVsm-2FTDv08gCDXBRktrzuwSz06zoAzxzI0Zh3ig5hND3tH2t-2F2IvxcS87EXY736wsSc36QJdkrOTg3E-2FdXIUgk7NtDIJIHei5-2FI-2BX4UQ71F5dJX6T31da0SuYfZHQsI-3D&amp;source=gmail&amp;ust=1672427197811000&amp;usg=AOvVaw10fegt5VoDVgnEwn3MjUma">App Store</a>, <a style="color:#f80012;font-weight:normal;text-decoration:underline" href="https://trk.klclick.com/ls/click?upn=uEJq3bjyTJkuYJR3INXIlXLLomHTBFp16xCq3oQBLusQ514qKpBGs2fFl790VDqKXU2MSKBrrZwoafevvjOCPjikMHKuQocEhrSbKBPd3ULqLJvwyr6ZEk-2FRhLs7TMNUbqUm4oraEz54oa54SWxhTsCNsrsP24Y3XeQkCNfLcM792tvKOJs628xqavq5hFiNZITfX95Su2TcHvpD7xHyxHWvzQYKWviQtqUdnDY76-2FPOvApcWxIMQAc8Av6RvzS-2BGC7brEXTWycPy5JBLKsDrcUfDx1XwlkHautGcRjVYpk-3DS5VV_RwkSJRtVnVtCbVHovQZvrVnmAGWb8CnlQxqWIxU7wzMtD-2FWKJ297-2BwH-2BWb70WmVm-2FHyZUj3qSxrSmkkGeQ99O0YSj29Niy5h-2BVopC8PZTYVN1n0lz-2FHj2LlQQnyIX1Q7iBbG8h8TFmW7JFeINO7-2Bcd1Aibbq-2FnoXKqY-2FbgPTzcUBv3n54zNJ5VjItjzJJSNUD9XsOWIonkgbYAvChhH29k5TlCuW1oovgyXPaDLCpG0MeG97kjScZ27bTeGFcvV8ajQ0YLErSbB5VnnevojXDb6VAXVNFgOK-2FbbTDpai0tLSvIw0tIqKlDxagt52k8D5sqH56MuqzuYub6M15GLkfV10uzceiG-2BH52G8TCykYmY7Ey0Caz3RlzeHJCRTk-2BLuSAFQVLePwRHhkiD6K0Yo-2B4j7mIJh8iFIKfJTQDSHPGI-3D" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://trk.klclick.com/ls/click?upn%3DuEJq3bjyTJkuYJR3INXIlXLLomHTBFp16xCq3oQBLusQ514qKpBGs2fFl790VDqKXU2MSKBrrZwoafevvjOCPjikMHKuQocEhrSbKBPd3ULqLJvwyr6ZEk-2FRhLs7TMNUbqUm4oraEz54oa54SWxhTsCNsrsP24Y3XeQkCNfLcM792tvKOJs628xqavq5hFiNZITfX95Su2TcHvpD7xHyxHWvzQYKWviQtqUdnDY76-2FPOvApcWxIMQAc8Av6RvzS-2BGC7brEXTWycPy5JBLKsDrcUfDx1XwlkHautGcRjVYpk-3DS5VV_RwkSJRtVnVtCbVHovQZvrVnmAGWb8CnlQxqWIxU7wzMtD-2FWKJ297-2BwH-2BWb70WmVm-2FHyZUj3qSxrSmkkGeQ99O0YSj29Niy5h-2BVopC8PZTYVN1n0lz-2FHj2LlQQnyIX1Q7iBbG8h8TFmW7JFeINO7-2Bcd1Aibbq-2FnoXKqY-2FbgPTzcUBv3n54zNJ5VjItjzJJSNUD9XsOWIonkgbYAvChhH29k5TlCuW1oovgyXPaDLCpG0MeG97kjScZ27bTeGFcvV8ajQ0YLErSbB5VnnevojXDb6VAXVNFgOK-2FbbTDpai0tLSvIw0tIqKlDxagt52k8D5sqH56MuqzuYub6M15GLkfV10uzceiG-2BH52G8TCykYmY7Ey0Caz3RlzeHJCRTk-2BLuSAFQVLePwRHhkiD6K0Yo-2B4j7mIJh8iFIKfJTQDSHPGI-3D&amp;source=gmail&amp;ust=1672427197811000&amp;usg=AOvVaw0vHV2G4zgXJO0ELVJivBAo">Google Play</a>) and <strong>save 25% off your order of 2+ items</strong>.</p>
      </td>
      </tr>
      </tbody>
      </table>
      </td>
      </tr>
      </tbody>
      </table>
      <table border="0" cellpadding="0" cellspacing="0" style="min-width:100%" width="100%">
      <tbody>
      <tr>
      <td style="padding:0px;padding-right:0px;background-color:#000;padding-left:0px" valign="top">
      <table align="left" border="0" cellpadding="0" cellspacing="0" style="min-width:100%" width="100%">
      <tbody>
      <tr>
      <td class="m_3734019650888846141kmImageContent" style="padding:0;text-align:center" valign="top">
      <a href="https://trk.klclick.com/ls/click?upn=uEJq3bjyTJkuYJR3INXIlaR7UH-2BtWEQm5BnymlpMMkvQUzP-2F7WpzYBirxCkK-2B70LIrkdvsTf5jt8plHXVLw6wV3ZmF-2Bopa-2BL1Rz6ngQb4TGYEyEUb8d5nvEpauu1tv41IZakFxuMohaTooAPEh0h2Xz0LYIvjbE8KFZr9tkI0f-2Fh-2BE-2BTIq1CnrT8sK5WZIIcZP5b21I3NOKIoEBl9NzHMQKdlj0reNeEAz5bRc5c-2FcQUsZve8fJN9EkvPIAph1cgSYnmJBhxYVE44UO0MT6frg-3D-3DyLVf_RwkSJRtVnVtCbVHovQZvrVnmAGWb8CnlQxqWIxU7wzMtD-2FWKJ297-2BwH-2BWb70WmVm-2FHyZUj3qSxrSmkkGeQ99O0YSj29Niy5h-2BVopC8PZTYVN1n0lz-2FHj2LlQQnyIX1Q7iBbG8h8TFmW7JFeINO7-2Bcd1Aibbq-2FnoXKqY-2FbgPTzcUBv3n54zNJ5VjItjzJJSNUD9XsOWIonkgbYAvChhH29k5TlCuW1oovgyXPaDLCpG0MeG97kjScZ27bTeGFcvV8Oj4l02IvoiTCyeqAYSiOmsXqIoCGM-2F0dgF77z9jDYAIqXsk1xuHN-2B5y60m9bdjKtZzOsZ8OTcP5i1-2FceZ4kJHAiIMH83QEDxVa-2BVyt-2F5RyKEANJ1uvbdtdSLjKmNLQWYEP5Y5ZY-2FyTcHTzfYH46HxYOaWGGq4mehnixgjMLy9TQ-3D" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://trk.klclick.com/ls/click?upn%3DuEJq3bjyTJkuYJR3INXIlaR7UH-2BtWEQm5BnymlpMMkvQUzP-2F7WpzYBirxCkK-2B70LIrkdvsTf5jt8plHXVLw6wV3ZmF-2Bopa-2BL1Rz6ngQb4TGYEyEUb8d5nvEpauu1tv41IZakFxuMohaTooAPEh0h2Xz0LYIvjbE8KFZr9tkI0f-2Fh-2BE-2BTIq1CnrT8sK5WZIIcZP5b21I3NOKIoEBl9NzHMQKdlj0reNeEAz5bRc5c-2FcQUsZve8fJN9EkvPIAph1cgSYnmJBhxYVE44UO0MT6frg-3D-3DyLVf_RwkSJRtVnVtCbVHovQZvrVnmAGWb8CnlQxqWIxU7wzMtD-2FWKJ297-2BwH-2BWb70WmVm-2FHyZUj3qSxrSmkkGeQ99O0YSj29Niy5h-2BVopC8PZTYVN1n0lz-2FHj2LlQQnyIX1Q7iBbG8h8TFmW7JFeINO7-2Bcd1Aibbq-2FnoXKqY-2FbgPTzcUBv3n54zNJ5VjItjzJJSNUD9XsOWIonkgbYAvChhH29k5TlCuW1oovgyXPaDLCpG0MeG97kjScZ27bTeGFcvV8Oj4l02IvoiTCyeqAYSiOmsXqIoCGM-2F0dgF77z9jDYAIqXsk1xuHN-2B5y60m9bdjKtZzOsZ8OTcP5i1-2FceZ4kJHAiIMH83QEDxVa-2BVyt-2F5RyKEANJ1uvbdtdSLjKmNLQWYEP5Y5ZY-2FyTcHTzfYH46HxYOaWGGq4mehnixgjMLy9TQ-3D&amp;source=gmail&amp;ust=1672427197811000&amp;usg=AOvVaw2zpo-ActchTBT2RHikrFeK">
      <img align="center" alt="Shop now" class="m_3734019650888846141kmImage CToWUd" src="https://ci5.googleusercontent.com/proxy/9c7WPMY8JizLhjPvKljU3ySKEcCGTBPAUVcLWpM35GPnPvGIgLev7gyYkwSEmSsH-rb_umuppCOt6iE4h9guAQCUkvfJZHa1nt8Gm1MnLaNfhR876oudtStiiK9I955AZ30L-ZukNEDJtIP4UyaeqeKCjLWgh4U=s0-d-e1-ft#https://d3k81ch9hvuctc.cloudfront.net/company/SzLFFq/images/99f06782-ba54-46e9-a114-c85934a57921.gif" style="max-width:600px;padding:0;border-width:0" width="600" data-bit="iit">
      </a>
      </td>
      </tr>
      </tbody>
      </table>
      </td>
      </tr>
      </tbody>
      </table>
      <table border="0" cellpadding="0" cellspacing="0" style="min-width:100%" width="100%">
      <tbody>
      <tr>
      <td style="padding:0px;padding-left:0px;padding-right:0px;background-color:#fff" valign="top">
      <table align="left" border="0" cellpadding="0" cellspacing="0" style="min-width:100%" width="100%">
      <tbody>
      <tr>
      <td class="m_3734019650888846141kmImageContent" style="padding:0" valign="top">
      <img align="left" alt="" class="m_3734019650888846141kmImage CToWUd" src="https://ci3.googleusercontent.com/proxy/8C0IdNFQ6AZjVIatqF8G3woe61lKMKe-RyEenZ3pZ6923KzJanp_hN80se-uBs34OfebAwkCuA7NDAvNAYaGUmiSJz5TQo6l-4r7akxta6w9qO6KQEzj8_xo_itdKEPYaqJCS5rnR1htWxJqDfllLhEieFCnxKY=s0-d-e1-ft#https://d3k81ch9hvuctc.cloudfront.net/company/SzLFFq/images/b6b72722-a48d-4a1a-af67-b483aa009e91.png" style="max-width:600px;padding:0;border-width:0" width="600" data-bit="iit">
      </td>
      </tr>
      </tbody>
      </table>
      </td>
      </tr>
      </tbody>
      </table>
      <table border="0" cellpadding="0" cellspacing="0" width="100%">
      <tbody>
      <tr>
      <td class="m_3734019650888846141kmTextBlockInner" style="background-color:#fff" valign="top">
      <table align="left" border="0" cellpadding="0" cellspacing="0" class="m_3734019650888846141kmTextContentContainer" width="100%">
      <tbody>
      <tr>
      <td class="m_3734019650888846141kmTextContent" style="padding-top:30px;padding-bottom:0px;padding-left:18px;padding-right:18px" valign="top">
      <h2><span class="m_3734019650888846141highlight">Newest drip</span></h2>
      </td>
      </tr>
      </tbody>
      </table>
      </td>
      </tr>
      </tbody>
      </table>
      <table border="0" cellpadding="0" cellspacing="0" class="m_3734019650888846141kmTableBlock m_3734019650888846141kmFloatLeft" width="100%">
      <tbody>
      <tr>
      <td class="m_3734019650888846141kmTableBlockInner" style="padding-top:9px;padding-bottom:9px;padding-left:9px;padding-right:9px;background-color:#fff">
      <table border="0" cellpadding="0" cellspacing="0" class="m_3734019650888846141kmTableBlock m_3734019650888846141kmFloatLeft" width="100%">
      <tbody>
      <tr>
      <td class="m_3734019650888846141rowContainer m_3734019650888846141kmFloatLeft m_3734019650888846141kmMobileStretch" style="padding-top:9px;padding-right:9px;padding-left:9px;padding-bottom:9px" width="50.0%">
      <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%">
      <tbody align="center">
      <tr>
      <td align="center" valign="top">
      <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
      <tbody>
      <tr>
      <td align="center">
      <a href="https://trk.klclick.com/ls/click?upn=uEJq3bjyTJkuYJR3INXIlYrwrSTvzHEHtdWsDsdbFY5Jfrhtq4DlixLdx7eDTLezHsSeRBgs1onyyS3S949EvBdiUPYPrZzOb0Q6TeH-2B-2Fzg-2Fydya4vsrAnojxYPd2Dc-2Bq4CCGaGITGzCi72gim8judexJGLm1vWGI0nsIEChjqXkdnIJY58O3YD2e4DZiBl4Ljv0flcTRXy-2Bkcu3OgwOAO7U5-2FgxDfOVbG9TBjlE02PdM4MmajJACI6LhWRZUQWLgOETPQCqNDs2-2Bdt-2BL50IE3L5V2ZYLHBH-2FOeAoNihHPo-3Dwo83_RwkSJRtVnVtCbVHovQZvrVnmAGWb8CnlQxqWIxU7wzMtD-2FWKJ297-2BwH-2BWb70WmVm-2FHyZUj3qSxrSmkkGeQ99O0YSj29Niy5h-2BVopC8PZTYVN1n0lz-2FHj2LlQQnyIX1Q7iBbG8h8TFmW7JFeINO7-2Bcd1Aibbq-2FnoXKqY-2FbgPTzcUBv3n54zNJ5VjItjzJJSNUD9XsOWIonkgbYAvChhH29k5TlCuW1oovgyXPaDLCpG0MeG97kjScZ27bTeGFcvV8TrHGDbYOWd6sorKEVjwp7jrut-2BFDHB0-2Fi71-2B-2B5KPsj4SXd6tMqSgxl-2FLYUHdbZJ9gNkid-2BlVlAlcoUkMVRt34aok-2FfwYyy8fALb5YnaYiV-2Brvq3LJ6KfYW2p2Suyo-2FJbZ8oysMNRnZCwt9SrkX-2Bp33xmcTJxbyf5w1-2BwpTZtaRw-3D" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://trk.klclick.com/ls/click?upn%3DuEJq3bjyTJkuYJR3INXIlYrwrSTvzHEHtdWsDsdbFY5Jfrhtq4DlixLdx7eDTLezHsSeRBgs1onyyS3S949EvBdiUPYPrZzOb0Q6TeH-2B-2Fzg-2Fydya4vsrAnojxYPd2Dc-2Bq4CCGaGITGzCi72gim8judexJGLm1vWGI0nsIEChjqXkdnIJY58O3YD2e4DZiBl4Ljv0flcTRXy-2Bkcu3OgwOAO7U5-2FgxDfOVbG9TBjlE02PdM4MmajJACI6LhWRZUQWLgOETPQCqNDs2-2Bdt-2BL50IE3L5V2ZYLHBH-2FOeAoNihHPo-3Dwo83_RwkSJRtVnVtCbVHovQZvrVnmAGWb8CnlQxqWIxU7wzMtD-2FWKJ297-2BwH-2BWb70WmVm-2FHyZUj3qSxrSmkkGeQ99O0YSj29Niy5h-2BVopC8PZTYVN1n0lz-2FHj2LlQQnyIX1Q7iBbG8h8TFmW7JFeINO7-2Bcd1Aibbq-2FnoXKqY-2FbgPTzcUBv3n54zNJ5VjItjzJJSNUD9XsOWIonkgbYAvChhH29k5TlCuW1oovgyXPaDLCpG0MeG97kjScZ27bTeGFcvV8TrHGDbYOWd6sorKEVjwp7jrut-2BFDHB0-2Fi71-2B-2B5KPsj4SXd6tMqSgxl-2FLYUHdbZJ9gNkid-2BlVlAlcoUkMVRt34aok-2FfwYyy8fALb5YnaYiV-2Brvq3LJ6KfYW2p2Suyo-2FJbZ8oysMNRnZCwt9SrkX-2Bp33xmcTJxbyf5w1-2BwpTZtaRw-3D&amp;source=gmail&amp;ust=1672427197812000&amp;usg=AOvVaw3vchmmuRnLovG7fz-32qoH">
      <img alt="Image of Sailor Moon - T-Shirt" src="https://ci6.googleusercontent.com/proxy/WJ5D6oE0nLPLPxU6CNRqk9WSkwSxCA62eVW89Rom1hwJ_NHuNw5_yMXIpDPqoJJYJ784KLYtQ3x_JDIWRB4EvvQbkcV6LN9Do_GAIPVtPAOfLK5-KTQ6K-mC0W6jMVsXOiaASojvSOJx=s0-d-e1-ft#https://cdn.shopify.com/s/files/1/0016/7080/7650/products/sailormoonb.jpg?v=1669614393" style="display:block;max-width:100%;max-height:350px;width:auto" width="176" class="CToWUd" data-bit="iit">
      </a>
      </td>
      </tr>
      </tbody>
      </table>
      </td>
      </tr>
      <tr>
      <td valign="top">
      <table border="0" cellpadding="0" cellspacing="0" width="100%">
      <tbody>
      <tr>
      <td align="center" class="m_3734019650888846141kmTextBlockInner m_3734019650888846141kmTextContent" style="font-weight:bold;text-align:center;padding-top:5px;padding-bottom:0px">
      <p style="padding-bottom:0">Sailor Moon - T-Shirt</p>
      </td>
      </tr>
      <tr>
      <td align="center" class="m_3734019650888846141kmButtonBlockInner" style="text-align:center">
      <a style="display:inline-block;text-decoration:none;background-color:#000;font-size:16px;font-family:&quot;Helvetica Neue&quot;,Arial;color:#ffffff;font-weight:bold;border-radius:0px;padding-top:10px;padding-bottom:10px;padding-left:10px;padding-right:10px" href="https://trk.klclick.com/ls/click?upn=uEJq3bjyTJkuYJR3INXIlYrwrSTvzHEHtdWsDsdbFY5Jfrhtq4DlixLdx7eDTLezHsSeRBgs1onyyS3S949EvBdiUPYPrZzOb0Q6TeH-2B-2Fzg-2Fydya4vsrAnojxYPd2Dc-2Bq4CCGaGITGzCi72gim8judexJGLm1vWGI0nsIEChjqXkdnIJY58O3YD2e4DZiBl4Ljv0flcTRXy-2Bkcu3OgwOAO7U5-2FgxDfOVbG9TBjlE02PdM4MmajJACI6LhWRZUQWLgOETPQCqNDs2-2Bdt-2BL50IE3L5V2ZYLHBH-2FOeAoNihHPo-3DS2pr_RwkSJRtVnVtCbVHovQZvrVnmAGWb8CnlQxqWIxU7wzMtD-2FWKJ297-2BwH-2BWb70WmVm-2FHyZUj3qSxrSmkkGeQ99O0YSj29Niy5h-2BVopC8PZTYVN1n0lz-2FHj2LlQQnyIX1Q7iBbG8h8TFmW7JFeINO7-2Bcd1Aibbq-2FnoXKqY-2FbgPTzcUBv3n54zNJ5VjItjzJJSNUD9XsOWIonkgbYAvChhH29k5TlCuW1oovgyXPaDLCpG0MeG97kjScZ27bTeGFcvV8q1XhFjXXsoGplUVxRadePwYuKmYQgGXCoBnHSvqXAPOnawDruXImDBAN3FymnwW86MsKjB4Nzv5yCqPutmMs5ooVpUh3gWKYH8-2F9Gi-2BijIyrcg8uGgQaz1KpUOrdibIW1TZGgSAJHCjbHWkBRyr1dKNcEvce15yGz928CS5fghY-3D" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://trk.klclick.com/ls/click?upn%3DuEJq3bjyTJkuYJR3INXIlYrwrSTvzHEHtdWsDsdbFY5Jfrhtq4DlixLdx7eDTLezHsSeRBgs1onyyS3S949EvBdiUPYPrZzOb0Q6TeH-2B-2Fzg-2Fydya4vsrAnojxYPd2Dc-2Bq4CCGaGITGzCi72gim8judexJGLm1vWGI0nsIEChjqXkdnIJY58O3YD2e4DZiBl4Ljv0flcTRXy-2Bkcu3OgwOAO7U5-2FgxDfOVbG9TBjlE02PdM4MmajJACI6LhWRZUQWLgOETPQCqNDs2-2Bdt-2BL50IE3L5V2ZYLHBH-2FOeAoNihHPo-3DS2pr_RwkSJRtVnVtCbVHovQZvrVnmAGWb8CnlQxqWIxU7wzMtD-2FWKJ297-2BwH-2BWb70WmVm-2FHyZUj3qSxrSmkkGeQ99O0YSj29Niy5h-2BVopC8PZTYVN1n0lz-2FHj2LlQQnyIX1Q7iBbG8h8TFmW7JFeINO7-2Bcd1Aibbq-2FnoXKqY-2FbgPTzcUBv3n54zNJ5VjItjzJJSNUD9XsOWIonkgbYAvChhH29k5TlCuW1oovgyXPaDLCpG0MeG97kjScZ27bTeGFcvV8q1XhFjXXsoGplUVxRadePwYuKmYQgGXCoBnHSvqXAPOnawDruXImDBAN3FymnwW86MsKjB4Nzv5yCqPutmMs5ooVpUh3gWKYH8-2F9Gi-2BijIyrcg8uGgQaz1KpUOrdibIW1TZGgSAJHCjbHWkBRyr1dKNcEvce15yGz928CS5fghY-3D&amp;source=gmail&amp;ust=1672427197812000&amp;usg=AOvVaw3Ffd-wqkzxiv9QFamAmk72">
                                  Buy Now
                              </a>
      </td>
      </tr>
      </tbody>
      </table>
      </td>
      </tr>
      <tr>
      </tr>
      </tbody>
      </table>
      </td>
      <td class="m_3734019650888846141rowContainer m_3734019650888846141kmFloatLeft m_3734019650888846141kmMobileStretch" style="padding-top:9px;padding-right:9px;padding-left:9px;padding-bottom:9px" width="50.0%">
      <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%">
      <tbody align="center">
      <tr>
      <td align="center" valign="top">
      <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
      <tbody>
      <tr>
      <td align="center">
      <a href="https://trk.klclick.com/ls/click?upn=uEJq3bjyTJkuYJR3INXIlYrwrSTvzHEHtdWsDsdbFY5Jfrhtq4DlixLdx7eDTLez7-2BeX766YFULOnkhtxVdwxonZ2f8n72TA1w0VNW8iki-2Bq0-2FttkSpO7B20Rb4OmdLcvMPPAhXvYzE2aBkHLD5IwBpvUKjMW8OLWweM6LSsmHgKehAiJIAXORp8u4EVcbgrCTS1pH27XyfFzO9XChjOvTIrV9Zgf4FUF76F8jg7cu3QTmJ5vcWcCNuM1dQ5xNoX3Q4Oh1SYSVFcZ8QZLPU-2FRuMrKbWFceGduy5Ob0vDYXE-3DhQ8Q_RwkSJRtVnVtCbVHovQZvrVnmAGWb8CnlQxqWIxU7wzMtD-2FWKJ297-2BwH-2BWb70WmVm-2FHyZUj3qSxrSmkkGeQ99O0YSj29Niy5h-2BVopC8PZTYVN1n0lz-2FHj2LlQQnyIX1Q7iBbG8h8TFmW7JFeINO7-2Bcd1Aibbq-2FnoXKqY-2FbgPTzcUBv3n54zNJ5VjItjzJJSNUD9XsOWIonkgbYAvChhH29k5TlCuW1oovgyXPaDLCpG0MeG97kjScZ27bTeGFcvV8VOMrNS5fZGRMIMaZUqqX9zdqsdNdWi3xbH-2FHRRr2y-2BopCo7YS1o9aDZefzSgOOfuy7JYW6heXtS-2FfOHoz9CuUU1OydjRPO5kj-2BlHtMDAqY0u7UNT8DdSQz1BrF63RDzFKHdHt6x9g6pX41pH5w5MVw-2Fw9ye2QQOGficx-2BgmZneA-3D" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://trk.klclick.com/ls/click?upn%3DuEJq3bjyTJkuYJR3INXIlYrwrSTvzHEHtdWsDsdbFY5Jfrhtq4DlixLdx7eDTLez7-2BeX766YFULOnkhtxVdwxonZ2f8n72TA1w0VNW8iki-2Bq0-2FttkSpO7B20Rb4OmdLcvMPPAhXvYzE2aBkHLD5IwBpvUKjMW8OLWweM6LSsmHgKehAiJIAXORp8u4EVcbgrCTS1pH27XyfFzO9XChjOvTIrV9Zgf4FUF76F8jg7cu3QTmJ5vcWcCNuM1dQ5xNoX3Q4Oh1SYSVFcZ8QZLPU-2FRuMrKbWFceGduy5Ob0vDYXE-3DhQ8Q_RwkSJRtVnVtCbVHovQZvrVnmAGWb8CnlQxqWIxU7wzMtD-2FWKJ297-2BwH-2BWb70WmVm-2FHyZUj3qSxrSmkkGeQ99O0YSj29Niy5h-2BVopC8PZTYVN1n0lz-2FHj2LlQQnyIX1Q7iBbG8h8TFmW7JFeINO7-2Bcd1Aibbq-2FnoXKqY-2FbgPTzcUBv3n54zNJ5VjItjzJJSNUD9XsOWIonkgbYAvChhH29k5TlCuW1oovgyXPaDLCpG0MeG97kjScZ27bTeGFcvV8VOMrNS5fZGRMIMaZUqqX9zdqsdNdWi3xbH-2FHRRr2y-2BopCo7YS1o9aDZefzSgOOfuy7JYW6heXtS-2FfOHoz9CuUU1OydjRPO5kj-2BlHtMDAqY0u7UNT8DdSQz1BrF63RDzFKHdHt6x9g6pX41pH5w5MVw-2Fw9ye2QQOGficx-2BgmZneA-3D&amp;source=gmail&amp;ust=1672427197812000&amp;usg=AOvVaw3snGZGOQ2mg2TIRC6eP6sC">
      <img alt="Image of Nobara (LOVE) - Sweater" src="https://ci5.googleusercontent.com/proxy/5q9xjdUzF_KuALouQbjF24eQJwFQbGu1yjtiM5G39oISqsFyQ_kZINtjMI11W4wqkRWuDFBK_RJohdMZNrk1dJU5esUU41zk9FXknDLRpThADrDVFsf1RneXFTN1sw3t_zUG-an4Q0FNFWz8IRqwXrUORRCJsXfHRgdIbv4uYBJwgiMbN1lYh5Wk38BVH-hMeQ=s0-d-e1-ft#https://cdn.shopify.com/s/files/1/0016/7080/7650/products/unisex-premium-sweatshirt-black-front-638212cc3b972.png?v=1669613670" style="display:block;max-width:100%;max-height:350px;width:auto" width="176" class="CToWUd" data-bit="iit">
      </a>
      </td>
      </tr>
      </tbody>
      </table>
      </td>
      </tr>
      <tr>
      <td valign="top">
      <table border="0" cellpadding="0" cellspacing="0" width="100%">
      <tbody>
      <tr>
      <td align="center" class="m_3734019650888846141kmTextBlockInner m_3734019650888846141kmTextContent" style="font-weight:bold;text-align:center;padding-top:5px;padding-bottom:0px">
      <p style="padding-bottom:0">Nobara (LOVE) - Sweater</p>
      </td>
      </tr>
      <tr>
      <td align="center" class="m_3734019650888846141kmButtonBlockInner" style="text-align:center">
      <a style="display:inline-block;text-decoration:none;background-color:#000;font-size:16px;font-family:&quot;Helvetica Neue&quot;,Arial;color:#ffffff;font-weight:bold;border-radius:0px;padding-top:10px;padding-bottom:10px;padding-left:10px;padding-right:10px" href="https://trk.klclick.com/ls/click?upn=uEJq3bjyTJkuYJR3INXIlYrwrSTvzHEHtdWsDsdbFY5Jfrhtq4DlixLdx7eDTLez7-2BeX766YFULOnkhtxVdwxonZ2f8n72TA1w0VNW8iki-2Bq0-2FttkSpO7B20Rb4OmdLcvMPPAhXvYzE2aBkHLD5IwBpvUKjMW8OLWweM6LSsmHgKehAiJIAXORp8u4EVcbgrCTS1pH27XyfFzO9XChjOvTIrV9Zgf4FUF76F8jg7cu3QTmJ5vcWcCNuM1dQ5xNoX3Q4Oh1SYSVFcZ8QZLPU-2FRuMrKbWFceGduy5Ob0vDYXE-3DpsRZ_RwkSJRtVnVtCbVHovQZvrVnmAGWb8CnlQxqWIxU7wzMtD-2FWKJ297-2BwH-2BWb70WmVm-2FHyZUj3qSxrSmkkGeQ99O0YSj29Niy5h-2BVopC8PZTYVN1n0lz-2FHj2LlQQnyIX1Q7iBbG8h8TFmW7JFeINO7-2Bcd1Aibbq-2FnoXKqY-2FbgPTzcUBv3n54zNJ5VjItjzJJSNUD9XsOWIonkgbYAvChhH29k5TlCuW1oovgyXPaDLCpG0MeG97kjScZ27bTeGFcvV81XIkWoYggSZma56Yxzv5eGlrDYbDbH-2Bm4-2FHfGSm9Gy0-2FMnB3O8ZyLwHU3WqKRlVHdaypZwyqwjXNFi5SWxxGLuSBqnGuXB-2B-2BgNbr-2Bzrov-2For45xV-2FnrU-2Fx9WGh3G8mr-2FxEAasy9v-2F3nTDx-2F9yubbEfpVoe1-2FFJuV9kzYodz7Wmo-3D" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://trk.klclick.com/ls/click?upn%3DuEJq3bjyTJkuYJR3INXIlYrwrSTvzHEHtdWsDsdbFY5Jfrhtq4DlixLdx7eDTLez7-2BeX766YFULOnkhtxVdwxonZ2f8n72TA1w0VNW8iki-2Bq0-2FttkSpO7B20Rb4OmdLcvMPPAhXvYzE2aBkHLD5IwBpvUKjMW8OLWweM6LSsmHgKehAiJIAXORp8u4EVcbgrCTS1pH27XyfFzO9XChjOvTIrV9Zgf4FUF76F8jg7cu3QTmJ5vcWcCNuM1dQ5xNoX3Q4Oh1SYSVFcZ8QZLPU-2FRuMrKbWFceGduy5Ob0vDYXE-3DpsRZ_RwkSJRtVnVtCbVHovQZvrVnmAGWb8CnlQxqWIxU7wzMtD-2FWKJ297-2BwH-2BWb70WmVm-2FHyZUj3qSxrSmkkGeQ99O0YSj29Niy5h-2BVopC8PZTYVN1n0lz-2FHj2LlQQnyIX1Q7iBbG8h8TFmW7JFeINO7-2Bcd1Aibbq-2FnoXKqY-2FbgPTzcUBv3n54zNJ5VjItjzJJSNUD9XsOWIonkgbYAvChhH29k5TlCuW1oovgyXPaDLCpG0MeG97kjScZ27bTeGFcvV81XIkWoYggSZma56Yxzv5eGlrDYbDbH-2Bm4-2FHfGSm9Gy0-2FMnB3O8ZyLwHU3WqKRlVHdaypZwyqwjXNFi5SWxxGLuSBqnGuXB-2B-2BgNbr-2Bzrov-2For45xV-2FnrU-2Fx9WGh3G8mr-2FxEAasy9v-2F3nTDx-2F9yubbEfpVoe1-2FFJuV9kzYodz7Wmo-3D&amp;source=gmail&amp;ust=1672427197812000&amp;usg=AOvVaw2tE_2f56aUmSeqVBeR6ewD">
                                  Buy Now
                              </a>
      </td>
      </tr>
      </tbody>
      </table>
      </td>
      </tr>
      <tr>
      </tr>
      </tbody>
      </table>
      </td>
      </tr>
      <tr>
      <td class="m_3734019650888846141rowContainer m_3734019650888846141kmFloatLeft m_3734019650888846141kmMobileStretch" style="padding-top:9px;padding-right:9px;padding-left:9px;padding-bottom:9px" width="50.0%">
      <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%">
      <tbody align="center">
      <tr>
      <td align="center" valign="top">
      <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
      <tbody>
      <tr>
      <td align="center">
      <a href="https://trk.klclick.com/ls/click?upn=uEJq3bjyTJkuYJR3INXIlYrwrSTvzHEHtdWsDsdbFY5Jfrhtq4DlixLdx7eDTLez79TXzaTo-2Fon9iHDlMlZTDoEXQ9kHF8aslOSalR7a3spodrJ3NpFetzBsCP2AfTxQr2XNXO53Sw78bjlsYN06JQwsc5r4a4z7Yk23gvIz4uVMamcJJwQhBRjzFBHyOYjBvzIYMZ4Wg220BjGoHpUJjUZatPxwLjONa6lFkqBYXzgXYCne2d5qSwgowu9NC4i9QiRH5d03H4lxbRLfr4Cu2-2FwdJh4bUZwGlDZAJEJ4Rrw-3Dy6n8_RwkSJRtVnVtCbVHovQZvrVnmAGWb8CnlQxqWIxU7wzMtD-2FWKJ297-2BwH-2BWb70WmVm-2FHyZUj3qSxrSmkkGeQ99O0YSj29Niy5h-2BVopC8PZTYVN1n0lz-2FHj2LlQQnyIX1Q7iBbG8h8TFmW7JFeINO7-2Bcd1Aibbq-2FnoXKqY-2FbgPTzcUBv3n54zNJ5VjItjzJJSNUD9XsOWIonkgbYAvChhH29k5TlCuW1oovgyXPaDLCpG0MeG97kjScZ27bTeGFcvV89sg2g0j8x1VC7FJUeknfywlp1wembaV-2FXtYf9345mFyulCHwcXjZ1ID5RFhHjMoNSmkHr3Fuf2oPug6cKjuuLZMNH3t-2B1Y1xObUTxZhKkDDTQ92akVIL4QGB3YcKKijdIOH4n9jEDAZ01V5l3GEPXH0BcqZvyUekAzqx-2Bq61Fa3MXE24gFv8MGs-2FsYwSKlcg" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://trk.klclick.com/ls/click?upn%3DuEJq3bjyTJkuYJR3INXIlYrwrSTvzHEHtdWsDsdbFY5Jfrhtq4DlixLdx7eDTLez79TXzaTo-2Fon9iHDlMlZTDoEXQ9kHF8aslOSalR7a3spodrJ3NpFetzBsCP2AfTxQr2XNXO53Sw78bjlsYN06JQwsc5r4a4z7Yk23gvIz4uVMamcJJwQhBRjzFBHyOYjBvzIYMZ4Wg220BjGoHpUJjUZatPxwLjONa6lFkqBYXzgXYCne2d5qSwgowu9NC4i9QiRH5d03H4lxbRLfr4Cu2-2FwdJh4bUZwGlDZAJEJ4Rrw-3Dy6n8_RwkSJRtVnVtCbVHovQZvrVnmAGWb8CnlQxqWIxU7wzMtD-2FWKJ297-2BwH-2BWb70WmVm-2FHyZUj3qSxrSmkkGeQ99O0YSj29Niy5h-2BVopC8PZTYVN1n0lz-2FHj2LlQQnyIX1Q7iBbG8h8TFmW7JFeINO7-2Bcd1Aibbq-2FnoXKqY-2FbgPTzcUBv3n54zNJ5VjItjzJJSNUD9XsOWIonkgbYAvChhH29k5TlCuW1oovgyXPaDLCpG0MeG97kjScZ27bTeGFcvV89sg2g0j8x1VC7FJUeknfywlp1wembaV-2FXtYf9345mFyulCHwcXjZ1ID5RFhHjMoNSmkHr3Fuf2oPug6cKjuuLZMNH3t-2B1Y1xObUTxZhKkDDTQ92akVIL4QGB3YcKKijdIOH4n9jEDAZ01V5l3GEPXH0BcqZvyUekAzqx-2Bq61Fa3MXE24gFv8MGs-2FsYwSKlcg&amp;source=gmail&amp;ust=1672427197812000&amp;usg=AOvVaw3ITMPKzBQWsqWes9w8YqFg">
      <img alt="Image of Makima (CONTROL) - Hoodie" src="https://ci5.googleusercontent.com/proxy/b_hhfdzO8Sol9Co66Sc7iR7pd3pAuH9FA48rIsrzZy2pDXAk4Hrs3FfRDqeYcbpRpXPILBzTJupsa4U_FjWfc39K23zX119JqKFB6MRO6bPWuLjFRblDuV3LtfGOTub892FsSbhU9P0FwaLz2m1awdmYiJvMU-_RGBzAUG6s8ABLvRvyjQc5_9KxIk__=s0-d-e1-ft#https://cdn.shopify.com/s/files/1/0016/7080/7650/products/unisex-premium-hoodie-black-front-6382183ab8624.png?v=1669613508" style="display:block;max-width:100%;max-height:350px;width:auto" width="176" class="CToWUd" data-bit="iit">
      </a>
      </td>
      </tr>
      </tbody>
      </table>
      </td>
      </tr>
      <tr>
      <td valign="top">
      <table border="0" cellpadding="0" cellspacing="0" width="100%">
      <tbody>
      <tr>
      <td align="center" class="m_3734019650888846141kmTextBlockInner m_3734019650888846141kmTextContent" style="font-weight:bold;text-align:center;padding-top:5px;padding-bottom:0px">
      <p style="padding-bottom:0">Makima (CONTROL) - Hoodie</p>
      </td>
      </tr>
      <tr>
      <td align="center" class="m_3734019650888846141kmButtonBlockInner" style="text-align:center">
      <a style="display:inline-block;text-decoration:none;background-color:#000;font-size:16px;font-family:&quot;Helvetica Neue&quot;,Arial;color:#ffffff;font-weight:bold;border-radius:0px;padding-top:10px;padding-bottom:10px;padding-left:10px;padding-right:10px" href="https://trk.klclick.com/ls/click?upn=uEJq3bjyTJkuYJR3INXIlYrwrSTvzHEHtdWsDsdbFY5Jfrhtq4DlixLdx7eDTLez79TXzaTo-2Fon9iHDlMlZTDoEXQ9kHF8aslOSalR7a3spodrJ3NpFetzBsCP2AfTxQr2XNXO53Sw78bjlsYN06JQwsc5r4a4z7Yk23gvIz4uVMamcJJwQhBRjzFBHyOYjBvzIYMZ4Wg220BjGoHpUJjUZatPxwLjONa6lFkqBYXzgXYCne2d5qSwgowu9NC4i9QiRH5d03H4lxbRLfr4Cu2-2FwdJh4bUZwGlDZAJEJ4Rrw-3D82cH_RwkSJRtVnVtCbVHovQZvrVnmAGWb8CnlQxqWIxU7wzMtD-2FWKJ297-2BwH-2BWb70WmVm-2FHyZUj3qSxrSmkkGeQ99O0YSj29Niy5h-2BVopC8PZTYVN1n0lz-2FHj2LlQQnyIX1Q7iBbG8h8TFmW7JFeINO7-2Bcd1Aibbq-2FnoXKqY-2FbgPTzcUBv3n54zNJ5VjItjzJJSNUD9XsOWIonkgbYAvChhH29k5TlCuW1oovgyXPaDLCpG0MeG97kjScZ27bTeGFcvV86rbxXAa5Gn-2FfC93U2nPS6RqpkArp-2FsQrgswB5-2FaI-2BZ7ZhmMR8EUiypn5Y5MVoeemcy91g7ZNn14klZhdoR-2F45eW1Ghi-2Bs9lOd86QOyWgwCFv6fopdJpbV2-2BGo7yTsQ3uDqlwPQy2PZtLaGqlxXrV-2FBT77GrOQSBqlAIKVTwITXWByNT1jrIES71CS6oL564G" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://trk.klclick.com/ls/click?upn%3DuEJq3bjyTJkuYJR3INXIlYrwrSTvzHEHtdWsDsdbFY5Jfrhtq4DlixLdx7eDTLez79TXzaTo-2Fon9iHDlMlZTDoEXQ9kHF8aslOSalR7a3spodrJ3NpFetzBsCP2AfTxQr2XNXO53Sw78bjlsYN06JQwsc5r4a4z7Yk23gvIz4uVMamcJJwQhBRjzFBHyOYjBvzIYMZ4Wg220BjGoHpUJjUZatPxwLjONa6lFkqBYXzgXYCne2d5qSwgowu9NC4i9QiRH5d03H4lxbRLfr4Cu2-2FwdJh4bUZwGlDZAJEJ4Rrw-3D82cH_RwkSJRtVnVtCbVHovQZvrVnmAGWb8CnlQxqWIxU7wzMtD-2FWKJ297-2BwH-2BWb70WmVm-2FHyZUj3qSxrSmkkGeQ99O0YSj29Niy5h-2BVopC8PZTYVN1n0lz-2FHj2LlQQnyIX1Q7iBbG8h8TFmW7JFeINO7-2Bcd1Aibbq-2FnoXKqY-2FbgPTzcUBv3n54zNJ5VjItjzJJSNUD9XsOWIonkgbYAvChhH29k5TlCuW1oovgyXPaDLCpG0MeG97kjScZ27bTeGFcvV86rbxXAa5Gn-2FfC93U2nPS6RqpkArp-2FsQrgswB5-2FaI-2BZ7ZhmMR8EUiypn5Y5MVoeemcy91g7ZNn14klZhdoR-2F45eW1Ghi-2Bs9lOd86QOyWgwCFv6fopdJpbV2-2BGo7yTsQ3uDqlwPQy2PZtLaGqlxXrV-2FBT77GrOQSBqlAIKVTwITXWByNT1jrIES71CS6oL564G&amp;source=gmail&amp;ust=1672427197812000&amp;usg=AOvVaw0oNvGysSNKM2E2jAWgaLmL">
                                  Buy Now
                              </a>
      </td>
      </tr>
      </tbody>
      </table>
      </td>
      </tr>
      <tr>
      </tr>
      </tbody>
      </table>
      </td>
      <td class="m_3734019650888846141rowContainer m_3734019650888846141kmFloatLeft m_3734019650888846141kmMobileStretch" style="padding-top:9px;padding-right:9px;padding-left:9px;padding-bottom:9px" width="50.0%">
      <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%">
      <tbody align="center">
      <tr>
      <td align="center" valign="top">
      <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
      <tbody>
      <tr>
      <td align="center">
      <a href="https://trk.klclick.com/ls/click?upn=uEJq3bjyTJkuYJR3INXIlYrwrSTvzHEHtdWsDsdbFY5Jfrhtq4DlixLdx7eDTLezzBIZ5mO0tRJQKY4GW7i0X3M3uhJbcxSkNw8CMSAtg87t3neTL1M39Q8C-2FJnODSvQkhuRG-2Bg-2BmaiA3OSRMiiCijZObq0kyXcnr2mpDirB3OoVxK3pz25mrU6keZac6hkntr4jNjkbUquznLxDunso95Gn-2BwODtJXiN03dj5X1irrTk9mYZqiX3s8M3BUjMqD1tzcd67kLkfI4vkhHONlxEpRpeLOfPMu-2BpPANnDarQ-2FY-3DP2gj_RwkSJRtVnVtCbVHovQZvrVnmAGWb8CnlQxqWIxU7wzMtD-2FWKJ297-2BwH-2BWb70WmVm-2FHyZUj3qSxrSmkkGeQ99O0YSj29Niy5h-2BVopC8PZTYVN1n0lz-2FHj2LlQQnyIX1Q7iBbG8h8TFmW7JFeINO7-2Bcd1Aibbq-2FnoXKqY-2FbgPTzcUBv3n54zNJ5VjItjzJJSNUD9XsOWIonkgbYAvChhH29k5TlCuW1oovgyXPaDLCpG0MeG97kjScZ27bTeGFcvV8e1cSqRWHcMhhe2LZHLaUhEvGxrgwEiIfrZxoYBuEY7KNrmT-2FcK2XOrc4kap4taXzEM-2F6XCoQMUqxNAKCAy9m0cNXwCXSTroe-2BPMUfd1X-2FY46UN49NHnmdL8A-2BYXO4frjROZ7wane9vJ9LPf7Wq8vtWYOMXE8q-2FrAh2q6XayG1qbEU5SG0qjTJrxBeUGHYEFs" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://trk.klclick.com/ls/click?upn%3DuEJq3bjyTJkuYJR3INXIlYrwrSTvzHEHtdWsDsdbFY5Jfrhtq4DlixLdx7eDTLezzBIZ5mO0tRJQKY4GW7i0X3M3uhJbcxSkNw8CMSAtg87t3neTL1M39Q8C-2FJnODSvQkhuRG-2Bg-2BmaiA3OSRMiiCijZObq0kyXcnr2mpDirB3OoVxK3pz25mrU6keZac6hkntr4jNjkbUquznLxDunso95Gn-2BwODtJXiN03dj5X1irrTk9mYZqiX3s8M3BUjMqD1tzcd67kLkfI4vkhHONlxEpRpeLOfPMu-2BpPANnDarQ-2FY-3DP2gj_RwkSJRtVnVtCbVHovQZvrVnmAGWb8CnlQxqWIxU7wzMtD-2FWKJ297-2BwH-2BWb70WmVm-2FHyZUj3qSxrSmkkGeQ99O0YSj29Niy5h-2BVopC8PZTYVN1n0lz-2FHj2LlQQnyIX1Q7iBbG8h8TFmW7JFeINO7-2Bcd1Aibbq-2FnoXKqY-2FbgPTzcUBv3n54zNJ5VjItjzJJSNUD9XsOWIonkgbYAvChhH29k5TlCuW1oovgyXPaDLCpG0MeG97kjScZ27bTeGFcvV8e1cSqRWHcMhhe2LZHLaUhEvGxrgwEiIfrZxoYBuEY7KNrmT-2FcK2XOrc4kap4taXzEM-2F6XCoQMUqxNAKCAy9m0cNXwCXSTroe-2BPMUfd1X-2FY46UN49NHnmdL8A-2BYXO4frjROZ7wane9vJ9LPf7Wq8vtWYOMXE8q-2FrAh2q6XayG1qbEU5SG0qjTJrxBeUGHYEFs&amp;source=gmail&amp;ust=1672427197812000&amp;usg=AOvVaw1Youv2RL308kO_35qBuEKI">
      <img alt="Image of Pochita - T-Shirt" src="https://ci4.googleusercontent.com/proxy/4ZszSh-Ygeim-_0ZJivmszEQ3pl7tjuFWma2bi2QnEJK3jf4mCuNx-kaWbQzxEheEp0NWlgonDB1jWAzecG2plqPq4zmyAep9pXKTf_2O1-d-pphzwijdB6uyIYyljfVwq5iQRqLCtfVTA=s0-d-e1-ft#https://cdn.shopify.com/s/files/1/0016/7080/7650/products/pochitamauve.jpg?v=1669307080" style="display:block;max-width:100%;max-height:350px;width:auto" width="176" class="CToWUd" data-bit="iit">
      </a>
      </td>
      </tr>
      </tbody>
      </table>
      </td>
      </tr>
      <tr>
      <td valign="top">
      <table border="0" cellpadding="0" cellspacing="0" width="100%">
      <tbody>
      <tr>
      <td align="center" class="m_3734019650888846141kmTextBlockInner m_3734019650888846141kmTextContent" style="font-weight:bold;text-align:center;padding-top:5px;padding-bottom:0px">
      <p style="padding-bottom:0">Pochita - T-Shirt</p>
      </td>
      </tr>
      <tr>
      <td align="center" class="m_3734019650888846141kmButtonBlockInner" style="text-align:center">
      <a style="display:inline-block;text-decoration:none;background-color:#000;font-size:16px;font-family:&quot;Helvetica Neue&quot;,Arial;color:#ffffff;font-weight:bold;border-radius:0px;padding-top:10px;padding-bottom:10px;padding-left:10px;padding-right:10px" href="https://trk.klclick.com/ls/click?upn=uEJq3bjyTJkuYJR3INXIlYrwrSTvzHEHtdWsDsdbFY5Jfrhtq4DlixLdx7eDTLezzBIZ5mO0tRJQKY4GW7i0X3M3uhJbcxSkNw8CMSAtg87t3neTL1M39Q8C-2FJnODSvQkhuRG-2Bg-2BmaiA3OSRMiiCijZObq0kyXcnr2mpDirB3OoVxK3pz25mrU6keZac6hkntr4jNjkbUquznLxDunso95Gn-2BwODtJXiN03dj5X1irrTk9mYZqiX3s8M3BUjMqD1tzcd67kLkfI4vkhHONlxEpRpeLOfPMu-2BpPANnDarQ-2FY-3DMiIc_RwkSJRtVnVtCbVHovQZvrVnmAGWb8CnlQxqWIxU7wzMtD-2FWKJ297-2BwH-2BWb70WmVm-2FHyZUj3qSxrSmkkGeQ99O0YSj29Niy5h-2BVopC8PZTYVN1n0lz-2FHj2LlQQnyIX1Q7iBbG8h8TFmW7JFeINO7-2Bcd1Aibbq-2FnoXKqY-2FbgPTzcUBv3n54zNJ5VjItjzJJSNUD9XsOWIonkgbYAvChhH29k5TlCuW1oovgyXPaDLCpG0MeG97kjScZ27bTeGFcvV8pyYEVObv4zOxdE-2BXcVJ-2FZOhFGIKZfaw-2FPuWQ8UYo71-2BHcxpQDCBdzAkhq-2B3a5N-2FVGyZQsbNbHSFQ5iXy0N8ZgFII8JrgHbJOVP9gP8oHmXyEJtIGhG6xn84g4aAHLFCWjPAkSqxxavHtZGvzt23CVF269zlSqGRHW6SJt-2BP0M2bIxAuBti96BwQ-2BAfPaUGD4" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://trk.klclick.com/ls/click?upn%3DuEJq3bjyTJkuYJR3INXIlYrwrSTvzHEHtdWsDsdbFY5Jfrhtq4DlixLdx7eDTLezzBIZ5mO0tRJQKY4GW7i0X3M3uhJbcxSkNw8CMSAtg87t3neTL1M39Q8C-2FJnODSvQkhuRG-2Bg-2BmaiA3OSRMiiCijZObq0kyXcnr2mpDirB3OoVxK3pz25mrU6keZac6hkntr4jNjkbUquznLxDunso95Gn-2BwODtJXiN03dj5X1irrTk9mYZqiX3s8M3BUjMqD1tzcd67kLkfI4vkhHONlxEpRpeLOfPMu-2BpPANnDarQ-2FY-3DMiIc_RwkSJRtVnVtCbVHovQZvrVnmAGWb8CnlQxqWIxU7wzMtD-2FWKJ297-2BwH-2BWb70WmVm-2FHyZUj3qSxrSmkkGeQ99O0YSj29Niy5h-2BVopC8PZTYVN1n0lz-2FHj2LlQQnyIX1Q7iBbG8h8TFmW7JFeINO7-2Bcd1Aibbq-2FnoXKqY-2FbgPTzcUBv3n54zNJ5VjItjzJJSNUD9XsOWIonkgbYAvChhH29k5TlCuW1oovgyXPaDLCpG0MeG97kjScZ27bTeGFcvV8pyYEVObv4zOxdE-2BXcVJ-2FZOhFGIKZfaw-2FPuWQ8UYo71-2BHcxpQDCBdzAkhq-2B3a5N-2FVGyZQsbNbHSFQ5iXy0N8ZgFII8JrgHbJOVP9gP8oHmXyEJtIGhG6xn84g4aAHLFCWjPAkSqxxavHtZGvzt23CVF269zlSqGRHW6SJt-2BP0M2bIxAuBti96BwQ-2BAfPaUGD4&amp;source=gmail&amp;ust=1672427197812000&amp;usg=AOvVaw0AJzGx8FkqjZMH56hptGnM">
                                  Buy Now
                              </a>
      </td>
      </tr>
      </tbody>
      </table>
      </td>
      </tr>
      <tr>
      </tr>
      </tbody>
      </table>
      </td>
      </tr>
      <tr>
      </tr>
      </tbody>
      </table>
      </td>
      </tr>
      </tbody>
      </table>
      <table border="0" cellpadding="0" cellspacing="0" style="width:100%!important" width="100%">
      <tbody>
      <tr>
      <td align="center" class="m_3734019650888846141kmButtonBlockInner" style="padding-top:9px;padding-bottom:30px;padding-left:0px;padding-right:0px;background-color:#fff" valign="top">
      <table border="0" cellpadding="0" cellspacing="0" class="m_3734019650888846141kmButtonContentContainer" style="background-color:#f80012;border-radius:0px" width="">
      <tbody>
      <tr>
      
      <td align="center" class="m_3734019650888846141kmButtonContent" style="font-size:22px;color:#ffffff;letter-spacing:0px;font-weight:normal;font-family:&quot;Helvetica Neue&quot;,Arial" valign="middle">
      <a class="m_3734019650888846141kmButton" style="text-decoration:none;display:inline-block;padding-top:15px;padding-bottom:15px;font-size:22px;color:#ffffff;letter-spacing:0px;font-weight:normal;padding-left:15px;padding-right:15px;font-family:&quot;Helvetica Neue&quot;,Arial" title="" href="https://trk.klclick.com/ls/click?upn=uEJq3bjyTJkuYJR3INXIlaR7UH-2BtWEQm5BnymlpMMkvQUzP-2F7WpzYBirxCkK-2B70LiqHtC0v-2BeFCjQPe2enWGpGhT20iA4082c7KoOoXec2TtVjUKoF1Qf-2FRmQmCbMr14Wa2WCKp8XI09LcXUxm7RDUha16tf-2BoYTKtCvoY67KIYD0k7-2BN6O-2BUHxChQElOmNymEbOyLpmshMmm7YYt1F1WVJMzupngszmXC4EGDPViO5GfNMTm5uQk37V5Y6ez8zyqZDPzGLeFBRe1mX8tyaEutCNE-2FGZdBBJ7mGApN9xcjpxJvHoBtKJyHY6aPQ0JiLjzv5nEe86-2BAO-2FXJ3Ii-2Be1Yw-3D-3DZmDg_RwkSJRtVnVtCbVHovQZvrVnmAGWb8CnlQxqWIxU7wzMtD-2FWKJ297-2BwH-2BWb70WmVm-2FHyZUj3qSxrSmkkGeQ99O0YSj29Niy5h-2BVopC8PZTYVN1n0lz-2FHj2LlQQnyIX1Q7iBbG8h8TFmW7JFeINO7-2Bcd1Aibbq-2FnoXKqY-2FbgPTzcUBv3n54zNJ5VjItjzJJSNUD9XsOWIonkgbYAvChhH29k5TlCuW1oovgyXPaDLCpG0MeG97kjScZ27bTeGFcvV88N-2FJJaZsKfK9GeF1YCIQts7jvHBRYLyySMAm9bYxSsWXTwlBdnwltxsQoNMRayTTDPJ07zo0eM-2BBgOsl7TEDfDlNdFcEnV7jCv26uqlKoz5yz7uDZAiqvAd5dYJwuHMWNCcXMrdHEcYmf7oQdfgTYn-2Bxz0zOABEPwdPDjThqPM-2BCpEorIhYRqQn0hPPNFjrl" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://trk.klclick.com/ls/click?upn%3DuEJq3bjyTJkuYJR3INXIlaR7UH-2BtWEQm5BnymlpMMkvQUzP-2F7WpzYBirxCkK-2B70LiqHtC0v-2BeFCjQPe2enWGpGhT20iA4082c7KoOoXec2TtVjUKoF1Qf-2FRmQmCbMr14Wa2WCKp8XI09LcXUxm7RDUha16tf-2BoYTKtCvoY67KIYD0k7-2BN6O-2BUHxChQElOmNymEbOyLpmshMmm7YYt1F1WVJMzupngszmXC4EGDPViO5GfNMTm5uQk37V5Y6ez8zyqZDPzGLeFBRe1mX8tyaEutCNE-2FGZdBBJ7mGApN9xcjpxJvHoBtKJyHY6aPQ0JiLjzv5nEe86-2BAO-2FXJ3Ii-2Be1Yw-3D-3DZmDg_RwkSJRtVnVtCbVHovQZvrVnmAGWb8CnlQxqWIxU7wzMtD-2FWKJ297-2BwH-2BWb70WmVm-2FHyZUj3qSxrSmkkGeQ99O0YSj29Niy5h-2BVopC8PZTYVN1n0lz-2FHj2LlQQnyIX1Q7iBbG8h8TFmW7JFeINO7-2Bcd1Aibbq-2FnoXKqY-2FbgPTzcUBv3n54zNJ5VjItjzJJSNUD9XsOWIonkgbYAvChhH29k5TlCuW1oovgyXPaDLCpG0MeG97kjScZ27bTeGFcvV88N-2FJJaZsKfK9GeF1YCIQts7jvHBRYLyySMAm9bYxSsWXTwlBdnwltxsQoNMRayTTDPJ07zo0eM-2BBgOsl7TEDfDlNdFcEnV7jCv26uqlKoz5yz7uDZAiqvAd5dYJwuHMWNCcXMrdHEcYmf7oQdfgTYn-2Bxz0zOABEPwdPDjThqPM-2BCpEorIhYRqQn0hPPNFjrl&amp;source=gmail&amp;ust=1672427197812000&amp;usg=AOvVaw2mibtW0psbgaX6e9M9OEzq">SHOP NEW DRIP</a>
      </td>
      
      
      </tr>
      </tbody>
      </table>
      </td>
      </tr>
      </tbody>
      </table>
      <table border="0" cellpadding="0" cellspacing="0" width="100%">
      <tbody>
      <tr>
      <td class="m_3734019650888846141kmTextBlockInner" style="background-color:#fff" valign="top">
      <table align="left" border="0" cellpadding="0" cellspacing="0" class="m_3734019650888846141kmTextContentContainer" width="100%">
      <tbody>
      <tr>
      <td class="m_3734019650888846141kmTextContent" style="padding-top:30px;padding-bottom:0px;padding-left:18px;padding-right:18px" valign="top">
      <h2><span class="m_3734019650888846141highlight">Bestsellers</span></h2>
      </td>
      </tr>
      </tbody>
      </table>
      </td>
      </tr>
      </tbody>
      </table>
      <table border="0" cellpadding="0" cellspacing="0" class="m_3734019650888846141kmTableBlock m_3734019650888846141kmFloatLeft" width="100%">
      <tbody>
      <tr>
      <td class="m_3734019650888846141kmTableBlockInner" style="padding-top:9px;padding-bottom:9px;padding-left:9px;padding-right:9px;background-color:#fff">
      <table border="0" cellpadding="0" cellspacing="0" class="m_3734019650888846141kmTableBlock m_3734019650888846141kmFloatLeft" width="100%">
      <tbody>
      <tr>
      <td class="m_3734019650888846141rowContainer m_3734019650888846141kmFloatLeft m_3734019650888846141kmMobileStretch" style="padding-top:9px;padding-right:9px;padding-left:9px;padding-bottom:9px" width="50.0%">
      <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%">
      <tbody align="center">
      <tr>
      <td align="center" valign="top">
      <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
      <tbody>
      <tr>
      <td align="center">
      <a href="https://trk.klclick.com/ls/click?upn=uEJq3bjyTJkuYJR3INXIlYrwrSTvzHEHtdWsDsdbFY5Jfrhtq4DlixLdx7eDTLez7ZT7-2FJ1qrWegyBEpiVTKUbhVdWWGwcz4ZLOpj8jrjVvD8n69fzpY8YPzNJDy9joHUjemXDJVHRGlZ60Ie96L9bykRemRaFuztoDIbOyun3l34TipyHX7O6T0m6HrGTxZhpB7G8xWRzoxP-2BRhgivVjR9HF9HU-2BUbjvQfzmPzM3etiLnQMxKpZ-2Bi6dMvEioXuvSAaC8UuLecuCNgRX6C7KVSUM1cN5VG5dnpCJvzNZssyQW-2FbZWeNkp-2Fbr2Qlitv-2Ba4vWy_RwkSJRtVnVtCbVHovQZvrVnmAGWb8CnlQxqWIxU7wzMtD-2FWKJ297-2BwH-2BWb70WmVm-2FHyZUj3qSxrSmkkGeQ99O0YSj29Niy5h-2BVopC8PZTYVN1n0lz-2FHj2LlQQnyIX1Q7iBbG8h8TFmW7JFeINO7-2Bcd1Aibbq-2FnoXKqY-2FbgPTzcUBv3n54zNJ5VjItjzJJSNUD9XsOWIonkgbYAvChhH29k5TlCuW1oovgyXPaDLCpG0MeG97kjScZ27bTeGFcvV8frJDYw8hw8JTTUe5HM0YCo6cXYgUIFPNI9-2FrBYRuI0OFxYFAK92zjDkOMSg9r4HlVLdZoBLvNckWxtr444APS7A-2FhihMX-2FzsoIgJfnWQYo-2FpXObMGuc9PWeL1yio2C67KLYQJdPmbx8XsTvzYNTB-2Bk9d-2FKVWBGpsfAU8q3D0qMoOim5O7S0kalKUR4ggWSWQ" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://trk.klclick.com/ls/click?upn%3DuEJq3bjyTJkuYJR3INXIlYrwrSTvzHEHtdWsDsdbFY5Jfrhtq4DlixLdx7eDTLez7ZT7-2FJ1qrWegyBEpiVTKUbhVdWWGwcz4ZLOpj8jrjVvD8n69fzpY8YPzNJDy9joHUjemXDJVHRGlZ60Ie96L9bykRemRaFuztoDIbOyun3l34TipyHX7O6T0m6HrGTxZhpB7G8xWRzoxP-2BRhgivVjR9HF9HU-2BUbjvQfzmPzM3etiLnQMxKpZ-2Bi6dMvEioXuvSAaC8UuLecuCNgRX6C7KVSUM1cN5VG5dnpCJvzNZssyQW-2FbZWeNkp-2Fbr2Qlitv-2Ba4vWy_RwkSJRtVnVtCbVHovQZvrVnmAGWb8CnlQxqWIxU7wzMtD-2FWKJ297-2BwH-2BWb70WmVm-2FHyZUj3qSxrSmkkGeQ99O0YSj29Niy5h-2BVopC8PZTYVN1n0lz-2FHj2LlQQnyIX1Q7iBbG8h8TFmW7JFeINO7-2Bcd1Aibbq-2FnoXKqY-2FbgPTzcUBv3n54zNJ5VjItjzJJSNUD9XsOWIonkgbYAvChhH29k5TlCuW1oovgyXPaDLCpG0MeG97kjScZ27bTeGFcvV8frJDYw8hw8JTTUe5HM0YCo6cXYgUIFPNI9-2FrBYRuI0OFxYFAK92zjDkOMSg9r4HlVLdZoBLvNckWxtr444APS7A-2FhihMX-2FzsoIgJfnWQYo-2FpXObMGuc9PWeL1yio2C67KLYQJdPmbx8XsTvzYNTB-2Bk9d-2FKVWBGpsfAU8q3D0qMoOim5O7S0kalKUR4ggWSWQ&amp;source=gmail&amp;ust=1672427197812000&amp;usg=AOvVaw10YgCn7qJJnvuiSvNj-mT2">
      <img alt="Image of Sunset LOFI Sakura - T-Shirt" src="https://ci4.googleusercontent.com/proxy/KFrxOhmPBBr8C57xDrdRKQFfU67bA8SqYwNnQlOfG-cIZIMP4H2139sXOLDQuthGzp4CEz9lMw8TNGk4lLUBTAuzvxin7rzzVUby3MJO-tw1TeNgmv18KpMLQfmjy1Pu=s0-d-e1-ft#https://cdn.shopify.com/s/files/1/0016/7080/7650/products/42.jpg?v=1662983453" style="display:block;max-width:100%;max-height:350px;width:auto" width="176" class="CToWUd" data-bit="iit">
      </a>
      </td>
      </tr>
      </tbody>
      </table>
      </td>
      </tr>
      <tr>
      <td valign="top">
      <table border="0" cellpadding="0" cellspacing="0" width="100%">
      <tbody>
      <tr>
      <td align="center" class="m_3734019650888846141kmTextBlockInner m_3734019650888846141kmTextContent" style="font-weight:bold;text-align:center;padding-top:5px;padding-bottom:0px">
      <p style="padding-bottom:0">Sunset LOFI Sakura - T-Shirt</p>
      </td>
      </tr>
      <tr>
      <td align="center" class="m_3734019650888846141kmButtonBlockInner" style="text-align:center">
      <a style="display:inline-block;text-decoration:none;background-color:#000;font-size:16px;font-family:&quot;Helvetica Neue&quot;,Arial;color:#ffffff;font-weight:bold;border-radius:0px;padding-top:10px;padding-bottom:10px;padding-left:10px;padding-right:10px" href="https://trk.klclick.com/ls/click?upn=uEJq3bjyTJkuYJR3INXIlYrwrSTvzHEHtdWsDsdbFY5Jfrhtq4DlixLdx7eDTLez7ZT7-2FJ1qrWegyBEpiVTKUbhVdWWGwcz4ZLOpj8jrjVvD8n69fzpY8YPzNJDy9joHUjemXDJVHRGlZ60Ie96L9bykRemRaFuztoDIbOyun3l34TipyHX7O6T0m6HrGTxZhpB7G8xWRzoxP-2BRhgivVjR9HF9HU-2BUbjvQfzmPzM3etiLnQMxKpZ-2Bi6dMvEioXuvSAaC8UuLecuCNgRX6C7KVSUM1cN5VG5dnpCJvzNZssyQW-2FbZWeNkp-2Fbr2Qlitv-2BaXN42_RwkSJRtVnVtCbVHovQZvrVnmAGWb8CnlQxqWIxU7wzMtD-2FWKJ297-2BwH-2BWb70WmVm-2FHyZUj3qSxrSmkkGeQ99O0YSj29Niy5h-2BVopC8PZTYVN1n0lz-2FHj2LlQQnyIX1Q7iBbG8h8TFmW7JFeINO7-2Bcd1Aibbq-2FnoXKqY-2FbgPTzcUBv3n54zNJ5VjItjzJJSNUD9XsOWIonkgbYAvChhH29k5TlCuW1oovgyXPaDLCpG0MeG97kjScZ27bTeGFcvV8mXkyaH9imwdR7zdY2iB8-2FQssRueK3rsDb8rkZQSA8EPmfo-2B-2FqeeGp1J099FVSmdnyWaADmRQiSFTxFAwgJ-2F-2Fft6F7CDH9eoZQ8SCySg2w-2BL5cw1I8ZjbzXSAUH-2B47L-2FtbeXwhkUitDnMcLYXv5F8nCHovjErn-2F-2BWC3Pu7VDXUW8DAAvxnSx6BuCLY7W-2By-2B1E" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://trk.klclick.com/ls/click?upn%3DuEJq3bjyTJkuYJR3INXIlYrwrSTvzHEHtdWsDsdbFY5Jfrhtq4DlixLdx7eDTLez7ZT7-2FJ1qrWegyBEpiVTKUbhVdWWGwcz4ZLOpj8jrjVvD8n69fzpY8YPzNJDy9joHUjemXDJVHRGlZ60Ie96L9bykRemRaFuztoDIbOyun3l34TipyHX7O6T0m6HrGTxZhpB7G8xWRzoxP-2BRhgivVjR9HF9HU-2BUbjvQfzmPzM3etiLnQMxKpZ-2Bi6dMvEioXuvSAaC8UuLecuCNgRX6C7KVSUM1cN5VG5dnpCJvzNZssyQW-2FbZWeNkp-2Fbr2Qlitv-2BaXN42_RwkSJRtVnVtCbVHovQZvrVnmAGWb8CnlQxqWIxU7wzMtD-2FWKJ297-2BwH-2BWb70WmVm-2FHyZUj3qSxrSmkkGeQ99O0YSj29Niy5h-2BVopC8PZTYVN1n0lz-2FHj2LlQQnyIX1Q7iBbG8h8TFmW7JFeINO7-2Bcd1Aibbq-2FnoXKqY-2FbgPTzcUBv3n54zNJ5VjItjzJJSNUD9XsOWIonkgbYAvChhH29k5TlCuW1oovgyXPaDLCpG0MeG97kjScZ27bTeGFcvV8mXkyaH9imwdR7zdY2iB8-2FQssRueK3rsDb8rkZQSA8EPmfo-2B-2FqeeGp1J099FVSmdnyWaADmRQiSFTxFAwgJ-2F-2Fft6F7CDH9eoZQ8SCySg2w-2BL5cw1I8ZjbzXSAUH-2B47L-2FtbeXwhkUitDnMcLYXv5F8nCHovjErn-2F-2BWC3Pu7VDXUW8DAAvxnSx6BuCLY7W-2By-2B1E&amp;source=gmail&amp;ust=1672427197812000&amp;usg=AOvVaw09iG6jLUSzHd-busRXJjsn">
                                  Buy Now
                              </a>
      </td>
      </tr>
      </tbody>
      </table>
      </td>
      </tr>
      <tr>
      </tr>
      </tbody>
      </table>
      </td>
      <td class="m_3734019650888846141rowContainer m_3734019650888846141kmFloatLeft m_3734019650888846141kmMobileStretch" style="padding-top:9px;padding-right:9px;padding-left:9px;padding-bottom:9px" width="50.0%">
      <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%">
      <tbody align="center">
      <tr>
      <td align="center" valign="top">
      <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
      <tbody>
      <tr>
      <td align="center">
      <a href="https://trk.klclick.com/ls/click?upn=uEJq3bjyTJkuYJR3INXIlYrwrSTvzHEHtdWsDsdbFY5Jfrhtq4DlixLdx7eDTLezBe5QTk-2Bhayt5Xw4Z7HOMofxwRPOYNizHp8VkPohTueCh919gMJ5DBPokEJdgCCC21NmVPY5kbMlSynIh99jpVHcLZMhtnZCXL0uqNXMZFGdN2DLizsql-2BA9Fvjn0pvCq8uWt9otvJFRBIUhh90Er2I4R-2B-2F4SOtqhdVReIo-2FKY7ZNwoHcQXlbKhfDa7Rvww1PDkaDWsyhfWmXLkGJj0b7ndbXxk4Z2n1dxmv-2FbLZblQU-3D1Uws_RwkSJRtVnVtCbVHovQZvrVnmAGWb8CnlQxqWIxU7wzMtD-2FWKJ297-2BwH-2BWb70WmVm-2FHyZUj3qSxrSmkkGeQ99O0YSj29Niy5h-2BVopC8PZTYVN1n0lz-2FHj2LlQQnyIX1Q7iBbG8h8TFmW7JFeINO7-2Bcd1Aibbq-2FnoXKqY-2FbgPTzcUBv3n54zNJ5VjItjzJJSNUD9XsOWIonkgbYAvChhH29k5TlCuW1oovgyXPaDLCpG0MeG97kjScZ27bTeGFcvV8lTPwyrv1RVrrwDaAT2iTI49iJ0e-2B2nCSh61aAHfaEMwebcFgo-2F5VvZPYFCK-2BXZ9koHonbwq5rNCp2UTqtz75yZAW0HJiaV9oRZebCQZLBE-2FHVW1NYmpAy1zk3MtNrVOnY-2FY0-2B9jIqJfTC261KvSKIERRp3eaTSjMAqKBSVEMwa1ydEIvko-2BdD3Qj6TJ4iZwP" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://trk.klclick.com/ls/click?upn%3DuEJq3bjyTJkuYJR3INXIlYrwrSTvzHEHtdWsDsdbFY5Jfrhtq4DlixLdx7eDTLezBe5QTk-2Bhayt5Xw4Z7HOMofxwRPOYNizHp8VkPohTueCh919gMJ5DBPokEJdgCCC21NmVPY5kbMlSynIh99jpVHcLZMhtnZCXL0uqNXMZFGdN2DLizsql-2BA9Fvjn0pvCq8uWt9otvJFRBIUhh90Er2I4R-2B-2F4SOtqhdVReIo-2FKY7ZNwoHcQXlbKhfDa7Rvww1PDkaDWsyhfWmXLkGJj0b7ndbXxk4Z2n1dxmv-2FbLZblQU-3D1Uws_RwkSJRtVnVtCbVHovQZvrVnmAGWb8CnlQxqWIxU7wzMtD-2FWKJ297-2BwH-2BWb70WmVm-2FHyZUj3qSxrSmkkGeQ99O0YSj29Niy5h-2BVopC8PZTYVN1n0lz-2FHj2LlQQnyIX1Q7iBbG8h8TFmW7JFeINO7-2Bcd1Aibbq-2FnoXKqY-2FbgPTzcUBv3n54zNJ5VjItjzJJSNUD9XsOWIonkgbYAvChhH29k5TlCuW1oovgyXPaDLCpG0MeG97kjScZ27bTeGFcvV8lTPwyrv1RVrrwDaAT2iTI49iJ0e-2B2nCSh61aAHfaEMwebcFgo-2F5VvZPYFCK-2BXZ9koHonbwq5rNCp2UTqtz75yZAW0HJiaV9oRZebCQZLBE-2FHVW1NYmpAy1zk3MtNrVOnY-2FY0-2B9jIqJfTC261KvSKIERRp3eaTSjMAqKBSVEMwa1ydEIvko-2BdD3Qj6TJ4iZwP&amp;source=gmail&amp;ust=1672427197813000&amp;usg=AOvVaw0mMXzCONkaofBbznmxKRFh">
      <img alt="Image of Welcome to Hell - T-Shirt" src="https://ci4.googleusercontent.com/proxy/Te_P8KM6N6zte7VjRiFFjR9GxNGJoS3oa0t4qAUXIuGHssybszLGvBy6UFeQjeZAW0yReJHE5JiCbSd6aNk0w6uUfm9V0CEB24thZCeqob1l9VQcbc7vLnO7p40FW3G1WERp7GrDsRKjyIXC=s0-d-e1-ft#https://cdn.shopify.com/s/files/1/0016/7080/7650/products/welcoemtohellb.jpg?v=1669306756" style="display:block;max-width:100%;max-height:350px;width:auto" width="176" class="CToWUd" data-bit="iit">
      </a>
      </td>
      </tr>
      </tbody>
      </table>
      </td>
      </tr>
      <tr>
      <td valign="top">
      <table border="0" cellpadding="0" cellspacing="0" width="100%">
      <tbody>
      <tr>
      <td align="center" class="m_3734019650888846141kmTextBlockInner m_3734019650888846141kmTextContent" style="font-weight:bold;text-align:center;padding-top:5px;padding-bottom:0px">
      <p style="padding-bottom:0">Welcome to Hell - T-Shirt</p>
      </td>
      </tr>
      <tr>
      <td align="center" class="m_3734019650888846141kmButtonBlockInner" style="text-align:center">
      <a style="display:inline-block;text-decoration:none;background-color:#000;font-size:16px;font-family:&quot;Helvetica Neue&quot;,Arial;color:#ffffff;font-weight:bold;border-radius:0px;padding-top:10px;padding-bottom:10px;padding-left:10px;padding-right:10px" href="https://trk.klclick.com/ls/click?upn=uEJq3bjyTJkuYJR3INXIlYrwrSTvzHEHtdWsDsdbFY5Jfrhtq4DlixLdx7eDTLezBe5QTk-2Bhayt5Xw4Z7HOMofxwRPOYNizHp8VkPohTueCh919gMJ5DBPokEJdgCCC21NmVPY5kbMlSynIh99jpVHcLZMhtnZCXL0uqNXMZFGdN2DLizsql-2BA9Fvjn0pvCq8uWt9otvJFRBIUhh90Er2I4R-2B-2F4SOtqhdVReIo-2FKY7ZNwoHcQXlbKhfDa7Rvww1PDkaDWsyhfWmXLkGJj0b7ndbXxk4Z2n1dxmv-2FbLZblQU-3DMO_N_RwkSJRtVnVtCbVHovQZvrVnmAGWb8CnlQxqWIxU7wzMtD-2FWKJ297-2BwH-2BWb70WmVm-2FHyZUj3qSxrSmkkGeQ99O0YSj29Niy5h-2BVopC8PZTYVN1n0lz-2FHj2LlQQnyIX1Q7iBbG8h8TFmW7JFeINO7-2Bcd1Aibbq-2FnoXKqY-2FbgPTzcUBv3n54zNJ5VjItjzJJSNUD9XsOWIonkgbYAvChhH29k5TlCuW1oovgyXPaDLCpG0MeG97kjScZ27bTeGFcvV85ATt4lTX2mzAChxqV5I1zqZxRTLjqqnqNBm8pN55ixx0oNSZrdfo4VzDke6QkzU3Aimxhe7EHa2-2F3Lm3Rn5JbuimQTunzrmFzPDn9cDURx6-2BHpb81zztH3TVbgbPZtxTFXcIKYp-2BiShHdmEmsqFMa5Cqv02uxDYFWGBdcB60X7HJDaphM-2F8F7EGIj8OetEeC" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://trk.klclick.com/ls/click?upn%3DuEJq3bjyTJkuYJR3INXIlYrwrSTvzHEHtdWsDsdbFY5Jfrhtq4DlixLdx7eDTLezBe5QTk-2Bhayt5Xw4Z7HOMofxwRPOYNizHp8VkPohTueCh919gMJ5DBPokEJdgCCC21NmVPY5kbMlSynIh99jpVHcLZMhtnZCXL0uqNXMZFGdN2DLizsql-2BA9Fvjn0pvCq8uWt9otvJFRBIUhh90Er2I4R-2B-2F4SOtqhdVReIo-2FKY7ZNwoHcQXlbKhfDa7Rvww1PDkaDWsyhfWmXLkGJj0b7ndbXxk4Z2n1dxmv-2FbLZblQU-3DMO_N_RwkSJRtVnVtCbVHovQZvrVnmAGWb8CnlQxqWIxU7wzMtD-2FWKJ297-2BwH-2BWb70WmVm-2FHyZUj3qSxrSmkkGeQ99O0YSj29Niy5h-2BVopC8PZTYVN1n0lz-2FHj2LlQQnyIX1Q7iBbG8h8TFmW7JFeINO7-2Bcd1Aibbq-2FnoXKqY-2FbgPTzcUBv3n54zNJ5VjItjzJJSNUD9XsOWIonkgbYAvChhH29k5TlCuW1oovgyXPaDLCpG0MeG97kjScZ27bTeGFcvV85ATt4lTX2mzAChxqV5I1zqZxRTLjqqnqNBm8pN55ixx0oNSZrdfo4VzDke6QkzU3Aimxhe7EHa2-2F3Lm3Rn5JbuimQTunzrmFzPDn9cDURx6-2BHpb81zztH3TVbgbPZtxTFXcIKYp-2BiShHdmEmsqFMa5Cqv02uxDYFWGBdcB60X7HJDaphM-2F8F7EGIj8OetEeC&amp;source=gmail&amp;ust=1672427197813000&amp;usg=AOvVaw29xbkbBffcrIMn2F0kefxs">
                                  Buy Now
                              </a>
      </td>
      </tr>
      </tbody>
      </table>
      </td>
      </tr>
      <tr>
      </tr>
      </tbody>
      </table>
      </td>
      </tr>
      <tr>
      <td class="m_3734019650888846141rowContainer m_3734019650888846141kmFloatLeft m_3734019650888846141kmMobileStretch" style="padding-top:9px;padding-right:9px;padding-left:9px;padding-bottom:9px" width="50.0%">
      <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%">
      <tbody align="center">
      <tr>
      <td align="center" valign="top">
      <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
      <tbody>
      <tr>
      <td align="center">
      <a href="https://trk.klclick.com/ls/click?upn=uEJq3bjyTJkuYJR3INXIlYrwrSTvzHEHtdWsDsdbFY5Jfrhtq4DlixLdx7eDTLezOqBxhi9RHwGG-2F9PfudoCBILJKg-2BcV2j8-2FBJtuitGcx60-2FC6KutAKrJQH3noQSt-2FV89zQpxnOXQnSaMfJk6Pm55WqNm62FtbuyKl74MQwGmAm6iskE-2BNO-2BMhAr128MU7-2F5wuBrbIQjxqn11FAfD1-2Fsa4E5PL1yuyTq7rg6lWTO7rL5XJYERKLARY1zwtnFiLhobLWDl-2FcIfTfxYTKwj9cCzdlOPHOX5j17fX6VWz65aM-3DwSXn_RwkSJRtVnVtCbVHovQZvrVnmAGWb8CnlQxqWIxU7wzMtD-2FWKJ297-2BwH-2BWb70WmVm-2FHyZUj3qSxrSmkkGeQ99O0YSj29Niy5h-2BVopC8PZTYVN1n0lz-2FHj2LlQQnyIX1Q7iBbG8h8TFmW7JFeINO7-2Bcd1Aibbq-2FnoXKqY-2FbgPTzcUBv3n54zNJ5VjItjzJJSNUD9XsOWIonkgbYAvChhH29k5TlCuW1oovgyXPaDLCpG0MeG97kjScZ27bTeGFcvV8KRzYmAxNqXIv3uZqLFRRBV-2BuAaVzRBueUuMtdJr7yghMFPiA9Ly1ph0rWR43EEsEss5uiKxCpQfllDZD6cviTr-2FETzeYHvDps3y3bQVt9-2BrzCBLucUqYNzT3AVXjpJEyOvH-2FgFRO0b7ojNHOQZTAQUVLsbI-2BV-2BaBHGFf5kSYoTt5KyyVmwM5VeixGHwYYDDs" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://trk.klclick.com/ls/click?upn%3DuEJq3bjyTJkuYJR3INXIlYrwrSTvzHEHtdWsDsdbFY5Jfrhtq4DlixLdx7eDTLezOqBxhi9RHwGG-2F9PfudoCBILJKg-2BcV2j8-2FBJtuitGcx60-2FC6KutAKrJQH3noQSt-2FV89zQpxnOXQnSaMfJk6Pm55WqNm62FtbuyKl74MQwGmAm6iskE-2BNO-2BMhAr128MU7-2F5wuBrbIQjxqn11FAfD1-2Fsa4E5PL1yuyTq7rg6lWTO7rL5XJYERKLARY1zwtnFiLhobLWDl-2FcIfTfxYTKwj9cCzdlOPHOX5j17fX6VWz65aM-3DwSXn_RwkSJRtVnVtCbVHovQZvrVnmAGWb8CnlQxqWIxU7wzMtD-2FWKJ297-2BwH-2BWb70WmVm-2FHyZUj3qSxrSmkkGeQ99O0YSj29Niy5h-2BVopC8PZTYVN1n0lz-2FHj2LlQQnyIX1Q7iBbG8h8TFmW7JFeINO7-2Bcd1Aibbq-2FnoXKqY-2FbgPTzcUBv3n54zNJ5VjItjzJJSNUD9XsOWIonkgbYAvChhH29k5TlCuW1oovgyXPaDLCpG0MeG97kjScZ27bTeGFcvV8KRzYmAxNqXIv3uZqLFRRBV-2BuAaVzRBueUuMtdJr7yghMFPiA9Ly1ph0rWR43EEsEss5uiKxCpQfllDZD6cviTr-2FETzeYHvDps3y3bQVt9-2BrzCBLucUqYNzT3AVXjpJEyOvH-2FgFRO0b7ojNHOQZTAQUVLsbI-2BV-2BaBHGFf5kSYoTt5KyyVmwM5VeixGHwYYDDs&amp;source=gmail&amp;ust=1672427197813000&amp;usg=AOvVaw3ItOeUVPr5UKBsrF1UyeXO">
      <img alt="Image of Evangelion (PREY) - Sweater" src="https://ci3.googleusercontent.com/proxy/C-g4XcMf66rUIJYqDOYtYuV7v35AIE58NdzydY8N3jqunb2FqVohHvkaU0ac-xLdzS4QdBXWEeT2OQIf98-mDWFWhXOkPKz6999-MAWBP4U459Sxj5jAmGqTgeLETJVZjMY4rdMr4RSIg7gu05MDgOM1CDh-uqInWw49_Rg_W-YI7-gLjXzJA50DM-q9eGU8hg=s0-d-e1-ft#https://cdn.shopify.com/s/files/1/0016/7080/7650/products/unisex-premium-sweatshirt-white-front-631db5cc00f38.png?v=1663005179" style="display:block;max-width:100%;max-height:350px;width:auto" width="176" class="CToWUd" data-bit="iit">
      </a>
      </td>
      </tr>
      </tbody>
      </table>
      </td>
      </tr>
      <tr>
      <td valign="top">
      <table border="0" cellpadding="0" cellspacing="0" width="100%">
      <tbody>
      <tr>
      <td align="center" class="m_3734019650888846141kmTextBlockInner m_3734019650888846141kmTextContent" style="font-weight:bold;text-align:center;padding-top:5px;padding-bottom:0px">
      <p style="padding-bottom:0">Evangelion (PREY) - Sweater</p>
      </td>
      </tr>
      <tr>
      <td align="center" class="m_3734019650888846141kmButtonBlockInner" style="text-align:center">
      <a style="display:inline-block;text-decoration:none;background-color:#000;font-size:16px;font-family:&quot;Helvetica Neue&quot;,Arial;color:#ffffff;font-weight:bold;border-radius:0px;padding-top:10px;padding-bottom:10px;padding-left:10px;padding-right:10px" href="https://trk.klclick.com/ls/click?upn=uEJq3bjyTJkuYJR3INXIlYrwrSTvzHEHtdWsDsdbFY5Jfrhtq4DlixLdx7eDTLezOqBxhi9RHwGG-2F9PfudoCBILJKg-2BcV2j8-2FBJtuitGcx60-2FC6KutAKrJQH3noQSt-2FV89zQpxnOXQnSaMfJk6Pm55WqNm62FtbuyKl74MQwGmAm6iskE-2BNO-2BMhAr128MU7-2F5wuBrbIQjxqn11FAfD1-2Fsa4E5PL1yuyTq7rg6lWTO7rL5XJYERKLARY1zwtnFiLhobLWDl-2FcIfTfxYTKwj9cCzdlOPHOX5j17fX6VWz65aM-3DohiW_RwkSJRtVnVtCbVHovQZvrVnmAGWb8CnlQxqWIxU7wzMtD-2FWKJ297-2BwH-2BWb70WmVm-2FHyZUj3qSxrSmkkGeQ99O0YSj29Niy5h-2BVopC8PZTYVN1n0lz-2FHj2LlQQnyIX1Q7iBbG8h8TFmW7JFeINO7-2Bcd1Aibbq-2FnoXKqY-2FbgPTzcUBv3n54zNJ5VjItjzJJSNUD9XsOWIonkgbYAvChhH29k5TlCuW1oovgyXPaDLCpG0MeG97kjScZ27bTeGFcvV8KI6yk-2Bg02iMMGtZSrxUAHAegAjh1-2B7Lkv7UARBqxmgbPCPLgXHXghFHt-2BehUgTvsEHu1PXN7l6tYjkVPHSw1GTMv5gdi5998x9Yt8TRinhuQ3qSABrA7TWP8xvjmkRguSrje7potAvlykZlFXsNe9K0PMOgUNUXY3SwHaK4ik2jUFLw49vbxzh1T3VCakM4c" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://trk.klclick.com/ls/click?upn%3DuEJq3bjyTJkuYJR3INXIlYrwrSTvzHEHtdWsDsdbFY5Jfrhtq4DlixLdx7eDTLezOqBxhi9RHwGG-2F9PfudoCBILJKg-2BcV2j8-2FBJtuitGcx60-2FC6KutAKrJQH3noQSt-2FV89zQpxnOXQnSaMfJk6Pm55WqNm62FtbuyKl74MQwGmAm6iskE-2BNO-2BMhAr128MU7-2F5wuBrbIQjxqn11FAfD1-2Fsa4E5PL1yuyTq7rg6lWTO7rL5XJYERKLARY1zwtnFiLhobLWDl-2FcIfTfxYTKwj9cCzdlOPHOX5j17fX6VWz65aM-3DohiW_RwkSJRtVnVtCbVHovQZvrVnmAGWb8CnlQxqWIxU7wzMtD-2FWKJ297-2BwH-2BWb70WmVm-2FHyZUj3qSxrSmkkGeQ99O0YSj29Niy5h-2BVopC8PZTYVN1n0lz-2FHj2LlQQnyIX1Q7iBbG8h8TFmW7JFeINO7-2Bcd1Aibbq-2FnoXKqY-2FbgPTzcUBv3n54zNJ5VjItjzJJSNUD9XsOWIonkgbYAvChhH29k5TlCuW1oovgyXPaDLCpG0MeG97kjScZ27bTeGFcvV8KI6yk-2Bg02iMMGtZSrxUAHAegAjh1-2B7Lkv7UARBqxmgbPCPLgXHXghFHt-2BehUgTvsEHu1PXN7l6tYjkVPHSw1GTMv5gdi5998x9Yt8TRinhuQ3qSABrA7TWP8xvjmkRguSrje7potAvlykZlFXsNe9K0PMOgUNUXY3SwHaK4ik2jUFLw49vbxzh1T3VCakM4c&amp;source=gmail&amp;ust=1672427197813000&amp;usg=AOvVaw1f47YDSrNh0vLxZEYsDAEt">
                                  Buy Now
                              </a>
      </td>
      </tr>
      </tbody>
      </table>
      </td>
      </tr>
      <tr>
      </tr>
      </tbody>
      </table>
      </td>
      <td class="m_3734019650888846141rowContainer m_3734019650888846141kmFloatLeft m_3734019650888846141kmMobileStretch" style="padding-top:9px;padding-right:9px;padding-left:9px;padding-bottom:9px" width="50.0%">
      <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%">
      <tbody align="center">
      <tr>
      <td align="center" valign="top">
      <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
      <tbody>
      <tr>
      <td align="center">
      <a href="https://trk.klclick.com/ls/click?upn=uEJq3bjyTJkuYJR3INXIlYrwrSTvzHEHtdWsDsdbFY5Jfrhtq4DlixLdx7eDTLezrsrQ-2B-2BGkKTd5c1P9ZGMoTXdl0ebLRVedLu-2FgZZiBcYOVwqz6qYVPRpeHqdcCPbgPZASF4vwCHMXaQ8UCstLIyA9VNJAquZeJIydPNXN2KYOVyme5vmnNwF-2BEZ5V5rqV7JGVTTf9vhh1snBtSG5ehoDw4g-2Baz-2BzI6ugaxFaHfmKMpnBQaRPdSE9gRpn0kkoqIBwdpTmt5jHRGJYosCKPCavz4kGHPsgFsNRa14IBDNjDTrTPkeQegC3bnfu2PujCcq9oy_RwkSJRtVnVtCbVHovQZvrVnmAGWb8CnlQxqWIxU7wzMtD-2FWKJ297-2BwH-2BWb70WmVm-2FHyZUj3qSxrSmkkGeQ99O0YSj29Niy5h-2BVopC8PZTYVN1n0lz-2FHj2LlQQnyIX1Q7iBbG8h8TFmW7JFeINO7-2Bcd1Aibbq-2FnoXKqY-2FbgPTzcUBv3n54zNJ5VjItjzJJSNUD9XsOWIonkgbYAvChhH29k5TlCuW1oovgyXPaDLCpG0MeG97kjScZ27bTeGFcvV8e-2BAbeXCeupsRjUW0iPCqKTgkddn3QmN3Yqa6dF-2F-2BadkELiaUzWPLX3HUb8JHU0Z0QlJJS7t5TL9SQrqXL-2Fc6bmiW8Sh5DK5jqwFHrpgymvW7m9sWHgaEETeiM7hCMgy6Ze4kl9rwTA2kvnaBehAj9liweq2le7PA8U1wTgfSRXQdc3uMI1cIGSff378VtioD" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://trk.klclick.com/ls/click?upn%3DuEJq3bjyTJkuYJR3INXIlYrwrSTvzHEHtdWsDsdbFY5Jfrhtq4DlixLdx7eDTLezrsrQ-2B-2BGkKTd5c1P9ZGMoTXdl0ebLRVedLu-2FgZZiBcYOVwqz6qYVPRpeHqdcCPbgPZASF4vwCHMXaQ8UCstLIyA9VNJAquZeJIydPNXN2KYOVyme5vmnNwF-2BEZ5V5rqV7JGVTTf9vhh1snBtSG5ehoDw4g-2Baz-2BzI6ugaxFaHfmKMpnBQaRPdSE9gRpn0kkoqIBwdpTmt5jHRGJYosCKPCavz4kGHPsgFsNRa14IBDNjDTrTPkeQegC3bnfu2PujCcq9oy_RwkSJRtVnVtCbVHovQZvrVnmAGWb8CnlQxqWIxU7wzMtD-2FWKJ297-2BwH-2BWb70WmVm-2FHyZUj3qSxrSmkkGeQ99O0YSj29Niy5h-2BVopC8PZTYVN1n0lz-2FHj2LlQQnyIX1Q7iBbG8h8TFmW7JFeINO7-2Bcd1Aibbq-2FnoXKqY-2FbgPTzcUBv3n54zNJ5VjItjzJJSNUD9XsOWIonkgbYAvChhH29k5TlCuW1oovgyXPaDLCpG0MeG97kjScZ27bTeGFcvV8e-2BAbeXCeupsRjUW0iPCqKTgkddn3QmN3Yqa6dF-2F-2BadkELiaUzWPLX3HUb8JHU0Z0QlJJS7t5TL9SQrqXL-2Fc6bmiW8Sh5DK5jqwFHrpgymvW7m9sWHgaEETeiM7hCMgy6Ze4kl9rwTA2kvnaBehAj9liweq2le7PA8U1wTgfSRXQdc3uMI1cIGSff378VtioD&amp;source=gmail&amp;ust=1672427197813000&amp;usg=AOvVaw2Tem1qsDz24WhmunpkyoNr">
      <img alt="Image of Death (ROSE) - T-Shirt" src="https://ci3.googleusercontent.com/proxy/JK8Ybz79bN59-ORSgxt_ovrUcAecRs0YMwUaEee9YMLhHVAhTx3tZ-OTI0kodWqSysHZ0ThLPgF3XEu-CXNHyB_Ihaks1D5I8UqauXaGX8mJeRVqIktu6b9QKfer9K8=s0-d-e1-ft#https://cdn.shopify.com/s/files/1/0016/7080/7650/products/8.jpg?v=1662984071" style="display:block;max-width:100%;max-height:350px;width:auto" width="176" class="CToWUd" data-bit="iit">
      </a>
      </td>
      </tr>
      </tbody>
      </table>
      </td>
      </tr>
      <tr>
      <td valign="top">
      <table border="0" cellpadding="0" cellspacing="0" width="100%">
      <tbody>
      <tr>
      <td align="center" class="m_3734019650888846141kmTextBlockInner m_3734019650888846141kmTextContent" style="font-weight:bold;text-align:center;padding-top:5px;padding-bottom:0px">
      <p style="padding-bottom:0">Death (ROSE) - T-Shirt</p>
      </td>
      </tr>
      <tr>
      <td align="center" class="m_3734019650888846141kmButtonBlockInner" style="text-align:center">
      <a style="display:inline-block;text-decoration:none;background-color:#000;font-size:16px;font-family:&quot;Helvetica Neue&quot;,Arial;color:#ffffff;font-weight:bold;border-radius:0px;padding-top:10px;padding-bottom:10px;padding-left:10px;padding-right:10px" href="https://trk.klclick.com/ls/click?upn=uEJq3bjyTJkuYJR3INXIlYrwrSTvzHEHtdWsDsdbFY5Jfrhtq4DlixLdx7eDTLezrsrQ-2B-2BGkKTd5c1P9ZGMoTXdl0ebLRVedLu-2FgZZiBcYOVwqz6qYVPRpeHqdcCPbgPZASF4vwCHMXaQ8UCstLIyA9VNJAquZeJIydPNXN2KYOVyme5vmnNwF-2BEZ5V5rqV7JGVTTf9vhh1snBtSG5ehoDw4g-2Baz-2BzI6ugaxFaHfmKMpnBQaRPdSE9gRpn0kkoqIBwdpTmt5jHRGJYosCKPCavz4kGHPsgFsNRa14IBDNjDTrTPkeQegC3bnfu2PujCcEkbx_RwkSJRtVnVtCbVHovQZvrVnmAGWb8CnlQxqWIxU7wzMtD-2FWKJ297-2BwH-2BWb70WmVm-2FHyZUj3qSxrSmkkGeQ99O0YSj29Niy5h-2BVopC8PZTYVN1n0lz-2FHj2LlQQnyIX1Q7iBbG8h8TFmW7JFeINO7-2Bcd1Aibbq-2FnoXKqY-2FbgPTzcUBv3n54zNJ5VjItjzJJSNUD9XsOWIonkgbYAvChhH29k5TlCuW1oovgyXPaDLCpG0MeG97kjScZ27bTeGFcvV8g7hNHkQ3UA7yTVMMGmeElxLJymfSVO3E-2BHeIXWbxcS60rvwdxCfFxuGIlNDsbZyRAqgMRl0Jz-2BWgjyCKMsc5NHfSZFr-2BZmaer6iApKLFdzMr7vxbRl3x2pWdleT5RTxe45O8INlFulMIs9CWrmenmToDzLAXvaxc-2FdyA-2B-2FU3xsIYmonVppLqXoL1WgJ5Fz4F" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://trk.klclick.com/ls/click?upn%3DuEJq3bjyTJkuYJR3INXIlYrwrSTvzHEHtdWsDsdbFY5Jfrhtq4DlixLdx7eDTLezrsrQ-2B-2BGkKTd5c1P9ZGMoTXdl0ebLRVedLu-2FgZZiBcYOVwqz6qYVPRpeHqdcCPbgPZASF4vwCHMXaQ8UCstLIyA9VNJAquZeJIydPNXN2KYOVyme5vmnNwF-2BEZ5V5rqV7JGVTTf9vhh1snBtSG5ehoDw4g-2Baz-2BzI6ugaxFaHfmKMpnBQaRPdSE9gRpn0kkoqIBwdpTmt5jHRGJYosCKPCavz4kGHPsgFsNRa14IBDNjDTrTPkeQegC3bnfu2PujCcEkbx_RwkSJRtVnVtCbVHovQZvrVnmAGWb8CnlQxqWIxU7wzMtD-2FWKJ297-2BwH-2BWb70WmVm-2FHyZUj3qSxrSmkkGeQ99O0YSj29Niy5h-2BVopC8PZTYVN1n0lz-2FHj2LlQQnyIX1Q7iBbG8h8TFmW7JFeINO7-2Bcd1Aibbq-2FnoXKqY-2FbgPTzcUBv3n54zNJ5VjItjzJJSNUD9XsOWIonkgbYAvChhH29k5TlCuW1oovgyXPaDLCpG0MeG97kjScZ27bTeGFcvV8g7hNHkQ3UA7yTVMMGmeElxLJymfSVO3E-2BHeIXWbxcS60rvwdxCfFxuGIlNDsbZyRAqgMRl0Jz-2BWgjyCKMsc5NHfSZFr-2BZmaer6iApKLFdzMr7vxbRl3x2pWdleT5RTxe45O8INlFulMIs9CWrmenmToDzLAXvaxc-2FdyA-2B-2FU3xsIYmonVppLqXoL1WgJ5Fz4F&amp;source=gmail&amp;ust=1672427197813000&amp;usg=AOvVaw2vcABGWoQo-YEtbGBvHG4w">
                                  Buy Now
                              </a>
      </td>
      </tr>
      </tbody>
      </table>
      </td>
      </tr>
      <tr>
      </tr>
      </tbody>
      </table>
      </td>
      </tr>
      <tr>
      </tr>
      </tbody>
      </table>
      </td>
      </tr>
      </tbody>
      </table>
      <table border="0" cellpadding="0" cellspacing="0" style="width:100%!important" width="100%">
      <tbody>
      <tr>
      <td align="center" class="m_3734019650888846141kmButtonBlockInner" style="padding-top:9px;padding-bottom:40px;padding-left:0px;padding-right:0px;background-color:#fff" valign="top">
      <table border="0" cellpadding="0" cellspacing="0" class="m_3734019650888846141kmButtonContentContainer" style="background-color:#f80012;border-radius:0px" width="">
      <tbody>
      <tr>
      
      <td align="center" class="m_3734019650888846141kmButtonContent" style="font-size:22px;color:#ffffff;letter-spacing:0px;font-weight:normal;font-family:&quot;Helvetica Neue&quot;,Arial" valign="middle">
      <a class="m_3734019650888846141kmButton" style="text-decoration:none;display:inline-block;padding-top:15px;padding-bottom:15px;font-size:22px;color:#ffffff;letter-spacing:0px;font-weight:normal;padding-left:15px;padding-right:15px;font-family:&quot;Helvetica Neue&quot;,Arial" title="" href="https://trk.klclick.com/ls/click?upn=uEJq3bjyTJkuYJR3INXIlaR7UH-2BtWEQm5BnymlpMMkvQUzP-2F7WpzYBirxCkK-2B70LiqHtC0v-2BeFCjQPe2enWGpGhT20iA4082c7KoOoXec2TmkCssltf-2F3y9C7MI5JS64FnJizab5ewRaOTJ2GLH0q8-2BErSUaUV-2B7ZMYRLaqrjHBeMxgcx6Ky4WdHpyBsaFYCFTyJpmOfBo2K-2B5T2zlezunVEom-2Bvb4g9EshUyZRmgxH9iFDmD7y-2FMguDOcqpPQXre6QR-2B2fyfwlyJ1aqgPb4AEjbJTjjxmB9eXX-2FZedQ252ypenVdBq-2FZitwYBxE89LDt9GOdJT7JwpBZWHuSajMBbehD-2BSCSNWdtc1f5xIyFaQF7PkLTGiDWV63WhPwLOO2DuhX_RwkSJRtVnVtCbVHovQZvrVnmAGWb8CnlQxqWIxU7wzMtD-2FWKJ297-2BwH-2BWb70WmVm-2FHyZUj3qSxrSmkkGeQ99O0YSj29Niy5h-2BVopC8PZTYVN1n0lz-2FHj2LlQQnyIX1Q7iBbG8h8TFmW7JFeINO7-2Bcd1Aibbq-2FnoXKqY-2FbgPTzcUBv3n54zNJ5VjItjzJJSNUD9XsOWIonkgbYAvChhH29k5TlCuW1oovgyXPaDLCpG0MeG97kjScZ27bTeGFcvV80m6u-2BzAQk-2B-2BjPHPot031lMAL5pmUu7GjT-2FCLEzfp9uwAeFNja6IiA0CmdTO9-2BrAUCU3-2Fcqo-2Bez4YS-2FfyM1WJesA0YBLG7NsLIx-2BUGDyBGpacVWJEcGsSSR-2FidrXWMBqKWFI7g-2Fo1QlbA3Z0sLBKbCGcD5TIPcnYn8OWYHYdKzrSXhc1sJzHTjKrQl6B4e-2B0p" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://trk.klclick.com/ls/click?upn%3DuEJq3bjyTJkuYJR3INXIlaR7UH-2BtWEQm5BnymlpMMkvQUzP-2F7WpzYBirxCkK-2B70LiqHtC0v-2BeFCjQPe2enWGpGhT20iA4082c7KoOoXec2TmkCssltf-2F3y9C7MI5JS64FnJizab5ewRaOTJ2GLH0q8-2BErSUaUV-2B7ZMYRLaqrjHBeMxgcx6Ky4WdHpyBsaFYCFTyJpmOfBo2K-2B5T2zlezunVEom-2Bvb4g9EshUyZRmgxH9iFDmD7y-2FMguDOcqpPQXre6QR-2B2fyfwlyJ1aqgPb4AEjbJTjjxmB9eXX-2FZedQ252ypenVdBq-2FZitwYBxE89LDt9GOdJT7JwpBZWHuSajMBbehD-2BSCSNWdtc1f5xIyFaQF7PkLTGiDWV63WhPwLOO2DuhX_RwkSJRtVnVtCbVHovQZvrVnmAGWb8CnlQxqWIxU7wzMtD-2FWKJ297-2BwH-2BWb70WmVm-2FHyZUj3qSxrSmkkGeQ99O0YSj29Niy5h-2BVopC8PZTYVN1n0lz-2FHj2LlQQnyIX1Q7iBbG8h8TFmW7JFeINO7-2Bcd1Aibbq-2FnoXKqY-2FbgPTzcUBv3n54zNJ5VjItjzJJSNUD9XsOWIonkgbYAvChhH29k5TlCuW1oovgyXPaDLCpG0MeG97kjScZ27bTeGFcvV80m6u-2BzAQk-2B-2BjPHPot031lMAL5pmUu7GjT-2FCLEzfp9uwAeFNja6IiA0CmdTO9-2BrAUCU3-2Fcqo-2Bez4YS-2FfyM1WJesA0YBLG7NsLIx-2BUGDyBGpacVWJEcGsSSR-2FidrXWMBqKWFI7g-2Fo1QlbA3Z0sLBKbCGcD5TIPcnYn8OWYHYdKzrSXhc1sJzHTjKrQl6B4e-2B0p&amp;source=gmail&amp;ust=1672427197813000&amp;usg=AOvVaw3ob6zaOdj7d20ghbbHW_Wy">SHOP BESTSELLERS</a>
      </td>
      
      
      </tr>
      </tbody>
      </table>
      </td>
      </tr>
      </tbody>
      </table>
      <table border="0" cellpadding="0" cellspacing="0" style="min-width:100%" width="100%">
      <tbody>
      <tr>
      <td style="padding:0px;padding-left:0px;padding-right:0px;padding-bottom:0px" valign="top">
      <table align="left" border="0" cellpadding="0" cellspacing="0" style="min-width:100%" width="100%">
      <tbody>
      <tr>
      <td class="m_3734019650888846141kmImageContent" style="padding:0" valign="top">
      <a href="https://trk.klclick.com/ls/click?upn=uEJq3bjyTJkuYJR3INXIlVFoAtdgfgkwt6N73wpLr-2BKJ7ESj4dNMas6qvFg4E4eLMWx8EsGUP-2BKuQX4gqz0d2gm2JIV-2FQ6cr6OB-2FAgJ9skbqJgZufdQU9OM9sFI7RmG5WbehzeD36LxXE-2FAkYB72wLl2zZBAHcii-2BMxEsE8B8ywGT5hL8IThV4rYtzLoSccUWpJPD-2Flgklp9n7vJ9lc3bOTSdDnOZrAKReInfLz1U42l-2BXxNf-2F5Z7zcukS1IeCQU8JudaSonGHOSl2iu8ktyNTgROQ5iWZnsZ6FgD-2FRogzE-3D9knR_RwkSJRtVnVtCbVHovQZvrVnmAGWb8CnlQxqWIxU7wzMtD-2FWKJ297-2BwH-2BWb70WmVm-2FHyZUj3qSxrSmkkGeQ99O0YSj29Niy5h-2BVopC8PZTYVN1n0lz-2FHj2LlQQnyIX1Q7iBbG8h8TFmW7JFeINO7-2Bcd1Aibbq-2FnoXKqY-2FbgPTzcUBv3n54zNJ5VjItjzJJSNUD9XsOWIonkgbYAvChhH29k5TlCuW1oovgyXPaDLCpG0MeG97kjScZ27bTeGFcvV8f4Saa-2B71GhTU92uSpM39oVoubAnPHbkOli2bwLBqgz7QNeqWSd9ztis0jn-2Fu2Vh93ZAj1gXWPQjmRPS8JDpsf-2B0sKOTBVYfFQ9Xqzp-2FyVbxWBpHvZcrS26YKBVg1mccDj-2BBBcC-2FBl-2BbOzVUfdswsOvOhTOf2rdN5tADE6Aq73GU40hjGyKhJZKLDrDEj9HxK" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://trk.klclick.com/ls/click?upn%3DuEJq3bjyTJkuYJR3INXIlVFoAtdgfgkwt6N73wpLr-2BKJ7ESj4dNMas6qvFg4E4eLMWx8EsGUP-2BKuQX4gqz0d2gm2JIV-2FQ6cr6OB-2FAgJ9skbqJgZufdQU9OM9sFI7RmG5WbehzeD36LxXE-2FAkYB72wLl2zZBAHcii-2BMxEsE8B8ywGT5hL8IThV4rYtzLoSccUWpJPD-2Flgklp9n7vJ9lc3bOTSdDnOZrAKReInfLz1U42l-2BXxNf-2F5Z7zcukS1IeCQU8JudaSonGHOSl2iu8ktyNTgROQ5iWZnsZ6FgD-2FRogzE-3D9knR_RwkSJRtVnVtCbVHovQZvrVnmAGWb8CnlQxqWIxU7wzMtD-2FWKJ297-2BwH-2BWb70WmVm-2FHyZUj3qSxrSmkkGeQ99O0YSj29Niy5h-2BVopC8PZTYVN1n0lz-2FHj2LlQQnyIX1Q7iBbG8h8TFmW7JFeINO7-2Bcd1Aibbq-2FnoXKqY-2FbgPTzcUBv3n54zNJ5VjItjzJJSNUD9XsOWIonkgbYAvChhH29k5TlCuW1oovgyXPaDLCpG0MeG97kjScZ27bTeGFcvV8f4Saa-2B71GhTU92uSpM39oVoubAnPHbkOli2bwLBqgz7QNeqWSd9ztis0jn-2Fu2Vh93ZAj1gXWPQjmRPS8JDpsf-2B0sKOTBVYfFQ9Xqzp-2FyVbxWBpHvZcrS26YKBVg1mccDj-2BBBcC-2FBl-2BbOzVUfdswsOvOhTOf2rdN5tADE6Aq73GU40hjGyKhJZKLDrDEj9HxK&amp;source=gmail&amp;ust=1672427197813000&amp;usg=AOvVaw10aIFHSU6BdUFFdRILgKBU">
      <img align="left" alt="App Store download" class="m_3734019650888846141kmImage CToWUd" src="https://ci3.googleusercontent.com/proxy/d38CmqOg8qzrsofqF34LdA2oqJ2LWcSJCWfREMfGLhZx9-EQ__GkTDnoL40otb2piSMvks5X2A8VWmgR2k9z9fiD4T92IaN43OgxUti7rnzA4G1wWtODYbqso3Y25m2EhOzYQQ5PyXL65w4vw93b4JVQJa-nm7U=s0-d-e1-ft#https://d3k81ch9hvuctc.cloudfront.net/company/SzLFFq/images/39d5cd49-ba6a-4693-b679-b7d9c16194a5.png" style="max-width:800px;padding:0;border-width:0" width="600" data-bit="iit">
      </a>
      </td>
      </tr>
      </tbody>
      </table>
      </td>
      </tr>
      </tbody>
      </table>
      <table border="0" cellpadding="0" cellspacing="0" style="min-width:100%" width="100%">
      <tbody>
      <tr>
      <td style="padding:0px;padding-left:0px;padding-right:0px;padding-bottom:0px" valign="top">
      <table align="left" border="0" cellpadding="0" cellspacing="0" style="min-width:100%" width="100%">
      <tbody>
      <tr>
      <td class="m_3734019650888846141kmImageContent" style="padding:0" valign="top">
      <a href="https://trk.klclick.com/ls/click?upn=uEJq3bjyTJkuYJR3INXIlXLLomHTBFp16xCq3oQBLusQ514qKpBGs2fFl790VDqKXU2MSKBrrZwoafevvjOCPjikMHKuQocEhrSbKBPd3ULqLJvwyr6ZEk-2FRhLs7TMNUbqUm4oraEz54oa54SWxhTsCNsrsP24Y3XeQkCNfLcM792tvKOJs628xqavq5hFiNZITfX95Su2TcHvpD7xHyxHWvzQYKWviQtqUdnDY76-2FPOvApcWxIMQAc8Av6RvzS-2BGC7brEXTWycPy5JBLKsDrcUfDx1XwlkHautGcRjVYpk-3DZxJH_RwkSJRtVnVtCbVHovQZvrVnmAGWb8CnlQxqWIxU7wzMtD-2FWKJ297-2BwH-2BWb70WmVm-2FHyZUj3qSxrSmkkGeQ99O0YSj29Niy5h-2BVopC8PZTYVN1n0lz-2FHj2LlQQnyIX1Q7iBbG8h8TFmW7JFeINO7-2Bcd1Aibbq-2FnoXKqY-2FbgPTzcUBv3n54zNJ5VjItjzJJSNUD9XsOWIonkgbYAvChhH29k5TlCuW1oovgyXPaDLCpG0MeG97kjScZ27bTeGFcvV8L2XJcQ-2Fz-2FR0Hm2-2BZ8jmCvED1tRw6Bm4ALrw3xRPdNQdzi6lcjQcZ6UBWMEZyCeU-2F8NEBEMg86mGTcUcWpqnrbHoqzRu-2BVXQ1IlAgN-2B7tRt3iK-2BPya4xfCdwjpLaS0gd2-2BXA5Shg8MqEMlwdEKyztetmIR-2Bpf0rN64OvNrv0vx6PxylQFj9vSY5-2BhD80Z7poh" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://trk.klclick.com/ls/click?upn%3DuEJq3bjyTJkuYJR3INXIlXLLomHTBFp16xCq3oQBLusQ514qKpBGs2fFl790VDqKXU2MSKBrrZwoafevvjOCPjikMHKuQocEhrSbKBPd3ULqLJvwyr6ZEk-2FRhLs7TMNUbqUm4oraEz54oa54SWxhTsCNsrsP24Y3XeQkCNfLcM792tvKOJs628xqavq5hFiNZITfX95Su2TcHvpD7xHyxHWvzQYKWviQtqUdnDY76-2FPOvApcWxIMQAc8Av6RvzS-2BGC7brEXTWycPy5JBLKsDrcUfDx1XwlkHautGcRjVYpk-3DZxJH_RwkSJRtVnVtCbVHovQZvrVnmAGWb8CnlQxqWIxU7wzMtD-2FWKJ297-2BwH-2BWb70WmVm-2FHyZUj3qSxrSmkkGeQ99O0YSj29Niy5h-2BVopC8PZTYVN1n0lz-2FHj2LlQQnyIX1Q7iBbG8h8TFmW7JFeINO7-2Bcd1Aibbq-2FnoXKqY-2FbgPTzcUBv3n54zNJ5VjItjzJJSNUD9XsOWIonkgbYAvChhH29k5TlCuW1oovgyXPaDLCpG0MeG97kjScZ27bTeGFcvV8L2XJcQ-2Fz-2FR0Hm2-2BZ8jmCvED1tRw6Bm4ALrw3xRPdNQdzi6lcjQcZ6UBWMEZyCeU-2F8NEBEMg86mGTcUcWpqnrbHoqzRu-2BVXQ1IlAgN-2B7tRt3iK-2BPya4xfCdwjpLaS0gd2-2BXA5Shg8MqEMlwdEKyztetmIR-2Bpf0rN64OvNrv0vx6PxylQFj9vSY5-2BhD80Z7poh&amp;source=gmail&amp;ust=1672427197813000&amp;usg=AOvVaw3kBrJ9VHcgSUubd842xG2C">
      <img align="left" alt="Google Play download" class="m_3734019650888846141kmImage CToWUd" src="https://ci4.googleusercontent.com/proxy/ZxzOy6PcPDBY0IjTd5Ej-i67PrRmKMUJxREAD4yg6_71kiWjvDn8IP4bj2DXA7KakLWgIGV3lo9aqHdrLvtvEVVdk4dzT2diA0rsmvXdg5ImPWzBvpWYBbBO8TTHaVBdg-s9ZJxxBCC1uq6Yu9Ai3UBNJZQCseM=s0-d-e1-ft#https://d3k81ch9hvuctc.cloudfront.net/company/SzLFFq/images/e0fa3c3f-c9f4-4ba6-a1b0-b65597c95a88.png" style="max-width:800px;padding:0;border-width:0" width="600" data-bit="iit">
      </a>
      </td>
      </tr>
      </tbody>
      </table>
      </td>
      </tr>
      </tbody>
      </table>
      <table border="0" cellpadding="0" cellspacing="0" class="m_3734019650888846141kmTableBlock m_3734019650888846141kmTableMobile" width="100%">
      <tbody>
      <tr>
      <td class="m_3734019650888846141kmTableBlockInner" style="padding-top:30px;padding-left:18px;padding-bottom:9px;padding-right:18px;background-color:#fff" valign="top">
      <table align="left" border="0" cellpadding="0" cellspacing="0" style="font-size:24px;color:#000" width="100%">
      <thead>
      <tr>
      <th class="m_3734019650888846141kmTextContent" style="text-align:center;font-weight:bold;padding-top:0px;padding-left:0px;padding-bottom:0px;padding-right:0px" valign="top">
      </th>
      </tr>
      </thead>
      <tbody>
      <tr>
      <td class="m_3734019650888846141kmTextContent" style="border-right:none;text-align:center;font-size:24px;color:#000;border-top-style:solid;border-top-width:1px;border-top-color:#000;padding-top:18px;padding-left:9px;padding-bottom:18px;padding-right:9px" valign="middle">
      <span style="font-size:24px"><a style="color:#f80012;font-weight:normal;text-decoration:NONE" href="https://trk.klclick.com/ls/click?upn=uEJq3bjyTJkuYJR3INXIlaR7UH-2BtWEQm5BnymlpMMkumRCyU-2BgIC9tWhemwM472ZhQF31F-2FqTxM4PdMRLmiGOW1y4I6R8Nj1n0jDuoxF-2FjTb9UixiYSzYtOBW22yu-2BT8fpZm56f0sEHU4lNN69gxhpnBE7UNDtwR4o2t3hbAiseXrEB99C5QXylZr332B9ha8mtPZZgH-2BuqxmZANb70Z-2BcNcY-2Fth49ml8xey0WVgorjMnCAgxbBSC8PJI0JrFKZnhOGS_RwkSJRtVnVtCbVHovQZvrVnmAGWb8CnlQxqWIxU7wzMtD-2FWKJ297-2BwH-2BWb70WmVm-2FHyZUj3qSxrSmkkGeQ99O0YSj29Niy5h-2BVopC8PZTYVN1n0lz-2FHj2LlQQnyIX1Q7iBbG8h8TFmW7JFeINO7-2Bcd1Aibbq-2FnoXKqY-2FbgPTzcUBv3n54zNJ5VjItjzJJSNUD9XsOWIonkgbYAvChhH29k5TlCuW1oovgyXPaDLCpG0MeG97kjScZ27bTeGFcvV8SxTKVGOpiU02QJgHBUxeSmxiYILP5ivQieGWG8Ri1ZxZgKiq3LHOrYOqdBVqone0OL8kniVdviAcWKkyzjVz1A2ryqoi-2FUvGGmAtQnhG4bxkHWQLRoZkOKTYyYH-2BgYnKCU1bUciueRN4VT25mlp-2FrQkrRmAJlxLcS-2BrWqgn7oq7PA9627JFVXU9LeoKmF-2FQl" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://trk.klclick.com/ls/click?upn%3DuEJq3bjyTJkuYJR3INXIlaR7UH-2BtWEQm5BnymlpMMkumRCyU-2BgIC9tWhemwM472ZhQF31F-2FqTxM4PdMRLmiGOW1y4I6R8Nj1n0jDuoxF-2FjTb9UixiYSzYtOBW22yu-2BT8fpZm56f0sEHU4lNN69gxhpnBE7UNDtwR4o2t3hbAiseXrEB99C5QXylZr332B9ha8mtPZZgH-2BuqxmZANb70Z-2BcNcY-2Fth49ml8xey0WVgorjMnCAgxbBSC8PJI0JrFKZnhOGS_RwkSJRtVnVtCbVHovQZvrVnmAGWb8CnlQxqWIxU7wzMtD-2FWKJ297-2BwH-2BWb70WmVm-2FHyZUj3qSxrSmkkGeQ99O0YSj29Niy5h-2BVopC8PZTYVN1n0lz-2FHj2LlQQnyIX1Q7iBbG8h8TFmW7JFeINO7-2Bcd1Aibbq-2FnoXKqY-2FbgPTzcUBv3n54zNJ5VjItjzJJSNUD9XsOWIonkgbYAvChhH29k5TlCuW1oovgyXPaDLCpG0MeG97kjScZ27bTeGFcvV8SxTKVGOpiU02QJgHBUxeSmxiYILP5ivQieGWG8Ri1ZxZgKiq3LHOrYOqdBVqone0OL8kniVdviAcWKkyzjVz1A2ryqoi-2FUvGGmAtQnhG4bxkHWQLRoZkOKTYyYH-2BgYnKCU1bUciueRN4VT25mlp-2FrQkrRmAJlxLcS-2BrWqgn7oq7PA9627JFVXU9LeoKmF-2FQl&amp;source=gmail&amp;ust=1672427197813000&amp;usg=AOvVaw16wEBwgIS_5ibns4MFRsqk"><span style="color:#000">HOME</span></a></span>
      </td>
      </tr>
      <tr>
      <td class="m_3734019650888846141kmTextContent" style="border-right:none;text-align:center;font-size:24px;color:#000;border-top-style:solid;border-top-width:1px;border-top-color:#000;padding-top:18px;padding-left:9px;padding-bottom:18px;padding-right:9px" valign="middle">
      <span style="font-size:24px"><a style="color:#f80012;font-weight:normal;text-decoration:NONE" href="https://trk.klclick.com/ls/click?upn=uEJq3bjyTJkuYJR3INXIlaR7UH-2BtWEQm5BnymlpMMkurEwK1uE0bfRb4sunl-2FilpYtD85lbT3600pbPZl0gGAFXGyKMfkD4Kx3oTbUFKrAkJu6KMmkP-2BQ5FROHJtH97E0Vvt9hmRHnobiy1ArwKxuAtKtx6Ege0xHb77uXCANBkfTsUQHgR69lgr4tU6wRVyLykELqdrU9JdAokIK-2Fm40Kwa-2FTo91Akb-2FR0A7RMLePb-2BpQD7FyzoabcctMLitJyfbUa2NsnbRFCk-2FG4SZ-2BN4Fw-3D-3DMtvo_RwkSJRtVnVtCbVHovQZvrVnmAGWb8CnlQxqWIxU7wzMtD-2FWKJ297-2BwH-2BWb70WmVm-2FHyZUj3qSxrSmkkGeQ99O0YSj29Niy5h-2BVopC8PZTYVN1n0lz-2FHj2LlQQnyIX1Q7iBbG8h8TFmW7JFeINO7-2Bcd1Aibbq-2FnoXKqY-2FbgPTzcUBv3n54zNJ5VjItjzJJSNUD9XsOWIonkgbYAvChhH29k5TlCuW1oovgyXPaDLCpG0MeG97kjScZ27bTeGFcvV8I0WawR2M1sj3TwlUPQpnOHqsuyN1zkDNXBHMfJ1PbIIWZzlhE9tbI2D8VxYqoIB9P-2FLgtT4VYinHxZh3htrLePYHUYXedBm0B7ZD1bmDyOQmsq0pfF8fqQmKb3pWfvNTkfsu-2FC2yrKI-2FlP8JQj2tKvHe0DFEP8VS1Om7eQozEWMXgq-2FmuM-2F1-2F8enzuASTNiu" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://trk.klclick.com/ls/click?upn%3DuEJq3bjyTJkuYJR3INXIlaR7UH-2BtWEQm5BnymlpMMkurEwK1uE0bfRb4sunl-2FilpYtD85lbT3600pbPZl0gGAFXGyKMfkD4Kx3oTbUFKrAkJu6KMmkP-2BQ5FROHJtH97E0Vvt9hmRHnobiy1ArwKxuAtKtx6Ege0xHb77uXCANBkfTsUQHgR69lgr4tU6wRVyLykELqdrU9JdAokIK-2Fm40Kwa-2FTo91Akb-2FR0A7RMLePb-2BpQD7FyzoabcctMLitJyfbUa2NsnbRFCk-2FG4SZ-2BN4Fw-3D-3DMtvo_RwkSJRtVnVtCbVHovQZvrVnmAGWb8CnlQxqWIxU7wzMtD-2FWKJ297-2BwH-2BWb70WmVm-2FHyZUj3qSxrSmkkGeQ99O0YSj29Niy5h-2BVopC8PZTYVN1n0lz-2FHj2LlQQnyIX1Q7iBbG8h8TFmW7JFeINO7-2Bcd1Aibbq-2FnoXKqY-2FbgPTzcUBv3n54zNJ5VjItjzJJSNUD9XsOWIonkgbYAvChhH29k5TlCuW1oovgyXPaDLCpG0MeG97kjScZ27bTeGFcvV8I0WawR2M1sj3TwlUPQpnOHqsuyN1zkDNXBHMfJ1PbIIWZzlhE9tbI2D8VxYqoIB9P-2FLgtT4VYinHxZh3htrLePYHUYXedBm0B7ZD1bmDyOQmsq0pfF8fqQmKb3pWfvNTkfsu-2FC2yrKI-2FlP8JQj2tKvHe0DFEP8VS1Om7eQozEWMXgq-2FmuM-2F1-2F8enzuASTNiu&amp;source=gmail&amp;ust=1672427197813000&amp;usg=AOvVaw0Yao71_2pZQbKmb1-azXH6"><span style="color:#000">SHOP</span></a></span>
      </td>
      </tr>
      <tr>
      <td class="m_3734019650888846141kmTextContent" style="border-right:none;text-align:center;font-size:24px;color:#000;border-top-style:solid;border-top-width:1px;border-top-color:#000;padding-top:18px;padding-left:9px;padding-bottom:18px;padding-right:9px" valign="middle">
      <span style="font-size:24px"><a style="color:#f80012;font-weight:normal;text-decoration:NONE" href="https://trk.klclick.com/ls/click?upn=uEJq3bjyTJkuYJR3INXIlaR7UH-2BtWEQm5BnymlpMMkurEwK1uE0bfRb4sunl-2FilpjX09qzhPLOaCMTKm-2BIWZEdVV-2FAqydGs27wwvCOAZ2Hq4iFRAqQ1RhgHpsUwHdDIkuc87ssWZW4RgrL7IRLA-2FXcVXo46DVdSVbZFpgXT3PoJhQaH2Qox0l9jKP-2FonL5pxyWd7tzwMsbktPYrzKZ-2FSw4zEw0Mqv5fYgfeT9-2Bc-2BYeBT6DYC4UHJLUFjG6bEUsRQJ74aX6b9afvsn3kDkY8F8Q-3D-3D0SZT_RwkSJRtVnVtCbVHovQZvrVnmAGWb8CnlQxqWIxU7wzMtD-2FWKJ297-2BwH-2BWb70WmVm-2FHyZUj3qSxrSmkkGeQ99O0YSj29Niy5h-2BVopC8PZTYVN1n0lz-2FHj2LlQQnyIX1Q7iBbG8h8TFmW7JFeINO7-2Bcd1Aibbq-2FnoXKqY-2FbgPTzcUBv3n54zNJ5VjItjzJJSNUD9XsOWIonkgbYAvChhH29k5TlCuW1oovgyXPaDLCpG0MeG97kjScZ27bTeGFcvV8OinIWu3G-2Fqp8VSLnQzT5xeC2x1bV8A2-2FK922h39Q7-2FJqP70WWVkFpUiFqIfN5T3Uw5Urxdh3FcStNBNO-2BZfPPMnOEaJm9K0J9ZzJ13wBBySMs5GJUizHs4KuJvC7kUbEkhztAvGuHbhQlBJHVXiAmBXl-2Bh5t4zKb2-2FoR0ErF3YYqE4Uybb6su1wy48OSvPPI" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://trk.klclick.com/ls/click?upn%3DuEJq3bjyTJkuYJR3INXIlaR7UH-2BtWEQm5BnymlpMMkurEwK1uE0bfRb4sunl-2FilpjX09qzhPLOaCMTKm-2BIWZEdVV-2FAqydGs27wwvCOAZ2Hq4iFRAqQ1RhgHpsUwHdDIkuc87ssWZW4RgrL7IRLA-2FXcVXo46DVdSVbZFpgXT3PoJhQaH2Qox0l9jKP-2FonL5pxyWd7tzwMsbktPYrzKZ-2FSw4zEw0Mqv5fYgfeT9-2Bc-2BYeBT6DYC4UHJLUFjG6bEUsRQJ74aX6b9afvsn3kDkY8F8Q-3D-3D0SZT_RwkSJRtVnVtCbVHovQZvrVnmAGWb8CnlQxqWIxU7wzMtD-2FWKJ297-2BwH-2BWb70WmVm-2FHyZUj3qSxrSmkkGeQ99O0YSj29Niy5h-2BVopC8PZTYVN1n0lz-2FHj2LlQQnyIX1Q7iBbG8h8TFmW7JFeINO7-2Bcd1Aibbq-2FnoXKqY-2FbgPTzcUBv3n54zNJ5VjItjzJJSNUD9XsOWIonkgbYAvChhH29k5TlCuW1oovgyXPaDLCpG0MeG97kjScZ27bTeGFcvV8OinIWu3G-2Fqp8VSLnQzT5xeC2x1bV8A2-2FK922h39Q7-2FJqP70WWVkFpUiFqIfN5T3Uw5Urxdh3FcStNBNO-2BZfPPMnOEaJm9K0J9ZzJ13wBBySMs5GJUizHs4KuJvC7kUbEkhztAvGuHbhQlBJHVXiAmBXl-2Bh5t4zKb2-2FoR0ErF3YYqE4Uybb6su1wy48OSvPPI&amp;source=gmail&amp;ust=1672427197813000&amp;usg=AOvVaw03cdLpxyq6NidNjjAZopRN"><span style="color:#000">COLLECTIONS</span></a></span>
      </td>
      </tr>
      <tr>
      <td class="m_3734019650888846141kmTextContent" style="border-right:none;text-align:center;font-size:24px;color:#000;border-top-style:solid;border-top-width:1px;border-top-color:#000;padding-top:18px;padding-left:9px;padding-bottom:18px;padding-right:9px" valign="middle">
      <span style="font-size:24px"><a style="color:#f80012;font-weight:normal;text-decoration:NONE" href="https://trk.klclick.com/ls/click?upn=uEJq3bjyTJkuYJR3INXIlaR7UH-2BtWEQm5BnymlpMMkurEwK1uE0bfRb4sunl-2FilpjX09qzhPLOaCMTKm-2BIWZEdVV-2FAqydGs27wwvCOAZ2Hq4iFRAqQ1RhgHpsUwHdDIkuc87ssWZW4RgrL7IRLA-2FXcVXo46DVdSVbZFpgXT3PoJhQaH2Qox0l9jKP-2FonL5pxyWd7tzwMsbktPYrzKZ-2FSw4zEw0Mqv5fYgfeT9-2Bc-2BYeBT6DYC4UHJLUFjG6bEUsRQJ74aX6b9afvsn3kDkY8F8Q-3D-3DQK2e_RwkSJRtVnVtCbVHovQZvrVnmAGWb8CnlQxqWIxU7wzMtD-2FWKJ297-2BwH-2BWb70WmVm-2FHyZUj3qSxrSmkkGeQ99O0YSj29Niy5h-2BVopC8PZTYVN1n0lz-2FHj2LlQQnyIX1Q7iBbG8h8TFmW7JFeINO7-2Bcd1Aibbq-2FnoXKqY-2FbgPTzcUBv3n54zNJ5VjItjzJJSNUD9XsOWIonkgbYAvChhH29k5TlCuW1oovgyXPaDLCpG0MeG97kjScZ27bTeGFcvV8uwLIMSsSnJgYKzUHmrFpodqMwEMj8ew5UoPJVpGhe7mhrt8NWbalaiBPjFZVfvGPD14tbDarO6shHL8Q0wWgltQeb91ZJz-2Fc-2FWSqqK439m8Er2j40gnUx-2Frogr3gKmVk3FQzyy-2BR22h23bqQL3rKyAHr1gApYb2dZ-2BcKNE-2BbOMi6aHkdEGHiz0URWdCdbKc2" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://trk.klclick.com/ls/click?upn%3DuEJq3bjyTJkuYJR3INXIlaR7UH-2BtWEQm5BnymlpMMkurEwK1uE0bfRb4sunl-2FilpjX09qzhPLOaCMTKm-2BIWZEdVV-2FAqydGs27wwvCOAZ2Hq4iFRAqQ1RhgHpsUwHdDIkuc87ssWZW4RgrL7IRLA-2FXcVXo46DVdSVbZFpgXT3PoJhQaH2Qox0l9jKP-2FonL5pxyWd7tzwMsbktPYrzKZ-2FSw4zEw0Mqv5fYgfeT9-2Bc-2BYeBT6DYC4UHJLUFjG6bEUsRQJ74aX6b9afvsn3kDkY8F8Q-3D-3DQK2e_RwkSJRtVnVtCbVHovQZvrVnmAGWb8CnlQxqWIxU7wzMtD-2FWKJ297-2BwH-2BWb70WmVm-2FHyZUj3qSxrSmkkGeQ99O0YSj29Niy5h-2BVopC8PZTYVN1n0lz-2FHj2LlQQnyIX1Q7iBbG8h8TFmW7JFeINO7-2Bcd1Aibbq-2FnoXKqY-2FbgPTzcUBv3n54zNJ5VjItjzJJSNUD9XsOWIonkgbYAvChhH29k5TlCuW1oovgyXPaDLCpG0MeG97kjScZ27bTeGFcvV8uwLIMSsSnJgYKzUHmrFpodqMwEMj8ew5UoPJVpGhe7mhrt8NWbalaiBPjFZVfvGPD14tbDarO6shHL8Q0wWgltQeb91ZJz-2Fc-2FWSqqK439m8Er2j40gnUx-2Frogr3gKmVk3FQzyy-2BR22h23bqQL3rKyAHr1gApYb2dZ-2BcKNE-2BbOMi6aHkdEGHiz0URWdCdbKc2&amp;source=gmail&amp;ust=1672427197814000&amp;usg=AOvVaw1q8hhSZaf8jTfvf-PowBDA"><span style="color:#000">ARTISTS &amp; CREATORS</span></a></span>
      </td>
      </tr>
      <tr>
      <td class="m_3734019650888846141kmTextContent" style="border-right:none;text-align:center;font-size:24px;color:#000;border-top-style:solid;border-top-width:1px;border-top-color:#000;padding-top:18px;padding-left:9px;padding-bottom:18px;padding-right:9px" valign="middle">
      </td>
      </tr>
      </tbody>
      </table>
      </td>
      </tr>
      </tbody>
      </table>
      <table border="0" cellpadding="0" cellspacing="0" width="100%">
      <tbody>
      <tr>
      <td class="m_3734019650888846141kmTextBlockInner" style="background-color:#000" valign="top">
      <table align="left" border="0" cellpadding="0" cellspacing="0" class="m_3734019650888846141kmTextContentContainer" width="100%">
      <tbody>
      <tr>
      <td class="m_3734019650888846141kmTextContent" style="padding-top:30px;padding-bottom:9px;padding-left:18px;padding-right:18px;color:#fff;text-align:center" valign="top">
                  Follow us on social media
                </td>
      </tr>
      </tbody>
      </table>
      </td>
      </tr>
      </tbody>
      </table>
      <table border="0" cellpadding="0" cellspacing="0" width="100%">
      <tbody>
      <tr>
      <td align="center" style="padding-top:20px;padding-bottom:30px;background-color:#000000;padding-left:9px;padding-right:9px" valign="top">
      <table border="0" cellpadding="0" cellspacing="0" width="100%">
      <tbody>
      <tr>
      <td align="center" style="padding-left:9px;padding-right:9px">
      <table border="0" cellpadding="0" cellspacing="0" class="m_3734019650888846141kmButtonBarContent">
      <tbody>
      <tr>
      <td align="center" valign="top">
      <table border="0" cellpadding="0" cellspacing="0">
      <tbody>
      <tr>
      <td valign="top">
      <table align="left" border="0" cellpadding="0" cellspacing="0">
      <tbody>
      <tr>
      <td align="center" style="padding-right:10px" valign="top">
      <a href="https://trk.klclick.com/ls/click?upn=uEJq3bjyTJkuYJR3INXIlbsuKt0wbI9c9L6uP33jiUbJToodlQuQe4X4jwKweFgawpXvaSrJW01Rd6S1VSJ8PNPTJc-2Fr9iuIoenc7gYChN8-2F2tq5S7rOvPwUj2dlRGnrqJChvCho1a1YLORqEZWbkRFFIP5YsRlJ-2Fqxw77shyaOQufFHUC4WlFXAc27JvuzDlBEAwD07UDOqViq1tncQqa5CCRSahAYe8bvCxaSTCJ3EPMFXrtL-2B-2BESUD5Y8lu1d5Fv7_RwkSJRtVnVtCbVHovQZvrVnmAGWb8CnlQxqWIxU7wzMtD-2FWKJ297-2BwH-2BWb70WmVm-2FHyZUj3qSxrSmkkGeQ99O0YSj29Niy5h-2BVopC8PZTYVN1n0lz-2FHj2LlQQnyIX1Q7iBbG8h8TFmW7JFeINO7-2Bcd1Aibbq-2FnoXKqY-2FbgPTzcUBv3n54zNJ5VjItjzJJSNUD9XsOWIonkgbYAvChhH29k5TlCuW1oovgyXPaDLCpG0MeG97kjScZ27bTeGFcvV8EvzyOVp2BPYVQOEgV67bnD4wswSIDlpC-2FZeD6kAoCT6OO-2BUdk9xLm7n2C8EgY0wR6jbvd04XhFYV1MPVKIDS0yadmPBxdyeO9A1PuPz0HAjlvtY9KkmSdY8QiopWRwTzi0Ql3mKaN3G-2FZrTCn1jcIbROsqVTHPH2-2FQzPK2bGq6tgydRUXORBGjDXrDKsoEXY" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://trk.klclick.com/ls/click?upn%3DuEJq3bjyTJkuYJR3INXIlbsuKt0wbI9c9L6uP33jiUbJToodlQuQe4X4jwKweFgawpXvaSrJW01Rd6S1VSJ8PNPTJc-2Fr9iuIoenc7gYChN8-2F2tq5S7rOvPwUj2dlRGnrqJChvCho1a1YLORqEZWbkRFFIP5YsRlJ-2Fqxw77shyaOQufFHUC4WlFXAc27JvuzDlBEAwD07UDOqViq1tncQqa5CCRSahAYe8bvCxaSTCJ3EPMFXrtL-2B-2BESUD5Y8lu1d5Fv7_RwkSJRtVnVtCbVHovQZvrVnmAGWb8CnlQxqWIxU7wzMtD-2FWKJ297-2BwH-2BWb70WmVm-2FHyZUj3qSxrSmkkGeQ99O0YSj29Niy5h-2BVopC8PZTYVN1n0lz-2FHj2LlQQnyIX1Q7iBbG8h8TFmW7JFeINO7-2Bcd1Aibbq-2FnoXKqY-2FbgPTzcUBv3n54zNJ5VjItjzJJSNUD9XsOWIonkgbYAvChhH29k5TlCuW1oovgyXPaDLCpG0MeG97kjScZ27bTeGFcvV8EvzyOVp2BPYVQOEgV67bnD4wswSIDlpC-2FZeD6kAoCT6OO-2BUdk9xLm7n2C8EgY0wR6jbvd04XhFYV1MPVKIDS0yadmPBxdyeO9A1PuPz0HAjlvtY9KkmSdY8QiopWRwTzi0Ql3mKaN3G-2FZrTCn1jcIbROsqVTHPH2-2FQzPK2bGq6tgydRUXORBGjDXrDKsoEXY&amp;source=gmail&amp;ust=1672427197814000&amp;usg=AOvVaw3zgOnjn4E44hfwohPFuV6X"><img alt="instagram" src="https://ci6.googleusercontent.com/proxy/qN4mmAl09b69twXLJuB0A3B1LrY8PmRtXhtIxrdWs1Az6S-qk1-Zqd9BeE8iTSUs6skslee8au9PqEFD7aHR8t1WSCSXWgVQ6l10TL2M8wj3CSy3f8ujQa7Tw_2AOu61ykctCQ232TBQ7c_ZQ3Sch0cmMgWEUJvSa3ho=s0-d-e1-ft#https://d3k81ch9hvuctc.cloudfront.net/company/SzLFFq/images/e44777cc-bc53-4ae1-8ef5-5405cbee0aae.png?v=0" style="width:32pxpx;max-width:100%;display:block" width="32" class="CToWUd" data-bit="iit"></a>
      </td>
      </tr>
      </tbody>
      </table>
      
      <table align="left" border="0" cellpadding="0" cellspacing="0">
      <tbody>
      <tr>
      <td align="center" style="padding-right:10px" valign="top">
      <a href="https://trk.klclick.com/ls/click?upn=uEJq3bjyTJkuYJR3INXIlZHgPxsY-2BIjqDGG8whMbHndMAmpRqWifYM9-2FR5CzPBix8i3isbHUiG-2BiF4mS28f2HapPEgX6Gobp1IHAdp5LJyY7QYH4FJLB3jWvcdB-2Bp3QL6-2FlGeUT3WoJ7deSDivL-2ButMB6WvtFe5xJ1Z0ljfZl0zsHh-2F-2BzYqriuNcADVicESdXzfCKLVoKVAhztE1oafTFSYlnpSgsqLKYwpPfLzZ-2FPtFgitsEMlT2bPDwL4HBfN2rfpu_RwkSJRtVnVtCbVHovQZvrVnmAGWb8CnlQxqWIxU7wzMtD-2FWKJ297-2BwH-2BWb70WmVm-2FHyZUj3qSxrSmkkGeQ99O0YSj29Niy5h-2BVopC8PZTYVN1n0lz-2FHj2LlQQnyIX1Q7iBbG8h8TFmW7JFeINO7-2Bcd1Aibbq-2FnoXKqY-2FbgPTzcUBv3n54zNJ5VjItjzJJSNUD9XsOWIonkgbYAvChhH29k5TlCuW1oovgyXPaDLCpG0MeG97kjScZ27bTeGFcvV83FiBQDcZywW33LFtVt9cYbT-2BwIpeQd73zk-2BRY8ElfrlYZwUVsKV-2FYw92VTmRupTy8l3ky3iyUltohLMEcqFKwnWg0giZV0LGbP-2FzqTj6GA74VACNKpSZKdA8NGG-2Bz1kbbVGAeYLvWXzSQku4QzLS2Uyl-2F97xBUl9MhfdjyM4Godstfrl7OjlWIyXQg-2B6bFsq" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://trk.klclick.com/ls/click?upn%3DuEJq3bjyTJkuYJR3INXIlZHgPxsY-2BIjqDGG8whMbHndMAmpRqWifYM9-2FR5CzPBix8i3isbHUiG-2BiF4mS28f2HapPEgX6Gobp1IHAdp5LJyY7QYH4FJLB3jWvcdB-2Bp3QL6-2FlGeUT3WoJ7deSDivL-2ButMB6WvtFe5xJ1Z0ljfZl0zsHh-2F-2BzYqriuNcADVicESdXzfCKLVoKVAhztE1oafTFSYlnpSgsqLKYwpPfLzZ-2FPtFgitsEMlT2bPDwL4HBfN2rfpu_RwkSJRtVnVtCbVHovQZvrVnmAGWb8CnlQxqWIxU7wzMtD-2FWKJ297-2BwH-2BWb70WmVm-2FHyZUj3qSxrSmkkGeQ99O0YSj29Niy5h-2BVopC8PZTYVN1n0lz-2FHj2LlQQnyIX1Q7iBbG8h8TFmW7JFeINO7-2Bcd1Aibbq-2FnoXKqY-2FbgPTzcUBv3n54zNJ5VjItjzJJSNUD9XsOWIonkgbYAvChhH29k5TlCuW1oovgyXPaDLCpG0MeG97kjScZ27bTeGFcvV83FiBQDcZywW33LFtVt9cYbT-2BwIpeQd73zk-2BRY8ElfrlYZwUVsKV-2FYw92VTmRupTy8l3ky3iyUltohLMEcqFKwnWg0giZV0LGbP-2FzqTj6GA74VACNKpSZKdA8NGG-2Bz1kbbVGAeYLvWXzSQku4QzLS2Uyl-2F97xBUl9MhfdjyM4Godstfrl7OjlWIyXQg-2B6bFsq&amp;source=gmail&amp;ust=1672427197814000&amp;usg=AOvVaw0wHPnuojRkZG5ZsESVgGlt"><img alt="facebook" src="https://ci4.googleusercontent.com/proxy/RW4cR0k9CrlOHqWzZlXAJNkXQKb5WkMN6sHbEW9puktalpdFR2YNvMmsaMHPRRFlUwvyrDwCcEare6Z5SfF0RgnWgu1Q8cfSrGNJHp8_U72tnWl2N9AKjcyJxoM0-qmAS0ClLujxhZSW7dz1HoOPgOZU32DR1V21f1LL=s0-d-e1-ft#https://d3k81ch9hvuctc.cloudfront.net/company/SzLFFq/images/9b29906d-30d6-456c-a30a-a451c446f218.png?v=0" style="width:30pxpx;max-width:100%;display:block" width="30" class="CToWUd" data-bit="iit"></a>
      </td>
      </tr>
      </tbody>
      </table>
      
      <table align="left" border="0" cellpadding="0" cellspacing="0">
      <tbody>
      <tr>
      <td align="center" style="padding-right:10px" valign="top">
      <a href="https://trk.klclick.com/ls/click?upn=uEJq3bjyTJkuYJR3INXIleCjMI83a46P7tF220ebEdgyTYc-2Bosisw4-2BEQtLDUvmctmXo59fG9-2FEs7fkNIL6LWpkmtJPo6WgE-2B-2F9A2m-2FQ8F50G1hSaotdimEDyDn4ym1xQrJxFfpC63kKJ-2FhdNEbpEQq7nbAHaL8osaLED-2BreP4O1tGJw0HxCMMgS2R-2FN4-2BiBN2xf6kKHh55huCaY-2BrNWr5qrhFHZq3OcCKzd-2FNUqq7NoOPN9bphjG9Pdk0Uo4xYPqeeS_RwkSJRtVnVtCbVHovQZvrVnmAGWb8CnlQxqWIxU7wzMtD-2FWKJ297-2BwH-2BWb70WmVm-2FHyZUj3qSxrSmkkGeQ99O0YSj29Niy5h-2BVopC8PZTYVN1n0lz-2FHj2LlQQnyIX1Q7iBbG8h8TFmW7JFeINO7-2Bcd1Aibbq-2FnoXKqY-2FbgPTzcUBv3n54zNJ5VjItjzJJSNUD9XsOWIonkgbYAvChhH29k5TlCuW1oovgyXPaDLCpG0MeG97kjScZ27bTeGFcvV8Jlk2YdE6uO2jECWrKXp88AdAnDsnoFbYLUSOxaIGAINY1zFWHcR6jkuTeDuE7UkDiXkB9VHXQ-2Bi-2F0Xrs7DoDrDMtoW8NzbjJB0wAyKMzq95-2BgkVJ0zy5xrYslbperrzKZlclrcydI0DvI-2Bzbu3tVbCQv6WMmVnruzUSJogP9fJUSyczQbwRz-2FNA0LGXCUps0" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://trk.klclick.com/ls/click?upn%3DuEJq3bjyTJkuYJR3INXIleCjMI83a46P7tF220ebEdgyTYc-2Bosisw4-2BEQtLDUvmctmXo59fG9-2FEs7fkNIL6LWpkmtJPo6WgE-2B-2F9A2m-2FQ8F50G1hSaotdimEDyDn4ym1xQrJxFfpC63kKJ-2FhdNEbpEQq7nbAHaL8osaLED-2BreP4O1tGJw0HxCMMgS2R-2FN4-2BiBN2xf6kKHh55huCaY-2BrNWr5qrhFHZq3OcCKzd-2FNUqq7NoOPN9bphjG9Pdk0Uo4xYPqeeS_RwkSJRtVnVtCbVHovQZvrVnmAGWb8CnlQxqWIxU7wzMtD-2FWKJ297-2BwH-2BWb70WmVm-2FHyZUj3qSxrSmkkGeQ99O0YSj29Niy5h-2BVopC8PZTYVN1n0lz-2FHj2LlQQnyIX1Q7iBbG8h8TFmW7JFeINO7-2Bcd1Aibbq-2FnoXKqY-2FbgPTzcUBv3n54zNJ5VjItjzJJSNUD9XsOWIonkgbYAvChhH29k5TlCuW1oovgyXPaDLCpG0MeG97kjScZ27bTeGFcvV8Jlk2YdE6uO2jECWrKXp88AdAnDsnoFbYLUSOxaIGAINY1zFWHcR6jkuTeDuE7UkDiXkB9VHXQ-2Bi-2F0Xrs7DoDrDMtoW8NzbjJB0wAyKMzq95-2BgkVJ0zy5xrYslbperrzKZlclrcydI0DvI-2Bzbu3tVbCQv6WMmVnruzUSJogP9fJUSyczQbwRz-2FNA0LGXCUps0&amp;source=gmail&amp;ust=1672427197814000&amp;usg=AOvVaw3A8lGlI-VVnPSHv9LaB5LH"><img alt="twitter" src="https://ci4.googleusercontent.com/proxy/mlVT671PwQU2EV41zavO6w2y_CnP796RSwMvblVcB3NWDDmUFVIW3nh2pH5VRrNjIZ-9f1r28otDTHzn6vLMGsaZh2AtOiOVHjIr1S5FW7-oyZ62_Pff-BYQeZ_ppCnpOtjEe1gjbbYg-EXt3Lir_26pIoW-GcUkRH1C=s0-d-e1-ft#https://d3k81ch9hvuctc.cloudfront.net/company/SzLFFq/images/77417be1-6aad-4df7-aa2e-4727a580a1f8.png?v=0" style="width:30pxpx;max-width:100%;display:block" width="30" class="CToWUd" data-bit="iit"></a>
      </td>
      </tr>
      </tbody>
      </table>
      
      <table align="left" border="0" cellpadding="0" cellspacing="0">
      <tbody>
      <tr>
      <td align="center" style="padding-right:10px" valign="top">
      <a href="https://trk.klclick.com/ls/click?upn=uEJq3bjyTJkuYJR3INXIlXgfkm5HBs9sXVbh5RPEzOycBk9DP8KJU7lDTE6XB5zlA9CacGZ-2BR-2Be2cgW8qr2stxpPcIX1SqDbPEKel08zL3t-2BZFOVNmD5j1R1MPnLdEb8v1LA7MXRHnCKfxYMaBoiFSP3-2BMYeu1DRDhSRkQ8NWIK2kRpjmK-2FjRY-2FrmkGno7e4PICAXHXoe-2BlYAg-2FqlSjolyg-2F8pxrB6JEUj81q3zHgBXOgmGcpgbfPfK5ElShWm4fxoPYJbplPu55nGt-2BY7HPdw-3D-3DhYof_RwkSJRtVnVtCbVHovQZvrVnmAGWb8CnlQxqWIxU7wzMtD-2FWKJ297-2BwH-2BWb70WmVm-2FHyZUj3qSxrSmkkGeQ99O0YSj29Niy5h-2BVopC8PZTYVN1n0lz-2FHj2LlQQnyIX1Q7iBbG8h8TFmW7JFeINO7-2Bcd1Aibbq-2FnoXKqY-2FbgPTzcUBv3n54zNJ5VjItjzJJSNUD9XsOWIonkgbYAvChhH29k5TlCuW1oovgyXPaDLCpG0MeG97kjScZ27bTeGFcvV8FkKPjZ-2FoqH1kMImfbfUdfZThfhJ1zjyAZlQCcDhtDoLlBQQQntQhBABIkQIWjZ5ViPiq5JfXOHxUSNRb52qo-2B5HYbq2XeSRy27Zm4d-2BQuXr-2FaAybm2MOyWfBHt-2FZYq3fvfGxpje9vu8fXq8qJGfCph7IgaVDFFh0GBnPOluf-2Ba618Cb6nuPjq0v5S0CWTkoJ" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://trk.klclick.com/ls/click?upn%3DuEJq3bjyTJkuYJR3INXIlXgfkm5HBs9sXVbh5RPEzOycBk9DP8KJU7lDTE6XB5zlA9CacGZ-2BR-2Be2cgW8qr2stxpPcIX1SqDbPEKel08zL3t-2BZFOVNmD5j1R1MPnLdEb8v1LA7MXRHnCKfxYMaBoiFSP3-2BMYeu1DRDhSRkQ8NWIK2kRpjmK-2FjRY-2FrmkGno7e4PICAXHXoe-2BlYAg-2FqlSjolyg-2F8pxrB6JEUj81q3zHgBXOgmGcpgbfPfK5ElShWm4fxoPYJbplPu55nGt-2BY7HPdw-3D-3DhYof_RwkSJRtVnVtCbVHovQZvrVnmAGWb8CnlQxqWIxU7wzMtD-2FWKJ297-2BwH-2BWb70WmVm-2FHyZUj3qSxrSmkkGeQ99O0YSj29Niy5h-2BVopC8PZTYVN1n0lz-2FHj2LlQQnyIX1Q7iBbG8h8TFmW7JFeINO7-2Bcd1Aibbq-2FnoXKqY-2FbgPTzcUBv3n54zNJ5VjItjzJJSNUD9XsOWIonkgbYAvChhH29k5TlCuW1oovgyXPaDLCpG0MeG97kjScZ27bTeGFcvV8FkKPjZ-2FoqH1kMImfbfUdfZThfhJ1zjyAZlQCcDhtDoLlBQQQntQhBABIkQIWjZ5ViPiq5JfXOHxUSNRb52qo-2B5HYbq2XeSRy27Zm4d-2BQuXr-2FaAybm2MOyWfBHt-2FZYq3fvfGxpje9vu8fXq8qJGfCph7IgaVDFFh0GBnPOluf-2Ba618Cb6nuPjq0v5S0CWTkoJ&amp;source=gmail&amp;ust=1672427197814000&amp;usg=AOvVaw0o8WrBZ2Y-ED9Yfff87QkX"><img alt="youtube" src="https://ci6.googleusercontent.com/proxy/3-rTbN_P5fh1gHDo7xwgl54RM5PYSzMMtRw978STXjm2GySAoTD-OeGgHlzvz7waVMevkoVJZDLJWN6BuDgqiPbfnHAHrRryA7EdbS7833saqt7mYgxfLrE7TBTUOFGZhBs7ihcKOB_ewUgSPgaLHF0UbVQb_KdE1_y2=s0-d-e1-ft#https://d3k81ch9hvuctc.cloudfront.net/company/SzLFFq/images/af705a8d-127a-4268-a872-d4de7e5f38ca.png?v=0" style="width:35pxpx;max-width:100%;display:block" width="35" class="CToWUd" data-bit="iit"></a>
      </td>
      </tr>
      </tbody>
      </table>
      
      <table align="left" border="0" cellpadding="0" cellspacing="0">
      <tbody>
      <tr>
      <td align="center" valign="top">
      <a href="https://trk.klclick.com/ls/click?upn=uEJq3bjyTJkuYJR3INXIlUMDwBT6rbn9A5EpMxsvqwb1-2BPAjHEd7KpWMC5zRTlUVhzDv54JuMhBRf2x1FQecMS6j9velPaAN-2BlPRaDB8tFyRKR2gmeTbUzcURAc3WBbyqOuyHXDVY0amqSzW8jvUekiTOZ6GMtsX2NBo9kwgvZxEy5KL3bWhNRxPiEBY4Qp0C6Amd86sHmBWmjcWdeBeLxhJ330Cvhe-2Bbue-2B-2B7Ml8c8azjf88-2FcU89wWIsImK2Qlrd0h_RwkSJRtVnVtCbVHovQZvrVnmAGWb8CnlQxqWIxU7wzMtD-2FWKJ297-2BwH-2BWb70WmVm-2FHyZUj3qSxrSmkkGeQ99O0YSj29Niy5h-2BVopC8PZTYVN1n0lz-2FHj2LlQQnyIX1Q7iBbG8h8TFmW7JFeINO7-2Bcd1Aibbq-2FnoXKqY-2FbgPTzcUBv3n54zNJ5VjItjzJJSNUD9XsOWIonkgbYAvChhH29k5TlCuW1oovgyXPaDLCpG0MeG97kjScZ27bTeGFcvV8rokM0IkvpRveLkZyF7n1-2FkpPHdztlhSU-2FwvSEA9udjTODWeM2wkkJ5r8HsVAFObJeffYb-2BRDpCa2zQ05wCKjDXtVxk2-2Bgrac3RpbRy-2B6jAfUT-2BspDHvjhZ47uyviqHbr6LM0ac-2F8JF507YWVmkNB9m7iTvnUFvCD0aw9kOoI-2F5lnY8EhJ7ID5GBMkqHek-2BRr" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://trk.klclick.com/ls/click?upn%3DuEJq3bjyTJkuYJR3INXIlUMDwBT6rbn9A5EpMxsvqwb1-2BPAjHEd7KpWMC5zRTlUVhzDv54JuMhBRf2x1FQecMS6j9velPaAN-2BlPRaDB8tFyRKR2gmeTbUzcURAc3WBbyqOuyHXDVY0amqSzW8jvUekiTOZ6GMtsX2NBo9kwgvZxEy5KL3bWhNRxPiEBY4Qp0C6Amd86sHmBWmjcWdeBeLxhJ330Cvhe-2Bbue-2B-2B7Ml8c8azjf88-2FcU89wWIsImK2Qlrd0h_RwkSJRtVnVtCbVHovQZvrVnmAGWb8CnlQxqWIxU7wzMtD-2FWKJ297-2BwH-2BWb70WmVm-2FHyZUj3qSxrSmkkGeQ99O0YSj29Niy5h-2BVopC8PZTYVN1n0lz-2FHj2LlQQnyIX1Q7iBbG8h8TFmW7JFeINO7-2Bcd1Aibbq-2FnoXKqY-2FbgPTzcUBv3n54zNJ5VjItjzJJSNUD9XsOWIonkgbYAvChhH29k5TlCuW1oovgyXPaDLCpG0MeG97kjScZ27bTeGFcvV8rokM0IkvpRveLkZyF7n1-2FkpPHdztlhSU-2FwvSEA9udjTODWeM2wkkJ5r8HsVAFObJeffYb-2BRDpCa2zQ05wCKjDXtVxk2-2Bgrac3RpbRy-2B6jAfUT-2BspDHvjhZ47uyviqHbr6LM0ac-2F8JF507YWVmkNB9m7iTvnUFvCD0aw9kOoI-2F5lnY8EhJ7ID5GBMkqHek-2BRr&amp;source=gmail&amp;ust=1672427197814000&amp;usg=AOvVaw05UEaZ_BCe3z7S76cxtubJ"><img alt="tiktok" src="https://ci5.googleusercontent.com/proxy/ltmLX5LBkb0Q1CoBD1lZaVlXytsATVVZhXlp9HhJEBBeRLZrA_Xe4hcS395nmL_8nDKv3Cebk_gLv7xDHVdeYAtLfhPe1rKQaOKuJPeFGUTE-zSKN18ryrba8ZKx4rPEOPRP-YIjgFwholAcPti2EKbLtN2X5mpnl8fR=s0-d-e1-ft#https://d3k81ch9hvuctc.cloudfront.net/company/SzLFFq/images/0c2f5828-967c-4058-aed6-37793cef1726.png?v=0" style="width:30pxpx;max-width:100%;display:block" width="30" class="CToWUd" data-bit="iit"></a>
      </td>
      </tr>
      </tbody>
      </table>
      
      </td>
      </tr>
      </tbody>
      </table>
      </td>
      </tr>
      </tbody>
      </table>
      </td>
      </tr>
      </tbody>
      </table>
      </td>
      </tr>
      </tbody>
      </table>
      <table border="0" cellpadding="0" cellspacing="0" width="100%">
      <tbody>
      <tr>
      <td class="m_3734019650888846141kmTextBlockInner" style="background-color:#000" valign="top">
      <table align="left" border="0" cellpadding="0" cellspacing="0" class="m_3734019650888846141kmTextContentContainer" width="100%">
      <tbody>
      <tr>
      <td class="m_3734019650888846141kmTextContent" style="padding-top:9px;padding-bottom:9px;padding-left:18px;padding-right:18px;text-align:center;color:#fff" valign="top">
      <span style="font-size:12px">Sent and printed with love from the US, UK and EU</span>
      </td>
      </tr>
      </tbody>
      </table>
      </td>
      </tr>
      </tbody>
      </table>
      <table border="0" cellpadding="0" cellspacing="0" style="min-width:100%" width="100%">
      <tbody>
      <tr>
      <td style="padding:0px;padding-right:9;padding-left:9" valign="top">
      <table align="left" border="0" cellpadding="0" cellspacing="0" style="min-width:100%" width="100%">
      <tbody>
      <tr>
      <td class="m_3734019650888846141kmImageContent" style="padding:0" valign="top">
      <a href="https://trk.klclick.com/ls/click?upn=uEJq3bjyTJkuYJR3INXIlaR7UH-2BtWEQm5BnymlpMMkumRCyU-2BgIC9tWhemwM472ZhQF31F-2FqTxM4PdMRLmiGOW1y4I6R8Nj1n0jDuoxF-2FjTb9UixiYSzYtOBW22yu-2BT8fpZm56f0sEHU4lNN69gxhpnBE7UNDtwR4o2t3hbAiseXrEB99C5QXylZr332B9ha8mtPZZgH-2BuqxmZANb70Z-2BcNcY-2Fth49ml8xey0WVgorjMnCAgxbBSC8PJI0JrFKZnhw35_RwkSJRtVnVtCbVHovQZvrVnmAGWb8CnlQxqWIxU7wzMtD-2FWKJ297-2BwH-2BWb70WmVm-2FHyZUj3qSxrSmkkGeQ99O0YSj29Niy5h-2BVopC8PZTYVN1n0lz-2FHj2LlQQnyIX1Q7iBbG8h8TFmW7JFeINO7-2Bcd1Aibbq-2FnoXKqY-2FbgPTzcUBv3n54zNJ5VjItjzJJSNUD9XsOWIonkgbYAvChhH29k5TlCuW1oovgyXPaDLCpG0MeG97kjScZ27bTeGFcvV8QdBSmFIJdNtq-2B8zvni4HpNLKkCOnyDzEEEphBOZuLc92oTvkoNoyE0Wkr-2FD0CyW8pZYwpqjXjJeMQIDPdPYaojWLRBYTZh57u5O14y8d918pk4uYoJKN9hUSHBhCK7u1oBCT-2BiPt-2BBRvZs8Rzk0d6zsa38yhllNzS9qFb0NBf8u1oVsrWl6f0WDcTIzMHFMx" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://trk.klclick.com/ls/click?upn%3DuEJq3bjyTJkuYJR3INXIlaR7UH-2BtWEQm5BnymlpMMkumRCyU-2BgIC9tWhemwM472ZhQF31F-2FqTxM4PdMRLmiGOW1y4I6R8Nj1n0jDuoxF-2FjTb9UixiYSzYtOBW22yu-2BT8fpZm56f0sEHU4lNN69gxhpnBE7UNDtwR4o2t3hbAiseXrEB99C5QXylZr332B9ha8mtPZZgH-2BuqxmZANb70Z-2BcNcY-2Fth49ml8xey0WVgorjMnCAgxbBSC8PJI0JrFKZnhw35_RwkSJRtVnVtCbVHovQZvrVnmAGWb8CnlQxqWIxU7wzMtD-2FWKJ297-2BwH-2BWb70WmVm-2FHyZUj3qSxrSmkkGeQ99O0YSj29Niy5h-2BVopC8PZTYVN1n0lz-2FHj2LlQQnyIX1Q7iBbG8h8TFmW7JFeINO7-2Bcd1Aibbq-2FnoXKqY-2FbgPTzcUBv3n54zNJ5VjItjzJJSNUD9XsOWIonkgbYAvChhH29k5TlCuW1oovgyXPaDLCpG0MeG97kjScZ27bTeGFcvV8QdBSmFIJdNtq-2B8zvni4HpNLKkCOnyDzEEEphBOZuLc92oTvkoNoyE0Wkr-2FD0CyW8pZYwpqjXjJeMQIDPdPYaojWLRBYTZh57u5O14y8d918pk4uYoJKN9hUSHBhCK7u1oBCT-2BiPt-2BBRvZs8Rzk0d6zsa38yhllNzS9qFb0NBf8u1oVsrWl6f0WDcTIzMHFMx&amp;source=gmail&amp;ust=1672427197814000&amp;usg=AOvVaw1NFKd-dZ21RljpNL2Rh1ro">
      <img align="left" alt="Iced Tea Aesthetics" class="m_3734019650888846141kmImage CToWUd" src="https://ci4.googleusercontent.com/proxy/V0bs-IhVHOA_ZgCjEqW69i45c5UQvgdPsAekEZffD6zUBQNssL7RDyh1aqRCGlWgkQRcEstlWR3IUP5FVWZJb_pexkRRzilqjeueDBrl22sMWtXTHFoDMfw80VtBRZm4gpAbfwvbOK3KtEmu02Hl2qp-vA9LLNA=s0-d-e1-ft#https://d3k81ch9hvuctc.cloudfront.net/company/SzLFFq/images/3e01b946-3935-464f-a245-66aebee5f2dd.png" style="max-width:1200px;padding:0;border-width:0" width="582" data-bit="iit">
      </a>
      </td>
      </tr>
      </tbody>
      </table>
      </td>
      </tr>
      </tbody>
      </table>
      <table border="0" cellpadding="0" cellspacing="0" width="100%">
      <tbody>
      <tr>
      <td class="m_3734019650888846141kmTextBlockInner" valign="top">
      <table align="left" border="0" cellpadding="0" cellspacing="0" class="m_3734019650888846141kmTextContentContainer" width="100%">
      <tbody>
      <tr>
      <td class="m_3734019650888846141kmTextContent" style="font-size:12px;color:#727272;padding-bottom:9px;text-align:center;padding-right:18px;padding-left:18px;padding-top:9px" valign="top">
      <p style="padding-bottom:0"><span style="font-size:10px">No longer want to receive these emails? <a style="color:#f80012;font-weight:normal;text-decoration:underline" href="https://trk.klclick.com/ls/click?upn=uEJq3bjyTJkuYJR3INXIlZMsaFWxUKTiLMZx4-2BP3u-2BMbqDu7l5cJw3B69r2iiqcoqteNOKgjERKwe-2FF-2B6vtVArZOh6svzXOZxCEwqcPnduCeR9NO-2Fm8UiO4jIommmXPoHVuOXw6BWrMSOKG3Feu8EdmzeGzQfSRFeAamn-2BczMD1Zd1p9td4CprSKpTGklb6wkxWqKp2geIEEnBxK8kUhIdyVnqFTE5kc4Hz0uGzo-2BXFQRiwL4CkxVdWgctU22sWOPd3s_RwkSJRtVnVtCbVHovQZvrVnmAGWb8CnlQxqWIxU7wzMtD-2FWKJ297-2BwH-2BWb70WmVm-2FHyZUj3qSxrSmkkGeQ99O0YSj29Niy5h-2BVopC8PZTYVN1n0lz-2FHj2LlQQnyIX1Q7iBbG8h8TFmW7JFeINO7-2Bcd1Aibbq-2FnoXKqY-2FbgPTzcUBv3n54zNJ5VjItjzJJSNUD9XsOWIonkgbYAvChhH29k5TlCuW1oovgyXPaDLCpG0MeG97kjScZ27bTeGFcvV8P5I2Rtm-2FHE42o9cyX0AG1HLIRSWnqBTnyWProiQ1qvEql5wzYJWsTQxN8cPJ-2B-2By-2FTCxx7fLsfhH9z4dpCpWAGSF2GUWbIuPxt-2FIe7LAnFJbta2EFImN-2FJRHoCLWN8V2-2FogZK7zdZ-2B0dhFtfikovAE-2FLrEtIAVGgvzV2IZFGlyfPF-2F1c4XdH7yGEHMyPe0H7n" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://trk.klclick.com/ls/click?upn%3DuEJq3bjyTJkuYJR3INXIlZMsaFWxUKTiLMZx4-2BP3u-2BMbqDu7l5cJw3B69r2iiqcoqteNOKgjERKwe-2FF-2B6vtVArZOh6svzXOZxCEwqcPnduCeR9NO-2Fm8UiO4jIommmXPoHVuOXw6BWrMSOKG3Feu8EdmzeGzQfSRFeAamn-2BczMD1Zd1p9td4CprSKpTGklb6wkxWqKp2geIEEnBxK8kUhIdyVnqFTE5kc4Hz0uGzo-2BXFQRiwL4CkxVdWgctU22sWOPd3s_RwkSJRtVnVtCbVHovQZvrVnmAGWb8CnlQxqWIxU7wzMtD-2FWKJ297-2BwH-2BWb70WmVm-2FHyZUj3qSxrSmkkGeQ99O0YSj29Niy5h-2BVopC8PZTYVN1n0lz-2FHj2LlQQnyIX1Q7iBbG8h8TFmW7JFeINO7-2Bcd1Aibbq-2FnoXKqY-2FbgPTzcUBv3n54zNJ5VjItjzJJSNUD9XsOWIonkgbYAvChhH29k5TlCuW1oovgyXPaDLCpG0MeG97kjScZ27bTeGFcvV8P5I2Rtm-2FHE42o9cyX0AG1HLIRSWnqBTnyWProiQ1qvEql5wzYJWsTQxN8cPJ-2B-2By-2FTCxx7fLsfhH9z4dpCpWAGSF2GUWbIuPxt-2FIe7LAnFJbta2EFImN-2FJRHoCLWN8V2-2FogZK7zdZ-2B0dhFtfikovAE-2FLrEtIAVGgvzV2IZFGlyfPF-2F1c4XdH7yGEHMyPe0H7n&amp;source=gmail&amp;ust=1672427197814000&amp;usg=AOvVaw2Kuu8IG4DDcHjaW3ke-aaD">Unsubscribe</a>.<br>
      Iced Tea Aesthetics 28 Murchison Way Melbourne, Victoria 3074</span></p>
      </td>
      </tr>
      </tbody>
      </table>
      </td>
      </tr>
      </tbody>
      </table>
      </td>
      </tr>
      </tbody>
      </table>
      </td>
      </tr>
      </tbody></table>
      
      </div>
      </div>
      <div style="display:none!important;font-size:1px;color:#ffffff;line-height:1px;max-height:0px;max-width:0px;opacity:0;overflow:hidden">‌</div>
      
      
      </td>

      `,
      isRead: false,
      sentAt: Date.now() - 50000,
      to: loggedinUser.email,
      isStared: true,
      status: 'inbox',
    },
    {
      id: 'e107',
      sender: 'Google Flights',
      from: 'noreply-travel@google.com',
      subject: `הטיסה תל אביב – לונדון שבמעקב שלך כבר לא זמינה`,
      body: `
              
      <div style="background:#fff"><table align="center" cellpadding="0" cellspacing="0" id="m_4112660150765021620table_email_content" role="presentation" style="border:1px solid #dadce0;min-width:348px;width:100%;table-layout:fixed;background-color:#fff;margin:0 auto;padding:0"><tbody><tr><td><table cellpadding="0" cellspacing="0" id="m_4112660150765021620table_email_header" role="presentation" style="background-color:#fff;border:0;margin:0;min-width:332px;text-align:center;border-bottom:1px solid #dadce0;width:100%"><tbody><tr style="height:76px"><td valign="middle" style="vertical-align:middle;padding-top:10px;font-family:Roboto,Arial,sans-serif"><img alt="" src="https://ci5.googleusercontent.com/proxy/nqhYjTluY2Wjmnwid9OT8KybBC3A-YNEYak3MqAEiuk-Hb_6xYr37TgqHFOzECL34YjJr89KoNjk-lIPiTqOu2EFeNOY9NhnzCtprrqPc_2z6vg_0xZkQVE=s0-d-e1-ft#https://www.gstatic.com/travel-booking/2x/google_flights_logo_28dp.png" style="height:28px;max-height:28px" class="CToWUd" data-bit="iit"></td></tr></tbody></table><table align="center" cellpadding="0" cellspacing="0" id="m_4112660150765021620table_email_body" role="presentation" style="margin:0 auto;max-width:600px;padding:50px 20px 20px"><tbody><tr><td align="center"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="background-color:#fff;max-width:600px;min-width:332px;border:0"><tbody><tr><td rowspan="3"></td><td></td><td rowspan="3"></td></tr><tr><td><div><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="min-width:300px;max-width:600px"><tbody><tr><td style="color:#222;font-family:Roboto,Arial,sans-serif;font-size:20px;font-weight:400;margin:0;padding-top:19px">שלום,</td></tr><tr><td style="color:#222;font-family:Roboto,Arial,sans-serif;font-size:14px;font-weight:400;line-height:24px"><div><p style="color:#222;font-family:Roboto,Helvetica,Arial,sans-serif;font-size:14px;margin:16px 0 24px 0">הטיסה שאתה עוקב אחריה כבר לא זמינה. ייתכן שחברת התעופה עדכנה את לוח זמני הטיסות שלה, או שהטיסה כבר מלאה. הנה כמה טיסות חלופיות.</p><table bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-bottom-left-radius:3px;border-bottom-right-radius:0;border-color:#f0f0f0 #f0f0f0 #e0e0e0;border-style:solid;border-width:1px;background-color:#fff;padding:0;border-spacing:0;max-width:600px;min-width:332px;margin:0;width:100%"><tbody><tr><td colspan="4" style="color:#000;font-family:Roboto,Arial,sans-serif;font-size:16px;font-weight:400;line-height:24px;margin:4px 0 14px;padding:13px 22px 13px 17px"><a href="https://notifications.google.com/g/p/AM0OveoxVmLTdO0LbRVfBlu_NXl8bTR6IVp9HMK6rDO_t8cKQHeeHtCDJBwyVSc6LiBNkhwTcr3Il9b-AOSUYR3Qjr_IOo5DNDYnjQsceLolzF0doYuB3oo4If78fNooC_NzrsjOaCqUfy0757eBAwWKbmKBbJL1Lrt9XjeRLKHNpXEgcahQptfjQ_0_DfY5_i0rV_lk2LUJHrYHxARq5QI2EE9sMTeTs81CmE_sW7nVjvGoa2JZSsRIlD5h8o8kGW0Az8AFAqqUjW7iDallSoE7tmakPW4fqCearjj9IVYgXdU-GuY7YeFnk41U-iIt9jDvkMHEHuejioxaNEs0Wq_wBR_tYu4CO9C2Pi7npRmhvrYgwGJVsTOj2gWS4IH5w_VQ4mPTpVclnOb3lXfHCDWeQdvBx9pYQgNfApxzLyNp45QdBPFGiSG9uxww91ubAhITAK0xOVJ5yAi1-WM5VBJDUOnD3W5kYT-aJv86NsMFl7nV9Qfa1kW8NxtsFetQMzDWkyjM6LAMIToblPU1pY6K2izC7UxjaU5XtuYA1eeVVpfh96_0dukRkgHJVS5RrhjYzyJJXs23mWA--tKJzB-4tizXZEDcpXCqMSw8tV5u7hBrHJICmh6fRqWR2x3Rkzg_Ndv5kLISH2NJ7Kc4cEyiWmQ8_ML6WwPnGyWracjGyek27ktEwmhT_rU__J8AtkX0svnkXc6jQFhs7AY0p9Dz_8Zo9RBr2c01XkoAQ_MIDUsgagyvwEAGw_k94WOWiSkGuB7ZkmR6IcDnhskI9zPK5JacV3iKSA8Ljt6a-LJF2Km7egwh13dZGFwzdVdviKUCGs14FyATYH95XzKKLT0_ilrgoSh2KkefKYKMmB0bOGw" style="text-decoration:none" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://notifications.google.com/g/p/AM0OveoxVmLTdO0LbRVfBlu_NXl8bTR6IVp9HMK6rDO_t8cKQHeeHtCDJBwyVSc6LiBNkhwTcr3Il9b-AOSUYR3Qjr_IOo5DNDYnjQsceLolzF0doYuB3oo4If78fNooC_NzrsjOaCqUfy0757eBAwWKbmKBbJL1Lrt9XjeRLKHNpXEgcahQptfjQ_0_DfY5_i0rV_lk2LUJHrYHxARq5QI2EE9sMTeTs81CmE_sW7nVjvGoa2JZSsRIlD5h8o8kGW0Az8AFAqqUjW7iDallSoE7tmakPW4fqCearjj9IVYgXdU-GuY7YeFnk41U-iIt9jDvkMHEHuejioxaNEs0Wq_wBR_tYu4CO9C2Pi7npRmhvrYgwGJVsTOj2gWS4IH5w_VQ4mPTpVclnOb3lXfHCDWeQdvBx9pYQgNfApxzLyNp45QdBPFGiSG9uxww91ubAhITAK0xOVJ5yAi1-WM5VBJDUOnD3W5kYT-aJv86NsMFl7nV9Qfa1kW8NxtsFetQMzDWkyjM6LAMIToblPU1pY6K2izC7UxjaU5XtuYA1eeVVpfh96_0dukRkgHJVS5RrhjYzyJJXs23mWA--tKJzB-4tizXZEDcpXCqMSw8tV5u7hBrHJICmh6fRqWR2x3Rkzg_Ndv5kLISH2NJ7Kc4cEyiWmQ8_ML6WwPnGyWracjGyek27ktEwmhT_rU__J8AtkX0svnkXc6jQFhs7AY0p9Dz_8Zo9RBr2c01XkoAQ_MIDUsgagyvwEAGw_k94WOWiSkGuB7ZkmR6IcDnhskI9zPK5JacV3iKSA8Ljt6a-LJF2Km7egwh13dZGFwzdVdviKUCGs14FyATYH95XzKKLT0_ilrgoSh2KkefKYKMmB0bOGw&amp;source=gmail&amp;ust=1672421523634000&amp;usg=AOvVaw3ED0mG5MHjkvPZehh5NL8l"><div style="font-size:16px;color:#222;font-weight:700"> מתל אביב ללונדון </div><div style="font-size:14px;color:#222;white-space:nowrap">יום ג׳, 23 במאי–יום ג׳, 30 במאי</div><div style="font-size:14px;color:#7f7f7f"><span>הלוך ושוב · </span><span>מבוגר אחד</span></div></a></td></tr><tr><td colspan="4"><table bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" role="presentation" style="max-width:600px;min-width:332px;width:100%;margin:0"><tbody><tr><td colspan="4" style="border-top:#e7e5e5 solid 1px;line-height:0">&nbsp;</td></tr><tr><td colspan="4" style="font-family:Roboto,Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height:24px;margin:4px 0 14px 0;padding:13px 22px 13px 17px;color:#e70024">כבר לא זמינות</td></tr><tr><td style="min-width:20px;width:20px"></td><td colspan="3" style="border-top:#e7e5e5 solid 1px;line-height:0">&nbsp;</td></tr><tr><td style="min-width:20px;width:20px"></td><td valign="middle" style="text-align:left;padding:18px 5px 18px 0;width:32px"><a href="https://notifications.google.com/g/p/AM0OveoaSl9obtDxewBPune9TYiCyKxY_TlicoV5mCFL6OiW9HsW3kuMjgkADSux8lmmUK8WaubOHsH148FL9CBz8hmI2mXMZlkJc5Bt2_6w2Ub6y692sb5bsk5KEmViYVwq7b9fhyaKpKmJJmNKjHmNw9qHHPnBvyGPdHCow-aVCkYHzEiYrP1gW3dyWbhuY1p_mNoHW86lOwfcZjQ6S6fNOogdg4WcCcGrU_Zfn1Zb_chBq_j1PaiZTLJOqrK9ZsB6D03AI3gxbGmElGjJzehBpo0I0RJKoOKa6rmNU6CwytpRvrXHs04GodfFLIzSxTyHknbDWXdbexh13SZNI8CkY1qOP0GVGRDp4fB-lQenMpddh2296R_3TPeuthkAiP4gn2o2alRFnYCZf1YhzliIUYuqg4u-LkyU1sU69cnyUfILhqjDkI-3gARVv-VyPb7598yBLpqMlDuvyw2tvewLpxxZmYEIae852HwlT5dakoiSsKdCJFNixKANKNPxt5D6-6HZGSKRZ1NyMhRqYbD6m_mPoTZaxWvRFdZwpGllJDvkZ9M1djzD0nRO3bCxtWN7Ar2KsPyhBcwIHpNi7QN7ea4PuWH8m-gzOUrhOWrqv87-TqHJgr0c69anP34MfOdjh1WhtbymErzWyg2dxoSCpnyV9JxAPx1SsJvuU3QO38RLCUA6iet3rMxyGoM52uj7GEK8bsBQRb77YqD5jhQe5z_FPJPyKGMrSyckrRSIJUGrxfit-rHCeA" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://notifications.google.com/g/p/AM0OveoaSl9obtDxewBPune9TYiCyKxY_TlicoV5mCFL6OiW9HsW3kuMjgkADSux8lmmUK8WaubOHsH148FL9CBz8hmI2mXMZlkJc5Bt2_6w2Ub6y692sb5bsk5KEmViYVwq7b9fhyaKpKmJJmNKjHmNw9qHHPnBvyGPdHCow-aVCkYHzEiYrP1gW3dyWbhuY1p_mNoHW86lOwfcZjQ6S6fNOogdg4WcCcGrU_Zfn1Zb_chBq_j1PaiZTLJOqrK9ZsB6D03AI3gxbGmElGjJzehBpo0I0RJKoOKa6rmNU6CwytpRvrXHs04GodfFLIzSxTyHknbDWXdbexh13SZNI8CkY1qOP0GVGRDp4fB-lQenMpddh2296R_3TPeuthkAiP4gn2o2alRFnYCZf1YhzliIUYuqg4u-LkyU1sU69cnyUfILhqjDkI-3gARVv-VyPb7598yBLpqMlDuvyw2tvewLpxxZmYEIae852HwlT5dakoiSsKdCJFNixKANKNPxt5D6-6HZGSKRZ1NyMhRqYbD6m_mPoTZaxWvRFdZwpGllJDvkZ9M1djzD0nRO3bCxtWN7Ar2KsPyhBcwIHpNi7QN7ea4PuWH8m-gzOUrhOWrqv87-TqHJgr0c69anP34MfOdjh1WhtbymErzWyg2dxoSCpnyV9JxAPx1SsJvuU3QO38RLCUA6iet3rMxyGoM52uj7GEK8bsBQRb77YqD5jhQe5z_FPJPyKGMrSyckrRSIJUGrxfit-rHCeA&amp;source=gmail&amp;ust=1672421523634000&amp;usg=AOvVaw0-VXxFPNLRcBQAH2oHxgjj"><img alt="-1" src="https://ci3.googleusercontent.com/proxy/QHDzW4NjaS0LGtOAgwFLNNp-XlEppZxVyGdeI5OTZsQXMufdJyp2r2cbz4JU2D9mH2klWSgwqDB8e1MH6dALrCMkQ3xLEZftrPihqw=s0-d-e1-ft#https://www.gstatic.com/flights/airline_logos/70px/W9.png" style="height:35px;max-height:35px" class="CToWUd" data-bit="iit"></a></td><td style="font-family:Roboto,Arial,sans-serif;padding:18px 5px 18px 20px;line-height:24px"><a href="https://notifications.google.com/g/p/AM0OveoaSl9obtDxewBPune9TYiCyKxY_TlicoV5mCFL6OiW9HsW3kuMjgkADSux8lmmUK8WaubOHsH148FL9CBz8hmI2mXMZlkJc5Bt2_6w2Ub6y692sb5bsk5KEmViYVwq7b9fhyaKpKmJJmNKjHmNw9qHHPnBvyGPdHCow-aVCkYHzEiYrP1gW3dyWbhuY1p_mNoHW86lOwfcZjQ6S6fNOogdg4WcCcGrU_Zfn1Zb_chBq_j1PaiZTLJOqrK9ZsB6D03AI3gxbGmElGjJzehBpo0I0RJKoOKa6rmNU6CwytpRvrXHs04GodfFLIzSxTyHknbDWXdbexh13SZNI8CkY1qOP0GVGRDp4fB-lQenMpddh2296R_3TPeuthkAiP4gn2o2alRFnYCZf1YhzliIUYuqg4u-LkyU1sU69cnyUfILhqjDkI-3gARVv-VyPb7598yBLpqMlDuvyw2tvewLpxxZmYEIae852HwlT5dakoiSsKdCJFNixKANKNPxt5D6-6HZGSKRZ1NyMhRqYbD6m_mPoTZaxWvRFdZwpGllJDvkZ9M1djzD0nRO3bCxtWN7Ar2KsPyhBcwIHpNi7QN7ea4PuWH8m-gzOUrhOWrqv87-TqHJgr0c69anP34MfOdjh1WhtbymErzWyg2dxoSCpnyV9JxAPx1SsJvuU3QO38RLCUA6iet3rMxyGoM52uj7GEK8bsBQRb77YqD5jhQe5z_FPJPyKGMrSyckrRSIJUGrxfit-rHCeA" style="text-decoration:none" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://notifications.google.com/g/p/AM0OveoaSl9obtDxewBPune9TYiCyKxY_TlicoV5mCFL6OiW9HsW3kuMjgkADSux8lmmUK8WaubOHsH148FL9CBz8hmI2mXMZlkJc5Bt2_6w2Ub6y692sb5bsk5KEmViYVwq7b9fhyaKpKmJJmNKjHmNw9qHHPnBvyGPdHCow-aVCkYHzEiYrP1gW3dyWbhuY1p_mNoHW86lOwfcZjQ6S6fNOogdg4WcCcGrU_Zfn1Zb_chBq_j1PaiZTLJOqrK9ZsB6D03AI3gxbGmElGjJzehBpo0I0RJKoOKa6rmNU6CwytpRvrXHs04GodfFLIzSxTyHknbDWXdbexh13SZNI8CkY1qOP0GVGRDp4fB-lQenMpddh2296R_3TPeuthkAiP4gn2o2alRFnYCZf1YhzliIUYuqg4u-LkyU1sU69cnyUfILhqjDkI-3gARVv-VyPb7598yBLpqMlDuvyw2tvewLpxxZmYEIae852HwlT5dakoiSsKdCJFNixKANKNPxt5D6-6HZGSKRZ1NyMhRqYbD6m_mPoTZaxWvRFdZwpGllJDvkZ9M1djzD0nRO3bCxtWN7Ar2KsPyhBcwIHpNi7QN7ea4PuWH8m-gzOUrhOWrqv87-TqHJgr0c69anP34MfOdjh1WhtbymErzWyg2dxoSCpnyV9JxAPx1SsJvuU3QO38RLCUA6iet3rMxyGoM52uj7GEK8bsBQRb77YqD5jhQe5z_FPJPyKGMrSyckrRSIJUGrxfit-rHCeA&amp;source=gmail&amp;ust=1672421523634000&amp;usg=AOvVaw0-VXxFPNLRcBQAH2oHxgjj"><div style="font-size:16px;color:#222;white-space:nowrap">21:55 – 1:25<sup>+1</sup></div><div style="font-size:14px;color:#7f7f7f"><span style="white-space:nowrap">Wizz Air · </span><span style="white-space:nowrap">טיסה ישירה · </span><span style="white-space:nowrap">TLV–LTN</span></div><div style="font-size:11px;color:#7f7f7f"></div></a></td><td style="font-family:Roboto,Arial,sans-serif;font-size:14px;padding:26px 25px 18px 10px;text-align:right;vertical-align:top;line-height:24px"><a href="https://notifications.google.com/g/p/AM0OveoaSl9obtDxewBPune9TYiCyKxY_TlicoV5mCFL6OiW9HsW3kuMjgkADSux8lmmUK8WaubOHsH148FL9CBz8hmI2mXMZlkJc5Bt2_6w2Ub6y692sb5bsk5KEmViYVwq7b9fhyaKpKmJJmNKjHmNw9qHHPnBvyGPdHCow-aVCkYHzEiYrP1gW3dyWbhuY1p_mNoHW86lOwfcZjQ6S6fNOogdg4WcCcGrU_Zfn1Zb_chBq_j1PaiZTLJOqrK9ZsB6D03AI3gxbGmElGjJzehBpo0I0RJKoOKa6rmNU6CwytpRvrXHs04GodfFLIzSxTyHknbDWXdbexh13SZNI8CkY1qOP0GVGRDp4fB-lQenMpddh2296R_3TPeuthkAiP4gn2o2alRFnYCZf1YhzliIUYuqg4u-LkyU1sU69cnyUfILhqjDkI-3gARVv-VyPb7598yBLpqMlDuvyw2tvewLpxxZmYEIae852HwlT5dakoiSsKdCJFNixKANKNPxt5D6-6HZGSKRZ1NyMhRqYbD6m_mPoTZaxWvRFdZwpGllJDvkZ9M1djzD0nRO3bCxtWN7Ar2KsPyhBcwIHpNi7QN7ea4PuWH8m-gzOUrhOWrqv87-TqHJgr0c69anP34MfOdjh1WhtbymErzWyg2dxoSCpnyV9JxAPx1SsJvuU3QO38RLCUA6iet3rMxyGoM52uj7GEK8bsBQRb77YqD5jhQe5z_FPJPyKGMrSyckrRSIJUGrxfit-rHCeA" style="text-decoration:none" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://notifications.google.com/g/p/AM0OveoaSl9obtDxewBPune9TYiCyKxY_TlicoV5mCFL6OiW9HsW3kuMjgkADSux8lmmUK8WaubOHsH148FL9CBz8hmI2mXMZlkJc5Bt2_6w2Ub6y692sb5bsk5KEmViYVwq7b9fhyaKpKmJJmNKjHmNw9qHHPnBvyGPdHCow-aVCkYHzEiYrP1gW3dyWbhuY1p_mNoHW86lOwfcZjQ6S6fNOogdg4WcCcGrU_Zfn1Zb_chBq_j1PaiZTLJOqrK9ZsB6D03AI3gxbGmElGjJzehBpo0I0RJKoOKa6rmNU6CwytpRvrXHs04GodfFLIzSxTyHknbDWXdbexh13SZNI8CkY1qOP0GVGRDp4fB-lQenMpddh2296R_3TPeuthkAiP4gn2o2alRFnYCZf1YhzliIUYuqg4u-LkyU1sU69cnyUfILhqjDkI-3gARVv-VyPb7598yBLpqMlDuvyw2tvewLpxxZmYEIae852HwlT5dakoiSsKdCJFNixKANKNPxt5D6-6HZGSKRZ1NyMhRqYbD6m_mPoTZaxWvRFdZwpGllJDvkZ9M1djzD0nRO3bCxtWN7Ar2KsPyhBcwIHpNi7QN7ea4PuWH8m-gzOUrhOWrqv87-TqHJgr0c69anP34MfOdjh1WhtbymErzWyg2dxoSCpnyV9JxAPx1SsJvuU3QO38RLCUA6iet3rMxyGoM52uj7GEK8bsBQRb77YqD5jhQe5z_FPJPyKGMrSyckrRSIJUGrxfit-rHCeA&amp;source=gmail&amp;ust=1672421523634000&amp;usg=AOvVaw0-VXxFPNLRcBQAH2oHxgjj"><div><div style="color:#222;font-size:14px;text-decoration:line-through">‏1,536&nbsp;‏₪</div></div></a></td></tr></tbody></table></td></tr><tr><td colspan="4"><table bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" role="presentation" style="max-width:600px;min-width:332px;width:100%;margin:0"><tbody><tr><td colspan="4" style="border-top:#e7e5e5 solid 1px;line-height:0">&nbsp;</td></tr><tr><td colspan="4" style="font-family:Roboto,Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height:24px;margin:4px 0 14px 0;padding:13px 22px 13px 17px;color:#7f7f7f">טיסות חלופיות</td></tr><tr><td style="min-width:20px;width:20px"></td><td colspan="3" style="border-top:#e7e5e5 solid 1px;line-height:0">&nbsp;</td></tr><tr><td style="min-width:20px;width:20px"></td><td valign="middle" style="text-align:left;padding:18px 5px 18px 0;width:32px"><a href="https://notifications.google.com/g/p/AM0Ovepb2k1nWZKeO9AgdmGbpF4wVfaKe4Y8z7mjtKCXqGjHoS-rqYtRxdF6cg_KmXi6ShFnBCuAdlUqiHI_AYVlyrU9MNwiwBKwEe7Xgz9KnpKcEg1V3hVaVzoRb8JUwgK0L_HtoWs7tlSj1VFTWDEXGNoLnCi1uvHF58dkgFM5G3VHZ74z46ad67DCeFifNN5sf7JNgrNO3myieOavGBbIENH1zwdPHmhEEcG7dMMlwbhY7q3LqIgg2yZ3RjtZuqqEF7GjWlcyjjmblzRBjAOzkmSeMLHfSPJ_ZjY0HSASWcaEVbncmCeGFUaONJR15e1cvQcm9iPCP4HmSgsLa6XDQxaU7QrvmgSixcEPaQLpqW9SINLatkKI0a2C1g28jw6gyQt0cot4I9GyI6AyMvF_ph0noug0zYU86ovWyMB9IcOsZxBYorW8oNtislLxAap0dryXdiVd0ZCWVxuK9cfaTaltPpW-DPrSaApKE-Gn91V0MsJDnpWALmnF4BI2OvBVNpRkoQLihBMX0FQyVSgorr21TFu6PZGVfGn2dwWwvupLIL-ayZhnccxMCl9Bo7c5Wmwa7538TwW2tDi-KeC7brma1LaCAxQOzYUlYyDsYmpWib8u13JbXqcLDWj8SqVJMzCa1J3Y0UYV698a6DtM9_Hf4htbmsFteYLaZ-WgEvhr_1yp3w5DYFQocVsH6pASdzpBt5Swn2OMZTAkXFX_rnQbHetQjXOzRsbyO_TTbeYo8qNZVKEx8bT5gLarrm_TFleNJoZm0u3vQzRG68uP8sKRdCcu2H98RCvKJsRx7wqunicdnGpSRJtTpCbw8i_wozush4V21756zdpQKUeZzJjol9biuirU00CBd5ZiYzeOJ8IzLl6DUyJc3tZbzMamYdPrUE6JHjMo213wSvVqMacxh2VXo-YOXdRDvBkK" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://notifications.google.com/g/p/AM0Ovepb2k1nWZKeO9AgdmGbpF4wVfaKe4Y8z7mjtKCXqGjHoS-rqYtRxdF6cg_KmXi6ShFnBCuAdlUqiHI_AYVlyrU9MNwiwBKwEe7Xgz9KnpKcEg1V3hVaVzoRb8JUwgK0L_HtoWs7tlSj1VFTWDEXGNoLnCi1uvHF58dkgFM5G3VHZ74z46ad67DCeFifNN5sf7JNgrNO3myieOavGBbIENH1zwdPHmhEEcG7dMMlwbhY7q3LqIgg2yZ3RjtZuqqEF7GjWlcyjjmblzRBjAOzkmSeMLHfSPJ_ZjY0HSASWcaEVbncmCeGFUaONJR15e1cvQcm9iPCP4HmSgsLa6XDQxaU7QrvmgSixcEPaQLpqW9SINLatkKI0a2C1g28jw6gyQt0cot4I9GyI6AyMvF_ph0noug0zYU86ovWyMB9IcOsZxBYorW8oNtislLxAap0dryXdiVd0ZCWVxuK9cfaTaltPpW-DPrSaApKE-Gn91V0MsJDnpWALmnF4BI2OvBVNpRkoQLihBMX0FQyVSgorr21TFu6PZGVfGn2dwWwvupLIL-ayZhnccxMCl9Bo7c5Wmwa7538TwW2tDi-KeC7brma1LaCAxQOzYUlYyDsYmpWib8u13JbXqcLDWj8SqVJMzCa1J3Y0UYV698a6DtM9_Hf4htbmsFteYLaZ-WgEvhr_1yp3w5DYFQocVsH6pASdzpBt5Swn2OMZTAkXFX_rnQbHetQjXOzRsbyO_TTbeYo8qNZVKEx8bT5gLarrm_TFleNJoZm0u3vQzRG68uP8sKRdCcu2H98RCvKJsRx7wqunicdnGpSRJtTpCbw8i_wozush4V21756zdpQKUeZzJjol9biuirU00CBd5ZiYzeOJ8IzLl6DUyJc3tZbzMamYdPrUE6JHjMo213wSvVqMacxh2VXo-YOXdRDvBkK&amp;source=gmail&amp;ust=1672421523634000&amp;usg=AOvVaw2S5NL9In5q3J7LtpCqXtlP"><img alt="-1" src="https://ci6.googleusercontent.com/proxy/69A4wIykqMt_pn24c0AR2CI_NZfbfzk7HAiKE4t1VBEEMAreGFLK-HWC-WFl65ldc_k1nc539PLBxlkccTiZzG7nqVqW0OSHhahRRA=s0-d-e1-ft#https://www.gstatic.com/flights/airline_logos/70px/U2.png" style="height:35px;max-height:35px" class="CToWUd" data-bit="iit"></a></td><td style="font-family:Roboto,Arial,sans-serif;padding:18px 5px 18px 20px;line-height:24px"><a href="https://notifications.google.com/g/p/AM0Ovepb2k1nWZKeO9AgdmGbpF4wVfaKe4Y8z7mjtKCXqGjHoS-rqYtRxdF6cg_KmXi6ShFnBCuAdlUqiHI_AYVlyrU9MNwiwBKwEe7Xgz9KnpKcEg1V3hVaVzoRb8JUwgK0L_HtoWs7tlSj1VFTWDEXGNoLnCi1uvHF58dkgFM5G3VHZ74z46ad67DCeFifNN5sf7JNgrNO3myieOavGBbIENH1zwdPHmhEEcG7dMMlwbhY7q3LqIgg2yZ3RjtZuqqEF7GjWlcyjjmblzRBjAOzkmSeMLHfSPJ_ZjY0HSASWcaEVbncmCeGFUaONJR15e1cvQcm9iPCP4HmSgsLa6XDQxaU7QrvmgSixcEPaQLpqW9SINLatkKI0a2C1g28jw6gyQt0cot4I9GyI6AyMvF_ph0noug0zYU86ovWyMB9IcOsZxBYorW8oNtislLxAap0dryXdiVd0ZCWVxuK9cfaTaltPpW-DPrSaApKE-Gn91V0MsJDnpWALmnF4BI2OvBVNpRkoQLihBMX0FQyVSgorr21TFu6PZGVfGn2dwWwvupLIL-ayZhnccxMCl9Bo7c5Wmwa7538TwW2tDi-KeC7brma1LaCAxQOzYUlYyDsYmpWib8u13JbXqcLDWj8SqVJMzCa1J3Y0UYV698a6DtM9_Hf4htbmsFteYLaZ-WgEvhr_1yp3w5DYFQocVsH6pASdzpBt5Swn2OMZTAkXFX_rnQbHetQjXOzRsbyO_TTbeYo8qNZVKEx8bT5gLarrm_TFleNJoZm0u3vQzRG68uP8sKRdCcu2H98RCvKJsRx7wqunicdnGpSRJtTpCbw8i_wozush4V21756zdpQKUeZzJjol9biuirU00CBd5ZiYzeOJ8IzLl6DUyJc3tZbzMamYdPrUE6JHjMo213wSvVqMacxh2VXo-YOXdRDvBkK" style="text-decoration:none" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://notifications.google.com/g/p/AM0Ovepb2k1nWZKeO9AgdmGbpF4wVfaKe4Y8z7mjtKCXqGjHoS-rqYtRxdF6cg_KmXi6ShFnBCuAdlUqiHI_AYVlyrU9MNwiwBKwEe7Xgz9KnpKcEg1V3hVaVzoRb8JUwgK0L_HtoWs7tlSj1VFTWDEXGNoLnCi1uvHF58dkgFM5G3VHZ74z46ad67DCeFifNN5sf7JNgrNO3myieOavGBbIENH1zwdPHmhEEcG7dMMlwbhY7q3LqIgg2yZ3RjtZuqqEF7GjWlcyjjmblzRBjAOzkmSeMLHfSPJ_ZjY0HSASWcaEVbncmCeGFUaONJR15e1cvQcm9iPCP4HmSgsLa6XDQxaU7QrvmgSixcEPaQLpqW9SINLatkKI0a2C1g28jw6gyQt0cot4I9GyI6AyMvF_ph0noug0zYU86ovWyMB9IcOsZxBYorW8oNtislLxAap0dryXdiVd0ZCWVxuK9cfaTaltPpW-DPrSaApKE-Gn91V0MsJDnpWALmnF4BI2OvBVNpRkoQLihBMX0FQyVSgorr21TFu6PZGVfGn2dwWwvupLIL-ayZhnccxMCl9Bo7c5Wmwa7538TwW2tDi-KeC7brma1LaCAxQOzYUlYyDsYmpWib8u13JbXqcLDWj8SqVJMzCa1J3Y0UYV698a6DtM9_Hf4htbmsFteYLaZ-WgEvhr_1yp3w5DYFQocVsH6pASdzpBt5Swn2OMZTAkXFX_rnQbHetQjXOzRsbyO_TTbeYo8qNZVKEx8bT5gLarrm_TFleNJoZm0u3vQzRG68uP8sKRdCcu2H98RCvKJsRx7wqunicdnGpSRJtTpCbw8i_wozush4V21756zdpQKUeZzJjol9biuirU00CBd5ZiYzeOJ8IzLl6DUyJc3tZbzMamYdPrUE6JHjMo213wSvVqMacxh2VXo-YOXdRDvBkK&amp;source=gmail&amp;ust=1672421523634000&amp;usg=AOvVaw2S5NL9In5q3J7LtpCqXtlP"><div style="font-size:16px;color:#222;white-space:nowrap">20:30 – 23:55<sup></sup></div><div style="font-size:14px;color:#7f7f7f"><span style="white-space:nowrap">easyJet · </span><span style="white-space:nowrap">טיסה ישירה · </span><span style="white-space:nowrap">TLV–LTN</span></div><div style="font-size:11px;color:#7f7f7f"></div></a></td><td style="font-family:Roboto,Arial,sans-serif;font-size:14px;padding:26px 25px 18px 10px;text-align:right;vertical-align:top;line-height:24px"><a href="https://notifications.google.com/g/p/AM0Ovepb2k1nWZKeO9AgdmGbpF4wVfaKe4Y8z7mjtKCXqGjHoS-rqYtRxdF6cg_KmXi6ShFnBCuAdlUqiHI_AYVlyrU9MNwiwBKwEe7Xgz9KnpKcEg1V3hVaVzoRb8JUwgK0L_HtoWs7tlSj1VFTWDEXGNoLnCi1uvHF58dkgFM5G3VHZ74z46ad67DCeFifNN5sf7JNgrNO3myieOavGBbIENH1zwdPHmhEEcG7dMMlwbhY7q3LqIgg2yZ3RjtZuqqEF7GjWlcyjjmblzRBjAOzkmSeMLHfSPJ_ZjY0HSASWcaEVbncmCeGFUaONJR15e1cvQcm9iPCP4HmSgsLa6XDQxaU7QrvmgSixcEPaQLpqW9SINLatkKI0a2C1g28jw6gyQt0cot4I9GyI6AyMvF_ph0noug0zYU86ovWyMB9IcOsZxBYorW8oNtislLxAap0dryXdiVd0ZCWVxuK9cfaTaltPpW-DPrSaApKE-Gn91V0MsJDnpWALmnF4BI2OvBVNpRkoQLihBMX0FQyVSgorr21TFu6PZGVfGn2dwWwvupLIL-ayZhnccxMCl9Bo7c5Wmwa7538TwW2tDi-KeC7brma1LaCAxQOzYUlYyDsYmpWib8u13JbXqcLDWj8SqVJMzCa1J3Y0UYV698a6DtM9_Hf4htbmsFteYLaZ-WgEvhr_1yp3w5DYFQocVsH6pASdzpBt5Swn2OMZTAkXFX_rnQbHetQjXOzRsbyO_TTbeYo8qNZVKEx8bT5gLarrm_TFleNJoZm0u3vQzRG68uP8sKRdCcu2H98RCvKJsRx7wqunicdnGpSRJtTpCbw8i_wozush4V21756zdpQKUeZzJjol9biuirU00CBd5ZiYzeOJ8IzLl6DUyJc3tZbzMamYdPrUE6JHjMo213wSvVqMacxh2VXo-YOXdRDvBkK" style="text-decoration:none" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://notifications.google.com/g/p/AM0Ovepb2k1nWZKeO9AgdmGbpF4wVfaKe4Y8z7mjtKCXqGjHoS-rqYtRxdF6cg_KmXi6ShFnBCuAdlUqiHI_AYVlyrU9MNwiwBKwEe7Xgz9KnpKcEg1V3hVaVzoRb8JUwgK0L_HtoWs7tlSj1VFTWDEXGNoLnCi1uvHF58dkgFM5G3VHZ74z46ad67DCeFifNN5sf7JNgrNO3myieOavGBbIENH1zwdPHmhEEcG7dMMlwbhY7q3LqIgg2yZ3RjtZuqqEF7GjWlcyjjmblzRBjAOzkmSeMLHfSPJ_ZjY0HSASWcaEVbncmCeGFUaONJR15e1cvQcm9iPCP4HmSgsLa6XDQxaU7QrvmgSixcEPaQLpqW9SINLatkKI0a2C1g28jw6gyQt0cot4I9GyI6AyMvF_ph0noug0zYU86ovWyMB9IcOsZxBYorW8oNtislLxAap0dryXdiVd0ZCWVxuK9cfaTaltPpW-DPrSaApKE-Gn91V0MsJDnpWALmnF4BI2OvBVNpRkoQLihBMX0FQyVSgorr21TFu6PZGVfGn2dwWwvupLIL-ayZhnccxMCl9Bo7c5Wmwa7538TwW2tDi-KeC7brma1LaCAxQOzYUlYyDsYmpWib8u13JbXqcLDWj8SqVJMzCa1J3Y0UYV698a6DtM9_Hf4htbmsFteYLaZ-WgEvhr_1yp3w5DYFQocVsH6pASdzpBt5Swn2OMZTAkXFX_rnQbHetQjXOzRsbyO_TTbeYo8qNZVKEx8bT5gLarrm_TFleNJoZm0u3vQzRG68uP8sKRdCcu2H98RCvKJsRx7wqunicdnGpSRJtTpCbw8i_wozush4V21756zdpQKUeZzJjol9biuirU00CBd5ZiYzeOJ8IzLl6DUyJc3tZbzMamYdPrUE6JHjMo213wSvVqMacxh2VXo-YOXdRDvBkK&amp;source=gmail&amp;ust=1672421523634000&amp;usg=AOvVaw2S5NL9In5q3J7LtpCqXtlP"><div><div style="white-space:nowrap;line-height:16px;padding-bottom:4px"><span style="color:#222;font-size:16px;font-weight:700;white-space:nowrap;line-height:16px">‏962&nbsp;‏₪</span></div></div></a></td></tr><tr><td style="min-width:20px;width:20px"></td><td colspan="3" style="border-top:1px solid #e7e5e5;line-height:0">&nbsp;</td></tr><tr><td style="min-width:20px;width:20px"></td><td valign="middle" style="text-align:left;padding:18px 5px 18px 0;width:32px"><a href="https://notifications.google.com/g/p/AM0Over4TDXpCn1zX8dvhbECQrUNEOe5W06752cwNreJBh5-n0VmbIRtVedG5G1SKh3COZbPF6Tqm0X70Qfg8rrumdDpMkjCU_ASjyzdA2HV9aTVL26CVYrQBRBgE1UMK2jlM2DwwWuPbsnB8Hwjz5FzdB3qEMhAl7yPetXrBuofu31Pa4MxdO8oSjlvfClJyg7ZUhMaFRgjQ2aBKgkrbBlbD4Ect85mS-J09ny_BzCSTayNhPeDslTpOe8Cas85uZifHn9rFt9rPsPr1W54j4UNxmAM3LH8wegr1RVN3iArIu7lbeyTTmdn-dNIrMPNyg5tci0i_pEhrKA7QZ9DTkkKXFurMILzOxNGmojWd1luQYrEUQ1AKk1XTpcATv1BYaB6NFhZSSMTItofsOgE5oo1ggWN3zSeEdOIYrMYjburji0QYovPNMcw-RgMRkL5n1ZlLEE3EDF7LMP5dGsyMgauHlOWNZ_fxjFCIIgXSuGtq-0HGh_U6XnuB0pOXb41sOLZOrwbdbFn9i5G6R7Wa-CAC5K5YlKP1Jlgt_dRAzBaOGwpWhqvL6z8U-Co7FlzRDU_ZFBWNBxN2a_sBilwbP721_2V6jSC7T6iVLf0gzFU45ifgKSN4dgp44A060kFMrzsl2BZjukMo25d5m2UGkoWirhTPmPFXOL9bwkko2xFsHK2PUogffe9buymELYHsVQszPyqOzdRriXpjqAbblqBw96x-PF4fmolJn6nJI3fpqWh3NUgvapwrG8aSsJW19eHMAEoZhrh6HS-O-G5AhiXuOdqgJTicgapoEOARwTaLAxdC74VvdgQYDodjZLifFeAs8QRp9KcQxHuogce8bKWeaIcmLkg8ZBBgZziJ-h1kCbWwho4vP4JLYg3WkYZb980el5pqNi1UDTO0_EJyyiT7rO_wPTjadfIT_PnUp4" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://notifications.google.com/g/p/AM0Over4TDXpCn1zX8dvhbECQrUNEOe5W06752cwNreJBh5-n0VmbIRtVedG5G1SKh3COZbPF6Tqm0X70Qfg8rrumdDpMkjCU_ASjyzdA2HV9aTVL26CVYrQBRBgE1UMK2jlM2DwwWuPbsnB8Hwjz5FzdB3qEMhAl7yPetXrBuofu31Pa4MxdO8oSjlvfClJyg7ZUhMaFRgjQ2aBKgkrbBlbD4Ect85mS-J09ny_BzCSTayNhPeDslTpOe8Cas85uZifHn9rFt9rPsPr1W54j4UNxmAM3LH8wegr1RVN3iArIu7lbeyTTmdn-dNIrMPNyg5tci0i_pEhrKA7QZ9DTkkKXFurMILzOxNGmojWd1luQYrEUQ1AKk1XTpcATv1BYaB6NFhZSSMTItofsOgE5oo1ggWN3zSeEdOIYrMYjburji0QYovPNMcw-RgMRkL5n1ZlLEE3EDF7LMP5dGsyMgauHlOWNZ_fxjFCIIgXSuGtq-0HGh_U6XnuB0pOXb41sOLZOrwbdbFn9i5G6R7Wa-CAC5K5YlKP1Jlgt_dRAzBaOGwpWhqvL6z8U-Co7FlzRDU_ZFBWNBxN2a_sBilwbP721_2V6jSC7T6iVLf0gzFU45ifgKSN4dgp44A060kFMrzsl2BZjukMo25d5m2UGkoWirhTPmPFXOL9bwkko2xFsHK2PUogffe9buymELYHsVQszPyqOzdRriXpjqAbblqBw96x-PF4fmolJn6nJI3fpqWh3NUgvapwrG8aSsJW19eHMAEoZhrh6HS-O-G5AhiXuOdqgJTicgapoEOARwTaLAxdC74VvdgQYDodjZLifFeAs8QRp9KcQxHuogce8bKWeaIcmLkg8ZBBgZziJ-h1kCbWwho4vP4JLYg3WkYZb980el5pqNi1UDTO0_EJyyiT7rO_wPTjadfIT_PnUp4&amp;source=gmail&amp;ust=1672421523634000&amp;usg=AOvVaw0choXJKuzoKmZiou7Mfm9u"><img alt="-1" src="https://ci3.googleusercontent.com/proxy/UM2NFLXebjVkCxIDDpJORZv77eTlGrvF2_0obDpMchVp9brUmTu6mxu5EjNbTH6wN3OecwRd9lLn2wm7p-HiTaaAOFyfzTXEaik7nw=s0-d-e1-ft#https://www.gstatic.com/flights/airline_logos/70px/LY.png" style="height:35px;max-height:35px" class="CToWUd" data-bit="iit"></a></td><td style="font-family:Roboto,Arial,sans-serif;padding:18px 5px 18px 20px;line-height:24px"><a href="https://notifications.google.com/g/p/AM0Over4TDXpCn1zX8dvhbECQrUNEOe5W06752cwNreJBh5-n0VmbIRtVedG5G1SKh3COZbPF6Tqm0X70Qfg8rrumdDpMkjCU_ASjyzdA2HV9aTVL26CVYrQBRBgE1UMK2jlM2DwwWuPbsnB8Hwjz5FzdB3qEMhAl7yPetXrBuofu31Pa4MxdO8oSjlvfClJyg7ZUhMaFRgjQ2aBKgkrbBlbD4Ect85mS-J09ny_BzCSTayNhPeDslTpOe8Cas85uZifHn9rFt9rPsPr1W54j4UNxmAM3LH8wegr1RVN3iArIu7lbeyTTmdn-dNIrMPNyg5tci0i_pEhrKA7QZ9DTkkKXFurMILzOxNGmojWd1luQYrEUQ1AKk1XTpcATv1BYaB6NFhZSSMTItofsOgE5oo1ggWN3zSeEdOIYrMYjburji0QYovPNMcw-RgMRkL5n1ZlLEE3EDF7LMP5dGsyMgauHlOWNZ_fxjFCIIgXSuGtq-0HGh_U6XnuB0pOXb41sOLZOrwbdbFn9i5G6R7Wa-CAC5K5YlKP1Jlgt_dRAzBaOGwpWhqvL6z8U-Co7FlzRDU_ZFBWNBxN2a_sBilwbP721_2V6jSC7T6iVLf0gzFU45ifgKSN4dgp44A060kFMrzsl2BZjukMo25d5m2UGkoWirhTPmPFXOL9bwkko2xFsHK2PUogffe9buymELYHsVQszPyqOzdRriXpjqAbblqBw96x-PF4fmolJn6nJI3fpqWh3NUgvapwrG8aSsJW19eHMAEoZhrh6HS-O-G5AhiXuOdqgJTicgapoEOARwTaLAxdC74VvdgQYDodjZLifFeAs8QRp9KcQxHuogce8bKWeaIcmLkg8ZBBgZziJ-h1kCbWwho4vP4JLYg3WkYZb980el5pqNi1UDTO0_EJyyiT7rO_wPTjadfIT_PnUp4" style="text-decoration:none" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://notifications.google.com/g/p/AM0Over4TDXpCn1zX8dvhbECQrUNEOe5W06752cwNreJBh5-n0VmbIRtVedG5G1SKh3COZbPF6Tqm0X70Qfg8rrumdDpMkjCU_ASjyzdA2HV9aTVL26CVYrQBRBgE1UMK2jlM2DwwWuPbsnB8Hwjz5FzdB3qEMhAl7yPetXrBuofu31Pa4MxdO8oSjlvfClJyg7ZUhMaFRgjQ2aBKgkrbBlbD4Ect85mS-J09ny_BzCSTayNhPeDslTpOe8Cas85uZifHn9rFt9rPsPr1W54j4UNxmAM3LH8wegr1RVN3iArIu7lbeyTTmdn-dNIrMPNyg5tci0i_pEhrKA7QZ9DTkkKXFurMILzOxNGmojWd1luQYrEUQ1AKk1XTpcATv1BYaB6NFhZSSMTItofsOgE5oo1ggWN3zSeEdOIYrMYjburji0QYovPNMcw-RgMRkL5n1ZlLEE3EDF7LMP5dGsyMgauHlOWNZ_fxjFCIIgXSuGtq-0HGh_U6XnuB0pOXb41sOLZOrwbdbFn9i5G6R7Wa-CAC5K5YlKP1Jlgt_dRAzBaOGwpWhqvL6z8U-Co7FlzRDU_ZFBWNBxN2a_sBilwbP721_2V6jSC7T6iVLf0gzFU45ifgKSN4dgp44A060kFMrzsl2BZjukMo25d5m2UGkoWirhTPmPFXOL9bwkko2xFsHK2PUogffe9buymELYHsVQszPyqOzdRriXpjqAbblqBw96x-PF4fmolJn6nJI3fpqWh3NUgvapwrG8aSsJW19eHMAEoZhrh6HS-O-G5AhiXuOdqgJTicgapoEOARwTaLAxdC74VvdgQYDodjZLifFeAs8QRp9KcQxHuogce8bKWeaIcmLkg8ZBBgZziJ-h1kCbWwho4vP4JLYg3WkYZb980el5pqNi1UDTO0_EJyyiT7rO_wPTjadfIT_PnUp4&amp;source=gmail&amp;ust=1672421523635000&amp;usg=AOvVaw3c6cI-XQCBQgsL-6i3Y_M8"><div style="font-size:16px;color:#222;white-space:nowrap">5:00 – 8:25<sup></sup></div><div style="font-size:14px;color:#7f7f7f"><span style="white-space:nowrap">אל על · </span><span style="white-space:nowrap">טיסה ישירה · </span><span style="white-space:nowrap">TLV–LTN</span></div><div style="font-size:11px;color:#7f7f7f"></div></a></td><td style="font-family:Roboto,Arial,sans-serif;font-size:14px;padding:26px 25px 18px 10px;text-align:right;vertical-align:top;line-height:24px"><a href="https://notifications.google.com/g/p/AM0Over4TDXpCn1zX8dvhbECQrUNEOe5W06752cwNreJBh5-n0VmbIRtVedG5G1SKh3COZbPF6Tqm0X70Qfg8rrumdDpMkjCU_ASjyzdA2HV9aTVL26CVYrQBRBgE1UMK2jlM2DwwWuPbsnB8Hwjz5FzdB3qEMhAl7yPetXrBuofu31Pa4MxdO8oSjlvfClJyg7ZUhMaFRgjQ2aBKgkrbBlbD4Ect85mS-J09ny_BzCSTayNhPeDslTpOe8Cas85uZifHn9rFt9rPsPr1W54j4UNxmAM3LH8wegr1RVN3iArIu7lbeyTTmdn-dNIrMPNyg5tci0i_pEhrKA7QZ9DTkkKXFurMILzOxNGmojWd1luQYrEUQ1AKk1XTpcATv1BYaB6NFhZSSMTItofsOgE5oo1ggWN3zSeEdOIYrMYjburji0QYovPNMcw-RgMRkL5n1ZlLEE3EDF7LMP5dGsyMgauHlOWNZ_fxjFCIIgXSuGtq-0HGh_U6XnuB0pOXb41sOLZOrwbdbFn9i5G6R7Wa-CAC5K5YlKP1Jlgt_dRAzBaOGwpWhqvL6z8U-Co7FlzRDU_ZFBWNBxN2a_sBilwbP721_2V6jSC7T6iVLf0gzFU45ifgKSN4dgp44A060kFMrzsl2BZjukMo25d5m2UGkoWirhTPmPFXOL9bwkko2xFsHK2PUogffe9buymELYHsVQszPyqOzdRriXpjqAbblqBw96x-PF4fmolJn6nJI3fpqWh3NUgvapwrG8aSsJW19eHMAEoZhrh6HS-O-G5AhiXuOdqgJTicgapoEOARwTaLAxdC74VvdgQYDodjZLifFeAs8QRp9KcQxHuogce8bKWeaIcmLkg8ZBBgZziJ-h1kCbWwho4vP4JLYg3WkYZb980el5pqNi1UDTO0_EJyyiT7rO_wPTjadfIT_PnUp4" style="text-decoration:none" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://notifications.google.com/g/p/AM0Over4TDXpCn1zX8dvhbECQrUNEOe5W06752cwNreJBh5-n0VmbIRtVedG5G1SKh3COZbPF6Tqm0X70Qfg8rrumdDpMkjCU_ASjyzdA2HV9aTVL26CVYrQBRBgE1UMK2jlM2DwwWuPbsnB8Hwjz5FzdB3qEMhAl7yPetXrBuofu31Pa4MxdO8oSjlvfClJyg7ZUhMaFRgjQ2aBKgkrbBlbD4Ect85mS-J09ny_BzCSTayNhPeDslTpOe8Cas85uZifHn9rFt9rPsPr1W54j4UNxmAM3LH8wegr1RVN3iArIu7lbeyTTmdn-dNIrMPNyg5tci0i_pEhrKA7QZ9DTkkKXFurMILzOxNGmojWd1luQYrEUQ1AKk1XTpcATv1BYaB6NFhZSSMTItofsOgE5oo1ggWN3zSeEdOIYrMYjburji0QYovPNMcw-RgMRkL5n1ZlLEE3EDF7LMP5dGsyMgauHlOWNZ_fxjFCIIgXSuGtq-0HGh_U6XnuB0pOXb41sOLZOrwbdbFn9i5G6R7Wa-CAC5K5YlKP1Jlgt_dRAzBaOGwpWhqvL6z8U-Co7FlzRDU_ZFBWNBxN2a_sBilwbP721_2V6jSC7T6iVLf0gzFU45ifgKSN4dgp44A060kFMrzsl2BZjukMo25d5m2UGkoWirhTPmPFXOL9bwkko2xFsHK2PUogffe9buymELYHsVQszPyqOzdRriXpjqAbblqBw96x-PF4fmolJn6nJI3fpqWh3NUgvapwrG8aSsJW19eHMAEoZhrh6HS-O-G5AhiXuOdqgJTicgapoEOARwTaLAxdC74VvdgQYDodjZLifFeAs8QRp9KcQxHuogce8bKWeaIcmLkg8ZBBgZziJ-h1kCbWwho4vP4JLYg3WkYZb980el5pqNi1UDTO0_EJyyiT7rO_wPTjadfIT_PnUp4&amp;source=gmail&amp;ust=1672421523635000&amp;usg=AOvVaw3c6cI-XQCBQgsL-6i3Y_M8"><div><div style="white-space:nowrap;line-height:16px;padding-bottom:4px"><span style="color:#222;font-size:16px;font-weight:700;white-space:nowrap;line-height:16px">‏1,705&nbsp;‏₪</span></div></div></a></td></tr><tr><td style="min-width:20px;width:20px"></td><td colspan="3" style="border-top:1px solid #e7e5e5;line-height:0">&nbsp;</td></tr><tr><td style="min-width:20px;width:20px"></td><td valign="middle" style="text-align:left;padding:18px 5px 18px 0;width:32px"><a href="https://notifications.google.com/g/p/AM0Ovep8Ztiwv3kzXqOliaxYJObKxCnFCt7-sYBWXJUiQlwPN8AJwtsGos3VNMjCOY3jSeIrBWkTAZiyZdsQo3HgGrtxP8SjRYZMRG71EKYb4Wz2kWtz4y3Ha_8x3_Y2edzQlRYg3VTTJdEYhn-BbmKm7rMxALrGEKUX_1DTgol7-Y_fK2y9UShzRuLNaVhENUHwRgRQ_KZHsAOAjEHC-P9ZT-Jc1bFOuhqm18I4ZY_OMZ7Nvcc1j9j6GO1wFVZbOL1Ppn7TZetwMwHe7gaLyrmYkomrj9Is1euygRlQayCKJJK5IG6emGR77AbZo0JHuHkkkG5PZE-ixFeB5DFKfaHDkrU05JJuqmo7fpTE3f0I34dPPlHR0IolW9mWrkUwzKwZcoGKZBhGjJDK8FoPLId_rp6igPSgGi-acS9_Gg-HK1Td6WbZ96ycutP6BFcAj0IpKAYfcAsM3n__SXAKcxGKigdvKTnJwp7B6PqbSmDyxcqflEw9JSSmWiWYVytYKOCjGpWI4nMR-cyZU6sazNhTmy8XAnOluhZdZb2KX6FJ3PijYr_t7hT4TVdW7gCuqDv2Wb90Y7jeLe9ke7QvosxONfBrQOT_Lj9bEOILlOH0s2AuhQUnKgU4uePMbWqVrDH_c3eWY5T94efRLrwykgziwOEw1d4Sito5IFC16bFj2ppxvNeLkDuArine5Wd4JT11oWvWYs-TA7CM_zhLSEYQAcOf68zGj7V0vRt995xd1j5qyuC2ty40QOzePMefqxG289vdE0XW3U31JFQEqw-xBYSqb2Lp4ov2cAnl0-CN5-VDVAF9SnOMLl_NGsXsI4Mx6m4X7X5VS0_4QZsu8-JW1uZ-8mA65KQCe4PJ6PcN1GVZ5CHDs8rLUR0CQGw0DBSZ1XZQVsqcU1rNE7EMACqeYHDqA9bCIUcrGSZFZDs" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://notifications.google.com/g/p/AM0Ovep8Ztiwv3kzXqOliaxYJObKxCnFCt7-sYBWXJUiQlwPN8AJwtsGos3VNMjCOY3jSeIrBWkTAZiyZdsQo3HgGrtxP8SjRYZMRG71EKYb4Wz2kWtz4y3Ha_8x3_Y2edzQlRYg3VTTJdEYhn-BbmKm7rMxALrGEKUX_1DTgol7-Y_fK2y9UShzRuLNaVhENUHwRgRQ_KZHsAOAjEHC-P9ZT-Jc1bFOuhqm18I4ZY_OMZ7Nvcc1j9j6GO1wFVZbOL1Ppn7TZetwMwHe7gaLyrmYkomrj9Is1euygRlQayCKJJK5IG6emGR77AbZo0JHuHkkkG5PZE-ixFeB5DFKfaHDkrU05JJuqmo7fpTE3f0I34dPPlHR0IolW9mWrkUwzKwZcoGKZBhGjJDK8FoPLId_rp6igPSgGi-acS9_Gg-HK1Td6WbZ96ycutP6BFcAj0IpKAYfcAsM3n__SXAKcxGKigdvKTnJwp7B6PqbSmDyxcqflEw9JSSmWiWYVytYKOCjGpWI4nMR-cyZU6sazNhTmy8XAnOluhZdZb2KX6FJ3PijYr_t7hT4TVdW7gCuqDv2Wb90Y7jeLe9ke7QvosxONfBrQOT_Lj9bEOILlOH0s2AuhQUnKgU4uePMbWqVrDH_c3eWY5T94efRLrwykgziwOEw1d4Sito5IFC16bFj2ppxvNeLkDuArine5Wd4JT11oWvWYs-TA7CM_zhLSEYQAcOf68zGj7V0vRt995xd1j5qyuC2ty40QOzePMefqxG289vdE0XW3U31JFQEqw-xBYSqb2Lp4ov2cAnl0-CN5-VDVAF9SnOMLl_NGsXsI4Mx6m4X7X5VS0_4QZsu8-JW1uZ-8mA65KQCe4PJ6PcN1GVZ5CHDs8rLUR0CQGw0DBSZ1XZQVsqcU1rNE7EMACqeYHDqA9bCIUcrGSZFZDs&amp;source=gmail&amp;ust=1672421523635000&amp;usg=AOvVaw10ai8mKVVcOkoGigqij31B"><img alt="-1" src="https://ci4.googleusercontent.com/proxy/WBi73HZsG6ftk0K9csIZnr6PtNaGD6bUnZOFLAlKxXoaMGmHXa7C0MD-84blbg783jxPqP-WC8P8ViQrMBBK6eL0xNLPQ6wszkJ-gw=s0-d-e1-ft#https://www.gstatic.com/flights/airline_logos/70px/VS.png" style="height:35px;max-height:35px" class="CToWUd" data-bit="iit"></a></td><td style="font-family:Roboto,Arial,sans-serif;padding:18px 5px 18px 20px;line-height:24px"><a href="https://notifications.google.com/g/p/AM0Ovep8Ztiwv3kzXqOliaxYJObKxCnFCt7-sYBWXJUiQlwPN8AJwtsGos3VNMjCOY3jSeIrBWkTAZiyZdsQo3HgGrtxP8SjRYZMRG71EKYb4Wz2kWtz4y3Ha_8x3_Y2edzQlRYg3VTTJdEYhn-BbmKm7rMxALrGEKUX_1DTgol7-Y_fK2y9UShzRuLNaVhENUHwRgRQ_KZHsAOAjEHC-P9ZT-Jc1bFOuhqm18I4ZY_OMZ7Nvcc1j9j6GO1wFVZbOL1Ppn7TZetwMwHe7gaLyrmYkomrj9Is1euygRlQayCKJJK5IG6emGR77AbZo0JHuHkkkG5PZE-ixFeB5DFKfaHDkrU05JJuqmo7fpTE3f0I34dPPlHR0IolW9mWrkUwzKwZcoGKZBhGjJDK8FoPLId_rp6igPSgGi-acS9_Gg-HK1Td6WbZ96ycutP6BFcAj0IpKAYfcAsM3n__SXAKcxGKigdvKTnJwp7B6PqbSmDyxcqflEw9JSSmWiWYVytYKOCjGpWI4nMR-cyZU6sazNhTmy8XAnOluhZdZb2KX6FJ3PijYr_t7hT4TVdW7gCuqDv2Wb90Y7jeLe9ke7QvosxONfBrQOT_Lj9bEOILlOH0s2AuhQUnKgU4uePMbWqVrDH_c3eWY5T94efRLrwykgziwOEw1d4Sito5IFC16bFj2ppxvNeLkDuArine5Wd4JT11oWvWYs-TA7CM_zhLSEYQAcOf68zGj7V0vRt995xd1j5qyuC2ty40QOzePMefqxG289vdE0XW3U31JFQEqw-xBYSqb2Lp4ov2cAnl0-CN5-VDVAF9SnOMLl_NGsXsI4Mx6m4X7X5VS0_4QZsu8-JW1uZ-8mA65KQCe4PJ6PcN1GVZ5CHDs8rLUR0CQGw0DBSZ1XZQVsqcU1rNE7EMACqeYHDqA9bCIUcrGSZFZDs" style="text-decoration:none" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://notifications.google.com/g/p/AM0Ovep8Ztiwv3kzXqOliaxYJObKxCnFCt7-sYBWXJUiQlwPN8AJwtsGos3VNMjCOY3jSeIrBWkTAZiyZdsQo3HgGrtxP8SjRYZMRG71EKYb4Wz2kWtz4y3Ha_8x3_Y2edzQlRYg3VTTJdEYhn-BbmKm7rMxALrGEKUX_1DTgol7-Y_fK2y9UShzRuLNaVhENUHwRgRQ_KZHsAOAjEHC-P9ZT-Jc1bFOuhqm18I4ZY_OMZ7Nvcc1j9j6GO1wFVZbOL1Ppn7TZetwMwHe7gaLyrmYkomrj9Is1euygRlQayCKJJK5IG6emGR77AbZo0JHuHkkkG5PZE-ixFeB5DFKfaHDkrU05JJuqmo7fpTE3f0I34dPPlHR0IolW9mWrkUwzKwZcoGKZBhGjJDK8FoPLId_rp6igPSgGi-acS9_Gg-HK1Td6WbZ96ycutP6BFcAj0IpKAYfcAsM3n__SXAKcxGKigdvKTnJwp7B6PqbSmDyxcqflEw9JSSmWiWYVytYKOCjGpWI4nMR-cyZU6sazNhTmy8XAnOluhZdZb2KX6FJ3PijYr_t7hT4TVdW7gCuqDv2Wb90Y7jeLe9ke7QvosxONfBrQOT_Lj9bEOILlOH0s2AuhQUnKgU4uePMbWqVrDH_c3eWY5T94efRLrwykgziwOEw1d4Sito5IFC16bFj2ppxvNeLkDuArine5Wd4JT11oWvWYs-TA7CM_zhLSEYQAcOf68zGj7V0vRt995xd1j5qyuC2ty40QOzePMefqxG289vdE0XW3U31JFQEqw-xBYSqb2Lp4ov2cAnl0-CN5-VDVAF9SnOMLl_NGsXsI4Mx6m4X7X5VS0_4QZsu8-JW1uZ-8mA65KQCe4PJ6PcN1GVZ5CHDs8rLUR0CQGw0DBSZ1XZQVsqcU1rNE7EMACqeYHDqA9bCIUcrGSZFZDs&amp;source=gmail&amp;ust=1672421523635000&amp;usg=AOvVaw10ai8mKVVcOkoGigqij31B"><div style="font-size:16px;color:#222;white-space:nowrap">17:30 – 21:05<sup></sup></div><div style="font-size:14px;color:#7f7f7f"><span style="white-space:nowrap">Virgin Atlantic · </span><span style="white-space:nowrap">טיסה ישירה · </span><span style="white-space:nowrap">TLV–LHR</span></div><div style="font-size:11px;color:#7f7f7f"></div></a></td><td style="font-family:Roboto,Arial,sans-serif;font-size:14px;padding:26px 25px 18px 10px;text-align:right;vertical-align:top;line-height:24px"><a href="https://notifications.google.com/g/p/AM0Ovep8Ztiwv3kzXqOliaxYJObKxCnFCt7-sYBWXJUiQlwPN8AJwtsGos3VNMjCOY3jSeIrBWkTAZiyZdsQo3HgGrtxP8SjRYZMRG71EKYb4Wz2kWtz4y3Ha_8x3_Y2edzQlRYg3VTTJdEYhn-BbmKm7rMxALrGEKUX_1DTgol7-Y_fK2y9UShzRuLNaVhENUHwRgRQ_KZHsAOAjEHC-P9ZT-Jc1bFOuhqm18I4ZY_OMZ7Nvcc1j9j6GO1wFVZbOL1Ppn7TZetwMwHe7gaLyrmYkomrj9Is1euygRlQayCKJJK5IG6emGR77AbZo0JHuHkkkG5PZE-ixFeB5DFKfaHDkrU05JJuqmo7fpTE3f0I34dPPlHR0IolW9mWrkUwzKwZcoGKZBhGjJDK8FoPLId_rp6igPSgGi-acS9_Gg-HK1Td6WbZ96ycutP6BFcAj0IpKAYfcAsM3n__SXAKcxGKigdvKTnJwp7B6PqbSmDyxcqflEw9JSSmWiWYVytYKOCjGpWI4nMR-cyZU6sazNhTmy8XAnOluhZdZb2KX6FJ3PijYr_t7hT4TVdW7gCuqDv2Wb90Y7jeLe9ke7QvosxONfBrQOT_Lj9bEOILlOH0s2AuhQUnKgU4uePMbWqVrDH_c3eWY5T94efRLrwykgziwOEw1d4Sito5IFC16bFj2ppxvNeLkDuArine5Wd4JT11oWvWYs-TA7CM_zhLSEYQAcOf68zGj7V0vRt995xd1j5qyuC2ty40QOzePMefqxG289vdE0XW3U31JFQEqw-xBYSqb2Lp4ov2cAnl0-CN5-VDVAF9SnOMLl_NGsXsI4Mx6m4X7X5VS0_4QZsu8-JW1uZ-8mA65KQCe4PJ6PcN1GVZ5CHDs8rLUR0CQGw0DBSZ1XZQVsqcU1rNE7EMACqeYHDqA9bCIUcrGSZFZDs" style="text-decoration:none" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://notifications.google.com/g/p/AM0Ovep8Ztiwv3kzXqOliaxYJObKxCnFCt7-sYBWXJUiQlwPN8AJwtsGos3VNMjCOY3jSeIrBWkTAZiyZdsQo3HgGrtxP8SjRYZMRG71EKYb4Wz2kWtz4y3Ha_8x3_Y2edzQlRYg3VTTJdEYhn-BbmKm7rMxALrGEKUX_1DTgol7-Y_fK2y9UShzRuLNaVhENUHwRgRQ_KZHsAOAjEHC-P9ZT-Jc1bFOuhqm18I4ZY_OMZ7Nvcc1j9j6GO1wFVZbOL1Ppn7TZetwMwHe7gaLyrmYkomrj9Is1euygRlQayCKJJK5IG6emGR77AbZo0JHuHkkkG5PZE-ixFeB5DFKfaHDkrU05JJuqmo7fpTE3f0I34dPPlHR0IolW9mWrkUwzKwZcoGKZBhGjJDK8FoPLId_rp6igPSgGi-acS9_Gg-HK1Td6WbZ96ycutP6BFcAj0IpKAYfcAsM3n__SXAKcxGKigdvKTnJwp7B6PqbSmDyxcqflEw9JSSmWiWYVytYKOCjGpWI4nMR-cyZU6sazNhTmy8XAnOluhZdZb2KX6FJ3PijYr_t7hT4TVdW7gCuqDv2Wb90Y7jeLe9ke7QvosxONfBrQOT_Lj9bEOILlOH0s2AuhQUnKgU4uePMbWqVrDH_c3eWY5T94efRLrwykgziwOEw1d4Sito5IFC16bFj2ppxvNeLkDuArine5Wd4JT11oWvWYs-TA7CM_zhLSEYQAcOf68zGj7V0vRt995xd1j5qyuC2ty40QOzePMefqxG289vdE0XW3U31JFQEqw-xBYSqb2Lp4ov2cAnl0-CN5-VDVAF9SnOMLl_NGsXsI4Mx6m4X7X5VS0_4QZsu8-JW1uZ-8mA65KQCe4PJ6PcN1GVZ5CHDs8rLUR0CQGw0DBSZ1XZQVsqcU1rNE7EMACqeYHDqA9bCIUcrGSZFZDs&amp;source=gmail&amp;ust=1672421523635000&amp;usg=AOvVaw10ai8mKVVcOkoGigqij31B"><div><div style="white-space:nowrap;line-height:16px;padding-bottom:4px"><span style="color:#222;font-size:16px;font-weight:700;white-space:nowrap;line-height:16px">‏1,740&nbsp;‏₪</span></div></div></a></td></tr></tbody></table></td></tr><tr><td colspan="4" style="border-top:1px solid #e7e5e5;line-height:0">&nbsp;</td></tr><tr><td style="min-width:20px;width:20px"></td><td valign="middle" style="text-align:left;width:32px;vertical-align:middle;padding:18px 5px"><a href="https://notifications.google.com/g/p/AM0OveoLxLrdVFC-fPN1IchodVhPbOkDokgp85jxiEO2mJ2szlRU79PWceRVXbJ2lBpJA3rzUlqkdcMiwaYZW4dLuvJ---c94N8Kx47plXOBOXCNlvAt-WfFtOsqfmVLJlZS5aAoo4U7GpWq2zg4Ik-0gqYYMCQ4h3xYS-5u3Sj9aiBBwr5NAKs0ugBDJxgeDV7KhVgihBA6einS2btX1y4eqZp8Af3kWE1GCNXpSEgzvtdoGyvQlBp8uJL33UWGNRSkbWIV5n03B_lc84FTnytEKI6vaaPHDbxef-jktjt5m0ilttUzXgNAlPUX5xDWmPC6D6tHuPyom2AiueUo6CfjLD2vrf4WkZJrIQ8p8_BmlCUY9VtauJ1KNBVitohntYTqIcXM8gGzjEa2zsA_5uZBq23gCxGicYG49gAjXA590bABEnaK9UY3CW8ILQvG5DX3jekxmjOSiITMaJyfLI4-pnwcciAL9W_q7udz6UK3UK8iR0209JbUzPvi9vCSH3eS8pDcmb6zvkIy2KOmfW6US5oHirsM5Zwwk_dLCfCmr8xrSSTPqpGaHa6_LaSkt40J1I_X3DQsZNOet3vIMb0BY9RbzYXGfdjPwZ6uG4GLmdVTUKqrkwtUxwrDwXPd8vtf4E3XZYmiRp0gqd6oPvQssRJJYA_53qcXmHd1uvLr20WV2C0e34dcqW3_-8H7eLVe7ut4XeWdFoAkvOnffZrd6VOWnVrl1CcZ0-MB67h1GOXBTyVXyIlxFTJeznTDfm1hH0VaWL5eUTXHWZi8CKwStBBL5VdQ0bOwzGhfiPrtUKqw8PsxycioGmT19cd6uP-57-7wtQoLPNBi_1-v2PgoZGP0RV8IfQOkho6ctXerpXSZ9yGEIgo" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://notifications.google.com/g/p/AM0OveoLxLrdVFC-fPN1IchodVhPbOkDokgp85jxiEO2mJ2szlRU79PWceRVXbJ2lBpJA3rzUlqkdcMiwaYZW4dLuvJ---c94N8Kx47plXOBOXCNlvAt-WfFtOsqfmVLJlZS5aAoo4U7GpWq2zg4Ik-0gqYYMCQ4h3xYS-5u3Sj9aiBBwr5NAKs0ugBDJxgeDV7KhVgihBA6einS2btX1y4eqZp8Af3kWE1GCNXpSEgzvtdoGyvQlBp8uJL33UWGNRSkbWIV5n03B_lc84FTnytEKI6vaaPHDbxef-jktjt5m0ilttUzXgNAlPUX5xDWmPC6D6tHuPyom2AiueUo6CfjLD2vrf4WkZJrIQ8p8_BmlCUY9VtauJ1KNBVitohntYTqIcXM8gGzjEa2zsA_5uZBq23gCxGicYG49gAjXA590bABEnaK9UY3CW8ILQvG5DX3jekxmjOSiITMaJyfLI4-pnwcciAL9W_q7udz6UK3UK8iR0209JbUzPvi9vCSH3eS8pDcmb6zvkIy2KOmfW6US5oHirsM5Zwwk_dLCfCmr8xrSSTPqpGaHa6_LaSkt40J1I_X3DQsZNOet3vIMb0BY9RbzYXGfdjPwZ6uG4GLmdVTUKqrkwtUxwrDwXPd8vtf4E3XZYmiRp0gqd6oPvQssRJJYA_53qcXmHd1uvLr20WV2C0e34dcqW3_-8H7eLVe7ut4XeWdFoAkvOnffZrd6VOWnVrl1CcZ0-MB67h1GOXBTyVXyIlxFTJeznTDfm1hH0VaWL5eUTXHWZi8CKwStBBL5VdQ0bOwzGhfiPrtUKqw8PsxycioGmT19cd6uP-57-7wtQoLPNBi_1-v2PgoZGP0RV8IfQOkho6ctXerpXSZ9yGEIgo&amp;source=gmail&amp;ust=1672421523636000&amp;usg=AOvVaw3PhCsc6VBgxEToXkfKnZhc"><img alt="select" src="https://ci5.googleusercontent.com/proxy/CIUgOgsvhBHVz9i5NMECka9b6szLe3DAdvZiYl08DfkoNEiaNYE_XX7EwIsPo9s-NrLJvZv7VZ8e6dsoTqRrZWIhwpHKVrCQYPBJoAuZlU4v_6sT7nWG1gBa9cfC9S3VNMhzMKBSSg=s0-d-e1-ft#https://www.gstatic.com/images/icons/material/system/2x/arrow_forward_black_24dp.png" style="height:24px;max-height:24px" class="CToWUd" data-bit="iit"></a></td><td colspan="2" style="font-family:Roboto,Arial,sans-serif;line-height:24px;margin:4px 0 14px;padding:18px 20px"><a href="https://notifications.google.com/g/p/AM0OveoLxLrdVFC-fPN1IchodVhPbOkDokgp85jxiEO2mJ2szlRU79PWceRVXbJ2lBpJA3rzUlqkdcMiwaYZW4dLuvJ---c94N8Kx47plXOBOXCNlvAt-WfFtOsqfmVLJlZS5aAoo4U7GpWq2zg4Ik-0gqYYMCQ4h3xYS-5u3Sj9aiBBwr5NAKs0ugBDJxgeDV7KhVgihBA6einS2btX1y4eqZp8Af3kWE1GCNXpSEgzvtdoGyvQlBp8uJL33UWGNRSkbWIV5n03B_lc84FTnytEKI6vaaPHDbxef-jktjt5m0ilttUzXgNAlPUX5xDWmPC6D6tHuPyom2AiueUo6CfjLD2vrf4WkZJrIQ8p8_BmlCUY9VtauJ1KNBVitohntYTqIcXM8gGzjEa2zsA_5uZBq23gCxGicYG49gAjXA590bABEnaK9UY3CW8ILQvG5DX3jekxmjOSiITMaJyfLI4-pnwcciAL9W_q7udz6UK3UK8iR0209JbUzPvi9vCSH3eS8pDcmb6zvkIy2KOmfW6US5oHirsM5Zwwk_dLCfCmr8xrSSTPqpGaHa6_LaSkt40J1I_X3DQsZNOet3vIMb0BY9RbzYXGfdjPwZ6uG4GLmdVTUKqrkwtUxwrDwXPd8vtf4E3XZYmiRp0gqd6oPvQssRJJYA_53qcXmHd1uvLr20WV2C0e34dcqW3_-8H7eLVe7ut4XeWdFoAkvOnffZrd6VOWnVrl1CcZ0-MB67h1GOXBTyVXyIlxFTJeznTDfm1hH0VaWL5eUTXHWZi8CKwStBBL5VdQ0bOwzGhfiPrtUKqw8PsxycioGmT19cd6uP-57-7wtQoLPNBi_1-v2PgoZGP0RV8IfQOkho6ctXerpXSZ9yGEIgo" style="text-decoration:none" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://notifications.google.com/g/p/AM0OveoLxLrdVFC-fPN1IchodVhPbOkDokgp85jxiEO2mJ2szlRU79PWceRVXbJ2lBpJA3rzUlqkdcMiwaYZW4dLuvJ---c94N8Kx47plXOBOXCNlvAt-WfFtOsqfmVLJlZS5aAoo4U7GpWq2zg4Ik-0gqYYMCQ4h3xYS-5u3Sj9aiBBwr5NAKs0ugBDJxgeDV7KhVgihBA6einS2btX1y4eqZp8Af3kWE1GCNXpSEgzvtdoGyvQlBp8uJL33UWGNRSkbWIV5n03B_lc84FTnytEKI6vaaPHDbxef-jktjt5m0ilttUzXgNAlPUX5xDWmPC6D6tHuPyom2AiueUo6CfjLD2vrf4WkZJrIQ8p8_BmlCUY9VtauJ1KNBVitohntYTqIcXM8gGzjEa2zsA_5uZBq23gCxGicYG49gAjXA590bABEnaK9UY3CW8ILQvG5DX3jekxmjOSiITMaJyfLI4-pnwcciAL9W_q7udz6UK3UK8iR0209JbUzPvi9vCSH3eS8pDcmb6zvkIy2KOmfW6US5oHirsM5Zwwk_dLCfCmr8xrSSTPqpGaHa6_LaSkt40J1I_X3DQsZNOet3vIMb0BY9RbzYXGfdjPwZ6uG4GLmdVTUKqrkwtUxwrDwXPd8vtf4E3XZYmiRp0gqd6oPvQssRJJYA_53qcXmHd1uvLr20WV2C0e34dcqW3_-8H7eLVe7ut4XeWdFoAkvOnffZrd6VOWnVrl1CcZ0-MB67h1GOXBTyVXyIlxFTJeznTDfm1hH0VaWL5eUTXHWZi8CKwStBBL5VdQ0bOwzGhfiPrtUKqw8PsxycioGmT19cd6uP-57-7wtQoLPNBi_1-v2PgoZGP0RV8IfQOkho6ctXerpXSZ9yGEIgo&amp;source=gmail&amp;ust=1672421523636000&amp;usg=AOvVaw3PhCsc6VBgxEToXkfKnZhc"><div style="font-size:16px;color:#222">הצג טיסות נוספות</div></a></td></tr></tbody></table></div><div><div style="width:100%;border-bottom:1px solid #bdbdbd;margin-bottom:15px;margin-top:50px"></div><div style="min-width:300px;max-width:600px;width:100%;text-align:center;color:#7d7d7d"><div style="margin:10px 60px"> המחירים עודכנו: 16 בדצמבר 2022 בשעה 22:22 GMT </div><div style="color:#7d7d7d;margin:10px 80px">הודעה זו נשלחה אליך מכיוון שביקשת לקבל עדכונים על מחירים וטיפים לנסיעה מ-Google Flights.</div><div style="margin:10px 50px"><a href="https://notifications.google.com/g/p/AM0OvepoJbC69STZj0SJmMRs6daQpWZ157TPU3Ni0nVtLNFgi1VEVVE_mJ_jkaxQ-DiF8N6akSR8wS65gSK0Vts5Ndm0faCjb-c4Pq6ghM47gx7VO1iDBXuhr3VLviY9lNPKnLQh_2kj6Y9dyESZqEvWoxCn_qNKhyUkJr6ndyaMnqFFwZ_RSQYSexHx_xlnaAkySYuHAxTo3noEBYn5i9mpPQj_G2Ry2b0VVUzpiLQkUCmnWXJ5b9cVFKmXQS_SpG_LeVF-McsO5nCYhJIyTFEwVlEcm_Sa6gWq3R2gWoYwqbYAhjuC2XBqHBB59BUTbhhqE-tnRYrfvOqs-JUtdh54I84InqIU5wAkBH2vhfqREOpPkvZs" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://notifications.google.com/g/p/AM0OvepoJbC69STZj0SJmMRs6daQpWZ157TPU3Ni0nVtLNFgi1VEVVE_mJ_jkaxQ-DiF8N6akSR8wS65gSK0Vts5Ndm0faCjb-c4Pq6ghM47gx7VO1iDBXuhr3VLviY9lNPKnLQh_2kj6Y9dyESZqEvWoxCn_qNKhyUkJr6ndyaMnqFFwZ_RSQYSexHx_xlnaAkySYuHAxTo3noEBYn5i9mpPQj_G2Ry2b0VVUzpiLQkUCmnWXJ5b9cVFKmXQS_SpG_LeVF-McsO5nCYhJIyTFEwVlEcm_Sa6gWq3R2gWoYwqbYAhjuC2XBqHBB59BUTbhhqE-tnRYrfvOqs-JUtdh54I84InqIU5wAkBH2vhfqREOpPkvZs&amp;source=gmail&amp;ust=1672421523636000&amp;usg=AOvVaw1ShmJ1zKUJspuw0GWe7gPW"><span style="color:#4a90e2;text-decoration:underline;white-space:nowrap">נהל את מעקב המחירים</span></a><span> · </span><a href="https://notifications.google.com/g/optout/AM0Over5yW-7WxCgmHx1imk4KHC40nm-QeRC5OinUANfLHRwDf8YxVkxUFFCArtU8iGgTeJp7WkW-qvdGTNQpzpVUqL_AXsF8VlBpVVaOeixthrZ7Cr8xWxwC-lVkoWk0zyVlLxLBYgUxeTE0Tq8TcZX9deVMMVWkiLEE6xdvkWWq-khobvoCiVolgF3h3Awupksm7oREDT_aOF3pPsjP4NKHH4vK2Ip1Ncw?hl=iw" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://notifications.google.com/g/optout/AM0Over5yW-7WxCgmHx1imk4KHC40nm-QeRC5OinUANfLHRwDf8YxVkxUFFCArtU8iGgTeJp7WkW-qvdGTNQpzpVUqL_AXsF8VlBpVVaOeixthrZ7Cr8xWxwC-lVkoWk0zyVlLxLBYgUxeTE0Tq8TcZX9deVMMVWkiLEE6xdvkWWq-khobvoCiVolgF3h3Awupksm7oREDT_aOF3pPsjP4NKHH4vK2Ip1Ncw?hl%3Diw&amp;source=gmail&amp;ust=1672421523636000&amp;usg=AOvVaw1nCdFwmYLLvng210ngbuLA"><span style="color:#4a90e2;text-decoration:underline;white-space:nowrap">לביטול הרישום לקבלת הודעות אימייל של Google חיפוש טיסות</span></a></div></div></div></td></tr></tbody></table></div></td></tr></tbody></table></td></tr><tr><td style="color:#7d7d7d;font-size:10px;line-height:1.5;max-width:600px;text-align:left"><br><div style="font-size:10px;text-align:center"><div style="width:100%;margin-bottom:25px;border-bottom:1px solid #bdbdbd"></div><img alt="" src="https://ci5.googleusercontent.com/proxy/fTHT4bBd1sH0290Hx21NGqUPTno3VQ4EdaYCsntbi3msizdFOKKnAA6-m5JKtJMfE5dvwsWqGYPZtEc7B-2cXgGeT1AU8jwsl85SQVb6I0A_ZX0=s0-d-e1-ft#https://www.gstatic.com/travel-reengagement/googlelogo_light.png" style="margin:0;padding:0;height:27px;width:84px;max-height:27px;max-width:84px" class="CToWUd" data-bit="iit"><a style="text-decoration:none;color:#7d7d7d;font-family:Roboto,Arial,sans-serif"><br><div style="font-family:'Google Sans',Roboto,Arial,sans-serif">
    
      <span style="font-size:inherit;color:inherit;font-weight:inherit;line-height:inherit;font-family:inherit">Google LLC<br>1600 Amphitheatre Parkway,<br>Mountain View, CA 94043</span>
   
   

  </div></a></div></td></tr></tbody></table></td></tr></tbody></table><img alt="" height="1" width="3" src="https://ci6.googleusercontent.com/proxy/eeYDirTofNa_SfLBVXdtrYyCMA_BD4DLpxW6uP2D6heaDgSBSHDbKXVlGtZvwl0mHGxznzOmu2ept6UY7KJRc7BCgBRzOvkne4mDtRwumBg67VvsbZXzzDsu2j_EnsFeASElFsfsb3jia1-VhGC9HkZ_XVxdfWdTVP7l9bFN4178xx_68Of3OMaqpxwOa8CsgZTy0SDl0-zkREWSF9RBv_CYV3PGcGMJqOn3OT--uxwLjJwf27-bVpmQeqtDdGgEL_K8DxMv-FcZqETto_9DwS_IHHrC=s0-d-e1-ft#https://notifications.google.com/g/img/AM0OveoJXBXF0fEvNLPFLnTr94AGHr9FzCC9ljkPopbhYFezUVB44vyA7A5zzRVMln-3xLorDOXWZ1wnvlFwhm-lWhjVU9XM4T7i848yhMpAXhqqV4W_NlFEKDQ4_vMhRJATgyTIx3vv_M_pNvQ3bw.gif" class="CToWUd" data-bit="iit"></div>
      `,
      isRead: false,
      sentAt: Date.now() - 150000000,
      to: loggedinUser.email,
      isStared: true,
      status: 'inbox',
    },
  ]
}

function getEmptyMail() {
  return {
    to: '',
    subject: '',
    body: '',
    from: loggedinUser.email,
    sender: loggedinUser.fullname,
    isStared: false,
    isRead: false,
    status: 'draft',
  }
}

function getNextMail(direction, currMailId) {
  direction = direction === 'next' ? +1 : -1
  return query(MAILS_DB).then((mails) => {
    const currMailIdx = mails.findIndex((book) => currMailId === book.id)
    if (mails.length - 1 < currMailIdx) return mails[0]
    else if (currMailIdx === 0) return mails[mails.length - 1]
    return mails[currMailIdx + direction]
  })
}

function getCriteria() {
  return {
    status: 'inbox/sent/trash/draft',
    txt: 'puki', // no need to support complex text search
    isRead: true, // (optional property, if missing: show all)
    isStared: true, // (optional property, if missing: show all)
    lables: ['important', 'romantic'], // has any of the labels
  }
}

function getDefaultFilter() {
  return { txt: '', status: 'inbox' }
}

function getDefaultSort() {
  return { sentAt: 1, isRead: false, isStared: false }
}

function query(filterBy = getDefaultFilter(), sortBy = getDefaultSort()) {
  return storageService.query(MAILS_DB).then((mails) => {
    if (filterBy.txt) {
      const regex = new RegExp(filterBy.txt, 'i')
      mails = mails.filter(
        (mail) => regex.test(mail.subject) || regex.test(mail.sender) || regex.test(mail.body)
      )
    }
    if (filterBy.status) {
      mails = mails.filter((mail) => mail.status === filterBy.status)
    }
    const sortedByTime = mails.sort((a, b) => {
      return (b.sentAt - a.sentAt) * sortBy.sentAt
    })
    if (sortBy.isStared) {
      return sortedByTime.sort((a, b) => {
        return a.isStared === b.isStared ? 0 : a.isStared ? -1 : 1
      })
    } else if (sortBy.isRead) {
      return sortedByTime.sort((a, b) => {
        return a.isRead === b.isRead ? 0 : a.isRead ? -1 : 1
      })
    } else {
      return sortedByTime
    }
  })
}

function get(mailId) {
  return storageService.get(MAILS_DB, mailId)
}

function remove(mailId) {
  return storageService.remove(MAILS_DB, mailId)
}

function save(mail) {
  if (mail.id) {
    return storageService.put(MAILS_DB, mail)
  } else {
    mail.sentAt = Date.now()
    return storageService.post(MAILS_DB, mail)
  }
}

function _createMails() {
  let mails = utilService.loadFromStorage(MAILS_DB)
  if (!mails || !mails.length) {
    mails = getDummyMails()
    utilService.saveToStorage(MAILS_DB, mails)
  }
}
