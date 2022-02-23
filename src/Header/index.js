import React from 'react'
import './header.css'
const Header = ({SortByAge, activeItem, SortByGoals, SortByName}) => {

  return (
    <header>
          <div className="topnav">
            <p>
              Сортировка по :
            </p>
            <button className={activeItem === 0 ? "active" : ""} 
              onClick={() => SortByAge(0)}
            >
              Возрасту
            </button>
            <button className={activeItem === 1 ? "active" : ""}
              onClick={() => SortByGoals(1)}
            >
              Количеству голов
            </button>
            <div className="search-container">
              <form>
                <input 
                  type="text" 
                  placeholder="Сортировка по имени" 
                  name="search" 
                  onChange={SortByName} 
                  autoComplete="off"
                />
              </form>
            </div>
        </div>
      </header>
  )
}

export default Header