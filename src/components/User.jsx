import React, { useState } from 'react';

const userinfo = [
  { postId: 1, id: 1, name: "id labore ex et quam laborum", email: "Eliseo@gardner.biz", body: "laudantium enim quasi est quidem magnam voluptate ipsam eos tempora quo necessitatibus dolor quam autem quasi reiciendis et nam sapiente accusantium" },
  { postId: 1, id: 2, name: "quo vero reiciendis velit similique earum", email: "Jayne_Kuhic@sydney.com", body: "est natus enim nihil est dolore omnis voluptatem numquam et omnis occaecati quod ullam at voluptatem error expedita pariatur nihil sint nostrum voluptatem reiciendis et" },
  { postId: 1, id: 3, name: "odio adipisci rerum aut animi", email: "Nikita@garfield.biz", body: "quia molestiae reprehenderit quasi aspernatur aut expedita occaecati aliquam eveniet laudantium omnis quibusdam delectus saepe quia accusamus maiores nam est cum et ducimus et vero voluptates excepturi deleniti ratione" },
  { postId: 1, id: 4, name: "alias odio sit", email: "Lew@alysha.tv", body: "non et atque occaecati deserunt quas accusantium unde odit nobis qui voluptatem quia voluptas consequuntur itaque dolor et qui rerum deleniti ut occaecati" },
  { postId: 1, id: 5, name: "vero eaque aliquid doloribus et culpa", email: "Hayden@althea.biz", body: "harum non quasi et ratione tempore iure ex voluptates in ratione harum architecto fugit inventore cupiditate voluptates magni quo et" }
];

function User() {
  const [users, setUsers] = useState(userinfo);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [content, setContent] = useState('');
  const [editUser, setEditUser] = useState(null);

  const addUser = () => {
    const newUser = {
      postId: "1",
      id: Date.now(),
      name: name,
      email: email,
      body: content
    };

    if (editUser) {
      setUsers(users.map((item) => (item.id === editUser ? { ...item, name, email, body: content } : item)));
      setEditUser(null);
    } else {
      setUsers([...users, newUser]);
    }

    // Reset input fields
    setName('');
    setEmail('');
    setContent('');
  };

  const deleteAll = () => {
    setUsers([]);
  };

  const deleteOne = (id) => {
    setUsers(users.filter((item) => item.id !== id));
  };

  const editUserInfo = (id, name, email, body) => {
    setEditUser(id);
    setName(name);
    setEmail(email);
    setContent(body);
  };

  return (
    <div>
      <h1>User Info</h1>
      <label>
        Name: <input type='text' placeholder='Enter here' value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Email: <input type='text' placeholder='Enter here' value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br />
      <label>
        Content: <input type='text' placeholder='Enter here' value={content} onChange={(e) => setContent(e.target.value)} />
      </label>
      <br />
      <button onClick={addUser}>{editUser ? "Edit" : "Add"}</button>
      <br /><br />
      <button onClick={deleteAll}>Delete All</button>

      {users.map((user) => (
        <div key={user.id}>
          <h2>Name: {user.name}</h2>
          <h3>ID: {user.id}</h3>
          <h4>Email: {user.email}</h4>
          <p>Content: {user.body}</p>
          <button onClick={() => deleteOne(user.id)}>Delete</button>
          <button onClick={() => editUserInfo(user.id, user.name, user.email, user.body)}>Edit</button>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default User;
