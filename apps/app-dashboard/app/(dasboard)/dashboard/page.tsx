import { AppCard } from "../../../components/AppCard"

async function page() {

    const APPS = [
        {
            'title': "Paytm User App",
            'description': "A Financial app with next-auth authentication with add wallet money and transfering money functionalities",
            'link': process.env.NEXT_PUBLIC_PAYTM_USERAPP_URL || "https://paytmuserapp.practise.bsamaritan.com",
            'image': 'https://raw.githubusercontent.com/anoopkarnik/turborepo-boilerplate-code/main/apps/app-dashboard/public/paytmuserclone.gif'
        },
        {
            'title': "Paytm Merchant App",
            'description': "A Financial app with next-auth authentication for google and github provider",
            'link': process.env.NEXT_PUBLIC_PAYTM_MERCHANTAPP_URL || "https://paytmmerchantapp.practise.bsamaritan.com",
            'image': 'https://raw.githubusercontent.com/anoopkarnik/turborepo-boilerplate-code/main/apps/app-dashboard/public/paytmmerchantclone.gif'
        }
    ]
    return <div className="grid grid-cols-1 md:grid-cols-3 ">
       {APPS.map((app) => (
               <AppCard key={app.title} title={app.title} description={app.description} link={app.link} image={app.image}/>
       ))}
    </div>
}

export default page