import React, { useState } from 'react'
import calcImg from "/calc.svg"
import "./Form.css"

export default function Form() {

    let [data, setData] = useState({
        amount: "",
        years: "",
        rate: "",
        display: ""
    })

    function handleInput(e) {
        console.log(e.target.value);

        setData({ ...data, [e.target.name]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault()

        let si = data.amount * data.years * data.rate / 100
        console.log(si);
    }


    return (
        <div className='left'>
            <section >
                <div className='same'>
                    <h3>Mortgage Calculator</h3>
                    <span>Clear All</span>
                </div>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="">Mortgage Amount</label>
                        <input type="number" placeholder='Mortgage Amount' name="amount" value={data.amount} onInput={handleInput} />
                    </div>

                    <div className='same'>
                        <div><label htmlFor="">Mortgage Term</label> <input type="number" name='years' value={data.years} onInput={handleInput} /></div>
                        <div><label htmlFor="">Interest Rate</label> <input type="number" name='rate' value={data.rate} onInput={handleInput} /></div>
                    </div>

                    <div>
                        <label htmlFor="">Mortgage Type</label>
                        <div>
                            <input type="radio" name='display' value="total" onInput={handleInput} />
                            <label htmlFor="">Repayment</label>
                        </div>
                        <div>
                            <input type="radio" name='display' value="interest" onInput={handleInput} />
                            <label htmlFor="">Interest Only</label>
                        </div>
                    </div>

                    <div>
                        <button> <img src={calcImg} alt="" />Calculate Replayment</button>
                    </div>
                </form>
            </section>
        </div>
    )
}
