import React, { useState } from 'react'
const userinfo=[
    {
      "postId": 1,
      "id": 1,
      "name": "id labore ex et quam laborum",
      "email": "Eliseo@gardner.biz",
      "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
    },
    {
      "postId": 1,
      "id": 2,
      "name": "quo vero reiciendis velit similique earum",
      "email": "Jayne_Kuhic@sydney.com",
      "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
    },
    {
      "postId": 1,
      "id": 3,
      "name": "odio adipisci rerum aut animi",
      "email": "Nikita@garfield.biz",
      "body": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
    },
    {
      "postId": 1,
      "id": 4,
      "name": "alias odio sit",
      "email": "Lew@alysha.tv",
      "body": "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati"
    },
    {
      "postId": 1,
      "id": 5,
      "name": "vero eaque aliquid doloribus et culpa",
      "email": "Hayden@althea.biz",
      "body": "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et"
    }
  ]

function UserInfo() {
    
    const [users,setUsers]=useState(userinfo);
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [content,setContent]=useState('');
    const [editUser,setEditUser]=useState(null);
 

  const addUser=()=>{

    const newUsers={
      postId:"1",
      id:Date.now(),
      name:name,
      email:email,
      body:content
    };

   if(editUser)
   {
    setUsers(users.map((items)=>(
       items.id===editUser ? {...items,name,email,body:content}:items)));
    setEditUser(null);
   }
   else{
    setUsers([...users,newUsers]);
   
   }
   setName('');
    setEmail('');
    setContent('')



   
  }
    const deleteAll=()=>{
        setUsers([])
    }

    const deleteOne=(id)=>{
        setUsers(users.filter((items)=>{
            return items.id!==id;
        }))
    }
    
    const editUserInfo=(id,name,email,content)=>
    {
        setEditUser(id);
        setName(name);
        setEmail(email);
        setContent(content);

    }

  return (

    <div>
        <h1>User Info</h1>
         Name:- <input 
        type='text'
        placeholder='enter here'
        value={name}
        onChange={(e)=>setName(e.target.value)}
        />
        Email:- <input 
        type='email'
        placeholder='enter here'
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        />
          Content:- <textarea
          rows={10}
          cols={10} 
        type='text'
        placeholder='enter here'
        value={content}
        onChange={(e)=>setContent(e.target.value)}
        />
       <button onClick={addUser}>{editUser?"edit":"add"}</button>
<br></br>       
        <button onClick={deleteAll}>Delete-All</button>
        {
            users.map((values)=>{
                return<div key={values.id}>
                    <h2>Name:- {values.name}</h2>
                    <h3>Id:- {values.id}</h3>
                    <h4>Email :- { values.email}</h4>
                    <p>Content :- {values.body}</p>
                  <button onClick={()=>deleteOne(values.id)}>Delete</button>
                  <button onClick={()=>editUserInfo(values.id,values.name,values.email,values.body)} >edit</button>
                </div>
            })
        }
      
    </div>
  )
}

export default UserInfo
