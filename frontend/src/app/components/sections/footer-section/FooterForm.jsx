"use client";

import style from "./FooterForm.module.scss";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
//import { getContactData } from "@/app/services/Home.services";

const FooterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  /*const [dataContact, setDataContact] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      const data = await getContactData()
      setDataContact(data);
    };
    fetch();
  }, []);*/

  const onSubmit = handleSubmit((dataEmail) => {
    const { nombre, email, teléfono, ciudad, comentarios } = dataEmail;

    const mailtoLink = `mailto:${dataContact.map(
      (email) => email.contactMail
    )}?subject= Información web&body=
    Nombre: ${nombre}%0D%0A
    Correo Electrónico: ${email}%0D%0A
    Teléfono: ${teléfono}%0D%0A
    Ciudad: ${ciudad}%0D%0A
    Comentarios: ${comentarios || "Ninguno"}%0D%0A`;

    window.location.href = mailtoLink;
  });

  return (
    <form onSubmit={onSubmit} className={style.form}>
      <div className={`${style.form__2}`}>
        <div className={` ${style.form__left}`}>
          <label className={style.label} htmlFor="nombre">
            Nombre*
          </label>
          <input
            className={style.input}
            type="text"
            {...register("nombre", {
              required: {
                value: true,
                message: "Nombre es requerido",
              },
              minLength: {
                value: 2,
                message: "Nombre debe tener al menos 2 caracteres",
              },
              maxLength: {
                value: 25,
                message: "Nombre debe tener máximo de 25 caracteres",
              },
            })}
          />
          {errors.nombre && (
            <span className={style.span}>{errors.nombre.message}</span>
          )}

          <label className={style.label} htmlFor="email">
            Correo Electrónico*
          </label>
          <input
            className={style.input}
            type="email"
            {...register("email", {
              required: {
                value: true,
                message: "Correo es requerido",
              },
              pattern: {
                value:
                  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                message: "Correo no valido",
              },
            })}
          />
          {errors.email && (
            <span className={style.span}>{errors.email.message}</span>
          )}
        </div>
        <div className={`${style.form__right}`}>
          <label className={style.label} htmlFor="Teléfono">
            Teléfono*
          </label>
          <input
            className={style.input}
            type="text"
            {...register("teléfono", {
              required: {
                value: true,
                message: "Teléfono es requerido",
              },
              minLength: {
                value: 2,
                message: "Numero debe tener al menos 2 caracteres",
              },
              maxLength: {
                value: 15,
                message: "Numero debe tener máximo de 15 caracteres",
              },
            })}
          />
          {errors.teléfono && (
            <span className={style.span}>{errors.teléfono.message}</span>
          )}

          <label className={style.label} htmlFor="ciudad">
            Ciudad*
          </label>
          <input
            className={style.input}
            type="ciudad"
            {...register("ciudad", {
              required: {
                value: true,
                message: "Ciudad es requerido",
              },
            })}
          />
          {errors.ciudad && (
            <span className={style.span}>{errors.ciudad.message}</span>
          )}
        </div>
      </div>
      <div className={style.textareaSection}>
        <label className={style.label} htmlFor="Comentarios">
          Comentarios(Opcional)
        </label>
        <textarea className={style.textarea}></textarea>
        <button className={style.btn} type="submit">
          Enviar formulario
        </button>
      </div>
    </form>
  );
};

export default FooterForm;
