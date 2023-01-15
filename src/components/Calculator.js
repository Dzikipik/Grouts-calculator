import { useForm } from "react-hook-form";
import React, { useRef } from 'react';
import ResultText from "./ResultText";

export default function Calculator() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const groutCount = useRef(0)

  const Results = (data) => {
    const { tilelenght, tilewidth, groutwidth, tilethickness } = data;
    const addition = Number(tilelenght) + Number(tilewidth);
    const multiple = Number(tilelenght) * Number(tilewidth);
    const division = addition / multiple;
    const restOfMath =
      division * Number(groutwidth) * Number(tilethickness) * 0.16;
    console.log(addition);
    console.log(multiple);
    console.log(division);
    console.log(restOfMath);
    groutCount.current = restOfMath.toFixed(2)

  };
  
  
  return (
    <>
      <p>
        Aby obliczyć ilość potrzebnego produktu należy podać poniższe wartości:
      </p>
      <form className="calculator" onSubmit={handleSubmit(Results)}>

        <p>Długość płytki [cm]:</p>
        <input
          type="number"
          placeholder="Długość płytki"
          className="values"
          {...register("tilelenght", { required: true })}
        />
        <p>Szerokość płytki [cm]:</p>
        <input
          type="number"
          placeholder="Szerokość płytki"
          className="values"
          {...register("tilewidth", { required: true })}
        />
        <p>Szerokość fugi [mm]:</p>
        <input
          type="number"
          placeholder="Szerokość fugi"
          className="values"
          {...register("groutwidth", { required: true })}
        />
        <p>Grubość płytki [mm]:</p>
        <input
          type="number"
          placeholder="Grubość płytki"
          className="values"
          {...register("tilethickness", { required: true })}
        />
        {errors.tilelenght && <span className="error">Nie podano długości płytki!</span>}
        {errors.tilewidth && <span className="error">Nie podano szerokości płytki!</span>}
        {errors.groutwidth && <span className="error">Nie podano szerokości fugi!</span>}
        {errors.tilethickness && <span className="error">Nie podano grubości płytki!</span>}
        
        <input className="button" type="submit" />
      </form>
      
      <ResultText groutCountResult={groutCount} />
    </>
  );
}
