import { useRouter } from "next/router";
import styled from "styled-components";
import Image from "next/image";
import { menuList, ImenuList } from "./Menu";
import { useState } from "react";
export default function Sidebar() {
  const [Iuser, setIuser] = useState(null);
  const [Isopen, setIsopen] = useState(false);
  const router = useRouter();
  let user_id = 1; // 임시 유저id 데이터

  return (
    <Side>
      <Logo>
        <h1>데이필름</h1>
      </Logo>
      <div style={{ marginTop: "50px" }}>
        {ImenuList.map((menu) => (
          <MenuButton
            key={menu.text}
            onClick={() => {
              router.push(menu.ref);
              setIsopen(!Isopen);
            }}
          >
            <Image width={32} height={32} src={menu.label} alt="" /> {menu.text}
            {Isopen &&
              menu.dropmenu?.map((dropmenu) => (
                <MenuButton
                  key={dropmenu.text}
                  onClick={() => router.push(dropmenu.ref)}
                >
                  {" "}
                  <h4
                    onClick={() => {
                      setIsopen(true);
                    }}
                  >
                    {dropmenu.text}
                  </h4>
                </MenuButton>
              ))}
          </MenuButton>
        ))}
      </div>
    </Side>
  );
}

const Side = styled.div`
  position: fixed;
  padding-top: 30px;
  padding-left: 10px;
  left: 0px;
  width: 250px;
  height: 100%;
  background-color: ${(props) => props.theme.pointColor};
  border: none;
  /* -ms-overflow-style: none; */
  /* border: solid 1px white; */
  display: flex;
  flex-direction: column;
  gap: 0.4em;
  h4 {
    font-size: 15px;
  }
`;
const Logo = styled.div`
  margin: 10px;
  padding-right: 50px;
  padding-left: 50px;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 50px;
  }
`;
const MenuButton = styled.div`
  height: fit-content;
  font-size: 20px;
  padding: 10px;
  width: 100%;
  cursor: pointer;
  border: none;
  background-color: transparent;
  padding-left: 30px;
`;
