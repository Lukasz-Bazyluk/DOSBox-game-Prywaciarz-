import React from 'react'
import styles from './Items.module.scss'




class Items extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <>
                <div className={styles.wrapper}>


                    {this.props.items.map(el => {
                        return (
                            <div className={styles.wrapper__container} key={el.name}>
                                <div className={styles.name}>
                                    <span>{el.name}</span>

                                </div>
                                <div className={styles.price}>
                                    <span> Cena: <span className={styles.price__price}>{parseInt(el.price)}</span>$</span>

                                </div>
                                <button className={styles.btn} onClick={e => this.props.changeMoney(el.price, el.name)}>
                                    Kup
                            </button>
                                <div className={styles.quntity}>
                                    <span>Posiadana Ilosc: </span> <span className={styles.quntity_price}>{el.quantity}</span>
                                </div>
                                <div >
                                    <span>Suma:  <span className={styles.price__price}>{el.price * el.quantity}</span> $</span>
                                </div>
                                <button className={styles.btn} onClick={e => this.props.sellItems()}>
                                    Sprzedaj
                            </button>
                            </div>
                        )

                    })}



                </div>


            </>
        )
    }

}


export default Items

