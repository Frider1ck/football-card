import React from "react";
import "./AddPlayer.css";
const AddPlayer = ({ AddNewPlayer }) => {
  const [active, setActive] = React.useState(true);
  const [error, setError] = React.useState("Добавить");

  const addPlayer = (e) => {
    e.preventDefault();

    if (!e.target[0].value) {
      setError("введите имя");

      return;
    }

    if (!e.target[1].value) {
      setError("введите фамилию");

      return;
    }

    if (!e.target[2].value) {
      setError("введите дату рождения");

      return;
    }

    if (!e.target[3].value) {
      setError("введите кол-во голов");

      return;
    }

    AddNewPlayer({
      numberOfGoals: e.target[3].value,
      player: {
        id: `${e.target[0].value}-${e.target[2].value}`,
        firstName: e.target[0].value,
        lastName: e.target[1].value,
        dateOfBirth: e.target[2].value,
      },
    });

    setError("Добавить");
    setActive(true);
  };
  return (
    <div
      className='add-card'
      onClick={() => {
        setActive(false);
      }}
    >
      {active ? (
        <>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 1V15"
              stroke="black"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path
              d="M1 8H15"
              stroke="black"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </svg>
          <p>Добавить игрока</p>
        </>
      ) : (
        <form onSubmit={addPlayer}>
          <lable>
            <span>Имя:</span> 
            <input />
          </lable>
          <lable>
            <span>Фамилия:</span>
            <input />
          </lable>
          <lable>
            <span>День рождение:</span> 
            <input type="date" />
          </lable>
          <lable>
            <span>Голов:</span> 
            <input type="number" min="0" />
          </lable>
          <button>{error}</button>
        </form>
      )}
    </div>
  );
};

export default AddPlayer;
