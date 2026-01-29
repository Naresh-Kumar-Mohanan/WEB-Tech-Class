import React from 'react'
import "./Form.css"

export default function Form() {
    return (
        <div className='left'>
            <section >
                <div className='same'>
                    <h3>Mortgage Calculator</h3>
                    <span>Clear All</span>
                </div>
                <form action="">
                    <div>
                        <label htmlFor="">Mortgage Amount</label>
                        <input type="number" placeholder='Mortgage Amount' />
                    </div>

                    <div className='same'>
                        <div><label htmlFor="">Mortgage Term</label> <input type="number" /></div>
                        <div><label htmlFor="">Interest Rate</label> <input type="number" /></div>
                    </div>

                    <div>
                        <label htmlFor="">Mortgage Type</label>
                        <div>
                            <input type="radio" />
                            <label htmlFor="">Replayment</label>
                        </div>
                        <div>
                            <input type="radio" />
                            <label htmlFor="">Interest Only</label>
                        </div>
                    </div>

                    <div>
                        <button>Calculate Replayment</button>
                    </div>
                </form>
            </section>
        </div>
    )
}
