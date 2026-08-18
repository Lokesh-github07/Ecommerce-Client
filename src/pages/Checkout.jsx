function Checkout() {
  return (
    <div>
      <h1>Checkout</h1>

      <form>
        <div>
          <label>Full Name</label>
          <br />
          <input type="text" placeholder="Enter your name" />
        </div>

        <br />

        <div>
          <label>Address</label>
          <br />
          <textarea placeholder="Enter your address"></textarea>
        </div>

        <br />

        <div>
          <label>Phone Number</label>
          <br />
          <input type="tel" placeholder="Enter phone number" />
        </div>

        <br />

        <button type="submit">Place Order</button>
      </form>
    </div>
  );
}

export default Checkout;