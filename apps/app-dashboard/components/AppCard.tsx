import { Card,CardTitle, CardContent } from "@repo/ui/components/card"
import Image from "next/image";
import Link from 'next/link';

interface AppCardProps {
    title: string,
    image?: any,
    description?: string,
    link?: string
}


export const AppCard = ({title,image,description,link}:AppCardProps) =>{
    return (
        <Link href={link || '#'} passHref>
            <Card className="my-4 p-4 border flex flex-col gap-4 w-full">
                <CardTitle>{title}</CardTitle>
                <CardContent className="p-4 flex flex-col gap-4 w-full">
                    <div className="flex justify-between pb-2">
                        <Image src={image} width={200} height={200} alt="No Picture"/>
                        <div>
                            {description}
                        </div>
                    </div>
                </CardContent>
            </Card>
        </Link>
    )
}