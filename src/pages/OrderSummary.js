import { useNavigate } from "react-router-dom";

export const OrderSummary = () => {
  let navigate = useNavigate();
  return (
    <>
      <div>Order Placed!</div>
      <div style={{ display: "flex", justifyContent: "end" }}>
        <button
          onClick={() => {
            navigate(-1);
          }}
          className="place-order-btn"
        >
          Go Back
        </button>
      </div>
    </>
  );
};
