import React, { useState } from "react";
import Modal from "../ui-helpers/Modal";

const Header = () => {
  const [visible, setVisible] = useState(false);
  const btn1ClickHandler = () => {
    setVisible(false);
    alert("Connect to Wallet")
  }
  return (
    <>
      <div className="bg-white h-20 flex justify-between text-2xl px-8 py-5 shadow-lg">
        <div>MetaStart</div>
        <div className="flex justify-around pl-14 w-1/2 ">
          <div className="hover:underline hover:cursor-pointer">Explore</div>
          <div className="hover:underline hover:cursor-pointer">About</div>
          <div
            className="hover:underline hover:cursor-pointer"
            onClick={() => setVisible(true)}
          >
            Connect To Wallet
          </div>
        </div>
        {visible && (
          <Modal
            setVisible={setVisible}
            heading={"Connect to wallet"}
            btn1={"Connect"}
            btn1ClickHandler={btn1ClickHandler}
          >
            <ul className="text-left ml-24">
              <li className="list-none">Metamask Wallet</li>
              <li className="list-none">ChainWeaver wallet</li>
              <li className="list-none">Metamask Wallet</li>
              <li className="list-none">ChainWeaver wallet</li>
              <li className="list-none">Metamask Wallet</li>
              <li className="list-none">ChainWeaver wallet</li>
            </ul>
          </Modal>
        )}
      </div>
    </>
  );
};

export default Header;
