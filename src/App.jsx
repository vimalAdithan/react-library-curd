import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { BookAddForm } from "./BookAddForm";
import { BookInfo } from "./BookInfo";
import { BookList } from "./BookList";
import { BookEdit } from "./BookEdit";

function App() {
  const [list, setList] = useState([
    {
      Bookname: "Little Red Riding Hood",
      Rating: "7.7",
      Author: "J. W. Smith",
      Image:
        "https://cdn.shopify.com/s/files/1/0100/4001/6992/products/buy-little-red-riding-hood-story-book-9788131940877-urdu-bazaar-37896454930669@2x.jpg?v=1665961017",
      Summary:
        "The story of Little Red Riding Hood is a folktale that was originally penned by Charles Perrault, and made popular by the Brothers Grimm. It's about a little girl, who wears an emblematic red velvet hood, who mistakes a wolf for her grandma! It's a great tale to explore aspects of 'stranger danger'.",
      id: "1",
    },
    {
      Bookname: "The Gaurdians Of Lore",
      Rating: "9.5",
      Author: " Daniel Errico",
      Image:
        "https://images.squarespace-cdn.com/content/v1/5493706de4b0ecaa4047b871/7e4cb9c1-9bcf-434d-8223-7e5059e21e2b/GuardianCoverFull.jpg",
      Summary:
        "The Guardians of Lore is a middle grade novel that centers around two life-long friends, infusing humor and fantasy-based riddles into a modern fairytale. This is an exceptionally written intriguing piece of work that enthuses and imbues curiosity in young readers to discover the unknown with a spirit of adventure.",
      id: "2",
    },
    {
      Bookname: "Adventure In North Pole",
      Rating: "7.0",
      Author: " Arjit Jha",
      Image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpsUNSqGfpt2azo5n9tK38Kuaopte_RKoCgg&usqp=CAU",
      Summary:
        "A man dies under mysterious circumstances. After his death, his wife remarries but her sons, Antonio and Jayden, find it difficult to bond with their step-father. They tolerate him on account of their mother. They do not want anyone to try and take their father's place.",
      id: "3",
    },
  ]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/book"
          element={<BookList list={list} setList={setList} />}
        />
        <Route
          path="/book/add"
          element={<BookAddForm list={list} setList={setList} />}
        />
        <Route path="/book/:id" element={<BookInfo list={list} />} />
        <Route path="/book/edit/:id" element={<BookEdit ucard={list} />} />
      </Routes>
    </div>
  );
}
export default App;
