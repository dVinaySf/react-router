import { Outlet, useSearchParams } from "react-router-dom";

export const User = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  // console.log("Search params: ", searchParams);
  // console.log("Get filter value from 'Search params': ", searchParams.get('filter'));
  console.log("All Search Params:", Object.fromEntries([...searchParams]));
  const showActiveUsers = searchParams.get("filter") === "active";

  return (
    <>
      <div className="flex justify-end gap-4 my-4">
        <button
          onClick={() => {
            setSearchParams({ filter: "active", country: "India", state: "AP" });
          }}
          className="place-order-btn"
        >
          Active users
        </button>
        <button
          onClick={() => {
            setSearchParams({});
          }}
          className="place-order-btn"
        >
          Reset Filter
        </button>
      </div>
      <div className="p-4 bg-cyan-100 flex flex-col gap-2">
        {showActiveUsers ? (
          <h3>Showing active users</h3>
        ) : (
          <h3>Showing all users</h3>
        )}
        <h4>User 1</h4>
        <h4>User 2</h4>
        <h4>User 3</h4>
      </div>
      <Outlet />
    </>
  );
};
