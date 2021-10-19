import jwt, { decode } from 'jsonwebtoken';

const authenticate = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const isCustomAuth = token.length < 500;
        const userToken = process.env.USER_TOKEN;
        
        let decodedData;

        if(token && isCustomAuth) {
            decodedData = jwt.verify(token, userToken.toString());

            req.userId = decodedData?.id;
        } else {
            decodedData = jwt.decode(token);

            req.userId = decodedData?.sub;
        }

        next();
    } catch(error) {
        console.log(error);
    }
}

export default authenticate;