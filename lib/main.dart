import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:vertical/screens/register.dart';
import 'package:vertical/screens/splash.dart';
//import 'package:vertical/screens/onboarding.dart';
//import 'package:vertical/screens/login.dart';
//import 'package:vertical/screens/register.dart';
//import 'package:vertical/screens/splash.dart';
//import 'package:vertical/screens/onboarding.dart';

void main() async { 
  runApp(MyApp());
}
 
class MyApp extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
   return MaterialApp(
     title: "FLUTTER DEMO",
     theme: ThemeData(
       scaffoldBackgroundColor: Colors.white,
     ),
     home: Register()
   );
  }
}
