import React , {FC} from "react"
import Link from "next/link";

const Signin:FC = () => {
  return (
    <div>
      Sign in page connected
      <div className="">
        <Link href="/">Home</Link>
      </div>
    </div>
  );
};

export default Signin;
