const debug = require('debug');
module.exports.debugHttpRequestBody = debug('assessment:http:request:body');
module.exports.debugHttpResponse = debug('assessment:http:response');
module.exports.debugHttpError = debug('assessment:http:error');
