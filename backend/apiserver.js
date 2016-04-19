const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const serveStatic = require('serve-static');


var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport(process.env.CREDENTIALS);


module.exports = (PORT) =>{
    const app = express();
    console.log("HEJ",PORT);
    app.use(serveStatic(__dirname + "/src"));

    app.post('/sendmail', function (req, res) {
        var emails = ['jonathan.stahl@ecsolutionzs.se', 'petur.hjartarson@ecsolutions.se', 'oscar.lindahl@ecsolutions.se'] //req.body.emails;

        for (var i = 0; i < emails.length; i++) {
            this.sendMail(emails[i], steamKeys[i]);
        }
    });
    app.use(bodyParser.json());
    app.listen(PORT);

    app.post('/sendEmailToUsers', function (req, res) {

        console.log("email",req.body);
       /* for (var i = 0; i < emails.length; i++) {
            this.sendMail(emails[i], steamKeys[i]);
        }*/
    });
};

const sendMailToUser = (email, subject, message) => {
    var mailOptions = {
        from: '"Odd Comet Games" <information@oddcometgames.com>', // sender address
        to: email, //email // list of receivers
        subject: subject, // Subject line
        html: message
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);
    });
};

const sendMail = (email, key) => {
    var mailOptions = {
        from: '"Odd Comet Games" <information@oddcometgames.com>', // sender address
        to: email, //email // list of receivers
        subject: 'Your beta key to Castle Chaos', // Subject line
        html: '<h3>Welcome to the new Castle Chaos beta 🐴</h3> ' +
        '<p>Join this exclusive beta for Castle Chaos! </p>' +
        '<p>Hundreds of players will try out our new multiplayer mode so get ready for some awesomeness online. </p>' +
        '<p>Yours truly</p>' +
        '<p>Jonathan and Henrik</p>' +
        '<h1>Your steam key: ' + key + '</h1>'
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);
    });
};


const steamKeys = ["TJGN0-BX3DI-MW82B",
    "CN4AX-JW7HP-QXHLN",
    "EWM2I-0MG5J-0QXXB",
    "527AQ-FTD64-94C2Z",
    "2TJW2-RQ4YP-YI0FI",
    "VYZE0-B79AL-A50YG",
    "XAWNJ-WB35B-YMAXL",
    "5TVGJ-A9HBC-KLD2N",
    "V0MHJ-7TJ5K-LVJ6T",
    "KF4I2-JIJFJ-IWDCJ",
    "6EQ40-NEHPY-ABJ6F",
    "BAHHF-5QZFV-XD8LA",
    "9G6WW-27N30-06C0H",
    "HBLCI-48ZPH-Q5DQ3",
    "VGL87-3XX7N-5DZ3Q",
    "R4GB3-CLGFK-3CVM7",
    "WQZN2-CLW8E-8HKJZ",
    "29DG4-RD3WJ-AZHXJ",
    "8FE36-VGECV-GZLXQ",
    "9FXCT-W37Z9-EWQ0Y",
    "FDF49-IIH37-7VAEN",
    "49FEF-PKHM2-LADRW",
    "55NX5-6Y30W-IX70L",
    "ICL7D-VCRAV-PG00Q",
    "0YPGJ-C3X5H-Q5BT2",
    "443P5-8F3VG-DFCFT",
    "H86XD-3F4BC-L25PE",
    "XZK8M-BGZQZ-47CV7",
    "D8KYX-GNM5Y-IV5PL",
    "YZ6KH-5GB8E-K55L3",
    "LPB4Y-BDW72-RG28F",
    "7NYIN-3I20T-V2CR5",
    "6N2TI-7A3XK-4K6NM",
    "8AKXT-8XPCK-DZ5RW",
    "3LCYM-3D02Q-YATXX",
    "L5RV4-ZF8KN-KYJ9F",
    "00J6E-09B4P-24X0H",
    "W5ZL5-KNQG8-HEQTJ",
    "ZRL7M-37PFK-LRFV3",
    "5X2NA-VRZAD-Z88FY",
    "RZE35-NFPC7-PEW8H",
    "MY0MD-473FX-ZX23I",
    "96DIC-YJKDC-3J6Z5",
    "DEFQE-L0HIB-NDQ5N",
    "JP2K9-J02HF-4VQFZ",
    "C3RVF-B0R3V-T8C0L",
    "N8N4I-7MWMZ-QDZGC",
    "AXLWG-YVWAF-8MDMV",
    "QFE9V-4GZWF-0Y0LF",
    "389MH-W6APY-N48L4",
    "ETKDM-NNXJW-QI2GD",
    "GN02Q-YJAVN-36XYW",
    "T9VGL-04FAK-QW44Q",
    "5C8AY-V8FFB-WRLH3",
    "RKGHY-6AT8N-Y0BBJ",
    "ZKHPD-5ND0R-EIWJ5",
    "44WNJ-P3EBA-ICX3J",
    "ZV6M4-2VN7P-3LG8H",
    "2QGBK-M9KL0-FQYJ7",
    "BRQ50-TG293-4875N",
    "NPIHI-DKG9D-NBT5E",
    "5AI7T-KLT4D-V0FDG",
    "WNMXV-3AWJJ-ZRT9B",
    "CQ6BT-9AYZE-BJL67",
    "2XG8A-A8ZWC-YBDWH",
    "H6XG3-TMVZV-HLR8B",
    "YTM3V-GWJDV-XW5DC",
    "CGNPG-GDELE-CK8MM",
    "4M0D3-CVVW9-0FQ42",
    "R5EV9-BY2LT-VI8EG",
    "NXZ8A-K9R5Y-4YNWM",
    "5BQ25-ATBB3-XDT8Q",
    "G6V90-N35A5-G4NGQ",
    "AR2LP-8FPXW-CEBGA",
    "0J0L8-VCCBQ-KNP97",
    "D26W9-49RPR-40Z40",
    "6RD4X-AQ45R-85J8A",
    "V73M5-7DG5F-JYCB8",
    "MC89G-WN8R0-0WDC2",
    "QFT69-XF0DZ-CP7Z0",
    "JNREW-N0N42-9B6G2",
    "ZQV7T-KBQ4G-6DLLI",
    "PGM6G-TYWD9-Q0K6I",
    "BB0TN-R2EDN-NP5KK",
    "XDXA4-0XZAC-FTNAV",
    "LK589-XQZGV-28P2Y",
    "0R4GE-YRVE6-LZ8HR",
    "MY42X-ERFQW-DZ3DE",
    "2MYBJ-D5IQA-5VHZF",
    "DVE4T-Y2BB6-7CL8L",
    "TNLIV-GWYP4-BFNF0",
    "2942A-BEM7L-ADXZB",
    "2JWHK-E7C0D-3YE3Q",
    "PF7FT-DQK5F-YW8XD",
    "XILAR-Z5NEA-5KF8K",
    "DK32A-WVV3K-T9YNW",
    "VW6TE-VZ4G2-KJY42",
    "GA9KD-975MD-XF8EI",
    "GWF8P-M07Z0-Y0YZN",
    "THFWR-I5QXY-QMTDD",
    "JRM07-MYLJF-95H32",
    "77KY2-CEB22-FPFB4",
    "L4N7E-WKCJJ-KXCRJ",
    "MRGTJ-YM33W-256I9",
    "4LHNK-LIYAC-M9FE3",
    "R56FB-CDLTB-2XGI7",
    "DCRQL-ARWY3-TZK50",
    "C8NHL-GBPNG-97QIJ",
    "FTW3R-3YEA3-EL3KV",
    "FL4YD-XR63D-XXZ6R",
    "4BKRT-0W7HD-PBPKP",
    "27R66-EBGFI-J50PW",
    "H83IL-CND03-QAMDI",
    "E988X-3TZ95-4YXM0",
    "V3YRZ-3BJE2-NX7ZB",
    "C6BZR-NXN29-JH37G",
    "4RPNI-MAC33-2WE2L",
    "IFGD9-KH3PX-WCCP3",
    "K9QYH-YP2TI-V0DWF",
    "6XZNY-9YRL4-GJEM4",
    "KEVKV-VTNK2-ANYJ8",
    "FDB4H-WVM55-02VE5",
    "BZW94-XPT5X-RBQD2",
    "XGX6L-H76ZR-7CHB6",
    "30E65-23D48-2PMY2",
    "HLXRH-HPRVD-KWQ3T",
    "680EQ-VBJIK-PMWQ9",
    "YRYRB-XK3VV-44XKB",
    "9MWRJ-8EBYD-8GRZ8",
    "V5D82-R65VC-WKHK5",
    "4TQQV-ZJPQI-Z3CXB",
    "MN9LY-E37NQ-Z0ITB",
    "Q8282-PMNNT-6C3PC",
    "T7TWG-7K89Y-QJB5D",
    "A6B0G-FPGDG-7TB44",
    "M5L0P-ITXZY-2NFAI",
    "RCPV6-CMR0Z-L4JX8",
    "EDRWZ-CYZTC-5F59A",
    "9AAIE-QVGQ6-DH5GE",
    "KIYJG-2F6XD-PN4RT",
    "VK48G-5GM7J-72F3B",
    "D6BPN-0Z4GE-9AL2I",
    "ZMA44-DGIAT-AJK37",
    "DN84P-P723F-RHKLT",
    "NKWCD-GVYQX-AJ7RC",
    "AWH85-XZAYN-5RPGW",
    "HJX69-MB3IF-WJPVZ",
    "P8LRV-6Y83E-KA93C",
    "LN4AC-XYQIY-MVXT4",
    "VYVH4-ZENPW-V06QW",
    "IBHQ2-QB039-RBAPI",
    "360MW-57K0T-T9LXJ",
    "JND2R-ECB7P-5GP3P",
    "TG397-D69ZL-YIBGA"]