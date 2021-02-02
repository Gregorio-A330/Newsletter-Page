const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const https = require('https')

const app = express()
//serve para indicar uma pasta estatica, pois nosso arquivo principal está sendo criado dinamicamente
// e a chamada dos arquivos como pasta/arquivo.css  exemplo css/signup.css
app.use(express.static("public"))

app.use(bodyParser.urlencoded({ extended: true }))



app.get("/", function (req, res) {
    res.sendFile(__dirname + "/signup.html")

})



app.post("/", function (req, res) {

    const firstName = req.body.fName
    const lastName = req.body.lName
    const email = req.body.email

    const data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    };

    const jsonData = JSON.stringify(data)

    const url = "https://us7.api.mailchimp.com/3.0/lists/74b836e59e";

    const options = {
        method: "POST",
        auth: "gregorio20:4235a851f02270d5b6cc009697dcc4be-us7"
    }

    const request = https.request(url, options, function (response) {

        if (response.statusCode === 200){
            res.sendFile(__dirname + "/success.html");
        }else{
            res.sendFile(__dirname + "/failure.html");
        }

        response.on("data", function (data) {
            console.log(JSON.parse(data));
        })
    })
    request.write(jsonData)
    request.end();

})

//depois de receber o metodo post e indicar a rota ele vem até aqui e indica a rota e da trigger na callback function 
// que a mesma vai entrar e retornar uma resposta que neste caso vai ser redirecione para a pagina pricipal
app.post("/failure", function(req, res){
    res.redirect("/")
})




//process.env.PORT deixa a porta automatica quando subir na aplicação ou porta padrão 3000 para rodar localmente
app.listen(process.env.PORT || 3000, function () {
    console.log("Server is running on port 3000")

})
//
//https://mailchimp.com/developer/

//apiKey
//4235a851f02270d5b6cc009697dcc4be-us7

//List ID
//74b836e59e