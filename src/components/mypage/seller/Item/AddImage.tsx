import { useState } from "react";
import { Controller } from "react-hook-form";

const AddImage = ({ control }: any) => {
  const [imageSrc, setImageSrc]: any = useState(null);

  const onUpload = (e: any) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    return new Promise<void>((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result || null); // 파일의 컨텐츠
        resolve();
      };
    });
  };
  return (
    <Controller
      control={control}
      name="installDate"
      // render를 사용해서, field값을 복사하거나 꺼내 쓰면 된다.
      // field안에는 value나 onBlur와 같은 함수도 있음
      // render안의 onChange를 조작해, onChange안에 들어갈 값을
      // 선택할 수 있다.
      render={({ field }) => (
        // antd의 datepicker에서 e.target.value는
        // moment 객체 그대로를 반환하기에,
        // "2021-04-15"와 같은 값을 얻고싶다면, 두번째 파라미터
        // "dateString"을 추가해서 값을 넣어야 한다.
        <>
          <input
            accept="image/*"
            multiple
            type="file"
            onChange={(e) => onUpload(e)}
          />
          <img width={"25%"} src={imageSrc} />
        </>
      )}
    />
  );
};
export default AddImage;
