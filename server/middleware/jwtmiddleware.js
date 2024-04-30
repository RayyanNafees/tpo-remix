import jwt from 'jsonwebtoken';
// import User from '../models/userModels.js'

/**
 * Verifies the JWT token for Admin & user
 * @param {('admin'|'user'|'recruiter')} role Verifying an "admin" or "user"
 * @param {string} token Auth token to verity
 * @param {(()=>void)} next
 */
const verify = async (role, token, req, res, next) => {
  const jwtSecret =
    role === 'user' ? process.env.jwtSecret : process.env.adminjwtSecret;

  return jwt.verify(token, jwtSecret, (err, ids) => {
   
    if (err)
      switch (err.name) {
        case 'TokenExpiredError':
           return res
             .status(401)
             .json({ status: 'fail', error: 'Token Expired' });
        case 'JsonWebTokenError':
          return res
            .status(401)
            .json({ status: 'fail', error: 'Invalid Token' });

        default:
          return res
            .status(500)
            .json({ status: 'error', error: 'Internal Server Error' });
      }
    // if (role === 'user')
    
    console.log({ ids });
    const { userId, adminId } = ids;

    if (role === 'admin') req.adminId = adminId;
    else if (role === 'recruiter') req.recruiterId = userId;
    req.userId = userId;
    req.role = role;
    next();
  });
};

/**
 * Authenticates User tokens
 * @param {Request} req Request received from client
 * @param {Response} res Response sent to client
 * @param {(()=>void)} next
 * @returns {void}
 */
export const authenticateToken = (req, res, next) => {
  let token;
  if (req.headers.authtoken?.startsWith('Bearer')) {
    token = req.headers.authtoken.split(' ')[1];
  }

  if (!token) {
    return res
      .status(401)
      .json({ status: 'fail', message: 'Auth Token not provided' });
  }
  verify('user', token, req, res, next);
};
/**
 * Authenticates Admin tokens
 * @param {Request} req Request received from client
 * @param {Response} res Response sent to client
 * @param {(()=>void)} next
 * @returns {void}
 */
export const authenticateAdminToken = (req, res, next) => {
  let token;
  if (req.headers.authtoken?.startsWith('Bearer')) {
    token = req.headers.authtoken.split(' ')[1];
  }

  if (!token) {
    return res
      .status(401)
      .json({ status: 'fail', message: 'Auth Token not provided' });
  }
  verify('admin', token, req, res, next);
};

/**
 * Authenticates Admin tokens
 * @param {Request} req Request received from client
 * @param {Response} res Response sent to client
 * @param {(()=>void)} next
 * @returns {void}
 */
export const authenticateRecruiterToken = (req, res, next) => {
  let token;
  if (req.headers.authtoken?.startsWith('Bearer')) {
    token = req.headers.authtoken.split(' ')[1];
  }

  if (!token) {
    return res
      .status(401)
      .json({ status: 'fail', message: 'Auth Token not provided' });
  }
  verify('recruiter', token, req, res, next);
};
