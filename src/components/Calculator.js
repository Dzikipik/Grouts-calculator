import React from "react";
import { useForm } from "react-hook-form";

export default function Calculator() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("tilelenght"));
  return (
    <>
      <p>
        Aby obliczyć ilość potrzebnego produktu należy podać poniższe wartości:
      </p>
      <form className="calculator" onSubmit={handleSubmit(onSubmit)}>
        <p>Długość płytki [cm]:</p>
        <input
          type="number"
          className="values"
          {...register("tilelenght", { required: true, min: 1 })}
        />
        <p>Szerokość płytki [cm]:</p>
        <input
          type="number"
          className="values"
          {...register("tilewidth", { required: true })}
        />
        <p>Szerokość fugi [mm]:</p>
        <input
          type="number"
          className="values"
          {...register("groutwidth", { required: true })}
        />
        <p>Grubość płytki [mm]:</p>
        <input
          type="number"
          className="values"
          {...register("tilethickness", { required: true })}
        />
        {errors.tilelenght && <span>Nie podano długości płytki!</span>}
        {errors.tilewidth && <span>Nie podano szerokości płytki!</span>}
        {errors.groutwidth && <span>Nie podano szerokości fugi!</span>}
        {errors.tilethickness && <span>Nie podano grubości płytki!</span>}

        <input className="button" type="submit" />
      </form>
    </>
  );
}
