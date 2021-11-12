import 'package:flutter/cupertino.dart';

class TextFieldInputEmail extends StatelessWidget {
  final Widget child;
  const TextFieldInputEmail({Key? key, required this.child}) : super(key: key);
  @override 
  Widget build(BuildContext context) {
    return Container(
      margin: EdgeInsets.symmetric(vertical: 10, horizontal: 25),
      padding: EdgeInsets.symmetric(horizontal: 30, vertical: 1),
      decoration: BoxDecoration(
        color: Color(0xFFEDEFF1),
        borderRadius: BorderRadius.circular(20)
      ),
      child: child,
    );
  }
}