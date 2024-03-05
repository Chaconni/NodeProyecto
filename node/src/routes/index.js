import { Router } from "express";
import { crud, home, login, registro, insertUsers, registerUser, showUsers, loginUser,  } from "../controllers/controller.js";

 const router = Router();
 
router.get('/', home);
router.get('/login', login);
router.get('/registro', registro);
router.get('/crud', crud);

router.get('/connect', async(req, res)=>{
    await pool.query('Conectado!')
});

router.post('/insertUsers', insertUsers);
router.post('/registerUser', registerUser);
router.post('/loginUser', loginUser);
router.get('/showUsers', showUsers);

export default router;