/**
 * Created by sergiiivanchenko on 05/10/2017.
 */

let basePath = '';
basePath = process.env.NODE_ENV === 'development' ? './' : './build/';

export default basePath;

// module.exports = {
//     basePath:basePath
// };
