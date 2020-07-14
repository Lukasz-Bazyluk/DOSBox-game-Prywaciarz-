import React from "react";
import "./App.module.scss";

import Items from "../../Components/Items/Items";
// import Account from '../../Components/Account/Account'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      randomEvents: [
        {
          text: "Zaplaciles podatek od nieruchomosci",
          val: Math.random() * 1500 + 300
        },
        {
          text: "Zaplaciles podatek od nieruchomosci 2",
          val: Math.random() * 1500 + 300
        },
        {
          text: "Zaplaciles podatek od nieruchomosci 3",
          val: Math.random() * 1500 + 300
        },
        {
          text: "Zaplaciles podatek od nieruchomosci 4",
          val: Math.random() * 1500 + 300
        },
        {
          text: "Zaplaciles podatek od nieruchomosci 5",
          val: Math.random() * 1500 + 300
        },
        {
          text: "Zaplaciles podatek od nieruchomosci 6",
          val: Math.random() * 1500 + 300
        }
      ],
      items: [
        {
          name: "Kawa",
          quantity: 0,
          price: Math.ceil(Math.random() * 1000)
        },
        {
          name: "Vodka",
          quantity: 0,
          price: Math.ceil(Math.random() * 1000)
        },
        {
          name: "Dom Publiczny",
          quantity: 0,
          price: Math.ceil(Math.random() * 1000)
        },
        {
          name: "Coca",
          quantity: 0,
          price: Math.ceil(Math.random() * 1000)
        },
        {
          name: "Bron",
          quantity: 0,
          price: Math.ceil(Math.random() * 1000)
        },
        {
          name: "Bitcoin",
          quantity: 0,
          price: Math.ceil(Math.random() * 1000)
        },
        {
          name: "Miedz",
          quantity: 0,
          price: Math.ceil(Math.random() * 1000)
        },
        {
          name: "Ropa",
          quantity: 0,
          price: Math.ceil(Math.random() * 1000)
        },
        {
          name: "Etherum",
          quantity: 0,
          price: Math.ceil(Math.random() * 1000)
        },
        {
          name: "Samochod",
          quantity: 0,
          price: Math.ceil(Math.random() * 1000)
        }
      ],
      money: 100000,
      reRender: false,
      sum: 0,
      myCity: "Drezno",
      debt: -200000
    };
  }

  changeMoney = (val, n) => {
    const temp = this.state.items;

    temp.map(el => {
      if (el.name === n) {
        el.quantity = el.quantity + 1;
      }

      return el;
    });

    if (this.state.money - val > 0) {
      this.setState({
        money: this.state.money - val,
        items: [...temp],
        sum: temp
          .map(r => {
            return r.price * r.quantity;
          })
          .reduce((a, b) => {
            return a + b;
          })
      });
    } else {
      alert("Brakuje Ci pieniedzy :(, wez się do roboty :)!");
    }
  };

  sellItems = (val, name) => {
    // Czy sprawdzilem co tu sie dzieje ???
    console.log(val);
    console.log(name);
    // ???
    const temp = this.state.items;
    temp.map(el => {
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

      money: this.state.money + val,

      quantity: temp,

      sum: temp
        .map(r => {
          return r.price * r.quantity;
        })
        .reduce((a, b) => {
          return a + b;
        })
    });

    
  };

  changeCity = e => {
    if (
      Math.floor(Math.random() * 10) === 3 ||
      Math.floor(Math.random() * 10) === 7
    ) {
      console.log(
        this.state.randomEvents[
          Math.floor(Math.random() * this.state.randomEvents.length)
        ]
      );
    }
    console.log(this.state.cities);
    const tempItems = this.state.items;

    const cities = [
      "Bangladesh",
      "Bialystok",
      "Tokio",
      "Honolulu",
      "Los Angeles",
      "Stockholm",
      "Gdynia",
      "Poznan"
    ];
    const randomCities = cities[Math.floor(Math.random() * cities.length)];

    tempItems.map(item => {
      item.price = Math.ceil(Math.random() * 1000);
      return item;
    });
    this.setState({
      items: this.state.items,
      myCity: [...randomCities],
      sum: this.state.items
        .map(r => {
          return r.price * r.quantity;
        })
        .reduce((a, b) => {
          return a + b;
        })
    });
  };

  debet20 = () => {
    let percent20 = this.state.money * 0.8;

    this.setState({
      debt: parseInt(this.state.debt + percent20),
      money: parseInt(percent20)
    });
  };
  debet50 = () => {
    let percent50 = this.state.money * 0.5;

    this.setState({
      debt: parseInt(this.state.debt + percent50),
      money: parseInt(percent50)
    });
  };

  debet80 = () => {
    let percent80 = this.state.money * 0.2;

    this.setState({
      debt: parseInt(this.state.debt + percent80),
      money: parseInt(percent80)
    });
  };

  render() {
    return (
      <>
        <h1>Witaj w dos Box game</h1>
        <ul>
          <li>
            {" "}
            <h2>Saldo Konta: {this.state.money}</h2>
          </li>
          <li>
            <h2>Suma twoich wszystkich towarow: {this.state.sum}$</h2>
          </li>
          <li>
            <button onClick={() => this.changeCity()}>Randomowe Miasto </button>{" "}
            Aktualnie jesteś w {this.state.myCity}
          </li>
          <li>
            <h2>Stan twojego dlugu: {this.state.debt}</h2>Splac
            <button onClick={e => this.debet20()}>20%</button>
            <button onClick={e => this.debet50()}>50%</button>
            <button onClick={e => this.debet80()}>80%</button> twojego stanu
            konta
          </li>
        </ul>
        <Items
          reRender={this.state.reRender}
          items={this.state.items}
          changeMoney={this.changeMoney}
          sellItems={this.sellItems}
        />
        {/* <Account money={this.state.money} /> */}
      </>
    );
  }
}

export default App;
