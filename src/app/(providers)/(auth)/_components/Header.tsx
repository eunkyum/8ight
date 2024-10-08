import Image from "next/image";

import logo from "../../../../../public/main_logo.png";

function AuthHeader() {
  return (
    <div className="flex justify-center items-center py-2 border-b border-neutral-200">
      <div className="max-w-[1060px] w-full flex gap-2 items-center">
        <Image src={logo} alt="logo" width={150} height={90} />
      </div>
    </div>
  );
}

export default AuthHeader;
