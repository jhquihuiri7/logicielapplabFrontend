import "../styles/buttons.css";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Seek } from "react-loading-indicators";

export function FormComponent() {
  const [button, setButton] = useState(true);
  const { register, handleSubmit, watch, setValue } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    fetch("https://diveevolutiongpsbackend.uc.r.appspot.com/api/sendMail", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.success !== "") {
          toast.success(data.success);
          setValue("mail", "");
          setValue("phone", "");
          setValue("name", "");
          setValue("message", "");
        } else {
          toast.warn(data.error);
        }
        setButton(!button);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  var validation = function (type, value) {
    if (type === "name") {
      if (value === "") {
        return "Este campo es requerido";
      } else if (!/^[a-zA-Z\s]+$/.test(value)) {
        return "El nombre solo debe contener letras";
      } else {
        return "";
      }
    } else if (type === "mail") {
      if (value === "") {
        return "Este campo es requerido";
      } else if (value === undefined) {
        return "";
      } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
        return "Correo electrónico inválido";
      } else {
        return "";
      }
    } else if (type === "phone") {
      if (value === "") {
        return "Este campo es requerido";
      } else if (value === undefined) {
        return "";
      } else if (!/^[0-9]+$/.test(value)) {
        return "El teléfono solo puede contener números";
      } else {
        return "";
      }
    } else if (type === "message") {
      if (value === "") {
        return "Este campo es requerido";
      } else {
        return "";
      }
    }
  };

  return (
    <div
      id="form"
      className="flex-1 w-3/4 py-5 md:mx-10"
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="text-white text-4xl text-center pb-5">Contáctanos</h1>
      <form className="w-full max-w-lg m-auto">
        <div className="w-full px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-first-name"
          >
            Nombres y Apellidos
          </label>
          <input
            {...register("name", { required: false })}
            name="name"
            className="appearance-none block w-full h-10 bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
            type="text"
            placeholder="Nombre"
          />
          {
            <p className="mb-2 text-sm text-red-600 dark:text-green-500">
              {validation("name", watch("name"))}
            </p>
          }
        </div>
        <div className="w-full px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-first-name"
          >
            Correo Electrónico
          </label>
          <input
            {...register("mail", { required: true })}
            name="mail"
            className="appearance-none block w-full h-10 bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
            type="email"
            placeholder="Correo"
          />
          {
            <p className="mb-2 text-sm text-red-600 dark:text-green-500">
              {validation("mail", watch("mail"))}
            </p>
          }
        </div>
        <div className="flex flex-wrap px-3 -mx-3">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-state"
            >
              Código
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full h-10 bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
              >
                <option>+593</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Número de teléfono
            </label>
            <input
              {...register("phone", { required: true })}
              name="phone"
              className="appearance-none block w-full h-10 bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="number"
              placeholder="Teléfono"
            />
            {
              <p className="mb-2 text-sm text-red-600 dark:text-green-500">
                {validation("phone", watch("phone"))}
              </p>
            }
          </div>
        </div>
        <div className="w-full px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-first-name"
          >
            Información
          </label>
          <textarea
            {...register("message", { required: true })}
            name="message"
            className="appearance-none block w-full h-24 resize-none bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            placeholder="Consulta"
          />
          {
            <p className="mb-2 text-sm text-red-600 dark:text-green-500">
              {validation("message", watch("message"))}
            </p>
          }
        </div>
        <div className="w-full px-3 mb-6 md:mb-0">
          <input
            className={`${
              button ? "visible" : "hidden"
            } bg-[#ed184f] hover:bg-[#b3163e] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
            type="submit"
            value="Enviar"
            onClick={() => {
              setButton(!button);
            }}
          />
          <div
            className={`${
              button ? "hidden" : "visible"
            } h-10 w-20 bg-[#ed184f] rounded pt-1 pl-3`}
          >
            <Seek color="#ffffff" size="small" text="" textColor="" />
          </div>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </div>
      </form>
    </div>
  );
}
