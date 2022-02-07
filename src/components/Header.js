import React, { useState } from "react";
import Modal from "../ui-helpers/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [visible, setVisible] = useState(false);
  const btn1ClickHandler = () => {
    setVisible(false);
    alert("Connect to Wallet");
  };
  return (
    <>
      <div className="bg-white h-20 flex justify-between text-2xl px-8 py-5 shadow-lg w-screen overflow-visible">
        <div>MetaStart</div>
        <div className="flex justify-around lg:pl-20 lg:w-5/6 w-1/2 md:hidden">
          <div className="hover:underline hover:cursor-pointer">Explore</div>
          <div className="hover:underline hover:cursor-pointer">About</div>
          <div
            className="hover:underline hover:cursor-pointer"
            onClick={() => setVisible(true)}
          >
            Connect To Wallet
          </div>
        </div>

        <div className="mdm:hidden">
          <FontAwesomeIcon icon={faBars} />
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
