import React from "react";
import "./Subtotal.css";
import { useStateValue } from "../StateProvider";

import CurrencyFormat from "react-currency-format";
function Subtotal() {
  const [{ basket }] = useStateValue();
  let total = 0;
  for (let i = 0; i < basket.length; i++) {
    total = total + basket[i].price;
  }
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items) : <strong>Rs {total}</strong>
            </p>
            <small className="subtotal-gift">
              <input type="checkbox" /> This Order Contains A Gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"Rs"}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
