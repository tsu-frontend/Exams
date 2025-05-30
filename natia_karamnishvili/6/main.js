// part' 1'
function returnPromise(){
return new Promise((resolve) =>{
    setTimeout(() => {
        resolve('times up')
    }, 2000);
})
}

returnPromise().then((result) =>{
    console.log(result)
})



//part 2
async function getResult(){
    const result = await returnPromise()
    console.log(result)
} 

getResult()



// part 3
async function sendData(){
    const URL = `https://jsonplaceholder.typicode.com/posts`
    try{
        const response = await fetch(URL, {
            method: 'POST',
             headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                    "userId": 1,
                    "id": 1,
                    "title": "sunt aut facere reprehenderit",
                    "body": "quia et suscipit suscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
            })
            
        })
        const data = await response.json()
        console.log('success:', data)
    }
    catch(err){
       console.error(err)
    }
}
// sendData()



// part 4
async function getData(){
    const URL = 'https://jsonplaceholder.typicode.com/posts?_limit=5'
    try{
        const response = await fetch(URL, {
            method: 'GET',
        }

        )
        const data = await response.json()
        console.log('data:', data)
    }
    catch(err){
      console.log(err)
    }
}

getData()