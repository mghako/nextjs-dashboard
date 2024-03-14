"use client"

import React from "react";
import PageTitle from "@/components/PageTitle";
import { useToast } from "@/components/ui/use-toast";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button"
import { z } from "zod"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"




const OldItemsRegistration = () => {
  const form = useForm();

  const onSubmit = (d) => {
    alert(JSON.stringify(d))
  }



    return (
        <div className="flex flex-col gap-5 w-full py-5">
            <PageTitle title={'Sample Form'} />
            <section>
              {/* <form onSubmit={handleSubmit(onSubmit)}>
                <input className="border shadow rounded gap-2" type="text" {...register("firstName")} />
                <input className="border shadow rounded gap-2" type="email" {...register("email")} />
                <input className="border shadow rounded gap-2" type="password" {...register("password")} />
                <input type="submit" value={"submit"} />
              </form> */}
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div>
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                              <Input placeholder="shadcn" {...field} />
                            </FormControl>
                            <FormDescription>
                              This is your public display name.
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                      <div>
                      <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                              <Input placeholder="shadcn" {...field} />
                            </FormControl>
                            <FormDescription>
                              This is your public display name.
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      </div>
                  </div>
                  <Button type="submit">Submit</Button>
                </form>
              </Form>
            </section>
        </div>
    )
}
export default OldItemsRegistration;