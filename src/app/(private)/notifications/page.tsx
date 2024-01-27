import React , {FC} from "react"
import Link from "next/link";

const Notifications:FC = () => {
  return (
    <div>
      Notifications page connected
      <div className="">
        <Link href="/">Home</Link>
      </div>
    </div>
  );
};

export default Notifications;
