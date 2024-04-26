import { AppCard } from "@/components/AppCard"

export default function Dashboard() {

    const APPS = [
        {
            'title': "Paytm User App",
            'description': "A Financial app with next-auth authentication with add wallet money and transfering money functionalities",
            'link': process.env.PAYTM_USERAPP_URL || 'http://localhost:3001',
            'image': 'https://raw.githubusercontent.com/anoopkarnik/turborepo-boilerplate-code/main/apps/app-dashboard/public/paytmuserclone.gif'
        },
        {
            'title': "Paytm Merchant App",
            'description': "A Financial app with next-auth authentication for google and github provider",
            'link': process.env.PAYTM_MERCHANTAPP_URL || 'http://localhost:3002',
            'image': 'https://raw.githubusercontent.com/anoopkarnik/turborepo-boilerplate-code/main/apps/app-dashboard/public/paytmmerchantclone.gif'
        }
    ]
    return <div className="grid grid-cols-1 md:grid-cols-3 ">
       {APPS.map((app) => (
               <AppCard title={app.title} description={app.description} link={app.link} image={app.image}/>
       ))}
    </div>
}