import React from 'react'
import "./App.css"

export default function Form() {
    return (
        <div className='innerBox'>
            <form action="">
                <h1>Contact Us</h1>

                <div className='name'>
                    <div className='left'>
                        <label htmlFor="">First Name *</label>
                        <input type="text" />
                    </div>
                    <div className='right'>
                        <label htmlFor="">Last Name *</label>
                        <input type="text" />
                    </div>
                </div>

                <div className='email'>
                    <label htmlFor="">Email Address *</label>
                    <input type="text" />
                </div>

                <div>
                    <label htmlFor="">Query Type *</label>
                    <div className='qt'>
                        <div className='left'>
                            <input type="radio" />
                            <label htmlFor="">General Enquiry</label>
                        </div>
                        <div className='right'>
                            <input type="radio" />
                            <label htmlFor="">Support Request</label>
                        </div>
                    </div>
                </div>

                <div className='msg'>
                    <label htmlFor="">Message *</label>
                    <textarea type="text" />
                </div>

                <div className='arg'>
                    <input type="checkBox" />
                    <label htmlFor="">I consider to bring contacted by the team *</label>
                </div>

                <div>
                    <button>Submit</button>
                </div>

            </form >
        </div >
    )
}
