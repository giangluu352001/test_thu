import 'dart:async';

import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:vertical/screens/onboarding.dart';

class SplashScreen extends StatefulWidget {
  @override
  Splash createState() => Splash();
}

class Splash extends State<SplashScreen> {
  @override
  void initState() {
    super.initState();
    startTime();
  }
  void onboardRoute() {
    Navigator.pushReplacement(context, MaterialPageRoute(
      builder: (context) => Onboard()
    ));
  }
  startTime() async {
    return Timer(Duration(seconds: 3),onboardRoute);
  }
  @override
  Widget build(BuildContext context) {
    double size = MediaQuery.of(context).size.width;
    return Scaffold(
      backgroundColor: Color(0xFF2E3D5F),
      body: Center(
            child: Container(
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
              children: [
               Image.asset("resources/login/logo.png",
               fit: BoxFit.scaleDown, width: size * 0.2, height: size * 0.2),
               SizedBox(height: 10),
               Text("LOGO", style: TextStyle(fontSize: 18, color: Colors.white, fontWeight: FontWeight.bold),)
              ]
            ),
            )
          )
        );
  }
}
