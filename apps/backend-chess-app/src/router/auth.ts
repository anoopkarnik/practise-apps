import { Request, Response, Router} from 'express'
import db from "@repo/prisma-db/client"
const jwt = require('jsonwebtoken')
import passport from 'passport';

const router = Router();

const CLIENT_URL = process.env.AUTH_REDIRECT_URL ?? 'http://localhost:3014/game/random';
const JWT_SECRET = process.env.JWT_SECRET || 'jwt_secret';

interface User {
    id: string;
}

router.get('/refresh', async (req: Request, res: Response)=>{
    // @ts-ignore
    if (req.user){
        // @ts-ignore
        const user = req.user as User;

        const userDb = await db.user.findFirst({
            where: {
                id: user.id
            }
        });
        const token = jwt.sign({userId: user.id}, JWT_SECRET)
        res.json({
            token,
            id: user.id,
            name: userDb?.name,
        });
    } else{
        res.status(401).json({success: false, error: 'Unauthorized'});
    }
})

router.get('/login/failed' , (req: Request, res: Response)=>{
    res.status(401).json({success: false, error: 'Login failed'});
})

router.get('/logout', (req: Request, res: Response)=>{
    // @ts-ignore
    req.logout((err) =>{
        if (err){
            console.error('Error logging out', err);
            res.status(500).json({success: false, error: 'Logout failed'});
        } else{
            res.clearCookie('jwt');
            res.redirect('http://localhost:3014')
        }
    })
})

router.get(
    '/google',
    passport.authenticate('google', { scope: ['profile', 'email'] }),
  );
  
  router.get(
    '/google/callback',
    passport.authenticate('google', {
      successRedirect: CLIENT_URL,
      failureRedirect: '/login/failed',
    }),
  );

  
router.get('/github', passport.authenticate('github', { scope: ['read:user','user:email'] }));

router.get('/github/callback',passport.authenticate('github', {successRedirect: CLIENT_URL,failureRedirect: '/login/failed',}),);

export default router; 