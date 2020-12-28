import React,{useMemo} from "react";

const users = [
  { id: "a", name: "Vivek" },
  { id: "b", name: "Rahul" },
  { id: "c", name: "Ankit" },
  { id: "d", name: "Palak" },
  { id: "e", name: "Shivani" },
];

const UseMemo = () => {
  const [text, setText] = React.useState("");
  const [search, setSearch] = React.useState("");

  const handleText = (event) => {
    setText(event.target.value);
  };

  const handleSearch = () => {
    setSearch(text);
  };

  const filteredUsers = 
    users.filter((user) => {
      console.log("Rendering filter users");
      return user.name.toLowerCase().includes(search.toLowerCase());
    });
  return (
    <div>
      <input type="text" value={text} onChange={handleText} />
      <button type="button" onClick={handleSearch}>
        Search
      </button>

      <List list={filteredUsers} />
    </div>
  );
};

const List = ({ list }) => {
  return (
    <ul>
      {list.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

const ListItem = ({ item }) => {
  return <li>{item.name}</li>;
};

export default UseMemo;
