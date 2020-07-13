import React from 'react';
import './App.module.scss'



import Items from "../../Components/Items/Items";
// import Account from '../../Components/Account/Account'



class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      items: [
        {
          name: 'Kawa',
          quantity: 0,
          price: Math.ceil(Math.random() * 1000)
        },
        {
          name: 'Vodka',
          quantity: 0,
          price: Math.ceil(Math.random() * 1000)
        },
        {
          name: 'Dom Publiczny',
          quantity: 0,
          price: Math.ceil(Math.random() * 1000)
        },
        {
          name: 'Coca',
          quantity: 0,
          price: Math.ceil(Math.random() * 1000)
        },
        {
          name: 'Bron',
          quantity: 0,
          price: Math.ceil(Math.random() * 1000)
        },
        {
          name: 'Bitcoin',
          quantity: 0,
          price: Math.ceil(Math.random() * 1000)
        },
        {
          name: 'Miedz',
          quantity: 0,
          price: Math.ceil(Math.random() * 1000)
        },
        {
          name: 'Ropa',
          quantity: 0,
          price: Math.ceil(Math.random() * 1000)
        },
        {
          name: 'Etherum',
          quantity: 0,
          price: Math.ceil(Math.random() * 1000)
        },
        {
          name: 'Samochod',
          quantity: 0,
          price: Math.ceil(Math.random() * 1000)
        }
      ],
      money: 1000,
      reRender: false,
      sum: 0,
      myCity: 'Drezno',
      debt: -200000,
    }
  }


  changeMoney = (val, n) => {

    const temp = this.state.items

    temp.map(el => {
      if (el.name === n) {
        el.quantity = el.quantity + 1
      }

      return el;
    })


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
      alert('Brakuje Ci pieniedzy :(, wez się do roboty :)!')
    }

  }

  sellItems = (n) => {
    
      console.log(this.state.items[0].quantity)
    const temp = this.state.items
     
      this.setState({
        // money: this.state.money - val,
      
        items: [...temp],
    
        money: this.state.money + temp
          .map(r => {
            return r.price * r.quantity;
          })
          .reduce((a, b) => {
            return a + b;
          }),
          
          quantity: this.state.items.map(el => {
            return el.quantity = 0
          }),

          sum: 0,
      });
    

    // this.setState({
    //   money: this.state.money + temp
        

    // })
  }



  changeCity = e => {
    console.log(this.state.cities);
    const tempItems = this.state.items;

    const  cities = ['Bangladesh', 'Bialystok', 'Tokio', 'Honolulu', 'Los Angeles', 'Stockholm', 'Gdynia', 'Poznan']
    const randomCities = cities[Math.floor(Math.random()*cities.length)]

    tempItems.map(x => {
      x.price = Math.ceil(Math.random() * 1000);
      return x;
    });
    this.setState({
      items: this.state.items,
      myCity: [...randomCities]
    });
  };

    debet20 = () => {
      const tenper = this.state.money * 0.8;
      
    this.setState({
      debt: this.state.debt + tenper,
      money: tenper.toFixed(0),
    })

    }

  render() {
    return (
      <>
        <h1>Witaj w dos Box game</h1>
        <ul>
          <li> <h2>Saldo Konta: {this.state.money}</h2></li>
          <li><h2>Suma twoich wszystkich towarow: {this.state.sum}$</h2></li>
          <li><button onClick={() => this.changeCity()}>Randomowe Miasto </button> Aktualnie jesteś w {this.state.myCity}</li>
          <li><h2>Stan twojego dlugu: {this.state.debt}</h2>Splac <button onClick={e => this.debet20()}>20%</button><button onClick={e => this.debet()}>50%</button> <button onClick={e => this.debet()}>70%</button> twojego stanu konta</li>
        </ul>
        <Items
          reRender={this.state.reRender}
          items={this.state.items}
          changeMoney={this.changeMoney}
          sellItems={this.sellItems}


        />
        {/* <Account money={this.state.money} /> */}


      </>
    )
  }

}

export default App;

