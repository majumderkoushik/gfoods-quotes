import { useState } from 'react'
import quotes from './quotes.json'
import './App.css'

function QuoteList(props) {
  const { quotes } = props;

  return (
    <div>
      {quotes.map((quote) => (
        <Quote key={quote.id} data={quote} />
      ))}
    </div>
  );
}
function Quote(props) {
  const { data } = props;

  return (
    <div className="flex justify-center font-semibold flex-col items-center box m-10 p-10">
      
        <p className="text-2xl">{data.quote}</p>
        <footer>{data.author}</footer>
      
    </div>
  );
}
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav className="mx-auto bg-blue-950 sticky top-0 z-20">
       <div className="flex justify-evenly items-center">
       <div className="text-white font-bold text-2xl flex items-center space-x-4 p-4">
                <a href="#"><img src='https://flowbite.com/docs/images/logo.svg' /></a>
                <h1>GeekFoods</h1>
      </div>
      <ul className="flex space-x-4">
                <li><a href="#" className="text-white hover:text-blue-300">Home</a></li>
                <li><a href="#" className="text-white hover:text-blue-300">Quote</a></li>
                <li><a href="#" className="text-white hover:text-blue-300">Resturants</a></li>
                <li><a href="#" className="text-white hover:text-blue-300">Food</a></li>
                <li><a href="#" className="text-white hover:text-blue-300">Contact</a></li>
            </ul>
            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600">Get started</button>
       </div>
       </nav>
     <div className="flex justify-center"><QuoteList quotes={quotes.quotes} /></div>
    </>
  )
}

export default App
