import { useParams } from "react-router-dom";

export const UserDetails = () => {
  // const params = useParams();
  const { userId } = useParams();
  // console.log("params ", params);
  console.log("userId from params", userId);
  return (
    <div className="p-2 bg-red-50 mt-4">
      {/* <h1>User {params.userId} Details</h1> */}
      <h1>User {userId} Details</h1>
    </div>
  );
};
