import "./App.css";
import { Input } from "./components/input/input";
import { useState, useEffect } from "react";
import { getAll } from "./requests/request";
import { Modal } from "./components/modal/modal";

export interface Curr {
  id: number;
  title: string;
  currency: number;
}

function App() {
  const [curr, setCurr] = useState<Curr[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getAll("convert");
        console.log(data);
        setCurr(data);
      } catch (err) {}
    };
    fetchData();
  }, []);

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className="app">
      <h1>Converter</h1>

      {curr.map((item) => (
        <Input setCurr={setCurr} key={item.id} {...item} />
      ))}

      <button className="button" onClick={() => setOpen(true)}>
        Add currency
      </button>
      {open && <Modal onClose={onClose} />}
    </div>
  );
}

export default App;
