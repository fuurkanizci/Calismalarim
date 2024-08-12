import { useState } from "react";

function List({ contacts }) {
  const [filterText, setFilterText] = useState("");
  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key].toString().toLowerCase().includes(filterText.toLowerCase())
    );
  });
  console.log("filtered", filtered);
  return (
    <div>
      <input
        placeholder="Filter Contact"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      <ul className="list texts-kln">
        {filtered.map((contact, i) => (
          <li key={i}>
            Ad-Soyad= {contact.fullname}
            <br />
            Tel No= {contact.phone_number}
          </li>
        ))}
      </ul>
      <p className="texts-kln"> Total Contacts ({filtered.length})</p>
    </div>
  );
}

export default List;
