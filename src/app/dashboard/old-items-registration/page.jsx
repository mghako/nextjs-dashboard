"use client"

import React from "react";
import PageTitle from "@/components/PageTitle";
import { useToast } from "@/components/ui/use-toast";
import { useForm } from "react-hook-form";

const OldItemsRegistration = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (d) => {
    alert(JSON.stringify(d))
  }
    const {toast} = useToast();
    return (
        <div className="flex flex-col gap-5 w-full py-5">
            <PageTitle title={'Old Items Registration'} />
            <section>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input className="border shadow rounded gap-2" type="text" {...register("firstName")} />
                <input className="border shadow rounded gap-2" type="email" {...register("email")} />
                <input className="border shadow rounded gap-2" type="password" {...register("password")} />
                <input type="submit" value={"submit"} />
              </form>
            </section>
        </div>
    )
}
export default OldItemsRegistration;