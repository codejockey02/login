module.exports = () => {
    if (process.env.PORT === undefined) {
        process.env.PORT = 3000;
    }
    if (process.env.MONGO_URL === undefined) {
        process.env.MONGO_URL = 'mongodb://priyeshs2:Priyesh123@ds127015.mlab.com:27015/mocial';
    }
};