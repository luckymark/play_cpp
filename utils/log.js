//logger is global
logger = require('tracer').colorConsole({
    level:'log',
    format : "{{timestamp}} <{{title}}> {{message}} ({{file}}:{{line}})",
    dateformat : "yyyy-mm-dd HH:MM:ss.L"
})

