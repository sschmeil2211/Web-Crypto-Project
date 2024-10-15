import React, { useEffect, useState } from "react";
import '../styles/Carousel.css';
import cryptoList from '../assets/data.json';
import axios from "axios";

interface CryptoData {
  id: string;
  name: string;
  logo: string;
  current_price?: number;
  price_change_percentage_24h?: number;
}

interface CoinGeckoResponse {
  id: string;
  name: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
}

function Carousel() {
  const [cryptoPrices, setCryptoPrices] = useState<CryptoData[]>([]);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const { data } = await axios.get<CoinGeckoResponse[]>( 
          'https://api.coingecko.com/api/v3/coins/markets',
          {
            params: {
              vs_currency: 'usd',
              ids: cryptoList.map(crypto => crypto.id).join(','),
            },
          }
        );

        const updatedCryptoData = data.map((coin) => ({
          id: coin.id,
          name: coin.name,
          logo: coin.image,
          current_price: coin.current_price,
          price_change_percentage_24h: coin.price_change_percentage_24h,
        }));

        setCryptoPrices(updatedCryptoData);
      } catch (error) {
        console.error("Error fetching crypto prices", error);
      }
    };

    fetchPrices();
    const interval = setInterval(fetchPrices, 24 * 60 * 60 * 1000); // Actualiza cada 24 horas

    return () => clearInterval(interval);
  }, []);

  return (
      <div className="wrapper">
        <div className="items-container">
          {cryptoList.map((crypto, index) => {
            const priceData = cryptoPrices.find(item => item.id === crypto.id);
            const price = priceData?.current_price?.toLocaleString('es-AR', { minimumFractionDigits: 2 });
            const percentageChange = priceData?.price_change_percentage_24h?.toFixed(2);
            const isPositive = Number(percentageChange) > 0;

            return (
              <div key={crypto.id} className={`item item${index + 1}`}>
                <img src={crypto.logo} alt={crypto.name} className="crypto-logo" />
                <div className="price-info">
                  <p>{crypto.name}</p>
                  <div className="price-row">
                    {price && (
                      <p className="price">
                        {`$ ${price}`} USD
                      </p>
                    )}
                    {percentageChange && (
                      <p className={`percentage ${isPositive ? "price-up" : "price-down"}`}>
                        {isPositive ? `+${percentageChange}` : `${percentageChange}`}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
);
}

export default Carousel;