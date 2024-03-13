import { Card } from "@/components/Card";
import PageTitle from "@/components/PageTitle";
import { User } from "lucide-react";
import React from "react";
const UserPage = () => {
    return (
        <div className="flex flex-col gap-5 w-full">
            <PageTitle title={'Dashboard'} />
            <section className="grid w-full grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 gap-x-8 transition-all">
                <Card label="testin card" icon={User} amount="1000.00" description="testing description" />
                <Card label="testin card" icon={User} amount="1000.00" description="testing description" />
                <Card label="testin card" icon={User} amount="1000.00" description="testing description" />
                <Card label="testin card" icon={User} amount="1000.00" description="testing description" />
            </section>
            <section className="grid grid-cols-1 gap-4 transition-all lg:grid-cols-2">
            <Card label="testin card" icon={User} amount="1000.00" description="testing description" />
            <Card label="testin card" icon={User} amount="1000.00" description="testing description" />
            </section>
        </div>
    )
}
export default UserPage;