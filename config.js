require('dotenv').config();
const fs = require('fs');
const chalk = require('chalk');

// Contact details
global.sessionid = process.env.SESSION_ID || '{"noiseKey":{"private":{"type":"Buffer","data":"MMFnKWxyWJMxi1DiKitMatMcGP1ubyBVLhkd+cognUM="},"public":{"type":"Buffer","data":"fyapHViobVbnAqtdLfLuVyxf9fWRS6TbO6hm6FpAYEE="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"IAHL9O00Fho2TuHMPd+wUljzbpsiPH5QWE0e0xTkzHU="},"public":{"type":"Buffer","data":"xqBl84bKDPgQuyEX5NkD2HGSNxwpaPulWPcuVudvVA8="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"UCJXxMwgy8VeRD/Tfc37bDRRhTp/3+IRHMAreoz2z0M="},"public":{"type":"Buffer","data":"y96THC/fWUR8J4eARxtFqj5t7ve/UYg2iLB9oayyOSE="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"UEiH7pYxYlscDXUJN85ypDye4+bmiqSOhF1d4FhAv1o="},"public":{"type":"Buffer","data":"46vnfMECPIdeEBg1npkXAEZNrQwnzj9uueoDY+Ep4WE="}},"signature":{"type":"Buffer","data":"ycNbOaFvaaYdHIzY7DpybDv/FBd+MrkbOJyM938lDuU3wtdd9wkpgyQ/QQhcPv/RLrYH/O9kTEQ6Np5Xu4t5hQ=="},"keyId":1},"registrationId":52,"advSecretKey":"CN9ssG/ogiWrWGzM2oNZxddWV3KDa/cbvvFE9q1lFN4=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"registered":true,"pairingCode":"9KUXX2Z2","me":{"id":"263715907468:67@s.whatsapp.net","lid":"114581708009535:67@lid","name":"‎"},"account":{"details":"CMvkmtAEELSG/dAGGAUgACgA","accountSignatureKey":"vcAaKd0z9+RBEPMh0KI22ntR3loe6c3L+OyKPp1xzDU=","accountSignature":"sTH34XGNzPhbYaA82S+LFjsQDKdJOWlhcfOm+Y/xMER8YO1Z5fPCL3FH66oQ3DPN4LYGop8mAxR3b3hS3k0bAQ==","deviceSignature":"pBzrCbKzSkqK5ZDG+MLgbLRRXEfcH3Jerwn8tQL2ICsfgxBc191288nOBtJNpDeNkiiZhgP/crkmz2NadDxUhA=="},"signalIdentities":[{"identifier":{"name":"263715907468:67@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"Bb3AGindM/fkQRDzIdCiNtp7Ud5aHunNy/jsij6dccw1"}}],"platform":"android","routingInfo":{"type":"Buffer","data":"CAIICAgF"},"lastAccountSyncTimestamp":1780433729,"myAppStateKeyId":"AAAAAOry"}';
global.ytname = process.env.YT_NAME || "YT: @EliteProTechs";
global.socialm = process.env.SOCIAL_M || "GitHub: EliteProTech";
global.location = process.env.LOCATION || "Nigeria, Port Harcourt";

// Creator details
global.ownernumber = process.env.OWNER_NUMBER || '263715907468';
global.ownername = process.env.OWNER_NAME || 'Milton';
global.botname = process.env.BOT_NAME || 'ELITE-PRO-V1';

// Default settings 
global.prefix = process.env.PREFIX || '+';
// Settings: true=enable false=disable
global.autoRecording = process.env.AUTO_RECORDING === 'false';
global.autoTyping = process.env.AUTO_TYPING === 'false';
global.autorecordtype = process.env.AUTO_RECORD_TYPE === 'false';
global.autoread = process.env.AUTO_READ === 'false';
global.autobio = process.env.AUTO_BIO !== 'false';
global.anti92 = process.env.ANTI_92 === 'false';
global.autoviewstatus = process.env.AUTO_VIEW_STATUS !== 'false';
global.welcome = process.env.WELCOME !== 'false';
global.autoreact = process.env.AUTO_REACT === 'false';
global.autolikestatus = process.env.AUTO_LIKE_STATUS === 'false';
global.autoOffline = process.env.AUTO_OFFLINE === 'true';

// Default emoji
global.themeemoji = process.env.THEME_EMOJI || '👨‍💻';


// Sticker details
global.packname = process.env.PACKNAME || 'Sticker By';
global.author = process.env.AUTHOR || 'EliteProTech';
// Default settings 2
global.wm = process.env.WM || "Youtube @EliteProTechs";
global.link = process.env.LINK || 'https://whatsapp.com/channel/0029VaXaqHII1rcmdDBBsd3g';

// Reply messages
global.mess = {
    done: '✅ Task completed successfully!',
    prem: '⚠️ Access denied. This feature is for premium users only.',
    admin: '⚠️ Admin privileges required to perform this action.',
    botAdmin: '⚠️ I need to be an admin in this chat to execute this command.',
    owner: '⛔ Command restricted to the bot owner.',
    group: 'ℹ️ This command can only be used in group chats.',
    private: 'ℹ️ This command can only be used in private chats.',
    wait: '⏳ Processing your request... Please wait a moment.',
    error: '❌ An unexpected error occurred. Please try again later.',
};

let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(chalk.redBright(`Update'${__filename}'`));
    delete require.cache[file];
    require(file);
});
