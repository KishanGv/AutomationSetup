"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
var protractor_1 = require("protractor");
//var retry = require('protractor-retry').retry;
exports.config = {
    // The address of a running selenium server.
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    allScriptsTimeout: 20000,
    framework: "custom",
    frameworkPath: require.resolve("protractor-cucumber-framework"),
    baseUrl: "STAGE",
    //baseUrl: "STAGE2",
    //capabilities: chrome.capabilities,
    useAllAngular2AppRoots: true,
    specs: ["../features/*.feature"],
    //ignoreUncaughtExceptions: true,
    onPrepare: function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        protractor_1.browser.ignoreSynchronization = true;
                        return [4 /*yield*/, protractor_1.browser
                                .manage()
                                .window()
                                .maximize()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    },
    params: {
        mmrlogin: {
            email: "casemanager@mind.com",
            //email: "programco@mind.com",
            //email: "consultant@mind.com",
            //email: "mmr.membX1@mind.com",
            //email: "mmr.memb243@mind.com",
            pwd: "Test@123",
            setCurrentUser: "MMR A MEMB167",
            setProvLookUp: "YES",
            title: "mMR"
        },
        mmrlogin2: {
            email: "mmr.membX2@mind.com",
            pwd: "Test@123",
            setCurrentUser: "MMR A MEMB175",
            setProvLookUp: "YES"
        },
        mmrloginCaseM: {
            email: "abccase@mind.com",
            pwd: "Test@123",
            setCurrentUser: "MMR A MEMB175",
            setProvLookUp: "YES"
        }
    },
    // params: {
    //   mmrlogin: {
    //     email: "mmr.memb130@mind.com",
    //     pwd: "Test@123",
    //     setCurrentUser: "MMR A MEMB130",
    //     setProvLookUp: "YES"
    //   }
    // },
    cucumberOpts: {
        format: "json:./cucumberreport.json",
        require: ["./stepDefinations/*.js"],
        strict: true,
        //tags: "@LoginToTheSite or @RunAsNewMember or @VerifyAllAssessments"
        //tags: "@LoginToTheSite or @RunAsExistingMember "
        //tags: "@LoginToTheSite or @RunAsNewMember or @VerifyM3BranchingLogic" 
        //tags: "@LoginToTheSite or @RunAsNewMember"
        //tags: "@LoginToTheSite or @RunAsExistingMember or @VerifyAllAssessments"
        //tags: "@LoginToTheSite or @DarkmodeToTheSite or @RunAsNewMember or @VerifyMemberCaseNotes"
        //tags: "@LoginToTheSite or @RunAsNewMember or @test"
        tags: "@LoginToTheSite or @RunAsExistingMember or @E2E_Member"
        //tags: "@LoginToTheSite or @RunAsExistingMember or @VerifyMemberCaseNotes"
        //tags: "@LoginToTheSite  or @VerifyAllAssessmentsInMembPlatform"
        //tags: "@LoginToTheSite or @RunAsExistingMember or @VerifyMemberConsults"
        //tags: "@LoginToTheSite or @DarkmodeToTheSite or @RunAsNewMember or @E2E_Member"
        //tags: "@LoginToTheSite or @VerifyEngagementRequests"
        //tags: "@LoginToTheSite or @VerifyFilters"
        //tags: "@LoginToTheSite or @RunAsExistingMember or @VerifyMemberTags" 
        //tags: "@LoginToTheSite or @memberlaneStatusChanges" 
        //tags: "@LoginToTheSite or @VerifyAddFilterPracticeProviders" 
        //tags: "@LoginToTheSite or @RunAsExistingMember or @ResetPassword"
        //tags: "@LoginToTheSite or @RunAsNewMember or @ResetPassword or @VerifyAllAssessmentsInMembPlatform"
    },
    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true // Use colors in the command line report.
    },
    //   onCleanUp: function (results) {
    //     retry.onCleanUp(results);
    // },
    onComplete: function () {
        var date = new Date();
        var cdate = date.toISOString().slice(0, 10);
        var time = date.getTime();
        var currentDate = cdate + "-" + time;
        var reporter = require('cucumber-html-reporter');
        var options = {
            theme: "bootstrap",
            jsonFile: "./cucumberreport.json",
            output: process.cwd() + "/reports/html/" + currentDate + "cucumber_report.html",
            reportSuiteAsScenarios: true,
            launchReport: true,
            metadata: {
                "App Version": "0.3.2",
                "Test Environment": "STAGING",
                Browser: "Chrome  54.0.2840.98",
                Platform: "Windows 10",
                Parallel: "Scenarios",
                Executed: "Remote"
            }
        };
        reporter.generate(options);
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VjdW1iZXJjb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jdWN1bWJlcmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5Q0FBNkM7QUFFN0MsZ0RBQWdEO0FBQ3JDLFFBQUEsTUFBTSxHQUFXO0lBQzFCLDRDQUE0QztJQUM1QyxrREFBa0Q7SUFDbEQsYUFBYSxFQUFFLElBQUk7SUFDbkIsaUJBQWlCLEVBQUUsS0FBSztJQUN4QixTQUFTLEVBQUUsUUFBUTtJQUNuQixhQUFhLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQztJQUMvRCxPQUFPLEVBQUUsT0FBTztJQUNoQixvQkFBb0I7SUFDcEIsb0NBQW9DO0lBQ3BDLHNCQUFzQixFQUFFLElBQUk7SUFFNUIsS0FBSyxFQUFFLENBQUMsdUJBQXVCLENBQUM7SUFDaEMsaUNBQWlDO0lBRWpDLFNBQVMsRUFBRTs7Ozs7d0JBQ1Qsb0JBQU8sQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUM7d0JBRXJDLHFCQUFNLG9CQUFPO2lDQUNWLE1BQU0sRUFBRTtpQ0FDUixNQUFNLEVBQUU7aUNBQ1IsUUFBUSxFQUFFLEVBQUE7O3dCQUhiLFNBR2EsQ0FBQzs7Ozs7S0FDZjtJQUVELE1BQU0sRUFBRTtRQUNOLFFBQVEsRUFBRTtZQUNSLEtBQUssRUFBRSxzQkFBc0I7WUFDN0IsOEJBQThCO1lBQzlCLCtCQUErQjtZQUMvQiwrQkFBK0I7WUFDL0IsZ0NBQWdDO1lBRWhDLEdBQUcsRUFBRSxVQUFVO1lBQ2YsY0FBYyxFQUFFLGVBQWU7WUFDL0IsYUFBYSxFQUFFLEtBQUs7WUFDcEIsS0FBSyxFQUFDLEtBQUs7U0FDWjtRQUNELFNBQVMsRUFBRTtZQUVULEtBQUssRUFBRSxxQkFBcUI7WUFDNUIsR0FBRyxFQUFFLFVBQVU7WUFDZixjQUFjLEVBQUUsZUFBZTtZQUM5QixhQUFhLEVBQUUsS0FBSztTQUN0QjtRQUNELGFBQWEsRUFBRTtZQUViLEtBQUssRUFBRSxrQkFBa0I7WUFDekIsR0FBRyxFQUFFLFVBQVU7WUFDZixjQUFjLEVBQUUsZUFBZTtZQUMvQixhQUFhLEVBQUUsS0FBSztTQUNyQjtLQUNGO0lBSUQsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixxQ0FBcUM7SUFDckMsdUJBQXVCO0lBQ3ZCLHVDQUF1QztJQUN2QywyQkFBMkI7SUFDM0IsTUFBTTtJQUNOLEtBQUs7SUFFTCxZQUFZLEVBQUU7UUFDWixNQUFNLEVBQUUsNEJBQTRCO1FBQ3BDLE9BQU8sRUFBRSxDQUFDLHdCQUF3QixDQUFDO1FBQ25DLE1BQU0sRUFBRSxJQUFJO1FBQ1oscUVBQXFFO1FBQ3JFLGtEQUFrRDtRQUNsRCx3RUFBd0U7UUFDeEUsNENBQTRDO1FBQzVDLDBFQUEwRTtRQUMxRSw0RkFBNEY7UUFDNUYscURBQXFEO1FBQ3JELElBQUksRUFBRSx3REFBd0Q7UUFDOUQsMkVBQTJFO1FBQzNFLGlFQUFpRTtRQUNqRSwwRUFBMEU7UUFDMUUsaUZBQWlGO1FBQ2pGLHNEQUFzRDtRQUN0RCwyQ0FBMkM7UUFDM0MsdUVBQXVFO1FBQ3ZFLHNEQUFzRDtRQUN0RCwrREFBK0Q7UUFDL0QsbUVBQW1FO1FBQ25FLHFHQUFxRztLQUN0RztJQUNELHdDQUF3QztJQUN4QyxlQUFlLEVBQUU7UUFDZixVQUFVLEVBQUUsSUFBSSxDQUFDLHlDQUF5QztLQUMzRDtJQUNILG9DQUFvQztJQUNwQyxnQ0FBZ0M7SUFDaEMsS0FBSztJQUNILFVBQVUsRUFBRTtRQUNWLElBQUksSUFBSSxHQUFTLElBQUksSUFBSSxFQUFFLENBQUM7UUFDNUIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDNUMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzFCLElBQUksV0FBVyxHQUFHLEtBQUssR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDO1FBQ3JDLElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQ2pELElBQUksT0FBTyxHQUFHO1lBQ1osS0FBSyxFQUFFLFdBQVc7WUFDbEIsUUFBUSxFQUFFLHVCQUF1QjtZQUNqQyxNQUFNLEVBQ0osT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLGdCQUFnQixHQUFHLFdBQVcsR0FBRyxzQkFBc0I7WUFDekUsc0JBQXNCLEVBQUUsSUFBSTtZQUM1QixZQUFZLEVBQUUsSUFBSTtZQUNsQixRQUFRLEVBQUU7Z0JBQ1IsYUFBYSxFQUFFLE9BQU87Z0JBQ3RCLGtCQUFrQixFQUFFLFNBQVM7Z0JBQzdCLE9BQU8sRUFBRSxzQkFBc0I7Z0JBQy9CLFFBQVEsRUFBRSxZQUFZO2dCQUN0QixRQUFRLEVBQUUsV0FBVztnQkFDckIsUUFBUSxFQUFFLFFBQVE7YUFDbkI7U0FDRixDQUFDO1FBRUYsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM3QixDQUFDO0NBQ0YsQ0FBQyJ9