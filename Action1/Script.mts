'Test Case Objective: Verify user gets "Incorrect User Name or Password" Message when he/she tries to login with incorrect user name.
'comment line

SystemUtil.Run "iexplore.exe", "http://www.advantageonlineshopping.com/#/"
Wait(10)

Browser("Advantage Shopping").Page("Advantage Shopping").Sync
Browser("Advantage Shopping").Page("Advantage Shopping").Link("Link").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").Link("Link")_;_script infofile_;_ZIP::ssf1.xml_;_
Wait(2)

Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Username").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Username")_;_script infofile_;_ZIP::ssf2.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("username").Set "invalid_user_name" @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("username")_;_script infofile_;_ZIP::ssf3.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Password").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Password")_;_script infofile_;_ZIP::ssf4.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("password").SetSecure "5c4f34c3f06a6d3f0f4ff80ec9f089d5615bbb966e3f" @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("password")_;_script infofile_;_ZIP::ssf5.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebCheckBox("remember_me").Set "ON" @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebCheckBox("remember me")_;_script infofile_;_ZIP::ssf6.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("SignIn").Click
Wait(5)

Browser("Advantage Shopping").Page("Advantage Shopping").Sync
If Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Incorrect_UserName_Password_Msg").Exist(10) Then
	Reporter.ReportEvent micPass,"Verify_Incorrect_Username","Got the expected error while trying to login with incorrect user name"
Else
	Reporter.ReportEvent micFail,"Verify_Incorrect_Username","Did not got the expected error while trying to login with incorrect user name"
End If

 @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("sign in btnundefined")_;_script infofile_;_ZIP::ssf7.xml_;_
