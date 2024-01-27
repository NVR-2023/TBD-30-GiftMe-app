import React , {FC} from "react"
import Link from "next/link";

const Groups:FC = () => {
  return (
    <div>
      Groups page connected
      <div className="">
        <Link href="/">Home</Link>
      </div>
    </div>
  );
};

export default Groups;
