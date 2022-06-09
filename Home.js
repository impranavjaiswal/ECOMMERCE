import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
            <img
            className='home__image'
            src='https://images-eu.ssl-images-amazon.com/images/G/31/prime/BAU_HERO_3000x1200._CB648857949_.jpg'>
    
            </img>

            <div className='home__row'>
              <Product 
                id = '1234567'
                title='The Lean Startup' 
                price={259.99} 
                image ='https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg' 
                rating={5}
              />
              <Product
                id = '49567890' 
                title='Negi Rs Speed Cube 3x3x3' 
                price={170.00} 
                image ='https://m.media-amazon.com/images/I/61Oj2aphXQL._SY450_.jpg' 
                rating = {4}
              />
            </div>

            <div className='home__row'>
              <Product
                id = '13414' 
                title='Isomars Mini Drafter with Sheet Container' 
                price={398.99} 
                image ='https://images-eu.ssl-images-amazon.com/images/I/61nQLZKwhEL._AC._SR360,460.jpg' 
                rating = {4}
              />
              <Product
                id = '647381' 
                title='HP v236w 64GB USB 2.0 Pen Drive' 
                price={489.99} 
                image ='https://images-eu.ssl-images-amazon.com/images/I/31febYa30qL._SX300_SY300_QL70_FMwebp_.jpg' 
                rating = {5}
              />
              <Product
                id = '323423' 
                title='E-COSMOS Portable Flexible USB LED Light Lamp, Multicolour, Small (USB-LED-LAMP)' 
                price={34.99} 
                image ='https://m.media-amazon.com/images/I/51IEbBI7qBL._SY450_.jpg' 
                rating = {2}
              />
            </div>

            <div className='home__row'>
              <Product
                id = '3241256' 
                title='Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor (Black)' 
                price={136400.99} 
                image ='https://images-eu.ssl-images-amazon.com/images/I/41Ztr69r23L._SY300_SX300_QL70_FMwebp_.jpg' 
                rating = {4}
              />
            </div>
        </div>    
    </div>
  )
}

export default Home