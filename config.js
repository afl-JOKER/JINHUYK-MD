//#ENJOY BRO😍
// Credit: JINHUYK|KangJinhuyk 
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kangjinhuyk@yahoo.com";
global.location = "Douala, Cameroun";
global.mongodb = process.env.MONGODB_URL || "mongodb+srv://Rayan:<Emmanuel237>@cluster0.8twd0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/KangJinhuyk/JINHUYK-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vajrhmz96H4IsEjh4a41";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vajrhmz96H4IsEjh4a41";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/TAGPcMC.jpeg,https://files.catbox.moe/59iafh.jpg,https://files.catbox.moe/jynitk.jpg,https://files.catbox.moe/dohubs.jpg,https://files.catbox.moe/nm85c3.jpg";
global.devs = "https://wa.me/242067274660 , https://wa.me/243849962848";
global.sudo = process.env.SUDO || "237693132795";
global.owner = process.env.OWNER_NUMBER || "237650253977";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/xvYDAsD.jpeg,https://i.imgur.com/TAGPcMC.jpeg,https://endpoint.web.id/server/file/I8dkDXm1nJDtOI75.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://unknown-md-sessions-generator-1.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK016NVdrRHMzTkRuZy9TRm50TkZaMGIzNTNKYTQ5emZwYlFYcVNZZkdYMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRGd3bG5LVTVIK2VIZnBtZVRSa3VDdGlYa3lRSVNTcUhvSTJSYTNJeU1YQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFSWpSbHBINk9PT1lkSjdYM0h3WWEzRVpVRUxVSDlnUCtpUE93WFg3TTF3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2UGJPKzJwdmMva2ZkNGxzTTRIRTZqOFNST1ZqZTVGb2EwOElrTExVV0hFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZMem1PQ2Y0UGJ1SVI0YW5lemNRK21LRFY4UDNNY1JBTXNCL2ZYYlJTV3M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZTN3NwZk1JTzBqTjVubzJIdnB2MUtTcjQzWmxZK05oQkVCTGd6NHRQUXM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNE12WjEybUlidTVOVExVNFRkMGdRK3ZDUnkrWktlQXlJKzlrd09wS25Xbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWW5qZ3p0ODNGaEp4bHc5Wk5ITXNLaEFNRTRXL0NIaDNzYjFDZFMxT2ZYTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5RWVR2Y0h6SGZJT2dqamd3MHJSM3ZmMDNyUFVSMVY5Zm94M0g3WDRUQ0lnWUNjOE5SZ1h5UllXR254eFNhTmJqTkhmWnB5UFhWWHdOdlJsUUhKMGlnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjM4LCJhZHZTZWNyZXRLZXkiOiJVU3dMWjV1SkczaUZ1YU9UeDFxZG1xU0VocVY3YVFFZTZiMzJpdkxzTmNNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJjdWhQUDBpRVMwYXN5ejZuWXc5RW1RIiwicGhvbmVJZCI6IjVmMjQxM2FjLTE0MjQtNDdlMC1hNDg2LTA1NGI1NmI2NmE5NSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjWitTdit3Mkg4N0RVWXJsL1FLRnM0dG1RQ0U9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV1ZaNzFMQlNOYU1MQUF2R1hDWUM4d2JCMzdFPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkpUMVhNQ1ZaIiwibWUiOnsiaWQiOiIyMzc2NTAyNTM5Nzc6NzNAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0wzdHZRb1FxczN2dVFZWUJ5QUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlNvQzVGbVBBa1R2NHBaQTdIaWdmT0E1RllKVTc3WFBjKzViT2ZkajFTalU9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlcwNmZVcWthK2dmMDNjeGNySWx5QlFOTWF3eEl4ekd3NGc2Y1JxNldmYjRQNG9laHRvOFVNU01LUVVWQU05UGNQeWpHTmJQTUlwZGRKQWRQbE9uNUFnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ0Q2ovdDl3RG1kdGNtZHZNV1dkRGJTN3ZDYW5YZ2pZUzh2em9NT1oybVhVWnMwbUwwaytLYXdOMjVsVk40aGRmeXc1NWRnOHhPdVZBS3NIUnZFeG1pdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNzY1MDI1Mzk3Nzo3M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJVcUF1Ulpqd0pFNytLV1FPeDRvSHpnT1JXQ1ZPKzF6M1B1V3puM1k5VW8xIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMxOTc4OTM2LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUdRcyJ9"
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF TOBI`",
  author: process.env.PACK_AUTHER || "AFL JOKER",
  packname: process.env.PACK_NAME || "KMG",
  botname: process.env.BOT_NAME || "𝐉OKER-𝚳𝐃",
  ownername: process.env.OWNER_NAME || "T𝒐Bi",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "JINHUYK").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
