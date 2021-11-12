import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:vertical/screens/button.dart';
import 'package:vertical/screens/email_component.dart';
import 'package:vertical/screens/password_component.dart';
import 'package:file_picker/file_picker.dart';

class Register extends StatefulWidget {
  @override
  _RegisterState createState() => _RegisterState();
}

class _RegisterState extends State<Register> {
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
                  Text("Register", style: TextStyle(fontWeight: FontWeight.bold, fontSize: 30, color: Colors.white),),
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
                      GestureDetector(
                        onTap: () async{
                          final results = await FilePicker.platform.pickFiles(
                            allowMultiple: false,
                            type: FileType.custom,
                            allowedExtensions: ['png', 'jpg'],
                          );
                          if(results == null) {
                            ScaffoldMessenger.of(context).showSnackBar(
                              const SnackBar(
                                content: Text('No file selected'),
                              )
                            );
                            return null;
                          }
                          final path = results.files.single.path;
                          print(path);
                        
                          final fileName = results.files.single.name;
                          print(fileName);
                         
                        },
                        child: Container(
                        height: 50,
                        margin: EdgeInsets.only(left: 30, right: 30, bottom: 20, top: 10),
                        decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(45),
                          border: Border.all(width: 1.0, color: const Color(0xFF868FA0))
                        ),
                        child:
                          Row(
                            mainAxisAlignment: MainAxisAlignment.end,
                            children: [
                            Expanded(
                            child:Text("Select your avatar...",
                              style: TextStyle(
                            color: Color(0xFF868FA0)),
                            textAlign: TextAlign.center,)),
                            Image.asset(
                                'resources/login/avatar.png',
                                fit: BoxFit.fitHeight),
                          ]
                        )
                        
                      ),
                      ),
                      DefaultButton(text: "Register", press: () {}),
                      SizedBox(height: 10)
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

