import { TransferMoneyCard } from "../../../components/TransferMoneyCard";

export default async function(){

    return (
        <div className="w-screen flex flex-col gap-4 p-4">
            <div className="text-4xl text-violet-800">P2P Transfers</div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 p-4  "> 
                <TransferMoneyCard/>
            </div>
        </div>
    )
}