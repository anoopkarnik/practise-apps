import { AppCard } from "@/components/AppCard"

export default function Dashboard() {

    const APPS = [
        {
            'title': "Paytm User App",
            'description': "A Financial app with next-auth authentication with add wallet money and tranfering money functionalities",
            'link': 'http://localhost:3001',
            'image': '../public/paytmuserclone.gif'
        }
    ]
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-38">
       {APPS.map((app) => (
               <AppCard title={app.title} description={app.description} link={app.link} image={app.image}/>
       ))}
    </div>
}