"use client"

import { DataTable } from "@/components/DataTable";
import PageTitle from "@/components/PageTitle";
import { useToast } from "@/components/ui/use-toast";
import React from "react";
const UserPage = () => {
    const {toast} = useToast();
    return (
        <div className="flex flex-col gap-5 w-full py-5">
            <PageTitle title={'Users'} />
            <DataTable columns={columns} data={data} />
        </div>
    )
}
export default UserPage;

export const data = [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "489e1d42",
      amount: 125,
      status: "processing",
      email: "example@gmail.com",
    },
];



export const columns = [
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
];
