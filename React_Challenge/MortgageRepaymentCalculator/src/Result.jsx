import React, { useState } from 'react'

export default function Result() {
  return (
    <div className="right">

      <section className='top'>
        <h3>Your Result</h3>
        <p>Your results are shown below based on the information you provided.
          To adjust the results, edit the form and click "calculate repayments" again.
        </p>
      </section>

      <section>
        <div>
          <h3>Your Monthly Repayments</h3>
          <h1></h1>
        </div>

        <div>
          <h3>Total you'll repay over the term</h3>
          <h3></h3>
        </div>
      </section>

    </div>
  )
}
