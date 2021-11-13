import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:vertical/screens/button.dart';

class Onboard extends StatefulWidget{
  Onboarding createState()=> Onboarding();
}

class Onboarding extends State<Onboard>{
  int currPage = 0;
  PageController? _controller;
  @override
  void initState() {
    _controller = PageController(initialPage: 0);
    super.initState();
  }

  @override
  void dispose() {
    _controller!.dispose();
    super.dispose();
  }

  List<Map<String, String>> data = [
    {
      "text1": "First to know",
      "text2": "All news in one place, be the first \n to know last news",
      "svg": "resources/login/bro.svg",
      "text3": "Next"
    },
    {
      "text1": "Latest",
      "text2": "Update the latest news from \n trusted source",
      "svg": "resources/login/pana.svg",
      "text3": "Let's go"
    }
  ];
  @override
  Widget build(BuildContext context) {
   return Scaffold(
     body: SizedBox(
       width: double.infinity,
       child: Column(
         children: <Widget>[
          Expanded(
            flex: 2,
            child: PageView.builder(
              controller: _controller,
              onPageChanged: (value) {
                setState(() {
                  currPage = value;
                });
              },
              itemCount: 2,
              itemBuilder: (context, index) => 
               onboardingContent(
               textbutton: data[index]["text3"].toString(),
               svg: data[index]["svg"].toString(),
               text1: data[index]["text1"].toString(),
               text2: data[index]["text2"].toString(),
            ))
          ),
          Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: List.generate(2, (index) => surf(index: index))
          ),
        ]
       )
     )
     );
  }

  AnimatedContainer surf({int? index}) {
  return AnimatedContainer(
    duration: kThemeAnimationDuration,
    margin: EdgeInsets.only(top: 25, right: 5, bottom: 20),
    height: 6,
    width: currPage == index ? 22 : 12,
    decoration: BoxDecoration(
      color: currPage == index ? Color(0xFF2E3D5F) : Color(0xFF868FA0),
      borderRadius: BorderRadius.circular(3)
    ));
  }

  Column onboardingContent({String? svg, String? text1, String? text2, String? textbutton}) {
    return Column(
      children: <Widget>[
        Spacer(),
        SvgPicture.asset(svg!,
        fit: BoxFit.scaleDown),
        Spacer(),
        
        Text(
             text1!,
             textAlign: TextAlign.center,
             style: TextStyle(
               fontWeight: FontWeight.bold,
               fontSize: 18,
               color: Color(0xFF2E3D5F)
             )),
             Padding(
              padding: EdgeInsets.fromLTRB(0, 10, 0, 0),
            child: 
             Text(
             text2!,
             textAlign: TextAlign.center,
             style: TextStyle(
               color: Color(0xFF868FA0),
             )),),
             Spacer(flex: 1),
             DefaultButton(text: textbutton!,
             press: () {
               if(currPage == 1) {
                 print("GO TO YOUR HOME!!!");
               }
               else {
                 _controller!.nextPage(duration: const Duration(milliseconds: 250),
                  curve: Curves.easeInOutSine,);
               }
             }, widthsize: 0.7,),
            
      ],);
  }
  
}

