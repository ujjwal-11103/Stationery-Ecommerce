import React from 'react'
import Link from 'next/link'
import '../../public/stylesheets/order_placed.css'
const page = () => {
    return (
        <div className='main'>
            {/* <html>
                <head>
                    <link href="https://fonts.googleapis.com/css?family=Nunito+Sans:400,400i,700,900&display=swap" rel="stylesheet" />
                </head>

                <body>
                    <div class="card">
                        <div  class='card1'>
                            <i class="checkmark">✓</i>
                        </div>
                        <h1>Success</h1>
                        <p>We received your purchase request;<br /> we'll be in touch shortly!</p>
                    </div>
                </body>
            </html> */}



            <div class="card">
                <div class='card1'>
                    <i class="checkmark">✓</i>
                </div>
                <h1 className='order_h1'>Success</h1>
                <p>We received your purchase request;<br /> we'll be in touch shortly!</p>
                <Link href='/productPage' className='goto'>Continue Shopping</Link>
            </div>


        </div>
    )
}

export default page
