## To Get Started
### Pre-requisites
##### 1).NodeJS installed globally in the system [nodejs](https://nodejs.org/en/download/).
##### 2).Download  Windows Installer based on System 32 bit or 64 Bit.
##### 3).Click on the Downloaded Installer and Install the downloaded msi file
##### 4).Set Up path in Environmental variable for Node JS like Below.
```python
   In general default path will be like this “C:\Program Files\nodejs”
```
##### 5).Chrome or Firefox browsers installed.
#### Visual Studio Code should be installed using [Visual Studio](https://code.visualstudio.com/download)
```python
Use npm to install Protractor globally with:
npm install -g protractor
Open the Node.js Command Prompt and Update the Web Driver Manager
The webdriver-manager is a helper tool to easily get an instance of a Selenium Server running. Use it to download the necessary binaries with:
webdriver-manager update
Now start up a server with:
webdriver-manager start
```
## Setup & Scripts
#### Clone the repository into a folder
####  Open the Visual Studio Code and add the project folder
```python
Open the terminal in Visual studio code  and run the below command
npm install
All the dependencies from package.json and ambient typings would be installed in the node_modules folder. You find the node_modules folder created in your project.
```
## Run Scripts
In the terminal window update the webdriver-manager
```python
webdriver-manager proves very handy for this.The below command should download the chrome & gecko driver binaries locally for you!
npm run webdriver-update

Running the Test
Example : npm run E2ETest.
```
#### Once the Test is Successfully Passed the Html Report will be available in the Reports folder

#### The Tests Included in this Current Version are
```python

AssessmentsTest
EngagementRequestTest
E2ETest
TasksTest
M3BranchingLogicTest
FiltersTest
MemberFiltersViewsTest
CaseNotesTest
ConsultsTest
MemberPlatformAssessmentTest
MemberlaneStatusChangesTest
MembersAddFiltersPracticeProviderCheckTest
GoalsTest
ConsentTest
GoalsAndReferralsFiltersTest
CaseManagerUITest
EngagementCoordinatorUITest
AdminUITest
PsychiatricConsultantUI
ProgramManagerUITest
WorkFlowStateTest
WorkFlowStateInMemberLaneTest
WorkFlowStateInMemberPendingEnrolledTest
CheatsheetTest
TagsTest
QuickListFiltersTest
MembersQuickListFiltersTest
ServicePlanTest
LeftNavigationTest
PayersTest
ActiveConditionsTest
ImpactGoodNewsStoryTest
ContactInfoTest
AdultAssessmentsTest
MembersListTest
mMRUpdatesTest

```
#   A s s i g n  
 "# Assign" 
