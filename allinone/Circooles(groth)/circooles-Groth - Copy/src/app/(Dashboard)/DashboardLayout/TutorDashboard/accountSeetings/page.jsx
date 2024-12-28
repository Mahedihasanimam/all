import { Button } from "antd"
import Link from "next/link"

const page = () => {
    return (
        <div className="h-screen  bg-white p-4">

            <p className="text-[#475467]">update your email and password here :</p>

            <div className="border border-[#D0D5DD] p-6 rounded-lg w-full mt-8 space-y-4">

                <div className="flex items-center justify-between">
                    <div>
                        <strong className="text-[#344054] font-medium">email</strong>
                        <p className="text-[#667085] font-normal">Update the email used to log into your account</p>
                    </div>
                    <div>
                        <Link href={'/DashboardLayout/UpdatePassword'}><Button>Update password</Button></Link>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <div>
                        <strong className="text-[#344054] font-medium">email</strong>
                        <p className="text-[#667085] font-normal ">Update the email used to log into your account</p>
                    </div>
                    <div>
                    <Link href={'/DashboardLayout/updateEmail'}>
                    
                        <Button style={{color:'#344054',fontWeight:'600'}}>Update eamil</Button>
                    </Link>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default page