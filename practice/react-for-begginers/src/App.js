import { useEffect, useState } from "react";

function App() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    const [ownCoins, setOwnCoins] = useState(0);
    const [select, setSelect] = useState(0);
    const [price, setPrice] = useState();

    // console.log("rendering");
    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers?limit=1000")
            .then((response) => response.json())
            .then((json) => {
                setCoins(json);
                setLoading(false);
            });
    }, []);

    const onChange = (e) => setPrice(Number(e.target.value));
    const onSubmit = (e) => {
        e.preventDefault();
        if (!price || isNaN(price)) {
            return;
        }

        setOwnCoins(price / coins[Number(select - 1)].quotes.USD.price);
    };
    const onChangeSelect = (e) => setSelect(e.target.value.split(".", 1)[0]);

    return (
        <div>
            <h1>The Coins!! ({coins.length})</h1>
            {loading ? (
                <strong>Loading...</strong>
            ) : (
                <select onChange={onChangeSelect}>
                    {coins.map((coin, idx) => (
                        <option key={coin.id}>
                            {idx + 1}.{coin.name}({coin.symbol}) :{" "}
                            {coin.quotes.USD.price.toFixed(2)} USD
                        </option>
                    ))}
                </select>
            )}
            <hr />
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    onChange={onChange}
                    placeholder="write your own USD"
                />
                <button>변환</button>
            </form>
            <div>보유코인: {ownCoins}개</div>
        </div>
    );
}

export default App;
