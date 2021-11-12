import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:vertical/screens/button.dart';
import 'package:vertical/screens/email_component.dart';
import 'package:vertical/screens/password_component.dart';


class Login extends StatefulWidget {
  @override
  _LoginState createState() => _LoginState();
}

class _LoginState extends State<Login> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack (
        children: <Widget> [
        SingleChildScrollView( 
          child: ConstrainedBox(
            constraints: BoxConstraints(
              minHeight: MediaQuery.of(context).size.height,
              ),
            child:
            Container(
          decoration: const BoxDecoration(
          gradient : LinearGradient(
          begin: Alignment.topCenter,
          end: Alignment.bottomCenter,
          colors: [Color.fromRGBO(46, 61, 100, 1),
          Color(0xFFb5b4b0)],
        ),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: <Widget>[
          SizedBox(height: 40),
          Padding(
            padding: EdgeInsets.all(20),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: <Widget>[
                  Text("Login", style: TextStyle(fontWeight: FontWeight.bold, fontSize: 30, color: Colors.white),),
                  SizedBox(height: 10,),
                  Text("to use all feature of this app", style: TextStyle(color: Colors.white),)
                  ],
              ),
            ),
            
                Container(
                    margin: EdgeInsets.only(left: 40, right: 40, top: 40, bottom: 10),
                    decoration: BoxDecoration(
                    color: Colors.white,
                    borderRadius: BorderRadius.all(Radius.circular(20)),
                    border: Border.all(width: 3.0, color: const Color(0xFFb5b4b0))
                  ),
                  child: Column(
                    children: <Widget>[
                      SizedBox(height: 50),
                      EmailInputField(
                        hintText: "Enter your email", 
                        onChanged: (value) {},
                      ),
                      PasswordField(
                        onChanged: (value) {}
                      ),
                      SizedBox(height: 10),
                      DefaultButton(text: "Login", press: () {}),
                      SizedBox(height: 10),
                      Text('or', style: TextStyle(color: Color(0xFF2E3D5F), fontWeight: FontWeight.bold),),
                      Container(
                        padding: const EdgeInsets.all(10),
                        width: 200,
                        margin: EdgeInsets.only(left: 20, right: 20, bottom: 20, top: 10),
                        decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(20),
                          border: Border.all(width: 2.0, color: const Color(0xFF2E3D5F))
                        ),
                        child:
                          Row(
                            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                            children: [
                            SvgPicture.asset("resources/login/flat-color-icons_google.svg"),
                            Text("Login using Google",
                              style: TextStyle(
                            color: Color(0xFF2E3D5F),
                            fontWeight: FontWeight.bold)),
                          ]
                        )
                      )
                    ],
                  ),
                ),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
                Text(
                  "Don’t have an Account ? ",
                  style: TextStyle(color: Colors.white),
                ),
                GestureDetector(
                  onTap: () {},
                  child: Text(
                    "REGISTER HERE",
                    style: TextStyle(
                      color: Color(0xFF2E3D5F),
                      decoration: TextDecoration.underline,
                    ),
                  ),
                )
              ],
          ),
          ],
        )
       
        )
            )
        )
      ]
      )
    );
  }
}

