import React , {FC} from "react"
import Link from "next/link";

const Register:FC = () => {
  return (
    <div>
      Register page connected
      <div className="">
        <Link href="/">Home</Link>
      </div>
    </div>
  );
};

export default Register;
