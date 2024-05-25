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
        },
        {
            'title': "Frontend Chat App",
            'description': "A Frontend Express chat application with socket.io and basic authentication",
            'link': process.env.NEXT_PUBLIC_CHATAPP_URL || "https://frontendchatapp.practise.bsamaritan.com",
            'image': 'https://raw.githubusercontent.com/anoopkarnik/turborepo-boilerplate-code/main/apps/app-dashboard/public/basicchat.gif'
        },
        {
            'title': "Fancy Web Pages App",
            'description': "A Frontend React app with fancy web pages of different type of sites",
            'link': process.env.NEXT_PUBLIC_FANCY_WEBPAGES_URL || "https://fancywebpages.practise.bsamaritan.com",
            'image': 'https://raw.githubusercontent.com/anoopkarnik/turborepo-boilerplate-code/main/apps/app-dashboard/public/web_pages.png'
        },
        {
            'title': "Medium Clone App",
            'description': "Clone of medium app with vite frontend and cloudflare worker hono backend",
            'link': process.env.NEXT_PUBLIC_BLOG_URL || "https://blog.practise.bsamaritan.com",
            'image': 'https://raw.githubusercontent.com/anoopkarnik/turborepo-boilerplate-code/main/apps/app-dashboard/public/blog.gif'
        },
        {
            "title": "Openspec API App",
            "description": "A Hono app with zod-openapi for creating openapi spec",
            "link": process.env.NEXT_PUBLIC_OPENAPI_URL || "https://openspecapi.practise.bsamaritan.net/ui",
            "image": "https://raw.githubusercontent.com/anoopkarnik/turborepo-boilerplate-code/main/apps/app-dashboard/public/openspec-api.gif"
        },
        {
            "title": "WebRTC App",
            "description": "A WebRTC server to share video stream",
            "link": process.env.NEXT_PUBLIC_WEBRTCAPP_URL || "https://webrtc.practise.bsamaritan.com",
            "image": "https://raw.githubusercontent.com/anoopkarnik/turborepo-boilerplate-code/main/apps/app-dashboard/public/webrtc.gif"
        },
        {
            "title": "WebRTC App",
            "description": "A WebRTC server to share video stream",
            "link": process.env.NEXT_PUBLIC_WEBRTCAPP_URL || "https://webrtc.practise.bsamaritan.com",
            "image": "https://raw.githubusercontent.com/anoopkarnik/turborepo-boilerplate-code/main/apps/app-dashboard/public/webrtc.gif"
        }
    ]
    return <div className="m-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-max">
       {APPS.map((app) => (
               <AppCard key={app.title} title={app.title} description={app.description} link={app.link} image={app.image}/>
       ))}
    </div>
}

export default page