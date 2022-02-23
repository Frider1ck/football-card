import React from "react";
import "./card.css";
const Card = ({ item, RemovePlayer, EditPlayer }) => {
  const [change, setChenge] = React.useState(true);
  const [error, setError] = React.useState("Добавить");

  const onClickEdit = () => {
    if(window.confirm("Вы действительно хотите изменить карточку футболиста?")) {
      setChenge(false)
    }
  }

  const CheckEditPlayer = (e) => {
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

    EditPlayer(item.player.id,{
      numberOfGoals: e.target[3].value,
      player: {
        id: item.player.id,
        firstName: e.target[0].value,
        lastName: e.target[1].value,
        dateOfBirth: e.target[2].value,
      },
    });

    setError("Добавить");
    setChenge(true);
  };
  return (
    <div key={item.player.id} className={change ? "card" : "add-card"}>
      {change ? (
        <>
          <svg
            onClick={() => RemovePlayer(item.player.id)}
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.87215 5.5L10.7129 1.65926C10.8952 1.47731 10.9977 1.23039 10.9979 0.972832C10.9982 0.715276 10.8961 0.468178 10.7141 0.285898C10.5321 0.103617 10.2852 0.00108525 10.0277 0.000857792C9.77011 0.000630336 9.52302 0.102726 9.34074 0.284685L5.5 4.12542L1.65926 0.284685C1.47698 0.102404 1.22976 0 0.971974 0C0.714191 0 0.466965 0.102404 0.284685 0.284685C0.102404 0.466965 0 0.714191 0 0.971974C0 1.22976 0.102404 1.47698 0.284685 1.65926L4.12542 5.5L0.284685 9.34074C0.102404 9.52302 0 9.77024 0 10.028C0 10.2858 0.102404 10.533 0.284685 10.7153C0.466965 10.8976 0.714191 11 0.971974 11C1.22976 11 1.47698 10.8976 1.65926 10.7153L5.5 6.87458L9.34074 10.7153C9.52302 10.8976 9.77024 11 10.028 11C10.2858 11 10.533 10.8976 10.7153 10.7153C10.8976 10.533 11 10.2858 11 10.028C11 9.77024 10.8976 9.52302 10.7153 9.34074L6.87215 5.5Z"
              fill="black"
            />
          </svg>
          <svg
            onClick={onClickEdit}
            width="12"
            height="12"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 12.0504V14.5834C0 14.8167 0.183308 15 0.41661 15H2.9496C3.05792 15 3.16624 14.9583 3.24123 14.875L12.34 5.78458L9.21542 2.66001L0.124983 11.7504C0.0416611 11.8338 0 11.9337 0 12.0504ZM14.7563 3.36825C14.8336 3.29116 14.8949 3.1996 14.9367 3.0988C14.9785 2.99801 15 2.88995 15 2.78083C15 2.6717 14.9785 2.56365 14.9367 2.46285C14.8949 2.36205 14.8336 2.27049 14.7563 2.19341L12.8066 0.24367C12.7295 0.166428 12.638 0.105146 12.5372 0.0633343C12.4364 0.021522 12.3283 0 12.2192 0C12.1101 0 12.002 0.021522 11.9012 0.0633343C11.8004 0.105146 11.7088 0.166428 11.6318 0.24367L10.107 1.76846L13.2315 4.89304L14.7563 3.36825V3.36825Z"
              fill="black"
            />
          </svg>

          <div>
            <p>Имя: {item.player.firstName}</p>
            <p>Фамилия: {item.player.lastName ? item.player.lastName : 'Hету'}</p>
            <p>День рождение: {item.player.dateOfBirth}</p>
            <p>Голов : {item.numberOfGoals}</p>
          </div>
        </>
      ) : (
        <form onSubmit={CheckEditPlayer}>
          <lable>
            Имя: <input defaultValue={item.player.firstName}></input>
          </lable>
          <lable>
            Фамилия:
            <input defaultValue={item.player.lastName} />
          </lable>
          <lable>
            День рождение:
            <input type="date" defaultValue={item.player.dateOfBirth} />
          </lable>
          <lable>
            Голов:
            <input type="number" min="0" defaultValue={item.numberOfGoals} />
          </lable>
          <button>{error}</button>
        </form>
      )}
    </div>
  );
};

export default Card;
