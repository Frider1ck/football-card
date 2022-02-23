import React from "react";
import "./App.css";
import axios from "axios";
import Header from "./Header";
import AddPlayer from "./AddPlayer";
import Card from "./Card";

const options = {
  method: "GET",
  url: "http://api.football-data.org/v2/competitions/SA/scorers",
  headers: {
    "X-Auth-Token": "eac51e5021ec404da57b734b45bd2f7a",
  },
};

const App = () => {
  const [cards, setCards] = React.useState([]);
  const [activeItem, setActiveactiveItem] = React.useState(3);
  const [request, setRequest] = React.useState("");

  const SortByGoals = (index) => {
    const newCard = cards.sort((item1, item2) => {
      return item2.numberOfGoals - item1.numberOfGoals;
    });

    setCards(newCard);
    setActiveactiveItem(index);
  };

  const SortByAge = (index) => {
    const newCard = cards.sort((item1, item2) => {
      return (
        Date.parse(item1.player.dateOfBirth) -
        Date.parse(item2.player.dateOfBirth)
      );
    });

    setCards(newCard);
    setActiveactiveItem(index);
  };

  const SortByName = (e) => {
    setRequest(e.target.value);
  };

  const AddNewPlayer = (player) => {
    setCards((cards) => [...cards, player]);
  };

  const RemovePlayer = (id) => {
    if (
      window.confirm("Вы действительно хотите удалить карточку футболиста?")
    ) {
      const newList = cards.filter((item) => {
        return item.player.id !== id;
      });
      setCards(newList);
    }
  };

  const EditPlayer = (id, itemPlayer) => {
    const newList = cards.map((item) => {
      if (item.player.id === id) {
        return itemPlayer;
      }

      return item;
    });
    setCards(newList);
  };

  React.useEffect(() => {
    axios
      .request(options)
      .then((response) => {
        console.log(response.data.scorers);
        setCards(response.data.scorers);
        localStorage.setItem("players", cards);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const newCards = request.trim() !== "" ? cards.filter((item) => {
          return item.player.firstName.toLowerCase().includes(request.toLowerCase());
        }) : cards;

  return (
    <div className="App">
      <Header
        activeItem={activeItem}
        SortByGoals={(index) => SortByGoals(index)}
        SortByName={(e) => SortByName(e)}
        SortByAge={(index) => SortByAge(index)}
      />
      <div className="container">
        {newCards.map((item, i) => {
          return (
            <Card
              key={`${item.name}_${i}`}
              item={item}
              RemovePlayer={(id) => RemovePlayer(id)}
              EditPlayer={(id, itemPlayer) => EditPlayer(id, itemPlayer)}
            />
          );
        })}
        <AddPlayer AddNewPlayer={(player) => AddNewPlayer(player)} />
      </div>
    </div>
  );
};

export default App;
