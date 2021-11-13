import 'package:email_validator/email_validator.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:vertical/screens/button.dart';
import 'package:vertical/screens/register.dart';


class Login extends StatefulWidget {
  @override
  _LoginState createState() => _LoginState();
}

class _LoginState extends State<Login> {
  final _formKey = GlobalKey<FormState>();
  final _emailController = TextEditingController();
  String? username;
  String? password;
  bool _obscureText = true;
  void _toggle() {
    setState(() {
      _obscureText = !_obscureText;
    });
  }
  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
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
          SizedBox(height: size.height*0.1),
          Padding(
            padding: EdgeInsets.all(size.width* 0.03),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: <Widget>[
                  Text("Login", style: TextStyle(fontWeight: FontWeight.bold, fontSize: size.width*0.08, color: Colors.white),),
                  SizedBox(height: size.height*0.015,),
                  Text("to use all feature of this app", style: TextStyle(color: Colors.white),)
                  ],
              ),
            ),
            
                Container(
                    margin: EdgeInsets.only(left: size.width* 0.1, right: size.width* 0.1, top: size.width* 0.1, bottom: size.width* 0.025),
                    decoration: BoxDecoration(
                    color: Colors.white,
                    borderRadius: BorderRadius.all(Radius.circular(30)),
                    border: Border.all(width: 3.0, color: const Color(0xFFb5b4b0))
                  ),
                  child: Column(
                    children: [
                      Padding(
                        padding: EdgeInsets.all(size.width* 0.075),
                        child: Form(
                        key: _formKey,
                        child: Column(
                          children: [ 
                           TextFormField(
                                controller: _emailController,
                                textAlignVertical: TextAlignVertical.center,
                                cursorColor: Color(0xFF2E3D5F),
                                  decoration: InputDecoration(
                                    filled: true,
                                    fillColor: Color(0xFFEDEFF1),
                                    hintText: 'Email',
                                    border: UnderlineInputBorder(
                                      borderSide: BorderSide.none,
                                      borderRadius: BorderRadius.circular(20),
                                    ),
                                    prefixIcon: Icon(Icons.mail, color: Color(0xFF2E3D5F),),
                                    suffixIcon: _emailController.text.isEmpty
                                  ? Container(width: 0)
                                  : IconButton(
                                      icon: Icon(Icons.close, color: Color(0xFF2E3D5F),),
                                      onPressed: () => _emailController.clear(),
                                    ),
                            ),
                            keyboardType: TextInputType.emailAddress,
                            autofillHints: [AutofillHints.email],
                            validator: (email) => email != null && !EmailValidator.validate(email)
                                ? 'Please enter a valid email!' : null,
                        ),
                        SizedBox(height: size.height*0.03),
                        TextFormField(
                          obscureText: _obscureText,
                          textAlignVertical: TextAlignVertical.center,
                          cursorColor: Color(0xFF2E3D5F),
                            decoration: InputDecoration(
                          filled: true,
                          fillColor: Color(0xFFEDEFF1),
                          hintText: 'Password',
                          border: UnderlineInputBorder(
                            borderSide: BorderSide.none,
                            borderRadius: BorderRadius.circular(20),
                        ),
                        prefixIcon: Icon(Icons.lock, color: Color(0xFF2E3D5F),),
                        suffixIcon: IconButton(
                          icon: Icon(Icons.visibility, 
                          color: Color(0xFF2E3D5F),
                          ),
                          onPressed: _toggle,
                        )
                      ),
                      keyboardType: TextInputType.visiblePassword,
                  ),
                  SizedBox(height: size.height*0.03),
                      DefaultButton(text: "Login", press: () {
                      final form = _formKey.currentState!;
                      if(form.validate()) {
                          
                        }
                    }, widthsize: 0.5,),
                      SizedBox(height: size.height* 0.015),
                      Text('or', style: TextStyle(color: Color(0xFF2E3D5F), fontWeight: FontWeight.bold),),
                      Container(
                        width: size.width*0.5,
                        height: size.height* 0.065,
                        margin: EdgeInsets.only(left: size.height*0.01, right: size.height*0.01, bottom: size.height*0.01, top: size.height*0.01),
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
                    ),
                    ],
                  ),
                ),
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: <Widget>[
                Text(
                  "Don’t have an Account ? ",
                  style: TextStyle(color: Colors.white, fontWeight: FontWeight.w500),
                ),
                GestureDetector(
                  onTap: () {
                    Navigator.push(
                      context,
                      MaterialPageRoute(builder: (context) { return Register();})
                    );
                  },
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

