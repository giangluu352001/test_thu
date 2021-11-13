import 'dart:io';

import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:image_picker/image_picker.dart';
import 'package:vertical/screens/button.dart';
import 'package:vertical/screens/login.dart';
import 'package:email_validator/email_validator.dart';
//import 'package:file_picker/file_picker.dart';

class Register extends StatefulWidget {
  @override
  _RegisterState createState() => _RegisterState();
}

class _RegisterState extends State<Register> {
  final _formKey = GlobalKey<FormState>();
  final _emailController = TextEditingController();
  String? email;
  String? password;
  File? image;
  bool uploadSuccess = false;
  bool _obscureText = true;
  bool shouldDisplay = false;
  void _toggle() {
    setState(() {
      _obscureText = !_obscureText;
    });
  }
  Future pickImage(ImageSource source) async {
      try{
      final image = await ImagePicker().pickImage(source: source);
      if(image == null) return;
      final imageTemp = File(image.path);
      setState(() => this.image = imageTemp);
      setState(() => this.uploadSuccess = true);
      } on PlatformException catch(e) {
        print("Failed to pick image: $e");
      }
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
              minHeight: size.height,
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
                  Text("Register", style: TextStyle(fontWeight: FontWeight.bold, fontSize: size.width*0.08, color: Colors.white),),
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
                            onSaved: (val) => email = val,
                        ),
                        SizedBox(height: size.height*0.03),
                        TextFormField(
                          validator: (val) => val!.length < 6 ? 'Password too short!' : null,
                          onSaved: (val) => password = val,
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
                        ]
                      )
                    )
                      ),
                      GestureDetector(
                        onTap: () => pickImage(ImageSource.gallery),
                        child: Container(
                        height: size.height* 0.07,
                        margin: EdgeInsets.only(left: size.width* 0.075, right: size.width* 0.075, bottom: 0.075),
                        decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(50),
                          border: Border.all(width: 1.0, color: const Color(0xFF868FA0))
                        ),
                        child:
                          Row(
                            mainAxisAlignment: MainAxisAlignment.end,
                            children: [
                            Expanded(
                            child: uploadSuccess ? Text("Upload successfully!", style: TextStyle(
                              fontWeight: FontWeight.bold, color: Colors.green, fontSize: 14,
                            ),textAlign: TextAlign.center, overflow: TextOverflow.ellipsis) : Text("Select your avatar...",
                              style: TextStyle(
                            color: Color(0xFF868FA0), overflow: TextOverflow.ellipsis),
                            textAlign: TextAlign.center,)),
                            this.image == null ? Image.asset(
                                'resources/login/avatar.png',
                                fit: BoxFit.fitHeight) : ClipOval( 
                                  child: Image.file(
                                  image!, width: size.height* 0.07, height: size.height* 0.07, fit: BoxFit.cover
                                )
                              )
                          ]
                        )
                        
                      ),
                      ),
                      SizedBox(height: size.height*0.03),
                      DefaultButton(text: "Register", press: () {
                        if(_formKey.currentState!.validate()) {
                          setState(() {
                            shouldDisplay = !shouldDisplay;
                          });
                        }
                      }, widthsize: 0.5),
                      SizedBox(height: size.height*0.03),
                      shouldDisplay ? Text('Register successfully! Login now', style: TextStyle(color: Colors.green),) : Text(""),
                    ],
                  ),
                ),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
                Text(
                  "Already have account ? ",
                  style: TextStyle(color: Colors.white, fontWeight: FontWeight.w500),
                ),
                GestureDetector(
                  onTap: () {
                    Navigator.push(
                      context,
                      MaterialPageRoute(builder: (context) { return Login();})
                    );
                  },
                  child: Text(
                    "LOGIN HERE",
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

