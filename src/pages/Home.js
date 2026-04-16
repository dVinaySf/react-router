import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>Home Page</div>
      <div style={{ display: "flex", justifyContent: "end" }}>
        <button
          onClick={() => {
            navigate("order-summary", {replace: true});
          }}
          className="place-order-btn"
        >
          Place order
        </button>
      </div>
    </>
  );
};
