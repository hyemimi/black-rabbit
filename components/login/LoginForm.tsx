import { useForm } from "react-hook-form";
import styled from "styled-components";
interface FormData {
  userID: string;
  userPW: string;
}
function LoginForm() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>();
  const handleValid = ({ userID, userPW }: FormData) => {
    //Api 호출
    console.log(userID);
    console.log(userPW);
    setValue("userID", "");
    setValue("userPW", "");
  };

  console.log(errors);

  return (
    <Form onSubmit={handleSubmit(handleValid)}>
      <FormDiv>
        <InputDiv>
          <Input
            {...register("userID", {
              required: "Please write your ID",
              minLength: { value: 5, message: "5글자 이상 입력해주세요" },
            })}
            placeholder="Write your ID"
          />
          {errors?.userID && errors?.userID?.message}
          <Input
            {...register("userPW", {
              required: "Please write your Password",
              minLength: { value: 8, message: "8글자 이상 입력해주세요" },
            })}
            placeholder="Write your Password"
          />
          {errors?.userPW && errors?.userPW?.message}
        </InputDiv>

        <Button>로그인</Button>
      </FormDiv>
    </Form>
  );
}

export default LoginForm;

const Form = styled.form`
  width: 50%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
const FormDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  margin: auto;
  width: 100%;
  justify-content: center;
  height: 100%;
`;
const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 20vw;
  text-align: center;
  margin: auto;
`;

const Input = styled.input`
  position: relative;
  padding: 5px 10px;
  border-radius: 5px;
  width: 100%;
  color: white;
  font-size: 16px;
  background-color: transparent;
  border: 1px solid ${(props) => props.theme.white.lighter};
  margin: 5px;
  text-align: center;
`;

const Button = styled.button`
  font-size: auto;
  height: 100%;
  background-color: white;
  border-radius: 20px;
  width: 50%;
  margin: auto;
  align-items: center;
  justify-content: center;
`;
