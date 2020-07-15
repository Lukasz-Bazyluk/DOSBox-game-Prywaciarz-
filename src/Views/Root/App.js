import React from "react";
import styles from "./App.module.scss";

import Items from "../../Components/Items/Items";
// import Account from '../../Components/Account/Account'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      randomEvents: [
        {
          text: "Zaplaciles podatek od nieruchomosci",
          val: Math.random() * 1500 + 300,
        },
        {
          text:
            "Podczas podrózy zostales przewieziony do szpitala. Koszt pobytu -2000$",
          val: Math.random() * 1500 + 300,
        },
        {
          text: "Zaplaciles podatek od nieruchomosci 3",
          val: Math.random() * 1500 + 300,
        },
        {
          text: "Zaplaciles podatek od nieruchomosci 4",
          val: Math.random() * 1500 + 300,
        },
        {
          text: "Zaplaciles podatek od nieruchomosci 5",
          val: Math.random() * 1500 + 300,
        },
        {
          text: "Zaplaciles podatek od nieruchomosci 6",
          val: Math.random() * 1500 + 300,
        },
      ],
      items: [
        {
          name: "Kawa",
          quantity: 0,
          price: Math.ceil(Math.random() * 1000),
        },
        {
          name: "Vodka",
          quantity: 0,
          price: Math.ceil(Math.random() * 1000),
        },
        {
          name: "Dom Publiczny",
          quantity: 0,
          price: Math.ceil(Math.random() * 1000),
        },
        {
          name: "Coca",
          quantity: 0,
          price: Math.ceil(Math.random() * 1000),
        },
        {
          name: "Bron",
          quantity: 0,
          price: Math.ceil(Math.random() * 1000),
        },
        {
          name: "Bitcoin",
          quantity: 0,
          price: Math.ceil(Math.random() * 1000),
        },
        {
          name: "Miedz",
          quantity: 0,
          price: Math.ceil(Math.random() * 1000),
        },
        {
          name: "Ropa",
          quantity: 0,
          price: Math.ceil(Math.random() * 1000),
        },
        {
          name: "Etherum",
          quantity: 0,
          price: Math.ceil(Math.random() * 1000),
        },
        {
          name: "Samochod",
          quantity: 0,
          price: Math.ceil(Math.random() * 1000),
        },
      ],
      AccountMoney: 1000,
      SumAcctualItems: 0,
      myCity: "Drezno",
      DebetAccount: -200000,
    };
  }

  changeAccountMoney = (price, item) => {
    const temp = this.state.items;
    temp.map((el) => {
      if (el.name === item) {
        el.quantity = el.quantity + 1;
      }

      return el;
    });

    if (this.state.AccountMoney - price > 0) {
      this.setState({
        AccountMoney: this.state.AccountMoney - price,
        items: [...temp],
        SumAcctualItems: temp
          .map((r) => {
            return r.price * r.quantity;
          })
          .reduce((a, b) => {
            return a + b;
          }),
      });
    } else {
      alert("Brakuje Ci pieniedzy :(, wez się do roboty :)!");
    }
  };

  sellItems = (price, name) => {
    const temp = this.state.items;
    temp.map((el) => {
      if (el.name === name) {
        if (el.quantity !== 0) {
          el.quantity = el.quantity - 1;
        } else {
          alert("nie sprzedasz wiecej niz masz !!!");
        }
      }

      return el;
    });

    this.setState({
      items: [...temp],

      AccountMoney: this.state.AccountMoney + price,

      quantity: temp,

      SumAcctualItems: temp
        .map((r) => {
          return r.price * r.quantity;
        })
        .reduce((a, b) => {
          return a + b;
        }),
    });
  };

  changeCity = (e) => {
    
    const tempItems = this.state.items;

    const cities = [
      "Bangladesh",
      "Bialystok",
      "Tokio",
      "Honolulu",
      "Los Angeles",
      "Stockholm",
      "Gdynia",
      "Poznan",
    ];
    const randomCities = cities[Math.floor(Math.random() * cities.length)];

    tempItems.map((item) => {
      item.price = Math.ceil(Math.random() * 1000);
      return item;
    });

    this.setState({
      items: this.state.items,
      myCity: [...randomCities],
      SumAcctualItems: this.state.items
      
        .map((r) => {
          return r.price * r.quantity;
        })
        .reduce((a, b) => {
          return a + b;
          
        }),
    });
  };

  DebetAccount20 = () => {
    let percent20 = this.state.AccountMoney * 0.8;

    this.setState({
      DebetAccount: parseInt(this.state.DebetAccount + percent20),
      AccountMoney: parseInt(percent20),
    });
  };
  DebetAccount50 = () => {
    let percent50 = this.state.AccountMoney * 0.5;

    this.setState({
      DebetAccount: parseInt(this.state.DebetAccount + percent50),
      AccountMoney: parseInt(percent50),
    });
  };

  DebetAccount80 = () => {
    let percent80 = this.state.AccountMoney * 0.2;

    this.setState({
      DebetAccount: parseInt(this.state.DebetAccount + percent80),
      AccountMoney: parseInt(percent80),
    });
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <h1 className={styles.header__doss}>Biznes Dos Game Ramek</h1>
        <div className={styles.wrapper__wrap}>
          <span>
            <h2>
              Saldo Konta:{" "}
              <span className={styles.colorTxt}>{this.state.AccountMoney}</span>
              $
            </h2>
          </span>
          <span>
            {" "}
            <h2>
              Suma twoich zakupionych towarow:{" "}
              <span className={styles.colorTxt}>
                {this.state.SumAcctualItems}
              </span>
              $
            </h2>
          </span>
        </div>
        <Items
          items={this.state.items}
          changeAccountMoney={this.changeAccountMoney}
          sellItems={this.sellItems}
        />
        <div className={styles.wrapper__buttons}>
          <span>
            <h2> Aktualnie jesteś w <span className={styles.colorTxt}>{this.state.myCity}</span></h2>
            <button className={styles.btn} onClick={() => this.changeCity()}>
              Randomowe Miasto{" "}
            </button>{" "}
          </span>

          <div className={styles.wrapper__}>
            <h2>Stan twojego dlugu: <span className={styles.colorTxt}>{this.state.DebetAccount}</span> $</h2><h2>Splac: <span>
            <button className={styles.btn} onClick={(e) => this.DebetAccount20()}>20%</button>
            <button className={styles.btn}onClick={(e) => this.DebetAccount50()}>50%</button>
            <button className={styles.btn}onClick={(e) => this.DebetAccount80()}>80%</button></span></h2>
            
            
             <h2>twojego stanu konta</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
