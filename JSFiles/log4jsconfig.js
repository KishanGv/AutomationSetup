"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.log4jsconfig = void 0;
var log4jsconfig = /** @class */ (function () {
    function log4jsconfig() {
    }
    log4jsconfig.Log = function () {
        var log4js = require('log4js');
        log4js.configure('./config/log4js.json');
        //var logger = log4js.getLogger(); //for both console and file
        var log = log4js.getLogger("Mindoula");
        return log;
    };
    return log4jsconfig;
}());
exports.log4jsconfig = log4jsconfig;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nNGpzY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vbG9nNGpzY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBO0lBQUE7SUFTQSxDQUFDO0lBUFUsZ0JBQUcsR0FBVjtRQUNJLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMvQixNQUFNLENBQUMsU0FBUyxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDekMsOERBQThEO1FBQzlELElBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDdkMsT0FBTyxHQUFHLENBQUM7SUFDZixDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQUFDLEFBVEQsSUFTQztBQVRZLG9DQUFZIn0=