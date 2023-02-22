import React from 'react';

const Payment = () => {

  return (
<div class="row my-5">
      <div class="col-md-4 offset-md-4">
        <div class="card">
          <div class="card-body">
            <form class="" action="http://localhost:5000/api/payment/paynow" method="post" >
              <div class="form-group">
                <input class="form-control" type="text" name="name" id='name' required placeholder="Enter your Name" />
              </div>
              <div class="form-group">
                <input class="form-control" type="email" name="email" id='mail' required placeholder="Enter your Email" />
              </div>
              <div class="form-group">
                <input class="form-control" type="number" name="phone" id='phone' required placeholder="Enter your mobile number" />
              </div>
                <div class="form-group">
                <input class="form-control" type="number" name="amount" id='amount' required placeholder="Amount" value={sessionStorage.getItem("total_price")}  />
              </div>
              <div class="form-group">
                <input class="form-control" type="text" name="message" id='message' placeholder="Message" />
              </div>
              <div class="form-group">
                <button class="btn form-control btn-primary">Proceed to Pay</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment;
