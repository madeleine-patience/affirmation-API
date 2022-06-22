const express= require('express')
const app = express()
const PORT =8000

const affirmation ={

'love':{
    'one':"I deserve love and affection" ,
    2:"I am open to love" ,
    3:"I will allow the universe to help me find love"  ,
    4:"I love myself" ,
    5:"I am fulfilled",
    6: "I deserve love as I am", 
},
'money':{
    1:"I attract money to me easily and effortlessly." ,
    2:"I am a money magnet." ,
    3:"My finances improve beyond my dreams."  ,
    4:"Money is abundant, and I attract it naturally." ,
    5:"I can find the positive in my money situation.",
    6: "I allow prosperity to flow into my life.", 
},
'friendship':{
    1:"I feel safe with my friends and family." ,
    2:"I love making friends that I genuinely admire." ,
    3:"Everyone in my circle is a loyal and trustworthy person."  ,
    4:"I can make friends naturally and without effort." ,
    5:"I pick only the best people to make friends with.",
    6: "Loving myself lets me love my friends genuinely.", 
}



}




app.get('/', (request,response)=>{
response.sendFile(__dirname+'/index.html')


})

app.get('/api/:affirm', (request,response)=>{
let affirmationrequest= request.params.affirm
if(affirmation[affirmationrequest]){
    response.json(affirmation[affirmationrequest])

}




})








app.listen(PORT,()=> {
    console.log (`The server is now running on ${PORT}`)


})