import styled from "styled-components";
import { useForm } from "react-hook-form";
interface IForm {
  keyword: string;
}
export default function Searchbar() {
  const { register, handleSubmit } = useForm<IForm>();
  const onvalid = (data: IForm) => {
    console.log(data);
  };
  return (
    <Search onSubmit={handleSubmit(onvalid)}>
      <svg
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
          clipRule="evenodd"
        ></path>
      </svg>
      <Input
        {...register("keyword", { required: true, minLength: 2 })}
        placeholder="검색"
      ></Input>
    </Search>
  );
}

const Search = styled.form`
  color: white;
  display: flex;
  align-items: center;
  position: relative;
  svg {
    height: 25px;
  }
`;

const Input = styled.input`
  position: absolute;
  left: 0x;
  right: 0px;
  padding: 5px 10px;
  padding-left: 5px;
  color: white;
  font-size: 16px;
  background-color: transparent;
  border-radius: 15px;
  border: 1px solid ${(props) => props.theme.pointColor};
`;
