import React from 'react'
import Link from 'next/link'
import '../../public/stylesheets/payment.css'
const page = () => {
    return (
        <div>
            <div className="main">
                <article class="card">
                    <div class="container">
                        <div class="card-title">
                            <h2>Payment</h2>
                        </div>
                        <div class="card-body">
                            <div class="payment-type">
                                <h4>Choose payment method below</h4>
                                <div class="types flex justify-space-between">
                                    <div class="type selected">
                                        <div class="logo">
                                            <i class="far fa-credit-card"></i>
                                        </div>
                                        <div class="text">
                                            <p>Pay with Credit Card</p>
                                        </div>
                                    </div>
                                    <div class="type">
                                        <div class="logo">
                                            <i class="fab fa-paypal"></i>
                                        </div>
                                        <div class="text">
                                            <p>Pay with PayPal</p>
                                        </div>
                                    </div>
                                    <div class="type">
                                        <div class="logo">
                                            <i class="fab fa-amazon"></i>
                                        </div>
                                        <div class="text">
                                            <p>Pay with Amazon</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="payment-info flex justify-space-between">
                                <div class="column billing">
                                    <div class="title">
                                        <div class="num">1</div>
                                        <h4>Billing Info</h4>
                                    </div>
                                    <div class="field full">
                                        <label for="name">Full Name</label>
                                        <input id="name" type="text" placeholder="Full Name" />
                                    </div>
                                    <div class="field full">
                                        <label for="address">Billing Address</label>
                                        <input id="address" type="text" placeholder="Billing Address" />
                                    </div>
                                    <div class="flex justify-space-between">
                                        <div class="field half">
                                            <label for="city">City</label>
                                            <input id="city" type="text" placeholder="City" />
                                        </div>
                                        <div class="field half">
                                            <label for="state">State</label>
                                            <input id="state" type="text" placeholder="State" />
                                        </div>
                                    </div>
                                    <div class="field full">
                                        <label for="zip">Zip</label>
                                        <input id="zip" type="text" placeholder="Zip" />
                                    </div>
                                </div>
                                <div class="column shipping">
                                    <div class="title">
                                        <div class="num">2</div>
                                        <h4>Credit Card Info</h4>
                                    </div>
                                    <div class="field full">
                                        <label for="name">Cardholder Name</label>
                                        <input id="name" type="text" placeholder="Full Name" />
                                    </div>
                                    <div class="field full">
                                        <label for="address">Card Number</label>
                                        <input id="address" type="text" placeholder="1234-5678-9012-3456" />
                                    </div>
                                    <div class="flex justify-space-between">
                                        <div class="field half">
                                            <label for="city">Exp. Month</label>
                                            <input id="city" type="text" placeholder="12" />
                                        </div>
                                        <div class="field half">
                                            <label for="state">Exp. Year</label>
                                            <input id="state" type="text" placeholder="19" />
                                        </div>
                                    </div>
                                    <div class="field full">
                                        <label for="zip">CVC Number</label>
                                        <input id="zip" type="text" placeholder="468" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-actions flex justify-space-between">
                            <div class="flex-start">
                                {/* <button class="button button-secondary">Return to Store</button> */}
                                <Link href='/produtPage' className='button button-secondary'>Return to Store</Link>
                            </div>
                            <div class="flex-end">
                                {/* <button class="button button-link">Back to Shipping</button> */}
                                {/* <button class="button button-primary">Proceed</button> */}
                                <Link href='/order_Placed' className='button button-primary'>Proceed</Link>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    )
}

export default page