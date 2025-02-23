import "./input.css";
import { useState, useEffect } from "react";
import { postData } from "../../requests/request";
import { Curr } from "../../App";

export const Input = ({
  title,
  currency,
  setCurr,
}: {
  title: string;
  currency: number;
  setCurr: (curr: Curr[]) => void;
}) => {
  const [current, setCurrent] = useState(currency);

  // UNDERSTAND WHY IT NOT WORK WITHOUT useEffect

  useEffect(() => {
    setCurrent(currency);
  }, [currency]);

  const changeData = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    setCurrent(newValue);

    try {
      // Отправляем новое значение в запросе
      const response = await postData("convert", { title, current: newValue });
      const newData = response.data;
      console.log(newData);

      // Обновляем общий стейт
      setCurr(newData);
    } catch (error) {
      console.error("Ошибка при обновлении данных:", error);
    }
  };

  //   UNDERSTAND WHY THIS NOT CORRECT !!!!!!

  //   const postedData = {
  //     title,
  //     current,
  //   };

  //   const changeData = async (e: any) => {
  //     const response = await postData("convert", postedData);
  //     const newData = response.data;
  //     setCurrent(Number(e.target.value));
  //     console.log(newData);
  //     setCurr(newData);
  //   };

  return (
    <div className="all">
      <h5>{title}</h5>
      <input
        className="input"
        type="number"
        value={current}
        onChange={changeData}
      />
    </div>
  );
};
