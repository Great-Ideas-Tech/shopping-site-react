import Link from 'next/link'
import React from 'react'

function thankyou() {
  return (
    <>
    <div className="site-section">
  <div className="container">
    <div className="row">
      <div className="col-md-12 text-center">
        <span className="icon-check_circle display-3 text-success" />
        <h2 className="display-3 text-black">Thank you!</h2>
        <p className="lead mb-5">You order was successfuly completed.</p>
        <p>
          <Link href="/shop" className="btn btn-sm btn-primary">
            Back to shop
          </Link>
        </p>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default thankyou