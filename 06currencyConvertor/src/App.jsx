
import { useState } from 'react'
import './App.css'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'






function App() {
  const[amount,setAmount]=useState(0)
  const[from,setFrom]=useState("USD")
  const[to,setTo]=useState("INR")
  const[convertedAmount,setConvertedAmount]=useState(0)

  const currencyInfo=useCurrencyInfo(from)    //data of currency user asked for

  const options=Object.keys(currencyInfo) //data will be in the form of keys value pair and you will provide the user with keys as options from data
  //Object.keys (returns an array of keys)
 const swap=()=>{
  setFrom(to)
  setTo(from)
  setConvertedAmount(amount)
  setAmount(convertedAmount)
 }

 const convert=()=>{
  setConvertedAmount(amount*currencyInfo[to])
 }

 return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://img.freepik.com/free-vector/digital-glowing-currency-sign-background-with-text-space_1017-52412.jpg?semt=ais_hybrid&w=740&q=80')`,
                
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert()

                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                 currencyOptions={options}
                                 onCurrencyChange={(currency)=>{setFrom(currency)}}
                                 selectCurrency={from}
                                 onAmountChange={(amount)=>setAmount(amount)}

                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                                
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                 currencyOptions={options}
                                 onCurrencyChange={(currency)=>{setTo(currency)}}
                                 selectCurrency={to}
                                 amountDisable

                            />
                        </div>
                        <button  type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
  }

export default App
