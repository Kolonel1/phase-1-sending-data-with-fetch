//shocking apparently you can send a form using the inbuilt method 
//so you can nest the input inside the label of the input 
//i think any input that is in a form that is a submit one is for the whole form 
//in using fetch to do a post we have the first argument as the link 
//and a js object as the second argument
//Each individual header is stored as a key/value pair inside an object. 

/*fetch(destinationURL, configurationObject);
const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",//shows what format of data we accept back
    },
  };

 // When sending data using fetch(), we often send multiple pieces of information in one request. In our code, we often organize this information using objects. Consider the following object, for instance:
  
 
 //final product
 fetch(destinationURL,configurationObject)
 .then(function(response){
    return response.json();
 })
 .then(function(object){
    console.log(object)
 })
 .catch(function(error){
    alert('bad things!ragnarok');
    console.log(error.message)
 })

 const formData = {
    dogName: "Byron",
    dogBreed: "Poodle",
  };
  
  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(formData),
  };

  //making it more general */
 
  function submitData(name,email){

    let userDetails={
        name:`${name}`,
        email:`${email}`
    }
    let post={
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            Accept:'application/json'
        },
        body:JSON.stringify(userDetails)
        
    }
    fetch('http://localhost:3000/users',post)
    .then(response => response.json())
    .then(data => append(data))
    .catch(function(error){
        console.log('error is',error)
    })
   
  }

//function remove(){
   
  //  let remove = {
    //    method:'DELETE',
    //

 //fetch('http://localhost:3000/users/26',remove)
//}

function append(data){
    let p = document.createElement('p')
    p.innerHTML=data.id
    document.body.append(p)
}

fetch('http://localhost:3000/users')
.then(response => response.json())
.then(data => console.log(data))

//not that .json is a function and you have to call it in order for it to work
